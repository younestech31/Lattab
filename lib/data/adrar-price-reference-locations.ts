import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

export const adrarPriceReferenceLocations: PriceRefCommune[] = [
  // ==========================================
  // PAGE 2: COMMUNE ADRAR
  // ==========================================
  {
    commune: "ADRAR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(182, 209),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(80, 92)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(97, 121),
        zonePeripherique: createRange(50, 60),
        zoneEloignement: createRange(40, 46)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(30, 35),
        zonePeripherique: createRange(20, 23),
        zoneEloignement: createRange(20, 23)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(135, 150),
        zonePeripherique: createRange(100, 115)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 80),
        zonePeripherique: createRange(50, 60)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(800, 920),
        zonePeripherique: createRange(300, 350)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(450, 500),
        zonePeripherique: createRange(220, 255),
        zoneEloignement: createRange(130, 135)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(220, 240),
        zonePeripherique: createRange(160, 185)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 405),
        zonePeripherique: createRange(220, 255)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(220, 255),
        zonePeripherique: createRange(160, 185)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(160, 185),
        zonePeripherique: createRange(150, 175)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(140, 165),
        zonePeripherique: createRange(130, 150)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2650)
      }
    ]
  },

  // ==========================================
  // PAGE 3: COMMUNE TAMEST
  // ==========================================
  {
    commune: "TAMEST",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 4: COMMUNE IN-ZEGHMIR
  // ==========================================
  {
    commune: "IN-ZEGHMIR",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 5: COMMUNE TIT
  // ==========================================
  {
    commune: "TIT",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 6: COMMUNE TIMOKTEN
  // ==========================================
  {
    commune: "TIMOKTEN",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 7: COMMUNE TAMENTIT
  // ==========================================
  {
    commune: "TAMENTIT",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 8: COMMUNE SALI
  // ==========================================
  {
    commune: "SALI",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 9: COMMUNE AKABLI
  // ==========================================
  {
    commune: "AKABLI",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 10: COMMUNE TIMMI
  // ==========================================
  {
    commune: "TIMMI",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 11: COMMUNE BOUDA
  // ==========================================
  {
    commune: "BOUDA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 12: COMMUNE SBAA
  // ==========================================
  {
    commune: "SBAA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(63, 71),
        zonePeripherique: createRange(42, 47)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 23),
        zonePeripherique: createRange(11, 13)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(53, 58),
        zonePeripherique: createRange(32, 37)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(42, 47),
        zonePeripherique: createRange(32, 37)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2700)
      }
    ]
  },

  // ==========================================
  // PAGE 13: COMMUNE FENOUGHIL
  // ==========================================
  {
    commune: "FENOUGHIL",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(77, 87),
        zonePeripherique: createRange(44, 50)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(55, 62),
        zonePeripherique: createRange(33, 39)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 24),
        zonePeripherique: createRange(22, 24)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2650)
      }
    ]
  },

  // ==========================================
  // PAGE 14: COMMUNE Reggane
  // ==========================================
  {
    commune: "Reggane",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(77, 87),
        zonePeripherique: createRange(44, 50)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(55, 62),
        zonePeripherique: createRange(33, 39)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 24),
        zonePeripherique: createRange(22, 24)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2650)
      }
    ]
  },

  // ==========================================
  // PAGE 15: COMMUNE Tsabit
  // ==========================================
  {
    commune: "Tsabit",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(77, 87),
        zonePeripherique: createRange(44, 50)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(55, 62),
        zonePeripherique: createRange(33, 39)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 24),
        zonePeripherique: createRange(22, 24)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2650)
      }
    ]
  },

  // ==========================================
  // PAGE 16: COMMUNE Zaouiet Kounta
  // ==========================================
  {
    commune: "Zaouiet Kounta",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(77, 87),
        zonePeripherique: createRange(44, 50)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(55, 62),
        zonePeripherique: createRange(33, 39)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 24),
        zonePeripherique: createRange(22, 24)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2650)
      }
    ]
  },

  // ==========================================
  // PAGE 17: COMMUNE Aoulef
  // ==========================================
  {
    commune: "Aoulef",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(77, 87),
        zonePeripherique: createRange(44, 50)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(55, 62),
        zonePeripherique: createRange(33, 39)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 24),
        zonePeripherique: createRange(22, 24)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(66, 75),
        zonePeripherique: createRange(44, 50)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2650)
      }
    ]
  }
];