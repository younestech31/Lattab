import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// TEMPLATE BUILDERS FOR COMMUNE LOCATIVE SCALES
// ============================================================================

// Tazoult Group (Tazoult, Ain Touta, Merouana, El Madher, Ras El Aioun)
const createTazoultLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(300, 345),
      centreVille: createRange(350, 403),
      zonePeripherique: createRange(270, 311),
      zoneEloignement: createRange(180, 207)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(280, 322),
      centreVille: createRange(320, 368),
      zonePeripherique: createRange(250, 288),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(270, 311),
      zonePeripherique: createRange(230, 265),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(140, 161),
      centreVille: createRange(190, 219),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(80, 92)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(260, 299),
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(230, 265),
      zoneEloignement: createRange(160, 184)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(280, 322),
      zonePeripherique: createRange(200, 230),
      zoneEloignement: createRange(140, 161)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(140, 161)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(350, 403),
      centreVille: createRange(500, 575),
      zonePeripherique: createRange(300, 345)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(320, 368),
      centreVille: createRange(400, 460),
      zonePeripherique: createRange(230, 265)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(200, 230),
      centreVille: createRange(350, 403),
      zonePeripherique: createRange(200, 230)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(320, 368),
      centreVille: createRange(500, 575),
      zonePeripherique: createRange(300, 345)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(120, 138)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(30, 35)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(150, 173)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(70, 81)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(70, 81),
      zoneEloignement: createRange(50, 58)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(6000, 6900)
    }
  ]
});

// Arris Group (Arris, N'Gaous)
const createArrisLocScale = (name: string): PriceRefCommune => ({
  ...createTazoultLocScale(name),
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(280, 322),
      centreVille: createRange(320, 368),
      zonePeripherique: createRange(270, 311),
      zoneEloignement: createRange(180, 207)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(260, 299),
      centreVille: createRange(280, 322),
      zonePeripherique: createRange(250, 288),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(240, 276),
      centreVille: createRange(260, 299),
      zonePeripherique: createRange(210, 242),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(140, 161),
      centreVille: createRange(190, 219),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(80, 92)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(270, 311),
      zonePeripherique: createRange(240, 276)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(230, 265),
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(200, 230)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(140, 161)
    }
  ]
});

// Seriana Group (Seriana, Chemora, Timgad, El Djezar, Tkout, Ain Djasser, Bouzina, Seggana, Menaa, Ichemoul, Theniet El Abed, Ouled Si Sliman)
const createSerianaLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(340, 391),
      zonePeripherique: createRange(220, 253),
      zoneEloignement: createRange(180, 207)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(165, 190),
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(145, 167),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(145, 167),
      centreVille: createRange(150, 173),
      zonePeripherique: createRange(135, 155),
      zoneEloignement: createRange(85, 98)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(60, 69)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(160, 184),
      centreVille: createRange(180, 207),
      zonePeripherique: createRange(130, 150)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(130, 150),
      centreVille: createRange(140, 161),
      zonePeripherique: createRange(125, 144)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(95, 109),
      centreVille: createRange(120, 138)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(150, 173)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(200, 230),
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(60, 69)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(200, 230),
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(60, 69)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(30, 35)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(64, 73),
      zoneEloignement: createRange(50, 58)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(20000, 23000)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(15000, 17250)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(8000, 9200)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(6000, 6900)
    }
  ]
});

// Djearma Group (Djearma, Aine Yagout)
const createDjearmaLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(210, 242),
      zoneEloignement: createRange(180, 207)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(150, 173),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      centreVille: createRange(165, 190),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(85, 98)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(60, 69)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(200, 230),
      zonePeripherique: createRange(140, 161)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(170, 196),
      zonePeripherique: createRange(100, 115)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(150, 173)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(130, 150),
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(60, 69)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(250, 288),
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(60, 69)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(30, 35)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(64, 73),
      zoneEloignement: createRange(50, 58)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(20000, 23000)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(6000, 6900)
    }
  ]
});

// M'Doukal Group (M'Doukal, Bitam, Boumegueur, Zanat El Beidha, Sefiane, Azil Abdelkader, Oued El Ma, Oued Taga)
const createMDoukalLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(230, 265),
      centreVille: createRange(260, 299),
      zonePeripherique: createRange(184, 212)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(196, 225),
      zonePeripherique: createRange(122, 140)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(85, 98)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(70, 81),
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(60, 69)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(140, 161),
      centreVille: createRange(180, 207),
      zonePeripherique: createRange(120, 138)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(80, 92)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(180, 200),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(110, 127),
      centreVille: createRange(140, 150),
      zonePeripherique: createRange(70, 81)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(180, 200),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(110, 127),
      centreVille: createRange(140, 150),
      zonePeripherique: createRange(70, 81)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(40, 46)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(30, 35)
    }
  ],
  terrainsNus: [
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(63, 72),
      zoneEloignement: createRange(50, 58)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(6000, 6900)
    }
  ]
});

// Tilatou Group (Tilatou, Rahbat, Boulhilet, Boumia, Taxlent, Ghassira, Ayoun El Assafir, Taikhempt, Ksar Belezma, Foum Etoub, Guigba, Tigharghar, Ouled Amar, Hidoussa, Inoughissen)
const createTilatouLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(28, 32.2),
      centreVille: createRange(30, 34.5),
      zonePeripherique: createRange(25, 28.75),
      zoneEloignement: createRange(17, 19.55)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(26, 29.9),
      centreVille: createRange(28, 32.2),
      zonePeripherique: createRange(19, 21.85),
      zoneEloignement: createRange(15, 17.25)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(24, 27.6),
      centreVille: createRange(26, 29.9),
      zonePeripherique: createRange(14, 16.1),
      zoneEloignement: createRange(12, 13.8)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(15, 17.25),
      centreVille: createRange(20, 23),
      zonePeripherique: createRange(12, 13.8),
      zoneEloignement: createRange(10, 11.5)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(20, 23),
      centreVille: createRange(24, 27.6)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(15, 17.25)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(27, 31.05),
      centreVille: createRange(32, 36.8),
      zonePeripherique: createRange(25, 28.75)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(23, 26.45),
      centreVille: createRange(28, 32.2),
      zonePeripherique: createRange(20, 23)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(18, 20.7),
      centreVille: createRange(25, 28.75),
      zonePeripherique: createRange(17, 19.55)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(12, 13.8),
      zoneEloignement: createRange(10, 11.5)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(10, 11.5),
      zoneEloignement: createRange(8, 9.2)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(7, 8.05),
      centreVille: createRange(12, 13.8),
      zonePeripherique: createRange(7, 8.05),
      zoneEloignement: createRange(5, 5.75)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(6, 6.9),
      centreVille: createRange(10, 11.5),
      zonePeripherique: createRange(6, 6.9),
      zoneEloignement: createRange(4.5, 5.175)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(4, 4.6)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(3, 3.45)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(5, 5.75),
      centreVille: createRange(7, 8.05),
      zonePeripherique: createRange(4, 4.6),
      zoneEloignement: createRange(2, 2.3)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      zonePeripherique: createRange(7, 8.05),
      zoneEloignement: createRange(6, 6.9)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(1944000, 2235600)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(1555000, 1788250)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(924000, 1062600)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(739000, 849850)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(590000, 678500)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(636000, 731400)
    }
  ]
});

// Chir Group (Chir, Gosbat, Kimel, Larbaa, Lazrou, Lamcen, Maafa, Ouled Salam, Oueld Aouf, Oueld Fadhel, Beni Fadhala, Tighanimine, El Hassi)
const createChirLocScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      centreVille: createRange(170, 196),
      zonePeripherique: createRange(150, 173)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      centreVille: createRange(75, 86),
      zonePeripherique: createRange(70, 81)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(50, 58),
      zonePeripherique: createRange(40, 46)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(100, 115)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      centreVille: createRange(70, 81),
      zonePeripherique: createRange(60, 69)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138)
    }
  ],
  hangars: [
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      zoneEloignement: createRange(20, 23)
    }
  ],
  terrainsAgricolesPlaine: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(25000, 28750)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(20000, 23000)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(15000, 17250)
    }
  ],
  terrainsAgricolesPente: [
    {
      label: "Potentialité élevée",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(10000, 11500)
    },
    {
      label: "Potentialité moyenne",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(8000, 9200)
    },
    {
      label: "Potentialité faible",
      unit: "DA/Ha/Mois",
      zoneEloignement: createRange(6000, 6900)
    }
  ]
});


export const batnaPriceReferenceLocations: PriceRefCommune[] = [
  // 1. BATNA & BARIKA (Pages 2, 3 - scale A)
  {
    commune: "Batna",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(300, 345),
        zoneEloignement: createRange(250, 288)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(360, 414),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(200, 230)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(180, 207)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(230, 265),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(100, 115)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(450, 518),
        zonePeripherique: createRange(280, 322),
        zoneEloignement: createRange(200, 230)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(290, 334),
        centreVille: createRange(330, 380),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(180, 207)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(150, 173)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(230, 265)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(600, 690),
        centreVille: createRange(2000, 2300),
        zonePeripherique: createRange(480, 552)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(500, 575),
        centreVille: createRange(1600, 1840),
        zonePeripherique: createRange(350, 403)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(900, 1035),
        zonePeripherique: createRange(220, 253)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(480, 552),
        centreVille: createRange(700, 805),
        zonePeripherique: createRange(300, 345)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(600, 690),
        zonePeripherique: createRange(250, 288)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(300, 345)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(250, 288)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(200, 230)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(80, 92)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(50, 58)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(29000, 33350)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(28000, 32200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250)
      }
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(12000, 13800)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900)
      }
    ]
  },
  {
    commune: "Barika",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(300, 345),
        zoneEloignement: createRange(250, 288)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(360, 414),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(200, 230)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(180, 207)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(230, 265),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(100, 115)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(450, 518),
        zonePeripherique: createRange(280, 322),
        zoneEloignement: createRange(200, 230)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(290, 334),
        centreVille: createRange(330, 380),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(180, 207)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(150, 173)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(230, 265)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(600, 690),
        centreVille: createRange(2000, 2300),
        zonePeripherique: createRange(480, 552)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(500, 575),
        centreVille: createRange(1600, 1840),
        zonePeripherique: createRange(350, 403)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(900, 1035),
        zonePeripherique: createRange(220, 253)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(480, 552),
        centreVille: createRange(700, 805),
        zonePeripherique: createRange(300, 345)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(600, 690),
        zonePeripherique: createRange(250, 288)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(300, 345)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(250, 288)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(200, 230)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(80, 92)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(50, 58)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(29000, 33350)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(28000, 32200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250)
      }
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(12000, 13800)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900)
      }
    ]
  },

  // 2. TAZOULT GROUP (Pages 4, 5, 6, 7, 8 - scale B)
  createTazoultLocScale("Tazoult"),
  createTazoultLocScale("Ain Touta"),
  createTazoultLocScale("Merouana"),
  createTazoultLocScale("El Madher"),
  createTazoultLocScale("Ras El Aioun"),

  // 3. ARRIS GROUP (Pages 9, 10 - scale C)
  createArrisLocScale("Arris"),
  createArrisLocScale("N'Gaous"),

  // 4. SERIANA GROUP (Pages 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 - scale D)
  createSerianaLocScale("Seriana"),
  createSerianaLocScale("Chemora"),
  createSerianaLocScale("Timgad"),
  createSerianaLocScale("El Djezar"),
  createSerianaLocScale("Tkout"),
  createSerianaLocScale("Ain Djasser"),
  createSerianaLocScale("Bouzina"),
  createSerianaLocScale("Seggana"),
  createSerianaLocScale("Menaa"),
  createSerianaLocScale("Ichemoul"),
  createSerianaLocScale("Theniet El Abed"),
  createSerianaLocScale("Ouled Si Sliman"),

  // 5. FISDIS (Page 23 - scale E)
  {
    commune: "Fisdis",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(180, 207)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(220, 253),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(120, 138)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(100, 115),
        zoneEloignement: createRange(85, 98)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(100, 115)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(60, 69)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35)
      }
    ],
    terrainsNus: [
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250)
      }
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900)
      }
    ]
  },

  // 6. OUED CHAABA (Page 24 - scale F)
  {
    commune: "Oued Chaaba",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(180, 207)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(220, 253),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(120, 138)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(100, 115),
        zoneEloignement: createRange(85, 98)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(250, 288)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(150, 173)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(60, 69),
        zonePeripherique: createRange(130, 150)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(150, 173)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(60, 69),
        zonePeripherique: createRange(130, 150)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35)
      }
    ],
    terrainsNus: [
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58)
      }
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250)
      }
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500)
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200)
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900)
      }
    ]
  },

  // 7. DJEARMA GROUP (Pages 25, 26 - scale G)
  createDjearmaLocScale("Djearma"),
  createDjearmaLocScale("Aine Yagout"),

  // 8. M'DOUKAL GROUP (Pages 27, 28, 29, 30, 31, 32, 33, 34 - scale H)
  createMDoukalLocScale("M'Doukal"),
  createMDoukalLocScale("Bitam"),
  createMDoukalLocScale("Boumegueur"),
  createMDoukalLocScale("Zanat El Beidha"),
  createMDoukalLocScale("Sefiane"),
  createMDoukalLocScale("Azil Abdelkader"),
  createMDoukalLocScale("Oued El Ma"),
  createMDoukalLocScale("Oued Taga"),

  // 9. TILATOU GROUP (Pages 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 - scale I)
  createTilatouLocScale("Tilatou"),
  createTilatouLocScale("Rahbat"),
  createTilatouLocScale("Boulhilet"),
  createTilatouLocScale("Boumia"),
  createTilatouLocScale("Taxlent"),
  createTilatouLocScale("Ghassira"),
  createTilatouLocScale("Ayoun El Assafir"),
  createTilatouLocScale("Taikhempt"),
  createTilatouLocScale("Ksar Belezma"),
  createTilatouLocScale("Foum Etoub"),
  createTilatouLocScale("Guigba"),
  createTilatouLocScale("Tigharghar"),
  createTilatouLocScale("Ouled Amar"),
  createTilatouLocScale("Hidoussa"),
  createTilatouLocScale("Inoughissen"),

  // 10. CHIR GROUP (Pages 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62 - scale J)
  createChirLocScale("Chir"),
  createChirLocScale("Gosbat"),
  createChirLocScale("Kimel"),
  createChirLocScale("Larbaa"),
  createChirLocScale("Lazrou"),
  createChirLocScale("Lamcen"),
  createChirLocScale("Maafa"),
  createChirLocScale("Ouled Salam (M'cil)"),
  createChirLocScale("Oueld Aouf"),
  createChirLocScale("Oueld Fadhel"),
  createChirLocScale("Beni Fadhala Elhakania"),
  createChirLocScale("Tighanimine"),
  createChirLocScale("El Hassi")
];