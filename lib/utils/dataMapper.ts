import { oranFtrLocations } from '../data/oran_ftr_locations_data';

export const getPricesForCalculator = (regionId: string, calculationMode: 'sale' | 'rent') => {
  if (calculationMode === 'sale') return null;

  // Find commune in new data
  const commune = oranFtrLocations.communes.find(c => 
    c.commune.toLowerCase().includes(regionId.replace('_', ' '))
  );
  
  if (!commune) return null;

  // Simple transformation
  return {
    categories: commune.categories.map(cat => ({
      categorie: cat.nature,
      types: cat.types.map(t => ({
        type: t.type,
        zones: commune.zones.reduce((acc, zone, idx) => ({
          ...acc,
          [zone]: { rent_min: t.values[idx]?.[0], rent_max: t.values[idx]?.[1] }
        }), {})
      }))
    }))
  };
};
