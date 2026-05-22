'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { t, Language } from '@/lib/i18n/translations';
import { Calculator, Copy, MessageCircle, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { CalculatorResult } from '@/lib/types';
import { CalculatorKeys } from '@/lib/i18n/translations';

const uiTranslations = {
  ar: {
    saleMode: 'بيع العقار',
    rentMode: 'إيجار العقار',
    wilaya: 'الولاية',
    region: 'البلدية / المنطقة',
    chooseRegion: '-- اختر البلدية --',
    category: 'طبيعة العقار',
    chooseCategory: '-- اختر طبيعة العقار --',
    subType: 'صنف العقار',
    chooseSubType: '-- اختر الصنف --',
    urbanZone: 'المنطقة العمرانية',
    chooseUrbanZone: '-- اختر المنطقة --',
    areaSq: 'المساحة (بالمتر المربع m²)',
    areaHa: 'المساحة (بالهكتار Ha)',
    areaPlaceholder: 'أدخل المساحة',
    resultTitle: 'النتيجة التقريبية',
    rateLabel: 'السعر للمتر المرجعي:',
    rentRateLabel: 'مبلغ الإيجار المرجعي للمتر:',
    declarationLabel: 'إجمالي التصريح المرجعي:',
    rentTotalLabel: 'إجمالي مبلغ الإيجار الشهري المرجعي:',
    irgLabel: 'الضريبة على الدخل الإجمالي (IRG) المقدرة',
    minLimit: 'الحد الأدنى',
    maxLimit: 'الحد الأقصى',
    irgNote: '* هذه الضريبة تُدفع شهرياً أو سنوياً حسب الحالة.',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    whatsapp: 'واتساب',
    placeholderText: 'يرجى ملء جميع الحقول أعلاه لإظهار السعر المرجعي التقريبي',
    warningTitle: 'تنبيه هام:',
    warningText: 'هذه الحاسبة تقدم تقديراً مبدئياً مبنياً على الأسعار المرجعية المعتمدة من طرف المديرية العامة للضرائب لمختلف الولايات (الفترة 2012-2026). الأسعار قابلة للتحديث أو التغيير بناءً على وضعية العقار وخبرة إدارة الضرائب. الأرقام الناتجة هي للاستئناس فقط ولا تتحمل إدارة الموقع أي مسؤولية قانونية عن صحتها النهائية وقت إبرام العقد.',
    notSupportedMessage: 'بيانات هذه البلدية قيد التحديث وسيتم إضافتها قريباً. يرجى اختيار بلدية أخرى أو المحاولة لاحقاً.'
  },
  fr: {
    saleMode: 'Vente immobilière',
    rentMode: 'Location immobilière',
    wilaya: 'Wilaya',
    region: 'Commune / Secteur',
    chooseRegion: '-- Choisir la commune --',
    category: 'Nature du bien',
    chooseCategory: '-- Choisir la nature du bien --',
    subType: 'Catégorie du bien',
    chooseSubType: '-- Choisir la catégorie --',
    urbanZone: 'Zone urbaine / Situation',
    chooseUrbanZone: '-- Choisir la zone --',
    areaSq: 'Superficie (en mètre carré m²)',
    areaHa: 'Superficie (en Hectare Ha)',
    areaPlaceholder: 'Entrez la superficie',
    resultTitle: 'Estimation Approximative',
    rateLabel: 'Prix de référence par m² :',
    rentRateLabel: 'Loyer de référence par m² :',
    declarationLabel: 'Valeur totale réglementaire estimée :',
    rentTotalLabel: 'Loyer mensuel total réglementaire estimé :',
    irgLabel: 'Impôt sur le Revenu Global (IRG) estimé',
    minLimit: 'Limite min',
    maxLimit: 'Limite max',
    irgNote: '* Cet impôt est payé mensuellement ou annuellement selon le cas.',
    copy: 'Copier',
    copied: 'Copié !',
    whatsapp: 'WhatsApp',
    placeholderText: 'Veuillez remplir tous les champs ci-dessus pour afficher l\'estimation du prix de référence',
    warningTitle: 'Avis important :',
    warningText: 'Ce calculateur fournit une estimation basée sur les prix de référence approuvés par la Direction Générale des Impôts (période 2012-2026). Les prix sont susceptibles d\'être mis à jour ou modifiés en fonction de la situation réelle du bien. Les chiffres obtenus sont indicatifs, et le cabinet n\'assume aucune responsabilité quant à leur exactitude finale lors de la conclusion du contrat.',
    notSupportedMessage: 'Les données de cette commune sont en cours de mise à jour. Veuillez sélectionner une autre commune.'
  }
};

interface PriceCalculatorProps {
  initialData: CalculatorResult | null;
  initialCommunes: string[];
  initialRegionId: string;
  lang?: Language;
}

export default function PriceCalculator({ initialData, initialCommunes, initialRegionId, lang: propLang }: PriceCalculatorProps) {
  const { lang: contextLang } = useLang();
  const lang = propLang ?? contextLang;
  const isAr = lang === 'ar';
  const ui = uiTranslations[lang];
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
  const cache = useRef<Record<string, { data: CalculatorResult | null; communes: string[]; regionId?: string }>>({});
  
  useEffect(() => {
    const cacheKey = `${wilaya}-${calculationMode}-${regionId}`;
    if (cache.current[cacheKey]) {
      const cached = cache.current[cacheKey];
      setMappedData(cached.data);
      setCommunes(cached.communes);
      if (cached.regionId && cached.regionId !== regionId) {
        setRegionId(cached.regionId);
      }
      return;
    }
    
    // If we have initial data and we haven't tried to fetch yet, we can skip the first fetch
    if (!hasInitialized.current && initialData && initialRegionId) {
        hasInitialized.current = true;
        cache.current[`${wilaya}-${calculationMode}-${regionId}`] = {
          data: initialData,
          communes: initialCommunes,
          regionId: initialRegionId
        };
        return;
    }
    
    const fetchApiData = async () => {
      const supportedWilayas = ['oran','alger','adrar','chlef','laghouat','oum-el-bouaghi','batna','bejaia','biskra','bechar','blida','bouira','tamanrasset','tebessa','tiaret','tlemcen'];
      if (!supportedWilayas.includes(wilaya)) {
        setMappedData(null);
        setCommunes([]);
        return;
      }
      setIsLoadingData(true);
      try {
        const response = await fetch(`/api/calculator-data?wilaya=${wilaya}&mode=${calculationMode}&region=${encodeURIComponent(regionId)}`);
        const result = await response.json();
        
        // Cache the result
        cache.current[cacheKey] = {
          data: result.data,
          communes: result.communes,
          regionId: result.regionId
        };
        if (result.regionId && result.regionId !== regionId) {
          cache.current[`${wilaya}-${calculationMode}-${result.regionId}`] = {
            data: result.data,
            communes: result.communes,
            regionId: result.regionId
          };
        }
        
        setMappedData(result.data);
        setCommunes(result.communes);
        if (result.regionId && result.regionId !== regionId) {
          setRegionId(result.regionId);
        }
      } catch (err: unknown) {
        console.error('Failed to fetch data', err);
      } finally {
        setIsLoadingData(false);
        hasInitialized.current = true;
      }
    };
    fetchApiData();
  }, [wilaya, calculationMode, regionId, initialData, initialCommunes, initialRegionId]);
  
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
    const unitLabel = selectedType?.unit === 'DA/Ha' || selectedType?.unit?.includes('Ha') ? (isAr ? 'هكتار' : 'Ha') : (isAr ? 'م²' : 'm²');
    
    let textToCopy = isAr 
      ? `السعر المرجعي في ${regionId}:\nمن ${result.min.toLocaleString()} إلى ${result.max.toLocaleString()} د.ج/${unitLabel}`
      : `Prix de référence à ${regionId} :\nDe ${result.min.toLocaleString()} à ${result.max.toLocaleString()} DZD/${unitLabel}`;
      
    if (area && Number(area) > 0) {
      textToCopy += isAr 
        ? `\nالمساحة: ${area} ${unitLabel}`
        : `\nSuperficie : ${area} ${unitLabel}`;
        
      textToCopy += isAr
        ? `\nالسعر الإجمالي المقدر: من ${result.totalMin.toLocaleString()} إلى ${result.totalMax.toLocaleString()} د.ج`
        : `\nValeur totale estimée : De ${result.totalMin.toLocaleString()} à ${result.totalMax.toLocaleString()} DZD`;
    }
    
    textToCopy += isAr 
      ? `\n(حاسبة مكتب الأستاذ لعطب محمد — lattab.vercel.app)`
      : `\n(Calculateur de l'Office Notarial de Maître Lattab Mohamed — lattab.vercel.app)`;
      
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

  const OFFICE_WHATSAPP = '213562296981';

  const handleWhatsApp = () => {
    if (!result) return;
    const unitLabel = selectedType?.unit === 'DA/Ha' || selectedType?.unit?.includes('Ha') ? (isAr ? 'هكتار' : 'Ha') : (isAr ? 'م²' : 'm²');
    
    let textToShare = isAr
      ? `السلام عليكم، قمت بحساب السعر المرجعي لعقاري (${regionId}) على موقعكم:\nالسعر للمتر المربع: من ${result.min.toLocaleString()} إلى ${result.max.toLocaleString()} د.ج/${unitLabel}`
      : `Bonjour, j'ai calculé le prix de référence de mon bien (${regionId}) sur votre site :\nPrix unitaire : De ${result.min.toLocaleString()} à ${result.max.toLocaleString()} DZD/${unitLabel}`;
      
    if (area && Number(area) > 0) {
      textToShare += isAr
        ? `\nالمساحة: ${area} ${unitLabel}`
        : `\nSuperficie : ${area} ${unitLabel}`;
        
      textToShare += isAr
        ? `\nالسعر الإجمالي المقدر: من ${result.totalMin.toLocaleString()} إلى ${result.totalMax.toLocaleString()} د.ج`
        : `\nValeur totale estimée : De ${result.totalMin.toLocaleString()} à ${result.totalMax.toLocaleString()} DZD`;
    }
    
    textToShare += isAr
      ? `\nأود الاستفسار أكثر.`
      : `\nJe souhaite avoir plus d'informations.`;
      
    window.open(`https://wa.me/${OFFICE_WHATSAPP}?text=${encodeURIComponent(textToShare)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-white to-emerald-50" dir={isAr ? 'rtl' : 'ltr'}>
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
                {ui.saleMode}
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
                {ui.rentMode}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                {/* Wilaya Option */}
                <div>
                  <label htmlFor="wilaya" className="block text-sm font-bold text-gray-700 mb-2">
                    {ui.wilaya}
                  </label>
                  <select
                    id="wilaya"
                    value={wilaya}
                    onChange={handleWilayaChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer"
                  >
                    <option value="oran">{isAr ? 'وهران (31)' : 'Oran (31)'}</option>
                    {[
                      { v: 'adrar', n: isAr ? 'أدرار (01)' : 'Adrar (01)' }, 
                      { v: 'chlef', n: isAr ? 'الشلف (02)' : 'Chlef (02)' }, 
                      { v: 'laghouat', n: isAr ? 'الأغواط (03)' : 'Laghouat (03)' },
                      { v: 'oum-el-bouaghi', n: isAr ? 'أم البواقي (04)' : 'Oum El Bouaghi (04)' }, 
                      { v: 'batna', n: isAr ? 'باتنة (05)' : 'Batna (05)' }, 
                      { v: 'bejaia', n: isAr ? 'بجاية (06)' : 'Béjaïa (06)' },
                      { v: 'biskra', n: isAr ? 'بسكرة (07)' : 'Biskra (07)' }, 
                      { v: 'bechar', n: isAr ? 'بشار (08)' : 'Béchar (08)' }, 
                      { v: 'blida', n: isAr ? 'البليدة (09)' : 'Blida (09)' },
                      { v: 'bouira', n: isAr ? 'البويرة (10)' : 'Bouira (10)' }, 
                      { v: 'tamanrasset', n: isAr ? 'تمنراست (11)' : 'Tamanrasset (11)' }, 
                      { v: 'tebessa', n: isAr ? 'تبسة (12)' : 'Tébessa (12)' },
                      { v: 'tlemcen', n: isAr ? 'تلمسان (13)' : 'Tlemcen (13)' }, 
                      { v: 'tiaret', n: isAr ? 'تيارت (14)' : 'Tiaret (14)' }, 
                      { v: 'tizi-ouzou', n: isAr ? 'تيزي وزو (15)' : 'Tizi Ouzou (15)' },
                      { v: 'alger', n: isAr ? 'الجزائر (16)' : 'Alger (16)' }, 
                      { v: 'djelfa', n: isAr ? 'الجلفة (17)' : 'Djelfa (17)' }, 
                      { v: 'jijel', n: isAr ? 'جيجل (18)' : 'Jijel (18)' },
                      { v: 'setif', n: isAr ? 'سطيف (19)' : 'Sétif (19)' }, 
                      { v: 'saida', n: isAr ? 'سعيدة (20)' : 'Saïda (20)' }, 
                      { v: 'skikda', n: isAr ? 'سكيكدة (21)' : 'Skikda (21)' },
                      { v: 'sidi-bel-abbes', n: isAr ? 'سيدي بلعباس (22)' : 'Sidi Bel Abbès (22)' }, 
                      { v: 'annaba', n: isAr ? 'عنابة (23)' : 'Annaba (23)' }, 
                      { v: 'guelma', n: isAr ? 'قالمة (24)' : 'Guelma (24)' },
                      { v: 'constantine', n: isAr ? 'قسنطينة (25)' : 'Constantine (25)' }, 
                      { v: 'medea', n: isAr ? 'المدية (26)' : 'Médéa (26)' }, 
                      { v: 'mostaganem', n: isAr ? 'مستغانم (27)' : 'Mostaganem (27)' },
                      { v: 'msila', n: isAr ? 'المسيلة (28)' : 'M\'Sila (28)' }, 
                      { v: 'mascara', n: isAr ? 'معسكر (29)' : 'Mascara (29)' }, 
                      { v: 'ouargla', n: isAr ? 'ورقلة (30)' : 'Ouargla (30)' },
                      { v: 'el-bayadh', n: isAr ? 'البيض (32)' : 'El Bayadh (32)' }, 
                      { v: 'illizi', n: isAr ? 'إليزي (33)' : 'Illizi (33)' }, 
                      { v: 'bordj-bou-arreridj', n: isAr ? 'برج بو عريريج (34)' : 'Bordj Bou Arreridj (34)' },
                      { v: 'boumerdes', n: isAr ? 'بومرداس (35)' : 'Boumerdès (35)' }, 
                      { v: 'el-taref', n: isAr ? 'الطارف (36)' : 'El Tarf (36)' }, 
                      { v: 'tindouf', n: isAr ? 'تندوف (37)' : 'Tindouf (37)' },
                      { v: 'tissemsilt', n: isAr ? 'تيسمسيلت (38)' : 'Tissemsilt (38)' }, 
                      { v: 'el-oued', n: isAr ? 'الوادي (39)' : 'El Oued (39)' }, 
                      { v: 'khenchela', n: isAr ? 'خنشلة (40)' : 'Khenchela (40)' },
                      { v: 'souk-ahras', n: isAr ? 'سوق أهراس (41)' : 'Souk Ahras (41)' }, 
                      { v: 'tipaza', n: isAr ? 'تيبازة (42)' : 'Tipaza (42)' }, 
                      { v: 'mila', n: isAr ? 'ميلة (43)' : 'Mila (43)' },
                      { v: 'ain-defla', n: isAr ? 'عين الدفلى (44)' : 'Aïn Defla (44)' }, 
                      { v: 'naama', n: isAr ? 'النعامة (45)' : 'Naâma (45)' }, 
                      { v: 'ain-temouchent', n: isAr ? 'عين تموشنت (46)' : 'Aïn Témouchent (46)' },
                      { v: 'ghardaia', n: isAr ? 'غرداية (47)' : 'Ghardaïa (47)' }, 
                      { v: 'relizane', n: isAr ? 'غليزان (48)' : 'Relizane (48)' }, 
                      { v: 'timimoun', n: isAr ? 'تيميمون (49)' : 'Timimoun (49)' },
                      { v: 'bordj-badji-mokhtar', n: isAr ? 'برج باجي مختار (50)' : 'Bordj Badji Mokhtar (50)' }, 
                      { v: 'ouled-djellal', n: isAr ? 'أولاد جلال (51)' : 'Ouled Djellal (51)' }, 
                      { v: 'beni-abbes', n: isAr ? 'بني عباس (52)' : 'Béni Abbès (52)' },
                      { v: 'in-salah', n: isAr ? 'إن صالح (53)' : 'In Salah (53)' }, 
                      { v: 'in-guezzam', n: isAr ? 'إن قزام (54)' : 'In Guezzam (54)' }, 
                      { v: 'touggourt', n: isAr ? 'تقرت (55)' : 'Touggourt (55)' },
                      { v: 'djanet', n: isAr ? 'جانت (56)' : 'Djanet (56)' }, 
                      { v: 'el-mghaier', n: isAr ? 'المغير (57)' : 'El M\'Ghair (57)' }, 
                      { v: 'el-meniaa', n: isAr ? 'المنيعة (58)' : 'El Meniaâ (58)' }
                    ].map(w => {
                      const supportedWilayas = ['oran', 'adrar', 'chlef', 'laghouat', 'oum-el-bouaghi', 'batna', 'bejaia', 'biskra', 'bechar', 'blida', 'bouira', 'tamanrasset', 'tebessa', 'tiaret', 'tlemcen'];
                      const isSupported = supportedWilayas.includes(w.v);
                      return (
                        <option key={w.v} value={w.v} disabled={!isSupported} aria-disabled={!isSupported}>
                          {w.n} {!isSupported && (isAr ? '(قريبًا)' : '(Bientôt)')}
                        </option>
                      );
                    })}
                  </select>
                </div>
                
                <div className="relative">
                  {/* Region */}
                  <div>
                    <label htmlFor="region" className="block text-sm font-bold text-gray-700 mb-2">
                      {ui.region}
                    </label>
                    <div className="relative">
                      <select
                        id="region"
                        value={regionId}
                        onChange={handleRegionChange}
                        disabled={wilaya === ''}
                        aria-disabled={wilaya === ''}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed pr-10"
                      >
                        <option value="">{ui.chooseRegion}</option>
                        {communes.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      {isLoadingData && (
                        <div className={`absolute flex items-center top-1/2 -translate-y-1/2 ${isAr ? 'left-4' : 'right-4'}`}>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-emerald-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {!currentRegionData && regionId !== '' && !isLoadingData ? (
                  <div className="p-4 bg-amber-50 text-amber-700 rounded-xl mt-4 border border-amber-200 text-sm">
                    {ui.notSupportedMessage}
                  </div>
                ) : (
                  <div className="space-y-6 relative min-h-[100px]">
                    {isLoadingData && (
                      <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center rounded-xl py-6">
                        <div className="space-y-3 text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto" />
                          <p className="text-xs text-emerald-600 font-semibold">{isAr ? 'جاري تحميل البيانات...' : 'Chargement...'}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Category */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">
                        {ui.category}
                      </label>
                      <select
                        id="category"
                        value={categoryIdx}
                        onChange={handleCategoryChange}
                        disabled={!currentRegionData || regionId === '' || isLoadingData}
                        aria-disabled={!currentRegionData || regionId === '' || isLoadingData}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        <option value="">{ui.chooseCategory}</option>
                        {currentRegionData?.prix.map((cat, idx) => (
                          <option key={idx} value={idx}>{t(lang, 'calculator', cat.categorie as CalculatorKeys)}</option>
                        ))}
                      </select>
                    </div>

                    {/* Type */}
                    <div>
                      <label htmlFor="type" className="block text-sm font-bold text-gray-700 mb-2">
                        {ui.subType}
                      </label>
                      <select
                        id="type"
                        value={typeIdx}
                        onChange={handleTypeChange}
                        disabled={categoryIdx === '' || isLoadingData}
                        aria-disabled={categoryIdx === '' || isLoadingData}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        <option value="">{ui.chooseSubType}</option>
                        {selectedCategory?.types.map((type, idx) => (
                          <option key={idx} value={idx}>{t(lang, 'calculator', type.type as CalculatorKeys)}</option>
                        ))}
                      </select>
                    </div>

                    {/* Zone */}
                    <div>
                      <label htmlFor="zone" className="block text-sm font-bold text-gray-700 mb-2">
                        {ui.urbanZone}
                      </label>
                      <select
                        id="zone"
                        value={zoneKey}
                        onChange={(e) => setZoneKey(e.target.value)}
                        disabled={typeIdx === '' || availableZones.length === 0 || isLoadingData}
                        aria-disabled={typeIdx === '' || availableZones.length === 0 || isLoadingData}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        <option value="">{ui.chooseUrbanZone}</option>
                        {availableZones.map((zone) => (
                          <option key={zone} value={zone}>{t(lang, 'calculator', zone as CalculatorKeys)}</option>
                        ))}
                      </select>
                    </div>

                    {/* Area */}
                    {selectedType && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        <label htmlFor="area" className="block text-sm font-bold text-gray-700 mb-2">
                          {selectedType?.unit === 'DA/Ha' || selectedType?.unit?.includes('Ha') ? ui.areaHa : ui.areaSq}
                        </label>
                        <input
                          id="area"
                          type="number"
                          value={area}
                          onChange={(e) => setArea(e.target.value === '' ? '' : Number(e.target.value))}
                          placeholder={ui.areaPlaceholder}
                          disabled={zoneKey === '' || isLoadingData}
                          aria-disabled={zoneKey === '' || isLoadingData}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 hover:bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                        />
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Result Section */}
              <div className="flex flex-col justify-center transition-all duration-300 ease-in min-h-[400px]">
                <AnimatePresence mode="wait">
                  {result ? (
                    <motion.div 
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="p-8 bg-emerald-600 rounded-2xl text-white text-center shadow-lg h-full flex flex-col justify-center"
                    >
                    <h4 className="text-xl font-bold mb-6 text-emerald-50">{ui.resultTitle}</h4>
                    
                    <div className="mb-6 bg-emerald-700/30 rounded-xl p-4">
                      <p className="text-sm text-emerald-100 mb-2">
                        {calculationMode === 'sale' ? ui.rateLabel : ui.rentRateLabel}
                      </p>
                      <p className="font-medium text-lg">
                        {isAr ? (
                          <>من <span className="font-bold text-amber-300">{result.min.toLocaleString()}</span> إلى <span className="font-bold text-amber-300">{result.max.toLocaleString()}</span> د.ج</>
                        ) : (
                          <>De <span className="font-bold text-amber-300">{result.min.toLocaleString()}</span> à <span className="font-bold text-amber-300">{result.max.toLocaleString()}</span> DZD</>
                        )}
                      </p>
                    </div>

                    <div className="bg-emerald-800/40 rounded-xl p-6 border border-emerald-500/30">
                      <p className="text-emerald-100 font-medium mb-3">
                        {calculationMode === 'sale' ? ui.declarationLabel : ui.rentTotalLabel}
                      </p>
                      <div className="space-y-2" dir="ltr">
                        <p className="text-2xl md:text-3xl font-bold text-white">
                          {formatter.format(result.totalMin)}
                        </p>
                        <p className="text-emerald-300 text-sm font-medium">{isAr ? 'إلى' : 'à'}</p>
                        <p className="text-2xl md:text-3xl font-bold text-white">
                          {formatter.format(result.totalMax)}
                        </p>
                      </div>
                    </div>

                    {calculationMode === 'rent' && result.taxRate > 0 && (
                      <div className="mt-6 pt-6 border-t border-emerald-500/30">
                        <p className="text-emerald-100 text-sm mb-3">
                          {ui.irgLabel} ({parseFloat((result.taxRate * 100).toFixed(10))}%):
                        </p>
                        <div className="grid grid-cols-2 gap-4" dir="ltr">
                          <div className="bg-emerald-900/40 rounded-lg p-3">
                            <p className="text-xs text-emerald-300 mb-1">{ui.minLimit}</p>
                            <p className="font-bold text-white">{formatter.format(result.totalMin * result.taxRate)}</p>
                          </div>
                          <div className="bg-emerald-900/40 rounded-lg p-3">
                            <p className="text-xs text-emerald-300 mb-1">{ui.maxLimit}</p>
                            <p className="font-bold text-white">{formatter.format(result.totalMax * result.taxRate)}</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-emerald-200 mt-3 text-right" dir={isAr ? 'rtl' : 'ltr'}>
                          {ui.irgNote}
                        </p>
                      </div>
                    )}
                    {/* Action Bar */}
                    <div className="flex flex-wrap gap-3 mt-8 justify-center no-print" dir={isAr ? 'rtl' : 'ltr'}>
                      <button onClick={handleCopy} aria-label={ui.copy} className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 min-h-[44px]">
                       {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? ui.copied : ui.copy}
                      </button>
                      <button onClick={handleWhatsApp} aria-label={ui.whatsapp} className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 min-h-[44px]">
                        <MessageCircle size={18} />
                        {ui.whatsapp}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[300px] border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-gray-50/50"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <p className="text-gray-500 font-medium">
                      {ui.placeholderText}
                    </p>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl flex gap-4 items-start">
              <div className="text-amber-500 flex-shrink-0 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>{ui.warningTitle}</strong> {ui.warningText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
