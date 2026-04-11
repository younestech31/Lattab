import { ShieldCheck, Zap, Award, FileText, MapPin, Smartphone, CheckSquare } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "موثق معتمد من الدولة",
      description: "مكتبنا مرخص ومعتمد من وزارة العدل الجزائرية، مما يضمن صحة وكفاءة جميع المعاملات التوثيقية."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "خدمة سريعة وفورية",
      description: "نقدم خدمات توثيقية سريعة مع إمكانية إنجاز المعاملات في نفس اليوم للخدمات العاجلة."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "خبرة 15+ سنة",
      description: "أكثر من 15 عامًا من الخبرة في مجال التوثيق والقانون، مع آلاف المعاملات الناجحة."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "دقة في التفاصيل",
      description: "نحرص على الدقة القانونية في كل وثيقة، مع مراجعة شاملة لكل التفاصيل قبل التوقيع."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "موقع مركزي",
      description: "مكتبنا يقع في موقع مركزي ومميز في وهران، مع مواقف مجانية للسيارات."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "خدمات إلكترونية",
      description: "نقدم خدمات توثيقية إلكترونية وحجز مواعيد عبر الإنترنت لتسهيل العملية على العملاء."
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "ضمان الجودة",
      description: "نضمن صحة وسلامة جميع الوثائق الموثقة، مع متابعة ما بعد التوثيق إذا لزم الأمر."
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            لماذا تختار مكتبنا للتوثيق؟
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نحن نقدم أكثر من مجرد خدمات توثيقية - نقدم حلولاً قانونية متكاملة مع ضمان الجودة والسرعة والدقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg ml-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-right">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
