// laghouat-transactions-2025-2026.ts
// Source: Termes de références relatifs aux transactions d'immeubles - Wilaya de Laghouat 2025-2026

export interface PriceRange {
  min: number;
  max: number;
  average: number;
}

export interface PropertyEntry {
  label: string;
  zoneResidentielle?: PriceRange;
  centreVille?: PriceRange;
  zonePeripherique?: PriceRange;
  zoneEloignement?: PriceRange;
  unit: 'DA/m²' | 'DA/Ha';
}

export interface CommuneData {
  commune: string;
  region?: string;
  individuels: PropertyEntry[];
  collectifsSemiCollectifs: PropertyEntry[];
  locauxCommerciaux: PropertyEntry[];
  hangars: PropertyEntry[];
  terrainsNus: PropertyEntry[];
  terrainsAgricolesPlaine: PropertyEntry[];
  terrainsAgricolesPente: PropertyEntry[];
}

const createRange = (min: number, max: number): PriceRange => ({
  min,
  max,
  average: Math.round((min + max) / 2),
});

const commonHangars: PropertyEntry[] = [
  { label: "Situé en zone urbaine", zoneResidentielle: createRange(4968, 5844), centreVille: createRange(4516, 5313), zonePeripherique: createRange(4064, 4782), zoneEloignement: createRange(3161, 3719), unit: "DA/m²" },
  { label: "Situé en zone rurale", zoneResidentielle: createRange(4471, 5260), centreVille: createRange(4064, 4782), zonePeripherique: createRange(3658, 4304), zoneEloignement: createRange(2845, 3347), unit: "DA/m²" }
];

const commonAgriPlaine: PropertyEntry[] = [
  { label: "Potentialité moyenne", zonePeripherique: createRange(425000, 500000), zoneEloignement: createRange(382500, 450000), unit: "DA/Ha" },
  { label: "Potentialité faible", zonePeripherique: createRange(382500, 450000), zoneEloignement: createRange(344250, 405000), unit: "DA/Ha" }
];

const commonAgriPente: PropertyEntry[] = [
  { label: "Potentialité élevée", zonePeripherique: createRange(344250, 405000), zoneEloignement: createRange(309825, 364500), unit: "DA/Ha" },
  { label: "Potentialité moyenne", zonePeripherique: createRange(309825, 364500), zoneEloignement: createRange(278843, 328050), unit: "DA/Ha" },
  { label: "Potentialité faible", zonePeripherique: createRange(278843, 328050), zoneEloignement: createRange(250958, 295245), unit: "DA/Ha" }
];

const generateGroup1 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(56128, 66033), centreVille: createRange(51026, 60030), zonePeripherique: createRange(45923, 54027), zoneEloignement: createRange(35718, 42021), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(50515, 59430), centreVille: createRange(45923, 54027), zonePeripherique: createRange(41331, 48624), zoneEloignement: createRange(32146, 37819), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(44902, 52826), centreVille: createRange(40820, 48024), zonePeripherique: createRange(36738, 43222), zoneEloignement: createRange(28574, 33617), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(39290, 46223), centreVille: createRange(35718, 42021), zonePeripherique: createRange(32146, 37819), zoneEloignement: createRange(25002, 29415), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(41685, 49041), centreVille: createRange(37896, 44583), zonePeripherique: createRange(34106, 40125), zoneEloignement: createRange(26527, 31208), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(37517, 44137), centreVille: createRange(34106, 40125), zonePeripherique: createRange(30695, 36112), zoneEloignement: createRange(23874, 28087), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(33348, 39233), centreVille: createRange(30316, 35666), zonePeripherique: createRange(27285, 32100), zoneEloignement: createRange(21222, 24966), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(29180, 34329), centreVille: createRange(26527, 31208), zonePeripherique: createRange(23874, 28087), zoneEloignement: createRange(18569, 21846), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(30967, 36432), centreVille: createRange(28152, 33120), zonePeripherique: createRange(25337, 29808), zoneEloignement: createRange(19706, 23184), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(27870, 32789), centreVille: createRange(25337, 29808), zonePeripherique: createRange(22803, 26827), zoneEloignement: createRange(17736, 20866), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(24774, 29146), centreVille: createRange(22522, 26496), zonePeripherique: createRange(20269, 23846), zoneEloignement: createRange(15765, 18547), unit: "DA/m²" }
  ],
  hangars: [
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(14902, 17532), centreVille: createRange(13547, 15938), zonePeripherique: createRange(12193, 14344), zoneEloignement: createRange(9483, 11157), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(13412, 15779), centreVille: createRange(12193, 14344), zonePeripherique: createRange(10973, 12910), zoneEloignement: createRange(8535, 10041), unit: "DA/m²" }
  ],
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32258, 37950), centreVille: createRange(29325, 34500), zonePeripherique: createRange(26393, 31050), zoneEloignement: createRange(20528, 24150), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(29032, 34155), centreVille: createRange(26393, 31050), zonePeripherique: createRange(23753, 27945), zoneEloignement: createRange(18475, 21735), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(25806, 30360), centreVille: createRange(23460, 27600), zonePeripherique: createRange(21114, 24840), zoneEloignement: createRange(16422, 19320), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(22580, 26565), centreVille: createRange(20528, 24150), zonePeripherique: createRange(18475, 21735), zoneEloignement: createRange(14369, 16905), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(18549, 21822), centreVille: createRange(16862, 19838), zonePeripherique: createRange(15176, 17854), zoneEloignement: createRange(11804, 13887), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(18549, 21822), centreVille: createRange(16862, 19838), zonePeripherique: createRange(15176, 17854), zoneEloignement: createRange(11804, 13887), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité moyenne", zonePeripherique: createRange(714000, 840000), zoneEloignement: createRange(642600, 756000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(642600, 756000), zoneEloignement: createRange(578340, 680400), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: []
});

const generateGroup2 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(33323, 39204), centreVille: createRange(30294, 35640), zonePeripherique: createRange(27265, 32076), zoneEloignement: createRange(21206, 24948), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(29991, 35284), centreVille: createRange(27265, 32076), zonePeripherique: createRange(24538, 28868), zoneEloignement: createRange(19085, 22453), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(26659, 31363), centreVille: createRange(24235, 28512), zonePeripherique: createRange(21812, 25661), zoneEloignement: createRange(16965, 19958), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(23326, 27443), centreVille: createRange(21206, 24948), zonePeripherique: createRange(19085, 22453), zoneEloignement: createRange(14844, 17464), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(24437, 28750), centreVille: createRange(22216, 26136), zonePeripherique: createRange(19994, 23522), zoneEloignement: createRange(15551, 18295), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(21993, 25875), centreVille: createRange(19994, 23522), zonePeripherique: createRange(17995, 21170), zoneEloignement: createRange(13996, 16466), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(19550, 23000), centreVille: createRange(17772, 20909), zonePeripherique: createRange(15995, 18818), zoneEloignement: createRange(12441, 14636), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(17106, 20125), centreVille: createRange(15551, 18295), zonePeripherique: createRange(13996, 16466), zoneEloignement: createRange(10886, 12807), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(27770, 32670), centreVille: createRange(25245, 29700), zonePeripherique: createRange(22721, 26730), zoneEloignement: createRange(17672, 20790), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(24993, 29403), centreVille: createRange(22721, 26730), zonePeripherique: createRange(20448, 24057), zoneEloignement: createRange(15904, 18711), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(22216, 26136), centreVille: createRange(20196, 23760), zonePeripherique: createRange(18176, 21384), zoneEloignement: createRange(14137, 16632), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(4788, 5633), centreVille: createRange(4353, 5121), zonePeripherique: createRange(3918, 4609), zoneEloignement: createRange(3047, 3585), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(4309, 5070), centreVille: createRange(3918, 4609), zonePeripherique: createRange(3526, 4148), zoneEloignement: createRange(2742, 3226), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(3831, 4506), centreVille: createRange(3482, 4097), zonePeripherique: createRange(3134, 3687), zoneEloignement: createRange(2438, 2868), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(3352, 3943), centreVille: createRange(3047, 3585), zonePeripherique: createRange(2742, 3226), zoneEloignement: createRange(2133, 2509), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(4788, 5633), centreVille: createRange(4353, 5121), zonePeripherique: createRange(3918, 4609), zoneEloignement: createRange(3047, 3585), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(4788, 5633), centreVille: createRange(4353, 5121), zonePeripherique: createRange(3918, 4609), zoneEloignement: createRange(3047, 3585), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup3A = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(17952, 21120), centreVille: createRange(16320, 19200), zonePeripherique: createRange(14688, 17280), zoneEloignement: createRange(11424, 13440), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(16157, 19008), centreVille: createRange(14688, 17280), zonePeripherique: createRange(13219, 15552), zoneEloignement: createRange(10282, 12096), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(14362, 16896), centreVille: createRange(13056, 15360), zonePeripherique: createRange(11750, 13824), zoneEloignement: createRange(9139, 10752), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(12566, 14784), centreVille: createRange(11424, 13440), zonePeripherique: createRange(10282, 12096), zoneEloignement: createRange(7997, 9408), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(15259, 17952), centreVille: createRange(13872, 16320), zonePeripherique: createRange(12485, 14688), zoneEloignement: createRange(9710, 11424), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(13733, 16157), centreVille: createRange(12485, 14688), zonePeripherique: createRange(11236, 13219), zoneEloignement: createRange(8739, 10282), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(12207, 14362), centreVille: createRange(11098, 13056), zonePeripherique: createRange(9988, 11750), zoneEloignement: createRange(7768, 9139), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(10681, 12566), centreVille: createRange(9710, 11424), zonePeripherique: createRange(8739, 10282), zoneEloignement: createRange(6797, 7997), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(13464, 15840), centreVille: createRange(12240, 14400), zonePeripherique: createRange(11016, 12960), zoneEloignement: createRange(8568, 10080), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(12118, 14256), centreVille: createRange(11016, 12960), zonePeripherique: createRange(9914, 11664), zoneEloignement: createRange(7711, 9072), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(10771, 12672), centreVille: createRange(9792, 11520), zonePeripherique: createRange(8813, 10368), zoneEloignement: createRange(6854, 8064), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(2338, 2750), centreVille: createRange(2125, 2500), zonePeripherique: createRange(1913, 2250), zoneEloignement: createRange(1488, 1750), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(2104, 2475), centreVille: createRange(1913, 2250), zonePeripherique: createRange(1721, 2025), zoneEloignement: createRange(1339, 1575), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(1870, 2200), centreVille: createRange(1700, 2000), zonePeripherique: createRange(1530, 1800), zoneEloignement: createRange(1190, 1400), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(1636, 1925), centreVille: createRange(1488, 1750), zonePeripherique: createRange(1339, 1575), zoneEloignement: createRange(1041, 1225), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(1636, 1925), centreVille: createRange(1488, 1750), zonePeripherique: createRange(1339, 1575), zoneEloignement: createRange(1041, 1225), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(1636, 1925), centreVille: createRange(1488, 1750), zonePeripherique: createRange(1339, 1575), zoneEloignement: createRange(1041, 1225), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup3B = (commune: string): CommuneData => {
  const data = generateGroup3A(commune);
  data.terrainsNus = [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(5334, 6276), centreVille: createRange(4849, 5705), zonePeripherique: createRange(4364, 5135), zoneEloignement: createRange(3394, 3994), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(4801, 5648), centreVille: createRange(4364, 5135), zonePeripherique: createRange(3928, 4621), zoneEloignement: createRange(3055, 3594), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(4267, 5020), centreVille: createRange(3879, 4564), zonePeripherique: createRange(3491, 4108), zoneEloignement: createRange(2716, 3195), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(3734, 4393), centreVille: createRange(3394, 3994), zonePeripherique: createRange(3055, 3594), zoneEloignement: createRange(2376, 2795), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(3810, 4483), centreVille: createRange(3464, 4075), zonePeripherique: createRange(3117, 3668), zoneEloignement: createRange(2425, 2853), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(3810, 4483), centreVille: createRange(3464, 4075), zonePeripherique: createRange(3117, 3668), zoneEloignement: createRange(2425, 2853), unit: "DA/m²" }
  ];
  return data;
};

const generateGroup4 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(22216, 26136), centreVille: createRange(20196, 23760), zonePeripherique: createRange(18176, 21384), zoneEloignement: createRange(14137, 16632), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(19994, 23522), centreVille: createRange(18176, 21384), zonePeripherique: createRange(16359, 19246), zoneEloignement: createRange(12723, 14969), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(17772, 20909), centreVille: createRange(16157, 19008), zonePeripherique: createRange(14541, 17107), zoneEloignement: createRange(11310, 13306), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(15551, 18295), centreVille: createRange(14137, 16632), zonePeripherique: createRange(12723, 14969), zoneEloignement: createRange(9896, 11642), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(18873, 22204), centreVille: createRange(17157, 20185), zonePeripherique: createRange(15442, 18167), zoneEloignement: createRange(12010, 14130), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(16986, 19983), centreVille: createRange(15442, 18167), zonePeripherique: createRange(13897, 16350), zoneEloignement: createRange(10809, 12717), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(15098, 17763), centreVille: createRange(13726, 16148), zonePeripherique: createRange(12353, 14533), zoneEloignement: createRange(9608, 11304), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(13211, 15542), centreVille: createRange(12010, 14130), zonePeripherique: createRange(10809, 12717), zoneEloignement: createRange(8407, 9891), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(33323, 39204), centreVille: createRange(30294, 35640), zonePeripherique: createRange(27265, 32076), zoneEloignement: createRange(21206, 24948), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(29991, 35284), centreVille: createRange(27265, 32076), zonePeripherique: createRange(24538, 28868), zoneEloignement: createRange(19085, 22453), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(26659, 31363), centreVille: createRange(24235, 28512), zonePeripherique: createRange(21812, 25661), zoneEloignement: createRange(16965, 19958), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(5868, 6904), centreVille: createRange(5335, 6276), zonePeripherique: createRange(4801, 5648), zoneEloignement: createRange(3734, 4393), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5281, 6213), centreVille: createRange(4801, 5648), zonePeripherique: createRange(4321, 5084), zoneEloignement: createRange(3361, 3954), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(4694, 5523), centreVille: createRange(4268, 5021), zonePeripherique: createRange(3841, 4519), zoneEloignement: createRange(2987, 3515), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(4108, 4833), centreVille: createRange(3734, 4393), zonePeripherique: createRange(3361, 3954), zoneEloignement: createRange(2614, 3075), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(4192, 4931), centreVille: createRange(3811, 4483), zonePeripherique: createRange(3429, 4035), zoneEloignement: createRange(2667, 3138), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(4192, 4931), centreVille: createRange(3811, 4483), zonePeripherique: createRange(3429, 4035), zoneEloignement: createRange(2667, 3138), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup6 = (commune: string): CommuneData => {
  const data = generateGroup4(commune);
  data.terrainsNus = [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(8382, 9862), centreVille: createRange(7620, 8965), zonePeripherique: createRange(6858, 8069), zoneEloignement: createRange(5334, 6276), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(7544, 8875), centreVille: createRange(6858, 8069), zonePeripherique: createRange(6172, 7262), zoneEloignement: createRange(4801, 5648), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(6706, 7889), centreVille: createRange(6096, 7172), zonePeripherique: createRange(5487, 6455), zoneEloignement: createRange(4267, 5020), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(5868, 6903), centreVille: createRange(5334, 6276), zonePeripherique: createRange(4801, 5648), zoneEloignement: createRange(3734, 4393), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(5868, 6904), centreVille: createRange(5335, 6276), zonePeripherique: createRange(4801, 5648), zoneEloignement: createRange(3734, 4393), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(5868, 6904), centreVille: createRange(5335, 6276), zonePeripherique: createRange(4801, 5648), zoneEloignement: createRange(3734, 4393), unit: "DA/m²" }
  ];
  data.terrainsAgricolesPlaine = [];
  return data;
};

const generateGroup7 = (commune: string): CommuneData => {
  const data = generateGroup4(commune);
  data.terrainsNus = [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(2291, 2695), centreVille: createRange(2083, 2450), zonePeripherique: createRange(1874, 2205), zoneEloignement: createRange(1458, 1715), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(2062, 2426), centreVille: createRange(1874, 2205), zonePeripherique: createRange(1687, 1985), zoneEloignement: createRange(1312, 1544), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(1833, 2156), centreVille: createRange(1666, 1960), zonePeripherique: createRange(1499, 1764), zoneEloignement: createRange(1166, 1372), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(1604, 1887), centreVille: createRange(1458, 1715), zonePeripherique: createRange(1312, 1544), zoneEloignement: createRange(1020, 1201), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(1604, 1887), centreVille: createRange(1458, 1715), zonePeripherique: createRange(1312, 1544), zoneEloignement: createRange(1020, 1201), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(1604, 1887), centreVille: createRange(1458, 1715), zonePeripherique: createRange(1312, 1544), zoneEloignement: createRange(1020, 1201), unit: "DA/m²" }
  ];
  return data;
};

const generateGroup8 = (commune: string): CommuneData => {
  const data = generateGroup4(commune);
  data.locauxCommerciaux = [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(22216, 26136), centreVille: createRange(20196, 23760), zonePeripherique: createRange(18176, 21384), zoneEloignement: createRange(14137, 16632), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(19994, 23522), centreVille: createRange(18176, 21384), zonePeripherique: createRange(16359, 19246), zoneEloignement: createRange(12723, 14969), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(17772, 20909), centreVille: createRange(16157, 19008), zonePeripherique: createRange(14541, 17107), zoneEloignement: createRange(11310, 13306), unit: "DA/m²" }
  ];
  data.terrainsNus = [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(4608, 5421), centreVille: createRange(4189, 4928), zonePeripherique: createRange(3770, 4435), zoneEloignement: createRange(2932, 3450), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(4147, 4879), centreVille: createRange(3770, 4435), zonePeripherique: createRange(3393, 3992), zoneEloignement: createRange(2639, 3105), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(3686, 4337), centreVille: createRange(3351, 3942), zonePeripherique: createRange(3016, 3548), zoneEloignement: createRange(2346, 2760), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(3225, 3795), centreVille: createRange(2932, 3450), zonePeripherique: createRange(2639, 3105), zoneEloignement: createRange(2053, 2415), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(3917, 4608), centreVille: createRange(3561, 4189), zonePeripherique: createRange(3205, 3770), zoneEloignement: createRange(2492, 2932), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(3917, 4608), centreVille: createRange(3561, 4189), zonePeripherique: createRange(3205, 3770), zoneEloignement: createRange(2492, 2932), unit: "DA/m²" }
  ];
  return data;
};

const generateGroup9 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(23562, 27720), centreVille: createRange(21420, 25200), zonePeripherique: createRange(19278, 22680), zoneEloignement: createRange(14994, 17640), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(21206, 24948), centreVille: createRange(19278, 22680), zonePeripherique: createRange(17350, 20412), zoneEloignement: createRange(13495, 15876), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(18850, 22176), centreVille: createRange(17136, 20160), zonePeripherique: createRange(15422, 18144), zoneEloignement: createRange(11995, 14112), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(16493, 19404), centreVille: createRange(14994, 17640), zonePeripherique: createRange(13495, 15876), zoneEloignement: createRange(10496, 12348), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(11388, 13398), centreVille: createRange(10353, 12180), zonePeripherique: createRange(9318, 10962), zoneEloignement: createRange(7247, 8526), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(10249, 12058), centreVille: createRange(9318, 10962), zonePeripherique: createRange(8386, 9866), zoneEloignement: createRange(6522, 7673), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(9111, 10718), centreVille: createRange(8282, 9744), zonePeripherique: createRange(7454, 8770), zoneEloignement: createRange(5798, 6821), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(7972, 9379), centreVille: createRange(7247, 8526), zonePeripherique: createRange(6522, 7673), zoneEloignement: createRange(5073, 5968), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(15708, 18480), centreVille: createRange(14280, 16800), zonePeripherique: createRange(12852, 15120), zoneEloignement: createRange(9996, 11760), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(14137, 16632), centreVille: createRange(12852, 15120), zonePeripherique: createRange(11567, 13608), zoneEloignement: createRange(8996, 10584), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(12566, 14784), centreVille: createRange(11424, 13440), zonePeripherique: createRange(10282, 12096), zoneEloignement: createRange(7997, 9408), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(8976, 10560), centreVille: createRange(8160, 9600), zonePeripherique: createRange(7344, 8640), zoneEloignement: createRange(5712, 6720), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(8078, 9504), centreVille: createRange(7344, 8640), zonePeripherique: createRange(6610, 7776), zoneEloignement: createRange(5141, 6048), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(7181, 8448), centreVille: createRange(6528, 7680), zonePeripherique: createRange(5875, 6912), zoneEloignement: createRange(4570, 5376), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(6283, 7392), centreVille: createRange(5712, 6720), zonePeripherique: createRange(5141, 6048), zoneEloignement: createRange(3998, 4704), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(8602, 10120), centreVille: createRange(7820, 9200), zonePeripherique: createRange(7038, 8280), zoneEloignement: createRange(5474, 6440), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(8602, 10120), centreVille: createRange(7820, 9200), zonePeripherique: createRange(7038, 8280), zoneEloignement: createRange(5474, 6440), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup10 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(8976, 10560), centreVille: createRange(8160, 9600), zonePeripherique: createRange(7344, 8640), zoneEloignement: createRange(5712, 6720), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(8078, 9504), centreVille: createRange(7344, 8640), zonePeripherique: createRange(6610, 7776), zoneEloignement: createRange(5141, 6048), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(7181, 8448), centreVille: createRange(6528, 7680), zonePeripherique: createRange(5875, 6912), zoneEloignement: createRange(4570, 5376), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(6283, 7392), centreVille: createRange(5712, 6720), zonePeripherique: createRange(5141, 6048), zoneEloignement: createRange(3998, 4704), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(10771, 12672), centreVille: createRange(9792, 11520), zonePeripherique: createRange(8813, 10368), zoneEloignement: createRange(6854, 8064), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(9694, 11405), centreVille: createRange(8813, 10368), zonePeripherique: createRange(7932, 9331), zoneEloignement: createRange(6169, 7258), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(8617, 10138), centreVille: createRange(7834, 9216), zonePeripherique: createRange(7050, 8294), zoneEloignement: createRange(5484, 6451), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(7540, 8870), centreVille: createRange(6854, 8064), zonePeripherique: createRange(6169, 7258), zoneEloignement: createRange(4798, 5645), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(8078, 9504), centreVille: createRange(7344, 8640), zonePeripherique: createRange(6610, 7776), zoneEloignement: createRange(5141, 6048), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(7271, 8554), centreVille: createRange(6610, 7776), zonePeripherique: createRange(5949, 6998), zoneEloignement: createRange(4627, 5443), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(6463, 7603), centreVille: createRange(5875, 6912), zonePeripherique: createRange(5288, 6221), zoneEloignement: createRange(4113, 4838), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(888, 1045), centreVille: createRange(808, 950), zonePeripherique: createRange(727, 855), zoneEloignement: createRange(565, 665), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(799, 941), centreVille: createRange(727, 855), zonePeripherique: createRange(654, 770), zoneEloignement: createRange(509, 599), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(711, 836), centreVille: createRange(646, 760), zonePeripherique: createRange(581, 684), zoneEloignement: createRange(452, 532), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(622, 732), centreVille: createRange(565, 665), zonePeripherique: createRange(509, 599), zoneEloignement: createRange(396, 466), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(622, 732), centreVille: createRange(565, 665), zonePeripherique: createRange(509, 599), zoneEloignement: createRange(396, 466), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(622, 732), centreVille: createRange(565, 665), zonePeripherique: createRange(509, 599), zoneEloignement: createRange(396, 466), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup11 = (commune: string): CommuneData => {
  const data = generateGroup4(commune);
  data.collectifsSemiCollectifs = [
    { label: "Standing", zoneResidentielle: createRange(15551, 18295), centreVille: createRange(14137, 16632), zonePeripherique: createRange(12723, 14969), zoneEloignement: createRange(9896, 11642), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(13996, 16466), centreVille: createRange(12723, 14969), zonePeripherique: createRange(11451, 13472), zoneEloignement: createRange(8906, 10478), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(12441, 14636), centreVille: createRange(11310, 13306), zonePeripherique: createRange(10179, 11975), zoneEloignement: createRange(7917, 9314), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(10886, 12807), centreVille: createRange(9896, 11642), zonePeripherique: createRange(8906, 10478), zoneEloignement: createRange(6927, 8150), unit: "DA/m²" }
  ];
  data.locauxCommerciaux = [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(27770, 32670), centreVille: createRange(25245, 29700), zonePeripherique: createRange(22721, 26730), zoneEloignement: createRange(17672, 20790), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(24993, 29403), centreVille: createRange(22721, 26730), zonePeripherique: createRange(20448, 24057), zoneEloignement: createRange(15904, 18711), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(22216, 26136), centreVille: createRange(20196, 23760), zonePeripherique: createRange(18176, 21384), zoneEloignement: createRange(14137, 16632), unit: "DA/m²" }
  ];
  data.terrainsNus = [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(4371, 5143), centreVille: createRange(3974, 4675), zonePeripherique: createRange(3576, 4208), zoneEloignement: createRange(2782, 3273), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(3934, 4628), centreVille: createRange(3576, 4208), zonePeripherique: createRange(3219, 3787), zoneEloignement: createRange(2503, 2945), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(3497, 4114), centreVille: createRange(3179, 3740), zonePeripherique: createRange(2861, 3366), zoneEloignement: createRange(2225, 2618), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(3060, 3600), centreVille: createRange(2782, 3273), zonePeripherique: createRange(2503, 2945), zoneEloignement: createRange(1947, 2291), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(3600, 4235), centreVille: createRange(3273, 3850), zonePeripherique: createRange(2945, 3465), zoneEloignement: createRange(2291, 2695), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(3600, 4235), centreVille: createRange(3273, 3850), zonePeripherique: createRange(2945, 3465), zoneEloignement: createRange(2291, 2695), unit: "DA/m²" }
  ];
  data.terrainsAgricolesPente = commonAgriPente;
  return data;
};

const generateGroup12 = (commune: string): CommuneData => {
  const data = generateGroup10(commune);
  data.terrainsNus = [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(1169, 1375), centreVille: createRange(1063, 1250), zonePeripherique: createRange(956, 1125), zoneEloignement: createRange(744, 875), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(1052, 1238), centreVille: createRange(956, 1125), zonePeripherique: createRange(861, 1013), zoneEloignement: createRange(669, 788), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(935, 1100), centreVille: createRange(850, 1000), zonePeripherique: createRange(765, 900), zoneEloignement: createRange(595, 700), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(818, 963), centreVille: createRange(744, 875), zonePeripherique: createRange(669, 788), zoneEloignement: createRange(521, 613), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(818, 963), centreVille: createRange(744, 875), zonePeripherique: createRange(669, 788), zoneEloignement: createRange(521, 613), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(818, 963), centreVille: createRange(744, 875), zonePeripherique: createRange(669, 788), zoneEloignement: createRange(521, 613), unit: "DA/m²" }
  ];
  data.terrainsAgricolesPente = commonAgriPente;
  return data;
};

const generateGroup13 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(16662, 19602), centreVille: createRange(15147, 17820), zonePeripherique: createRange(13632, 16038), zoneEloignement: createRange(10603, 12474), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(14996, 17642), centreVille: createRange(13632, 16038), zonePeripherique: createRange(12269, 14434), zoneEloignement: createRange(9543, 11227), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(13329, 15682), centreVille: createRange(12118, 14256), zonePeripherique: createRange(10906, 12830), zoneEloignement: createRange(8482, 9979), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(11663, 13721), centreVille: createRange(10603, 12474), zonePeripherique: createRange(9543, 11227), zoneEloignement: createRange(7422, 8732), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(14317, 16843), centreVille: createRange(13015, 15312), zonePeripherique: createRange(11714, 13781), zoneEloignement: createRange(9111, 10718), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(12885, 15159), centreVille: createRange(11714, 13781), zonePeripherique: createRange(10542, 12403), zoneEloignement: createRange(8200, 9647), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(11453, 13475), centreVille: createRange(10412, 12250), zonePeripherique: createRange(9371, 11025), zoneEloignement: createRange(7289, 8575), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(10022, 11790), centreVille: createRange(9111, 10718), zonePeripherique: createRange(8200, 9647), zoneEloignement: createRange(6377, 7503), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(19747, 23232), centreVille: createRange(17952, 21120), zonePeripherique: createRange(16157, 19008), zoneEloignement: createRange(12566, 14784), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(17772, 20909), centreVille: createRange(16157, 19008), zonePeripherique: createRange(14541, 17107), zoneEloignement: createRange(11310, 13306), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(15798, 18586), centreVille: createRange(14362, 16896), zonePeripherique: createRange(12925, 15206), zoneEloignement: createRange(10053, 11827), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(1748, 2057), centreVille: createRange(1590, 1870), zonePeripherique: createRange(1431, 1683), zoneEloignement: createRange(1113, 1309), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(1574, 1851), centreVille: createRange(1431, 1683), zonePeripherique: createRange(1287, 1515), zoneEloignement: createRange(1001, 1178), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(1399, 1646), centreVille: createRange(1272, 1496), zonePeripherique: createRange(1144, 1346), zoneEloignement: createRange(890, 1047), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(1224, 1440), centreVille: createRange(1113, 1309), zonePeripherique: createRange(1001, 1178), zoneEloignement: createRange(779, 916), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(1508, 1774), centreVille: createRange(1371, 1613), zonePeripherique: createRange(1234, 1452), zoneEloignement: createRange(960, 1129), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(1508, 1774), centreVille: createRange(1371, 1613), zonePeripherique: createRange(1234, 1452), zoneEloignement: createRange(960, 1129), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: commonAgriPente
});

const generateGroup14 = (commune: string): CommuneData => ({
  commune,
  individuels: [
    { label: "Standing", zoneResidentielle: createRange(34558, 40656), centreVille: createRange(31416, 36960), zonePeripherique: createRange(28274, 33264), zoneEloignement: createRange(21991, 25872), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(31102, 36590), centreVille: createRange(28274, 33264), zonePeripherique: createRange(25447, 29938), zoneEloignement: createRange(19792, 23285), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(27646, 32525), centreVille: createRange(25133, 29568), zonePeripherique: createRange(22620, 26611), zoneEloignement: createRange(17593, 20698), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(24190, 28459), centreVille: createRange(21991, 25872), zonePeripherique: createRange(19792, 23285), zoneEloignement: createRange(15394, 18110), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", zoneResidentielle: createRange(21722, 25555), centreVille: createRange(19747, 23232), zonePeripherique: createRange(17772, 20909), zoneEloignement: createRange(13823, 16262), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(19550, 23000), centreVille: createRange(17772, 20909), zonePeripherique: createRange(15995, 18818), zoneEloignement: createRange(12441, 14636), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(17378, 20444), centreVille: createRange(15798, 18586), zonePeripherique: createRange(14218, 16727), zoneEloignement: createRange(11058, 13010), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(15205, 17889), centreVille: createRange(13823, 16262), zonePeripherique: createRange(12441, 14636), zoneEloignement: createRange(9676, 11384), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(23604, 27770), centreVille: createRange(21458, 25245), zonePeripherique: createRange(19312, 22721), zoneEloignement: createRange(15021, 17672), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(21244, 24993), centreVille: createRange(19312, 22721), zonePeripherique: createRange(17381, 20448), zoneEloignement: createRange(13519, 15904), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(18883, 22216), centreVille: createRange(17167, 20196), zonePeripherique: createRange(15450, 18176), zoneEloignement: createRange(12017, 14137), unit: "DA/m²" }
  ],
  hangars: commonHangars,
  terrainsNus: [
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(8415, 9900), centreVille: createRange(7650, 9000), zonePeripherique: createRange(6885, 8100), zoneEloignement: createRange(5355, 6300), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(7574, 8910), centreVille: createRange(6885, 8100), zonePeripherique: createRange(6197, 7290), zoneEloignement: createRange(4820, 5670), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(6732, 7920), centreVille: createRange(6120, 7200), zonePeripherique: createRange(5508, 6480), zoneEloignement: createRange(4284, 5040), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(5891, 6930), centreVille: createRange(5355, 6300), zonePeripherique: createRange(4820, 5670), zoneEloignement: createRange(3749, 4410), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(4937, 5808), centreVille: createRange(4488, 5280), zonePeripherique: createRange(4039, 4752), zoneEloignement: createRange(3142, 3696), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(4937, 5808), centreVille: createRange(4488, 5280), zonePeripherique: createRange(4039, 4752), zoneEloignement: createRange(3142, 3696), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: commonAgriPente
});

export const laghouatTransactionsReference: CommuneData[] = [
  generateGroup1("Laghouat"),
  generateGroup2("Ksar El Hirane"),
  generateGroup3A("Ben Nacer Benchouhra"),
  generateGroup4("Sidi Makhlouf"),
  generateGroup3B("El Assafia"),
  generateGroup6("Hassi R'mél"),
  generateGroup7("Hassi Dellaa"),
  generateGroup8("Ain Madhi"),
  generateGroup8("Tadjemout"),
  generateGroup9("El kheneg"),
  generateGroup10("Tadjrouna"),
  generateGroup10("El Houita"),
  generateGroup11("Gueltat Sidi Saad"),
  generateGroup12("Ain Sidi Ali"),
  generateGroup12("El Baidha"),
  generateGroup13("Brida"),
  generateGroup12("Hadj Mechri"),
  generateGroup12("Taouyala"),
  generateGroup13("El Ghicha"),
  generateGroup14("Aflou"),
  generateGroup12("Sebgag"),
  generateGroup12("Sidi Bouzid"),
  generateGroup12("Oued Moura"),
  generateGroup12("Oued M'zi")
];

export default laghouatTransactionsReference;