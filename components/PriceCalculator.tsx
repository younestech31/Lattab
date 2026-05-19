'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { t } from '@/lib/i18n/translations';
import { Calculator, Copy, MessageCircle, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { CalculatorResult } from '@/lib/types';
import { CalculatorKeys } from '@/lib/i18n/translations';

interface PriceCalculatorProps {
  initialData: CalculatorResult | null;
  initialCommunes: string[];
  initialRegionId: string;
}

export const CalculatorSkeleton = () => (
  <div className="animate-pulse space-y-6 w-full" dir="rtl">
    <div className="h-14 bg-gray-200 rounded-xl w-full" />
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-14 bg-gray-200 rounded-xl w-full" />)}
      </div>
      <div className="h-full bg-gray-200 rounded-2xl w-full min-h-[300px]" />
    </div>
  </div>
);

export default function PriceCalculator({ initialData, initialCommunes, initialRegionId }: PriceCalculatorProps) {
  const { lang } = useLang();
  const [wilaya, setWilaya] = useState<string>('oran');
  const [mappedData, setMappedData] = useState<CalculatorResult | null>(initialData);
  const [communes, setCommunes] = useState<string[]>(initialCommunes);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [calculationMode, setCalculationMode] = useState<'sale' | 'rent'>('sale');
  const [regionId, setRegionId] = useState<string>(initialRegionId);
  const [categoryIdx, setCategoryIdx] = useState<number | ''>('');
  const [typeIdx, setTypeIdx] = useState<number | ''>('');
  const [zoneKey, setZoneKey] = useState<string>('');
  const [area, setArea] = useState<number | ''>('');
  const hasInitialized = useRef(false);
  
  useEffect(() => {
    if (!hasInitialized.current) {
        hasInitialized.current = true;
        return;
    }
    const fetchApiData = async () => {
      const supportedWilayas = ['oran','alger','adrar','chlef','laghouat','oum-el-bouaghi','batna','biskra','bechar','blida'];
      if (!supportedWilayas.includes(wilaya)) {
        setMappedData(null);
        setCommunes([]);
        return;
      }
      setIsLoadingData(true);
      try {
        const response = await fetch(`/api/calculator-data?wilaya=${wilaya}&mode=${calculationMode}&region=${regionId}`);
        const result = await response.json();
        setMappedData(result.data);
        setCommunes(result.communes);
        if (!regionId && result.regionId) setRegionId(result.regionId);
      } catch (err: unknown) {
        console.error('Failed to fetch data', err);
      } finally {
        setIsLoadingData(false);
      }
    };
    fetchApiData();
  }, [wilaya, calculationMode, regionId]);
  
  const currentRegionData = mappedData ? { prix: mappedData.categories } : null;

  const selectedCategory = currentRegionData && categoryIdx !== '' ? currentRegionData.prix[categoryIdx] : null;
  const selectedType = selectedCategory && typeIdx !== '' ? selectedCategory.types[typeIdx] : null;
  
  const availableZones = useMemo(() => {                
    if (!selectedType) return [];
    return Object.entries(selectedType.zones)
      .filter(([_, values]) => {
        if (calculationMode === 'sale') {
          return values.min !== undefined && values.max !== undefined;
        } else {
          return values.rent_min !== null && values.rent_max !== null && values.rent_min !== undefined && values.rent_max !== undefined;
        }
      })
      .map(([key]) => key);
  }, [selectedType, calculationMode]);

  const priceData = selectedType && zoneKey ? selectedType.zones[zoneKey as keyof typeof selectedType.zones] : null;

  const handleWilayaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newWilaya = e.target.value;
    setWilaya(newWilaya);
    setRegionId('');
    setCategoryIdx('');
    setTypeIdx('');
    setZoneKey('');
  };

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
      // IRG rates in Algeria: 7% for residential, 15% for commercial/professional/industrial
      if (catName === 'Individuels' || catName === 'Collectifs et Semi-Collectifs') {
        taxRate = 0.07;
      } else if (catName === 'Locaux Commerciaux' || catName === 'Locaux à Usage Professionnels' || catName === 'Hangars' || catName === 'Terrains') {
        taxRate = 0.15;
      } else {
        taxRate = 0.15; // Default for non-residential categories
      }
    }

    return { totalMin, totalMax, min, max, taxRate };
  };

  const result = calculatePrice();
  const formatter = new Intl.NumberFormat('fr-DZ', { style: 'currency', currency: 'DZD' });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!result) return;
    let textToCopy = `السعر المرجعي في ${regionId}:\nمن ${result.min.toLocaleString()} إلى ${result.max.toLocaleString()} د.ج/م²`;
    if (area && Number(area) > 0) {
      textToCopy += `\nالمساحة: ${area} م²`;
      textToCopy += `\nالسعر الإجمالي المقدر: من ${result.totalMin.toLocaleString()} إلى ${result.totalMax.toLocaleString()} د.ج`;
    }
    textToCopy += `\n(حاسبة مكتب الأستاذ لعطب محمد — lattab.vercel.app)`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) { console.error("Fallback clipboard failed", e); }
      document.body.removeChild(textArea);
    }
  };

  const handleWhatsApp = () => {
    if (!result) return;
    let textToShare = `السلام عليكم، قمت بحساب السعر المرجعي لعقاري (${regionId}) على موقعكم:\nالسعر للمتر المربع: من ${result.min.toLocaleString()} إلى ${result.max.toLocaleString()} د.ج/م²`;
    if (area && Number(area) > 0) {
      textToShare += `\nالمساحة: ${area} م²`;
      textToShare += `\nالسعر الإجمالي المقدر: من ${result.totalMin.toLocaleString()} إلى ${result.totalMax.toLocaleString()} د.ج`;
    }
    textToShare += `\nأود الاستفسار أكثر.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(textToShare)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-emerald-100">
            {/* Mode Toggle */}
            <div className="flex p-1 bg-gray-100 rounded-2xl mb-8 max-w-md mx-auto">
              <button
                onClick={() => {
                  setCalculationMode('sale');
                  setCategoryIdx('');
                  setTypeIdx('');
                  setZoneKey('');
                }}
                className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                  calculationMode === 'sale'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                بيع العقار
              </button>
              <button
                onClick={() => {
                  setCalculationMode('rent');
                  setCategoryIdx('');
                  setTypeIdx('');
                  setZoneKey('');
                }}
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
                {/* Wilaya Option */}
                <div>
                  <label htmlFor="wilaya" className="block text-sm font-bold text-gray-700 mb-2">
                    الولاية
                  </label>
                  <select
                    id="wilaya"
                    value={wilaya}
                    onChange={handleWilayaChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer"
                  >
                    <option value="oran">وهران (31)</option>
                    {[
                      { v: 'adrar', n: 'أدرار (01)' }, { v: 'chlef', n: 'الشلف (02)' }, { v: 'laghouat', n: 'الأغواط (03)' },
                      { v: 'oum-el-bouaghi', n: 'أم البواقي (04)' }, { v: 'batna', n: 'باتنة (05)' }, { v: 'bejaia', n: 'بجاية (06)' },
                      { v: 'biskra', n: 'بسكرة (07)' }, { v: 'bechar', n: 'بشار (08)' }, { v: 'blida', n: 'البليدة (09)' },
                      { v: 'bouira', n: 'البويرة (10)' }, { v: 'tamanrasset', n: 'تمنراست (11)' }, { v: 'tebessa', n: 'تبسة (12)' },
                      { v: 'tlemcen', n: 'تلمسان (13)' }, { v: 'tiaret', n: 'تيارت (14)' }, { v: 'tizi-ouzou', n: 'تيزي وزو (15)' },
                      { v: 'alger', n: 'الجزائر (16)' }, { v: 'djelfa', n: 'الجلفة (17)' }, { v: 'jijel', n: 'جيجل (18)' },
                      { v: 'setif', n: 'سطيف (19)' }, { v: 'saida', n: 'سعيدة (20)' }, { v: 'skikda', n: 'سكيكدة (21)' },
                      { v: 'sidi-bel-abbes', n: 'سيدي بلعباس (22)' }, { v: 'annaba', n: 'عنابة (23)' }, { v: 'guelma', n: 'قالمة (24)' },
                      { v: 'constantine', n: 'قسنطينة (25)' }, { v: 'medea', n: 'المدية (26)' }, { v: 'mostaganem', n: 'مستغانم (27)' },
                      { v: 'msila', n: 'المسيلة (28)' }, { v: 'mascara', n: 'معسكر (29)' }, { v: 'ouargla', n: 'ورقلة (30)' },
                      { v: 'el-bayadh', n: 'البيض (32)' }, { v: 'illizi', n: 'إليزي (33)' }, { v: 'bordj-bou-arreridj', n: 'برج بو عريريج (34)' },
                      { v: 'boumerdes', n: 'بومرداس (35)' }, { v: 'el-taref', n: 'الطارف (36)' }, { v: 'tindouf', n: 'تندوف (37)' },
                      { v: 'tissemsilt', n: 'تيسمسيلت (38)' }, { v: 'el-oued', n: 'الوادي (39)' }, { v: 'khenchela', n: 'خنشلة (40)' },
                      { v: 'souk-ahras', n: 'سوق أهراس (41)' }, { v: 'tipaza', n: 'تيبازة (42)' }, { v: 'mila', n: 'ميلة (43)' },
                      { v: 'ain-defla', n: 'عين الدفلى (44)' }, { v: 'naama', n: 'النعامة (45)' }, { v: 'ain-temouchent', n: 'عين تموشنت (46)' },
                      { v: 'ghardaia', n: 'غرداية (47)' }, { v: 'relizane', n: 'غليزان (48)' }, { v: 'timimoun', n: 'تيميمون (49)' },
                      { v: 'bordj-badji-mokhtar', n: 'برج باجي مختار (50)' }, { v: 'ouled-djellal', n: 'أولاد جلال (51)' }, { v: 'beni-abbes', n: 'بني عباس (52)' },
                      { v: 'in-salah', n: 'إن صالح (53)' }, { v: 'in-guezzam', n: 'إن قزام (54)' }, { v: 'touggourt', n: 'تقرت (55)' },
                      { v: 'djanet', n: 'جانت (56)' }, { v: 'el-mghaier', n: 'المغير (57)' }, { v: 'el-meniaa', n: 'المنيعة (58)' }
                    ].map(w => {
                      const isSupported = ['oran','alger','adrar','chlef','laghouat','oum-el-bouaghi','batna','biskra','bechar','blida'].includes(w.v);
                      return (
                        <option key={w.v} value={w.v} disabled={!isSupported}>{w.n} {!isSupported && '(قريبًا)'}</option>
                      );
                    })}
                  </select>
                </div>
                
                {isLoadingData ? <CalculatorSkeleton /> : (
                <>
                {/* Region */}
                <div>
                  <label htmlFor="region" className="block text-sm font-bold text-gray-700 mb-2">
                    البلدية / المنطقة
                  </label>
                  <select
                    id="region"
                    value={regionId}
                    onChange={handleRegionChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer"
                  >
                    <option value="">-- اختر البلدية --</option>
                    {communes.map((c) => (
                      <option key={c} value={c}>{c}</option>
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
                      <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">
                        طبيعة العقار
                      </label>
                      <select
                        id="category"
                        value={categoryIdx}
                        onChange={handleCategoryChange}
                        disabled={!currentRegionData}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        <option value="">-- اختر طبيعة العقار --</option>
                        {currentRegionData?.prix.map((cat, idx) => (
                          <option key={idx} value={idx}>{t(lang, 'calculator', cat.categorie as CalculatorKeys)}</option>
                        ))}
                      </select>
                    </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className="block text-sm font-bold text-gray-700 mb-2">
                    صنف العقار
                  </label>
                  <select
                    id="type"
                    value={typeIdx}
                    onChange={handleTypeChange}
                    disabled={categoryIdx === ''}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    <option value="">-- اختر الصنف --</option>
                    {selectedCategory?.types.map((type, idx) => (
                      <option key={idx} value={idx}>{t(lang, 'calculator', type.type as CalculatorKeys)}</option>
                    ))}
                  </select>
                </div>

                {/* Zone */}
                <div>
                  <label htmlFor="zone" className="block text-sm font-bold text-gray-700 mb-2">
                    المنطقة العمرانية
                  </label>
                  <select
                    id="zone"
                    value={zoneKey}
                    onChange={(e) => setZoneKey(e.target.value)}
                    disabled={typeIdx === '' || availableZones.length === 0}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    <option value="">-- اختر المنطقة --</option>
                    {availableZones.map((zone) => (
                      <option key={zone} value={zone}>{t(lang, 'calculator', zone as CalculatorKeys)}</option>
                    ))}
                  </select>
                </div>

                {/* Area */}
                {selectedType && (
                  <>
                    <div>
                      <label htmlFor="area" className="block text-sm font-bold text-gray-700 mb-2">
                        {selectedType?.unit === 'DA/Ha' || selectedType?.unit?.includes('Ha') ? 'المساحة (بالهكتار Ha)' : 'المساحة (بالمتر المربع m²)'}
                      </label>
                      <input
                        id="area"
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
                  </>
                )}
                </>
                )}
              </div>

              {/* Result Section */}
              <div className="flex flex-col justify-center transition-all duration-300 ease-in">
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
                          الضريبة على الدخل الإجمالي (IRG) المقدرة ({parseFloat((result.taxRate * 100).toFixed(10))}%):
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
                    {/* Action Bar */}
                    <div className="flex flex-wrap gap-3 mt-8 justify-center no-print" dir="rtl">
                      <button onClick={handleCopy} aria-label="نسخ النتيجة" className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 min-h-[44px]">
                       {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'تم النسخ!' : 'نسخ'}
                      </button>
                      <button onClick={handleWhatsApp} aria-label="مشاركة عبر واتساب" className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 min-h-[44px]">
                        <MessageCircle size={18} />
                        واتساب
                      </button>
                    </div>
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
                <strong>تنبيه هام:</strong> هذه الحاسبة تقدم تقديراً مبدئياً مبنياً على الأسعار المرجعية المعتمدة من طرف المديرية العامة للضرائب لولاية {wilaya === 'oran' ? 'وهران' : 'الولاية المختارة'} (الفترة 2025-2026). الأسعار قابلة للتحديث أو التغيير بناءً على وضعية العقار وخبرة إدارة الضرائب. الأرقام الناتجة هي للاستئناس فقط ولا تتحمل إدارة الموقع أي مسؤولية قانونية عن صحتها النهائية وقت إبرام العقد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
