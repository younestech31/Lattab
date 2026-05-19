import { 
  PriceRefCommune, 
  CalculatorResult, 
  CalculatorCategoryResult, 
  TypeEntry, 
  CalculatorZoneResult,
  CategoryKey,
  CalculatorTypeResult
} from '../types';

const categoryMap: { key: CategoryKey; name: string }[] = [
  { key: 'individuels', name: 'Individuels' },
  { key: 'collectifsSemiCollectifs', name: 'Collectifs et Semi-Collectifs' },
  { key: 'locauxCommerciaux', name: 'Locaux Commerciaux' },
  { key: 'locauxUsageProfessionnels', name: 'Locaux à Usage Professionnels' },
  { key: 'hangars', name: 'Hangars' },
  { key: 'terrainsNus', name: 'Terrains Nus' },
  { key: 'terrainsAgricolesPlaine', name: 'Terrains Agricoles en Plaine' },
  { key: 'terrainsAgricolesPente', name: 'Terrains Agricoles en Pente' },
];

export const getPricesForCalculator = (dataSource: PriceRefCommune[], regionId: string, calculationMode: 'sale' | 'rent'): CalculatorResult | null => {
  const commune = dataSource.find(c => c.commune === regionId);
  
  if (!commune) return null;

  const categories = categoryMap.map(catMap => {
    const catData = commune[catMap.key];
    if (!catData || !Array.isArray(catData)) return null;

    const types = catData.map((t: TypeEntry) => {
      const zones: Record<string, CalculatorZoneResult> = {};
      
      const processRange = (label: string, range?: { min: number; max: number }) => {
        if (!range) return;
        if (calculationMode === 'sale') {
          zones[label] = { min: range.min, max: range.max };
        } else {
          zones[label] = { rent_min: range.min, rent_max: range.max };
        }
      };

      processRange('Zone résidentielle', t.zoneResidentielle);
      processRange('Centre ville', t.centreVille);
      processRange('Zone périphérique', t.zonePeripherique);
      processRange('Zone d\'éloignement', t.zoneEloignement);

      const result: CalculatorTypeResult = {
        type: t.label,
        zones
      };
      if (t.unit) {
        result.unit = t.unit;
      }
      return result;
    }).filter(t => Object.keys(t.zones).length > 0);

    const categoryResult: CalculatorCategoryResult = {
      categorie: catMap.name,
      types
    };
    return categoryResult;
  }).filter((cat): cat is CalculatorCategoryResult => cat !== null && cat.types.length > 0);
  
  return { categories };
};
