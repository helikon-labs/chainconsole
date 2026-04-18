// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { ZKVERIFY_GENESIS } from '../api/constants.js';
import { chains3dpassSVG, chainsAnalogSVG, chainsBittensorPNG, chainsBulletinPNG, chainsChainflipPNG, chainsCommuneaiPNG, chainsCreditcoinPNG, chainsDebioSVG, chainsFragnovaPNG, chainsJurPNG, chainsLiberlandPNG, chainsLogionPNG, chainsMyriadPNG, chainsQfNetworkPNG, chainsSpannerPNG, chainsTanglePNG, chainsTorusPNG, chainsVaraPNG, chainsVtbPNG } from '../ui/logos/chains/index.js';
import { nodesAresOdysseySVG, nodesAutonomysPNG, nodesCereSVG, nodesChainxSVG, nodesCompetitorsClubPNG, nodesCrownSterlingPNG, nodesCrustSVG, nodesDatahighwayPNG, nodesDockPNG, nodesEdgewareWhitePNG, nodesEfinitySVG, nodesElysiumPNG, nodesHanyonycashPNG, nodesHumanodePNG, nodesInnovatorPNG, nodesJoystreamSVG, nodesKulupuSVG, nodesKusariSVG, nodesMathSVG, nodesMinixPNG, nodesNftmartPNG, nodesNodleSVG, nodesPolkadexSVG, nodesPolymeshSVG, nodesRiochainSVG, nodesSherpaxPNG, nodesSoraSubstrateSVG, nodesStafiPNG, nodesSubgameSVG, nodesSwapdexSVG, nodesTanssiSVG, nodesTernoaSVG, nodesThebifrostPNG, nodesTscsPNG, nodesUniartsPNG, nodesUnitnetworkPNG, nodesVFlowPNG, nodesZkVerifyPNG } from '../ui/logos/nodes/index.js';

export * from './productionRelayKusama.js';
export * from './productionRelayPolkadot.js';

export const zkVerifyParas: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'VFlow',
    paraId: 1,
    providers: [{
      isAvailable: true,
      name: 'zkVerify',
      url: 'wss://vflow-rpc.zkverify.io'
    }],
    relayName: 'zkVerify',
    text: 'VFlow',
    ui: {
      color: '#5C72FF',
      logo: nodesVFlowPNG
    }
  }
];

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: '3dpass',
    providers: [{
      isAvailable: false,
      name: '3dpass',
      url: 'wss://rpc.3dpass.org'
    }, {
      isAvailable: false,
      name: 'Lzmz',
      url: 'wss://rpc.p3d.top'
    }],
    text: '3DPass',
    ui: {
      color: '#323232',
      logo: chains3dpassSVG
    }
  },
  {
    homepage: 'https://analog.one',
    info: 'analog-timechain',
    providers: [{
      isAvailable: true,
      name: 'Analog One',
      url: 'wss://rpc.timechain.analog.one'
    }],
    text: 'Analog Timechain',
    ui: {
      color: '#5d3ef8',
      identityIcon: 'beachball',
      logo: chainsAnalogSVG
    }
  },
  {
    info: 'Ares Odyssey',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10411
      name: 'Ares Protocol',
      url: 'wss://odyssey.aresprotocol.io'
    }],
    text: 'Ares Odyssey',
    ui: {
      color: '#1295F0',
      logo: nodesAresOdysseySVG
    }
  },
  {
    info: 'autonomys-mainnet',
    providers: [{
      isAvailable: true,
      name: 'Foundation',
      url: 'wss://rpc.mainnet.subspace.foundation/ws'
    }, {
      isAvailable: true,
      name: 'Labs',
      url: 'wss://rpc.mainnet.autonomys.xyz/ws'
    }],
    text: 'Autonomys',
    ui: {
      color: '#5870B3',
      logo: nodesAutonomysPNG
    }
  },
  {
    info: 'autonomys-mainnet-evm',
    providers: [{
      isAvailable: true,
      name: 'Labs',
      url: 'wss://auto-evm.mainnet.autonomys.xyz/ws'
    }],
    text: 'Autonomys EVM',
    ui: {
      color: '#5870B3',
      logo: nodesAutonomysPNG
    }
  },
  {
    info: 'thebifrost-mainnet',
    providers: [{
      isAvailable: true,
      name: 'Pilab #1',
      url: 'wss://public-01.mainnet.bifrostnetwork.com/wss'
    }, {
      isAvailable: true,
      name: 'Pilab #2',
      url: 'wss://public-02.mainnet.bifrostnetwork.com/wss'
    }],
    text: 'Bifrost Mainnet',
    ui: {
      color: '#FF474C',
      logo: nodesThebifrostPNG
    }
  },
  {
    info: 'bittensor',
    providers: [{
      isAvailable: true,
      name: 'Latent Holdings (Lite)',
      url: 'wss://lite.sub.latent.to:443'
    }, {
      isAvailable: true,
      name: 'OnFinality (Archive)',
      url: 'wss://bittensor-finney.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Opentensor Fdn (Archive)',
      url: 'wss://entrypoint-finney.opentensor.ai:443'
    }],
    text: 'Bittensor',
    ui: {
      color: '#252525',
      logo: chainsBittensorPNG
    }
  },
  {
    info: 'bulletin',
    providers: [{
      isAvailable: false,
      name: 'Amforc',
      url: 'wss://bulletin.rpc.amforc.com'
    }, {
      isAvailable: false,
      name: 'Interweb',
      url: 'wss://rpc.interweb-it.com/bulletin'
    }, {
      isAvailable: false,
      name: 'TurboFlakes',
      url: 'wss://bulletin.rpc.turboflakes.io'
    }, {
      isAvailable: false,
      name: 'Web3 Foundation',
      url: 'wss://bulletin-rpc.w3f.community'
    }],
    text: 'Bulletin',
    ui: {
      color: '#6B2D84',
      logo: chainsBulletinPNG
    }
  },
  {
    info: 'creditcoin-classic',
    providers: [{
      isAvailable: true,
      name: 'Creditcoin Foundation',
      url: 'wss://mainnet.creditcoin.network/ws'
    }],
    text: 'CC Enterprise',
    ui: {
      color: '#2D353F',
      logo: chainsCreditcoinPNG
    }
  },
  {
    info: 'cere',
    providers: [{
      isAvailable: true,
      name: 'Cere Network',
      url: 'wss://archive.mainnet.cere.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9828
      name: 'Republic Crypto | Runtime',
      url: 'wss://mainnet.cere-archive.republiccrypto-runtime.com:444'
    }],
    text: 'Cere Network',
    ui: {
      color: '#B7AEFF',
      logo: nodesCereSVG
    }
  },
  {
    info: 'chainflip',
    providers: [{
      isAvailable: true,
      name: 'chainflip',
      url: 'wss://mainnet-archive.chainflip.io'
    }],
    text: 'Chainflip',
    ui: {
      color: '#111111',
      logo: chainsChainflipPNG
    }
  },
  {
    info: 'chainx',
    providers: [{
      isAvailable: true,
      name: 'ChainX',
      url: 'wss://mainnet.chainx.org/ws'
    }],
    text: 'ChainX',
    ui: {
      color: '#F6C94A',
      logo: nodesChainxSVG
    }
  },
  {
    info: 'communeai',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11950
      name: 'Bitconnect',
      url: 'wss://commune-api-node-1.communeai.net'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://commune.api.onfinality.io/public-ws'
    }],
    text: 'Commune AI',
    ui: {
      color: '#060606',
      logo: chainsCommuneaiPNG
    }
  },
  {
    info: 'competitors-club',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8263
      name: 'Competitors Club',
      url: 'wss://node0.competitors.club/wss'
    }],
    text: 'Competitors Club',
    ui: {
      color: '#213830',
      logo: nodesCompetitorsClubPNG
    }
  },
  {
    info: 'creditcoin',
    providers: [{
      isAvailable: true,
      name: 'Creditcoin Foundation',
      url: 'wss://mainnet3.creditcoin.network'
    }],
    text: 'Creditcoin',
    ui: {
      color: '#2D353F',
      logo: chainsCreditcoinPNG
    }
  },
  {
    info: 'crown-sterling',
    providers: [{
      isAvailable: false,
      name: 'Crown Sterling',
      url: 'wss://blockchain.crownsterling.io'
    }],
    text: 'Crown Sterling',
    ui: {
      color: '#13264b',
      logo: nodesCrownSterlingPNG
    }
  },
  {
    info: 'crust',
    providers: [{
      isAvailable: true,
      name: 'Crust Network',
      url: 'wss://rpc.crust.network'
    }, {
      isAvailable: true,
      name: 'Crust Network APP',
      url: 'wss://rpc.crustnetwork.app'
    }, {
      isAvailable: true,
      name: 'Crust Network CC',
      url: 'wss://rpc.crustnetwork.cc'
    }, {
      isAvailable: true,
      name: 'Crust Network XYZ',
      url: 'wss://rpc.crustnetwork.xyz'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://crust.api.onfinality.io/public-ws'
    }],
    text: 'Crust Network',
    ui: {
      color: '#ff8812',
      logo: nodesCrustSVG
    }
  },
  {
    info: 'debio',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10118
      name: 'DeBio',
      url: 'wss://ws-rpc.debio.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11234
      name: 'Octopus',
      url: 'wss://gateway.mainnet.octopus.network/debionetwork/ae48005a0c7ecb4053394559a7f4069e'
    }],
    text: 'DeBio',
    ui: {
      color: '#FF56E0',
      logo: chainsDebioSVG
    }
  },
  {
    info: 'dock-pos-mainnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11460
      name: 'Dock Association',
      url: 'wss://mainnet-node.dock.io'
    }],
    text: 'Dock',
    ui: {
      logo: nodesDockPNG
    }
  },
  {
    info: 'edgeware',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10373
      name: 'Commonwealth Labs',
      url: 'wss://mainnet2.edgewa.re'
    }, {
      isAvailable: false,
      name: 'JelliedOwl Bangalore',
      url: 'wss://edgeware-rpc3.jelliedowl.net'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9795
      name: 'OnFinality',
      url: 'wss://edgeware.api.onfinality.io/public-ws'
    }],
    text: 'Edgeware',
    ui: {
      color: '#111111',
      logo: nodesEdgewareWhitePNG
    }
  },
  {
    info: 'efinity',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/pull/6761
      name: 'Efinity',
      url: 'wss://rpc.efinity.io'
    }],
    text: 'Efinity',
    ui: {
      color: '#496ddb',
      logo: nodesEfinitySVG
    }
  },
  {
    info: 'elysium',
    providers: [{
      isAvailable: true,
      name: 'Elysium',
      url: 'wss://ws.elysiumchain.tech'
    }],
    text: 'Elysium',
    ui: {
      color: '#140533',
      logo: nodesElysiumPNG
    }
  },
  {
    info: 'fragnova',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
      name: 'Fragnova Network',
      url: 'wss://ws.fragnova.network'
    }],
    text: 'Fragnova', // The text to display on the dropdown
    ui: {
      color: '#6b35a8',
      logo: chainsFragnovaPNG
    }
  },
  {
    info: 'hanonycash',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/runs/2755409009?check_suite_focus=true
      name: 'Hanonycash',
      url: 'wss://rpc.hanonycash.com'
    }],
    text: 'Hanonycash',
    ui: {
      color: '#0099CC',
      logo: nodesHanyonycashPNG
    }
  },
  {
    info: 'humanode',
    providers: [{
      isAvailable: true,
      name: 'Humanode',
      url: 'wss://explorer-rpc-ws.mainnet.stages.humanode.io'
    }],
    text: 'Humanode',
    ui: {
      logo: nodesHumanodePNG
    }
  },
  {
    info: 'innovatorchain',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10373
      name: 'Innovator',
      url: 'wss://rpc.innovatorchain.com'
    }],
    text: 'Innovator Chain',
    ui: {
      color: '#0067F4',
      logo: nodesInnovatorPNG
    }
  },
  {
    info: 'joystream',
    providers: [{
      isAvailable: false,
      name: 'Joyutils',
      url: 'wss://rpc.joyutils.org'
    }, {
      isAvailable: true,
      name: 'Jsgenesis',
      url: 'wss://rpc.joystream.org'
    }, {
      isAvailable: true,
      name: 'l1.media',
      url: 'wss://rpc.l1.media'
    }],
    text: 'Joystream',
    ui: {
      color: '#4038FF',
      logo: nodesJoystreamSVG
    }
  },
  {
    info: 'jur',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10289
      name: 'Iceberg Nodes',
      url: 'wss://jur-mainnet-archive-rpc-1.icebergnodes.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
      name: 'Simply Staking',
      url: 'wss://jur-archive-mainnet-1.simplystaking.xyz/VX68C07AR4K2/ws'
    }],
    text: 'Jur',
    ui: {
      color: '#203050',
      logo: chainsJurPNG
    }
  },
  {
    info: 'kulupu',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11157
      name: 'Kulupu',
      url: 'wss://rpc.kulupu.corepaper.org/ws'
    }],
    text: 'Kulupu',
    ui: {
      color: '#003366',
      logo: nodesKulupuSVG
    }
  },
  {
    info: 'kusari',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9712
      name: 'Swapdex',
      url: 'wss://ws.kusari.network'
    }],
    text: 'Kusari',
    ui: {
      color: '#b8860b',
      logo: nodesKusariSVG
    }
  },
  {
    info: 'Liberland',
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://liberland-rpc.n.dwellir.com'
    }, {
      isAvailable: false,
      name: 'Liberland Government',
      url: 'wss://mainnet.liberland.org'
    }],
    text: 'Liberland mainnet',
    ui: {
      color: 'rgb(13, 52, 93)',
      logo: chainsLiberlandPNG
    }
  },
  {
    info: 'logion',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10667
      name: 'Logion 1',
      url: 'wss://rpc01.logion.network'
    }],
    text: 'Logion Solochain (Archive)',
    ui: {
      color: 'rgb(21, 38, 101)',
      logo: chainsLogionPNG
    }
  },
  {
    info: 'mathchain',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8525
      name: 'MathWallet',
      url: 'wss://mathchain-asia.maiziqianbao.net/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8525
      name: 'MathWallet Backup',
      url: 'wss://mathchain-us.maiziqianbao.net/ws'
    }],
    text: 'MathChain',
    ui: {
      color: '#000000',
      logo: nodesMathSVG
    }
  },
  {
    info: 'minix',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7182
      name: 'ChainX',
      url: 'wss://minichain-mainnet.coming.chat/ws'
    }],
    text: 'MiniX',
    ui: {
      color: '#5152f7',
      logo: nodesMinixPNG
    }
  },
  {
    info: 'myriad',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
      name: 'Myriad',
      url: 'wss://ws-rpc.myriad.social'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11263
      name: 'Octopus',
      url: 'wss://gateway.mainnet.octopus.network/myriad/a4cb0a6e30ff5233a3567eb4e8cb71e0'
    }],
    text: 'Myriad',
    ui: {
      color: '#7342CC',
      logo: chainsMyriadPNG
    }
  },
  {
    info: 'neatcoin',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11157
      name: 'Neatcoin',
      url: 'wss://rpc.neatcoin.org/ws'
    }],
    text: 'Neatcoin',
    ui: {}
  },
  {
    info: 'nftmart',
    providers: [{
      isAvailable: true,
      name: 'NFTMart',
      url: 'wss://mainnet.nftmart.io/rpc/ws'
    }],
    text: 'NFTMart',
    ui: {
      logo: nodesNftmartPNG
    }
  },
  {
    info: 'nodle',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7652
      name: 'Nodle',
      url: 'wss://main3.nodleprotocol.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8013
      name: 'OnFinality',
      url: 'wss://nodle.api.onfinality.io/public-ws'
    }],
    text: 'Nodle',
    ui: {
      color: '#1ab394',
      logo: nodesNodleSVG
    }
  },
  {
    info: 'polkadex',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11827
      name: 'OnFinality',
      url: 'wss://polkadex.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'PolkadexSup',
      url: 'wss://so.polkadex.ee'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/12067
      name: 'RadiumBlock',
      url: 'wss://polkadex.public.curie.radiumblock.co/ws'
    }],
    text: 'Polkadex',
    ui: {
      color: '#7C30DD',
      logo: nodesPolkadexSVG
    }
  },
  {
    info: 'polymesh',
    providers: [{
      isAvailable: true,
      name: 'Polymesh',
      url: 'wss://mainnet-rpc.polymesh.network'
    }],
    text: 'Polymesh Mainnet',
    ui: {
      color: 'linear-gradient(197deg, #FF2E72, #4A125E)',
      logo: nodesPolymeshSVG
    }
  },
  {
    info: 'qf-network',
    providers: [{
      isAvailable: true,
      name: 'QF Network',
      url: 'wss://mainnet.qfnode.net'
    }],
    text: 'QF Network',
    ui: {
      color: '#2E2E5C',
      logo: chainsQfNetworkPNG
    }
  },
  {
    info: 'riochain',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9054
      name: 'RioChain',
      url: 'wss://node.v1.riochain.io'
    }],
    text: 'RioChain',
    ui: {
      color: 'rgb(77, 135, 246)',
      logo: nodesRiochainSVG
    }
  },
  {
    info: 'sherpax',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9712
      name: 'ChainX',
      url: 'wss://mainnet.sherpax.io'
    }],
    text: 'SherpaX',
    ui: {
      color: '#6bbee8',
      logo: nodesSherpaxPNG
    }
  },
  {
    info: 'sora-substrate',
    providers: [{
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://sora.api.onfinality.io/public-ws'
    }, {
      isAvailable: false,
      name: 'SORA Parliament Ministry of Finance',
      url: 'wss://ws.mof.sora.org'
    }, {
      isAvailable: true,
      name: 'SORA Parliament Ministry of Finance #2',
      url: 'wss://mof2.sora.org'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/12007
      name: 'SORA Parliament Ministry of Finance #3',
      url: 'wss://mof3.sora.org'
    }],
    text: 'SORA',
    ui: {
      color: '#2D2926',
      logo: nodesSoraSubstrateSVG
    }
  },
  {
    info: 'spanner',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6547
      name: 'Spanner',
      url: 'wss://wss.spannerprotocol.com'
    }],
    text: 'Spanner',
    ui: {
      color: '#EC3D3D',
      logo: chainsSpannerPNG
    }
  },
  {
    info: 'stafi',
    providers: [{
      isAvailable: false,
      name: 'Stafi Foundation',
      url: 'wss://mainnet-rpc.stafi.io'
    }],
    text: 'Stafi',
    ui: {
      color: '#00F3AB',
      logo: nodesStafiPNG
    }
  },
  {
    info: 'subgame',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9030
      name: 'SubGame',
      url: 'wss://mainnet.subgame.org/'
    }],
    text: 'SubGame',
    ui: {
      color: '#EB027D',
      logo: nodesSubgameSVG
    }
  },
  {
    info: 'swapdex',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10030
      name: 'Swapdex',
      url: 'wss://ws.swapdex.network'
    }],
    text: 'Swapdex',
    ui: {
      color: '#E94082',
      logo: nodesSwapdexSVG
    }
  },
  {
    info: 'tangle',
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://tangle-mainnet-rpc.n.dwellir.com'
    }, {
      isAvailable: false,
      name: 'Webb',
      url: 'wss://rpc.tangle.tools'
    }],
    text: 'Tangle',
    ui: {
      color: '#7578fb',
      logo: chainsTanglePNG
    }
  },
  {
    info: 'tanssi',
    isPeople: true,
    providers: [{
      isAvailable: true,
      name: 'Tanssi Foundation',
      url: 'wss://services.tanssi-mainnet.network/tanssi'
    }],
    text: 'Tanssi',
    ui: {
      color: '#149b9bff',
      logo: nodesTanssiSVG
    }
  },
  {
    info: 'ternoa',
    providers: [{
      isAvailable: true, // https://github.com/polkadot-js/apps/issues/10172
      name: 'CapsuleCorp',
      url: 'wss://mainnet.ternoa.network'
    }],
    text: 'Ternoa',
    ui: {
      color: '#d622ff',
      logo: nodesTernoaSVG
    }
  },
  {
    info: 'torus',
    providers: [{
      isAvailable: true,
      name: 'mainnet',
      url: 'wss://api.torus.network'
    }],
    text: 'Torus',
    ui: {
      color: '#070A0E',
      logo: chainsTorusPNG
    }
  },
  {
    info: 'tscs-mainnet',
    providers: [{
      isAvailable: true,
      name: 'SuperEX',
      url: 'wss://testnetrpc.scschain.com'
    }],
    text: 'TSCS Network',
    ui: {
      color: '#FFAB75',
      logo: nodesTscsPNG
    }
  },
  {
    info: 'uniarts',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
      name: 'UniArts',
      url: 'wss://mainnet.uniarts.vip:9443'
    }],
    text: 'UniArts',
    ui: {
      color: 'linear-gradient(150deg, #333ef7 0%, #55adff 100%)',
      logo: nodesUniartsPNG
    }
  },
  {
    info: 'unitnetwork',
    providers: [{
      isAvailable: false, // Duplicated in Rococo
      name: 'UnitNetwork',
      url: 'wss://www.unitnode3.info:443'
    }],
    text: 'UnitNetwork',
    ui: {
      color: '#a351ef',
      logo: nodesUnitnetworkPNG
    }
  },
  {
    info: 'vara',
    isPeopleForIdentity: false,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11577
      name: 'Blast',
      url: 'wss://vara-mainnet.public.blastapi.io'
    }, {
      isAvailable: true,
      name: 'Gear',
      url: 'wss://rpc.vara.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11337
      name: 'P2P.org',
      url: 'wss://vara.substrate-rpc.p2p.org/'
    }],
    text: 'Vara',
    ui: {
      color: '#00a87a',
      logo: chainsVaraPNG
    }
  },
  {
    info: 'vtb',
    providers: [{
      isAvailable: true,
      name: 'VTB Community',
      url: 'wss://substratenode.vtbcfoundation.org/explorer'
    }],
    text: 'VTB',
    ui: {
      color: '#1d79bb',
      logo: chainsVtbPNG
    }
  },
  {
    info: 'westlake',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7293
      name: 'DataHighway',
      url: 'wss://westlake.datahighway.com'
    }],
    text: 'Westlake',
    ui: {
      color: 'linear-gradient(-90deg, #9400D3 0%, #5A5CA9 50%, #00BFFF 100%)',
      logo: nodesDatahighwayPNG
    }
  },
  {
    genesisHash: ZKVERIFY_GENESIS,
    info: 'zkVerify',
    isRelay: true,
    linked: [
      ...zkVerifyParas
    ],
    providers: [{
      isAvailable: true,
      name: 'zkverify',
      url: 'wss://zkverify-rpc.zkverify.io'
    }],
    text: 'zkVerify',
    ui: {
      color: '#B5FFA5',
      logo: nodesZkVerifyPNG
    }
  }
];
