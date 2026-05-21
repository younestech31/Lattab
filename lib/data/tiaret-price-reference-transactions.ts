import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Wilaya Standards for Tiaret)
// ============================================================================
const agPlaineTiaret = [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(2040000, 2400000), zoneEloignement: createRange(1734000, 2040000) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(1734000, 2040000), zoneEloignement: createRange(1473900, 1734000) },
  { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(1470500, 1730000), zoneEloignement: createRange(1252815, 1473900) }
];

const agPenteTiaret = [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(1249500, 1470000), zoneEloignement: createRange(1064893, 1252815) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(1062500, 1250000), zoneEloignement: createRange(905159, 1064893) },
  { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(901000, 1060000), zoneEloignement: createRange(769385, 905159) }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/** 
 * Tier 2: Secondary Urban Hubs (Pages 3-7)
 * Communes: Sougueur, Mahdia, Rahouia, Frenda, Dahmouni
 */
const createSougueurTier = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(60350, 71000), centreVille: createRange(51298, 60350), zonePeripherique: createRange(43603, 51298), zoneEloignement: createRange(37063, 43603) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(51298, 60350), centreVille: createRange(43603, 51298), zonePeripherique: createRange(37063, 43603), zoneEloignement: createRange(31503, 37063) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(54449, 64058), centreVille: createRange(46282, 54449), zonePeripherique: createRange(39340, 46282), zoneEloignement: createRange(33439, 39340) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(113085, 133041), centreVille: createRange(96122, 113085), zonePeripherique: createRange(81704, 96122), zoneEloignement: createRange(69448, 81704) }
  ],
  hangars: [
    { label: "Zone urbaine", unit: "DA/m²", zoneResidentielle: createRange(72679, 85505), centreVille: createRange(61777, 72679), zonePeripherique: createRange(52510, 61777), zoneEloignement: createRange(44634, 52510) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(40766, 47960), centreVille: createRange(34651, 40766), zonePeripherique: createRange(29453, 34651), zoneEloignement: createRange(25035, 29453) }
  ],
  terrainsAgricolesPlaine: agPlaineTiaret,
  terrainsAgricolesPente: agPenteTiaret
});

/** 
 * Tier 3: Medium Hubs (Pages 8-15)
 * Communes: Ain Deheb, Meghila, Medroussa, Ain Kermes, Oued Lilli, Hammadia, Ksar Chellala, Mechraa Safaa
 */
const createAinDehebTier = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(46169, 54317), centreVille: createRange(39244, 46169), zonePeripherique: createRange(33357, 39244), zoneEloignement: createRange(28353, 33357) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(39244, 46169), centreVille: createRange(33357, 39244), zonePeripherique: createRange(28354, 33357), zoneEloignement: createRange(24100, 28353) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(41654, 49005), centreVille: createRange(35406, 41654), zonePeripherique: createRange(30095, 35406), zoneEloignement: createRange(25581, 30095) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(86510, 101777), centreVille: createRange(73534, 86510), zonePeripherique: createRange(62504, 73534), zoneEloignement: createRange(53128, 62504) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(29769, 35022), centreVille: createRange(25304, 29769), zonePeripherique: createRange(21508, 25304), zoneEloignement: createRange(18282, 21508) }
  ],
  terrainsAgricolesPlaine: agPlaineTiaret,
  terrainsAgricolesPente: agPenteTiaret
});

/** 
 * Tier 4: Rural / Minor Communes (Pages 16-43)
 * Note: These values are 1% higher than Tier 3 in the Center/Peripheral logic.
 * Communes: Chehaima, Naima, Djebilet Rosfa, Madna, Medrissa, Sidi Abderrahmane, 
 * Ain Bouchakif, Ain El-hadid, Takhemaret, Bougara, Rechaiga, Serghine, 
 * Zmalet Emir Abdelkader, Ain Dzarit, Nadhoura, Sebaine, Djillali Ben Ammar, 
 * Tagdempt, Mellakou, Sidi Bakheti, Sebt, Sidi Hosni, Sidi Ali Mellal, 
 * Tidda, Guertoufa, Faidja, Si Abdelghani, Tousnina
 */
const createChehaimaTier = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(43605, 51300), centreVille: createRange(39641, 46636), zonePeripherique: createRange(33695, 39641), zoneEloignement: createRange(28641, 33695) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(37064, 43605), centreVille: createRange(33695, 39641), zonePeripherique: createRange(28641, 33695), zoneEloignement: createRange(24345, 28641) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(39339, 46281), centreVille: createRange(35763, 42074), zonePeripherique: createRange(30399, 35763), zoneEloignement: createRange(25839, 30399) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(79070, 93023), centreVille: createRange(71881, 84566), zonePeripherique: createRange(61099, 71881), zoneEloignement: createRange(51934, 61099) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(26508, 31186), centreVille: createRange(22532, 26508), zonePeripherique: createRange(19152, 22532), zoneEloignement: createRange(16279, 19152) }
  ],
  terrainsAgricolesPlaine: agPlaineTiaret,
  terrainsAgricolesPente: agPenteTiaret
});

// ============================================================================
// MAIN DATA EXPORT
// ============================================================================

export const tiaretPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. TIARET CITY (Capital - Page 2)
  {
    commune: "Tiaret",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(86700, 102000), centreVille: createRange(78894, 92817), zonePeripherique: createRange(67060, 78894), zoneEloignement: createRange(57001, 67060) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(73695, 86700), centreVille: createRange(67060, 78894), zonePeripherique: createRange(57001, 67060), zoneEloignement: createRange(48451, 57001) },
      { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(62641, 73695), centreVille: createRange(57001, 67060), zonePeripherique: createRange(48451, 57001), zoneEloignement: createRange(41183, 48451) },
      { label: "Précaire", unit: "DA/m²", zoneResidentielle: createRange(53245, 62641), centreVille: createRange(48451, 57001), zonePeripherique: createRange(41183, 48451), zoneEloignement: createRange(35006, 41183) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(74735, 87923), centreVille: createRange(67941, 79930), zonePeripherique: createRange(57750, 67941), zoneEloignement: createRange(49088, 57750) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(168300, 198000), centreVille: createRange(153000, 180000), zonePeripherique: createRange(130050, 153000), zoneEloignement: createRange(110543, 130050) }
    ],
    hangars: [
      { label: "Zone urbaine", unit: "DA/m²", zoneResidentielle: createRange(110962, 130543), centreVille: createRange(94318, 110962), zonePeripherique: createRange(80170, 94318), zoneEloignement: createRange(80170, 94318) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(52756, 62066), centreVille: createRange(44843, 52756), zonePeripherique: createRange(38117, 44843), zoneEloignement: createRange(32399, 38117) }
    ],
    terrainsAgricolesPlaine: agPlaineTiaret,
    terrainsAgricolesPente: agPenteTiaret
  },

  // Tier 2: Sougueur Group
  ...["Sougueur", "Mahdia", "Rahouia", "Frenda", "Dahmouni"].map(name => createSougueurTier(name)),

  // Tier 3: Ain Deheb Group
  ...["Ain Deheb", "Meghila", "Medroussa", "Ain Kermes", "Oued Lilli", "Hammadia", "Ksar Chellala", "Mechraa Safaa"].map(name => createAinDehebTier(name)),

  // Tier 4: Rural Group
  ...["Chehaima", "Naima", "Djebilet Rosfa", "Madna", "Medrissa", "Sidi Abderrahmane", "Ain Bouchakif", "Ain El-hadid", "Takhemaret", "Bougara", "Rechaiga", "Serghine", "Zmalet Emir Abdelkader", "Ain Dzarit", "Nadhoura", "Sebaine", "Djillali Ben Ammar", "Tagdempt", "Mellakou", "Sidi Bakheti", "Sebt", "Sidi Hosni", "Sidi Ali Mellal", "Tidda", "Guertoufa", "Faidja", "Si Abdelghani", "Tousnina"].map(name => createChehaimaTier(name))
];