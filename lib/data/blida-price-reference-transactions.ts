import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Wilaya Standards)
// ============================================================================

const agStandardBlida = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(45000000, 51750000), zoneEloignement: createRange(40000000, 46000000) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(40000000, 46000000), zoneEloignement: createRange(35000000, 40250000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(35000000, 40250000), zoneEloignement: createRange(30000000, 34500000) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(35000000, 40250000), zoneEloignement: createRange(25000000, 28750000) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(25000000, 28750000), zoneEloignement: createRange(20000000, 23000000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(15000000, 17250000), zoneEloignement: createRange(12000000, 13800000) }
  ]
};

// ============================================================================
// TIERS / TEMPLATES
// ============================================================================

/**
 * Tier 2 Template: Major Urban Hubs (Pages 3-10)
 * Communes: Ouled Yaich, Boufarik, El Affroun, Bougara, Mouzaia, Oued El Alleug, Larbaa, Meftah
 */
const createMidTierScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(150000, 177500), centreVille: createRange(145000, 166750), zonePeripherique: createRange(110000, 126500), zoneEloignement: createRange(80000, 92000) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(120000, 138000), zonePeripherique: createRange(100000, 115000), zoneEloignement: createRange(70000, 80500) },
    { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(100000, 115000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(80000, 92000), zoneEloignement: createRange(55000, 63250) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(125000, 143750), zonePeripherique: createRange(95000, 109250), zoneEloignement: createRange(60000, 69000) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(270000, 310500), centreVille: createRange(275000, 316250), zonePeripherique: createRange(195000, 224250), zoneEloignement: createRange(160000, 189750) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(130000, 149750), centreVille: createRange(130000, 149750), zonePeripherique: createRange(120000, 138000), zoneEloignement: createRange(75000, 86250) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(105000, 120750), centreVille: createRange(95000, 109250), zonePeripherique: createRange(70000, 80500), zoneEloignement: createRange(22000, 25300) }
  ],
  terrainsAgricolesPlaine: agStandardBlida.plaine,
  terrainsAgricolesPente: agStandardBlida.pente
});

/**
 * Tier 3 Template: Growing Urban/Semi-Rural (Pages 11-17)
 * Communes: Bouinan, Chebli, Beni Tamou, Chiffa, Soumaa, Beni Mered, Guerrouaou
 */
const createSemiRuralScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(120000, 138000), zonePeripherique: createRange(120000, 138000), zoneEloignement: createRange(85000, 97750) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(120000, 138000), centreVille: createRange(110000, 126500), zonePeripherique: createRange(100000, 115000), zoneEloignement: createRange(75000, 86250) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(105000, 120750), zonePeripherique: createRange(95000, 109250), zoneEloignement: createRange(65000, 74750) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(150000, 172500), zonePeripherique: createRange(115000, 132250), zoneEloignement: createRange(65000, 74750) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(75000, 86250) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(85000, 97750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(65000, 74750), zoneEloignement: createRange(15000, 17250) }
  ],
  terrainsAgricolesPlaine: agStandardBlida.plaine,
  terrainsAgricolesPente: agStandardBlida.pente
});

/**
 * Tier 4 Template: Rural & Mountainous (Pages 19-26)
 * Communes: Ouled Slama, Ain Romana, Oued Djer, Bouarfa, Hammam Melouane, Souhane, Djebabra, Chrea
 */
const createRuralScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(85000, 97750), zonePeripherique: createRange(80000, 92000), zoneEloignement: createRange(70000, 80500) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(85000, 97750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(70000, 80500), zoneEloignement: createRange(60000, 69000) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(65000, 74750), zoneEloignement: createRange(45000, 51750) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(105000, 120750), centreVille: createRange(110000, 126500), zonePeripherique: createRange(80000, 92000), zoneEloignement: createRange(50000, 57500) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(80000, 92000), zonePeripherique: createRange(75000, 86250), zoneEloignement: createRange(60000, 69000) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(10000, 13000) }
  ],
  terrainsAgricolesPlaine: (name === "OUED DJER" || name === "BOUARFA") ? [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(30000000, 34800000), zoneEloignement: createRange(28000000, 32200000) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(28000000, 32200000), zoneEloignement: createRange(26000000, 29900000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(25000000, 28750000), zoneEloignement: createRange(24000000, 27600000) }
  ] : agStandardBlida.plaine,
  terrainsAgricolesPente: agStandardBlida.pente
});

// ============================================================================
// DATA EXPORT
// ============================================================================

export const blidaPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. BLIDA CITY (Page 2)
  {
    commune: "BLIDA",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(170000, 195000), centreVille: createRange(160000, 184000), zonePeripherique: createRange(140000, 161000), zoneEloignement: createRange(90000, 109250) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(150000, 172500), zonePeripherique: createRange(130000, 149500), zoneEloignement: createRange(80000, 97750) },
      { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(120000, 138000), zonePeripherique: createRange(100000, 115000), zoneEloignement: createRange(70000, 86250) },
      { label: "Précaire", unit: "DA/m²", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(65000, 74750), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(40000, 51750) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(130000, 149500), zonePeripherique: createRange(120000, 138000), zoneEloignement: createRange(70000, 86250) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(280000, 322000), centreVille: createRange(285000, 327750), zonePeripherique: createRange(220000, 253000), zoneEloignement: createRange(150000, 172500) }
    ],
    hangars: [
      { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(140000, 161000), zonePeripherique: createRange(110000, 126500), zoneEloignement: createRange(80000, 92000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(120000, 138000), centreVille: createRange(115000, 132250), zonePeripherique: createRange(75000, 86250), zoneEloignement: createRange(25000, 28750) }
    ],
    terrainsAgricolesPlaine: agStandardBlida.plaine,
    terrainsAgricolesPente: agStandardBlida.pente
  },

  // TIER 2: Major Towns
  ...["OULED YAICH", "BOUFARIK", "EL AFFROUN", "BOUGARA", "MOUZAIA", "OUED EL ALLEUG", "LARBAA", "MEFTAH"].map(name => createMidTierScale(name)),

  // TIER 3: Developing Urban
  ...["BOUINAN", "CHEBLI", "BENI TAMOU", "CHIFFA", "SOUMAA", "BENI MERED", "GUERROUAOU"].map(name => createSemiRuralScale(name)),

  // TIER 4: Benkhellil (Page 18 - Special minor values)
  {
    commune: "BENKHELLIL",
    individuels: [{ label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(65000, 74750) }],
    collectifsSemiCollectifs: [], locauxCommerciaux: [], hangars: [], terrainsNus: [],
    terrainsAgricolesPlaine: agStandardBlida.plaine, terrainsAgricolesPente: agStandardBlida.pente
  },

  // TIER 5: Rural / Mountainous
  ...["OULED SLAMA", "AIN ROMANA", "OUED DJER", "BOUARFA", "HAMMAM MELOUANE", "SOUHANE", "DJEBABRA", "CHREA"].map(name => createRuralScale(name))
];