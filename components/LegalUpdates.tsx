"use client";
import { useState } from 'react';
import { Calendar, FileText, Scale, TrendingUp, X, CheckCircle } from 'lucide-react';

const LegalUpdates = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const updates = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "مرجع أسعار العقار 2025-2026",
      description: "صدور الأسعار المرجعية الجديدة للعقار للأشخاص الطبيعيين والمعنويين، والتي تُعد الأساس لحساب الضرائب ورسوم التسجيل.",
      fullContent: "أعلنت المديرية العامة للضرائب عن صدور الأسعار المرجعية للعقار الصالحة للسنتين 2025 و2026، ونشرت على موقعها الإلكتروني قائمة الأسعار المرجعية الجديدة للعقار الموجهة للأشخاص الطبيعيين والمعنويين الذين يقومون بمعاملات عقارية للأملاك المبنية وغير المبنية. وتتضمن القائمة الأسعار الدنيا والقصوى التي تسمح بتقييم قيمة العقار حسب البلديات وطبيعة الأملاك وحالته وموقعه.\n\nيعتبر السعر المرجعي هو الأساس الذي تُحسب عليه قيمة الضرائب العقارية السنوية ورسوم التسجيل عند نقل الملكية. وهو يُلزم الموثق بعدم تحرير عقود بأثمان تقل عن المرجع المحدد تحت طائلة إعادة التقييم من إدارة الضرائب.",
      date: "أبريل 2026",
      category: "عقاري",
      readTime: "5 دقائق"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "الإعفاء من حقوق نقل الملكية",
      description: "قانون المالية 2026 يقر إعفاء الأشخاص الطبيعيين من حق نقل الملكية للسكنات، مع استثناء المرقين العقاريين.",
      fullContent: "بعد التعديلات التي جاء بها قانون المالية لسنة 2026، أوضحت المديرية العامة للضرائب أن الإعفاء من حق نقل الملكية يخص الأشخاص الطبيعيين فقط (المواطنين) في حدود الحصة التي تعود إليهم من السكن، عند اقتناء سكنات مخصصة أساساً للاستعمال السكني.\n\nوأكدت المراسلة أن المرقي العقاري لا يستفيد من هذا الإعفاء، حيث تبقى حصته خاضعة لحقوق نقل الملكية، مما يفرض عليه دفع الرسوم المستحقة وفق الآجال القانونية المحددة.",
      date: "مارس 2026",
      category: "جبائي",
      readTime: "4 دقائق"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "عقد الكراء التوثيقي والصيغة التنفيذية",
      description: "أهمية العقد الموثق في الإيجار، حيث يحمل الصيغة التنفيذية التي تغني عن الدعاوى القضائية الطويلة لإخلاء المستأجر.",
      fullContent: "العقد العرفي يثبت العلاقة الإيجارية لكنه لا يحمل 'الصيغة التنفيذية'، مما يعني أنك ستحتاج لرفع دعوى قضائية طويلة ومكلفة لإخراج المستأجر، عكس العقد الموثق.\n\nإذا كنت تملك عقداً موثقاً، يمكنك التوجه إلى المحضر القضائي فوراً لتنفيذ الإخلاء بناءً على الصيغة التنفيذية للعقد، دون الحاجة لحكم قضائي جديد (في أغلب الحالات).",
      date: "فبراير 2026",
      category: "إيجار",
      readTime: "3 دقائق"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "قانون الوقاية من تبييض الأموال",
      description: "صدور قانون جديد يزيد من مسؤولية الموثق في التحقق من مصادر الأموال في المعاملات العقارية الكبرى.",
      fullContent: "شهدت سنة 2025 صدور القانون المتعلق بالوقاية من تبييض الأموال وتمويل الإرهاب ومكافحتهما، والذي تضمن تدابير تتعلق بتجميد أو حجز الأموال. وهذا القانون يزيد من مسؤولية الموثق في التحقق من مصادر الأموال في المعاملات العقارية الكبرى.\n\nكما عرفت سنة 2025 صدور قانون الإجراءات الجزائية الجديد الذي يهدف إلى حماية المال العام والاقتصاد الوطني، حيث تضمن أحكاماً جديدة تواكب التطورات التي يعرفها المجتمع.",
      date: "يناير 2026",
      category: "قانوني",
      readTime: "6 دقائق"
    }
  ];

  return (
    <section id="legal-updates" className="py-12 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              آخر التحديثات القانونية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              ابقَ على اطلاع بأحدث التطورات القانونية والتشريعية في الجزائر
            </p>
          </div>
          <button 
            onClick={() => alert('سيتم إضافة صفحة مخصصة لجميع المقالات قريباً.')}
            className="mt-4 md:mt-0 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium"
          >
            عرض جميع المقالات
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {updates.map((update, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-emerald-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    {update.icon}
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {update.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-right">
                  {update.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>{update.date}</span>
                  </div>
                  <div>{update.readTime} قراءة</div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button 
                  onClick={() => setSelectedArticle(update)}
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors flex items-center w-full justify-between"
                >
                  اقرأ المزيد
                  <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    {selectedArticle.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full mb-2 inline-block">
                      {selectedArticle.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1" />
                        <span>{selectedArticle.date}</span>
                      </div>
                      <div>{selectedArticle.readTime} قراءة</div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6 leading-tight">
                {selectedArticle.title}
              </h2>
              
              <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedArticle.fullContent}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LegalUpdates;
