import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Group Template for Abalessa, In Amguel, Idelès, Tazrouk
 * (Data from Pages 3, 4, 5, 6 - These communes share identical rental values)
 */
const createSecondaryCommuneRentalScale = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(170, 200),
      centreVille: createRange(145, 170),
      zonePeripherique: createRange(123, 145),
      zoneEloignement: createRange(104, 123)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(145, 170),
      centreVille: createRange(123, 145),
      zonePeripherique: createRange(104, 123),
      zoneEloignement: createRange(89, 104)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(123, 145),
      centreVille: createRange(104, 123),
      zonePeripherique: createRange(89, 104),
      zoneEloignement: createRange(75, 89)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(104, 123),
      centreVille: createRange(89, 104),
      zonePeripherique: createRange(75, 89),
      zoneEloignement: createRange(64, 75)
    }
  ],
  collectifsSemiCollectifs: [
    {
      label: "Standing",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(170, 200),
      centreVille: createRange(145, 170),
      zonePeripherique: createRange(123, 145),
      zoneEloignement: createRange(104, 123)
    },
    {
      label: "Amélioré",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(145, 170),
      centreVille: createRange(123, 145),
      zonePeripherique: createRange(104, 123),
      zoneEloignement: createRange(89, 104)
    },
    {
      label: "Economique",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(123, 145),
      centreVille: createRange(104, 123),
      zonePeripherique: createRange(89, 104),
      zoneEloignement: createRange(75, 89)
    },
    {
      label: "Précaire",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(104, 123),
      centreVille: createRange(89, 104),
      zonePeripherique: createRange(75, 89),
      zoneEloignement: createRange(64, 75)
    }
  ],
  locauxCommerciaux: [
    {
      label: "Artère hautement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(170, 200),
      centreVille: createRange(145, 170),
      zonePeripherique: createRange(123, 145),
      zoneEloignement: createRange(104, 123)
    },
    {
      label: "Artère moyennement commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(145, 170),
      centreVille: createRange(123, 145),
      zonePeripherique: createRange(104, 123),
      zoneEloignement: createRange(89, 104)
    },
    {
      label: "Artère peu commerciale",
      unit: "DA/m²/Mois",
      zoneResidentielle: createRange(123, 145),
      centreVille: createRange(104, 123),
      zonePeripherique: createRange(89, 104),
      zoneEloignement: createRange(75, 89)
    }
  ],
  terrainsNus: [], // No rental values provided in the tables for these communes
  terrainsAgricolesPlaine: [],
  terrainsAgricolesPente: []
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

export const tamenghassetRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. TAMENGHASSET CITY (Page 2)
  {
    commune: "Tamenghasset",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(306, 360),
        centreVille: createRange(260, 306),
        zonePeripherique: createRange(221, 260),
        zoneEloignement: createRange(188, 221)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 306),
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(188, 221),
        zoneEloignement: createRange(160, 188)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(221, 260),
        centreVille: createRange(188, 221),
        zonePeripherique: createRange(160, 188),
        zoneEloignement: createRange(136, 160)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(188, 221),
        centreVille: createRange(160, 188),
        zonePeripherique: createRange(136, 160),
        zoneEloignement: createRange(115, 136)
      }
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 306),
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(188, 221),
        zoneEloignement: createRange(160, 188)
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(221, 260),
        centreVille: createRange(188, 221),
        zonePeripherique: createRange(160, 188),
        zoneEloignement: createRange(136, 160)
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(188, 221),
        centreVille: createRange(160, 188),
        zonePeripherique: createRange(136, 160),
        zoneEloignement: createRange(115, 136)
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 188),
        centreVille: createRange(136, 160),
        zonePeripherique: createRange(115, 136),
        zoneEloignement: createRange(98, 115)
      }
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(340, 400),
        centreVille: createRange(289, 340),
        zonePeripherique: createRange(246, 289),
        zoneEloignement: createRange(209, 246)
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(289, 340),
        centreVille: createRange(246, 289),
        zonePeripherique: createRange(209, 246),
        zoneEloignement: createRange(177, 209)
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(246, 289),
        centreVille: createRange(209, 246),
        zonePeripherique: createRange(177, 209),
        zoneEloignement: createRange(151, 177)
      }
    ],
    terrainsNus: [], // No rental values provided in the tables for Tamenghasset
    terrainsAgricolesPlaine: [],
    terrainsAgricolesPente: []
  },

  // 2. SECONDARY COMMUNES (Pages 3-6)
  createSecondaryCommuneRentalScale("Abalessa"),
  createSecondaryCommuneRentalScale("In Amguel"),
  createSecondaryCommuneRentalScale("Idelès"),
  createSecondaryCommuneRentalScale("Tazrouk")
];