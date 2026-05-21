import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCHEMES (MONTHLY LEASE / LOCATIVE VALUE)
// ============================================================================
const terrainsAgricolesPlaineLocatifs = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(6400, 7360),
    zoneEloignement: createRange(6400, 7360)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(5000, 5750),
    zoneEloignement: createRange(5000, 5750)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(4000, 4600),
    zoneEloignement: createRange(4000, 4600)
  }
];

const terrainsAgricolesPenteLocatifs = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(1400, 1610),
    zoneEloignement: createRange(1400, 1610)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(800, 920),
    zoneEloignement: createRange(800, 920)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(600, 690),
    zoneEloignement: createRange(600, 690)
  }
];

// ============================================================================
// SCALE-SPECIFIC CREATOR FUNCTIONS
// ============================================================================

// Chettia Group (Standing Individuels [170, 196])
const createChettiaGroupLocData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(170, 196),
      centreVille: createRange(160, 184),
      zonePeripherique: createRange(150, 173),
      zoneEloignement: createRange(140, 161)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(160, 184),
      centreVille: createRange(150, 173),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(130, 150)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(140, 161),
      zonePeripherique: createRange(130, 150),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(140, 161),
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(100, 115)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(130, 150),
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(110, 127),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(120, 138),
      centreVille: createRange(110, 127),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(90, 104),
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(520, 598),
      zonePeripherique: createRange(420, 483),
      zoneEloignement: createRange(320, 368)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(420, 483),
      zonePeripherique: createRange(320, 368),
      zoneEloignement: createRange(220, 253)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(320, 368),
      zonePeripherique: createRange(220, 253),
      zoneEloignement: createRange(200, 230)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(250, 288),
      zoneEloignement: createRange(200, 230)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(220, 253),
      zonePeripherique: createRange(200, 230),
      zoneEloignement: createRange(150, 173)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      centreVille: createRange(160, 184),
      zonePeripherique: createRange(150, 173),
      zoneEloignement: createRange(130, 150)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      centreVille: createRange(150, 173),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(120, 138)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(150, 173),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(130, 150)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(140, 161),
      zonePeripherique: createRange(130, 150),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(110, 127),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(110, 127),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(110, 127)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(110, 127),
      zoneEloignement: createRange(100, 115)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineLocatifs,
  terrainsAgricolesPente: terrainsAgricolesPenteLocatifs
});

// Ain Merane Group (Standing Individuels [160, 184])
const createAinMeraneGroupLocData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      centreVille: createRange(160, 184),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      centreVille: createRange(140, 161),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      centreVille: createRange(80, 92),
      zonePeripherique: createRange(70, 81),
      zoneEloignement: createRange(60, 69)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      centreVille: createRange(70, 81),
      zonePeripherique: createRange(60, 69),
      zoneEloignement: createRange(50, 58)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(60, 69),
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(500, 575),
      zonePeripherique: createRange(400, 460),
      zoneEloignement: createRange(300, 345)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(400, 460),
      zonePeripherique: createRange(300, 345),
      zoneEloignement: createRange(200, 230)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(200, 230),
      zoneEloignement: createRange(100, 115)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      centreVille: createRange(250, 288),
      zonePeripherique: createRange(200, 230),
      zoneEloignement: createRange(150, 173)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(150, 173),
      zoneEloignement: createRange(100, 115)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      centreVille: createRange(150, 173),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(100, 115)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(140, 161),
      zonePeripherique: createRange(130, 150),
      zoneEloignement: createRange(120, 138)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(110, 127)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(110, 127),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(110, 127),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineLocatifs,
  terrainsAgricolesPente: terrainsAgricolesPenteLocatifs
});

// Medjadja Group (Standing Individuels [150, 173])
const createMedjadjaGroupLocData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(150, 173),
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(90, 104),
      centreVille: createRange(80, 92),
      zonePeripherique: createRange(70, 81),
      zoneEloignement: createRange(60, 69)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(80, 92),
      centreVille: createRange(70, 81),
      zonePeripherique: createRange(60, 69),
      zoneEloignement: createRange(50, 58)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(70, 81),
      centreVille: createRange(60, 69),
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(60, 69),
      centreVille: createRange(50, 58),
      zonePeripherique: createRange(40, 46),
      zoneEloignement: createRange(30, 35)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(50, 58),
      centreVille: createRange(40, 46),
      zonePeripherique: createRange(30, 35),
      zoneEloignement: createRange(20, 23)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(40, 46),
      centreVille: createRange(30, 35),
      zonePeripherique: createRange(20, 23),
      zoneEloignement: createRange(15, 17)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(400, 460),
      zonePeripherique: createRange(300, 345),
      zoneEloignement: createRange(200, 230)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(200, 230),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(50, 58)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      centreVille: createRange(150, 173),
      zonePeripherique: createRange(140, 161),
      zoneEloignement: createRange(130, 150)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(100, 115)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      centreVille: createRange(140, 161),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(120, 138),
      zoneEloignement: createRange(110, 127)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(110, 127),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(110, 127),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      centreVille: createRange(95, 109),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(85, 98)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(85, 98),
      zoneEloignement: createRange(80, 92)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineLocatifs,
  terrainsAgricolesPente: terrainsAgricolesPenteLocatifs
});

// Sendjas Group (Standing Individuels [100, 115])
const createSendjasGroupLocData = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(100, 115),
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(90, 104),
      centreVille: createRange(80, 92),
      zonePeripherique: createRange(70, 81),
      zoneEloignement: createRange(60, 69)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(80, 92),
      centreVille: createRange(70, 81),
      zonePeripherique: createRange(60, 69),
      zoneEloignement: createRange(50, 58)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(70, 81),
      centreVille: createRange(60, 69),
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      centreVille: createRange(60, 69),
      zonePeripherique: createRange(50, 58),
      zoneEloignement: createRange(40, 46)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      centreVille: createRange(50, 58),
      zonePeripherique: createRange(40, 46),
      zoneEloignement: createRange(30, 35)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      centreVille: createRange(40, 46),
      zonePeripherique: createRange(30, 35),
      zoneEloignement: createRange(20, 23)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(30, 35),
      zonePeripherique: createRange(20, 23),
      zoneEloignement: createRange(10, 12)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(300, 345),
      zonePeripherique: createRange(200, 230),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    }
  ],
  locauxUsageProfessionnels: [
    {
      label: "Artere principale",
      unit: "DA/m²/Mois",
      centreVille: createRange(200, 230),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Artere secondaire",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    }
  ],
  hangars: [
    {
      label: "En zone urbaine",
      unit: "DA/m²/Mois",
      centreVille: createRange(130, 150),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "En zone rurale",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    }
  ],
  terrainsNus: [
    {
      label: "Pleine propriété deux (02) façades avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(120, 138),
      zonePeripherique: createRange(110, 127),
      zoneEloignement: createRange(100, 115)
    },
    {
      label: "Pleine propriété une (01) façade avec raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(110, 127),
      zonePeripherique: createRange(100, 115),
      zoneEloignement: createRange(90, 104)
    },
    {
      label: "Pleine propriété deux (02) façades sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(100, 115),
      zonePeripherique: createRange(90, 104),
      zoneEloignement: createRange(80, 92)
    },
    {
      label: "Pleine propriété une (01) façade sans raccordements",
      unit: "DA/m²/Mois",
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    },
    {
      label: "Dans l'indivision",
      unit: "DA/m²/Mois",
      centreVille: createRange(90, 104),
      zonePeripherique: createRange(80, 92),
      zoneEloignement: createRange(70, 81)
    },
    {
      label: "Industriel",
      unit: "DA/m²/Mois",
      centreVille: createRange(80, 92),
      zonePeripherique: createRange(70, 81),
      zoneEloignement: createRange(60, 69)
    }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineLocatifs,
  terrainsAgricolesPente: terrainsAgricolesPenteLocatifs
});


export const chlefPriceReferenceLocations: PriceRefCommune[] = [
  // ==========================================
  // PAGE 2: COMMUNE DE CHLEF (Scale Group A)
  // ==========================================
  {
    commune: "Chlef",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(180, 207),
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(160, 184),
        zoneEloignement: createRange(150, 173)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(160, 184),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(140, 161)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(130, 150)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(130, 150),
        zoneEloignement: createRange(120, 138)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(110, 127)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(110, 127),
        zoneEloignement: createRange(100, 115)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(110, 127),
        zonePeripherique: createRange(100, 115),
        zoneEloignement: createRange(90, 104)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(90, 104),
        zoneEloignement: createRange(80, 92)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(540, 621),
        zonePeripherique: createRange(530, 610),
        zoneEloignement: createRange(520, 598)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(520, 598),
        zonePeripherique: createRange(510, 587),
        zoneEloignement: createRange(510, 587)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(450, 518),
        zoneEloignement: createRange(400, 460)
      }
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artere principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(450, 518),
        zonePeripherique: createRange(430, 495),
        zoneEloignement: createRange(420, 483)
      },
      {
        label: "Artere secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(430, 495),
        zonePeripherique: createRange(420, 483),
        zoneEloignement: createRange(410, 472)
      }
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(160, 184),
        zoneEloignement: createRange(150, 173)
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(160, 184),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(140, 161)
      }
    ],
    terrainsNus: [
      {
        label: "Pleine propriété deux (02) façades avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(160, 184),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(140, 161)
      },
      {
        label: "Pleine propriété une (01) façade avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(130, 150)
      },
      {
        label: "Pleine propriété deux (02) façades sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(130, 150),
        zoneEloignement: createRange(120, 138)
      },
      {
        label: "Pleine propriété une (01) façade sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(100, 115)
      },
      {
        label: "Dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(130, 150),
        zoneEloignement: createRange(120, 138)
      },
      {
        label: "Industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(110, 127)
      }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineLocatifs,
    terrainsAgricolesPente: terrainsAgricolesPenteLocatifs
  },

  // ==========================================
  // SHARED SCALE GROUPS MAPPING
  // ==========================================

  // Chettia Group (Pages 4, 6, 7, 15, 33, 34, 35)
  createChettiaGroupLocData("Chettia"),
  createChettiaGroupLocData("Boukadir"),
  createChettiaGroupLocData("Osly"),
  createChettiaGroupLocData("Ofodda"),
  createChettiaGroupLocData("Tenes"),
  createChettiaGroupLocData("Beni Haoua"),
  createChettiaGroupLocData("Oued Goussine"),

  // Ain Merane Group (Pages 10, 16, 17, 18, 22, 27)
  createAinMeraneGroupLocData("Ain Merane"),
  createAinMeraneGroupLocData("Oum Drou"),
  createAinMeraneGroupLocData("Ouled Abess"),
  createAinMeraneGroupLocData("Karimia"),
  createAinMeraneGroupLocData("Ouled Fares"),
  createAinMeraneGroupLocData("Sidi Akkacha"),

  // Medjadja Group (Pages 5, 12, 19, 20, 23, 24, 29, 31)
  createMedjadjaGroupLocData("Medjadja"),
  createMedjadjaGroupLocData("Taougrite"),
  createMedjadjaGroupLocData("Harchoune"),
  createMedjadjaGroupLocData("Beni Rached"),
  createMedjadjaGroupLocData("Zeboudja"),
  createMedjadjaGroupLocData("Bouzghaia"),
  createMedjadjaGroupLocData("Sidi Abderahmane"),
  createMedjadjaGroupLocData("Abou El Hassen"),

  // Sendjas Group (Pages 3, 8, 9, 11, 13, 14, 21, 25, 26, 28, 30, 32, 36)
  createSendjasGroupLocData("Sendjas"),
  createSendjasGroupLocData("Oben Aek"),
  createSendjasGroupLocData("Hadjadj"),
  createSendjasGroupLocData("Sobha"),
  createSendjasGroupLocData("Dahra"),
  createSendjasGroupLocData("Haranfa"),
  createSendjasGroupLocData("Beni Bouateb"),
  createSendjasGroupLocData("Benairia"),
  createSendjasGroupLocData("Tadjena"),
  createSendjasGroupLocData("El Marsa"),
  createSendjasGroupLocData("Talassa"),
  createSendjasGroupLocData("Moussadak"),
  createSendjasGroupLocData("Bereira")
];