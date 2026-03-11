// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { isString } from '@polkadot/util';
import { WebSocket } from '@polkadot/x-ws';

import { createWsEndpoints } from '../endpoints/index.js';
import { fetchJson } from './fetch.js';

interface DnsResponse {
  Answer?: { name: string }[];
  Question: { name: string }[];
}

const TIMEOUT = 60_000;
const CONCURRENCY = 10;
const ENDPOINTS_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../endpoints');

function noopHandler () {
  // ignore
}

async function checkEndpoint (url: string): Promise<boolean> {
  const [,, hostWithPort] = url.split('/');
  const [host] = hostWithPort.split(':');

  try {
    const json = await fetchJson<DnsResponse>(`https://dns.google/resolve?name=${host}`);

    if (!json?.Answer) {
      return false;
    }

    return await new Promise<boolean>((resolve) => {
      let settled = false;
      let timerId: ReturnType<typeof setTimeout> | null = null;
      let ws: InstanceType<typeof WebSocket> | null = null;

      const settle = (available: boolean): void => {
        if (settled) {
          return;
        }

        settled = true;

        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }

        if (ws) {
          ws.onclose = noopHandler;
          ws.onerror = noopHandler;
          ws.onopen = noopHandler;
          ws.onmessage = noopHandler;

          try {
            ws.close();
          } catch {
            // ignore
          }

          ws = null;
        }

        resolve(available);
      };

      ws = new WebSocket(url);
      ws.onclose = () => settle(false);
      ws.onerror = () => settle(false);
      ws.onopen = () => ws?.send('{"id":"1","jsonrpc":"2.0","method":"system_health","params":[]}');

      ws.onmessage = (msg: { data: string }): void => {
        try {
          const result = (JSON.parse(msg.data) as { result?: unknown }).result;

          settle(result !== undefined);
        } catch {
          settle(false);
        }
      };

      timerId = setTimeout(() => settle(false), TIMEOUT);
    });
  } catch {
    return false;
  }
}

async function runWithConcurrency<T> (tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  const results = new Array<T>(tasks.length);
  let index = 0;

  const worker = async (): Promise<void> => {
    while (index < tasks.length) {
      const i = index++;

      results[i] = await tasks[i]();
    }
  };

  await Promise.all(Array.from({ length: limit }, worker));

  return results;
}

function updateSourceFiles (changeMap: Map<string, boolean>): void {
  const files = fs.readdirSync(ENDPOINTS_DIR)
    .filter((f) => f.endsWith('.ts') && !f.endsWith('.spec.ts'))
    .map((f) => path.join(ENDPOINTS_DIR, f));

  for (const file of files) {
    const lines = fs.readFileSync(file, 'utf-8').split('\n');
    let changed = false;

    for (let i = 0; i < lines.length; i++) {
      const urlMatch = lines[i].match(/^\s*url:\s*'(wss:\/\/[^']+)'/);

      if (!urlMatch) {
        continue;
      }

      const url = urlMatch[1];
      const newValue = changeMap.get(url);

      if (newValue === undefined) {
        continue;
      }

      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        const availMatch = lines[j].match(/^(\s*isAvailable:\s*)(true|false)(,?.*)$/);

        if (!availMatch) {
          continue;
        }

        const current = availMatch[2] === 'true';

        if (current !== newValue) {
          lines[j] = `${availMatch[1]}${newValue},`;
          changed = true;
        }

        break;
      }
    }

    if (changed) {
      fs.writeFileSync(file, lines.join('\n'), 'utf-8');
      console.log(`  Updated ${path.basename(file)}`);
    }
  }
}

async function main (): Promise<void> {
  const endpoints = createWsEndpoints()
    .filter(({ value }) =>
      value &&
      isString(value) &&
      !value.includes('127.0.0.1') &&
      !value.startsWith('light://')
    )
    .map(({ isAvailable, text, value }) => ({
      isAvailable,
      name: text as string,
      url: value
    }));

  console.log(`Checking ${endpoints.length} endpoints with concurrency ${CONCURRENCY}...`);

  const tasks = endpoints.map(({ name, url }) =>
    async () => {
      const available = await checkEndpoint(url);

      process.stdout.write(available ? '.' : 'x');

      return { available, name, url };
    }
  );

  const results = await runWithConcurrency(tasks, CONCURRENCY);

  console.log('\n');

  const changeMap = new Map<string, boolean>();
  const toAvailable: string[] = [];
  const toUnavailable: string[] = [];

  for (let i = 0; i < endpoints.length; i++) {
    const { isAvailable: was, url } = endpoints[i];
    const { available: now, name } = results[i];

    if (was !== now) {
      changeMap.set(url, now);

      if (now) {
        toAvailable.push(`  [false → true ] ${name} @ ${url}`);
      } else {
        toUnavailable.push(`  [true  → false] ${name} @ ${url}`);
      }
    }
  }

  if (changeMap.size === 0) {
    console.log('No availability changes detected.');

    return;
  }

  if (toAvailable.length) {
    console.log('Now available (mark isAvailable: true):');
    toAvailable.forEach((l) => console.log(l));
  }

  if (toUnavailable.length) {
    console.log('Now unavailable (mark isAvailable: false):');
    toUnavailable.forEach((l) => console.log(l));
  }

  console.log('\nUpdating source files...');

  try {
    updateSourceFiles(changeMap);
    console.log(`Done. ${changeMap.size} endpoint(s) updated.`);
  } catch (e) {
    console.error('Failed to update source files:', (e as Error).message);
  }
}

main().catch((e: unknown) => {
  // Only truly unrecoverable errors (module load failure, etc.) reach here.
  console.error('Fatal error:', (e as Error).message);
  process.exit(1);
});
