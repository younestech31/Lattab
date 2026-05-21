import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (RENTAL - DA/Ha/Month)
// ============================================================================

const agStandardBlidaRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(25500, 29325), zoneEloignement: createRange(25000, 28750) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(25200, 28980), zoneEloignement: createRange(24900, 28635) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(24600, 28290) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(24200, 27830), zoneEloignement: createRange(23600, 27140) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(23800, 27370), zoneEloignement: createRange(23400, 26910) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(22700, 26105), zoneEloignement: createRange(22000, 25300) }
  ]
};

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Tier 2: Urban Hubs (Pages 3-10)
 * Communes: Ouled Yaiche, Boufarik, El Affroun, Mouzaia, Larbaa, Bougara, Meftah, Oued El Alleug
 */
const createBlidaUrbanTierRent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(340, 391), centreVille: createRange(335, 385), zonePeripherique: createRange(330, 379), zoneEloignement: createRange(305, 350) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(335, 385), centreVille: createRange(330, 379), zonePeripherique: createRange(320, 368), zoneEloignement: createRange(300, 345) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(325, 374), centreVille: createRange(325, 374), zonePeripherique: createRange(310, 356), zoneEloignement: createRange(295, 339) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(315, 362), centreVille: createRange(310, 356), zonePeripherique: createRange(290, 333), zoneEloignement: createRange(265, 305) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(1300, 1495), centreVille: createRange(1250, 1437), zonePeripherique: createRange(1150, 1322), zoneEloignement: createRange(1005, 1155) }
  ],
  hangars: [
    { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(555, 638), centreVille: createRange(555, 638), zonePeripherique: createRange(535, 625), zoneEloignement: createRange(480, 552) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(180, 207), centreVille: createRange(175, 201), zonePeripherique: createRange(175, 201), zoneEloignement: createRange(175, 201) }
  ],
  terrainsAgricolesPlaine: agStandardBlidaRent.plaine,
  terrainsAgricolesPente: agStandardBlidaRent.pente
});

/**
 * Tier 3: Secondary/Tourism Hubs (Pages 11-24)
 * Communes: Bouinan, Chebli, Beni Mered, Soumaa, Chiffa, Beni Tamou, Guerrouaou, 
 * Ouled Slama, Benkhellil, Ain Romana, Ouadjer, Chrea, Bou Arfa, Hammam Melouane
 */
const createBlidaSecondaryTierRent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(335, 385), centreVille: createRange(330, 379), zonePeripherique: createRange(320, 368), zoneEloignement: createRange(300, 345) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(330, 379), centreVille: createRange(325, 373), zonePeripherique: createRange(315, 362), zoneEloignement: createRange(295, 339) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(290, 333), centreVille: createRange(290, 333), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(250, 287) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(1090, 1253), centreVille: createRange(1090, 1253), zonePeripherique: createRange(1085, 1247), zoneEloignement: createRange(990, 1138) }
  ],
  hangars: [
    { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(545, 626), centreVille: createRange(545, 626), zonePeripherique: createRange(535, 615), zoneEloignement: createRange(480, 552) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(175, 201), centreVille: createRange(175, 199), zonePeripherique: createRange(170, 195), zoneEloignement: createRange(165, 189) }
  ],
  terrainsAgricolesPlaine: agStandardBlidaRent.plaine,
  terrainsAgricolesPente: agStandardBlidaRent.pente
});

// ============================================================================
// EXPORTED DATA
// ============================================================================

export const blidaRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. BLIDA CITY (Page 2)
  {
    commune: "BLIDA",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(345, 397), centreVille: createRange(343, 394), zonePeripherique: createRange(340, 391), zoneEloignement: createRange(310, 356) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(340, 391), centreVille: createRange(340, 391), zonePeripherique: createRange(330, 379), zoneEloignement: createRange(305, 350) },
      { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(330, 379), centreVille: createRange(325, 374), zonePeripherique: createRange(320, 368), zoneEloignement: createRange(300, 345) },
      { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 345), centreVille: createRange(310, 356), zonePeripherique: createRange(295, 339), zoneEloignement: createRange(280, 322) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(330, 379), centreVille: createRange(315, 362), zonePeripherique: createRange(320, 368), zoneEloignement: createRange(275, 316) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(1400, 1610), centreVille: createRange(1300, 1495), zonePeripherique: createRange(1105, 1270), zoneEloignement: createRange(1010, 1161) }
    ],
    hangars: [
      { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(560, 644), centreVille: createRange(560, 644), zonePeripherique: createRange(540, 621), zoneEloignement: createRange(490, 563) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(185, 213), centreVille: createRange(184, 212), zonePeripherique: createRange(185, 213), zoneEloignement: createRange(190, 218) }
    ],
    terrainsAgricolesPlaine: agStandardBlidaRent.plaine,
    terrainsAgricolesPente: agStandardBlidaRent.pente
  },

  // TIER 2: Urban Centers
  ...["OULED YAICHE", "BOUFARIK", "EL AFFROUN", "MOUZAIA", "LARBAA", "BOUGARA", "MEFTAH", "OUED EL ALLEUG"].map(name => createBlidaUrbanTierRent(name)),

  // TIER 3: Secondary Centers
  ...["BOUINAN", "CHEBLI", "BENI MERED", "SOUMAA", "CHIFFA", "BENI TAMOU", "GUERROUAOU", "OULED SLAMA", "BENKHELLIL", "AIN ROMANA", "OUADJER", "CHREA", "BOU ARFA", "HAMMAM MELOUANE"].map(name => createBlidaSecondaryTierRent(name)),

  // TIER 4: Rural Lower Scale (Djebabra & Souhane - Pages 25-26)
  ...["DJEBABRA", "SOUHANE"].map(name => ({
    commune: name,
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(325, 373), centreVille: createRange(320, 368), zonePeripherique: createRange(310, 356), zoneEloignement: createRange(290, 333) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(280, 322), centreVille: createRange(280, 322), zonePeripherique: createRange(260, 299), zoneEloignement: createRange(240, 276) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(1080, 1242), centreVille: createRange(1080, 1242), zonePeripherique: createRange(1075, 1230), zoneEloignement: createRange(980, 1127) }
    ],
    hangars: [
      { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(535, 615), centreVille: createRange(535, 615), zonePeripherique: createRange(525, 603), zoneEloignement: createRange(470, 540) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(165, 189), centreVille: createRange(163, 187), zonePeripherique: createRange(160, 184), zoneEloignement: createRange(155, 178) }
    ],
    terrainsAgricolesPlaine: agStandardBlidaRent.plaine,
    terrainsAgricolesPente: agStandardBlidaRent.pente
  }))
];