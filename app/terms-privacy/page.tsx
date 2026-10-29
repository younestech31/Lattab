import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { Shield, FileText, Scale, Lock, Phone, MapPin, Mail, Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { WORKING_HOURS, SITE_URL } from '@/lib/config';
import PhoneLink from '@/components/ui/PhoneLink';

export const metadata: Metadata = {
  title: { absolute: 'الشروط والأحكام وسياسة الخصوصية — موثق وهران' },
  description: 'تعرف على الشروط والأحكام وسياسة الخصوصية لديوان التوثيق - وهران بوهران: كيفية جمع بياناتك واستخدامها وحمايتها، والتزاماتنا القانونية والمهنية تجاهك كعميل.',
  alternates: {
    canonical: `${SITE_URL}/terms-privacy`,
    languages: {
      'ar-DZ': `${SITE_URL}/terms-privacy`,
      'fr-DZ': `${SITE_URL}/fr/terms-privacy`,
      'x-default': `${SITE_URL}/terms-privacy`,
    },
  },
  openGraph: {
    url: `${SITE_URL}/terms-privacy`,
    title: 'الشروط والأحكام وسياسة الخصوصية — موثق وهران',
    description: 'تعرف على الشروط والأحكام وسياسة الخصوصية لديوان التوثيق - وهران بوهران: كيفية جمع بياناتك واستخدامها وحمايتها.',
    siteName: 'ديوان التوثيق ببلدية وهران',
    locale: 'ar_DZ',
    alternateLocale: ['fr_DZ'],
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.webp`, width: 512, height: 512, alt: 'الشروط والأحكام وسياسة الخصوصية' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الشروط والأحكام وسياسة الخصوصية — موثق وهران',
    description: 'تعرف على الشروط والأحكام وسياسة الخصوصية لديوان التوثيق - وهران بوهران: كيفية جمع بياناتك واستخدامها وحمايتها.',
    images: [`${SITE_URL}/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TermsPrivacyPage = async () => {
  const headerList = await headers();
  const lang = (headerList.get('x-lang') ?? 'ar') as 'ar' | 'fr';
  const isAr = lang === 'ar';

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white pt-32 pb-20 mb-12 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back to Home Button inside Hero */}
          <div className={isAr ? "mb-8 text-right" : "mb-8 text-left"}>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group"
            >
              <svg className={`w-5 h-5 transform ${isAr ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isAr ? "العودة إلى الصفحة الرئيسية" : "Retour à l'accueil"}
            </Link>
          </div>

          <Shield className="w-20 h-20 mx-auto mb-6 text-emerald-400 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
            {isAr ? "الشروط والأحكام وسياسة الخصوصية" : "Conditions d'Utilisation et Politique de Confidentialité"}
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed text-center font-sans">
            {isAr 
              ? "ديوان التوثيق - وهران - نلتزم بالشفافية والسر المهني وحماية بياناتك وفقاً للتشريعات الجزائرية"
              : "Office Notarial de Office Notarial - Oran - Nous nous engageons à la transparence, au secret professionnel et à la protection de vos données conformément à la législation algérienne."
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Institutional & Deontological Legal Banner */}
        <div className="bg-emerald-950 text-emerald-100 border border-emerald-800/80 p-6 rounded-2xl mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2.5 bg-emerald-900 text-emerald-300 rounded-xl flex-shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-800 text-emerald-200 text-xs px-2.5 py-0.5 rounded font-bold">
                  إشعار قانوني وتنظيمي رسمي
                </span>
                <span className="text-emerald-400 text-xs font-mono">المرسوم التنفيذي 08-243 • القانون 06-02</span>
              </div>
              <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
                هذا الموقع ذو طابع إعلامي محض. أتعاب الموثق محددة حصراً بالتعريفة الرسمية المقننة (المرسوم التنفيذي رقم 08-243). لا يمارس المكتب أي إشهار تجاري أو نشاط استقطابي.
              </p>
              <p className="text-emerald-300/90 text-sm leading-relaxed">
                « Ce site a un caractère purement informatif. Les honoraires du notaire sont fixés exclusivement par la tarification officielle (Décret exécutif 08-243). Aucune publicité commerciale n&apos;est pratiquée. »
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-2">إشعار الاستخدام وحماية السرية</h3>
            <p className="text-amber-800 leading-relaxed">
              يُرجى الاطلاع على هذه الضوابط التوثيقية والتنظيمية قبل استخدام المنصة الإدارية لحجز المواعيد. يُعد استخدام هذه البوابة إقراراً بفهم واحترام الطبيعة المؤسسية لديوان التوثيق كجهة عمومية رسمية تخضع للقوانين الجزائرية المنظمة للمهنة والسر المهني.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 md:p-12 space-y-16">
            
            {/* Section 1: Introduction */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">تمهيد والإطار القانوني المنظم</h2>
              </div>
              <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>
                  تُعدّ هذه الوثيقة بياناً تنظيمياً وإجرائياً يحكم استخدام بوابة <strong>الديوان العمومي للتوثيق — الأستاذ لعطب محمد (موثق لدى محكمة فلاوسن بمجلس قضاء وهران)</strong>. تهدف هذه المنصة إلى توفير المعلومات الإجرائية والقانونية للمواطنين وتنظيم الاستقبال الإداري وفقاً لأرفع معايير الانضباط المهني.
                </p>
                <p>
                  يخضع الديوان لإشراف وزارة العدل ورقابة <strong>الغرفة الوطنية للـموثقين</strong> و<strong>الغرفة الجهوية لموثقي ناحية الغرب</strong>، ويلتزم التزاماً صارماً بأحكام:
                </p>
                <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <li><strong>القانون رقم 06-02</strong> المؤرخ في 20 فبراير 2006، المتضمن تنظيم مهنة التوثيق.</li>
                  <li><strong>المرسوم التنفيذي رقم 08-243</strong> المؤرخ في 3 أغسطس 2008، المحدد لأتعاب الموثق الرسمية المقننة.</li>
                  <li><strong>المادة 14 من القانون 06-02 والمادة 301 من قانون العقوبات</strong> المتعلقتين بالسر المهني المطلق.</li>
                  <li><strong>المادة 22 من القانون 06-02</strong> القاضية بالحظر المطلق لممارسة أي نشاط تجاري أو إشهاري أو مضاربة.</li>
                  <li><strong>القانون رقم 18-07</strong> المعدل والمتمم بالقانون 25-11، المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">التعريفات الأساسية</h3>
                <ul className="space-y-4 list-none bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;الديوان العمومي للتوثيق&quot;:</strong> مكتب الضابط العمومي المفوض قانوناً لتحرير العقود وتوثيق المعاملات وإضفاء الصيغة الرسمية والتنفيذية عليها.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;البوابة الإلكترونية&quot;:</strong> الواجهة المعلوماتية المخصصة لتوفير الإرشادات القانونية وتنظيم المواعيد الإدارية.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;المسؤول عن المعالجة&quot;:</strong> ديوان التوثيق بوهران، الملتزم بالسر المهني وضوابط الحماية القانونية للمعطيات.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;الحجز الإداري للموعد&quot;:</strong> تنظيم مسبق لجدول الاستقبال بالمكتب، لا يترتب عنه أي التزام عقدي أو مالي إلا بعد الحضور الشخصي واستيفاء الأركان القانونية.</div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Dedicated Section: Official Regulated Fees & Anti-Commercial Policy */}
            <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
                <div className="p-3 bg-emerald-800 text-white rounded-xl">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">التعريفة الرسمية المقننة والحظر التام للإشهار التجاري</h2>
                  <p className="text-sm text-gray-500 mt-1">تطبيقاً للمرسوم التنفيذي 08-243 والمادة 22 من القانون 06-02</p>
                </div>
              </div>
              <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>1. الأتعاب الرسمية المقننة:</strong> لا تخضع أتعاب الموثق في التشريع الجزائري لقانون العرض والطلب أو المنافسة التجارية، بل هي محددة قانوناً بموجب <strong>المرسوم التنفيذي رقم 08-243</strong> الصادر عن الوزير الأول. يلتزم الديوان بتطبيق هذه التعريفة الرسمية بكل شفافية ودقة دون أي زيادة أو تخفيض أو تمييز.
                </p>
                <p>
                  <strong>2. حظر الدعاية والمضاربة:</strong> عملاً بأحكام <strong>المادة 22 من القانون رقم 06-02</strong>، يُحظر على الموثق ممارسة أي عمل تجاري، مضاربة، أو إشهار ترويجي. يُدار هذا الموقع بصفة معلوماتية توعوية خالصة لمساعدة المواطنين والمهنيين على فهم الإجراءات التوثيقية والوثائق المطلوبة، دون أن يمثل أي دعوة للتعاقد أو منافسة غير مشروعة.
                </p>
                <p>
                  <strong>3. طبيعة حاسبة السعر المرجعي:</strong> تُعد حاسبة السعر المرجعي المتاحة في الموقع أداة تقنية محايدة مستمدة من الجداول الرسمية الصادرة عن المديرية العامة للضرائب (DGI)، وهي مخصصة حصراً لتقدير الأساس الضريبي ونسب التسجيل والشهر العقاري بصورة إرشادية للمواطن، ولا تتضمن أي تقدير لأتعاب تجارية.
                </p>
              </div>
            </section>

            {/* Section 2: Services & Appointments */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">خدمات الحجز الإلكتروني</h2>
              </div>
              <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>
                  الحجز الإلكتروني هو إجراء <strong>تنظيمي وإداري</strong> لتسهيل استقبال العملاء، ولا يُنتج أي أثر قانوني بذاته، ولا يُعدّ توثيقاً لأي عقد حتى يتم الحضور الشخصي واستيفاء الشروط القانونية.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-4 text-lg">الخدمات المتاحة للحجز</h4>
                    <ul className="space-y-3 text-emerald-800 text-sm md:text-base">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> عقود البيع والشراء العقارية</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> عقود الإيجار والتأجير</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> الوكالات والتفويضات</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> عقود الزواج والمستندات العائلية</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> تأسيس الشركات والمؤسسات</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> الرهن والتأمينات</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> التصريحات والمصادقات</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> الاستشارات القانونية</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">التزامات الحضور</h4>
                    <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>الحضور شخصياً قبل الموعد بـ 10 دقائق.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>إحضار جميع الأطراف المعنية بالعقد.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>تقديم وثيقة الهوية الوطنية الأصلية وسارية المفعول.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>إحضار جميع المستندات والوثائق الأصلية المطلوبة لإتمام المعاملة.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">الإلغاء والتعديل</h3>
                <p>
                  خدمة الحجز الإلكتروني عبر المنصة <strong>مجانية تماماً</strong>. يحق للمستخدم إلغاء أو تعديل الموعد بالتواصل معنا هاتفياً أو عبر البريد الإلكتروني قبل الموعد المحدد.
                </p>
              </div>
            </section>

            {/* Section 3: Privacy Policy & Professional Secrecy */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">سياسة الخصوصية، السر المهني وحماية البيانات</h2>
                  <p className="text-sm text-gray-500 mt-1">المادة 14 من القانون 06-02، المادة 301 من قانون العقوبات، والقانون 18-07</p>
                </div>
              </div>
              <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                
                {/* Formal Professional Secrecy Pledge Box */}
                <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-700" />
                    السر المهني القانوني المطلق وتعهد عدم الإفشاء
                  </h4>
                  <p className="text-emerald-900 text-sm md:text-base leading-relaxed m-0">
                    تطبيقاً لأحكام <strong>المادة 14 من القانون رقم 06-02</strong> المتضمن تنظيم مهنة التوثيق، فإن الموثق ومساعديه وجميع مستخدمي الديوان ملزمون التزاماً مطلقاً بالسر المهني عن جميع الوقائع والتصريحات والمعطيات التي يطلعون عليها بحكم وظيفتهم أو بمناسبة ممارستها. وكل إفشاء للسر المهني يعاقب عليه القانون بعقوبات جزائية مشددة طبقاً لأحكام <strong>المادة 301 من قانون العقوبات الجزائري</strong>. يلتزم الديوان بتعهد رسمي وقانوني بعدم إفشاء أو تداول أو استغلال أي بيانات يتم الإدلاء بها.
                  </p>
                </div>

                <p>
                  نلتزم بالامتثال التام لأحكام <strong>القانون رقم 18-07</strong> المعدل والمتمم بالقانون 25-11، المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي. ونعتمد مبدأ التخصيص والحد الأدنى (Minimisation)، حيث لا نجمع سوى البيانات الأساسية الصرفة اللازمة لتنظيم جدول الاستقبال فقط.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. البيانات التي نجمعها وغايتها الحصرية:</h3>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
                  <table className="w-full text-sm md:text-base text-right">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">نوع المعطيات</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">الغرض التنظيمي الحصري</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">بيانات الهوية</td>
                        <td className="px-6 py-4">الاسم الكامل (للتعرف الإداري على صاحب الموعد وضبط جدول الاستقبال بالديوان).</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">بيانات التواصل</td>
                        <td className="px-6 py-4">رقم الهاتف والبريد الإلكتروني (لتأكيد الموعد إدارياً والتنسيق في حال الطوارئ فقط).</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">بيانات الخدمة</td>
                        <td className="px-6 py-4">طبيعة المعاملة المرغوبة وتاريخ الاستقبال (لتحضير قائمة الوثائق المطلوبة إجرائياً).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. ما لا نجمعه إطلاقاً عبر الموقع:</h3>
                <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-2xl mb-8 flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-red-800 m-0 leading-relaxed font-sans">
                      صوناً للسر المهني وحماية للأطراف، يُمنع منعاً باتاً عبر الموقع إدخال أو تحميل أي وثائق ملكية، أو أرقام حسابات مصرفية، أو نصوص وصايا وعقود، أو معطيات شخصية حساسة. تتم كافة الإجراءات المتعلقة بمتن العقود ومستنداتها شخصياً وسرياً داخل مقر ديوان التوثيق حصراً.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. استضافة البيانات وحمايتها تقنياً:</h3>
                <p>
                  تستخدم منصة المواعيد بنية تحتية سحابية مؤمنة (Google Firebase) تقتصر على المعالجة التقنية اللحظية لطلب الحجز. وبموجب موافقتك الصريحة، تُحفظ بيانات الموعد على خوادم محمية بأعلى بروتوكولات التشفير، ولا يُتاح الوصول إليها إلا لموظفي الديوان المكلفين بضبط سجل المواعيد وتحت طائلة السر المهني.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. التعهد بعدم الإفشاء والامتناع عن أي استغلال تجاري:</h3>
                <p>
                  يتعهد ديوان التوثيق تعهداً رسمياً وقاطعاً بعدم بيع أو تأجير أو مشاركة أو تحويل أي من بيانات المستخدمين لأي طرف ثالث أو لأي أغراض دعائية أو تجارية تحت أي ظرف. تقتصر المعالجة حصراً على الغرض الإداري المحدد بطلب الموعد.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. مدة الحفظ وقواعد الإتلاف:</h3>
                <p>
                  تُحفظ بيانات طلب الموعد فقط للفترة الضرورية لتنظيم وتأكيد الحضور. وبمجرد انقضاء الجلسة التوثيقية أو إلغاء الموعد، يتم إتلاف أو أرشفة السجلات الإدارية المؤقتة طبقاً للقواعد والمدد المنصوص عليها في التشريع التوثيقي الوطني وقانون حماية المعطيات الشخصية.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. حقوق المستخدم (الشخص المعني):</h3>
                <p>وفقاً للقانون الجزائري، يحق لك ممارسة الحقوق التالية على بياناتك:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span><strong>الحق في الإعلام والولوج:</strong> يحق لك معرفة البيانات التي نعالجها عنك.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span><strong>الحق في التصحيح:</strong> يحق لك طلب تعديل أي بيانات غير صحيحة.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span><strong>الحق في المسح والإلغاء:</strong> يحق لك طلب سحب بياناتك من قاعدة بيانات الحجز.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span><strong>الحق في التراجع:</strong> التراجع عن موافقتك على معالجة بياناتك إلكترونياً.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. ملفات تعريف الارتباط (Cookies):</h3>
                <p>يستخدم الموقع خدمات استضافة سحابية لغايات تقنية بحتة (تخزين بيانات الحجز). لا يتم استخدام ملفات تعريف الارتباط لأغراض تسويقية أو تتبعية.</p>
              </div>
            </section>

            {/* Section 4: Contact & Official Info */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">التواصل والمعلومات الرسمية</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    لممارسة حقوقك في الوصول إلى بياناتك، تصحيحها، أو حذفها، أو لأي استفسار قانوني، يمكنك التواصل معنا عبر القنوات الرسمية التالية:
                  </p>
                  <div className="space-y-5 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-start gap-4 text-gray-700">
                      <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <a 
                        href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-emerald-600 transition-colors"
                      >
                        حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران
                      </a>
                    </div>
                    <div className="flex items-start gap-4 text-gray-700">
                      <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div dir="ltr" className="font-medium flex flex-col space-y-1">
                        <div>
                          <PhoneLink type="office" className="hover:text-emerald-600 transition-colors" />
                          <span className="text-xs font-normal text-gray-500 ml-2" dir="rtl">(الخاص بالمكتب)</span>
                        </div>
                        <div>
                          <PhoneLink type="support" className="hover:text-emerald-600 transition-colors text-sm text-gray-500" />
                          <span className="text-xs font-normal ml-2" dir="rtl">(للدعم خارج أوقات العمل فقط)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700">
                      <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <a href="mailto:maitrelattabmohamed@gmail.com" className="font-medium hover:text-emerald-600 transition-colors">maitrelattabmohamed@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{WORKING_HOURS.full}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 flex flex-col justify-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-4">إقرار الموافقة الصريحة</h4>
                  <p className="text-emerald-800 leading-relaxed">
                    باستخدامك لهذا الموقع ووضع علامة الموافقة عند إرسال طلب الحجز، فإنك تقر بقراءتك وفهمك التام وموافقتك الصريحة على جميع الشروط والأحكام وسياسة الخصوصية المذكورة أعلاه، بما في ذلك الموافقة على معالجة ونقل بياناتك تقنياً عبر المزود السحابي لغرض تأكيد الموعد.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>الإصدار: 1.2 | تاريخ آخر تحديث: 12/4/2026</p>
          <p className="mt-2 font-medium">جميع الحقوق محفوظة © 2026 - ديوان التوثيق - وهران</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyPage;
