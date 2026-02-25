import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Upload, Info, ShieldCheck } from 'lucide-react';

export const Join = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">الانضمام للرابطة</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            كن جزءاً من هذا الصرح العلمي وساهم معنا في خدمة السنة النبوية ونشر العلم الشرعي.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Requirements */}
            <div className="lg:w-1/3 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-primary">شروط العضوية</h2>
                <p className="text-gray-600">نرحب بكل من يجد في نفسه الكفاءة والرغبة الصادقة في خدمة العلم وفق الضوابط التالية:</p>
              </div>
              
              <div className="space-y-6">
                {[
                  'أن يكون المتقدم من أهل السنة والجماعة منهجاً ومعتقداً.',
                  'أن يكون حاصلاً على مؤهل شرعي لا يقل عن البكالوريوس أو ما يعادلها.',
                  'أن يكون مشهوداً له بالاستقامة وحسن السيرة والسلوك.',
                  'الالتزام بالنظام الأساسي للرابطة ولوائحها المنظمة.',
                  'تزكية من عضوين عاملين في الرابطة (للعضوية العاملة).',
                ].map((req, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 font-medium">{req}</p>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20 space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Info size={24} />
                  <h4 className="font-bold">ملاحظة هامة</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  تخضع جميع الطلبات للمراجعة من قبل لجنة العضوية، وسيتم الرد عليكم خلال 15 يوماً عمل من تاريخ تقديم الطلب.
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:w-2/3">
              <div className="bg-accent rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary">نموذج طلب العضوية</h3>
                </div>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">الاسم الكامل (كما في الهوية)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="أدخل اسمك الكامل" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">تاريخ الميلاد</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-right" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">المؤهل العلمي</label>
                      <select className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20 bg-white">
                        <option>بكالوريوس</option>
                        <option>ماجستير</option>
                        <option>دكتوراه</option>
                        <option>إجازة علمية</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">التخصص الدقيق</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="مثال: علوم الحديث" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">رقم الهاتف (واتساب)</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-right" placeholder="00967..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary/20" placeholder="example@mail.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">السيرة الذاتية (PDF)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer bg-white/50">
                      <Upload className="mx-auto text-gray-400 mb-4" size={32} />
                      <p className="text-gray-500 font-medium">اسحب الملف هنا أو اضغط للتحميل</p>
                      <p className="text-gray-400 text-xs mt-2">الحد الأقصى للملف 5 ميجابايت</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary" id="terms" />
                      <label htmlFor="terms" className="text-sm text-gray-600">أتعهد بصحة جميع البيانات المدققة والالتزام بمبادئ الرابطة.</label>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg">
                    تقديم طلب الانضمام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
