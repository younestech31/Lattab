import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED STANDARD SCALES & FIELDS (COMMON FOR ALL COMMUNES IN BEJAIA)
// ============================================================================
const terrainsAgricolesPlaineBejaia = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha",
    zonePeripherique: createRange(10000000, 15000000),
    zoneEloignement: createRange(8000000, 10000000)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha",
    zonePeripherique: createRange(7000000, 9000000),
    zoneEloignement: createRange(6000000, 7000000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha",
    zonePeripherique: createRange(6000000, 7000000),
    zoneEloignement: createRange(5000000, 6000000)
  }
];

const terrainsAgricolesPenteBejaia = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha",
    zonePeripherique: createRange(8000000, 10000000),
    zoneEloignement: createRange(6000000, 8000000)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha",
    zonePeripherique: createRange(5500000, 6500000),
    zoneEloignement: createRange(4000000, 5000000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha",
    zonePeripherique: createRange(4000000, 5500000),
    zoneEloignement: createRange(3500000, 4000000)
  }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

// Group 2: Tichi, Souk el tenine, Melbou, Boukhlifa, Aokas
const createTichiScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(115000, 132000),
      centreVille: createRange(98000, 113000),
      zonePeripherique: createRange(87000, 100000),
      zoneEloignement: createRange(73000, 84000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(101000, 116000),
      centreVille: createRange(89000, 102000),
      zonePeripherique: createRange(76000, 87000),
      zoneEloignement: createRange(64000, 74000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(89000, 102000),
      centreVille: createRange(79000, 91000),
      zonePeripherique: createRange(69000, 79000),
      zoneEloignement: createRange(55000, 63000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(61000, 70000),
      centreVille: createRange(52000, 60000),
      zonePeripherique: createRange(39000, 45000),
      zoneEloignement: createRange(33000, 38000)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(97000, 111000),
      centreVille: createRange(85000, 98000),
      zonePeripherique: createRange(77000, 88000),
      zoneEloignement: createRange(56000, 64000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(85000, 98000),
      centreVille: createRange(75000, 86000),
      zonePeripherique: createRange(69000, 79000),
      zoneEloignement: createRange(50000, 57000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(76000, 87000),
      centreVille: createRange(67000, 77000),
      zonePeripherique: createRange(60000, 69000),
      zoneEloignement: createRange(41000, 47000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(48000, 55000),
      centreVille: createRange(43000, 50000),
      zonePeripherique: createRange(39000, 45000),
      zoneEloignement: createRange(22000, 25000)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(135000, 155000),
      centreVille: createRange(122000, 140000),
      zonePeripherique: createRange(98000, 113000),
      zoneEloignement: createRange(54000, 62000)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(127000, 146000),
      centreVille: createRange(114000, 131000),
      zonePeripherique: createRange(95000, 109000),
      zoneEloignement: createRange(51000, 59000)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(122000, 140000),
      centreVille: createRange(106000, 122000),
      zonePeripherique: createRange(92000, 106000),
      zoneEloignement: createRange(48000, 55000)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(88000, 101000),
      centreVille: createRange(87000, 100000),
      zonePeripherique: createRange(56000, 64000),
      zoneEloignement: createRange(42000, 48000)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(71000, 82000),
      centreVille: createRange(66000, 76000),
      zonePeripherique: createRange(46000, 53000),
      zoneEloignement: createRange(35000, 40000)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(36000, 41000),
      zonePeripherique: createRange(21000, 24000),
      zoneEloignement: createRange(8000, 9000)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(34000, 39000),
      centreVille: createRange(32000, 37000),
      zonePeripherique: createRange(17000, 20000),
      zoneEloignement: createRange(7000, 8000)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(36000, 41000),
      centreVille: createRange(33000, 38000),
      zonePeripherique: createRange(15000, 17000),
      zoneEloignement: createRange(6000, 7000)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(32000, 37000),
      centreVille: createRange(26000, 30000),
      zonePeripherique: createRange(14000, 16000),
      zoneEloignement: createRange(5000, 6000)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25000),
      centreVille: createRange(21000, 24000),
      zonePeripherique: createRange(13000, 15000),
      zoneEloignement: createRange(3000, 4000)
    },
    {
      label: "Terrain industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(29000, 33000),
      centreVille: createRange(26000, 30000),
      zonePeripherique: createRange(14000, 16000),
      zoneEloignement: createRange(6000, 7000)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaia,
  terrainsAgricolesPente: terrainsAgricolesPenteBejaia
});

// Group 3: Alkseur, Akbou, Tala hamza, Oued ghir
const createAlkseurScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(98000, 113000),
      centreVille: createRange(86000, 99000),
      zonePeripherique: createRange(85000, 98000),
      zoneEloignement: createRange(70000, 80000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(84000, 97000),
      centreVille: createRange(77000, 88000),
      zonePeripherique: createRange(75000, 86000),
      zoneEloignement: createRange(63000, 72000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(74000, 85000),
      centreVille: createRange(67000, 77000),
      zonePeripherique: createRange(68000, 78000),
      zoneEloignement: createRange(57000, 65000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(42000, 48000),
      centreVille: createRange(38000, 44000),
      zonePeripherique: createRange(28000, 32000),
      zoneEloignement: createRange(21000, 24000)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(85000, 100000),
      centreVille: createRange(80000, 90000),
      zonePeripherique: createRange(69000, 79000),
      zoneEloignement: createRange(61000, 70000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(75000, 85000),
      centreVille: createRange(70000, 80000),
      zonePeripherique: createRange(63000, 72000),
      zoneEloignement: createRange(56000, 64000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(63000, 72000),
      centreVille: createRange(60000, 69000),
      zonePeripherique: createRange(58000, 67000),
      zoneEloignement: createRange(49000, 56000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(38000, 44000),
      centreVille: createRange(35000, 40000),
      zonePeripherique: createRange(32000, 37000),
      zoneEloignement: createRange(24000, 28000)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(103000, 118000),
      centreVille: createRange(113000, 130000),
      zonePeripherique: createRange(85000, 98000),
      zoneEloignement: createRange(59000, 68000)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(87000, 100000),
      centreVille: createRange(93000, 107000),
      zonePeripherique: createRange(74000, 85000),
      zoneEloignement: createRange(58000, 67000)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(66000, 76000),
      centreVille: createRange(75000, 87000),
      zonePeripherique: createRange(66000, 76000),
      zoneEloignement: createRange(55000, 63000)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(140000, 161000),
      centreVille: createRange(131000, 151000),
      zonePeripherique: createRange(109000, 125000),
      zoneEloignement: createRange(83000, 95000)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(101000, 116000),
      centreVille: createRange(105000, 121000),
      zonePeripherique: createRange(88000, 101000),
      zoneEloignement: createRange(67000, 77000)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(39000, 45000),
      centreVille: createRange(38000, 44000),
      zonePeripherique: createRange(25000, 29000),
      zoneEloignement: createRange(14000, 16000)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(34000, 39000),
      centreVille: createRange(33000, 38000),
      zonePeripherique: createRange(21000, 24000),
      zoneEloignement: createRange(10000, 12000)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(29000, 33000),
      centreVille: createRange(27000, 31000),
      zonePeripherique: createRange(15000, 17000),
      zoneEloignement: createRange(7000, 8000)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(27000, 31000),
      centreVille: createRange(26000, 30000),
      zonePeripherique: createRange(13000, 15000),
      zoneEloignement: createRange(6000, 7000)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(25000, 29000),
      centreVille: createRange(24000, 28000),
      zonePeripherique: createRange(11000, 13000),
      zoneEloignement: createRange(5000, 6000)
    },
    {
      label: "Terrain industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(37000, 43000),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(22000, 26000),
      zoneEloignement: createRange(17000, 20000)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaia,
  terrainsAgricolesPente: terrainsAgricolesPenteBejaia
});

// Group 4: Tazmalt, Amizour, Beni ksila, Kherrata, Ouzellaguen, Seddouk, sidi aich, Fenaia el maten
const createTazmaltScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(97000, 111000),
      centreVille: createRange(85000, 98000),
      zonePeripherique: createRange(74000, 85000),
      zoneEloignement: createRange(63000, 72000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(84000, 97000),
      centreVille: createRange(78000, 90000),
      zonePeripherique: createRange(66000, 76000),
      zoneEloignement: createRange(57000, 65000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(73000, 84000),
      centreVille: createRange(68000, 78000),
      zonePeripherique: createRange(60000, 69000),
      zoneEloignement: createRange(49000, 56000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(43000, 49000),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(25000, 29000),
      zoneEloignement: createRange(17000, 19000)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(77000, 88000),
      centreVille: createRange(73000, 84000),
      zonePeripherique: createRange(64000, 74000),
      zoneEloignement: createRange(54000, 62000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(66000, 76000),
      centreVille: createRange(65000, 75000),
      zonePeripherique: createRange(53000, 61000),
      zoneEloignement: createRange(43000, 49000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(60000, 69000),
      centreVille: createRange(58000, 67000),
      zonePeripherique: createRange(52000, 60000),
      zoneEloignement: createRange(39000, 45000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(30000, 34000),
      centreVille: createRange(29000, 33000),
      zonePeripherique: createRange(23000, 26000),
      zoneEloignement: createRange(20000, 23000)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(103000, 118000),
      centreVille: createRange(94000, 108000),
      zonePeripherique: createRange(73000, 84000),
      zoneEloignement: createRange(52000, 60000)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(96000, 110000),
      centreVille: createRange(88000, 101000),
      zonePeripherique: createRange(69000, 79000),
      zoneEloignement: createRange(50000, 57000)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(78000, 90000),
      centreVille: createRange(82000, 94000),
      zonePeripherique: createRange(65000, 75000),
      zoneEloignement: createRange(48000, 55000)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(85000, 98000),
      centreVille: createRange(84000, 97000),
      zonePeripherique: createRange(57000, 65000),
      zoneEloignement: createRange(33000, 38000)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(28000, 32000),
      centreVille: createRange(26000, 30000),
      zonePeripherique: createRange(33000, 38000),
      zoneEloignement: createRange(19000, 22000)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(31000, 36000),
      centreVille: createRange(29000, 33000),
      zonePeripherique: createRange(21000, 24000),
      zoneEloignement: createRange(11000, 13000)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(29000, 32000),
      centreVille: createRange(24000, 28000),
      zonePeripherique: createRange(20000, 23000),
      zoneEloignement: createRange(11000, 12000)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(24000, 28000),
      centreVille: createRange(23000, 26000),
      zonePeripherique: createRange(16000, 18000),
      zoneEloignement: createRange(8000, 9000)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25000),
      centreVille: createRange(21000, 24000),
      zonePeripherique: createRange(15000, 17000),
      zoneEloignement: createRange(7000, 8000)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(20000, 23000),
      centreVille: createRange(19000, 21000),
      zonePeripherique: createRange(13000, 15000),
      zoneEloignement: createRange(6000, 7000)
    },
    {
      label: "Terrain industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(37000, 43000),
      centreVille: createRange(32000, 37000),
      zonePeripherique: createRange(23000, 26000),
      zoneEloignement: createRange(16000, 18000)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaia,
  terrainsAgricolesPente: terrainsAgricolesPenteBejaia
});

// Group 5: Feraoun, kendira, semaoun, Beni Djellil, Taourirt Ighil, el flay, Tinebdar, Souk Oufela, Tibane, Tifra, akfadou, Amalou, Bouhamza, M'cisna, Ighram, Chellata, Tamokra, Boudjellil, Beni M'likech, Ait R'zine, Tizi N'berber, Tamridjte, Draa EL Kaid, Taskerioute, Beni Maouche, Ighil Ali, Ait Smail, Chemini, Barbacha, Adekar, Derguina, Sidi ayad, Timezrite, Toudja
const createFeraounScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(66000, 76000),
      centreVille: createRange(59000, 68000),
      zonePeripherique: createRange(51000, 59000),
      zoneEloignement: createRange(46000, 53000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 67000),
      centreVille: createRange(58000, 67000),
      zonePeripherique: createRange(47000, 54000),
      zoneEloignement: createRange(44000, 51000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(51000, 59000),
      centreVille: createRange(49000, 56000),
      zonePeripherique: createRange(42000, 48000),
      zoneEloignement: createRange(23000, 26000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(29000, 33000),
      centreVille: createRange(27000, 31000),
      zonePeripherique: createRange(22000, 25000),
      zoneEloignement: createRange(16000, 18000)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²",
      zoneResidentielle: createRange(58000, 67000),
      centreVille: createRange(65000, 75000),
      zonePeripherique: createRange(60000, 69000),
      zoneEloignement: createRange(55000, 63000)
    },
    {
      label: "Amélioré",
      unit: "DA/m²",
      zoneResidentielle: createRange(54000, 62000),
      centreVille: createRange(51000, 59000),
      zonePeripherique: createRange(50000, 57000),
      zoneEloignement: createRange(40000, 45000)
    },
    {
      label: "Economique",
      unit: "DA/m²",
      zoneResidentielle: createRange(48000, 55000),
      centreVille: createRange(45000, 52000),
      zonePeripherique: createRange(42000, 48000),
      zoneEloignement: createRange(33000, 38000)
    },
    {
      label: "Précaire",
      unit: "DA/m²",
      zoneResidentielle: createRange(26000, 30000),
      centreVille: createRange(26000, 30000),
      zonePeripherique: createRange(22000, 25000),
      zoneEloignement: createRange(17000, 19000)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(75000, 86000),
      centreVille: createRange(65000, 79000),
      zonePeripherique: createRange(57000, 65000),
      zoneEloignement: createRange(43000, 49000)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(68000, 78000),
      centreVille: createRange(62000, 71000),
      zonePeripherique: createRange(54000, 62000),
      zoneEloignement: createRange(41000, 47000)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²",
      zoneResidentielle: createRange(55000, 63000),
      centreVille: createRange(56000, 64000),
      zonePeripherique: createRange(47000, 54000),
      zoneEloignement: createRange(37000, 42000)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²",
      zoneResidentielle: createRange(40000, 46000),
      centreVille: createRange(40000, 46000),
      zonePeripherique: createRange(28000, 32000),
      zoneEloignement: createRange(19000, 22000)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²",
      zoneResidentielle: createRange(24000, 28000),
      centreVille: createRange(22000, 25000),
      zonePeripherique: createRange(15000, 17000),
      zoneEloignement: createRange(11000, 13000)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(32000, 37000),
      centreVille: createRange(29000, 33000),
      zonePeripherique: createRange(15000, 17000),
      zoneEloignement: createRange(8000, 9000)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(28000, 32000),
      centreVille: createRange(26000, 30000),
      zonePeripherique: createRange(13000, 15000),
      zoneEloignement: createRange(7000, 8000)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(22000, 25000),
      centreVille: createRange(21000, 24000),
      zonePeripherique: createRange(11000, 13000),
      zoneEloignement: createRange(6000, 7000)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²",
      zoneResidentielle: createRange(21000, 24000),
      centreVille: createRange(20000, 23000),
      zonePeripherique: createRange(9000, 10000),
      zoneEloignement: createRange(5000, 6000)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²",
      zoneResidentielle: createRange(12000, 14000),
      centreVille: createRange(11000, 13000),
      zonePeripherique: createRange(8000, 9000),
      zoneEloignement: createRange(4000, 5000)
    },
    {
      label: "Terrain industriel",
      unit: "DA/m²",
      zoneResidentielle: createRange(19000, 22000),
      centreVille: createRange(17000, 20000),
      zonePeripherique: createRange(9000, 11000),
      zoneEloignement: createRange(8000, 9000)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaia,
  terrainsAgricolesPente: terrainsAgricolesPenteBejaia
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================
export const bejaiaPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. BEJAIA (Page 2)
  {
    commune: "Béjaia",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(175000, 200000),
        centreVille: createRange(165000, 190000),
        zonePeripherique: createRange(125000, 140000),
        zoneEloignement: createRange(80000, 92000)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(140000, 160000),
        centreVille: createRange(130000, 150000),
        zonePeripherique: createRange(86000, 100000),
        zoneEloignement: createRange(67000, 77000)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(95000, 110000),
        centreVille: createRange(85000, 95000),
        zonePeripherique: createRange(75000, 86000),
        zoneEloignement: createRange(57000, 65000)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(65000, 75000),
        centreVille: createRange(57000, 66000),
        zonePeripherique: createRange(50000, 60000),
        zoneEloignement: createRange(23000, 26000)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²",
        zoneResidentielle: createRange(155000, 170000),
        centreVille: createRange(140000, 160000),
        zonePeripherique: createRange(120000, 135000),
        zoneEloignement: createRange(80000, 92000)
      },
      {
        label: "Amélioré",
        unit: "DA/m²",
        zoneResidentielle: createRange(125000, 145000),
        centreVille: createRange(120000, 135000),
        zonePeripherique: createRange(105000, 120000),
        zoneEloignement: createRange(65000, 75000)
      },
      {
        label: "Economique",
        unit: "DA/m²",
        zoneResidentielle: createRange(70000, 80000),
        centreVille: createRange(64000, 74000),
        zonePeripherique: createRange(60000, 70000),
        zoneEloignement: createRange(45000, 51000)
      },
      {
        label: "Précaire",
        unit: "DA/m²",
        zoneResidentielle: createRange(49000, 57000),
        centreVille: createRange(44000, 50000),
        zonePeripherique: createRange(42000, 49000),
        zoneEloignement: createRange(30000, 35000)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(155000, 181000),
        centreVille: createRange(170000, 195000),
        zonePeripherique: createRange(112000, 137000),
        zoneEloignement: createRange(69000, 78000)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(146000, 167000),
        centreVille: createRange(140000, 160000),
        zonePeripherique: createRange(104000, 120000),
        zoneEloignement: createRange(65000, 75000)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²",
        zoneResidentielle: createRange(134000, 154000),
        centreVille: createRange(120000, 138000),
        zonePeripherique: createRange(99000, 114000),
        zoneEloignement: createRange(63000, 72000)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²",
        zoneResidentielle: createRange(92000, 106000),
        centreVille: createRange(84000, 97000),
        zonePeripherique: createRange(73000, 84000),
        zoneEloignement: createRange(51000, 59000)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²",
        zoneResidentielle: createRange(63000, 72000),
        centreVille: createRange(54000, 62000),
        zonePeripherique: createRange(44000, 51000),
        zoneEloignement: createRange(30000, 34000)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(75000, 86000),
        centreVille: createRange(74000, 85000),
        zonePeripherique: createRange(42000, 48000),
        zoneEloignement: createRange(17000, 20000)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(62000, 71000),
        centreVille: createRange(61000, 70000),
        zonePeripherique: createRange(39000, 45000),
        zoneEloignement: createRange(12000, 15000)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(56000, 64000),
        centreVille: createRange(54000, 62000),
        zonePeripherique: createRange(30000, 35000),
        zoneEloignement: createRange(10000, 12000)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²",
        zoneResidentielle: createRange(47000, 54000),
        centreVille: createRange(39000, 45000),
        zonePeripherique: createRange(27000, 31000),
        zoneEloignement: createRange(9000, 10000)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²",
        zoneResidentielle: createRange(33000, 38000),
        centreVille: createRange(30000, 35000),
        zonePeripherique: createRange(21000, 24000),
        zoneEloignement: createRange(8000, 9000)
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²",
        zoneResidentielle: createRange(36000, 41000),
        centreVille: createRange(39000, 45000),
        zonePeripherique: createRange(35000, 40000),
        zoneEloignement: createRange(24000, 28000)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaia,
    terrainsAgricolesPente: terrainsAgricolesPenteBejaia
  },

  // Group 2: Tichi, Souk el tenine, Melbou, Boukhlifa, Aokas
  createTichiScaleGroup("Tichi"),
  createTichiScaleGroup("Souk el tenine"),
  createTichiScaleGroup("Melbou"),
  createTichiScaleGroup("Boukhlifa"),
  createTichiScaleGroup("Aokas"),

  // Group 3: Alkseur, Akbou, Tala hamza, Oued ghir
  createAlkseurScaleGroup("Alkseur"),
  createAlkseurScaleGroup("Akbou"),
  createAlkseurScaleGroup("Tala hamza"),
  createAlkseurScaleGroup("Oued ghir"),

  // Group 4: Tazmalt, Amizour, Beni ksila, Kherrata, Ouzellaguen, Seddouk, sidi aich, Fenaia el maten
  createTazmaltScaleGroup("Tazmalt"),
  createTazmaltScaleGroup("Amizour"),
  createTazmaltScaleGroup("Beni ksila"),
  createTazmaltScaleGroup("Kherrata"),
  createTazmaltScaleGroup("Ouzellaguen"),
  createTazmaltScaleGroup("Seddouk"),
  createTazmaltScaleGroup("sidi aich"),
  createTazmaltScaleGroup("Fenaia el maten"),

  // Group 5: Feraoun, kendira, semaoun, Beni Djellil, Taourirt Ighil, el flay, Tinebdar, Souk Oufela, Tibane, Tifra, akfadou, Amalou, Bouhamza, M'cisna, Ighram, Chellata, Tamokra, Boudjellil, Beni M'likech, Ait R'zine, Tizi N'berber, Tamridjte, Draa EL Kaid, Taskerioute, Beni Maouche, Ighil Ali, Ait Smail, Chemini, Barbacha, Adekar, Derguina, Sidi ayad, Timezrite, Toudja
  createFeraounScaleGroup("Feraoun"),
  createFeraounScaleGroup("kendira"),
  createFeraounScaleGroup("semaoun"),
  createFeraounScaleGroup("Beni Djellil"),
  createFeraounScaleGroup("Taourirt Ighil"),
  createFeraounScaleGroup("el flay"),
  createFeraounScaleGroup("Tinebdar"),
  createFeraounScaleGroup("Souk Oufela"),
  createFeraounScaleGroup("Tibane"),
  createFeraounScaleGroup("Tifra"),
  createFeraounScaleGroup("akfadou"),
  createFeraounScaleGroup("Amalou"),
  createFeraounScaleGroup("Bouhamza"),
  createFeraounScaleGroup("M'cisna"),
  createFeraounScaleGroup("Ighram"),
  createFeraounScaleGroup("Chellata"),
  createFeraounScaleGroup("Tamokra"),
  createFeraounScaleGroup("Boudjellil"),
  createFeraounScaleGroup("Beni M'likech"),
  createFeraounScaleGroup("Ait R'zine"),
  createFeraounScaleGroup("Tizi N'berber"),
  createFeraounScaleGroup("Tamridjte"),
  createFeraounScaleGroup("Draa EL Kaid"),
  createFeraounScaleGroup("Taskerioute"),
  createFeraounScaleGroup("Beni Maouche"),
  createFeraounScaleGroup("Ighil Ali"),
  createFeraounScaleGroup("Ait Smail"),
  createFeraounScaleGroup("Chemini"),
  createFeraounScaleGroup("Barbacha"),
  createFeraounScaleGroup("Adekar"),
  createFeraounScaleGroup("Derguina"),
  createFeraounScaleGroup("Sidi ayad"),
  createFeraounScaleGroup("Timezrite"),
  createFeraounScaleGroup("Toudja")
];