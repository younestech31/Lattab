import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// TEMPLATE BUILDERS FOR COMMUNE SCALES
// ============================================================================

// Tazoult Group (Tazoult, El Madher, Ras El Aioun)
const createTazoultScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(70000, 80500),
      centreVille: createRange(85000, 97750),
      zonePeripherique: createRange(60000, 69000),
      zoneEloignement: createRange(50000, 57500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(60000, 69000),
      centreVille: createRange(75000, 86250),
      zonePeripherique: createRange(55000, 63250),
      zoneEloignement: createRange(35000, 40250)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(44000, 50600),
      centreVille: createRange(52000, 59800),
      zonePeripherique: createRange(32000, 36800),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(31000, 35650),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(23200, 26680),
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(45000, 51750),
      zoneEloignement: createRange(36500, 41975)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(42000, 48300),
      centreVille: createRange(48000, 55200),
      zonePeripherique: createRange(35000, 40250),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(34000, 39100)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(80000, 92000),
      centreVille: createRange(95000, 109250),
      zonePeripherique: createRange(71000, 81650)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(70000, 80500),
      centreVille: createRange(80000, 92000),
      zonePeripherique: createRange(58000, 66700)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 66700),
      centreVille: createRange(68000, 78200),
      zonePeripherique: createRange(48000, 55200)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(29000, 33350),
      zoneEloignement: createRange(21200, 24380)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(16800, 19320)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(55000, 63250),
      zonePeripherique: createRange(18000, 20700),
      zoneEloignement: createRange(11000, 12650)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(14000, 16100),
      zoneEloignement: createRange(9000, 10350)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(18000, 20700),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(9000, 10350),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(13000, 14950)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(2700000, 3105000)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(2300000, 2645000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(2000000, 2300000)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(2160000, 2484000)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(1920000, 2208000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(1360000, 1564000)
    }
  ]
});

// Ain Touta Group (Ain Touta, Merouana)
const createAinToutaScale = (name: string): PriceRefCommune => ({
  ...createTazoultScale(name),
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(70000, 80500),
      centreVille: createRange(90000, 103500),
      zonePeripherique: createRange(60000, 69000),
      zoneEloignement: createRange(50000, 57500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(60000, 69000),
      centreVille: createRange(75000, 86250),
      zonePeripherique: createRange(45000, 51750),
      zoneEloignement: createRange(35000, 40250)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(44000, 50600),
      centreVille: createRange(52000, 59800),
      zonePeripherique: createRange(30000, 34500),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(60000, 69000),
      centreVille: createRange(65000, 74750),
      zonePeripherique: createRange(45000, 51750),
      zoneEloignement: createRange(36500, 41975)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(42000, 48300),
      centreVille: createRange(55000, 63250),
      zonePeripherique: createRange(40000, 46000),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(34000, 39100)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(81800, 94070),
      centreVille: createRange(95000, 109250),
      zonePeripherique: createRange(71000, 81650)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(70300, 80845),
      centreVille: createRange(80700, 92805),
      zonePeripherique: createRange(58200, 66930)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(58600, 67390),
      centreVille: createRange(68000, 78200),
      zonePeripherique: createRange(48000, 55200)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(29900, 34385),
      zoneEloignement: createRange(21200, 24380)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(16800, 19320)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(11400, 13110)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(14500, 16675),
      zoneEloignement: createRange(9000, 10350)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(12800, 14720),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(18500, 21275),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(9000, 10350),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(28000, 32200),
      zoneEloignement: createRange(13000, 14950)
    }
  ]
});

// Arris Group (Arris, N'Gaous)
const createArrisScale = (name: string): PriceRefCommune => ({
  ...createAinToutaScale(name),
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(60000, 69000),
      centreVille: createRange(75000, 86250),
      zonePeripherique: createRange(50000, 57500),
      zoneEloignement: createRange(40000, 46000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(65000, 74750),
      zonePeripherique: createRange(38000, 43700),
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(44000, 50600),
      centreVille: createRange(55000, 63250),
      zonePeripherique: createRange(32000, 36800),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(32000, 36800),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(23200, 26680),
      zoneEloignement: createRange(12000, 13800)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(36000, 41400)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(42000, 48300),
      centreVille: createRange(48000, 55200),
      zonePeripherique: createRange(31000, 35650)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(34000, 39100)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(80000, 92000),
      centreVille: createRange(95000, 109250),
      zonePeripherique: createRange(71000, 81650)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(70000, 80500),
      centreVille: createRange(80000, 92000),
      zonePeripherique: createRange(58000, 66700)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 66700),
      centreVille: createRange(68000, 78200),
      zonePeripherique: createRange(48000, 55200)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(30000, 34500),
      zoneEloignement: createRange(24000, 27600)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(16000, 18400)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25300),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(24000, 27600),
      zonePeripherique: createRange(14500, 16675),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(3500, 4025)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(16200, 18630),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(5000, 5750),
      zoneEloignement: createRange(3000, 3450)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(18000, 20700),
      zoneEloignement: createRange(9000, 10350)
    }
  ]
});

// Seriana Group (Seriana, Chemora, Timgad, Tkout, Bouzina, Seggana, Menaa, Ichemoul, Theniet El Abed, Ouled Si Sliman, Aine Yagout, Boulhilet, Boumia, Taxlent, Ghassira, Ayoun El Assafir, Taikhempt, Ksar Belezma, Foum Etoub, Guigba, Tigharghar, Ouled Amar, Hidoussa, Inoughissen)
const createSerianaScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(45000, 51750),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(36000, 41400),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(39000, 44850),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(30000, 34500),
      zoneEloignement: createRange(35000, 40250)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(34000, 39100),
      centreVille: createRange(44000, 50600),
      zonePeripherique: createRange(31000, 35650),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25300),
      centreVille: createRange(32000, 36800),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(12000, 13800)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(45000, 51750)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(39000, 44850)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(65000, 74750),
      centreVille: createRange(80000, 92000),
      zonePeripherique: createRange(52000, 59800)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(55000, 63250),
      centreVille: createRange(70000, 80500),
      zonePeripherique: createRange(44000, 50600)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(6000, 69000),
      zonePeripherique: createRange(30000, 34500)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(16000, 18400)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(14000, 16100),
      centreVille: createRange(25000, 28750),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(13000, 14950),
      centreVille: createRange(22000, 25300),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(9000, 10350),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(15000, 17250),
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(2000, 2300)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(13000, 14950),
      zoneEloignement: createRange(9000, 10350)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(2430000, 2794500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(1940000, 2231000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(1550000, 1782500)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(1240000, 1426000)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(992000, 1140800)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(793000, 911950)
    }
  ]
});

// El Djezar Group (El Djezar, Ain Djasser)
const createElDjezarScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(40000, 46000),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(30000, 34500),
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(35000, 40250),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(22000, 25300),
      zoneEloignement: createRange(12000, 13800)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(40000, 46000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(48000, 55200),
      zonePeripherique: createRange(35000, 40250)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(35000, 40250)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(70000, 80500),
      centreVille: createRange(80000, 92000),
      zonePeripherique: createRange(60000, 69000)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(60000, 69000),
      centreVille: createRange(65000, 74750),
      zonePeripherique: createRange(50000, 57500)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(58000, 66700),
      zonePeripherique: createRange(45000, 51750)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(18500, 21275)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(13400, 15410)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(24000, 27600),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(15000, 17250),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(25000, 28750),
      zonePeripherique: createRange(13000, 14950),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(9000, 10350),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(15000, 17000),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(17000, 19550),
      zoneEloignement: createRange(9000, 10350)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(2430000, 2794500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(1940000, 2231000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(1550000, 1782500)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(1240000, 1426000)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(992000, 1140800)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(793000, 911950)
    }
  ]
});

// Chir Group (Chir, Gosbat, Kimel, Larbaa, Lazrou, Lamcen, Maafa, Ouled Salam, Oueld Aouf, Oueld Fadhel, Beni Fadhala, Tighanimine, El Hassi)
const createChirScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      centreVille: createRange(18000, 20700),
      zonePeripherique: createRange(14000, 16100),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      centreVille: createRange(17000, 19550),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(11000, 12650)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      centreVille: createRange(15000, 17250),
      zonePeripherique: createRange(11000, 12650),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      centreVille: createRange(17000, 19550)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      centreVille: createRange(14000, 16100)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      centreVille: createRange(12000, 13800)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      centreVille: createRange(10000, 11500)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      centreVille: createRange(22000, 25300),
      zonePeripherique: createRange(19000, 21850)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      centreVille: createRange(18000, 20700),
      zonePeripherique: createRange(16000, 18400)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(14000, 16100)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(9000, 10350)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(8000, 9200)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      centreVille: createRange(5000, 5750),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4500, 5175)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneEloignement: createRange(3000, 3450)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      centreVille: createRange(4000, 4600),
      zonePeripherique: createRange(3000, 3450),
      zoneEloignement: createRange(2000, 2300)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneEloignement: createRange(20000, 23000)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(1944000, 2235600)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(1555000, 1788250)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(924000, 1062600)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(739000, 849850)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(590000, 678500)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(472000, 542800)
    }
  ]
});

// Oued Chaaba Group (Oued Chaaba, Djearma)
const createOuedChaabaScale = (name: string): PriceRefCommune => ({
  ...createTazoultScale(name),
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      centreVille: createRange(45000, 51750),
      zonePeripherique: createRange(36000, 41400),
      zoneEloignement: createRange(30000, 34500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      centreVille: createRange(39000, 44850),
      zonePeripherique: createRange(30600, 35190),
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      centreVille: createRange(34000, 39100),
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      centreVille: createRange(26000, 29900),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(12000, 13800)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(85000, 97750),
      zonePeripherique: createRange(70000, 80500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(70000, 80500),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(66000, 75900)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      zonePeripherique: createRange(45000, 51750)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(95000, 109250),
      centreVille: createRange(52000, 59800),
      zonePeripherique: createRange(75000, 86250)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(80000, 92000),
      centreVille: createRange(44000, 50000),
      zonePeripherique: createRange(80000, 92000)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(68000, 78200),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(60000, 69000)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(16500, 18975)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(18000, 20700),
      centreVille: createRange(25000, 28750),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(15000, 17250),
      centreVille: createRange(22000, 25300),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zonePeripherique: createRange(8000, 9200),
      centreVille: createRange(15000, 17250),
      zoneEloignement: createRange(7000, 8050),
      zoneResidentielle: createRange(4000, 4600)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(13000, 14950),
      zoneEloignement: createRange(9000, 10350)
    }
  ]
});

// M'Doukal Group (M'Doukal, Bitam, Boumegueur, Zanat El Beidha, Sefiane, Azil Abdelkader, Oued El Ma, Oued Taga)
const createMDoukalScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(36000, 41400),
      zonePeripherique: createRange(28000, 32200),
      zoneEloignement: createRange(23000, 26450)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(27000, 31050),
      centreVille: createRange(32000, 36800),
      zonePeripherique: createRange(26000, 29900),
      zoneEloignement: createRange(21000, 24150)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(24000, 27600),
      centreVille: createRange(28000, 32200),
      zonePeripherique: createRange(21000, 24150),
      zoneEloignement: createRange(19000, 21850)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(23000, 26450),
      zonePeripherique: createRange(17000, 19550),
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(29000, 33350)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25300),
      centreVille: createRange(26000, 29900)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(55000, 63250),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(26000, 28600)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(46000, 52900),
      centreVille: createRange(52000, 59800),
      zonePeripherique: createRange(21000, 23100)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(19000, 20900)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(12000, 13200),
      zoneEloignement: createRange(11000, 12650)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneEloignement: createRange(10000, 11500)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(15000, 17250),
      zonePeripherique: createRange(9000, 10350),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(9000, 10350),
      centreVille: createRange(14000, 16100),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(5000, 5750),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(5000, 5750),
      zoneEloignement: createRange(2000, 2300)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(7000, 8050)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(2310000, 2656500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(1848000, 2125200)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(1244000, 1430600)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(995000, 1144250)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(796000, 915400)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(636800, 732320)
    }
  ]
});

// Tilatou Group (Tilatou, Rahbat)
const createTilatouScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(28000, 32200),
      centreVille: createRange(30000, 34500),
      zonePeripherique: createRange(25000, 28750),
      zoneEloignement: createRange(17000, 19550)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(28000, 32200),
      zonePeripherique: createRange(19000, 21850),
      zoneEloignement: createRange(15000, 17250)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(24000, 27600),
      centreVille: createRange(26000, 29900),
      zonePeripherique: createRange(14000, 16100),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(15000, 17250),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(24000, 27600)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      centreVille: createRange(15000, 17250)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(27000, 31050),
      centreVille: createRange(32000, 36800),
      zonePeripherique: createRange(25000, 28750)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(23000, 26450),
      centreVille: createRange(28000, 32200),
      zonePeripherique: createRange(20000, 23000)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(18000, 20700),
      centreVille: createRange(25000, 28750),
      zonePeripherique: createRange(17000, 19550)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "En zone rurale",
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(7000, 8050),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(6000, 6900),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneEloignement: createRange(3000, 3450)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(5000, 5750),
      centreVille: createRange(7000, 8050),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(2000, 2300)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(6000, 6900)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(1944000, 2235600)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(1555000, 1788250)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(924000, 1062600)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha",
      zoneEloignement: createRange(739000, 849850)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha",
      zoneEloignement: createRange(590000, 678500)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha",
      zoneEloignement: createRange(636000, 731400)
    }
  ]
});


const createKsarElHiraneScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(33323, 39204),
      centreVille: createRange(30294, 35640),
      zonePeripherique: createRange(27265, 32076),
      zoneEloignement: createRange(21206, 24948)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(29991, 35284),
      centreVille: createRange(27265, 32076),
      zonePeripherique: createRange(24538, 28868),
      zoneEloignement: createRange(19085, 22453)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(26659, 31363),
      centreVille: createRange(24235, 28512),
      zonePeripherique: createRange(21812, 25661),
      zoneEloignement: createRange(16965, 19958)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(23326, 27443),
      centreVille: createRange(21206, 24948),
      zonePeripherique: createRange(19085, 22453),
      zoneEloignement: createRange(14844, 17464)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(24437, 28750),
      centreVille: createRange(22216, 26136),
      zonePeripherique: createRange(19994, 23522),
      zoneEloignement: createRange(15551, 18295)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(22216, 26136),
      centreVille: createRange(19994, 23522),
      zonePeripherique: createRange(17772, 20909),
      zoneEloignement: createRange(13329, 15682)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(17772, 20909),
      centreVille: createRange(15551, 18295),
      zonePeripherique: createRange(13329, 15682),
      zoneEloignement: createRange(11107, 13067)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(13329, 15682),
      centreVille: createRange(11107, 13067),
      zonePeripherique: createRange(8886, 10454),
      zoneEloignement: createRange(6664, 7841)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(53580, 63035),
      centreVille: createRange(48709, 57305),
      zonePeripherique: createRange(43838, 51574),
      zoneEloignement: createRange(34096, 40113)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(43838, 51574),
      centreVille: createRange(38967, 45844),
      zonePeripherique: createRange(34096, 40113),
      zoneEloignement: createRange(24354, 28652)
    },
    {
      label: "Artère faiblement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(30294, 35640),
      centreVille: createRange(27048, 31821),
      zonePeripherique: createRange(23803, 28003),
      zoneEloignement: createRange(17311, 20366)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artère hautement professionnelle",
      unit: "DA/m²",
      zoneResidentielle: createRange(32479, 38210),
      centreVille: createRange(29526, 34737),
      zonePeripherique: createRange(26574, 31264),
      zoneEloignement: createRange(20669, 24316)
    },
    {
      label: "Artère moyennement professionnelle",
      unit: "DA/m²",
      zoneResidentielle: createRange(26574, 31264),
      centreVille: createRange(23621, 27790),
      zonePeripherique: createRange(20669, 24316),
      zoneEloignement: createRange(14763, 17369)
    },
    {
      label: "Artère faiblement professionnelle",
      unit: "DA/m²",
      zoneResidentielle: createRange(18360, 21600),
      centreVille: createRange(16393, 19286),
      zonePeripherique: createRange(14426, 16972),
      zoneEloignement: createRange(10491, 12341)
    }
  ],
  hangars: [
    {
      label: "Situé en zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(24354, 28652),
      centreVille: createRange(21919, 25787),
      zonePeripherique: createRange(19483, 22922),
      zoneEloignement: createRange(14612, 17192)
    },
    {
      label: "Situé en zone d'activité",
      unit: "DA/m²",
      zoneResidentielle: createRange(19483, 22922),
      centreVille: createRange(17535, 20629),
      zonePeripherique: createRange(15587, 18337),
      zoneEloignement: createRange(11690, 13751)
    },
    {
      label: "Perfectionné",
      unit: "DA/m²",
      zoneResidentielle: createRange(11690, 13751),
      centreVille: createRange(10521, 12376),
      zonePeripherique: createRange(9352, 11002),
      zoneEloignement: createRange(7014, 8251)
    },
    {
      label: "Ordinaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(7306, 8595),
      centreVille: createRange(6576, 7735),
      zonePeripherique: createRange(5845, 6876),
      zoneEloignement: createRange(4384, 5157)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(24437, 28750),
      centreVille: createRange(22216, 26136),
      zonePeripherique: createRange(19994, 23522),
      zoneEloignement: createRange(15551, 18295)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(22216, 26136),
      centreVille: createRange(19994, 23522),
      zonePeripherique: createRange(17772, 20909),
      zoneEloignement: createRange(13329, 15682)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(17772, 20909),
      centreVille: createRange(15551, 18295),
      zonePeripherique: createRange(13329, 15682),
      zoneEloignement: createRange(11107, 13067)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(13329, 15682),
      centreVille: createRange(11107, 13067),
      zonePeripherique: createRange(8886, 10454),
      zoneEloignement: createRange(6664, 7841)
    }
  ]
});


export const batnaPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. BATNA (Page 2)
  {
    commune: "Batna",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(130000, 149500),
        centreVille: createRange(200000, 23000),
        zonePeripherique: createRange(100000, 115000),
        zoneEloignement: createRange(70000, 80500)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(90000, 103500),
        centreVille: createRange(150000, 172500),
        zonePeripherique: createRange(75000, 86250),
        zoneEloignement: createRange(65000, 74750)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(60000, 69000),
        centreVille: createRange(140000, 161000),
        zonePeripherique: createRange(55000, 63250),
        zoneEloignement: createRange(35000, 40250)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(50000, 57500),
        centreVille: createRange(120000, 138000),
        zonePeripherique: createRange(40000, 46000),
        zoneEloignement: createRange(28000, 32200)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(110000, 126500),
        centreVille: createRange(160000, 184000),
        zonePeripherique: createRange(90000, 103500),
        zoneEloignement: createRange(65000, 74750)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(85000, 97750),
        centreVille: createRange(140000, 161000),
        zonePeripherique: createRange(70000, 80500),
        zoneEloignement: createRange(60000, 69000)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(60000, 69000),
        centreVille: createRange(90000, 103500),
        zonePeripherique: createRange(55000, 63250),
        zoneEloignement: createRange(48000, 55200)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(44000, 50600),
        centreVille: createRange(60000, 69000)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(160000, 184000),
        centreVille: createRange(300000, 345000),
        zonePeripherique: createRange(110000, 126500)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(150000, 172500),
        centreVille: createRange(250000, 287500),
        zonePeripherique: createRange(93500, 107525)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(100000, 115000),
        centreVille: createRange(120000, 138000),
        zonePeripherique: createRange(79050, 90908)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²",
        zonePeripherique: createRange(38000, 43700),
        zoneEloignement: createRange(24700, 28405)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²",
        zoneEloignement: createRange(16500, 18975)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(80000, 92000),
        centreVille: createRange(140000, 161000),
        zonePeripherique: createRange(40000, 46000),
        zoneEloignement: createRange(18000, 20700)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(72000, 82800),
        centreVille: createRange(130000, 149500),
        zonePeripherique: createRange(35000, 40250),
        zoneEloignement: createRange(16000, 18400)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²",
        zoneEloignement: createRange(15000, 17250)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²",
        zoneEloignement: createRange(13500, 15525)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²",
        zoneResidentielle: createRange(70000, 80500),
        centreVille: createRange(120000, 138000),
        zonePeripherique: createRange(32000, 36800),
        zoneEloignement: createRange(12500, 14375)
      },
      {
        label: "Industriel",
        unit: "DA/m²",
        zonePeripherique: createRange(35000, 40250),
        zoneEloignement: createRange(20000, 23000)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha",
        zoneEloignement: createRange(3400000, 3910000)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha",
        zoneEloignement: createRange(2900000, 3335000)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha",
        zoneEloignement: createRange(2700000, 3105000)
      }
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha",
        zoneEloignement: createRange(2700000, 3105000)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha",
        zoneEloignement: createRange(2400000, 2760000)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha",
        zoneEloignement: createRange(1700000, 1955000)
      }
    ]
  },

  // 2. BARIKA (Page 3)
  createKsarElHiraneScale("Barika"),

  // 3. TAZOULT GROUP (Pages 4, 7, 8)
  createTazoultScale("Tazoult"),
  createTazoultScale("El Madher"),
  createTazoultScale("Ras El Aioun"),

  // 4. AIN TOUTA GROUP (Pages 5, 6)
  createAinToutaScale("Ain Touta"),
  createAinToutaScale("Merouana"),

  // 5. ARRIS GROUP (Pages 9, 10)
  createArrisScale("Arris"),
  createArrisScale("N'Gaous"),

  // 6. SERIANA GROUP (Pages 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 26, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49)
  createSerianaScale("Seriana"),
  createSerianaScale("Chemora"),
  createSerianaScale("Timgad"),
  createSerianaScale("Tkout"),
  createSerianaScale("Bouzina"),
  createSerianaScale("Seggana"),
  createSerianaScale("Menaa"),
  createSerianaScale("Ichemoul"),
  createSerianaScale("Theniet El Abed"),
  createSerianaScale("Ouled Si Sliman"),
  createSerianaScale("Aine Yagout"),
  createSerianaScale("Boulhilet"),
  createSerianaScale("Boumia"),
  createSerianaScale("Taxlent"),
  createSerianaScale("Ghassira"),
  createSerianaScale("Ayoun El Assafir"),
  createSerianaScale("Taikhempt"),
  createSerianaScale("Ksar Belezma"),
  createSerianaScale("Foum Etoub"),
  createSerianaScale("Guigba"),
  createSerianaScale("Tigharghar"),
  createSerianaScale("Ouled Amar"),
  createSerianaScale("Hidoussa"),
  createSerianaScale("Inoughissen"),

  // 7. EL DJEZAR GROUP (Pages 14, 16)
  createElDjezarScale("El Djezar"),
  createElDjezarScale("Ain Djasser"),

  // 8. CHIR GROUP (Pages 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62)
  createChirScale("Chir"),
  createChirScale("Gosbat"),
  createChirScale("Kimel"),
  createChirScale("Larbaa"),
  createChirScale("Lazrou"),
  createChirScale("Lamcen"),
  createChirScale("Maafa"),
  createChirScale("Ouled Salam (M'cil)"),
  createChirScale("Oueld Aouf"),
  createChirScale("Oueld Fadhel"),
  createChirScale("Beni Fadhala Elhakania"),
  createChirScale("Tighanimine"),
  createChirScale("El Hassi"),

  // 9. FISDIS (Page 23)
  {
    commune: "Fisdis",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²",
        centreVille: createRange(70000, 80500),
        zonePeripherique: createRange(60000, 69000),
        zoneEloignement: createRange(30000, 34500)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        centreVille: createRange(50000, 57500),
        zonePeripherique: createRange(50000, 57500),
        zoneEloignement: createRange(25000, 28750)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        centreVille: createRange(45000, 51750),
        zonePeripherique: createRange(45000, 51750),
        zoneEloignement: createRange(20000, 23000)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        centreVille: createRange(26000, 29900),
        zonePeripherique: createRange(25000, 28750),
        zoneEloignement: createRange(12000, 13800)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²",
        centreVille: createRange(60000, 69000),
        zonePeripherique: createRange(70000, 80500)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(66000, 75900),
        centreVille: createRange(50000, 57500),
        zonePeripherique: createRange(66000, 75900)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(50000, 57500),
        centreVille: createRange(45000, 51750),
        zonePeripherique: createRange(45000, 51750)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        centreVille: createRange(25000, 28750)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(80000, 92000),
        centreVille: createRange(95000, 109250),
        zonePeripherique: createRange(81800, 94070)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(70000, 80500),
        centreVille: createRange(80700, 92805),
        zonePeripherique: createRange(70300, 80845)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(50000, 57500),
        centreVille: createRange(68000, 78200),
        zonePeripherique: createRange(58600, 67390)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²",
        zonePeripherique: createRange(25000, 28750),
        zoneEloignement: createRange(20000, 23000)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²",
        zoneEloignement: createRange(16500, 18975)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(18000, 20700),
        centreVille: createRange(25000, 28750),
        zonePeripherique: createRange(14000, 16100),
        zoneEloignement: createRange(10000, 11500)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(15000, 17250),
        centreVille: createRange(22000, 25300),
        zonePeripherique: createRange(12000, 13800),
        zoneEloignement: createRange(9000, 10350)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²",
        zonePeripherique: createRange(10000, 11500),
        zoneEloignement: createRange(8000, 9200)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²",
        zonePeripherique: createRange(8000, 9200),
        zoneEloignement: createRange(6000, 6900)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²",
        zoneResidentielle: createRange(8000, 9200),
        centreVille: createRange(15000, 17250),
        zonePeripherique: createRange(6000, 6900),
        zoneEloignement: createRange(3000, 3450)
      },
      {
        label: "Industriel",
        unit: "DA/m²",
        zonePeripherique: createRange(16000, 18400),
        zoneEloignement: createRange(11000, 12650)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha",
        zoneEloignement: createRange(2310000, 2656500)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha",
        zoneEloignement: createRange(1848000, 2125200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha",
        zoneEloignement: createRange(1244000, 1430600)
      }
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha",
        zoneEloignement: createRange(995000, 1144250)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha",
        zoneEloignement: createRange(796000, 915400)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha",
        zoneEloignement: createRange(636800, 732320)
      }
    ]
  },

  // 10. OUED CHAABA GROUP (Pages 24, 25)
  createOuedChaabaScale("Oued Chaaba"),
  createOuedChaabaScale("Djearma"),

  // 11. M'DOUKAL GROUP (Pages 27, 28, 29, 30, 31, 32, 33, 34)
  createMDoukalScale("M'Doukal"),
  createMDoukalScale("Bitam"),
  createMDoukalScale("Boumegueur"),
  createMDoukalScale("Zanat El Beidha"),
  createMDoukalScale("Sefiane"),
  createMDoukalScale("Azil Abdelkader"),
  createMDoukalScale("Oued El Ma"),
  createMDoukalScale("Oued Taga"),

  // 12. TILATOU GROUP (Pages 35, 36)
  createTilatouScale("Tilatou"),
  createTilatouScale("Rahbat")
];