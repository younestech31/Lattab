import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL RENTAL SCALES (DA/Ha/Mois)
// ============================================================================

// High Scale (Bouira City - Page 2)
const agScaleBouiraCityRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(125000, 143750), zoneEloignement: createRange(120000, 138000) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(95000, 109250), zoneEloignement: createRange(90000, 103500) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(65000, 74750), zoneEloignement: createRange(60000, 69000) }
  ]
};

// Medium Scale (Lakhdaria, Ain Bessam, Sour El Ghozlane - Pages 3, 6, 7, 8)
const agScaleMidTierRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(95000, 109250), zoneEloignement: createRange(90000, 103500) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(55000, 63250), zoneEloignement: createRange(50000, 57500) }
  ]
};

// Standard Scale (Most other communes - Pages 4-5, 9-46)
const agScaleStandardRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(85000, 97750), zoneEloignement: createRange(80000, 92000) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(35000, 40250) }
  ]
};

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Tier 2: Urban Hubs (Kadiria, Bachloul, Chorfa, Haizer, Oued El Berdi)
 * Starting 352-405 DA/m²/Mois
 */
const createBouiraTier2Rent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(352, 405), centreVille: createRange(196, 225), zonePeripherique: createRange(180, 207), zoneEloignement: createRange(157, 180) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(235, 270), centreVille: createRange(180, 207), zonePeripherique: createRange(157, 180), zoneEloignement: createRange(102, 117) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(149, 171), zonePeripherique: createRange(133, 153), zoneEloignement: createRange(125, 144) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", centreVille: createRange(470, 540), zonePeripherique: createRange(438, 504), zoneEloignement: createRange(391, 450) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", centreVille: createRange(102, 117), zonePeripherique: createRange(94, 108), zoneEloignement: createRange(86, 99) }
  ],
  terrainsAgricolesPlaine: agScaleStandardRent.plaine,
  terrainsAgricolesPente: agScaleStandardRent.pente
});

/**
 * Tier 3: Secondary Towns (El Hachimia, Bir Ghbalou, Souk El Khemis, etc.)
 * Starting 313-360 DA/m²/Mois
 */
const createBouiraTier3Rent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(313, 360), zonePeripherique: createRange(174, 200), zoneEloignement: createRange(139, 160) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", centreVille: createRange(417, 480), zonePeripherique: createRange(390, 448), zoneEloignement: createRange(348, 400) }
  ],
  terrainsAgricolesPlaine: agScaleStandardRent.plaine,
  terrainsAgricolesPente: agScaleStandardRent.pente
});

/**
 * Tier 4: Rural/Mountainous (Aghbalou, Ouled Rached, Taguedit, etc.)
 * Starting 274-315 DA/m²/Mois
 */
const createBouiraTier4Rent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(274, 315), centreVille: createRange(152, 175), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(122, 140) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", centreVille: createRange(79, 91), zonePeripherique: createRange(73, 84), zoneEloignement: createRange(67, 77) }
  ],
  terrainsAgricolesPlaine: agScaleStandardRent.plaine,
  terrainsAgricolesPente: agScaleStandardRent.pente
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

export const bouiraRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. BOUIRA CITY (Page 2)
  {
    commune: "Bouira",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(489, 563), centreVille: createRange(272, 313), zonePeripherique: createRange(250, 288), zoneEloignement: createRange(217, 250) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(326, 375), centreVille: createRange(250, 288), zonePeripherique: createRange(217, 250), zoneEloignement: createRange(141, 163) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(207, 238), zonePeripherique: createRange(185, 213), zoneEloignement: createRange(174, 200) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", centreVille: createRange(678, 780), zonePeripherique: createRange(633, 728), zoneEloignement: createRange(565, 650) }
    ],
    hangars: [
      { label: "Zone urbaine", unit: "DA/m²/Mois", centreVille: createRange(249, 286), zonePeripherique: createRange(226, 260) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", centreVille: createRange(147, 169), zonePeripherique: createRange(136, 156), zoneEloignement: createRange(124, 143) }
    ],
    terrainsAgricolesPlaine: agScaleBouiraCityRent.plaine,
    terrainsAgricolesPente: agScaleBouiraCityRent.pente
  },

  // 2. LAKHDARIA (Page 3) & AIN BESSAM (Page 7)
  ...["Lakhdaria", "Ain Bessam"].map(name => ({
    commune: name,
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(391, 450), centreVille: createRange(217, 250), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(174, 200) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(165, 190), zonePeripherique: createRange(148, 170), zoneEloignement: createRange(139, 160) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", centreVille: createRange(522, 600), zonePeripherique: createRange(487, 560), zoneEloignement: createRange(435, 500) }
    ],
    terrainsAgricolesPlaine: agScaleMidTierRent.plaine,
    terrainsAgricolesPente: agScaleMidTierRent.pente
  })),

  // 3. SOUR EL GHOZLANE (Page 6) & M'CHEDELLAH (Page 8)
  ...["Sour El Ghozlane", "M'chedellah"].map(name => ({
    commune: name,
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(391, 450), centreVille: createRange(217, 250), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(174, 200) }
    ],
    terrainsAgricolesPlaine: agScaleMidTierRent.plaine,
    terrainsAgricolesPente: agScaleMidTierRent.pente
  })),

  // TIER 2: Urban Hubs
  ...["Kadiria", "Bachloul", "Chorfa", "Haizer", "Oued El Berdi"].map(name => createBouiraTier2Rent(name)),

  // TIER 3: Secondary Towns
  ...["El Hachimia", "Bir Ghbalou", "El Asnam", "Souk El Khemis", "Taghzout", "Ain El Hadjar", "Ain Laloui", "Aomar", "El Adjiba", "Ouled Yaiche"].map(name => createBouiraTier3Rent(name)),

  // TIER 4: Rural/Mountainous Communes
  ...["Aghbalou", "Ouled Rached", "Boukram", "Bouderbala", "Guerouma", "Zebarbar", "Maala", "Mezdour", "Taguedit", "Hadjera Zerga", "El Hakimia", "Dechmia", "Ridane", "Maamora", "Saharidj", "El Mokrani", "Dirah", "Raouraoua", "Ahl El Ksar", "El Khebouzia", "Ain Turk", "Ait Laziz", "Hanif", "Ath Mansour", "Ouled Yaiche"].map(name => createBouiraTier4Rent(name))
];