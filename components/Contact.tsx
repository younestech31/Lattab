'use client';
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, Building, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'appointment' | 'inquiry'>('appointment');
  
  // Inquiry Form State
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);

  // Appointment Form State
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
    company: ''
  });
  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false);

  const timeSlots = [
    '09:00 صباحاً', '10:00 صباحاً', '11:00 صباحاً',
    '12:00 ظهراً', '01:00 ظهراً', '02:00 ظهراً', '03:00 عصراً'
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `استفسار عام:%0Aالاسم: ${inquiryData.name}%0Aالخدمة: ${inquiryData.service}%0Aالرسالة: ${inquiryData.message}`;
    window.open(`https://wa.me/213562296981?text=${message}`, '_blank');
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentData.time) {
      alert('يرجى اختيار وقت الموعد');
      return;
    }
    const message = `طلب حجز موعد:%0Aالاسم: ${appointmentData.name}%0Aالهاتف: ${appointmentData.phone}%0Aالبريد الإلكتروني: ${appointmentData.email || 'غير متوفر'}%0Aالشركة/المؤسسة: ${appointmentData.company || 'غير متوفر'}%0Aالخدمة: ${appointmentData.service}%0Aالتاريخ: ${appointmentData.date}%0Aالوقت: ${appointmentData.time}%0Aملاحظات: ${appointmentData.notes}`;
    window.open(`https://wa.me/213562296981?text=${message}`, '_blank');
  };

  const services = [
    'عقود البيع والشراء العقارية',
    'عقود الإيجار والتأجير',
    'الوكالات والتفويضات',
    'عقود الزواج والمستندات العائلية',
    'تأسيس الشركات والمؤسسات',
    'الرهن والتأمينات',
    'التصريحات والمصادقات',
    'استشارة قانونية',
    'خدمات أخرى'
  ];

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            احجز موعدك الآن
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            تواصل معنا لحجز موعد أو الاستفسار عن خدماتنا. فريقنا جاهز لمساعدتك.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">العنوان</h3>
                  <p className="text-gray-600 text-sm">
                    <a 
                      href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-emerald-600 transition-colors"
                    >
                      حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768
                      <br />
                      العقيد لطفي، وهران
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">الهاتف</h3>
                  <div className="text-gray-600 text-sm space-y-2" dir="ltr">
                    <div>
                      <a href="tel:+213562296981" className="hover:text-emerald-600 transition-colors font-medium">
                        +213 562 29 69 81
                      </a>
                      <span className="text-gray-400 text-xs ml-2" dir="rtl">(الخاص بالمكتب)</span>
                    </div>
                    <div>
                      <a href="tel:+213558440001" className="hover:text-emerald-600 transition-colors font-medium">
                        +213 558 44 00 01
                      </a>
                      <span className="text-gray-400 text-xs ml-2" dir="rtl">(للدعم خارج أوقات العمل فقط)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:maitrelattabmohamed@gmail.com" className="hover:text-emerald-600 transition-colors">
                      maitrelattabmohamed@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">أوقات العمل</h3>
                  <p className="text-gray-600 text-sm">
                    الأحد - الخميس: 08:30 - 12:00
                    <br />
                    و 13:30 - 16:00
                    <br />
                    الجمعة والسبت: مغلق
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
                <button
                  onClick={() => setActiveTab('appointment')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'appointment'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  حجز موعد
                </button>
                <button
                  onClick={() => setActiveTab('inquiry')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'inquiry'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  استفسار عام
                </button>
              </div>

              {activeTab === 'appointment' ? (
                isAppointmentSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">شكراً لطلبك!</h3>
                    <p className="text-gray-600">
                      تم استلام طلب الحجز بنجاح. سنتواصل معك لتأكيد الموعد.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline w-4 h-4 ml-2" />
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          required
                          value={appointmentData.name}
                          onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="inline w-4 h-4 ml-2" />
                          رقم الهاتف *
                        </label>
                        <input
                          type="tel"
                          required
                          value={appointmentData.phone}
                          onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="05XXXXXXXX"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline w-4 h-4 ml-2" />
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          value={appointmentData.email}
                          onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Building className="inline w-4 h-4 ml-2" />
                          الشركة/المؤسسة (اختياري)
                        </label>
                        <input
                          type="text"
                          value={appointmentData.company}
                          onChange={(e) => setAppointmentData({ ...appointmentData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="اسم الشركة"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          نوع الخدمة المطلوبة *
                        </label>
                        <select
                          required
                          value={appointmentData.service}
                          onChange={(e) => setAppointmentData({ ...appointmentData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                        >
                          <option value="">اختر الخدمة</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="inline w-4 h-4 ml-2" />
                          التاريخ المفضل *
                        </label>
                        <input
                          type="date"
                          required
                          value={appointmentData.date}
                          onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline w-4 h-4 ml-2" />
                        الوقت المفضل *
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((slot, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setAppointmentData({...appointmentData, time: slot})}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                              appointmentData.time === slot 
                                ? 'bg-emerald-600 text-white border-emerald-600' 
                                : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FileText className="inline w-4 h-4 ml-2" />
                        ملاحظات إضافية
                      </label>
                      <textarea
                        rows={3}
                        value={appointmentData.notes}
                        onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                        placeholder="أي معلومات إضافية تريد إضافتها..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      تأكيد حجز الموعد
                    </button>
                  </form>
                )
              ) : (
                isInquirySubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">شكراً لتواصلك معنا!</h3>
                    <p className="text-gray-600">
                      تم استلام استفسارك بنجاح. سنرد عليك في أقرب وقت ممكن.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          required
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الهاتف *
                        </label>
                        <input
                          type="tel"
                          required
                          value={inquiryData.phone}
                          onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="05XXXXXXXX"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          value={inquiryData.email}
                          onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الخدمة المتعلقة بالاستفسار *
                        </label>
                        <select
                          required
                          value={inquiryData.service}
                          onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                        >
                          <option value="">اختر الخدمة</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رسالتك أو استفسارك *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                        placeholder="اكتب رسالتك أو استفسارك هنا..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      إرسال الاستفسار
                    </button>
                  </form>
                )
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-800">موقع المكتب</h3>
            <a 
              href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-5 py-2.5 rounded-xl font-bold transition-colors w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              الفتح في تطبيق الخرائط
            </a>
          </div>
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.938810222046!2d-0.5931358!3d35.7277124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63c19cea6045%3A0x8f3a2767975898bd!2sNOTAIRE%20LATTAB%20MOHAMED!5e0!3m2!1sar!2sdz!4v1712698680000!5m2!1sar!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مكتب الموثق لعطب محمد"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
