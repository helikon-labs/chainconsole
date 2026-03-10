// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from '../types.js';
import type { EndpointOption, LinkOption } from './types.js';

function expandLinked (input: LinkOption[]): LinkOption[] {
  const valueRelay = input.map(({ value }) => value);

  return input.reduce((result: LinkOption[], entry): LinkOption[] => {
    result.push(entry);

    return entry.linked
      ? result.concat(
        expandLinked(entry.linked).map((child): LinkOption => {
          child.genesisHashRelay = entry.genesisHash;
          child.isChild = true;
          child.textRelay = input.length
            ? input[0].text
            : undefined;
          child.valueRelay = valueRelay;

          if (entry.ui?.identityIcon && child.paraId && child.paraId < 2000) {
            if (!child.ui) {
              child.ui = { identityIcon: entry.ui.identityIcon };
            } else if (!child.ui.identityIcon) {
              child.ui.identityIcon = entry.ui.identityIcon;
            }
          }

          return child;
        })
      )
      : result;
  }, []);
}

function expandEndpoint (t: TFunction, { dnslink, genesisHash, homepage, info, isChild, isDisabled, isPeople, isPeopleForIdentity, linked, paraId, providers, relayName, teleport, text, ui }: EndpointOption, firstOnly: boolean): LinkOption[] {
  const base = {
    genesisHash,
    homepage,
    info,
    isChild,
    isDisabled,
    isPeople,
    isPeopleForIdentity,
    paraId,
    providers: providers.map((provider) => provider.url),
    relayName,
    teleport,
    text,
    ui
  };

  const result = providers
    .filter((_, index) => !firstOnly || index === 0)
    .map((provider, index): LinkOption => ({
      ...base,
      dnslink: index === 0 ? dnslink : undefined,
      isAvailable: provider.isAvailable,
      isLightClient: provider.url.startsWith('light://'),
      isRelay: false,
      textBy: provider.url.startsWith('light://')
        ? t('lightclient.experimental', 'light client (experimental)', { ns: 'apps-config' })
        : t('rpc.hosted.via', 'via {{host}}', { ns: 'apps-config', replace: { host: provider.name } }),
      value: provider.url
    }))
    .sort((a, b) => {
      const lightDiff = (a.isLightClient ? 1 : 0) - (b.isLightClient ? 1 : 0);

      if (lightDiff !== 0) {
        return lightDiff;
      }

      const availDiff = (a.isAvailable === false ? 1 : 0) - (b.isAvailable === false ? 1 : 0);

      return availDiff !== 0 ? availDiff : a.textBy.toLocaleLowerCase().localeCompare(b.textBy.toLocaleLowerCase());
    });

  if (linked) {
    const last = result[result.length - 1];
    const options: LinkOption[] = [];

    linked
      .filter(({ paraId }) => paraId)
      .forEach((o) =>
        options.push(...expandEndpoint(t, o, firstOnly))
      );

    last.isRelay = true;
    last.linked = options;
  }

  return expandLinked(result);
}

export function expandEndpoints (t: TFunction, input: EndpointOption[], firstOnly: boolean): LinkOption[] {
  return input
    .reduce((all: LinkOption[], e) =>
      all.concat(expandEndpoint(t, e, firstOnly)), []);
}

export function getTeleports (input: EndpointOption[]): number[] {
  return input
    .filter(({ teleport }) => !!teleport && teleport[0] === -1)
    .map(({ paraId }) => paraId)
    .filter((id): id is number => !!id);
}
