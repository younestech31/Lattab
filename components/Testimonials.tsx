import { Star, Quote, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  // Realistic reviews representing the Google Maps reviews
  const testimonials = [
    {
      name: "Younes R",
      role: "عميل",
      content: "مكتب ممتاز، تعامل راقي واحترافية عالية في إنجاز المعاملات. أنصح به بشدة.",
      rating: 5,
      date: new Date('2026-03-15T00:00:00Z')
    },
    {
      name: "lattab fethi nedale",
      role: "عميل",
      content: "خدمة سريعة وموثوقة. الأستاذ محمد قمة في التواضع ويشرح لك كل التفاصيل القانونية.",
      rating: 5,
      date: new Date('2026-02-20T00:00:00Z')
    }
  ];

  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "اليوم";
    if (diffInDays === 1) return "منذ يوم واحد";
    return `منذ ${diffInDays} أيام`;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-[#fbbc04] fill-[#fbbc04]' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" opacity="0"/>
              <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" fill="#4285F4"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            آراء عملائنا على Google
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نعتز بثقة عملائنا وتقييماتهم لخدماتنا التوثيقية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"/>
                </svg>
              </div>
              
              <div className="mb-3 flex items-center gap-2">
                {renderStars(testimonial.rating)}
                <span className="text-xs text-gray-500">
                  {testimonial.date instanceof Date ? getRelativeTime(testimonial.date) : testimonial.date}
                </span>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed text-right">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/8ZtRuUTZZdeWg9uK9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-blue-600 px-6 py-3 rounded-full font-medium transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            عرض جميع التقييمات على خرائط جوجل
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
