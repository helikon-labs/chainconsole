// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { assert, isString } from '@polkadot/util';
import { WebSocket } from '@polkadot/x-ws';

import { createWsEndpoints } from '../endpoints/index.js';
import { fetchJson } from './fetch.js';

interface Endpoint {
  name: string;
  ws: string;
  isAvailable: boolean;
}

interface DnsResponse {
  Answer?: { name: string }[];
  Question: { name: string }[];
}

const TIMEOUT = 20_000;

function noopHandler () {
  // ignore
}

describe('check endpoints', (): void => {
  const checks = createWsEndpoints()
    .filter(({ value }) =>
      value &&
      isString(value) &&
      !value.includes('127.0.0.1') &&
      !value.startsWith('light://')
    )
    .map(({ isAvailable, text, value }): Partial<Endpoint> => ({
      isAvailable,
      name: text as string,
      ws: value
    }))
    .filter((v): v is Endpoint => !!v.ws);

  for (const { isAvailable, name, ws: endpoint } of checks) {
    it(`${name} @ ${endpoint}`, async (): Promise<void> => {
      const [,, hostWithPort] = endpoint.split('/');
      const [host] = hostWithPort.split(':');
      let websocket: WebSocket | null = null;
      let closeTimerId: ReturnType<typeof setTimeout> | null = null;

      await fetchJson<DnsResponse>(`https://dns.google/resolve?name=${host}`)
        .then((json) => {
          if (!json?.Answer) {
            if (isAvailable) {
              console.error(`  ${name} @ ${endpoint}: No DNS entry`);
              throw new Error('No DNS entry');
            }

            return undefined; // expected: unavailable endpoint has no DNS entry
          }

          return new Promise<string | undefined>((resolve, reject): void => {
            const rejectWithLog = (message: string): void => {
              console.error(`  ${name} @ ${endpoint}: ${message}`);
              reject(new Error(message));
            };

            websocket = new WebSocket(endpoint);

            websocket.onclose = (event: { code: number; reason: string }): void => {
              if (isAvailable) {
                rejectWithLog(`Disconnected, code: '${event.code}' reason: '${event.reason}'`);
              } else {
                resolve(undefined);
              }
            };

            websocket.onerror = (): void => {
              if (isAvailable) {
                rejectWithLog('Connection error');
              } else {
                resolve(undefined); // expected: unavailable endpoint couldn't connect
              }
            };

            websocket.onopen = (): void => {
              websocket?.send('{"id":"1","jsonrpc":"2.0","method":"system_health","params":[]}');
            };

            websocket.onmessage = (message: { data: string }): void => {
              try {
                const result = (JSON.parse(message.data) as { result?: string }).result;

                assert(result !== undefined, 'Invalid response - does not contain health data');

                if (!isAvailable) {
                  rejectWithLog('Endpoint was marked unavailable - it is available now');
                } else {
                  resolve(result);
                }
              } catch (e) {
                if (isAvailable) {
                  rejectWithLog((e as Error).message);
                } else {
                  resolve(undefined);
                }
              }
            };

            closeTimerId = setTimeout(
              () => {
                closeTimerId = null;

                if (isAvailable) {
                  rejectWithLog('Connection timeout');
                } else {
                  resolve(undefined); // expected: unavailable endpoint timed out
                }
              },
              TIMEOUT
            );
          });
        })
        .finally(() => {
          if (closeTimerId) {
            clearTimeout(closeTimerId);
            closeTimerId = null;
          }

          if (websocket) {
            websocket.onclose = noopHandler;
            websocket.onerror = noopHandler;
            websocket.onopen = noopHandler;
            websocket.onmessage = noopHandler;

            try {
              websocket.close();
            } catch (e) {
              console.error((e as Error).message);
            }

            websocket = null;
          }
        });
    });
  }
});
