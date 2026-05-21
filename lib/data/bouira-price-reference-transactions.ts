import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED STANDARD SCALES (COMMON FOR ALL COMMUNES IN BOUIRA)
// ============================================================================
const terrainsAgricolesPlaineBouira = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha",
    zoneEloignement: createRange(5530000, 6359500)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha",
    zoneEloignement: createRange(3550000, 4082500)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha",
    zoneEloignement: createRange(2400000, 2760000)
  }
];

const terrainsAgricolesPenteBouira = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha",
    zoneEloignement: createRange(4400000, 5060000)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha",
    zoneEloignement: createRange(2925000, 3363750)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha",
    zoneEloignement: createRange(1950000, 2242500)
  }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Group A: Kadiria, Bachloul, Sour El Ghozlane, M'chedellah, Chorfa, Haizer
 * Pages: 4, 5, 6, 8, 10, 11
 */
const createGroupAScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(69200, 79580), centreVille: createRange(54200, 62330), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(40000, 46000) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(51000, 58650), centreVille: createRange(36000, 41400), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(24200, 27830) },
    { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(45200, 51980), centreVille: createRange(30200, 34730), zonePeripherique: createRange(25100, 28865), zoneEloignement: createRange(19000, 21850) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(47000, 54050), zonePeripherique: createRange(35000, 40250), zoneEloignement: createRange(25000, 28750) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(55100, 63365), zonePeripherique: createRange(38200, 43930), zoneEloignement: createRange(24000, 27600) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(51000, 58650), centreVille: createRange(36000, 41400), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(10000, 11500) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
  terrainsAgricolesPente: terrainsAgricolesPenteBouira
});

/**
 * Group B: El Hachimia, Bir Ghbalou, El Asnam, Souk El Khemis, Taghzout, Ain El Hadjar, Ain Laloui, Aomar, El Adjiba
 * Pages: 9, 12, 13, 14, 15, 16, 17, 18, 21
 */
const createGroupBScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(41000, 47150), zonePeripherique: createRange(33000, 37950), zoneEloignement: createRange(27000, 31050) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(40000, 46000), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(26000, 29900) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(42000, 48300), zonePeripherique: createRange(23700, 27255), zoneEloignement: createRange(14600, 16790) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", centreVille: createRange(30400, 34960), zonePeripherique: createRange(17400, 20010), zoneEloignement: createRange(9800, 11270) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
  terrainsAgricolesPente: terrainsAgricolesPenteBouira
});

/**
 * Group C: Djebahia, Bordj Oukhris, Dirah, Oued El Berdi, Raouraoua, Ahl El Ksar, El Khebouzia, Ain Turk, Ait Laziz, Hanif, Ath Mansour, Aghbalou
 * Pages: 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
 */
const createGroupCScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(37000, 42500), zonePeripherique: createRange(29000, 33350), zoneEloignement: createRange(23000, 26450) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", centreVille: createRange(26400, 30360), zonePeripherique: createRange(13400, 15410), zoneEloignement: createRange(9700, 11155) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
  terrainsAgricolesPente: terrainsAgricolesPenteBouira
});

/**
 * Group D (Rural): Ouled Rached, Boukram, Bouderbala, Guerouma, Zebarbar, Maala, Mezdour, Taguedit, Hadjera Zerga, El Hakimia, Dechmia, Ridane, Maamora, Saharidj, El Mokrani
 * Pages: 32 to 46
 */
const createRuralGroupScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(34000, 39100), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", centreVille: createRange(18261, 21000), zonePeripherique: createRange(10400, 11960), zoneEloignement: createRange(6700, 7705) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
  terrainsAgricolesPente: terrainsAgricolesPenteBouira
});


// ============================================================================
// MAIN DATA EXPORT
// ============================================================================

export const bouiraPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. BOUIRA CITY (Page 2)
  {
    commune: "Bouira",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(120750, 138800), centreVille: createRange(97750, 112412), zonePeripherique: createRange(65200, 74980), zoneEloignement: createRange(56500, 64975) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(81900, 94185), centreVille: createRange(61900, 71185), zonePeripherique: createRange(59100, 67965), zoneEloignement: createRange(48200, 55430) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", centreVille: createRange(90735, 104345), zonePeripherique: createRange(61000, 70150), zoneEloignement: createRange(47000, 54050) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(98900, 113735), zonePeripherique: createRange(74700, 85905), zoneEloignement: createRange(60000, 69000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(97600, 112240), centreVille: createRange(82600, 94990), zonePeripherique: createRange(39130, 45000), zoneEloignement: createRange(21739, 25000) }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
    terrainsAgricolesPente: terrainsAgricolesPenteBouira
  },

  // 2. LAKHDARIA (Page 3)
  {
    commune: "Lakhdaria",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(74200, 85330), centreVille: createRange(65217, 75000), zonePeripherique: createRange(60870, 70000), zoneEloignement: createRange(47826, 55000) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", centreVille: createRange(60870, 70000), zonePeripherique: createRange(56521, 65000), zoneEloignement: createRange(43478, 50000) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(77391, 89000), zonePeripherique: createRange(67826, 78000), zoneEloignement: createRange(59130, 68000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(56000, 64400), centreVille: createRange(44348, 51000), zonePeripherique: createRange(34783, 40000), zoneEloignement: createRange(15652, 18000) }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
    terrainsAgricolesPente: terrainsAgricolesPenteBouira
  },

  // 3. AIN BESSAM (Page 7 - Inherits Lakhdaria grid values manually per PDF)
  {
    commune: "Ain Bessam",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(74200, 85330), centreVille: createRange(65217, 75000), zonePeripherique: createRange(60870, 70000), zoneEloignement: createRange(47826, 55000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(56000, 64400), centreVille: createRange(44348, 51000), zonePeripherique: createRange(34783, 40000), zoneEloignement: createRange(15652, 18000) }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBouira,
    terrainsAgricolesPente: terrainsAgricolesPenteBouira
  },

  // Apply Scale Groups
  ...["Kadiria", "Bachloul", "Sour El Ghozlane", "M'chedellah", "Chorfa", "Haizer"].map(name => createGroupAScale(name)),
  ...["El Hachimia", "Bir Ghbalou", "El Asnam", "Souk El Khemis", "Taghzout", "Ain El Hadjar", "Ain Laloui", "Aomar", "El Adjiba"].map(name => createGroupBScale(name)),
  ...["Djebahia", "Bordj Oukhris", "Dirah", "Oued El Berdi", "Raouraoua", "Ahl El Ksar", "El Khebouzia", "Ain Turk", "Ait Laziz", "Hanif", "Ath Mansour", "Aghbalou"].map(name => createGroupCScale(name)),
  ...["Ouled Rached", "Boukram", "Bouderbala", "Guerouma", "Zebarbar", "Maala", "Mezdour", "Taguedit", "Hadjera Zerga", "El Hakimia", "Dechmia", "Ridane", "Maamora", "Saharidj", "El Mokrani"].map(name => createRuralGroupScale(name))
];