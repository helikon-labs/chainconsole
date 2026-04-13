// Copyright 2017-2026 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { POLKADOT_GENESIS } from '../api/constants.js';
import { chainsAcalaSVG, chainsAcurastSVG, chainsBitgreenPNG, chainsComposableFinancePNG, chainsCoretimePolkadotSVG, chainsEquilibriumSVG, chainsFrequencySVG, chainsGeminisPNG, chainsHydrationSVG, chainsInvarchJPEG, chainsLaosPNG, chainsLogionPNG, chainsNeurowebPNG, chainsOakPNG, chainsPeaqPNG, chainsPendulumSVG, chainsPeoplePolkadotSVG, chainsPolkadotCircleSVG, chainsQfNetworkPNG, chainsTotemSVG, chainsWatrPNG } from '../ui/logos/chains/index.js';
import { nodesAjunaPNG, nodesAresOdysseySVG, nodesAssetHubSVG, nodesAstarPNG, nodesAventusSVG, nodesBifrostSVG, nodesBridgeHubSVG, nodesCentrifugePNG, nodesCloverSVG, nodesCoinversationPNG, nodesCollectivesSVG, nodesContinuumPNG, nodesCrustParachainSVG, nodesDarwiniaSVG, nodesEfinitySVG, nodesEwxSVG, nodesHashedPNG, nodesHeimaSVG, nodesHyperbridgePNG, nodesIntegriteeSVG, nodesInterlaySVG, nodesJamtonSVG, nodesKiltIconSVG, nodesKylinPNG, nodesMantaPNG, nodesMoonbeamSVG, nodesMoonsamaSVG, nodesMythosPNG, nodesNodleSVG, nodesOmnibtcSVG, nodesParallelSVG, nodesPhalaSVG, nodesPolkadexSVG, nodesRobonomicsSVG, nodesSoraSubstrateSVG, nodesSubdaoPNG, nodesT3rnPNG, nodesUniqueSVG, nodesXodePNG, nodesZeitgeistPNG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasPolkadot: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://acala.network/',
    info: 'acala',
    paraId: 2000,
    providers: [
      {
        isAvailable: true,
        name: 'Acala Foundation 0',
        url: 'wss://acala-rpc-0.aca-api.network'
      },
      {
        isAvailable: true,
        name: 'Acala Foundation 1',
        url: 'wss://acala-rpc-1.aca-api.network'
      },
      {
        isAvailable: true,
        name: 'Acala Foundation 2',
        url: 'wss://acala-rpc-2.aca-api.network/ws'
      },
      {
        isAvailable: true,
        name: 'Acala Foundation 3',
        url: 'wss://acala-rpc-3.aca-api.network/ws'
      },
      {
        isAvailable: false,
        name: 'Dwellir',
        url: 'wss://acala-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://acala.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://acala.dotters.network'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-acala.luckyfriday.io'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/8648
        name: 'Automata 1RPC',
        url: 'wss://1rpc.io/aca'
      },
      {
        isAvailable: false,
        name: 'OnFinality',
        url: 'wss://acala-polkadot.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9760
        name: 'Polkawallet 0',
        url: 'wss://acala.polkawallet.io'
      }
    ],
    text: 'Acala',
    ui: {
      color: '#645AFF',
      logo: chainsAcalaSVG
    }
  },
  {
    homepage: 'https://acurast.com',
    info: 'acurast',
    paraId: 3396,
    providers: [
      {
        isAvailable: true,
        name: 'Acurast',
        url: 'wss://public-rpc.mainnet.acurast.com'
      }
    ],
    text: 'Acurast',
    ui: {
      color: '#b4e600',
      logo: chainsAcurastSVG
    }
  },
  {
    homepage: 'https://ajuna.io',
    info: 'ajuna',
    paraId: 2051,
    providers: [
      {
        isAvailable: true,
        name: 'AjunaNetwork',
        url: 'wss://rpc-para.ajuna.network'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://ajuna.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://ajuna.dotters.network'
      },
      {
        isAvailable: false,
        name: 'OnFinality',
        url: 'wss://ajuna.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10990
        name: 'RadiumBlock',
        url: 'wss://ajuna.public.curie.radiumblock.co/ws'
      }
    ],
    text: 'Ajuna Network',
    ui: {
      color: '#161212',
      logo: nodesAjunaPNG
    }
  },
  {
    homepage: 'https://www.aresprotocol.io/',
    info: 'odyssey',
    paraId: 2028,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9059
        name: 'AresProtocol',
        url: 'wss://wss.odyssey.aresprotocol.io'
      }
    ],
    text: 'Ares Odyssey',
    ui: {
      color: '#1295F0',
      logo: nodesAresOdysseySVG
    }
  },
  {
    homepage: 'https://astar.network',
    info: 'astar',
    paraId: 2006,
    providers: [
      {
        isAvailable: true,
        name: 'Astar',
        url: 'wss://rpc.astar.network'
      },
      {
        isAvailable: false,
        name: 'Automata 1RPC',
        url: 'wss://1rpc.io/astr'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11965
        name: 'Blast',
        url: 'wss://astar.public.blastapi.io'
      },
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://astar-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://astar.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://astar.public.curie.radiumblock.co/ws'
      }
    ],
    text: 'Astar',
    ui: {
      color: '#1b6dc1d9',
      logo: nodesAstarPNG
    }
  },
  {
    homepage: 'https://www.aventus.io/',
    info: 'aventus',
    paraId: 2056,
    providers: [
      {
        isAvailable: true,
        name: 'Aventus',
        url: 'wss://avn-parachain.mainnet.aventus.io'
      }
    ],
    text: 'Aventus',
    ui: {
      color: '#1d2733',
      logo: nodesAventusSVG
    }
  },
  {
    homepage: 'https://bifrost.io/',
    info: 'bifrost',
    paraId: 2030,
    providers: [
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://bifrost-polkadot.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://bifrost-polkadot.dotters.network'
      },
      {
        isAvailable: false,
        name: 'Liebi',
        url: 'wss://hk.p.bifrost-rpc.liebi.com/ws'
      },
      {
        isAvailable: true,
        name: 'LiebiEU',
        url: 'wss://eu.bifrost-polkadot-rpc.liebi.com/ws'
      },
      {
        isAvailable: false,
        name: 'OnFinality',
        url: 'wss://bifrost-polkadot.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://bifrost.public.curie.radiumblock.co/ws'
      }
    ],
    text: 'Bifrost',
    ui: {
      color: '#5a25f0',
      logo: nodesBifrostSVG
    }
  },
  {
    homepage: 'https://www.bitgreen.org',
    info: 'bitgreen',
    paraId: 2048,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11760
        name: 'Bitgreen',
        url: 'wss://mainnet.bitgreen.org'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9993
        name: 'OnFinality',
        url: 'wss://bitgreen.api.onfinality.io/public-ws'
      }
    ],
    text: 'Bitgreen',
    ui: {
      color: '#224851',
      logo: chainsBitgreenPNG
    }
  },
  {
    homepage: 'https://centrifuge.io',
    info: 'centrifuge',
    paraId: 2031,
    providers: [
      {
        isAvailable: true,
        name: 'Centrifuge',
        url: 'wss://fullnode.centrifuge.io'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-centrifuge.luckyfriday.io'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://centrifuge-parachain.api.onfinality.io/public-ws'
      }
    ],
    text: 'Centrifuge',
    ui: {
      color: '#fcc367',
      logo: nodesCentrifugePNG
    }
  },
  {
    homepage: 'https://clover.finance',
    info: 'clover',
    paraId: 2002,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10172
        name: 'Clover',
        url: 'wss://rpc-para.clover.finance'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
        name: 'OnFinality',
        url: 'wss://clover.api.onfinality.io/public-ws'
      }
    ],
    text: 'Clover',
    ui: {
      color: 'linear-gradient(to right, #52ad75, #7cc773)',
      logo: nodesCloverSVG
    }
  },
  {
    homepage: 'http://www.coinversation.io/',
    info: 'coinversation',
    paraId: 2027,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/6635
        name: 'Coinversation',
        url: 'wss://rpc.coinversation.io/'
      }
    ],
    text: 'Coinversation',
    ui: {
      color: '#e6017a',
      logo: nodesCoinversationPNG
    }
  },
  {
    homepage: 'https://composable.finance/',
    info: 'composable',
    paraId: 2019,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11745
        name: 'Composable',
        url: 'wss://rpc.composable.finance'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
        name: 'OnFinality',
        url: 'wss://composable.api.onfinality.io/public-ws'
      }
    ],
    text: 'Composable Finance',
    ui: {
      color: '#C90E8A',
      logo: chainsComposableFinancePNG
    }
  },
  {
    homepage: 'https://mnet.io/?ref=polkadotjs',
    info: 'continuum',
    paraId: 3346,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11531
        name: 'MNet',
        url: 'wss://continuum-rpc-1.metaverse.network/wss'
      }
    ],
    text: 'Continuum',
    ui: {
      color: 'linear-gradient(94deg, #2B388F 2.95%, #DB126E 97.18%)',
      logo: nodesContinuumPNG
    }
  },
  {
    homepage: 'https://crust.network',
    info: 'crustParachain',
    paraId: 2008,
    providers: [
      {
        isAvailable: true,
        name: 'Crust',
        url: 'wss://crust-parachain.crustapps.net'
      },
      {
        isAvailable: true,
        name: 'Crust APP',
        url: 'wss://crust-parachain.crustnetwork.app'
      },
      {
        isAvailable: true,
        name: 'Crust CC',
        url: 'wss://crust-parachain.crustnetwork.cc'
      },
      {
        isAvailable: true,
        name: 'Crust XYZ',
        url: 'wss://crust-parachain.crustnetwork.xyz'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10013
        name: 'OnFinality',
        url: 'wss://crust-polkadot.api.onfinality.io/public-ws'
      }
    ],
    text: 'Crust',
    ui: {
      logo: nodesCrustParachainSVG
    }
  },
  {
    homepage: 'https://darwinia.network/',
    info: 'darwinia',
    paraId: 2046,
    providers: [
      {
        isAvailable: true,
        name: 'Darwinia',
        url: 'wss://rpc.darwinia.network'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11157
        name: 'Dcdao',
        url: 'wss://darwinia-rpc.dcdao.box'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11965
        name: 'Dwellir',
        url: 'wss://darwinia-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'Subquery',
        url: 'wss://darwinia.rpc.subquery.network/public/ws'
      }
    ],
    text: 'Darwinia',
    ui: {
      color: '#FF0083',
      logo: nodesDarwiniaSVG
    }
  },
  {
    homepage: 'https://efinity.io',
    info: 'efinity',
    paraId: 2021,
    providers: [
      // NOTE We don't support connections to this parachain at all.
      //
      // 1. The chain is migrated away from the parachain with all balances
      // 2. There is a forked relay-involved which we don't support
      //
      // Additional details in original removal at
      // https://github.com/polkadot-js/apps/pull/9555/files#r1225095086
    ],
    text: 'Efinity',
    ui: {
      color: '#496ddb',
      logo: nodesEfinitySVG
    }
  },
  {
    homepage: 'https://energywebx.com/',
    info: 'ewx',
    paraId: 3345,
    providers: [
      {
        isAvailable: true,
        name: 'Energy Web',
        url: 'wss://public-rpc.mainnet.energywebx.com/'
      }
    ],
    text: 'Energy Web X',
    ui: {
      color: '#53B1FF',
      logo: nodesEwxSVG
    }
  },
  {
    homepage: 'https://equilibrium.io/',
    info: 'equilibrium',
    paraId: 2011,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9977
        name: 'OnFinality',
        url: 'wss://equilibrium.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10174
        name: 'Equilibrium',
        url: 'wss://node.equilibrium.io'
      }
    ],
    text: 'Equilibrium',
    ui: {
      color: '#1792ff',
      logo: chainsEquilibriumSVG
    }
  },
  {
    homepage: 'https://frequency.xyz',
    info: 'frequency',
    paraId: 2091,
    providers: [
      {
        isAvailable: true,
        name: 'Frequency 0',
        url: 'wss://0.rpc.frequency.xyz'
      },
      {
        isAvailable: true,
        name: 'Frequency 1',
        url: 'wss://1.rpc.frequency.xyz'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://frequency-polkadot.api.onfinality.io/public-ws'
      }
    ],
    text: 'Frequency',
    ui: {
      color: '#790e70',
      logo: chainsFrequencySVG
    }
  },
  {
    homepage: 'https://geminis.network/',
    info: 'geminis',
    paraId: 2038,
    providers: [
      {
        isAvailable: false,
        name: 'Geminis',
        url: 'wss://rpc.geminis.network'
      }
    ],
    text: 'Geminis',
    ui: {
      logo: chainsGeminisPNG
    }
  },
  {
    homepage: 'https://hashed.network/',
    info: 'hashed',
    paraId: 2093,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11423
        name: 'Hashed Systems 1',
        url: 'wss://c1.hashed.network'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10912
        name: 'Hashed Systems 2',
        url: 'wss://c2.hashed.network'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10912
        name: 'Hashed Systems 3',
        url: 'wss://c3.hashed.network'
      }
    ],
    text: 'Hashed Network',
    ui: {
      color: '#9199A9',
      logo: nodesHashedPNG
    }
  },
  {
    homepage: 'https://heima.network/',
    info: 'heima',
    paraId: 2013,
    providers: [
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://heima-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'Heima',
        url: 'wss://rpc.heima-parachain.heima.network'
      }
    ],
    text: 'Heima',
    ui: {
      color: '#7ed495',
      logo: nodesHeimaSVG
    }
  },
  {
    homepage: 'https://hydration.net/',
    info: 'hydradx',
    paraId: 2034,
    providers: [
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://hydration-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'Galactic Council',
        url: 'wss://rpc.hydradx.cloud'
      },
      {
        isAvailable: true,
        name: 'Helikon',
        url: 'wss://rpc.helikon.io/hydradx'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://hydration.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://hydration.dotters.network'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
        name: 'OnFinality',
        url: 'wss://hydradx.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9760
        name: 'ZeePrime',
        url: 'wss://rpc-lb.data6.zp-labs.net:8443/hydradx/ws/?token=2ZGuGivPJJAxXiT1hR1Yg2MXGjMrhEBYFjgbdPi'
      }
    ],
    text: 'Hydration',
    ui: {
      color: '#240E32',
      logo: chainsHydrationSVG
    }
  },
  {
    homepage: 'https://hyperbridge.network',
    info: 'hyperbridge',
    paraId: 3367,
    providers: [
      {
        isAvailable: false,
        name: 'BlockOps',
        url: 'wss://hyperbridge-nexus-rpc.blockops.network'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://nexus.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://nexus.dotters.network'
      },
      {
        isAvailable: true,
        name: 'Polytope Labs',
        url: 'wss://nexus.rpc.polytope.technology'
      }
    ],
    text: 'Hyperbridge (Nexus)',
    ui: {
      color: '#ED6FF1',
      logo: nodesHyperbridgePNG
    }
  },
  {
    homepage: 'https://integritee.network',
    info: 'integritee',
    paraId: 2039,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/12052
        name: 'Integritee',
        url: 'wss://polkadot.api.integritee.network'
      }
    ],
    text: 'Integritee Network',
    ui: {
      color: '#658ea9',
      logo: nodesIntegriteeSVG
    }
  },
  {
    homepage: 'https://interlay.io/',
    info: 'interlay',
    paraId: 2032,
    providers: [
      {
        isAvailable: true,
        name: 'Kintsugi Labs',
        url: 'wss://api.interlay.io/parachain'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-interlay.luckyfriday.io/'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
        name: 'OnFinality',
        url: 'wss://interlay.api.onfinality.io/public-ws'
      }
    ],
    text: 'Interlay',
    ui: {
      color: '#3E96FF',
      logo: nodesInterlaySVG
    }
  },
  {
    homepage: 'https://invarch.network/',
    info: 'invarch',
    paraId: 3340,
    providers: [
    ],
    text: 'InvArch',
    ui: {
      color: 'linear-gradient(278deg, #f7d365 5.74%, #ff408a 99.41%)',
      logo: chainsInvarchJPEG
    }
  },
  {
    homepage: 'https://jamton.network/',
    info: 'jamton',
    paraId: 3397,
    providers: [
      {
        isAvailable: true,
        name: 'Jamton',
        url: 'wss://rpc.jamton.network'
      }
    ],
    text: 'JAMTON',
    ui: {
      color: '#D33AD6',
      logo: nodesJamtonSVG
    }
  },
  {
    homepage: 'https://totemaccounting.com/',
    info: 'kapex',
    paraId: 2007,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
        name: 'OnFinality',
        url: 'wss://kapex-parachain.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9616
        name: 'Totem',
        url: 'wss://k-ui.kapex.network'
      }
    ],
    text: 'Kapex',
    ui: {
      color: 'linear-gradient(158deg, rgba(226,157,0,1) 0%, rgba(234,55,203,1) 100%)',
      logo: chainsTotemSVG
    }
  },
  {
    homepage: 'https://www.kilt.io/',
    info: 'kilt',
    paraId: 2086,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/12076
        name: 'KILT Foundation',
        url: 'wss://spiritnet.kilt.io/'
      }
    ],
    text: 'KILT Spiritnet',
    ui: {
      color: 'linear-gradient(45deg, #161B3B 0%, #D73D80 100%)',
      logo: nodesKiltIconSVG
    }
  },
  {
    homepage: 'https://kylin.network/',
    info: 'kylin',
    paraId: 2052,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10030
        name: 'Kylin Network',
        url: 'wss://polkadot.kylin-node.co.uk'
      }
    ],
    text: 'Kylin',
    ui: {
      color: '#ed007e',
      logo: nodesKylinPNG
    }
  },
  {
    homepage: 'https://laosnetwork.io/',
    info: 'laos',
    paraId: 3370,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11495
        name: 'Dwellir',
        url: 'wss://laos-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'laosfoundation.io',
        url: 'wss://rpc.laos.laosfoundation.io'
      }
    ],
    text: 'Laos',
    ui: {
      color: 'linear-gradient(90deg, #25143B 0%, #613D93 29.69%, #EF9365 69.79%, #E2CF61 100%)',
      logo: chainsLaosPNG
    }
  },
  {
    homepage: 'https://logion.network/',
    info: 'logion',
    paraId: 3354,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11882
        name: 'Logion 1',
        url: 'wss://para-rpc01.logion.network'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10890
        name: 'Logion 2',
        url: 'wss://para-rpc02.logion.network'
      }
    ],
    text: 'Logion',
    ui: {
      color: 'rgb(21, 38, 101)',
      logo: chainsLogionPNG
    }
  },
  {
    homepage: 'https://manta.network',
    info: 'manta',
    paraId: 2104,
    providers: [
      {
        isAvailable: true,
        name: 'Manta Network',
        url: 'wss://ws.manta.systems'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9977
        name: 'OnFinality',
        url: 'wss://manta.api.onfinality.io/public-ws'
      }
    ],
    text: 'Manta',
    ui: {
      color: '#2070a6',
      logo: nodesMantaPNG
    }
  },
  {
    homepage: 'https://moonbeam.network/networks/moonbeam/',
    info: 'moonbeam',
    paraId: 2004,
    providers: [
      {
        isAvailable: true,
        name: 'Allnodes',
        url: 'wss://moonbeam-rpc.publicnode.com'
      },
      {
        isAvailable: false,
        name: 'Automata 1RPC',
        url: 'wss://1rpc.io/glmr'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11965
        name: 'Blast',
        url: 'wss://moonbeam.public.blastapi.io'
      },
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://moonbeam-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://moonbeam.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://moonbeam.dotters.network'
      },
      {
        isAvailable: true,
        name: 'Moonbeam Foundation',
        url: 'wss://wss.api.moonbeam.network'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://moonbeam.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://moonbeam.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: true,
        name: 'UnitedBloc',
        url: 'wss://moonbeam.unitedbloc.com'
      }
    ],
    text: 'Moonbeam',
    ui: {
      color: '#000000',
      logo: nodesMoonbeamSVG
    }
  },
  {
    homepage: 'https://moonsama.com',
    info: 'moonsama',
    paraId: 3334,
    providers: [
      // Moonsama: 'wss://rpc.moonsama.com/ws' // https://github.com/polkadot-js/apps/issues/10289
    ],
    text: 'Moonsama',
    ui: {
      color: '#1a202c',
      logo: nodesMoonsamaSVG
    }
  },
  {
    homepage: 'https://mythos.foundation/',
    info: 'mythos',
    paraId: 3369,
    providers: [
      {
        isAvailable: true,
        name: 'parity',
        url: 'wss://polkadot-mythos-rpc.polkadot.io'
      }
    ],
    text: 'Mythos',
    ui: {
      color: '#262528',
      logo: nodesMythosPNG
    }
  },
  {
    homepage: 'https://neuroweb.ai',
    info: 'neuroweb',
    paraId: 2043,
    providers: [
      {
        isAvailable: true,
        name: 'TraceLabs',
        url: 'wss://parachain-rpc.origin-trail.network'
      }
    ],
    text: 'NeuroWeb',
    ui: {
      color: '#000000',
      logo: chainsNeurowebPNG
    }
  },
  {
    homepage: 'https://nodle.com',
    info: 'nodle',
    paraId: 2026,
    providers: [
      {
        isAvailable: false,
        name: 'Dwellir',
        url: 'wss://nodle-rpc.dwellir.com'
      }
    ],
    text: 'Nodle',
    ui: {
      color: '#1ab394',
      logo: nodesNodleSVG
    }
  },
  {
    homepage: 'https://oak.tech',
    info: 'oak',
    paraId: 2090,
    providers: [
      {
        isAvailable: false,
        name: 'OAK',
        url: 'wss://rpc.oak.tech'
      }
    ],
    text: 'OAK Network',
    ui: {
      color: '#A8278C',
      logo: chainsOakPNG
    }
  },
  {
    homepage: 'https://www.omnibtc.finance',
    info: 'omnibtc',
    paraId: 2053,
    providers: [
      {
        isAvailable: false,
        name: 'OmniBTC',
        url: 'wss://psc-parachain.coming.chat'
      }
    ],
    text: 'OmniBTC',
    ui: {
      color: '#6759E9',
      logo: nodesOmnibtcSVG
    }
  },
  {
    homepage: 'https://parallel.fi',
    info: 'parallel',
    paraId: 2012,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11221
        name: 'Parallel',
        url: 'wss://polkadot-parallel-rpc.parallel.fi'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/9986
        name: 'OnFinality',
        url: 'wss://parallel.api.onfinality.io/public-ws'
      }
    ],
    text: 'Parallel',
    ui: {
      color: '#ef18ac',
      logo: nodesParallelSVG
    }
  },
  {
    homepage: 'https://peaq.network/',
    info: 'peaq',
    paraId: 3338,
    providers: [
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://peaq.api.onfinality.io/public-ws'
      }
    ],
    text: 'peaq',
    ui: {
      color: '#281C66',
      logo: chainsPeaqPNG
    }
  },
  {
    homepage: 'https://pendulumchain.org/',
    info: 'pendulum',
    paraId: 2094,
    providers: [
      {
        isAvailable: true,
        name: 'PendulumChain',
        url: 'wss://rpc-pendulum.prd.pendulumchain.tech'
      }
    ],
    text: 'Pendulum',
    ui: {
      color: '#49E2FD',
      logo: chainsPendulumSVG
    }
  },
  {
    homepage: 'https://phala.network',
    info: 'phala',
    paraId: 2035,
    providers: [
      {
        isAvailable: false,
        name: 'Dwellir',
        url: 'wss://phala-rpc.n.dwellir.com'
      },
      {
        isAvailable: false,
        name: 'Helikon',
        url: 'wss://rpc.helikon.io/phala'
      },
      {
        isAvailable: false,
        name: 'OnFinality',
        url: 'wss://phala.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false,
        name: 'Phala',
        url: 'wss://api.phala.network/ws'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://phala.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10728
        name: 'Rockx',
        url: 'wss://rockx-phala.w3node.com/polka-public-phala/ws'
      }
    ],
    text: 'Phala Network',
    ui: {
      color: '#c6fa4c',
      logo: nodesPhalaSVG
    }
  },
  {
    homepage: 'https://polkadex.trade/',
    info: 'polkadex',
    paraId: 2040,
    providers: [
      {
        isAvailable: false,
        name: 'OnFinality',
        url: 'wss://polkadex-parachain.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11577
        name: 'RadiumBlock',
        url: 'wss://polkadex-parachain.public.curie.radiumblock.co/ws'
      }
    ],
    text: 'Polkadex',
    ui: {
      color: '#7C30DD',
      logo: nodesPolkadexSVG
    }
  },
  {
    homepage: 'https://qfnetwork.xyz',
    info: 'qf-network',
    paraId: 3426,
    providers: [
      {
        isAvailable: true,
        name: 'QF Network',
        url: 'wss://archive.para.mainnet.qfnode.net'
      }
    ],
    text: 'QF Network',
    ui: {
      color: '#2E2E5C',
      logo: chainsQfNetworkPNG
    }
  },
  {
    homepage: 'http://robonomics.network/',
    info: 'robonomics',
    paraId: 3388,
    providers: [
      {
        isAvailable: true,
        name: 'Airalab',
        url: 'wss://polkadot.rpc.robonomics.network/'
      }
    ],
    text: 'Robonomics',
    ui: {
      color: '#e6007a',
      logo: nodesRobonomicsSVG
    }
  },
  {
    homepage: 'https://sora.org/',
    info: 'sora',
    paraId: 2025,
    providers: [
      {
        isAvailable: true,
        name: 'Soramitsu',
        url: 'wss://ws.parachain-collator-3.pc3.sora2.soramitsu.co.jp'
      }
    ],
    text: 'SORA',
    ui: {
      color: '#2D2926',
      logo: nodesSoraSubstrateSVG
    }
  },
  {
    homepage: 'https://subdao.network/',
    info: 'subdao',
    paraId: 2018,
    providers: [
      {
        isAvailable: false,
        name: 'SubDAO',
        url: 'wss://parachain-rpc.subdao.org'
      }
    ],
    text: 'SubDAO',
    ui: {
      color: 'linear-gradient(50deg, #F20092 0%, #FF4D5D 100%)',
      logo: nodesSubdaoPNG
    }
  },
  {
    homepage: 'https://www.t3rn.io/',
    info: 't3rn',
    paraId: 3333,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11157
        name: 't3rn',
        url: 'wss://ws.t3rn.io'
      }
    ],
    text: 't3rn',
    ui: {
      color: '#6f3bb2',
      logo: nodesT3rnPNG
    }
  },
  {
    homepage: 'https://unique.network/',
    info: 'unique',
    paraId: 2037,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11531
        name: 'Dwellir',
        url: 'wss://unique-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'Geo Load Balancer',
        url: 'wss://ws.unique.network'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://unique.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://unique.dotters.network'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10030
        name: 'OnFinality',
        url: 'wss://unique.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'Unique America',
        url: 'wss://us-ws.unique.network'
      },
      {
        isAvailable: true,
        name: 'Unique Asia',
        url: 'wss://asia-ws.unique.network'
      },
      {
        isAvailable: true,
        name: 'Unique Europe',
        url: 'wss://eu-ws.unique.network'
      }
    ],
    text: 'Unique Network',
    ui: {
      color: '#40BCFF',
      logo: nodesUniqueSVG
    }
  },
  {
    homepage: 'https://www.watr.org/',
    info: 'watr',
    paraId: 2058,
    providers: [
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/10890
        name: 'Watr',
        url: 'wss://watr-rpc.watr-api.network'
      }
    ],
    text: 'Watr Network',
    ui: {
      color: '#373b39',
      logo: chainsWatrPNG
    }
  },
  {
    homepage: 'https://xode.net',
    info: 'xode',
    paraId: 3417,
    providers: [
      {
        isAvailable: true,
        name: 'RakSonCebu',
        url: 'wss://rakson-ceb-rpc.xode.net'
      },
      {
        isAvailable: true,
        name: 'RakSonKorea',
        url: 'wss://rakson-rpc.xode.net'
      },
      {
        isAvailable: true,
        name: 'XodeCommunity',
        url: 'wss://polkadot-rpcnode.xode.net'
      }
    ],
    text: 'Xode',
    ui: {
      color: '#ed1f7a',
      logo: nodesXodePNG
    }
  },
  {
    homepage: 'https://zeitgeist.pm',
    info: 'zeitgeist',
    paraId: 2092,
    providers: [
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://zeitgeist.api.onfinality.io/public-ws'
      },
      {
        isAvailable: false, // https://github.com/polkadot-js/apps/issues/11215
        name: 'ZeitgeistPM',
        url: 'wss://main.rpc.zeitgeist.pm/ws'
      }
    ],
    text: 'Zeitgeist',
    ui: {
      color: 'linear-gradient(180deg, rgba(32,90,172,1) 0%, rgba(26,72,138,1) 50%, rgba(13,36,69,1) 100%)',
      logo: nodesZeitgeistPNG
    }
  }

];

export const prodParasPolkadotCommon: EndpointOption[] = [
  {
    info: 'PolkadotAssetHub',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: [
      {
        isAvailable: true,
        name: 'DeServe',
        url: 'wss://asset-hub.polkadot.rpc.deserve.network'
      },
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://asset-hub-polkadot-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://asset-hub-polkadot.ibp.network'
      },
      {
        isAvailable: true,
        name: 'IBP2',
        url: 'wss://asset-hub-polkadot.dotters.network'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-asset-hub-polkadot.luckyfriday.io'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://statemint.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'Parity',
        url: 'wss://polkadot-asset-hub-rpc.polkadot.io'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://statemint.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: true,
        name: 'Stakeworld',
        url: 'wss://rpc-asset-hub-polkadot.stakeworld.io'
      }
    ],
    relayName: 'polkadot',
    teleport: [-1, 1002, 1001, 1005, 1004],
    text: 'Asset Hub',
    ui: {
      color: '#86e62a',
      logo: nodesAssetHubSVG
    }
  },
  {
    info: 'polkadotBridgeHub',
    isPeopleForIdentity: true,
    paraId: 1002,
    providers: [
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://bridge-hub-polkadot-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://bridge-hub-polkadot.ibp.network'
      },
      {
        isAvailable: true,
        name: 'IBP2',
        url: 'wss://bridge-hub-polkadot.dotters.network'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-bridge-hub-polkadot.luckyfriday.io'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://bridgehub-polkadot.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'Parity',
        url: 'wss://polkadot-bridge-hub-rpc.polkadot.io'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://bridgehub-polkadot.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: true,
        name: 'Spectrum',
        url: 'wss://spectrum-03.simplystaking.xyz/cG9sa2Fkb3QtMDMtOTFkMmYwZGYtcG9sa2Fkb3Q/mgX--uWlEtmNKw/polkadotbridgehub/mainnet/'
      },
      {
        isAvailable: true,
        name: 'Stakeworld',
        url: 'wss://rpc-bridge-hub-polkadot.stakeworld.io'
      }
    ],
    relayName: 'polkadot',
    teleport: [-1, 1000],
    text: 'Bridge Hub',
    ui: {
      logo: nodesBridgeHubSVG
    }
  },
  {
    info: 'polkadotCollectives',
    isPeopleForIdentity: true,
    paraId: 1001,
    providers: [
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://collectives-polkadot-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://collectives-polkadot.ibp.network'
      },
      {
        isAvailable: false,
        name: 'IBP2',
        url: 'wss://collectives-polkadot.dotters.network'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-collectives-polkadot.luckyfriday.io'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://collectives.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'Parity',
        url: 'wss://polkadot-collectives-rpc.polkadot.io'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://collectives.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: true,
        name: 'Stakeworld',
        url: 'wss://rpc-collectives-polkadot.stakeworld.io'
      }
    ],
    relayName: 'polkadot',
    teleport: [-1, 1000],
    text: 'Collectives',
    ui: {
      color: '#e6777a',
      logo: nodesCollectivesSVG
    }
  },
  {
    info: 'polkadotCoretime',
    isPeopleForIdentity: true,
    paraId: 1005,
    providers: [
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://coretime-polkadot-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://coretime-polkadot.ibp.network'
      },
      {
        isAvailable: true,
        name: 'IBP2',
        url: 'wss://coretime-polkadot.dotters.network'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-coretime-polkadot.luckyfriday.io'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://coretime-polkadot.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'Parity',
        url: 'wss://polkadot-coretime-rpc.polkadot.io'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://coretime-polkadot.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: true,
        name: 'Stakeworld',
        url: 'wss://rpc-coretime-polkadot.stakeworld.io'
      }
    ],
    relayName: 'polkadot',
    teleport: [-1, 1000],
    text: 'Coretime',
    ui: {
      color: '#113911',
      logo: chainsCoretimePolkadotSVG
    }
  },
  {
    info: 'polkadotPeople',
    isPeople: true,
    isPeopleForIdentity: false,
    paraId: 1004,
    providers: [
      {
        isAvailable: true,
        name: 'Dwellir',
        url: 'wss://people-polkadot-rpc.n.dwellir.com'
      },
      {
        isAvailable: true,
        name: 'IBP1',
        url: 'wss://people-polkadot.ibp.network'
      },
      {
        isAvailable: true,
        name: 'IBP2',
        url: 'wss://people-polkadot.dotters.network'
      },
      {
        isAvailable: true,
        name: 'LuckyFriday',
        url: 'wss://rpc-people-polkadot.luckyfriday.io'
      },
      {
        isAvailable: true,
        name: 'OnFinality',
        url: 'wss://people-polkadot.api.onfinality.io/public-ws'
      },
      {
        isAvailable: true,
        name: 'Parity',
        url: 'wss://polkadot-people-rpc.polkadot.io'
      },
      {
        isAvailable: true,
        name: 'RadiumBlock',
        url: 'wss://people-polkadot.public.curie.radiumblock.co/ws'
      },
      {
        isAvailable: true,
        name: 'Stakeworld',
        url: 'wss://rpc-people-polkadot.stakeworld.io'
      }
    ],
    relayName: 'polkadot',
    teleport: [-1, 1000],
    text: 'People',
    ui: {
      color: '#e84366',
      logo: chainsPeoplePolkadotSVG
    }
  }
];

export const prodRelayPolkadot: EndpointOption = {
  dnslink: 'polkadot',
  genesisHash: POLKADOT_GENESIS,
  info: 'polkadot',
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...prodParasPolkadotCommon,
    ...prodParasPolkadot
  ],
  providers: [
    {
      isAvailable: true,
      name: 'Allnodes',
      url: 'wss://polkadot-rpc.publicnode.com'
    },
    {
      isAvailable: false, // https://github.com/polkadot-js/apps/pull/6746
      name: 'Geometry Labs',
      url: 'wss://polkadot.geometry.io/websockets'
    },
    {
      isAvailable: false,
      name: 'Automata 1RPC',
      url: 'wss://1rpc.io/dot'
    },
    {
      isAvailable: true,
      name: 'Dwellir',
      url: 'wss://polkadot-rpc.n.dwellir.com'
    },
    {
      isAvailable: true,
      name: 'Helixstreet',
      url: 'wss://rpc-polkadot.helixstreet.io'
    },
    {
      isAvailable: true,
      name: 'IBP1',
      url: 'wss://polkadot.ibp.network'
    },
    {
      isAvailable: true,
      name: 'IBP2',
      url: 'wss://polkadot.dotters.network'
    },
    {
      isAvailable: true,
      name: 'LuckyFriday',
      url: 'wss://rpc-polkadot.luckyfriday.io'
    },
    {
      isAvailable: true,
      name: 'OnFinality',
      url: 'wss://polkadot.api.onfinality.io/public-ws'
    },
    {
      isAvailable: true,
      name: 'RadiumBlock',
      url: 'wss://polkadot.public.curie.radiumblock.co/ws'
    },
    {
      isAvailable: true,
      name: 'RockX',
      url: 'wss://rockx-dot.w3node.com/polka-public-dot/ws'
    },
    {
      isAvailable: true,
      name: 'Spectrum',
      url: 'wss://spectrum-03.simplystaking.xyz/cG9sa2Fkb3QtMDMtOTFkMmYwZGYtcG9sa2Fkb3Q/LjwBJpV3dIKyWQ/polkadot/mainnet/'
    },
    {
      isAvailable: true,
      name: 'Stakeworld',
      url: 'wss://rpc-polkadot.stakeworld.io'
    },
    {
      isAvailable: true,
      name: 'SubQuery',
      url: 'wss://polkadot.rpc.subquery.network/public/ws'
    }
  ],
  teleport: getTeleports(prodParasPolkadotCommon),
  text: 'Polkadot Relay',
  ui: {
    color: '#e6007a',
    identityIcon: 'polkadot',
    logo: chainsPolkadotCircleSVG
  }
};
