import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Distinct for each Tier in Bechar)
// ============================================================================

const agScaleBecharCity = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(1100000, 1265000), zoneEloignement: createRange(984000, 1131600) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(760000, 874000), zoneEloignement: createRange(656000, 754400) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(666000, 765900), zoneEloignement: createRange(410000, 471500) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(630000, 724500), zoneEloignement: createRange(560700, 644805) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(530000, 609500), zoneEloignement: createRange(471700, 542455) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(380000, 437000), zoneEloignement: createRange(338200, 388930) }
  ]
};

const agScaleAbadlaTier = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(738000, 848700), zoneEloignement: createRange(574000, 660100) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(492000, 565800), zoneEloignement: createRange(410000, 471500) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(328000, 377200), zoneEloignement: createRange(246000, 282900) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(287000, 330050), zoneEloignement: createRange(262400, 301760) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(254200, 292330), zoneEloignement: createRange(229600, 264040) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(246000, 282900), zoneEloignement: createRange(213200, 245180) }
  ]
};

const agScaleMeridjaTier = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(544000, 740600), zoneEloignement: createRange(492000, 565800) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(410000, 471500), zoneEloignement: createRange(328000, 377200) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(287000, 330050), zoneEloignement: createRange(246000, 282900) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(328000, 377200), zoneEloignement: createRange(287000, 330050) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(246000, 282900), zoneEloignement: createRange(229600, 264040) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(264040, 303646), zoneEloignement: createRange(213200, 245180) }
  ]
};

// ============================================================================
// TIERS / TEMPLATES
// ============================================================================

// Tier 2: Abadla, Beni Ounif, Kenadsa, Taghit, Lahmar (Pages 3-7)
const createAbadlaTier = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(13985, 16082), centreVille: createRange(13985, 16082), zonePeripherique: createRange(10400, 11960), zoneEloignement: createRange(9763, 11227) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(10996, 12645), centreVille: createRange(10996, 12645), zonePeripherique: createRange(8100, 9315), zoneEloignement: createRange(7150, 8223) },
    { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(10584, 12172), centreVille: createRange(10584, 12172), zonePeripherique: createRange(7484, 8606), zoneEloignement: createRange(5980, 6877) },
    { label: "Précaire", unit: "DA/m²", zoneResidentielle: createRange(5180, 5957), centreVille: createRange(5180, 5957), zonePeripherique: createRange(3780, 4347), zoneEloignement: createRange(3000, 3450) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(9800, 11270), centreVille: createRange(9800, 11270), zonePeripherique: createRange(8100, 9315), zoneEloignement: createRange(6500, 7475) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(25990, 29887), centreVille: createRange(25990, 29887), zonePeripherique: createRange(18252, 20990), zoneEloignement: createRange(name === "Beni Ounif" ? 1690 : 16905, 19440) }
  ],
  hangars: [
    { label: "Urbaine", unit: "DA/m²", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(14000, 16100), zonePeripherique: createRange(4725, 5434), zoneEloignement: createRange(4160, 4784) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(1361, 1564), centreVille: createRange(1361, 1564), zonePeripherique: createRange(1215, 1397), zoneEloignement: createRange(1105, 1270) }
  ],
  terrainsAgricolesPlaine: agScaleAbadlaTier.plaine,
  terrainsAgricolesPente: agScaleAbadlaTier.pente
});

// Tier 3: Meridja, Mogheul, Boukaïs, Erg Ferradj, Mechraa Houari (Pages 8-12)
const createMeridjaTier = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(5537, 6367), centreVille: createRange(5537, 6367), zonePeripherique: createRange(5187, 5965), zoneEloignement: createRange(4940, 5681) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(5221, 6003), centreVille: createRange(5221, 6003), zonePeripherique: createRange(4271, 4911), zoneEloignement: createRange(3965, 4559) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(7000, 8050), zonePeripherique: createRange(3173, 3648), zoneEloignement: createRange(2990, 3439) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(17136, 19740), centreVille: createRange(17136, 19740), zonePeripherique: createRange(12285, 14128), zoneEloignement: createRange(11700, 13455) }
  ],
  hangars: [
    { label: "Urbaine", unit: "DA/m²", zoneResidentielle: createRange(10500, 12075), centreVille: createRange(10500, 12075), zonePeripherique: createRange(8100, 9315), zoneEloignement: createRange(7670, 8821) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(629, 724), centreVille: createRange(629, 724), zonePeripherique: createRange(621, 714), zoneEloignement: createRange(559, 644) }
  ],
  terrainsAgricolesPlaine: agScaleMeridjaTier.plaine,
  terrainsAgricolesPente: agScaleMeridjaTier.pente
});

// ============================================================================
// EXPORTED DATA
// ============================================================================

export const becharPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. BECHAR CITY (Main Hub - Page 2)
  {
    commune: "BECHAR",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(77700, 89355), centreVille: createRange(77700, 89355), zonePeripherique: createRange(38232, 43967), zoneEloignement: createRange(16224, 18658) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(63980, 73577), centreVille: createRange(63980, 73577), zonePeripherique: createRange(21657, 24905), zoneEloignement: createRange(13520, 15548) },
      { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(57400, 66010), centreVille: createRange(57400, 66010), zonePeripherique: createRange(19197, 22077), zoneEloignement: createRange(12168, 13993) },
      { label: "Précaire", unit: "DA/m²", zoneResidentielle: createRange(32501, 37376), centreVille: createRange(32501, 37376), zonePeripherique: createRange(16065, 18475), zoneEloignement: createRange(11830, 13605) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(42000, 48300), zonePeripherique: createRange(36450, 41918), zoneEloignement: createRange(32500, 37375) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(37800, 43470), centreVille: createRange(37800, 43470), zonePeripherique: createRange(16014, 18415), zoneEloignement: createRange(8788, 10106) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(100400, 115459), centreVille: createRange(100400, 115459), zonePeripherique: createRange(38232, 43967), zoneEloignement: createRange(21294, 24488) }
    ],
    hangars: [
      { label: "Urbaine", unit: "DA/m²", zoneResidentielle: createRange(15400, 17710), centreVille: createRange(15400, 17710), zonePeripherique: createRange(6480, 7452), zoneEloignement: createRange(5200, 5980) },
      { label: "Rurale", unit: "DA/m²", zoneResidentielle: createRange(12600, 14490), centreVille: createRange(12600, 14490), zonePeripherique: createRange(6210, 7142), zoneEloignement: createRange(4940, 5681) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(8288, 9531), centreVille: createRange(8288, 9531), zonePeripherique: createRange(4590, 5279), zoneEloignement: createRange(1300, 40495) }
    ],
    terrainsAgricolesPlaine: agScaleBecharCity.plaine,
    terrainsAgricolesPente: agScaleBecharCity.pente
  },

  // Tier 2: Abadla Group
  ...["ABADLA", "BENI OUNIF", "KENADSA", "TAGHIT", "LAHMAR"].map(name => createAbadlaTier(name)),

  // Tier 3: Meridja Group
  ...["MERIDJA", "MOGHEUL", "BOUKAÏS", "ERG FERRADJ", "MECHRAA HOUARI BOUMEDIENE"].map(name => createMeridjaTier(name))
];