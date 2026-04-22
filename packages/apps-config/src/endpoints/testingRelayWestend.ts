// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { WESTEND_GENESIS } from '../api/constants.js';
import { chainsBulletinPNG, chainsCoretimePolkadotSVG, chainsKaruraSVG, chainsPeoplePolkadotSVG, chainsStandardPNG } from '../ui/logos/chains/index.js';
import { nodesAssetHubSVG, nodesBridgeHubSVG, nodesCentrifugePNG, nodesCollectivesSVG, nodesIntegriteeSVG, nodesInterlaySVG, nodesKhalaSVG, nodesKylinPNG, nodesMoonshadowPNG, nodesSubstrateHexagonSVG, nodesWestendColourSVG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasWestend: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'bulletin',
    paraId: 2487,
    providers: [{
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-bulletin-rpc.polkadot.io'
    }],
    text: 'Bulletin (Westend)',
    ui: {
      color: '#6B2D84',
      logo: chainsBulletinPNG
    }
  },
  {
    info: 'charcoal',
    paraId: 2086,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8219
      name: 'Centrifuge',
      url: 'wss://fullnode-collator.charcoal.centrifuge.io'
    }],
    text: 'Charcoal',
    ui: {
      logo: nodesCentrifugePNG
    }
  },
  {
    info: 'integritee',
    paraId: 2081,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8937
      name: 'Integritee',
      url: 'wss://teerw1.integritee.network'
    }],
    text: 'Integritee Network',
    ui: {
      color: '#658ea9',
      logo: nodesIntegriteeSVG
    }
  },
  {
    info: 'interlay',
    paraId: 2094,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6261
      name: 'Interlay',
      url: 'wss://api-westend.interlay.io/parachain'
    }],
    text: 'Interlay',
    ui: {
      logo: nodesInterlaySVG
    }
  },
  {
    info: 'moonshadow',
    paraId: 2002,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6181
      name: 'PureStake',
      url: 'wss://wss.moonshadow.testnet.moonbeam.network'
    }],
    text: 'Moonshadow',
    ui: {
      color: '#53cbc9',
      logo: nodesMoonshadowPNG
    }
  },
  {
    info: 'westendPenpal',
    isPeopleForIdentity: true,
    paraId: 2042,
    providers: [{
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-penpal-rpc.polkadot.io'
    }],
    relayName: 'westend',
    text: 'Penpal',
    ui: {
      color: '#964b00',
      logo: nodesSubstrateHexagonSVG
    }
  },
  {
    homepage: 'https://kylin.network/',
    info: 'westendPichiu',
    paraId: 2112,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8710
      name: 'Kylin Network',
      url: 'wss://westend.kylin-node.co.uk'
    }],
    text: 'Pichiu',
    ui: {
      logo: nodesKylinPNG
    }
  },
  {
    info: 'westendStandard',
    paraId: 2094,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8525
      name: 'Standard Protocol',
      url: 'wss://rpc.westend.standard.tech'
    }],
    text: 'Standard',
    ui: {
      logo: chainsStandardPNG
    }
  },
  {
    info: 'karura',
    paraId: 2005,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/5830
      name: 'Acala Foundation',
      url: 'wss://karura-westend-rpc.aca-staging.network'
    }],
    text: 'Wendala',
    ui: {
      logo: chainsKaruraSVG
    }
  },
  {
    info: 'whala',
    paraId: 2013,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6181
      name: 'Phala',
      url: 'wss://whala.phala.network/ws'
    }],
    text: 'Whala',
    ui: {
      color: '#03f3f3',
      logo: nodesKhalaSVG
    }
  }
];

export const testParasWestendCommon: EndpointOption[] = [
  {
    info: 'WestendAssetHub',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://asset-hub-westend-rpc.n.dwellir.com'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://westmint.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-asset-hub-rpc.polkadot.io'
    }, {
      isAvailable: true,
      name: 'Stakeworld',
      url: 'wss://wnd-rpc.stakeworld.io/assethub'
    }],
    relayName: 'westend',
    teleport: [-1, 1002, 1001, 1005, 1004],
    text: 'Asset Hub',
    ui: {
      color: '#77bb77',
      logo: nodesAssetHubSVG
    }
  },
  {
    info: 'westendBridgeHub',
    isPeopleForIdentity: true,
    paraId: 1002,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://bridge-hub-westend-rpc.n.dwellir.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9960
      name: 'OnFinality',
      url: 'wss://bridgehub-westend.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-bridge-hub-rpc.polkadot.io'
    }],
    relayName: 'westend',
    teleport: [-1, 1000],
    text: 'Bridge Hub',
    ui: {
      logo: nodesBridgeHubSVG
    }
  },
  {
    info: 'westendCollectives',
    isPeopleForIdentity: true,
    paraId: 1001,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://collectives-westend-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-collectives-rpc.polkadot.io'
    }],
    relayName: 'westend',
    teleport: [-1, 1000],
    text: 'Collectives',
    ui: {
      color: '#e6777a',
      logo: nodesCollectivesSVG
    }
  },
  {
    info: 'westendCoretime',
    isPeopleForIdentity: true,
    paraId: 1005,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://coretime-westend-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-coretime-rpc.polkadot.io'
    }],
    relayName: 'westend',
    teleport: [-1, 1000],
    text: 'Coretime',
    ui: {
      color: '#f19135',
      logo: chainsCoretimePolkadotSVG
    }
  },
  {
    info: 'westendPeople',
    isPeople: true,
    isPeopleForIdentity: false,
    paraId: 1004,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://people-westend-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://westend-people-rpc.polkadot.io'
    }],
    relayName: 'westend',
    teleport: [-1, 1000],
    text: 'People',
    ui: {
      color: '#ec03fc',
      logo: chainsPeoplePolkadotSVG
    }
  }
];

export const testRelayWestend: EndpointOption = {
  dnslink: 'westend',
  genesisHash: WESTEND_GENESIS,
  info: 'westend',
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...testParasWestendCommon,
    ...testParasWestend
  ],
  providers: [{
    isAvailable: false,
    name: 'Dwellir',
    url: 'wss://westend-rpc.n.dwellir.com'
  }, {
    isAvailable: false,
    name: 'LuckyFriday',
    url: 'wss://rpc-westend.luckyfriday.io'
  }, {
    isAvailable: true,
    name: 'OnFinality',
    url: 'wss://westend.api.onfinality.io/public-ws'
  }, {
    isAvailable: true,
    name: 'Parity',
    url: 'wss://westend-rpc.polkadot.io'
  }, {
    isAvailable: true,
    name: 'RadiumBlock',
    url: 'wss://westend.public.curie.radiumblock.co/ws'
  }, {
    isAvailable: true,
    name: 'Stakeworld',
    url: 'wss://wnd-rpc.stakeworld.io'
  }],
  teleport: getTeleports(testParasWestendCommon),
  text: 'Westend Relay',
  ui: {
    color: '#da68a7',
    identityIcon: 'polkadot',
    logo: nodesWestendColourSVG
  }
};
