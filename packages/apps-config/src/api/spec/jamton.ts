// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import { assetTransactionPaymentApi, dex, doton, dryRunApi, inboundQueue, limits, outboundQueue, primitives, staking } from '@jamton/parachain-ts-interfaces/interfaces/definitions';

const types = {
  ...assetTransactionPaymentApi.types,
  ...dex.types,
  ...doton.types,
  ...dryRunApi.types,
  ...inboundQueue.types,
  ...limits.types,
  ...outboundQueue.types,
  ...primitives.types,
  ...staking.types
};
const runtime = {
  ...doton.runtime,
  ...staking.runtime,
  ...limits.runtime,
  ...assetTransactionPaymentApi.runtime,
  ...dryRunApi.runtime,
  ...inboundQueue.runtime,
  ...outboundQueue.runtime
};

/* eslint-disable sort-keys */
const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types
    }
  ],
  runtime
};

export default definitions;
