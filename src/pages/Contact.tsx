import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتكم واستقبال مقترحاتكم. تواصلوا معنا عبر القنوات الرسمية.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-primary">معلومات الاتصال</h2>
                <p className="text-gray-600">يسعدنا تواصلكم معنا خلال أوقات الدوام الرسمي من الأحد إلى الخميس.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary">المقر الرئيسي</h4>
                    <p className="text-gray-600 text-sm">الجمهورية اليمنية - صنعاء - شارع الستين الشمالي</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary">أرقام الهاتف</h4>
                    <p className="text-gray-600 text-sm" dir="ltr">+967 1 234 567</p>
                    <p className="text-gray-600 text-sm" dir="ltr">+967 777 123 456</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary">البريد الإلكتروني</h4>
                    <p className="text-gray-600 text-sm">info@ahlalhadith-ye.org</p>
                    <p className="text-gray-600 text-sm">support@ahlalhadith-ye.org</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary">ساعات العمل</h4>
                    <p className="text-gray-600 text-sm">الأحد - الخميس: 8:00 ص - 2:00 م</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-accent rounded-3xl p-8 md:p-12 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-primary mb-8">أرسل لنا رسالة</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="أدخل اسمك هنا" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="example@mail.com" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">الموضوع</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="ما هو موضوع رسالتك؟" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">الرسالة</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="اكتب تفاصيل رسالتك هنا..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-3">
                      <span>إرسال الرسالة</span>
                      <Send size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="mx-auto text-primary" size={48} />
            <p className="text-gray-500 font-bold">خريطة الموقع التفاعلية ستظهر هنا</p>
          </div>
        </div>
      </section>
    </div>
  );
};
