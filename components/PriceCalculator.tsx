'use client';

import { useState, useMemo } from 'react';
import { propertyDataMap, availableRegions, translations } from '@/lib/data/propertyPrices';
import { Calculator } from 'lucide-react';

const t = (key: string) => translations[key] || key;

export default function PriceCalculator() {
  const [regionId, setRegionId] = useState<string>('oran_est');
  const [calculationMode, setCalculationMode] = useState<'sale' | 'rent'>('sale');
  const [categoryIdx, setCategoryIdx] = useState<number | ''>('');
  const [typeIdx, setTypeIdx] = useState<number | ''>('');
  const [zoneKey, setZoneKey] = useState<string>('');
  const [area, setArea] = useState<number | ''>('');

  const currentRegionData = propertyDataMap[regionId];
  const selectedCategory = currentRegionData && categoryIdx !== '' ? currentRegionData.prix[categoryIdx] : null;
  const selectedType = selectedCategory && typeIdx !== '' ? selectedCategory.types[typeIdx] : null;
  
  const availableZones = useMemo(() => {
    if (!selectedType) return [];
    return Object.entries(selectedType.zones)
      .filter(([_, values]: [string, any]) => {
        if (calculationMode === 'sale') {
          return values.min !== null && values.max !== null;
        } else {
          return values.rent_min !== null && values.rent_max !== null && values.rent_min !== undefined && values.rent_max !== undefined;
        }
      })
      .map(([key]) => key);
  }, [selectedType, calculationMode]);

  const priceData = selectedType && zoneKey ? selectedType.zones[zoneKey as keyof typeof selectedType.zones] : null;

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionId(e.target.value);
    setCategoryIdx('');
    setTypeIdx('');
    setZoneKey('');
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryIdx(e.target.value === '' ? '' : Number(e.target.value));
    setTypeIdx('');
    setZoneKey('');
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeIdx(e.target.value === '' ? '' : Number(e.target.value));
    setZoneKey('');
  };

  const calculatePrice = () => {
    if (categoryIdx === '' || typeIdx === '' || zoneKey === '' || area === '' || area <= 0) {
      return null;
    }
    if (!priceData) return null;

    const min = calculationMode === 'sale' ? priceData.min : priceData.rent_min;
    const max = calculationMode === 'sale' ? priceData.max : priceData.rent_max;

    if (min === null || max === null || min === undefined || max === undefined) return null;

    const totalMin = min * Number(area);
    const totalMax = max * Number(area);

    let taxRate = 0;
    if (calculationMode === 'rent') {
      const catName = selectedCategory?.categorie;
      // IRG rates in Algeria: 7% for residential, 15% for commercial/professional
      if (catName === 'Individuels' || catName === 'Collectifs et Semi-Collectifs') {
        taxRate = 0.07;
      } else if (catName === 'Locaux Commerciaux et Locaux à Usage Professionnels' || catName === 'Hangars') {
        taxRate = 0.15;
      } else {
        taxRate = 0.15; // Default for others if rented
      }
    }

    return { totalMin, totalMax, min, max, taxRate };
  };

  const result = calculatePrice();
  const formatter = new Intl.NumberFormat('fr-DZ', { style: 'currency', currency: 'DZD' });

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-emerald-100 text-emerald-600 rounded-2xl mb-6 shadow-sm">
              <Calculator className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              حاسبة الأسعار المرجعية للتصريح العقاري
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              احسب الحد الأدنى والأقصى للتصريح بثمن {calculationMode === 'sale' ? 'بيع' : 'إيجار'} العقار لتفادي المراجعات الضريبية، بناءً على جدول 2025-2026 (وهران).
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-emerald-100">
            {/* Mode Toggle */}
            <div className="flex p-1 bg-gray-100 rounded-2xl mb-8 max-w-md mx-auto">
              <button
                onClick={() => setCalculationMode('sale')}
                className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                  calculationMode === 'sale'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                بيع العقار
              </button>
              <button
                onClick={() => setCalculationMode('rent')}
                className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                  calculationMode === 'rent'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                إيجار العقار
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                {/* Region */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    البلدية / المنطقة
                  </label>
                  <select
                    value={regionId}
                    onChange={handleRegionChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer"
                  >
                    <option value="">-- اختر البلدية --</option>
                    {availableRegions.map((region) => (
                      <option key={region.id} value={region.id}>{region.name}</option>
                    ))}
                  </select>
                </div>

                {!currentRegionData && regionId !== '' ? (
                  <div className="p-4 bg-amber-50 text-amber-700 rounded-xl mt-4 border border-amber-200 text-sm">
                    بيانات هذه البلدية قيد التحديث وسيتم إضافتها قريباً. يرجى اختيار بلدية أخرى أو المحاولة لاحقاً.
                  </div>
                ) : (
                  <>
                    {/* Category */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        طبيعة العقار
                      </label>
                      <select
                        value={categoryIdx}
                        onChange={handleCategoryChange}
                        disabled={!currentRegionData}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        <option value="">-- اختر طبيعة العقار --</option>
                        {currentRegionData?.prix.map((cat: any, idx: number) => (
                          <option key={idx} value={idx}>{t(cat.categorie)}</option>
                        ))}
                      </select>
                    </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    صنف العقار
                  </label>
                  <select
                    value={typeIdx}
                    onChange={handleTypeChange}
                    disabled={categoryIdx === ''}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    <option value="">-- اختر الصنف --</option>
                    {selectedCategory?.types.map((type: any, idx: number) => (
                      <option key={idx} value={idx}>{t(type.type)}</option>
                    ))}
                  </select>
                </div>

                {/* Zone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    المنطقة العمرانية
                  </label>
                  <select
                    value={zoneKey}
                    onChange={(e) => setZoneKey(e.target.value)}
                    disabled={typeIdx === '' || availableZones.length === 0}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    <option value="">-- اختر المنطقة --</option>
                    {availableZones.map((zone) => (
                      <option key={zone} value={zone}>{t(zone)}</option>
                    ))}
                  </select>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {selectedCategory?.unite === 'DA_Ha' ? 'المساحة (بالهكتار Ha)' : 'المساحة (بالمتر المربع m²)'}
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="أدخل المساحة"
                    disabled={!currentRegionData}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  />
                </div>
              </>
            )}
          </div>

              {/* Result Section */}
              <div className="flex flex-col justify-center">
                {result ? (
                  <div className="p-8 bg-emerald-600 rounded-2xl text-white text-center shadow-lg h-full flex flex-col justify-center">
                    <h4 className="text-xl font-bold mb-6 text-emerald-50">النتيجة التقريبية</h4>
                    
                    <div className="mb-6 bg-emerald-700/30 rounded-xl p-4">
                      <p className="text-sm text-emerald-100 mb-2">
                        {calculationMode === 'sale' ? 'السعر للمتر المرجعي:' : 'مبلغ الإيجار المرجعي للمتر:'}
                      </p>
                      <p className="font-medium text-lg">
                        من <span className="font-bold text-amber-300">{result.min.toLocaleString()}</span> إلى <span className="font-bold text-amber-300">{result.max.toLocaleString()}</span> د.ج
                      </p>
                    </div>

                    <div className="bg-emerald-800/40 rounded-xl p-6 border border-emerald-500/30">
                      <p className="text-emerald-100 font-medium mb-3">
                        {calculationMode === 'sale' ? 'إجمالي التصريح المرجعي:' : 'إجمالي مبلغ الإيجار الشهري المرجعي:'}
                      </p>
                      <div className="space-y-2" dir="ltr">
                        <p className="text-2xl md:text-3xl font-bold text-white">
                          {formatter.format(result.totalMin)}
                        </p>
                        <p className="text-emerald-300 text-sm font-medium">إلى</p>
                        <p className="text-2xl md:text-3xl font-bold text-white">
                          {formatter.format(result.totalMax)}
                        </p>
                      </div>
                    </div>

                    {calculationMode === 'rent' && result.taxRate > 0 && (
                      <div className="mt-6 pt-6 border-t border-emerald-500/30">
                        <p className="text-emerald-100 text-sm mb-3">
                          الضريبة على الدخل الإجمالي (IRG) المقدرة ({result.taxRate * 100}%):
                        </p>
                        <div className="grid grid-cols-2 gap-4" dir="ltr">
                          <div className="bg-emerald-900/40 rounded-lg p-3">
                            <p className="text-xs text-emerald-300 mb-1">الحد الأدنى</p>
                            <p className="font-bold text-white">{formatter.format(result.totalMin * result.taxRate)}</p>
                          </div>
                          <div className="bg-emerald-900/40 rounded-lg p-3">
                            <p className="text-xs text-emerald-300 mb-1">الحد الأقصى</p>
                            <p className="font-bold text-white">{formatter.format(result.totalMax * result.taxRate)}</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-emerald-200 mt-3 text-right" dir="rtl">
                          * هذه الضريبة تُدفع شهرياً أو سنوياً حسب الحالة.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full min-h-[300px] border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <p className="text-gray-500 font-medium">
                      يرجى ملء جميع الحقول أعلاه لإظهار السعر المرجعي التقريبي
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl flex gap-4 items-start">
              <div className="text-amber-500 flex-shrink-0 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>تنبيه هام:</strong> هذه الحاسبة تقدم تقديراً مبدئياً مبنياً على الأسعار المرجعية المعتمدة من طرف المديرية العامة للضرائب لولاية وهران (الفترة 2025-2026). الأسعار قابلة للتحديث أو التغيير بناءً على وضعية العقار وخبرة إدارة الضرائب. الأرقام الناتجة هي للاستئناس فقط ولا تتحمل إدارة الموقع أي مسؤولية قانونية عن صحتها النهائية وقت إبرام العقد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
