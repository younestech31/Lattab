import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Scale, Lock, Phone, MapPin, Mail, Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { WORKING_HOURS, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'الشروط والأحكام وسياسة الخصوصية',
  description: 'تعرف على الشروط والأحكام وسياسة الخصوصية لمكتب الموثق الأستاذ لعطب محمد بوهران: كيفية جمع بياناتك واستخدامها وحمايتها، والتزاماتنا القانونية والمهنية تجاهك كعميل.',
  alternates: {
    canonical: `${SITE_URL}/terms-privacy`,
  },
  openGraph: {
    url: `${SITE_URL}/terms-privacy`,
    title: 'الشروط والأحكام وسياسة الخصوصية | موثق لعطب - وهران',
    description: 'تعرف على الشروط والأحكام وسياسة الخصوصية لمكتب الموثق الأستاذ لعطب محمد بوهران: كيفية جمع بياناتك واستخدامها وحمايتها.',
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    images: [{ url: `${SITE_URL}/logo.webp`, width: 512, height: 512, alt: 'الشروط والأحكام - موثق لعطب محمد وهران', type: 'image/png' }],
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الشروط والأحكام وسياسة الخصوصية | موثق لعطب - وهران',
    description: 'الشروط والأحكام وسياسة الخصوصية لمكتب الموثق الأستاذ لعطب محمد بوهران.',
    images: [`${SITE_URL}/logo.webp`],
  },
};

const TermsPrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white pt-32 pb-20 mb-12 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back to Home Button inside Hero */}
          <div className="mb-8 text-right">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group"
            >
              <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>

          <Shield className="w-20 h-20 mx-auto mb-6 text-emerald-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">الشروط والأحكام وسياسة الخصوصية</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            مكتب الموثق الأستاذ لعطب محمد - نلتزم بالشفافية والسر المهني وحماية بياناتك وفقاً للتشريعات الجزائرية
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-2">إشعار هام</h3>
            <p className="text-amber-800 leading-relaxed">
              يُرجى قراءة هذه الوثيقة بعناية قبل استخدام المنصة أو حجز موعد. باستخدامك لخدماتنا، فإنك تُقرّ بقراءتك وفهمك وقبولك التام لجميع البنود الواردة أدناه، وتوافق صراحةً على معالجة بياناتك في إطار تقديم الخدمة التوثيقية.
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">تمهيد والإطار العام</h2>
              </div>
              <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>
                  تُعدّ هذه الوثيقة عقداً ملزماً بين المستخدم وموقع <strong>مكتب الموثق الأستاذ لعطب محمد</strong>، وهو منصة إلكترونية تهدف إلى تسهيل وتنظيم حجز المواعيد وتقديم الخدمات التوثيقية المعتمدة في الجمهورية الجزائرية الديمقراطية الشعبية.
                </p>
                <p>
                  يخضع المكتب لرقابة وإشراف <strong>الغرفة الوطنية للموثقين</strong> ويلتزم بجميع الأحكام القانونية المعمول بها، ولا سيما القانون رقم 06-02 المتعلق بمهنة الموثق، والقانون رقم 18-07 المعدل والمتمم بالقانون 25-11 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">التعريفات الأساسية</h3>
                <ul className="space-y-4 list-none bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;المنصة&quot;:</strong> الموقع الإلكتروني لمكتب الموثق الأستاذ لعطب محمد المخصص لتقديم خدمة حجز المواعيد.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;المسؤول عن المعالجة&quot;:</strong> مكتب الموثق الأستاذ لعطب محمد، والذي يحدد غايات ووسائل معالجة بياناتك.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;المستخدم&quot; (الشخص المعني):</strong> كل شخص طبيعي بالغ أو شخص معنوي ممثل قانوناً، يلج إلى المنصة ويستخدم خدماتها.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <div><strong>&quot;الحجز&quot;:</strong> الطلب الإلكتروني لتحديد موعد لدى المكتب في تاريخ وساعة محددين.</div>
                  </li>
                </ul>
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

            {/* Section 3: Privacy Policy */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">سياسة الخصوصية وحماية البيانات</h2>
              </div>
              <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>
                  نلتزم التزاماً كاملاً بحماية خصوصيتك والالتزام بالسر المهني وفقاً للقانون رقم 18-07 (المعدل والمتمم بـ 25-11). نحن نجمع فقط البيانات الضرورية (بمبدأ الملاءمة) لتقديم الخدمة وتسهيل تواصلنا معك.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. البيانات التي نجمعها وغرضها:</h3>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
                  <table className="w-full text-sm md:text-base text-right">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">نوع البيانات</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">الغرض من الجمع</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">بيانات الهوية</td>
                        <td className="px-6 py-4">الاسم الكامل (لتعريف هوية الحاجز وإعداد الملف الأولي).</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">بيانات التواصل</td>
                        <td className="px-6 py-4">رقم الهاتف والبريد الإلكتروني (لتأكيد الحجز والتواصل في حال الطوارئ).</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">بيانات الخدمة</td>
                        <td className="px-6 py-4">نوع الخدمة المطلوبة، التاريخ، واسم الشركة إن وجدت (لتنظيم الجلسة وتحضير المتطلبات).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. ما لا نجمعه إطلاقاً عبر الموقع:</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl mb-8 flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-red-800 m-0">
                      لا نطلب أبداً إدخال محتوى العقود الحساسة، البيانات البنكية، أو أرقام الحسابات، أو المعطيات الحساسة (البيانات الصحية، الجينية، الخ) عبر الموقع الإلكتروني. يتم تقديم هذه المعلومات شخصياً وبشكل سري في المكتب فقط.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. استضافة البيانات ونقلها (هام):</h3>
                <p>
                  لضمان سرعة، استقرار، وأمان خدمة الحجز الإلكتروني، تستخدم منصتنا مزود خدمات سحابية عالمي موثوق (Google Firebase). بموافقتك على سياسة الخصوصية هذه، فإنك توافق صراحةً على نقل وتخزين بيانات الحجز الخاصة بك في خوادم سحابية قد تقع خارج التراب الوطني، وذلك حصرياً لغرض المعالجة التقنية لحجزك.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. أمن وسرية البيانات:</h3>
                <p>
                  تُستخدم بياناتك حصراً لتنظيم المواعيد والتواصل معك. نؤكد أن بياناتك لن تُباع ولن تُشارك مع أي طرف ثالث لأغراض تجارية. يقتصر الوصول إليها على طاقم المكتب الملتزم بالسرية المهنية المطلقة. وتخضع المنصة لتدابير أمنية تقنية لحماية المعطيات من التلف أو الولوج غير المرخص (تطبيقاً للمادة 38 من القانون).
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. مدة حفظ البيانات:</h3>
                <p>
                  يتم الاحتفاظ ببيانات الحجز الإلكتروني فقط للفترة اللازمة لإتمام الموعد وتنظيم جدول المكتب، ليتم بعد ذلك أرشفتها أو مسحها وفقاً لما تقتضيه القوانين المنظمة لمهنة التوثيق.
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
                        <a href="tel:+213562296981" className="hover:text-emerald-600 transition-colors">
                          +213 562 29 69 81 <span className="text-xs font-normal text-gray-500 ml-2" dir="rtl">(الخاص بالمكتب)</span>
                        </a>
                        <a href="tel:+213558440001" className="hover:text-emerald-600 transition-colors text-sm text-gray-500">
                          +213 558 44 00 01 <span className="text-xs font-normal ml-2" dir="rtl">(للدعم خارج أوقات العمل فقط)</span>
                        </a>
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
          <p className="mt-2 font-medium">جميع الحقوق محفوظة © 2026 - مكتب الموثق الأستاذ لعطب محمد</p>
        </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPrivacyPage;
