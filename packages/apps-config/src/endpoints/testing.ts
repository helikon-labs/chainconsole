// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { ZKVERIFY_VOLTA_GENESIS } from '../api/constants.js';
import { chains3dpassSVG, chainsAcalaSVG, chainsAlephSVG, chainsAllfeatSVG, chainsAnalogSVG, chainsArgonSVG, chainsBrainstormPNG, chainsChainflipPNG, chainsCreditcoinTestPNG, chainsDebioSVG, chainsEquilibriumSVG, chainsFerrumPNG, chainsFragnovaPNG, chainsJurPNG, chainsKintsugiPNG, chainsLiberlandPNG, chainsLogionPNG, chainsMyriadPNG, chainsQfNetworkPNG, chainsSkyekiwiPNG, chainsTanglePNG, chainsVaraTestnetPNG } from '../ui/logos/chains/index.js';
import { nodesArcticPNG, nodesAresGladiosSVG, nodesAutonomysPNG, nodesBifrostSVG, nodesBitcountryPNG, nodesCereSVG, nodesCessPNG, nodesCloverSVG, nodesCrustMaxwellSVG, nodesCurioSVG, nodesDancelightSVG, nodesDatahighwayPNG, nodesDockPNG, nodesDolphinSVG, nodesDotmogSVG, nodesEdgewareWhitePNG, nodesEncointerBlueSVG, nodesFantourPNG, nodesGalitalLogoPNG, nodesGamepowerSVG, nodesGeekSVG, nodesInterlaySVG, nodesIpsePNG, nodesJazPNG, nodesJupiterSVG, nodesKarmachainSVG, nodesKhalaSVG, nodesKlugPNG, nodesKylinPNG, nodesLaminarCircleSVG, nodesMantaPNG, nodesMathSVG, nodesMinixPNG, nodesMoonbaseAlphaSVG, nodesMybankPNG, nodesNftmartPNG, nodesNodleSVG, nodesOpportunityPNG, nodesPhalaSVG, nodesPhoenixPNG, nodesPhykenNetworkPNG, nodesPolkadexSVG, nodesPolkafoundrySVG, nodesPolymeshSVG, nodesPontemSVG, nodesPrismPNG, nodesRealisPNG, nodesRiochainSVG, nodesSherpaxPNG, nodesSoonsocialPNG, nodesSoraSubstrateSVG, nodesSubdaoPNG, nodesSubgameSVG, nodesSubspacePNG, nodesSubstrateHexagonSVG, nodesTernoaSVG, nodesThebifrostPNG, nodesUniartsPNG, nodesUniqueSVG, nodesUnitnetworkPNG, nodesVFlowPNG, nodesWeb3gamesSVG, nodesZCloakSVG, nodesZeroSVG, nodesZkVerifyPNG } from '../ui/logos/nodes/index.js';

export * from './testingRelayPaseo.js';
export * from './testingRelayWestend.js';

export const testZkVerifyParas: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'VFlow-Volta',
    paraId: 1,
    providers: [{
      isAvailable: true,
      name: 'zkVerify',
      url: 'wss://vflow-volta-rpc.zkverify.io'
    }],
    relayName: 'zkVerify-testnet',
    text: 'VFlow Volta Testnet',
    ui: {
      color: '#628eff',
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
export const testChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: '3dpass-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9443
      name: '3dpass',
      url: 'wss://test-rpc.3dpass.org'
    }],
    text: '3DPass Testnet',
    ui: {
      color: '#323232',
      logo: chains3dpassSVG
    }
  },
  {
    info: 'aleph-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11882
      name: 'Aleph Zero Foundation',
      url: 'wss://ws.test.azero.dev'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://aleph-zero.api.onfinality.io/public-ws'
    }],
    text: 'Aleph Zero Testnet',
    ui: {
      color: '#00CCAB',
      logo: chainsAlephSVG
    }
  },
  {
    homepage: 'https://analog.one',
    info: 'analog-testnet',
    providers: [{
      isAvailable: false,
      name: 'Analog One',
      url: 'wss://rpc.testnet.analog.one'
    }],
    text: 'Analog Testnet',
    ui: {
      color: '#5d3ef8',
      identityIcon: 'beachball',
      logo: chainsAnalogSVG
    }
  },
  {
    info: 'nodle',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7652
      name: 'Nodle',
      url: 'wss://arcadia1.nodleprotocol.io'
    }],
    text: 'Arcadia',
    ui: {
      color: '#1ab394',
      logo: nodesNodleSVG
    }
  },
  {
    info: 'arctic',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9405
      name: 'Arctic',
      url: 'wss://arctic-rpc.icenetwork.io:9944'
    }],
    text: 'Arctic',
    ui: {
      logo: nodesArcticPNG
    }
  },
  {
    info: 'Ares Gladios',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9106
      name: 'Ares Protocol',
      url: 'wss://gladios.aresprotocol.io'
    }],
    text: 'Ares Gladios',
    ui: {
      color: '#1295F0',
      logo: nodesAresGladiosSVG
    }
  },
  {
    info: 'Argon',
    providers: [{
      isAvailable: true,
      name: 'Argon Foundation',
      url: 'wss://rpc.testnet.argonprotocol.org'
    }],
    text: 'Argon Testnet',
    ui: {
      color: '#a428b3',
      logo: chainsArgonSVG
    }
  },
  {
    info: 'jaz',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
      name: 'Jaz',
      url: 'wss://ws0.jaz.network'
    }],
    text: 'Artio Testnet',
    ui: {
      color: '#121212',
      logo: nodesJazPNG
    }
  },
  {
    info: 'autonomys-chronos-evm',
    providers: [{
      isAvailable: true,
      name: 'Labs',
      url: 'wss://auto-evm.chronos.autonomys.xyz/ws'
    }],
    text: 'Autonomys Chronos EVM',
    ui: {
      color: '#5870B3',
      logo: nodesAutonomysPNG
    }
  },
  {
    info: 'autonomys-chronos-testnet',
    providers: [{
      isAvailable: true,
      name: 'Labs',
      url: 'wss://rpc.chronos.autonomys.xyz/ws'
    }],
    text: 'Autonomys Chronos Testnet',
    ui: {
      color: '#5870B3',
      logo: nodesAutonomysPNG
    }
  },
  {
    info: 'edgeware',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11696
      name: 'JelliedOwl',
      url: 'wss://beresheet.jelliedowl.net'
    }],
    text: 'Beresheet (Edgeware)',
    ui: {
      logo: nodesEdgewareWhitePNG
    }
  },
  {
    info: 'bifrost',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8139
      name: 'Liebi',
      url: 'wss://bifrost-rpc.testnet.liebi.com/ws'
    }],
    text: 'Bifrost Stage Network',
    ui: {
      logo: nodesBifrostSVG
    }
  },
  {
    info: 'thebifrost-testnet',
    providers: [{
      isAvailable: true,
      name: 'Pilab #1',
      url: 'wss://public-01.testnet.bifrostnetwork.com/wss'
    }, {
      isAvailable: true,
      name: 'Pilab #2',
      url: 'wss://public-02.testnet.bifrostnetwork.com/wss'
    }],
    text: 'Bifrost Testnet',
    ui: {
      color: '#FF474C',
      logo: nodesThebifrostPNG
    }
  },
  {
    info: 'creditcoin-classic-testnet',
    providers: [{
      isAvailable: true,
      name: 'Creditcoin Foundation',
      url: 'wss://rpc.testnet.creditcoin.network/ws'
    }],
    text: 'CC Enterprise Testnet',
    ui: {
      color: '#9cffaa',
      logo: chainsCreditcoinTestPNG
    }
  },
  {
    info: 'cere',
    providers: [{
      isAvailable: true,
      name: 'Cere Network',
      url: 'wss://archive.testnet.cere.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9712
      name: 'Republic Crypto | Runtime',
      url: 'wss://testnet.cere-archive.republiccrypto-runtime.com:444'
    }],
    text: 'Cere Network Testnet',
    ui: {
      color: '#B7AEFF',
      logo: nodesCereSVG
    }
  },
  {
    info: 'cess-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10184
      name: 'CESS',
      url: 'wss://testnet-rpc0.cess.cloud/ws/'
    }],
    text: 'CESS Testnet',
    ui: {
      color: '#2269a9',
      logo: nodesCessPNG
    }
  },
  {
    info: 'chainflip',
    providers: [{
      isAvailable: true,
      name: 'chainflip',
      url: 'wss://archive.perseverance.chainflip.io'
    }],
    text: 'Chainflip Testnet',
    ui: {
      color: '#111111',
      logo: chainsChainflipPNG
    }
  },
  {
    info: 'clover',
    providers: [{
      isAvailable: false, // Cannot construct unknown type BridgeNetworks
      name: 'Clover',
      url: 'wss://api.clover.finance/'
    }],
    text: 'Clover',
    ui: {
      color: 'linear-gradient(to right, #52ad75, #7cc773)',
      logo: nodesCloverSVG
    }
  },
  {
    info: 'creditcoin-testnet',
    providers: [{
      isAvailable: true,
      name: 'Creditcoin Foundation',
      url: 'wss://rpc.cc3-testnet.creditcoin.network/ws'
    }],
    text: 'Creditcoin Testnet',
    ui: {
      color: '#9cffaa',
      logo: chainsCreditcoinTestPNG
    }
  },
  {
    info: 'Crust Maxwell',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8060
      name: 'Crust Network',
      url: 'wss://api.crust.network/'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8060
      name: 'DCloud Foundation',
      url: 'wss://api.decloudf.com/'
    }],
    text: 'Crust Maxwell',
    ui: {
      color: '#2E333B',
      logo: nodesCrustMaxwellSVG
    }
  },
  {
    info: 'Curio',
    providers: [],
    text: 'Curio',
    ui: {
      color: 'rgb(96, 98, 246)',
      logo: nodesCurioSVG
    }
  },
  {
    info: 'Dancelight',
    isPeople: true,
    providers: [{
      isAvailable: true,
      name: 'Tanssi Foundation',
      url: 'wss://services.tanssi-testnet.network/dancelight'
    }],
    text: 'Dancelight',
    ui: {
      color: '#000000',
      logo: nodesDancelightSVG
    }
  },
  {
    info: 'datahighway',
    isDisabled: true,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9601
      name: 'MXC',
      url: 'wss://spreehafen.datahighway.com'
    }],
    text: 'Spreehafen',
    ui: {
      logo: nodesDatahighwayPNG
    }
  },
  {
    info: 'debio-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
      name: 'DeBio',
      url: 'wss://ws-rpc.testnet.debio.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10667
      name: 'Octopus',
      url: 'wss://gateway.testnet.octopus.network/debionetwork/554976cbb180f676f188abe14d63ca24'
    }],
    text: 'DeBio Testnet',
    ui: {
      color: '#FF56E0',
      logo: chainsDebioSVG
    }
  },
  {
    info: 'dock-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6831
      name: 'Dock Association',
      url: 'wss://knox-1.dock.io'
    }],
    text: 'Dock',
    ui: {
      logo: nodesDockPNG
    }
  },
  {
    info: 'dolphin',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7439
      name: 'Dolphin Testnet',
      url: 'wss://trillian.dolphin.red'
    }],
    text: 'Dolphin Testnet',
    ui: {
      color: '#000000',
      logo: nodesDolphinSVG
    }
  },
  {
    info: 'dotmog',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8895
      name: 'DOTMog',
      url: 'wss://mogiway-01.dotmog.com'
    }],
    text: 'DOTMog',
    ui: {
      color: '#020609',
      logo: nodesDotmogSVG
    }
  },
  {
    info: 'encointer',
    providers: [{
      isAvailable: true,
      name: 'Encointer Association',
      url: 'wss://gesell.encointer.org'
    }],
    text: 'Encointer Gesell',
    ui: {
      color: '#0000cc',
      logo: nodesEncointerBlueSVG
    }
  },
  {
    info: 'equilibrium',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6250
      name: 'Equilibrium',
      url: 'wss://testnet.equilibrium.io'
    }],
    text: 'Equilibrium',
    ui: {
      color: '#1792ff',
      logo: chainsEquilibriumSVG
    }
  },
  {
    info: 'fantour',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6519
      name: 'FantourDev',
      url: 'wss://test-ws.fantour.io'
    }],
    text: 'Fantour',
    ui: {
      color: '#5a189a',
      logo: nodesFantourPNG
    }
  },
  {
    info: 'ferrum',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9748
      name: 'FerrumNetwork',
      url: 'wss://testnet.dev.svcs.ferrumnetwork.io'
    }],
    text: 'Ferrum Testnet',
    ui: {
      color: '#b37700',
      logo: chainsFerrumPNG
    }
  },
  {
    info: 'substrate',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/5571
      name: 'Parity',
      url: 'wss://substrate-rpc.parity.io'
    }],
    text: 'Flaming Fir',
    ui: {
      logo: nodesSubstrateHexagonSVG
    }
  },
  {
    info: 'fragnova',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9490
      name: 'Fragnova Network',
      url: 'wss://ws-test.fragnova.network'
    }],
    text: 'Fragnova Testnet',
    ui: {
      color: '#6b35a8',
      logo: chainsFragnovaPNG
    }
  },
  {
    info: 'Galital',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6721
      name: 'StarkleyTech',
      url: 'wss://galital-rpc-testnet.starkleytech.com'
    }],
    text: 'Galital PC2',
    ui: {
      color: '#00063F',
      logo: nodesGalitalLogoPNG
    }
  },
  {
    info: 'galois',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
      name: 'MathWallet',
      url: 'wss://galois-hk.maiziqianbao.net/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9109
      name: 'MathWallet Backup',
      url: 'wss://galois.maiziqianbao.net/ws'
    }],
    text: 'Galois',
    ui: {
      color: '#000000',
      logo: nodesMathSVG
    }
  },
  {
    info: 'gamepower',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7223
      name: 'GamePower',
      url: 'wss://gamepower.io'
    }],
    text: 'GamePower',
    ui: {
      color: '#5d21a5',
      logo: nodesGamepowerSVG
    }
  },
  {
    info: 'geek',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8361
      name: 'Geek Team',
      url: 'wss://testnet.geekcash.org'
    }],
    text: 'GeekCash',
    ui: {
      color: '#4f46e5',
      logo: nodesGeekSVG
    }
  },
  {
    info: 'halongbay',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6871
      name: 'Halongbay',
      url: 'wss://halongbay.polkafoundry.com'
    }],
    text: 'Halongbay Testnet',
    ui: {
      color: '#ff527c',
      logo: nodesPolkafoundrySVG
    }
  },
  {
    info: 'interlay-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11157
      name: 'Interlay',
      url: 'wss://api-testnet.interlay.io/parachain/'
    }],
    text: 'Interlay Testnet',
    ui: {
      logo: nodesInterlaySVG
    }
  },
  {
    info: 'brainstorm',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8020
      name: 'InvArch Team',
      url: 'wss://brainstorm.invarch.network/'
    }],
    text: 'InvArch Brainstorm Testnet',
    ui: {
      color: '#161616',
      logo: chainsBrainstormPNG
    }
  },
  {
    info: 'ipse',
    isDisabled: true, // https://github.com/polkadot-js/apps/issues/6242
    providers: [{
      isAvailable: true,
      name: 'IPSE China',
      url: 'wss://testnet-china.ipse.io'
    }, {
      isAvailable: true,
      name: 'IPSE Europe',
      url: 'wss://testnet-europe.ipse.io'
    }, {
      isAvailable: true,
      name: 'IPSE USA',
      url: 'wss://testnet-usa.ipse.io'
    }],
    text: 'IPSE',
    ui: {
      color: '#08a1e8',
      logo: nodesIpsePNG
    }
  },
  {
    info: 'jupiter',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7765
      name: 'Patract',
      url: 'wss://ws.jupiter-poa.patract.cn'
    }],
    text: 'Jupiter',
    ui: {
      color: '#7143ff',
      logo: nodesJupiterSVG
    }
  },
  {
    info: 'jur',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11186
      name: 'Jur',
      url: 'wss://testnet.jur.io'
    }],
    text: 'Jur Testnet',
    ui: {
      color: '#203050',
      logo: chainsJurPNG
    }
  },
  {
    info: 'karmachain',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10091
      name: 'Karmachain',
      url: 'wss://api3.karmaco.in'
    }],
    text: 'Karmachain Testnet',
    ui: {
      color: '#44259D',
      logo: nodesKarmachainSVG
    }
  },
  {
    info: 'khala',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6930
      name: 'Phala Network',
      url: 'wss://pc-test-3.phala.network/khala/ws'
    }],
    text: 'Khala (Para 3)',
    ui: {
      color: '#03f3f3',
      logo: nodesKhalaSVG
    }
  },
  {
    info: 'kintsugi-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11620
      name: 'Interlay',
      url: 'wss://api-dev-kintsugi.interlay.io/parachain'
    }],
    text: 'Kintsugi Testnet',
    ui: {
      color: '#1a0a2d',
      logo: chainsKintsugiPNG
    }
  },
  {
    info: 'klugdossier',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8081
      name: 'Klug Dossier',
      url: 'wss://klugdossier.net/'
    }],
    text: 'Klug Dossier',
    ui: {
      color: '#663399',
      logo: nodesKlugPNG
    }
  },
  {
    info: 'kylin',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6635
      name: 'Kylin Network',
      url: 'wss://testnet.kylin-node.co.uk'
    }],
    text: 'Kylin Testnet',
    ui: {
      logo: nodesKylinPNG
    }
  },
  {
    info: 'Liberland',
    providers: [{
      isAvailable: true,
      name: 'Liberland Government',
      url: 'wss://testchain.liberland.org'
    }],
    text: 'Liberland testnet',
    ui: {
      color: 'rgb(231, 196, 36)',
      logo: chainsLiberlandPNG
    }
  },
  {
    info: 'logion',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11882
      name: 'Logion',
      url: 'wss://test-para-rpc01.logion.network'
    }],
    text: 'Logion Testnet',
    ui: {
      color: 'rgb(21, 38, 101)',
      logo: chainsLogionPNG
    }
  },
  {
    info: 'acala',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9005
      name: 'Acala',
      url: 'wss://mandala.polkawallet.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8105
      name: 'OnFinality',
      url: 'wss://acala-mandala.api.onfinality.io/public-ws'
    }],
    text: 'Mandala',
    ui: {
      logo: chainsAcalaSVG
    }
  },
  {
    info: 'manta',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6384
      name: 'Manta Testnet',
      url: 'wss://ws.f1.testnet.manta.network'
    }],
    text: 'Manta Testnet',
    ui: {
      color: '#2070a6',
      logo: nodesMantaPNG
    }
  },
  {
    info: 'melodie',
    providers: [{
      isAvailable: false,
      name: 'Allfeat labs',
      url: 'wss://melodie-rpc.allfeat.io'
    }],
    text: 'Melodie | Allfeat Testnet',
    ui: {
      color: '#ff4a5f',
      logo: chainsAllfeatSVG
    }
  },
  {
    info: 'minix',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8132
      name: 'Chainx',
      url: 'wss://minichain.coming.chat/ws'
    }],
    text: 'MiniX Testnet',
    ui: {
      color: '#5152f7',
      logo: nodesMinixPNG
    }
  },
  {
    info: 'moonbaseAlpha',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11608
      name: 'Blast',
      url: 'wss://moonbase-alpha.public.blastapi.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11935
      name: 'Dwellir',
      url: 'wss://moonbase-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Moonbeam Foundation',
      url: 'wss://wss.api.moonbase.moonbeam.network'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://moonbeam-alpha.api.onfinality.io/public-ws'
    }, {
      isAvailable: false,
      name: 'RadiumBlock',
      url: 'wss://moonbase.public.curie.radiumblock.co/ws'
    }, {
      isAvailable: true,
      name: 'UnitedBloc',
      url: 'wss://moonbase.unitedbloc.com'
    }],
    text: 'Moonbase Alpha',
    ui: {
      color: '#2B1D3C',
      logo: nodesMoonbaseAlphaSVG
    }
  },
  {
    info: 'mybank',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/5845
      name: 'MYBANK',
      url: 'wss://mybank.network/substrate'
    }],
    text: 'mybank.network',
    ui: {
      color: '#282736',
      logo: nodesMybankPNG
    }
  },
  {
    info: 'myriad-tesnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
      name: 'Myriad',
      url: 'wss://ws-rpc.testnet.myriad.social'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10667
      name: 'Octopus',
      url: 'wss://gateway.testnet.octopus.network/myriad/8f543a1c219f14d83c0faedefdd5be6e'
    }],
    text: 'Myriad Testnet',
    ui: {
      color: '#7342CC',
      logo: chainsMyriadPNG
    }
  },
  {
    info: 'nftmart',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
      name: 'NFTMartDev',
      url: 'wss://dev-ws.nftmart.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
      name: 'NFTMartStaging',
      url: 'wss://staging-ws.nftmart.io'
    }],
    text: 'NFTMart',
    ui: {
      color: '#307182',
      logo: nodesNftmartPNG
    }
  },
  {
    info: 'opportunity',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7982
      name: 'Standard Protocol',
      url: 'wss://rpc.opportunity.standard.tech'
    }],
    text: 'Opportunity',
    ui: {
      color: '#6143bc',
      logo: nodesOpportunityPNG
    }
  },
  {
    info: 'phala',
    providers: [{
      isAvailable: false,
      name: 'Phala Network',
      url: 'wss://poc6.phala.network/ws'
    }],
    text: 'Phala (PoC 6)',
    ui: {
      logo: nodesPhalaSVG
    }
  },
  {
    info: 'phoenix',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6181
      name: 'phoenix Protocol',
      url: 'wss://phoenix-ws.coinid.pro/'
    }],
    text: 'Phoenix Mashnet',
    ui: {
      color: '#d42181',
      logo: nodesPhoenixPNG
    }
  },
  {
    info: 'Phyken Network',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10453
      name: 'Phyken Testnet',
      url: 'wss://rpc.testnet.metaquity.xyz'
    }],
    text: 'Phyken Network Testnet',
    ui: {
      color: '#48B96C',
      logo: nodesPhykenNetworkPNG
    }
  },
  {
    info: 'polkadex',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9150
      name: 'Polkadex Team',
      url: 'wss://blockchain.polkadex.trade'
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
      url: 'wss://testnet-rpc.polymesh.live'
    }],
    text: 'Polymesh Testnet',
    ui: {
      color: '#43195B',
      logo: nodesPolymeshSVG
    }
  },
  {
    info: 'pontem',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7652
      name: 'Pontem',
      url: 'wss://testnet.pontem.network/ws'
    }],
    text: 'Pontem',
    ui: {
      color: '#A92FAC',
      logo: nodesPontemSVG
    }
  },
  {
    info: 'prism',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7340
      name: 'Prism',
      url: 'wss://testnet.psm.link'
    }],
    text: 'Prism',
    ui: {
      color: 'linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      logo: nodesPrismPNG
    }
  },
  {
    info: 'qf-testnet',
    providers: [{
      isAvailable: false,
      name: 'QF Network',
      url: 'wss://test.qfnetwork.xyz'
    }],
    text: 'QF Network Testnet',
    ui: {
      color: '#2E2E5C',
      logo: chainsQfNetworkPNG
    }
  },
  {
    info: 'realis',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7982
      name: 'Realis.Network',
      url: 'wss://rpc.realis.network/'
    }],
    text: 'Realis.Network',
    ui: {
      color: '#000000',
      logo: nodesRealisPNG
    }
  },
  {
    info: 'riochain',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6181
      name: 'RioChain Staging',
      url: 'wss://node.v1.staging.riochain.io'
    }],
    text: 'RioChain',
    ui: {
      color: '#4d87f6',
      logo: nodesRiochainSVG
    }
  },
  {
    info: 'sherpax',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9672
      name: 'Chainx',
      url: 'wss://sherpax-testnet.chainx.org'
    }],
    text: 'Sherpax Testnet',
    ui: {
      color: '#6bbee8',
      logo: nodesSherpaxPNG
    }
  },
  {
    info: 'skyekiwi',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10197
      name: 'SkyeKiwi',
      url: 'wss://staging.rpc.skye.kiwi'
    }],
    text: 'SkyeKiwi Testnet',
    ui: {
      color: '#6667ab',
      logo: chainsSkyekiwiPNG
    }
  },
  {
    info: 'sora-substrate',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11935
      name: 'Soramitsu #1',
      url: 'wss://ws.framenode-7.s4.stg1.sora2.soramitsu.co.jp'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11965
      name: 'Soramitsu #2',
      url: 'wss://ws.framenode-8.s5.stg1.sora2.soramitsu.co.jp'
    }],
    text: 'SORA-staging',
    ui: {
      color: '#2D2926',
      logo: nodesSoraSubstrateSVG
    }
  },
  {
    info: 'subdao',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7473
      name: 'SubDAO',
      url: 'wss://alpha.subdao.org'
    }],
    text: 'SubDAO Staging',
    ui: {
      color: 'linear-gradient(50deg, #F20092 0%, #FF4D5D 100%)',
      logo: nodesSubdaoPNG
    }
  },
  {
    info: 'subgame',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7982
      name: 'SubGame',
      url: 'wss://staging.subgame.org'
    }],
    text: 'SubGame Staging',
    ui: {
      color: '#EB027D',
      logo: nodesSubgameSVG
    }
  },
  {
    info: 'subspace-farmnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8135
      name: 'Subspace Network',
      url: 'wss://farm-rpc.subspace.network/ws'
    }],
    text: 'Subspace Farmnet',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-1',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11393
      name: 'Europe',
      url: 'wss://eu.gemini-1b.subspace.network/ws'
    }],
    text: 'Subspace Gemini 1',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-2a',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11513
      name: 'Europe',
      url: 'wss://eu-0.gemini-2a.subspace.network/ws'
    }],
    text: 'Subspace Gemini 2a',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-3f',
    providers: [{
      isAvailable: false,
      name: 'Europe',
      url: 'wss://rpc-1.gemini-3f.subspace.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10091
      name: 'US',
      url: 'wss://rpc-0.gemini-3f.subspace.network/ws'
    }],
    text: 'Subspace Gemini 3f',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-3g',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10912
      name: 'Europe',
      url: 'wss://rpc-1.gemini-3g.subspace.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11263
      name: 'US',
      url: 'wss://rpc-0.gemini-3g.subspace.network/ws'
    }],
    text: 'Subspace Gemini 3g',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-3g-nova',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10957
      name: 'Subspace',
      url: 'wss://nova.gemini-3g.subspace.network/ws'
    }],
    text: 'Subspace Gemini 3g Nova',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-3h',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11423
      name: 'US',
      url: 'wss://rpc-0.gemini-3h.subspace.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11098
      name: 'US2',
      url: 'wss://rpc-1.gemini-3h.subspace.network/ws'
    }],
    text: 'Subspace Gemini 3h',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace-gemini-3h-nova',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11098
      name: 'EU1',
      url: 'wss://nova-0.gemini-3h.subspace.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11098
      name: 'EU2',
      url: 'wss://nova-1.gemini-3h.subspace.network/ws'
    }],
    text: 'Subspace Gemini 3h Nova',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'subspace',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8598
      name: 'Subspace Network',
      url: 'wss://test-rpc.subspace.network'
    }],
    text: 'Subspace Testnet',
    ui: {
      color: '#562b8e',
      logo: nodesSubspacePNG
    }
  },
  {
    info: 'tangle',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10555
      name: 'Webb',
      url: 'wss://testnet-rpc.tangle.tools'
    }],
    text: 'Tangle',
    ui: {
      color: '#7578fb',
      logo: chainsTanglePNG
    }
  },
  {
    info: 'ternoa-alphanet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11406
      name: 'CapsuleCorp',
      url: 'wss://alphanet.ternoa.com'
    }],
    text: 'Ternoa Alphanet',
    ui: {
      logo: nodesTernoaSVG
    }
  },
  {
    info: 'ternoa-testnet',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9515
      name: 'CapsuleCorp',
      url: 'wss://testnet.ternoa.com/'
    }],
    text: 'Ternoa Testnet',
    ui: {
      color: '#d622ff',
      logo: nodesTernoaSVG
    }
  },
  {
    info: 'bitcountry',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
      name: 'Metaverse Foundation',
      url: 'wss://tewai-rpc.bit.country'
    }],
    text: 'Tewai',
    ui: {
      logo: nodesBitcountryPNG
    }
  },
  {
    info: 'laminar',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8060
      name: 'Laminar',
      url: 'wss://testnet-node-1.laminar-chain.laminar.one/ws'
    }],
    text: 'Turbulence',
    ui: {
      color: '#004FFF',
      logo: nodesLaminarCircleSVG
    }
  },
  {
    info: 'uniarts',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8541
      name: 'UniArts',
      url: 'wss://testnet.uniarts.network'
    }],
    text: 'UniArts',
    ui: {
      logo: nodesUniartsPNG
    }
  },
  {
    info: 'unique',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7621
      name: 'Unique',
      url: 'wss://testnet2.unique.network'
    }],
    text: 'Unique',
    ui: {
      color: '#40BCFF',
      logo: nodesUniqueSVG
    }
  },
  {
    info: 'unitv',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/5684
      name: 'Unit Network',
      url: 'wss://unitventures.io/'
    }],
    text: 'Unit Network',
    ui: {
      color: '#1452F0',
      logo: nodesUnitnetworkPNG
    }
  },
  {
    info: 'vara-testnet',
    providers: [{
      isAvailable: true,
      name: 'Gear',
      url: 'wss://testnet.vara.network'
    }],
    text: 'Vara Testnet',
    ui: {
      color: '#202022',
      logo: chainsVaraTestnetPNG
    }
  },
  {
    info: 'vodka',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8175
      name: 'Vodka',
      url: 'wss://vodka.rpc.neatcoin.org/ws'
    }],
    text: 'Vodka',
    ui: {}
  },
  {
    info: 'web3games',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9947
      name: 'Web3Games Foundation',
      url: 'wss://devnet.web3games.org'
    }],
    text: 'Web3Games',
    ui: {
      color: '#000000',
      logo: nodesWeb3gamesSVG
    }
  },
  {
    info: 'xsocial',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10555
      name: 'DappForce',
      url: 'wss://xsocial.subsocial.network'
    }],
    text: 'xSocial',
    ui: {
      logo: nodesSoonsocialPNG
    }
  },
  {
    info: 'zCloak',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/7408
      name: 'zCloak Network',
      url: 'wss://test1.zcloak.network'
    }],
    text: 'zCloak-network',
    ui: {
      color: 'linear-gradient(to right, #E89A76 0%, #C5B8CC 50%, #B0B4D7 100%)',
      logo: nodesZCloakSVG
    }
  },
  {
    homepage: 'https://zero.io',
    info: 'ZERO Alphaville',
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11026
      name: 'GameDAO',
      url: 'wss://rpc.dev.gamedao.net'
    }],
    text: 'ZERO Alphaville',
    ui: {
      color: '#00ffcc',
      logo: nodesZeroSVG
    }
  },
  {
    genesisHash: ZKVERIFY_VOLTA_GENESIS,
    info: 'zkVerify-testnet',
    isPeople: true,
    isRelay: true,
    linked: [
      ...testZkVerifyParas
    ],
    providers: [{
      isAvailable: true,
      name: 'zkVerify',
      url: 'wss://zkverify-volta-rpc.zkverify.io'
    }],
    text: 'zkVerify Volta Testnet',
    ui: {
      color: '#15AA6A',
      logo: nodesZkVerifyPNG
    }
  }
];
