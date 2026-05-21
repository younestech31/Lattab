import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// COMMON AGRICULTURAL SCHEMES
// ============================================================================
const terrainsAgricolesPlaineCommuns = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha",
    zonePeripherique: createRange(9000000, 10350000),
    zoneEloignement: createRange(9000000, 10350000)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha",
    zonePeripherique: createRange(6000000, 6900000),
    zoneEloignement: createRange(6000000, 6900000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha",
    zonePeripherique: createRange(3000000, 3450000),
    zoneEloignement: createRange(3000000, 3450000)
  }
];

const terrainsAgricolesPenteCommuns = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha",
    zonePeripherique: createRange(1200000, 1380000),
    zoneEloignement: createRange(1200000, 1380000)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha",
    zonePeripherique: createRange(800000, 920000),
    zoneEloignement: createRange(800000, 920000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha",
    zonePeripherique: createRange(500000, 575000),
    zoneEloignement: createRange(500000, 575000)
  }
];

// ============================================================================
// SHARED BRACKET TEMPLATES
// ============================================================================

// Group B: Tenes, Oued fodda, Boukader, Oued sly, Oum drou, Beni haoua, Chettia, Ouled fares, Ain merane, Oued gousine
const createTenesGroupData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(128000, 147200),
      centreVille: createRange(102000, 117300),
      zonePeripherique: createRange(82000, 94300),
      zoneEloignement: createRange(66000, 75900)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(62000, 71300),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(40000, 46000),
      zoneEloignement: createRange(32000, 36800)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 66700),
      centreVille: createRange(46000, 52900),
      zonePeripherique: createRange(36000, 41400),
      zoneEloignement: createRange(28000, 32200)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(46000, 52900),
      centreVille: createRange(36000, 41400),
      zonePeripherique: createRange(28000, 32200),
      zoneEloignement: createRange(22000, 25300)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 66700),
      centreVille: createRange(46000, 52900),
      zonePeripherique: createRange(36000, 41400),
      zoneEloignement: createRange(28000, 32200)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(32000, 36800),
      zoneEloignement: createRange(26000, 29900)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(32000, 36800),
      zonePeripherique: createRange(26000, 29900),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(36000, 41400),
      centreVille: createRange(28000, 32200),
      zonePeripherique: createRange(22000, 25300),
      zoneEloignement: createRange(18000, 20700)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(215000, 247250),
      centreVille: createRange(180000, 207000),
      zonePeripherique: createRange(145000, 166750),
      zoneEloignement: createRange(110000, 126500)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(150000, 172500),
      centreVille: createRange(125000, 143750),
      zonePeripherique: createRange(100000, 115000),
      zoneEloignement: createRange(75000, 86250)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(95500, 109825),
      centreVille: createRange(80500, 92575),
      zonePeripherique: createRange(65500, 75325),
      zoneEloignement: createRange(55000, 63250)
    }
  ],
  hangars: [
    {
      label: "Situé en zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(17000, 19550),
      zonePeripherique: createRange(14000, 16100),
      zoneEloignement: createRange(11000, 12650)
    },
    {
      label: "Situé en zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(18000, 20700),
      centreVille: createRange(15000, 17250),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(9000, 10350)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34500),
      centreVille: createRange(25000, 28750),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(15000, 17250)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(15000, 17250),
      zoneEloignement: createRange(13000, 14950)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(13000, 14950),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(13000, 14950),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(14000, 16100),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
  terrainsAgricolesPente: terrainsAgricolesPenteCommuns
});

// Group C: Marsa, Sidi abderahmane, Sidi akkacha
const createMarsaGroupData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(62000, 71300),
      centreVille: createRange(50000, 57500),
      zonePeripherique: createRange(40000, 46000),
      zoneEloignement: createRange(32000, 36800)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(46000, 52900),
      centreVille: createRange(36000, 41400),
      zonePeripherique: createRange(28000, 32200),
      zoneEloignement: createRange(22000, 25300)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(32000, 36800),
      centreVille: createRange(26000, 29900),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(16000, 18400)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(12000, 13800)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(32000, 36800),
      zonePeripherique: createRange(26000, 29900),
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(32000, 36800),
      centreVille: createRange(26000, 29900),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(16000, 18400)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(150000, 172500),
      centreVille: createRange(125000, 143750),
      zonePeripherique: createRange(100000, 115000),
      zoneEloignement: createRange(75000, 86250)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(125000, 143750),
      centreVille: createRange(105000, 120750),
      zonePeripherique: createRange(88000, 101200),
      zoneEloignement: createRange(69500, 79925)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(70500, 81075),
      centreVille: createRange(60500, 69575),
      zonePeripherique: createRange(50500, 58075),
      zoneEloignement: createRange(40500, 46575)
    }
  ],
  hangars: [
    {
      label: "Situé en zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(18000, 20700),
      centreVille: createRange(14000, 16100),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Situé en zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(13000, 14950),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 28750),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(13000, 14950)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25300),
      centreVille: createRange(18000, 20700),
      zonePeripherique: createRange(13000, 14950),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(14000, 16100),
      centreVille: createRange(11000, 12650),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(13000, 14950),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
  terrainsAgricolesPente: terrainsAgricolesPenteCommuns
});

// Group E: El karimia, Taougrite, Sobha
const createElKarimiaGroupData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(50000, 57500),
      centreVille: createRange(46000, 52900),
      zonePeripherique: createRange(32000, 36800),
      zoneEloignement: createRange(26000, 29900)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(32000, 36800),
      centreVille: createRange(26000, 29900),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(16000, 18400)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(14000, 16100),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(9200, 10580),
      zoneEloignement: createRange(7400, 8510)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(126000, 144900),
      centreVille: createRange(101000, 116150),
      zonePeripherique: createRange(76000, 87400),
      zoneEloignement: createRange(51000, 58650)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(77000, 88550),
      centreVille: createRange(62000, 71300),
      zonePeripherique: createRange(47000, 54050),
      zoneEloignement: createRange(32000, 36800)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 66700),
      centreVille: createRange(45500, 52325),
      zonePeripherique: createRange(33000, 37950),
      zoneEloignement: createRange(20500, 23575)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(14000, 16100),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(17000, 19550),
      centreVille: createRange(14000, 16100),
      zonePeripherique: createRange(11000, 12650),
      zoneEloignement: createRange(9000, 10350)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(15000, 17250),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(13000, 14950),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(7000, 8050)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(11000, 12650),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3000, 3450)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3000, 3450)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
  terrainsAgricolesPente: terrainsAgricolesPenteCommuns
});

// Group F: Zeboudja, Sendjas, Ouled abess
const createZeboudjaGroupData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(5000, 5750),
      zoneEloignement: createRange(4000, 4600)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(79000, 90850),
      centreVille: createRange(62500, 71875),
      zonePeripherique: createRange(46000, 52900),
      zoneEloignement: createRange(29500, 33925)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(65000, 74750),
      centreVille: createRange(52000, 59800),
      zonePeripherique: createRange(39000, 44850),
      zoneEloignement: createRange(26000, 29900)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(47000, 54050),
      centreVille: createRange(36500, 41975),
      zonePeripherique: createRange(26000, 29900),
      zoneEloignement: createRange(15500, 17825)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3000, 3450)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4500, 5175)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3500, 4025)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(6000, 6900),
      centreVille: createRange(5000, 5750),
      zonePeripherique: createRange(3500, 4025),
      zoneEloignement: createRange(3000, 3450)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(5000, 5750),
      centreVille: createRange(4000, 4600),
      zonePeripherique: createRange(3000, 3450),
      zoneEloignement: createRange(2500, 2875)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(4000, 4600),
      centreVille: createRange(3000, 3450),
      zonePeripherique: createRange(2500, 2875),
      zoneEloignement: createRange(2000, 2300)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(5000, 5750),
      centreVille: createRange(4000, 4600),
      zonePeripherique: createRange(3000, 3450),
      zoneEloignement: createRange(2500, 2875)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
  terrainsAgricolesPente: terrainsAgricolesPenteCommuns
});

// Group G: Aboulhassene, Harchoune, Ouled ben aek
const createAboulhasseneGroupData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(36000, 41400),
      centreVille: createRange(28000, 32200),
      zonePeripherique: createRange(22000, 25300),
      zoneEloignement: createRange(18000, 20700)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(16000, 18400),
      zonePeripherique: createRange(12000, 13800),
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 29900),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(16000, 18400),
      zoneEloignement: createRange(12000, 13800)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(93000, 106950),
      centreVille: createRange(77000, 88550),
      zonePeripherique: createRange(69000, 79350),
      zoneEloignement: createRange(45000, 51750)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(71000, 81650),
      centreVille: createRange(55000, 63250),
      zonePeripherique: createRange(43000, 49450),
      zoneEloignement: createRange(29000, 33350)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(52000, 59800),
      centreVille: createRange(40500, 46575),
      zonePeripherique: createRange(29000, 33350),
      zoneEloignement: createRange(17500, 20125)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4000, 4600)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(7000, 8050),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(7000, 8050),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(7000, 8050),
      centreVille: createRange(5000, 5750),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3500, 4025)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(6000, 6900),
      centreVille: createRange(4000, 4600),
      zonePeripherique: createRange(3000, 3450),
      zoneEloignement: createRange(2500, 2875)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(6500, 7475),
      centreVille: createRange(4500, 5175),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3000, 3450)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
  terrainsAgricolesPente: terrainsAgricolesPenteCommuns
});

// Group H: Tadjena, Haranfa, Medjadja, El hadjadj, Mousadak, Beni rached, Talassa, Dahra, Benairia, Bereira, Beni bouateb
const createTadjenaGroupData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(16000, 18400),
      centreVille: createRange(12000, 13800),
      zonePeripherique: createRange(10000, 11500),
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(14000, 16100),
      centreVille: createRange(11000, 12650),
      zonePeripherique: createRange(9200, 10580),
      zoneEloignement: createRange(7400, 8510)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 13800),
      centreVille: createRange(10000, 11500),
      zonePeripherique: createRange(8000, 9200),
      zoneEloignement: createRange(6000, 6900)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(5000, 5750),
      zoneEloignement: createRange(4000, 4600)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(10000, 11500),
      centreVille: createRange(8000, 9200),
      zonePeripherique: createRange(6000, 6900),
      zoneEloignement: createRange(5000, 5750)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(7000, 8050),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(5000, 5750),
      zoneEloignement: createRange(3600, 4140)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(5000, 5750),
      centreVille: createRange(4000, 4600),
      zonePeripherique: createRange(3000, 3450),
      zoneEloignement: createRange(2000, 2300)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(72000, 82800),
      centreVille: createRange(56500, 64975),
      zonePeripherique: createRange(41000, 47150),
      zoneEloignement: createRange(25500, 29325)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(59000, 67850),
      centreVille: createRange(47000, 54050),
      zonePeripherique: createRange(35000, 40250),
      zoneEloignement: createRange(23000, 26450)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(39500, 45425),
      centreVille: createRange(31000, 35650),
      zonePeripherique: createRange(22500, 25875),
      zoneEloignement: createRange(14000, 16100)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(8000, 9200),
      centreVille: createRange(6000, 6900),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(2300, 2645)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(6000, 6900),
      centreVille: createRange(3000, 3450),
      zonePeripherique: createRange(2300, 2645),
      zoneEloignement: createRange(2000, 2300)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(6000, 6900),
      centreVille: createRange(5000, 5750),
      zonePeripherique: createRange(4000, 4600),
      zoneEloignement: createRange(3500, 4025)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(5000, 5750),
      centreVille: createRange(4000, 4600),
      zonePeripherique: createRange(3000, 3450),
      zoneEloignement: createRange(2500, 2875)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(4000, 4600),
      centreVille: createRange(3000, 3450),
      zonePeripherique: createRange(2500, 2875),
      zoneEloignement: createRange(2000, 2300)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(3500, 4025),
      centreVille: createRange(2500, 2875),
      zonePeripherique: createRange(2000, 2300),
      zoneEloignement: createRange(1800, 2070)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(3000, 3450),
      centreVille: createRange(2000, 2300),
      zonePeripherique: createRange(1900, 2185),
      zoneEloignement: createRange(1500, 1725)
    },
    {
      label: "Industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(2000, 2300),
      centreVille: createRange(1500, 1725),
      zonePeripherique: createRange(1000, 1150),
      zoneEloignement: createRange(900, 1035)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
  terrainsAgricolesPente: terrainsAgricolesPenteCommuns
});


export const chlefPriceReferenceTransactions: PriceRefCommune[] = [
  // ==========================================
  // PAGE 2: COMMUNE DE CHLEF (Scale Group A)
  // ==========================================
  {
    commune: "Chlef",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(142000, 163300),
        centreVille: createRange(114000, 131100),
        zonePeripherique: createRange(92000, 105800),
        zoneEloignement: createRange(74000, 85100)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(98000, 112700),
        centreVille: createRange(78000, 89700),
        zonePeripherique: createRange(62000, 71300),
        zoneEloignement: createRange(50000, 57500)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(62000, 71300),
        centreVille: createRange(50000, 57500),
        zonePeripherique: createRange(40000, 46000),
        zoneEloignement: createRange(32000, 36800)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(58000, 66700),
        centreVille: createRange(46000, 52900),
        zonePeripherique: createRange(36000, 41400),
        zoneEloignement: createRange(28000, 32200)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(98000, 112700),
        centreVille: createRange(70000, 80500),
        zonePeripherique: createRange(62000, 71300),
        zoneEloignement: createRange(50000, 57500)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(62000, 71300),
        centreVille: createRange(50000, 57500),
        zonePeripherique: createRange(40000, 46000),
        zoneEloignement: createRange(32000, 36800)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(58000, 66700),
        centreVille: createRange(46000, 52900),
        zonePeripherique: createRange(36000, 41400),
        zoneEloignement: createRange(28000, 32200)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(50000, 57500),
        centreVille: createRange(38000, 43700),
        zonePeripherique: createRange(28000, 32200),
        zoneEloignement: createRange(22000, 25300)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(255000, 293250),
        centreVille: createRange(215000, 247250),
        zonePeripherique: createRange(175000, 201250),
        zoneEloignement: createRange(135000, 155250)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(185000, 212750),
        centreVille: createRange(155000, 178250),
        zonePeripherique: createRange(125000, 143750),
        zoneEloignement: createRange(95000, 109250)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(125000, 143750),
        centreVille: createRange(105000, 120750),
        zonePeripherique: createRange(85000, 97750),
        zoneEloignement: createRange(65000, 74750)
      }
    ],
    hangars: [
      {
        label: "Situé en zone urbaine",
        unit: "DA/m²",
        zoneResidentielle: createRange(30000, 34500),
        centreVille: createRange(25000, 28750),
        zonePeripherique: createRange(20000, 23000),
        zoneEloignement: createRange(15000, 17250)
      },
      {
        label: "Situé en zone rurale",
        unit: "DA/m²",
        zoneResidentielle: createRange(25000, 28750),
        centreVille: createRange(20000, 23000),
        zonePeripherique: createRange(15000, 17250),
        zoneEloignement: createRange(12000, 13800)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(50000, 57500),
        centreVille: createRange(40000, 46000),
        zonePeripherique: createRange(30000, 34500),
        zoneEloignement: createRange(20000, 23000)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(40000, 46000),
        centreVille: createRange(30000, 34500),
        zonePeripherique: createRange(20000, 23000),
        zoneEloignement: createRange(15000, 17250)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(30000, 34500),
        centreVille: createRange(20000, 23000),
        zonePeripherique: createRange(15000, 17250),
        zoneEloignement: createRange(13000, 14950)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(25000, 28750),
        centreVille: createRange(18000, 20700),
        zonePeripherique: createRange(13000, 14950),
        zoneEloignement: createRange(10000, 11500)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²",
        zoneResidentielle: createRange(20000, 23000),
        centreVille: createRange(16000, 18400),
        zonePeripherique: createRange(12000, 13800),
        zoneEloignement: createRange(9000, 10350)
      },
      {
        label: "Industriel",
        unit: "DA/m²",
        zoneResidentielle: createRange(14000, 16100),
        centreVille: createRange(12000, 13800),
        zonePeripherique: createRange(10000, 11500),
        zoneEloignement: createRange(8000, 9200)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
    terrainsAgricolesPente: terrainsAgricolesPenteCommuns
  },

  // ==========================================
  // SHARED GROUPS MAPPING
  // ==========================================

  // Group B (Pages 3, 4, 5, 6, 7, 8, 11, 13, 15, 16)
  createTenesGroupData("Tenes"),
  createTenesGroupData("Oued fodda"),
  createTenesGroupData("Boukader"),
  createTenesGroupData("Oued sly"),
  createTenesGroupData("Oum drou"),
  createTenesGroupData("Beni haoua"),
  createTenesGroupData("Chettia"),
  createTenesGroupData("Ouled fares"),
  createTenesGroupData("Ain merane"),
  createTenesGroupData("Oued gousine"),

  // Group C (Pages 9, 10, 12)
  createMarsaGroupData("Marsa"),
  createMarsaGroupData("Sidi abderahmane"),
  createMarsaGroupData("Sidi akkacha"),

  // Group D: Bouzghaia (Page 14)
  {
    commune: "Bouzghaia",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(58000, 66700),
        centreVille: createRange(46000, 52900),
        zonePeripherique: createRange(36000, 41400),
        zoneEloignement: createRange(28000, 32200)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(36000, 41400),
        centreVille: createRange(28000, 32200),
        zonePeripherique: createRange(22000, 25300),
        zoneEloignement: createRange(18000, 20700)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(32000, 36800),
        centreVille: createRange(26000, 29900),
        zonePeripherique: createRange(20000, 23000),
        zoneEloignement: createRange(16000, 18400)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(20000, 23000),
        centreVille: createRange(16000, 18400),
        zonePeripherique: createRange(12000, 13800),
        zoneEloignement: createRange(10000, 11500)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(40000, 46000),
        centreVille: createRange(32000, 36800),
        zonePeripherique: createRange(26000, 29900),
        zoneEloignement: createRange(20000, 23000)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(32000, 36800),
        centreVille: createRange(26000, 29900),
        zonePeripherique: createRange(20000, 23000),
        zoneEloignement: createRange(16000, 18400)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(20000, 23000),
        centreVille: createRange(16000, 18400),
        zonePeripherique: createRange(12000, 13800),
        zoneEloignement: createRange(10000, 11500)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(16000, 18400),
        centreVille: createRange(12000, 13800),
        zonePeripherique: createRange(10000, 11500),
        zoneEloignement: createRange(8000, 9200)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(120000, 138000),
        centreVille: createRange(98500, 113275),
        zonePeripherique: createRange(77000, 88550),
        zoneEloignement: createRange(55500, 63825)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(95000, 109250),
        centreVille: createRange(80000, 92000),
        zonePeripherique: createRange(65000, 74750),
        zoneEloignement: createRange(45000, 51750)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(60500, 69575),
        centreVille: createRange(50000, 57500),
        zonePeripherique: createRange(40000, 46000),
        zoneEloignement: createRange(30000, 34500)
      }
    ],
    hangars: [
      {
        label: "Situé en zone urbaine",
        unit: "DA/m²",
        zoneResidentielle: createRange(16000, 18400),
        centreVille: createRange(14000, 16100),
        zonePeripherique: createRange(12000, 13800),
        zoneEloignement: createRange(10000, 11500)
      },
      {
        label: "Situé en zone rurale",
        unit: "DA/m²",
        zoneResidentielle: createRange(14000, 16100),
        centreVille: createRange(12000, 13800),
        zonePeripherique: createRange(10000, 11500),
        zoneEloignement: createRange(8000, 9200)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(22000, 25300),
        centreVille: createRange(18000, 20700),
        zonePeripherique: createRange(14000, 16100),
        zoneEloignement: createRange(11000, 12650)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(16000, 18400),
        centreVille: createRange(13000, 14950),
        zonePeripherique: createRange(10000, 11500),
        zoneEloignement: createRange(7000, 8050)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(14000, 16100),
        centreVille: createRange(11000, 12650),
        zonePeripherique: createRange(8000, 9200),
        zoneEloignement: createRange(6000, 6900)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(13000, 14950),
        centreVille: createRange(10000, 11500),
        zonePeripherique: createRange(7000, 8050),
        zoneEloignement: createRange(5000, 5750)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²",
        zoneResidentielle: createRange(12000, 13800),
        centreVille: createRange(8000, 9200),
        zonePeripherique: createRange(6000, 6900),
        zoneEloignement: createRange(4000, 4600)
      },
      {
        label: "Industriel",
        unit: "DA/m²",
        zoneResidentielle: createRange(9000, 10350),
        centreVille: createRange(7000, 8050),
        zonePeripherique: createRange(5000, 5750),
        zoneEloignement: createRange(4000, 4600)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommuns,
    terrainsAgricolesPente: terrainsAgricolesPenteCommuns
  },

  // Group E (Pages 17, 19, 25)
  createElKarimiaGroupData("El karimia"),
  createElKarimiaGroupData("Taougrite"),
  createElKarimiaGroupData("Sobha"),

  // Group F (Pages 18, 23, 24)
  createZeboudjaGroupData("Zeboudja"),
  createZeboudjaGroupData("Sendjas"),
  createZeboudjaGroupData("Ouled abess"),

  // Group G (Pages 20, 21, 36)
  createAboulhasseneGroupData("Aboulhassene"),
  createAboulhasseneGroupData("Harchoune"),
  createAboulhasseneGroupData("Ouled ben aek"),

  // Group H (Pages 22, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35)
  createTadjenaGroupData("Tadjena"),
  createTadjenaGroupData("Haranfa"),
  createTadjenaGroupData("Medjadja"),
  createTadjenaGroupData("El hadjadj"),
  createTadjenaGroupData("Mousadak"),
  createTadjenaGroupData("Beni rached"),
  createTadjenaGroupData("Talassa"),
  createTadjenaGroupData("Dahra"),
  createTadjenaGroupData("Benairia"),
  createTadjenaGroupData("Bereira"),
  createTadjenaGroupData("Beni bouateb")
];