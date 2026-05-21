import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// REFERENCE GRID DEFINITIONS (EXACT FROM TIARET PDF)
// ============================================================================

/** 
 * GRID A: TIARET (Capital - Page 2)
 * Standing Res: 520 - 612
 */
const getTiaretCapitalGrid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(520, 612), centreVille: createRange(473, 557), zonePeripherique: createRange(402, 473), zoneEloignement: createRange(342, 402) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(442, 520), centreVille: createRange(402, 473), zonePeripherique: createRange(342, 402), zoneEloignement: createRange(291, 342) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(376, 442), centreVille: createRange(342, 402), zonePeripherique: createRange(291, 342), zoneEloignement: createRange(247, 290) },
    { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(320, 376), centreVille: createRange(291, 342), zonePeripherique: createRange(247, 290), zoneEloignement: createRange(210, 247) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(313, 368), centreVille: createRange(285, 335), zonePeripherique: createRange(241, 284), zoneEloignement: createRange(206, 242) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(2020, 2376), centreVille: createRange(1836, 2160), zonePeripherique: createRange(1561, 1836), zoneEloignement: createRange(1327, 1561) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(13430, 15800), zoneEloignement: createRange(11416, 13430) }]
});

/** 
 * GRID B: SOUGUEUR TIER (Pages 3-7)
 * Standing Res: 302 - 355
 */
const getSougueurTierGrid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(302, 355), centreVille: createRange(272, 320), zonePeripherique: createRange(231, 272), zoneEloignement: createRange(196, 230) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(257, 302), centreVille: createRange(231, 272), zonePeripherique: createRange(196, 231), zoneEloignement: createRange(167, 196) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(181, 213), centreVille: createRange(164, 193), zonePeripherique: createRange(139, 164), zoneEloignement: createRange(119, 140) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(1190, 1400), centreVille: createRange(1105, 1300), zonePeripherique: createRange(939, 1105), zoneEloignement: createRange(798, 939) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(13430, 15800), zoneEloignement: createRange(11416, 13430) }]
});

/** 
 * GRID C: AIN DEHEB TIER (Pages 8-15)
 * Standing Res: 179 - 211
 */
const getAinDehebTierGrid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(179, 211), centreVille: createRange(163, 192), zonePeripherique: createRange(139, 163), zoneEloignement: createRange(118, 139) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(152, 179), centreVille: createRange(139, 163), zonePeripherique: createRange(118, 139), zoneEloignement: createRange(100, 118) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(743, 874), centreVille: createRange(677, 796), zonePeripherique: createRange(575, 677), zoneEloignement: createRange(489, 575) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(13430, 15800), zoneEloignement: createRange(11416, 13430) }]
});

/** 
 * GRID D: CHEHAIMA RURAL TIER (Pages 16-43)
 * Standing Res: 87 - 103
 */
const getChehaimaTierGrid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(87, 103), centreVille: createRange(79, 93), zonePeripherique: createRange(67, 79), zoneEloignement: createRange(57, 67) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(74, 87), centreVille: createRange(67, 79), zonePeripherique: createRange(57, 67), zoneEloignement: createRange(49, 57) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(316, 372), centreVille: createRange(287, 338), zonePeripherique: createRange(244, 287), zoneEloignement: createRange(208, 244) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(13430, 15800), zoneEloignement: createRange(11416, 13430) }]
});

// ============================================================================
// DATA CONFIGURATION (BY PAGE)
// ============================================================================

export const tiaretRentalReferenceTransactions: PriceRefCommune[] = [
  getTiaretCapitalGrid("Tiaret"),                   // Page 2
  getSougueurTierGrid("Sougueur"),                  // Page 3
  getSougueurTierGrid("Mahdia"),                    // Page 4
  getSougueurTierGrid("Rahouia"),                  // Page 5
  getSougueurTierGrid("Frenda"),                   // Page 6
  getSougueurTierGrid("Dahmouni"),                 // Page 7
  getAinDehebTierGrid("Ain Deheb"),                // Page 8
  getAinDehebTierGrid("Meghila"),                  // Page 9
  getAinDehebTierGrid("Medroussa"),                // Page 10
  getAinDehebTierGrid("Ain Kermes"),               // Page 11
  getAinDehebTierGrid("Oued Lilli"),               // Page 12
  getAinDehebTierGrid("Hammadia"),                 // Page 13
  getAinDehebTierGrid("Ksar Chellala"),            // Page 14
  getAinDehebTierGrid("Mechraa Safaa"),            // Page 15
  getChehaimaTierGrid("Chehaima"),                 // Page 16
  getChehaimaTierGrid("Naima"),                    // Page 17
  getChehaimaTierGrid("Djebilet Rosfa"),           // Page 18
  getChehaimaTierGrid("Madna"),                    // Page 19
  getChehaimaTierGrid("Medrissa"),                 // Page 20
  getChehaimaTierGrid("Sidi abderrahmane"),        // Page 21
  getChehaimaTierGrid("Ain bouchekif"),            // Page 22
  getChehaimaTierGrid("Ain el Hadid"),             // Page 23
  getChehaimaTierGrid("Takhemaret"),               // Page 24
  getChehaimaTierGrid("Bougara"),                  // Page 25
  getChehaimaTierGrid("Rechaiga"),                 // Page 26
  getChehaimaTierGrid("Serguine"),                 // Page 27
  getChehaimaTierGrid("Zmalet el amir aek"),       // Page 28
  getChehaimaTierGrid("Ain dzarit"),               // Page 29
  getChehaimaTierGrid("Nadhoura"),                 // Page 30
  getChehaimaTierGrid("Sebaine"),                  // Page 31
  getChehaimaTierGrid("Djillali benama"),          // Page 32
  getChehaimaTierGrid("Tagdempt"),                 // Page 33
  getChehaimaTierGrid("Mellakou"),                 // Page 34
  getChehaimaTierGrid("Sidi bakheti"),             // Page 35
  getChehaimaTierGrid("Sebt"),                     // Page 36
  getChehaimaTierGrid("Sidi Hosni"),               // Page 37
  getChehaimaTierGrid("Sidi ali melal"),           // Page 38
  getChehaimaTierGrid("Tidda"),                    // Page 39
  getChehaimaTierGrid("Guertoufa"),                // Page 40
  getChehaimaTierGrid("Faidja"),                   // Page 41
  getChehaimaTierGrid("Sidi abdelghani"),          // Page 42
  getChehaimaTierGrid("Tousnina")                  // Page 43
];