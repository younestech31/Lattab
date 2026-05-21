import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

const scaleHangarsCommun = [
  {
    label: "En zone urbaine",
    unit: "DA/m²/Mois",
    zoneResidentielle: createRange(935, 1100),
    centreVille: createRange(850, 1000),
    zonePeripherique: createRange(765, 900),
    zoneEloignement: createRange(689, 810)
  },
  {
    label: "En zone rurale",
    unit: "DA/m²/Mois",
    zoneResidentielle: createRange(842, 990),
    centreVille: createRange(765, 900),
    zonePeripherique: createRange(689, 810),
    zoneEloignement: createRange(620, 729)
  }
];

// ============================================================================
// SHARED STANDARD SCALES & FIELDS (LOCATIVE VALUES / MONTHLY LEASES)
// ============================================================================
const terrainsAgricolesPlaineCommunLoc = [
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(8500, 10000),
    zoneEloignement: createRange(7650, 9000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(7650, 9000),
    zoneEloignement: createRange(6885, 8100)
  }
];

// ============================================================================
// SCALE 2: KSAR ELHIRANE GROUP scale
// ============================================================================
const createKsarElhiraneLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(63, 74),
      centreVille: createRange(57, 67),
      zonePeripherique: createRange(51, 60),
      zoneEloignement: createRange(46, 54)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(56, 66),
      centreVille: createRange(51, 60),
      zonePeripherique: createRange(46, 54),
      zoneEloignement: createRange(42, 49)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(50, 59),
      centreVille: createRange(46, 54),
      zonePeripherique: createRange(41, 48),
      zoneEloignement: createRange(37, 43)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(44, 52),
      centreVille: createRange(40, 47),
      zonePeripherique: createRange(36, 42),
      zoneEloignement: createRange(32, 38)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(216, 254),
      centreVille: createRange(196, 231),
      zonePeripherique: createRange(177, 208),
      zoneEloignement: createRange(159, 187)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(194, 229),
      centreVille: createRange(177, 208),
      zonePeripherique: createRange(159, 187),
      zoneEloignement: createRange(143, 168)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(173, 203),
      centreVille: createRange(157, 185),
      zonePeripherique: createRange(141, 166),
      zoneEloignement: createRange(127, 150)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(151, 178),
      centreVille: createRange(137, 162),
      zonePeripherique: createRange(124, 146),
      zoneEloignement: createRange(111, 131)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(1169, 1375),
      centreVille: createRange(1063, 1250),
      zonePeripherique: createRange(956, 1125),
      zoneEloignement: createRange(861, 1013)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(1052, 1238),
      centreVille: createRange(956, 1125),
      zonePeripherique: createRange(861, 1013),
      zoneEloignement: createRange(775, 911)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(935, 1100),
      centreVille: createRange(850, 1000),
      zonePeripherique: createRange(765, 900),
      zoneEloignement: createRange(689, 810)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(187, 220),
      centreVille: createRange(170, 200),
      zonePeripherique: createRange(153, 180),
      zoneEloignement: createRange(138, 162)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(168, 198),
      centreVille: createRange(153, 180),
      zonePeripherique: createRange(138, 162),
      zoneEloignement: createRange(124, 146)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(935, 1100),
      centreVille: createRange(850, 1000),
      zonePeripherique: createRange(765, 900),
      zoneEloignement: createRange(689, 810)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(842, 990),
      centreVille: createRange(765, 900),
      zonePeripherique: createRange(689, 810),
      zoneEloignement: createRange(620, 729)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(70, 83),
      centreVille: createRange(64, 75),
      zonePeripherique: createRange(57, 68),
      zoneEloignement: createRange(52, 61)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(63, 74),
      centreVille: createRange(57, 68),
      zonePeripherique: createRange(52, 61),
      zoneEloignement: createRange(46, 55)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(56, 66),
      centreVille: createRange(51, 60),
      zonePeripherique: createRange(46, 54),
      zoneEloignement: createRange(41, 49)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(49, 58),
      centreVille: createRange(45, 53),
      zonePeripherique: createRange(40, 47),
      zoneEloignement: createRange(36, 43)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      centreVille: createRange(29, 34),
      zonePeripherique: createRange(26, 31),
      zoneEloignement: createRange(23, 28)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(32, 37),
      centreVille: createRange(29, 34),
      zonePeripherique: createRange(26, 31),
      zoneEloignement: createRange(23, 28)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
});

// ============================================================================
// SCALE 7: GUELTAT SIDI SAAD GROUP scale
// ============================================================================
const createGueltatSidiSaadLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(23, 28),
      centreVille: createRange(21, 25),
      zonePeripherique: createRange(19, 23),
      zoneEloignement: createRange(17, 20)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(21, 25),
      centreVille: createRange(19, 23),
      zonePeripherique: createRange(17, 20),
      zoneEloignement: createRange(15, 18)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(19, 22),
      centreVille: createRange(17, 20),
      zonePeripherique: createRange(15, 18),
      zoneEloignement: createRange(14, 16)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(16, 19),
      centreVille: createRange(15, 18),
      zonePeripherique: createRange(13, 16),
      zoneEloignement: createRange(12, 14)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(59, 69),
      centreVille: createRange(54, 63),
      zonePeripherique: createRange(48, 57),
      zoneEloignement: createRange(43, 51)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(53, 62),
      centreVille: createRange(48, 57),
      zonePeripherique: createRange(43, 51),
      zoneEloignement: createRange(39, 46)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(47, 55),
      centreVille: createRange(43, 50),
      zonePeripherique: createRange(39, 45),
      zoneEloignement: createRange(35, 41)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(41, 49),
      centreVille: createRange(37, 44),
      zonePeripherique: createRange(34, 40),
      zoneEloignement: createRange(30, 36)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(140, 165),
      centreVille: createRange(128, 150),
      zonePeripherique: createRange(115, 135),
      zoneEloignement: createRange(103, 122)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(126, 149),
      centreVille: createRange(115, 135),
      zonePeripherique: createRange(103, 122),
      zoneEloignement: createRange(93, 109)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(112, 132),
      centreVille: createRange(102, 120),
      zonePeripherique: createRange(92, 108),
      zoneEloignement: createRange(83, 97)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(94, 110),
      centreVille: createRange(85, 100),
      zonePeripherique: createRange(77, 90),
      zoneEloignement: createRange(69, 81)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(84, 99),
      centreVille: createRange(77, 90),
      zonePeripherique: createRange(69, 81),
      zoneEloignement: createRange(62, 73)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(23, 28),
      centreVille: createRange(21, 25),
      zonePeripherique: createRange(19, 23),
      zoneEloignement: createRange(17, 20)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(21, 25),
      centreVille: createRange(19, 23),
      zonePeripherique: createRange(17, 20),
      zoneEloignement: createRange(15, 18)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(19, 22),
      centreVille: createRange(17, 20),
      zonePeripherique: createRange(15, 18),
      zoneEloignement: createRange(14, 16)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(16, 19),
      centreVille: createRange(15, 18),
      zonePeripherique: createRange(13, 16),
      zoneEloignement: createRange(12, 14)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(23, 28),
      centreVille: createRange(21, 25),
      zonePeripherique: createRange(19, 23),
      zoneEloignement: createRange(17, 20)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(23, 28),
      centreVille: createRange(21, 25),
      zonePeripherique: createRange(19, 23),
      zoneEloignement: createRange(17, 20)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
});

// ============================================================================
// EXPORTED LOCATIONS REFERENCE DATA
// ============================================================================
export const laghouatPriceReferenceLocations: PriceRefCommune[] = [
  // 1. LAGHOUAT (Page 2)
  {
    commune: "Laghouat",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 176),
        centreVille: createRange(136, 160),
        zonePeripherique: createRange(122, 144),
        zoneEloignement: createRange(110, 130)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(131, 154),
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(107, 126),
        zoneEloignement: createRange(96, 113)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(262, 308),
        centreVille: createRange(238, 280),
        zonePeripherique: createRange(214, 252),
        zoneEloignement: createRange(193, 227)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(236, 277),
        centreVille: createRange(214, 252),
        zonePeripherique: createRange(193, 227),
        zoneEloignement: createRange(174, 204)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(209, 246),
        centreVille: createRange(190, 224),
        zonePeripherique: createRange(171, 202),
        zoneEloignement: createRange(154, 181)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(183, 216),
        centreVille: createRange(167, 196),
        zonePeripherique: createRange(150, 176),
        zoneEloignement: createRange(135, 159)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1403, 1650),
        centreVille: createRange(1275, 1500),
        zonePeripherique: createRange(1148, 1350),
        zoneEloignement: createRange(1033, 1215)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1262, 1485),
        centreVille: createRange(1148, 1350),
        zonePeripherique: createRange(1033, 1215),
        zoneEloignement: createRange(929, 1094)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1122, 1320),
        centreVille: createRange(1020, 1200),
        zonePeripherique: createRange(918, 1080),
        zoneEloignement: createRange(826, 972)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1753, 2063),
        zonePeripherique: createRange(1434, 1688),
        zoneEloignement: createRange(1291, 1519)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(1578, 1856),
        zonePeripherique: createRange(1434, 1688),
        zoneEloignement: createRange(1162, 1367)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1403, 1650),
        zonePeripherique: createRange(1148, 1350),
        zoneEloignement: createRange(1033, 1215)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1262, 1485),
        zonePeripherique: createRange(1033, 1215),
        zoneEloignement: createRange(929, 1094)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(125, 147),
        centreVille: createRange(114, 134),
        zonePeripherique: createRange(103, 121),
        zoneEloignement: createRange(92, 109)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(113, 133),
        centreVille: createRange(103, 121),
        zonePeripherique: createRange(92, 109),
        zoneEloignement: createRange(83, 98)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 118),
        centreVille: createRange(91, 107),
        zonePeripherique: createRange(82, 96),
        zoneEloignement: createRange(74, 87)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(88, 103),
        centreVille: createRange(80, 94),
        zonePeripherique: createRange(72, 84),
        zoneEloignement: createRange(65, 76)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 74),
        zonePeripherique: createRange(57, 67),
        zoneEloignement: createRange(51, 60)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(12750, 15000),
        zoneEloignement: createRange(11475, 13500)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(11475, 13500),
        zoneEloignement: createRange(10328, 12150)
      }
    ]
  },

  // 2. KSAR ELHIRANE GROUP (Pages 3, 4, 5, 9, 10, 11, 25)
  createKsarElhiraneLocScale("Ksar Elhirane"),
  createKsarElhiraneLocScale("Ben Nacer Ben Chohra"),
  createKsarElhiraneLocScale("Sidi Makhlouf"),
  createKsarElhiraneLocScale("Ain Madhi"),
  createKsarElhiraneLocScale("Tadjmout"),
  createKsarElhiraneLocScale("Elkheneg"),
  createKsarElhiraneLocScale("Sidi Bouzid"),

  // 3. EL ASSAFIA (Page 6)
  {
    commune: "El Assafia",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(47, 55),
        centreVille: createRange(43, 50),
        zonePeripherique: createRange(38, 45),
        zoneEloignement: createRange(34, 41)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(42, 50),
        centreVille: createRange(38, 45),
        zonePeripherique: createRange(34, 41),
        zoneEloignement: createRange(31, 36)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(37, 44),
        centreVille: createRange(34, 40),
        zonePeripherique: createRange(31, 36),
        zoneEloignement: createRange(28, 32)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(33, 39),
        centreVille: createRange(30, 35),
        zonePeripherique: createRange(27, 32),
        zoneEloignement: createRange(24, 28)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(178, 209),
        centreVille: createRange(162, 190),
        zonePeripherique: createRange(145, 171),
        zoneEloignement: createRange(131, 154)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 188),
        centreVille: createRange(145, 171),
        zonePeripherique: createRange(131, 154),
        zoneEloignement: createRange(118, 139)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(142, 167),
        centreVille: createRange(129, 152),
        zonePeripherique: createRange(116, 137),
        zoneEloignement: createRange(105, 123)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(124, 146),
        centreVille: createRange(113, 133),
        zonePeripherique: createRange(102, 120),
        zoneEloignement: createRange(92, 108)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1169, 1375),
        centreVille: createRange(1063, 1250),
        zonePeripherique: createRange(956, 1125),
        zoneEloignement: createRange(861, 1013)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1052, 1238),
        centreVille: createRange(956, 1125),
        zonePeripherique: createRange(861, 1013),
        zoneEloignement: createRange(775, 911)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(935, 1100),
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(765, 900),
        zoneEloignement: createRange(689, 810)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1052, 1238),
        centreVille: createRange(956, 1125),
        zonePeripherique: createRange(861, 1013),
        zoneEloignement: createRange(775, 911)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(947, 1114),
        centreVille: createRange(861, 1013),
        zonePeripherique: createRange(775, 911),
        zoneEloignement: createRange(697, 820)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 83),
        centreVille: createRange(64, 75),
        zonePeripherique: createRange(57, 68),
        zoneEloignement: createRange(52, 61)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(63, 74),
        centreVille: createRange(57, 68),
        zonePeripherique: createRange(52, 61),
        zoneEloignement: createRange(46, 55)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(56, 66),
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(46, 54),
        zoneEloignement: createRange(41, 49)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(49, 58),
        centreVille: createRange(45, 53),
        zonePeripherique: createRange(40, 47),
        zoneEloignement: createRange(36, 43)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(29, 34),
        zonePeripherique: createRange(26, 31),
        zoneEloignement: createRange(23, 28)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(32, 37),
        centreVille: createRange(29, 34),
        zonePeripherique: createRange(26, 31),
        zoneEloignement: createRange(23, 28)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
  },

  // 4. HASSI R'MEL (Page 7)
  {
    commune: "Hassi R'mel",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(94, 110),
        centreVille: createRange(85, 100),
        zonePeripherique: createRange(77, 90),
        zoneEloignement: createRange(69, 81)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(84, 99),
        centreVille: createRange(77, 90),
        zonePeripherique: createRange(69, 81),
        zoneEloignement: createRange(62, 73)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 88),
        centreVille: createRange(68, 80),
        zonePeripherique: createRange(61, 72),
        zoneEloignement: createRange(55, 65)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(65, 77),
        centreVille: createRange(60, 70),
        zonePeripherique: createRange(54, 63),
        zoneEloignement: createRange(48, 57)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(415, 488),
        centreVille: createRange(377, 444),
        zonePeripherique: createRange(340, 400),
        zoneEloignement: createRange(306, 360)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(374, 440),
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(306, 360),
        zoneEloignement: createRange(275, 324)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(332, 391),
        centreVille: createRange(302, 355),
        zonePeripherique: createRange(272, 320),
        zoneEloignement: createRange(245, 288)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(291, 342),
        centreVille: createRange(264, 311),
        zonePeripherique: createRange(238, 280),
        zoneEloignement: createRange(214, 252)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1948, 2291),
        centreVille: createRange(1771, 2083),
        zonePeripherique: createRange(1593, 1875),
        zoneEloignement: createRange(1434, 1687)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1753, 2062),
        centreVille: createRange(1593, 1875),
        zonePeripherique: createRange(1434, 1687),
        zoneEloignement: createRange(1291, 1519)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1558, 1833),
        centreVille: createRange(1416, 1666),
        zonePeripherique: createRange(1275, 1500),
        zoneEloignement: createRange(1147, 1350)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 83),
        centreVille: createRange(64, 75),
        zonePeripherique: createRange(57, 68),
        zoneEloignement: createRange(52, 61)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(63, 74),
        centreVille: createRange(57, 68),
        zonePeripherique: createRange(52, 61),
        zoneEloignement: createRange(46, 55)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(56, 66),
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(46, 54),
        zoneEloignement: createRange(41, 49)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(49, 58),
        centreVille: createRange(45, 53),
        zonePeripherique: createRange(40, 47),
        zoneEloignement: createRange(36, 43)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
        zonePeripherique: createRange(77, 90),
        zoneEloignement: createRange(69, 81)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(94, 110),
        centreVille: createRange(85, 100),
        zonePeripherique: createRange(77, 90),
        zoneEloignement: createRange(69, 81)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
  },

  // 5. HASSI DELAA (Page 8)
  {
    commune: "Hassi Delaa",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(63, 74),
        centreVille: createRange(57, 67),
        zonePeripherique: createRange(51, 60),
        zoneEloignement: createRange(46, 54)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(56, 66),
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(46, 54),
        zoneEloignement: createRange(42, 49)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 59),
        centreVille: createRange(46, 54),
        zonePeripherique: createRange(41, 48),
        zoneEloignement: createRange(37, 43)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(44, 52),
        centreVille: createRange(40, 47),
        zonePeripherique: createRange(36, 42),
        zoneEloignement: createRange(32, 38)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(119, 140),
        centreVille: createRange(108, 127),
        zonePeripherique: createRange(97, 114),
        zoneEloignement: createRange(87, 103)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(107, 126),
        centreVille: createRange(97, 114),
        zonePeripherique: createRange(87, 103),
        zoneEloignement: createRange(79, 93)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 112),
        centreVille: createRange(86, 102),
        zonePeripherique: createRange(78, 91),
        zoneEloignement: createRange(70, 82)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(83, 98),
        centreVille: createRange(76, 89),
        zonePeripherique: createRange(68, 80),
        zoneEloignement: createRange(61, 72)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(468, 550),
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(383, 450),
        zoneEloignement: createRange(344, 405)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(421, 495),
        centreVille: createRange(383, 450),
        zonePeripherique: createRange(344, 405),
        zoneEloignement: createRange(310, 365)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(374, 440),
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(306, 360),
        zoneEloignement: createRange(275, 324)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      }
    ],
    hangars: scaleHangarsCommun,
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 83),
        centreVille: createRange(64, 75),
        zonePeripherique: createRange(57, 68),
        zoneEloignement: createRange(52, 61)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(63, 74),
        centreVille: createRange(57, 68),
        zonePeripherique: createRange(52, 61),
        zoneEloignement: createRange(46, 55)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(56, 66),
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(46, 54),
        zoneEloignement: createRange(41, 49)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(49, 58),
        centreVille: createRange(45, 53),
        zonePeripherique: createRange(40, 47),
        zoneEloignement: createRange(36, 43)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(32, 37),
        zonePeripherique: createRange(29, 34),
        zoneEloignement: createRange(23, 28)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(32, 37),
        centreVille: createRange(29, 34),
        zonePeripherique: createRange(26, 31),
        zoneEloignement: createRange(23, 28)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
  },

  // 6. TADJEROUNA GROUP (Pages 12, 13)
  {
    commune: "Tadjrouna",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(47, 55),
        centreVille: createRange(43, 50),
        zonePeripherique: createRange(38, 45),
        zoneEloignement: createRange(34, 41)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(42, 50),
        centreVille: createRange(38, 45),
        zonePeripherique: createRange(34, 41),
        zoneEloignement: createRange(31, 36)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(37, 44),
        centreVille: createRange(34, 40),
        zonePeripherique: createRange(31, 36),
        zoneEloignement: createRange(28, 32)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(33, 39),
        centreVille: createRange(30, 35),
        zonePeripherique: createRange(27, 32),
        zoneEloignement: createRange(24, 28)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(119, 140),
        centreVille: createRange(108, 127),
        zonePeripherique: createRange(97, 114),
        zoneEloignement: createRange(87, 103)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(107, 126),
        centreVille: createRange(97, 114),
        zonePeripherique: createRange(87, 103),
        zoneEloignement: createRange(79, 93)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 112),
        centreVille: createRange(86, 102),
        zonePeripherique: createRange(78, 91),
        zoneEloignement: createRange(70, 82)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(83, 98),
        centreVille: createRange(76, 89),
        zonePeripherique: createRange(68, 80),
        zoneEloignement: createRange(61, 72)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(234, 275),
        centreVille: createRange(213, 250),
        zonePeripherique: createRange(191, 225),
        zoneEloignement: createRange(172, 203)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(210, 248),
        centreVille: createRange(191, 225),
        zonePeripherique: createRange(172, 203),
        zoneEloignement: createRange(155, 182)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 28),
        zonePeripherique: createRange(21, 25),
        zoneEloignement: createRange(19, 23)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 25),
        zonePeripherique: createRange(19, 23),
        zoneEloignement: createRange(17, 20)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(19, 22),
        zonePeripherique: createRange(17, 20),
        zoneEloignement: createRange(15, 18)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 19),
        zonePeripherique: createRange(15, 18),
        zoneEloignement: createRange(13, 16)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 28),
        zonePeripherique: createRange(21, 25),
        zoneEloignement: createRange(19, 23)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(23, 28),
        centreVille: createRange(21, 25),
        zonePeripherique: createRange(19, 23),
        zoneEloignement: createRange(17, 20)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
  },
  {
    commune: "Elhouita",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(47, 55),
        centreVille: createRange(43, 50),
        zonePeripherique: createRange(38, 45),
        zoneEloignement: createRange(34, 41)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(42, 50),
        centreVille: createRange(38, 45),
        zonePeripherique: createRange(34, 41),
        zoneEloignement: createRange(31, 36)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(37, 44),
        centreVille: createRange(34, 40),
        zonePeripherique: createRange(31, 36),
        zoneEloignement: createRange(28, 32)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(33, 39),
        centreVille: createRange(30, 35),
        zonePeripherique: createRange(27, 32),
        zoneEloignement: createRange(24, 28)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(119, 140),
        centreVille: createRange(108, 127),
        zonePeripherique: createRange(97, 114),
        zoneEloignement: createRange(87, 103)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(107, 126),
        centreVille: createRange(97, 114),
        zonePeripherique: createRange(87, 103),
        zoneEloignement: createRange(79, 93)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 112),
        centreVille: createRange(86, 102),
        zonePeripherique: createRange(78, 91),
        zoneEloignement: createRange(70, 82)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(83, 98),
        centreVille: createRange(76, 89),
        zonePeripherique: createRange(68, 80),
        zoneEloignement: createRange(61, 72)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(234, 275),
        centreVille: createRange(213, 250),
        zonePeripherique: createRange(191, 225),
        zoneEloignement: createRange(172, 203)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(210, 248),
        centreVille: createRange(191, 225),
        zonePeripherique: createRange(172, 203),
        zoneEloignement: createRange(155, 182)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 28),
        zonePeripherique: createRange(21, 25),
        zoneEloignement: createRange(19, 23)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 25),
        zonePeripherique: createRange(19, 23),
        zoneEloignement: createRange(17, 20)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(19, 22),
        zonePeripherique: createRange(17, 20),
        zoneEloignement: createRange(15, 18)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 19),
        zonePeripherique: createRange(15, 18),
        zoneEloignement: createRange(13, 16)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 28),
        zonePeripherique: createRange(21, 25),
        zoneEloignement: createRange(19, 23)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(23, 28),
        centreVille: createRange(21, 25),
        zonePeripherique: createRange(19, 23),
        zoneEloignement: createRange(17, 20)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
  },

  // 7. GUELTAT SIDI SAAD GROUP (Pages 14, 15, 16, 17, 18, 19, 20, 22, 23, 24)
  createGueltatSidiSaadLocScale("Gueltat Sidi Saad"),
  createGueltatSidiSaadLocScale("El Baidha"),
  createGueltatSidiSaadLocScale("Ain Sidi Ali"),
  createGueltatSidiSaadLocScale("Brida"),
  createGueltatSidiSaadLocScale("Hadje Mechri"),
  createGueltatSidiSaadLocScale("Taouyala"),
  createGueltatSidiSaadLocScale("El Ghicha"),
  createGueltatSidiSaadLocScale("Sebgag"),
  createGueltatSidiSaadLocScale("Oued Moura"),
  createGueltatSidiSaadLocScale("Oued M'zi"),

  // 8. AFLOU (Page 21)
  {
    commune: "Aflou",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(94, 110),
        centreVille: createRange(85, 100),
        zonePeripherique: createRange(77, 90),
        zoneEloignement: createRange(69, 81)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(84, 99),
        centreVille: createRange(77, 90),
        zonePeripherique: createRange(69, 81),
        zoneEloignement: createRange(62, 73)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 88),
        centreVille: createRange(68, 80),
        zonePeripherique: createRange(61, 72),
        zoneEloignement: createRange(55, 65)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(65, 77),
        centreVille: createRange(60, 70),
        zonePeripherique: createRange(54, 63),
        zoneEloignement: createRange(48, 57)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(237, 278),
        centreVille: createRange(215, 253),
        zonePeripherique: createRange(194, 228),
        zoneEloignement: createRange(174, 205)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(213, 250),
        centreVille: createRange(194, 228),
        zonePeripherique: createRange(174, 205),
        zoneEloignement: createRange(157, 184)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(189, 223),
        centreVille: createRange(172, 202),
        zonePeripherique: createRange(155, 182),
        zoneEloignement: createRange(139, 164)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(166, 195),
        centreVille: createRange(151, 177),
        zonePeripherique: createRange(135, 159),
        zoneEloignement: createRange(122, 143)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(187, 220),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(153, 180),
        zoneEloignement: createRange(138, 162)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(168, 198),
        centreVille: createRange(153, 180),
        zonePeripherique: createRange(138, 162),
        zoneEloignement: createRange(124, 146)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 176),
        centreVille: createRange(136, 160),
        zonePeripherique: createRange(122, 144),
        zoneEloignement: createRange(110, 130)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(584, 688),
        zonePeripherique: createRange(531, 625),
        zoneEloignement: createRange(478, 563)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(526, 619),
        zonePeripherique: createRange(478, 563),
        zoneEloignement: createRange(430, 506)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(263, 309),
        zonePeripherique: createRange(239, 281),
        zoneEloignement: createRange(215, 253)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(236, 278),
        zonePeripherique: createRange(215, 253),
        zoneEloignement: createRange(193, 228)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 28),
        zonePeripherique: createRange(21, 25),
        zoneEloignement: createRange(19, 23)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 25),
        zonePeripherique: createRange(19, 23),
        zoneEloignement: createRange(17, 20)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(19, 22),
        zonePeripherique: createRange(17, 20),
        zoneEloignement: createRange(15, 18)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 19),
        zonePeripherique: createRange(15, 18),
        zoneEloignement: createRange(13, 16)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 28),
        zonePeripherique: createRange(21, 25),
        zoneEloignement: createRange(19, 23)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(23, 28),
        centreVille: createRange(21, 25),
        zonePeripherique: createRange(19, 23),
        zoneEloignement: createRange(17, 20)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineCommunLoc
  }
];