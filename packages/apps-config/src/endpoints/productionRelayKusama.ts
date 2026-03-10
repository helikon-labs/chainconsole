// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { KUSAMA_GENESIS } from '../api/constants.js';
import { chainsAbandPNG, chainsAcurastSVG, chainsAltairSVG, chainsAmplitudeSVG, chainsAssethubKusamaSVG, chainsCoretimeKusamaSVG, chainsDorafactoryPNG, chainsGenshiroSVG, chainsGmJPEG, chainsKaruraSVG, chainsKicoPNG, chainsKintsugiPNG, chainsKreivoSVG, chainsKusamaSVG, chainsListenPNG, chainsPeopleKusamaSVG, chainsQpnPNG, chainsRiodefiPNG, chainsShidenPNG, chainsTinkerPNG, chainsTuringPNG, chainsUnorthodoxPNG } from '../ui/logos/chains/index.js';
import { nodesApronPNG, nodesAresMarsPNG, nodesBajunPNG, nodesBasiliskPNG, nodesBifrostSVG, nodesBitcountryPNG, nodesBridgeHubBlackSVG, nodesCalamariPNG, nodesCrabSVG, nodesCurioSVG, nodesDatahighwayPNG, nodesEncointerBlueSVG, nodesHyperbridgePNG, nodesImbuePNG, nodesIpciSVG, nodesKabochaSVG, nodesKhalaSVG, nodesKrestPNG, nodesLoomNetworkPNG, nodesMoonriverSVG, nodesParallelSVG, nodesPicassoPNG, nodesPichiuPNG, nodesPolkasmithSVG, nodesQuartzPNG, nodesRegionxPNG, nodesRobonomicsSVG, nodesSakuraSVG, nodesShadowSVG, nodesSnowPNG, nodesSoraSubstrateSVG, nodesT1rnPNG, nodesTrustbasePNG, nodesXodePNG, nodesYerbanetworkPNG, nodesZeroSVG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasKusama: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://a.band',
    info: 'aband',
    paraId: 2257,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9334
      name: 'Aband DAO',
      url: 'wss://rpc-parachain.a.band'
    }],
    text: 'Aband',
    ui: {
      color: '#7358ff',
      logo: chainsAbandPNG
    }
  },
  {
    homepage: 'https://acurast.com',
    info: 'acurast',
    paraId: 2239,
    providers: [{
      isAvailable: true,
      name: 'Acurast',
      url: 'wss://public-rpc.canary.acurast.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10667
      name: 'Acurast Papers',
      url: 'wss://acurast-canarynet-ws.prod.gke.papers.tech'
    }],
    text: 'Acurast Canary',
    ui: {
      color: '#000000',
      logo: chainsAcurastSVG
    }
  },
  {
    homepage: 'https://centrifuge.io/altair',
    info: 'altair',
    paraId: 2088,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11566
      name: 'Centrifuge',
      url: 'wss://fullnode.altair.centrifuge.io'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://altair.api.onfinality.io/public-ws'
    }],
    text: 'Altair',
    ui: {
      color: '#ffb700',
      logo: chainsAltairSVG
    }
  },
  {
    homepage: 'https://pendulumchain.org/amplitude',
    info: 'amplitude',
    paraId: 2124,
    providers: [{
      isAvailable: true,
      name: 'PendulumChain',
      url: 'wss://rpc-amplitude.pendulumchain.tech'
    }],
    text: 'Amplitude',
    ui: {
      color: '#5DEFA7',
      logo: chainsAmplitudeSVG
    }
  },
  {
    homepage: 'https://ajuna.io',
    info: 'bajun',
    paraId: 2119,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11544
      name: 'AjunaNetwork',
      url: 'wss://rpc-para.bajun.network'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://bajun.api.onfinality.io/public-ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11157
      name: 'RadiumBlock',
      url: 'wss://bajun.public.curie.radiumblock.co/ws'
    }],
    text: 'Bajun Network',
    ui: {
      color: '#161212',
      logo: nodesBajunPNG
    }
  },
  {
    homepage: 'https://app.basilisk.cloud',
    info: 'basilisk',
    paraId: 2090,
    providers: [{
      isAvailable: true,
      name: 'Basilisk',
      url: 'wss://rpc.basilisk.cloud'
    }, {
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://basilisk-rpc.n.dwellir.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9414
      name: 'OnFinality',
      url: 'wss://basilisk.api.onfinality.io/public-ws'
    }],
    text: 'Basilisk',
    ui: {
      color: '#49E49F',
      logo: nodesBasiliskPNG
    }
  },
  {
    homepage: 'https://bifrost.io/',
    info: 'bifrost',
    paraId: 2001,
    providers: [{
      isAvailable: true,
      name: 'Liebi',
      url: 'wss://bifrost-rpc.liebi.com/ws'
    }, {
      isAvailable: true,
      name: 'LiebiUS',
      url: 'wss://us.bifrost-rpc.liebi.com/ws'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://bifrost-parachain.api.onfinality.io/public-ws'
    }],
    text: 'Bifrost',
    ui: {
      color: '#5a25f0',
      logo: nodesBifrostSVG
    }
  },
  {
    homepage: 'https://www.calamari.network/',
    info: 'calamari',
    paraId: 2084,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11439
      name: 'Manta Network',
      url: 'wss://calamari.systems'
    }],
    text: 'Calamari',
    ui: {
      color: '#000000',
      logo: nodesCalamariPNG
    }
  },
  {
    homepage: 'https://crab.network',
    info: 'crab',
    paraId: 2105,
    providers: [{
      isAvailable: true,
      name: 'Darwinia',
      url: 'wss://crab-rpc.darwinia.network/'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11232
      name: 'Dcdao',
      url: 'wss://crab-rpc.dcdao.box'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11965
      name: 'Dwellir',
      url: 'wss://darwiniacrab-rpc.n.dwellir.com'
    }],
    text: 'Crab',
    ui: {
      color: '#512DBC',
      logo: nodesCrabSVG
    }
  },
  {
    homepage: 'https://crust.network/',
    info: 'shadow',
    paraId: 2012,
    providers: [{
      isAvailable: true,
      name: 'Crust',
      url: 'wss://rpc-shadow.crust.network/'
    }, {
      isAvailable: true,
      name: 'Crust APP',
      url: 'wss://rpc-shadow.crustnetwork.app'
    }, {
      isAvailable: true,
      name: 'Crust CC',
      url: 'wss://rpc-shadow.crustnetwork.cc'
    }, {
      isAvailable: true,
      name: 'Crust XYZ',
      url: 'wss://rpc-shadow.crustnetwork.xyz'
    }],
    text: 'Crust Shadow',
    ui: {
      logo: nodesShadowSVG
    }
  },
  {
    homepage: 'https://crust.network/',
    info: 'shadow',
    isUnreachable: true,
    paraId: 2225,
    providers: [{
      // also duplicated right above (hence marked unreachable)
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8355
      name: 'Crust',
      url: 'wss://rpc-shadow.crust.network/'
    }],
    text: 'Crust Shadow 2',
    ui: {
      logo: nodesShadowSVG
    }
  },
  {
    info: 'curio',
    paraId: 3339,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11809
      name: 'Curio',
      url: 'wss://parachain.curioinvest.com/'
    }],
    text: 'Curio',
    ui: {
      color: 'rgb(96, 98, 246)',
      logo: nodesCurioSVG
    }
  },
  {
    homepage: 'https://ipci.io',
    info: 'ipci',
    paraId: 2222,
    providers: [{
      isAvailable: true,
      name: 'Airalab',
      url: 'wss://ipci.rpc.robonomics.network'
    }],
    text: 'DAO IPCI',
    ui: {
      logo: nodesIpciSVG
    }
  },
  {
    homepage: 'https://dorafactory.org/kusama/',
    info: 'dorafactory',
    paraId: 2115,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9748
      name: 'DORA',
      url: 'wss://kusama.dorafactory.org'
    }],
    text: 'Dora Factory',
    ui: {
      color: '#FF761C',
      logo: chainsDorafactoryPNG
    }
  },
  {
    homepage: 'https://genshiro.io',
    info: 'Genshiro',
    paraId: 2024,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10174
      name: 'Genshiro',
      url: 'wss://node.genshiro.io'
    }],
    text: 'Genshiro',
    ui: {
      color: '#e8662d',
      logo: chainsGenshiroSVG
    }
  },
  {
    homepage: 'https://genshiro.equilibrium.io',
    info: 'genshiro',
    isUnreachable: true,
    paraId: 2226,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10174
      name: 'Equilibrium',
      url: 'wss://node.genshiro.io'
    }],
    text: 'Genshiro crowdloan 2',
    ui: {
      color: '#e8662d',
      logo: chainsGenshiroSVG
    }
  },
  {
    homepage: 'https://gmordie.com',
    info: 'gm',
    paraId: 2123,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8457
      name: 'GMorDieDAO',
      url: 'wss://kusama.gmordie.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9381
      name: 'GM Intern',
      url: 'wss://intern.gmordie.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8867
      name: 'TerraBioDAO',
      url: 'wss://ws-node-gm.terrabiodao.org'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9712
      name: 'Leemo',
      url: 'wss://leemo.gmordie.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9947
      name: 'bLd Nodes',
      url: 'wss://ws.gm.bldnodes.org'
    }, {
      isAvailable: true,
      name: 'light client',
      url: 'light://substrate-connect/kusama/gm'
    }],
    text: 'GM',
    ui: {
      color: '#f47b36',
      logo: chainsGmJPEG
    }
  },
  {
    homepage: 'https://hyperbridge.network',
    info: 'hyperbridge',
    paraId: 3340,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10555
      name: 'BlockOps',
      url: 'wss://hyperbridge-messier-rpc.blockops.network'
    }],
    text: 'Hyperbridge (Messier)',
    ui: {
      color: '#ED6FF1',
      logo: nodesHyperbridgePNG
    }
  },
  {
    homepage: 'https://imbue.network',
    info: 'imbue',
    paraId: 2121,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11364
      name: 'Imbue Network 0',
      url: 'wss://kusama.imbuenetwork.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9848
      name: 'Imbue Network 1',
      url: 'wss://collator.production.imbue.network'
    }],
    text: 'Imbue Network',
    ui: {
      color: '#baff36',
      logo: nodesImbuePNG
    }
  },
  {
    homepage: 'https://invarch.network/tinkernet',
    info: 'tinker',
    paraId: 2125,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8623
      name: 'InvArch Team',
      url: 'wss://tinker.invarch.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9955
      name: 'OnFinality',
      url: 'wss://invarch-tinkernet.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'light client',
      url: 'light://substrate-connect/kusama/tinkernet'
    }],
    text: 'InvArch Tinkernet',
    ui: {
      color: '#161616',
      logo: chainsTinkerPNG
    }
  },
  {
    homepage: 'https://kabocha.network',
    info: 'kabocha',
    paraId: 2113,
    providers: [{
      isAvailable: true,
      name: 'JelliedOwl',
      url: 'wss://kabocha.jelliedowl.net'
    }],
    text: 'Kabocha',
    ui: {
      color: 'repeating-radial-gradient(black, black 4px, yellow 5px)',
      logo: nodesKabochaSVG
    }
  },
  {
    homepage: 'https://acala.network/karura/join-karura',
    info: 'karura',
    paraId: 2000,
    providers: [{
      isAvailable: true,
      name: 'Acala Foundation 0',
      url: 'wss://karura-rpc-0.aca-api.network'
    }, {
      isAvailable: true,
      name: 'Acala Foundation 1',
      url: 'wss://karura-rpc-1.aca-api.network'
    }, {
      isAvailable: true,
      name: 'Acala Foundation 2',
      url: 'wss://karura-rpc-2.aca-api.network/ws'
    }, {
      isAvailable: true,
      name: 'Acala Foundation 3',
      url: 'wss://karura-rpc-3.aca-api.network/ws'
    }, {
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://karura-rpc.n.dwellir.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10663
      name: 'LuckyFriday',
      url: 'wss://rpc-karura.luckyfriday.io'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://karura.api.onfinality.io/public-ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9383
      name: 'Polkawallet 0',
      url: 'wss://karura.polkawallet.io'
    }],
    text: 'Karura',
    ui: {
      color: '#ff4c3b',
      logo: chainsKaruraSVG
    }
  },
  {
    homepage: 'https://phala.network/',
    info: 'khala',
    paraId: 2004,
    providers: [{
      isAvailable: false,
      name: 'Helikon',
      url: 'wss://rpc.helikon.io/khala'
    }, {
      isAvailable: false,
      name: 'OnFinality',
      url: 'wss://khala.api.onfinality.io/public-ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11178
      name: 'Phala',
      url: 'wss://khala-api.phala.network/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11274
      name: 'RadiumBlock',
      url: 'wss://khala.public.curie.radiumblock.co/ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10728
      name: 'Rockx',
      url: 'wss://rockx-khala.w3node.com/polka-public-khala/ws'
    }],
    text: 'Khala Network',
    ui: {
      color: '#03f3f3',
      logo: nodesKhalaSVG
    }
  },
  {
    homepage: 'https://dico.io/',
    info: 'kico',
    paraId: 2107,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9266
      name: 'DICO Foundation',
      url: 'wss://rpc.kico.dico.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8203
      name: 'DICO Foundation 2',
      url: 'wss://rpc.api.kico.dico.io'
    }],
    text: 'KICO',
    ui: {
      color: '#29B58D',
      logo: chainsKicoPNG
    }
  },
  {
    homepage: 'https://dico.io/',
    info: 'kico 2',
    paraId: 2235,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8415
      name: 'DICO Foundation',
      url: 'wss://rpc.kico2.dico.io'
    }],
    text: 'KICO 2',
    ui: {
      color: '#29B58D',
      logo: chainsKicoPNG
    }
  },
  {
    homepage: 'https://kintsugi.interlay.io/',
    info: 'kintsugi',
    paraId: 2092,
    providers: [{
      isAvailable: true,
      name: 'Kintsugi Labs',
      url: 'wss://api-kusama.interlay.io/parachain'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9947
      name: 'LuckyFriday',
      url: 'wss://rpc-kintsugi.luckyfriday.io/'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://kintsugi.api.onfinality.io/public-ws'
    }],
    text: 'Kintsugi BTC',
    ui: {
      color: '#1a0a2d',
      logo: chainsKintsugiPNG
    }
  },
  {
    homepage: 'http://apron.network/',
    info: 'kpron',
    isUnreachable: true,
    paraId: 2019,
    providers: [{
      isAvailable: true,
      name: 'Kpron',
      url: 'wss://kusama-kpron-rpc.apron.network/'
    }],
    text: 'Kpron',
    ui: {
      color: 'linear-gradient(45deg, #0099F7 0%, #2E49EB 100%)',
      logo: nodesApronPNG
    }
  },
  {
    homepage: 'https://virto.network/',
    info: 'kreivo',
    isPeopleForIdentity: true,
    paraId: 2281,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/12069
      name: 'Kippu',
      url: 'wss://kreivo.kippu.rocks/'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11544
      name: 'Virto',
      url: 'wss://kreivo.io/'
    }],
    relayName: 'kusama',
    text: 'Kreivo - By Virto',
    ui: {
      color: '#294940',
      identityIcon: 'polkadot',
      logo: chainsKreivoSVG
    }
  },
  {
    homepage: 'https://krest.peaq.network/',
    info: 'krest',
    paraId: 2241,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/12018
      name: 'Krest',
      url: 'wss://wss-krest.peaq.network/'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://krest.api.onfinality.io/public-ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10997
      name: 'UnitedBloc',
      url: 'wss://krest.unitedbloc.com/'
    }],
    text: 'Krest',
    ui: {
      logo: nodesKrestPNG
    }
  },
  {
    homepage: 'https://listen.io/',
    info: 'listen',
    paraId: 2118,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9069
      name: 'Listen Foundation 1',
      url: 'wss://rpc.mainnet.listen.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9106
      name: 'Listen Foundation 2',
      url: 'wss://wss.mainnet.listen.io'
    }],
    text: 'Listen Network',
    ui: {
      color: '#FFAD0A',
      logo: chainsListenPNG
    }
  },
  {
    homepage: 'https://loomx.io/',
    info: 'loomNetwork',
    paraId: 2080,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/5888
      name: 'LoomNetwork',
      url: 'wss://kusama.dappchains.com'
    }],
    text: 'Loom Network',
    ui: {
      logo: nodesLoomNetworkPNG
    }
  },
  {
    homepage: 'https://www.aresprotocol.io/mars',
    info: 'mars',
    paraId: 2008,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8937
      name: 'AresProtocol',
      url: 'wss://wss.mars.aresprotocol.io'
    }],
    text: 'Mars',
    ui: {
      color: '#E56239',
      logo: nodesAresMarsPNG
    }
  },
  {
    homepage: 'https://moonbeam.network/networks/moonriver/',
    info: 'moonriver',
    paraId: 2023,
    providers: [{
      isAvailable: true,
      name: 'Allnodes',
      url: 'wss://moonriver-rpc.publicnode.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11935
      name: 'Dwellir',
      url: 'wss://moonriver-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Moonbeam Foundation',
      url: 'wss://wss.api.moonriver.moonbeam.network'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://moonriver.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'RadiumBlock',
      url: 'wss://moonriver.public.curie.radiumblock.co/ws'
    }, {
      isAvailable: true,
      name: 'UnitedBloc',
      url: 'wss://moonriver.unitedbloc.com'
    }],
    text: 'Moonriver',
    ui: {
      color: '#06353d',
      logo: nodesMoonriverSVG
    }
  },
  {
    homepage: 'https://parallel.fi',
    info: 'heiko',
    paraId: 2085,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9964
      name: 'OnFinality',
      url: 'wss://parallel-heiko.api.onfinality.io/public-ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11337
      name: 'Parallel',
      url: 'wss://heiko-rpc.parallel.fi'
    }],
    text: 'Parallel Heiko',
    ui: {
      color: '#42d5de',
      logo: nodesParallelSVG
    }
  },
  {
    homepage: 'https://parallel.fi',
    info: 'heiko',
    isUnreachable: true,
    paraId: 2126,
    providers: [],
    text: 'Parallel Heiko 2',
    ui: {
      color: '#42d5de',
      logo: nodesParallelSVG
    }
  },
  {
    homepage: 'https://picasso.composable.finance/',
    info: 'picasso',
    paraId: 2087,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11935
      name: 'Composable',
      url: 'wss://rpc.composablenodes.tech'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9947
      name: 'LuckyFriday',
      url: 'wss://rpc-picasso.luckyfriday.io'
    }],
    text: 'Picasso',
    ui: {
      color: '#000000',
      logo: nodesPicassoPNG
    }
  },
  {
    homepage: 'https://kylin.network/',
    info: 'pichiu',
    paraId: 2102,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9560
      name: 'Kylin Network',
      url: 'wss://kusama.kylin-node.co.uk'
    }],
    text: 'Pichiu',
    ui: {
      color: '#ed007e',
      logo: nodesPichiuPNG
    }
  },
  {
    homepage: 'https://pioneer.bit.country/?ref=polkadotjs',
    info: 'pioneer',
    paraId: 2096,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11531
      name: 'MetaverseNetwork',
      url: 'wss://pioneer-rpc-3.bit.country/wss'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9955
      name: 'OnFinality',
      url: 'wss://pioneer.api.onfinality.io/public-ws'
    }],
    text: 'Pioneer',
    ui: {
      color: '#000000',
      logo: nodesBitcountryPNG
    }
  },
  {
    homepage: 'https://polkasmith.polkafoundry.com/',
    info: 'polkasmith',
    paraId: 2009,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/6595
      name: 'PolkaSmith',
      url: 'wss://wss-polkasmith.polkafoundry.com'
    }],
    text: 'PolkaSmith by PolkaFoundry',
    ui: {
      color: '#0DDDFB',
      logo: nodesPolkasmithSVG
    }
  },
  {
    info: 'qpn',
    paraId: 2274,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
      name: 'FerrumNetwork',
      url: 'wss://qpn.svcs.ferrumnetwork.io/'
    }],
    text: 'Quantum Portal Network',
    ui: {
      color: '#b37700',
      logo: chainsQpnPNG
    }
  },
  {
    homepage: 'https://unique.network/',
    info: 'quartz',
    paraId: 2095,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11513
      name: 'Dwellir',
      url: 'wss://quartz-rpc.n.dwellir.com'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9972
      name: 'OnFinality',
      url: 'wss://quartz.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Geo Load Balancer',
      url: 'wss://ws-quartz.unique.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11477
      name: 'Unique America',
      url: 'wss://us-ws-quartz.unique.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11846
      name: 'Unique Asia',
      url: 'wss://asia-ws-quartz.unique.network'
    }, {
      isAvailable: false,
      name: 'Unique Europe',
      url: 'wss://eu-ws-quartz.unique.network'
    }],
    text: 'QUARTZ by UNIQUE',
    ui: {
      color: '#FF4D6A',
      logo: nodesQuartzPNG
    }
  },
  {
    homepage: 'https://www.regionx.tech/',
    info: 'regionx',
    paraId: 3422,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11992
      name: 'RegionX',
      url: 'wss://regionx-kusama-rpc-lb.zeeve.net/ld940yl9c6/rpc'
    }],
    text: 'RegionX',
    ui: {
      color: '#0CC184',
      logo: nodesRegionxPNG
    }
  },
  {
    homepage: 'https://riodefi.com',
    info: 'riodefi',
    paraId: 2227,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9261
      name: 'RioProtocol',
      url: 'wss://rio-kusama.riocorenetwork.com'
    }],
    text: 'RioDeFi',
    ui: {
      color: '#4E7AED',
      logo: chainsRiodefiPNG
    }
  },
  {
    homepage: 'https://robonomics.network/',
    info: 'robonomics',
    paraId: 2048,
    providers: [{
      isAvailable: true,
      name: 'Airalab',
      url: 'wss://kusama.rpc.robonomics.network/'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9817
      name: 'Leemo',
      url: 'wss://robonomics.leemo.me'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9824
      name: 'OnFinality',
      url: 'wss://robonomics.api.onfinality.io/public-ws'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11026
      name: 'Samsara',
      url: 'wss://robonomics.0xsamsara.com'
    }],
    text: 'Robonomics',
    ui: {
      color: '#000000',
      logo: nodesRobonomicsSVG
    }
  },
  {
    homepage: 'https://clover.finance/',
    info: 'sakura',
    isUnreachable: true,
    paraId: 2016,
    providers: [{
      isAvailable: true,
      name: 'Clover',
      url: 'wss://api-sakura.clover.finance'
    }],
    text: 'Sakura',
    ui: {
      color: '#ff5995',
      logo: nodesSakuraSVG
    }
  },
  {
    homepage: 'https://shiden.astar.network/',
    info: 'shiden',
    paraId: 2007,
    providers: [{
      isAvailable: true,
      name: 'Astar',
      url: 'wss://rpc.shiden.astar.network'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11610
      name: 'Blast',
      url: 'wss://shiden.public.blastapi.io'
    }, {
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://shiden-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://shiden.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'RadiumBlock',
      url: 'wss://shiden.public.curie.radiumblock.co/ws'
    }, {
      isAvailable: true,
      name: 'light client',
      url: 'light://substrate-connect/kusama/shiden'
    }],
    text: 'Shiden',
    ui: {
      color: '#5923B2',
      logo: chainsShidenPNG
    }
  },
  {
    homepage: 'https://shiden.astar.network/',
    info: 'shiden',
    isUnreachable: true,
    paraId: 2120,
    providers: [{
      isAvailable: true,
      name: 'StakeTechnologies',
      url: 'wss://rpc.shiden.astar.network'
    }],
    text: 'Shiden Crowdloan 2',
    ui: {
      color: '#5923B2',
      logo: chainsShidenPNG
    }
  },
  {
    homepage: 'https://icenetwork.io/snow',
    info: 'snow',
    paraId: 2129,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9405
      name: 'IceNetwork',
      url: 'wss://snow-rpc.icenetwork.io'
    }],
    text: 'SNOW Network',
    ui: {
      logo: nodesSnowPNG
    }
  },
  {
    homepage: 'https://sora.org/',
    info: 'sora',
    paraId: 2011,
    providers: [{
      isAvailable: true,
      name: 'Soramitsu',
      url: 'wss://ws.parachain-collator-2.c2.sora2.soramitsu.co.jp'
    }],
    text: 'SORA',
    ui: {
      color: '#2D2926',
      logo: nodesSoraSubstrateSVG
    }
  },
  {
    homepage: 'https://www.t3rn.io/',
    info: 't1rn',
    paraId: 3334,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10091
      name: 't3rn',
      url: 'wss://rpc.t1rn.io'
    }],
    text: 't1rn',
    ui: {
      color: '#131532',
      logo: nodesT1rnPNG
    }
  },
  {
    homepage: 'https://www.datahighway.com/',
    info: 'tanganika',
    paraId: 2116,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9383
      name: 'DataHighway',
      url: 'wss://tanganika.datahighway.com'
    }],
    text: 'Tanganika',
    ui: {
      color: 'linear-gradient(-90deg, #9400D3 0%, #5A5CA9 50%, #00BFFF 100%)',
      logo: nodesDatahighwayPNG
    }
  },
  {
    homepage: 'https://trustbase.network/',
    info: 'trustbase',
    isUnreachable: true,
    paraId: 2078,
    providers: [],
    text: 'TrustBase',
    ui: {
      color: '#ff43aa',
      logo: nodesTrustbasePNG
    }
  },
  {
    homepage: 'https://oak.tech',
    info: 'turing',
    paraId: 2114,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11098
      name: 'OAK',
      url: 'wss://rpc.turing.oak.tech'
    }],
    text: 'Turing Network',
    ui: {
      color: '#A8278C',
      logo: chainsTuringPNG
    }
  },
  {
    homepage: 'https://standard.tech/',
    info: 'unorthodox',
    paraId: 2094,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/8525
      name: 'Standard Protocol',
      url: 'wss://rpc.kusama.standard.tech'
    }],
    text: 'Unorthodox',
    ui: {
      color: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(42,244,187,1) 35%, rgba(10,10,10,1) 100%)',
      logo: chainsUnorthodoxPNG
    }
  },
  {
    homepage: 'https://xode.net',
    info: 'xode',
    paraId: 3344,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/12007
      name: 'XodeCommunity',
      url: 'wss://kusama-rpcnode.xode.net'
    }],
    text: 'Xode',
    ui: {
      color: '#ed1f7a',
      logo: nodesXodePNG
    }
  },
  {
    homepage: 'https://yerba.network',
    info: 'yerba',
    paraId: 3345,
    providers: [],
    text: 'Yerba Network',
    ui: {
      color: '#a5503c',
      logo: nodesYerbanetworkPNG
    }
  },
  {
    homepage: 'https://zero.io',
    info: 'zero',
    paraId: 2236,
    providers: [{
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/10803
      name: 'Zero Network',
      url: 'wss://rpc-1.kusama.node.zero.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/11026
      name: 'GameDAO',
      url: 'wss://rpc-1.gamedao.net'
    }],
    text: 'ZERO Canary',
    ui: {
      color: '#000000',
      logo: nodesZeroSVG
    }
  }
];

export const prodParasKusamaCommon: EndpointOption[] = [
  {
    info: 'KusamaAssetHub',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://asset-hub-kusama-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Dwellir Tunisia',
      url: 'wss://statemine-rpc-tn.dwellir.com'
    }, {
      isAvailable: true,
      name: 'IBP1',
      url: 'wss://asset-hub-kusama.ibp.network'
    }, {
      isAvailable: true,
      name: 'IBP2',
      url: 'wss://asset-hub-kusama.dotters.network'
    }, {
      isAvailable: true,
      name: 'LuckyFriday',
      url: 'wss://rpc-asset-hub-kusama.luckyfriday.io'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://assethub-kusama.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://kusama-asset-hub-rpc.polkadot.io'
    }, {
      isAvailable: true,
      name: 'RadiumBlock',
      url: 'wss://statemine.public.curie.radiumblock.co/ws'
    }, {
      isAvailable: false,
      name: 'Stakeworld',
      url: 'wss://rpc-assethub-kusama.stakeworld.io'
    }],
    relayName: 'kusama',
    teleport: [-1, 1002, 1005, 1001, 1004],
    text: 'Asset Hub',
    ui: {
      color: '#113911',
      logo: chainsAssethubKusamaSVG
    }
  },
  {
    info: 'kusamaBridgeHub',
    isPeopleForIdentity: true,
    paraId: 1002,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://bridge-hub-kusama-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Dwellir Tunisia',
      url: 'wss://kusama-bridge-hub-rpc-tn.dwellir.com'
    }, {
      isAvailable: true,
      name: 'IBP1',
      url: 'wss://bridge-hub-kusama.ibp.network'
    }, {
      isAvailable: true,
      name: 'IBP2',
      url: 'wss://bridge-hub-kusama.dotters.network'
    }, {
      isAvailable: true,
      name: 'LuckyFriday',
      url: 'wss://rpc-bridge-hub-kusama.luckyfriday.io'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://bridgehub-kusama.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://kusama-bridge-hub-rpc.polkadot.io'
    }, {
      isAvailable: true,
      name: 'RadiumBlock',
      url: 'wss://bridgehub-kusama.public.curie.radiumblock.co/ws'
    }, {
      isAvailable: false,
      name: 'Stakeworld',
      url: 'wss://rpc-bridgehub-kusama.stakeworld.io'
    }],
    relayName: 'kusama',
    teleport: [-1, 1000],
    text: 'Bridge Hub',
    ui: {
      logo: nodesBridgeHubBlackSVG
    }
  },
  {
    info: 'kusamaCoretime',
    isPeopleForIdentity: true,
    paraId: 1005,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://coretime-kusama-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'IBP1',
      url: 'wss://coretime-kusama.ibp.network'
    }, {
      isAvailable: true,
      name: 'IBP2',
      url: 'wss://coretime-kusama.dotters.network'
    }, {
      isAvailable: true,
      name: 'LuckyFriday',
      url: 'wss://rpc-coretime-kusama.luckyfriday.io'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://coretime-kusama.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://kusama-coretime-rpc.polkadot.io'
    }, {
      isAvailable: false,
      name: 'Stakeworld',
      url: 'wss://rpc-coretime-kusama.stakeworld.io'
    }],
    relayName: 'kusama',
    teleport: [-1, 1000],
    text: 'Coretime',
    ui: {
      color: '#113911',
      logo: chainsCoretimeKusamaSVG
    }
  },
  {
    homepage: 'https://encointer.org/',
    info: 'encointer',
    isPeopleForIdentity: true,
    paraId: 1001,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://encointer-kusama-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Encointer Association',
      url: 'wss://kusama.api.encointer.org'
    }, {
      isAvailable: true,
      name: 'IBP1',
      url: 'wss://encointer-kusama.ibp.network'
    }, {
      isAvailable: true,
      name: 'IBP2',
      url: 'wss://encointer-kusama.dotters.network'
    }, {
      isAvailable: true,
      name: 'LuckyFriday',
      url: 'wss://rpc-encointer-kusama.luckyfriday.io'
    }, {
      isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
      name: 'OnFinality',
      url: 'wss://encointer.api.onfinality.io/public-ws'
    }, {
      isAvailable: false,
      name: 'Stakeworld',
      url: 'wss://ksm-rpc.stakeworld.io/encointer'
    }],
    relayName: 'kusama',
    teleport: [-1, 1000],
    text: 'Encointer Network',
    ui: {
      color: '#0000cc',
      logo: nodesEncointerBlueSVG
    }
  },
  {
    info: 'kusamaPeople',
    isPeople: true,
    isPeopleForIdentity: false,
    paraId: 1004,
    providers: [{
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://people-kusama-rpc.n.dwellir.com'
    }, {
      isAvailable: true,
      name: 'Helixstreet',
      url: 'wss://rpc-people-kusama.helixstreet.io'
    }, {
      isAvailable: true,
      name: 'IBP1',
      url: 'wss://people-kusama.ibp.network'
    }, {
      isAvailable: true,
      name: 'IBP2',
      url: 'wss://people-kusama.dotters.network'
    }, {
      isAvailable: true,
      name: 'LuckyFriday',
      url: 'wss://rpc-people-kusama.luckyfriday.io'
    }, {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://people-kusama.api.onfinality.io/public-ws'
    }, {
      isAvailable: true,
      name: 'Parity',
      url: 'wss://kusama-people-rpc.polkadot.io'
    }, {
      isAvailable: false,
      name: 'Stakeworld',
      url: 'wss://rpc-people-kusama.stakeworld.io'
    }],
    relayName: 'kusama',
    teleport: [-1, 1000],
    text: 'People',
    ui: {
      color: '#36454F',
      logo: chainsPeopleKusamaSVG
    }
  }
];

export const prodRelayKusama: EndpointOption = {
  dnslink: 'kusama',
  genesisHash: KUSAMA_GENESIS,
  info: 'kusama',
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...prodParasKusamaCommon,
    ...prodParasKusama
  ],
  providers: [{
    isAvailable: false, // https://github.com/polkadot-js/apps/pull/6746
    name: 'Geometry Labs',
    url: 'wss://kusama.geometry.io/websockets'
  }, {
    isAvailable: false,
    name: 'Automata 1RPC',
    url: 'wss://1rpc.io/ksm'
  }, {
    isAvailable: true,
    name: 'Allnodes',
    url: 'wss://kusama-rpc.publicnode.com'
  }, {
    isAvailable: true,
    name: 'Dwellir',
    url: 'wss://kusama-rpc.n.dwellir.com'
  }, {
    isAvailable: true,
    name: 'Dwellir Tunisia',
    url: 'wss://kusama-rpc-tn.dwellir.com'
  }, {
    isAvailable: true,
    name: 'Helixstreet',
    url: 'wss://rpc-kusama.helixstreet.io'
  }, {
    isAvailable: true,
    name: 'IBP1',
    url: 'wss://kusama.ibp.network'
  }, {
    isAvailable: true,
    name: 'IBP2',
    url: 'wss://kusama.dotters.network'
  }, {
    isAvailable: true,
    name: 'LuckyFriday',
    url: 'wss://rpc-kusama.luckyfriday.io'
  }, {
    isAvailable: true,
    name: 'OnFinality',
    url: 'wss://kusama.api.onfinality.io/public-ws'
  }, {
    isAvailable: true,
    name: 'RadiumBlock',
    url: 'wss://kusama.public.curie.radiumblock.co/ws'
  }, {
    isAvailable: false, // https://github.com/polkadot-js/apps/issues/11477
    name: 'RockX',
    url: 'wss://rockx-ksm.w3node.com/polka-public-ksm/ws'
  }, {
    isAvailable: true,
    name: 'Stakeworld',
    url: 'wss://rpc-kusama.stakeworld.io'
  }, {
    isAvailable: false, // https://github.com/polkadot-js/apps/issues/11026
    name: 'SubQuery',
    url: 'wss://kusama.rpc.subquery.network/public/ws'
  }, {
    isAvailable: true,
    name: 'light client',
    url: 'light://substrate-connect/kusama'
  }],
  teleport: getTeleports(prodParasKusamaCommon),
  text: 'Kusama Relay',
  ui: {
    color: '#000000',
    identityIcon: 'polkadot',
    logo: chainsKusamaSVG
  }
};
