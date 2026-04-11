'use client';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'ما هو دور الموثق في الجزائر؟',
      answer: 'الموثق هو ضابط عمومي مكلف بالتوثيق، يتم تعيينه بمرسوم رئاسي. دوره الأساسي هو تحرير العقود والاتفاقات التي يرغب الأطراف في إعطائها الصبغة الرسمية، كما يتولى المصادقة على التوقيعات وتلقي الإقرارات والتصريحات.',
    },
    {
      question: 'ما الفرق بين العقد العرفي والعقد الرسمي؟',
      answer: 'العقد الرسمي هو الذي يحرره الموثق ويتمتع بحجة إثبات قوية لا يمكن الطعن فيها إلا بدعوى الزور، بينما العقد العرفي هو الذي يحرره الأطراف بأنفسهم ولا يتمتع بنفس قوة الإثبات. العقد الرسمي موصى به في المعاملات العقارية والتجارية المهمة.',
    },
    {
      question: 'ما هي المدة المتوقعة لتحرير عقد البيع؟',
      answer: 'تختلف المدة حسب تعقيد المعاملة. العقد الابتدائي يمكن تحريره في نفس يوم المراجعة إذا كانت الوثائق كاملة. أما العقد النهائي والسند العقاري فيستغرق عادة من أسبوع إلى شهر حسب إجراءات المحافظة العقارية.',
    },
    {
      question: 'هل يمكنني الحصول على نسخة من العقد الموثق؟',
      answer: 'نعم، يمكن للأطراف الحصول على نسخ رسمية من العقد الموثق. النسخة الأصلية تبقى محفوظة لدى الموثق في الأرشيف الرسمي. يمكن طلب نسخ إضافية في أي وقت من نفس المكتب الذي حرر العقد.',
    },
    {
      question: 'ما هي الرسوم الواجب دفعها عند توثيق عقد؟',
      answer: 'الرسوم محددة وفقاً للتعريفة الرسمية المعمول بها. يتم إعلامكم بالتفاصيل قبل تحرير العقد.',
    },
    {
      question: 'هل يجب حضور جميع الأطراف شخصياً؟',
      answer: 'نعم، في الغالب يجب حضور جميع الأطراف شخصياً للتحقق من هويتهم وإرادتهم. في بعض الحالات الاستثنائية، يمكن التوكيل لشخص آخر بوكالة رسمية موثقة.',
    },
    {
      question: 'ما هي صلاحيات الوكالة العامة؟',
      answer: 'الوكالة العامة تتيح للوكيل القيام بجميع التصرفات القانونية نيابة عن الموكل، مثل إدارة الأموال، البيع والشراء، التقاضي. يمكن تقييد هذه الصلاحيات في الوكالة الخاصة.',
    },
    {
      question: 'كيف يمكنني حجز موعد؟',
      answer: 'يمكنكم حجز موعد عبر الهاتف أو من خلال نموذج التواصل في هذا الموقع. سيتم تأكيد الموعد معكم خلال 24 ساعة. ننصح بالتواصل مسبقاً للاستفسار عن الوثائق المطلوبة.',
    },
  ];

  return (
    <section id="faq" className="py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Info */}
          <div className="lg:col-span-1">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              الأسئلة الشائعة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              هل لديك استفسار؟
            </h2>
            <p className="text-gray-600 mb-6">
              إليك إجابات على الأسئلة الأكثر شيوعاً. إذا لم تجد إجابة سؤالك، 
              لا تتردد في التواصل معنا مباشرة.
            </p>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">لم تجد إجابتك؟</h3>
              <p className="text-emerald-100 mb-6 text-sm">
                فريقنا جاهز للإجابة على جميع استفساراتكم
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+213562296981"
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span dir="ltr">+213 562 29 69 81</span>
                </a>
                <a
                  href="mailto:maitrelattabmohamed@gmail.com"
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>maitrelattabmohamed@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl overflow-hidden transition-all ${
                    openIndex === index ? 'ring-2 ring-emerald-500' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-right"
                  >
                    <span className="font-bold text-gray-800 flex-1">{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-colors ${
                        openIndex === index
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
