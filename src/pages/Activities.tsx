import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, GraduationCap, Video, Camera, FileText, ChevronLeft } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'مؤتمر السنة النبوية وتحديات العصر',
    type: 'مؤتمرات',
    date: 'يناير 2024',
    image: 'https://picsum.photos/seed/a1/800/600',
    desc: 'ناقش المؤتمر أكثر من 40 بحثاً علمياً حول سبل حماية السنة النبوية في الفضاء الرقمي.'
  },
  {
    id: 2,
    title: 'دورة فقه الحديث للمبتدئين',
    type: 'دورات علمية',
    date: 'فبراير 2024',
    image: 'https://picsum.photos/seed/a2/800/600',
    desc: 'دورة مكثفة استمرت لمدة أسبوعين شارك فيها أكثر من 200 طالب علم من مختلف المحافظات.'
  },
  {
    id: 3,
    title: 'ندوة الوسطية في المنهج الدعوي',
    type: 'ندوات',
    date: 'ديسمبر 2023',
    image: 'https://picsum.photos/seed/a3/800/600',
    desc: 'ندوة فكرية استضافت كبار علماء اليمن لمناقشة تعزيز قيم الاعتدال والوسطية.'
  },
  {
    id: 4,
    title: 'الرحلة الدعوية لمحافظة حضرموت',
    type: 'رحلات دعوية',
    date: 'نوفمبر 2023',
    image: 'https://picsum.photos/seed/a4/800/600',
    desc: 'سلسلة من المحاضرات والدروس العلمية في مساجد ومراكز محافظة حضرموت.'
  }
];

export const Activities = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">الأعمال والأنشطة</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            استعرض سجل حافل من الفعاليات العلمية والمؤتمرات والدورات التي تنظمها الرابطة.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'المؤتمرات', icon: Users },
              { name: 'الدورات العلمية', icon: GraduationCap },
              { name: 'الندوات', icon: FileText },
              { name: 'الرحلات الدعوية', icon: Calendar },
              { name: 'التقارير السنوية', icon: FileText },
              { name: 'ألبوم الصور', icon: Camera },
            ].map((cat) => (
              <button key={cat.name} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-accent hover:bg-primary hover:text-white transition-all group">
                <cat.icon size={28} className="text-primary group-hover:text-white" />
                <span className="font-bold text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activities.map((act) => (
              <motion.div 
                key={act.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                  <div className="absolute top-6 right-6 bg-secondary text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                    {act.type}
                  </div>
                </div>
                <div className="p-10 space-y-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <Calendar size={16} />
                    <span>{act.date}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary leading-tight">
                    {act.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {act.desc}
                  </p>
                  <div className="pt-4 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                      <span>عرض التفاصيل والتقارير</span>
                      <ChevronLeft size={20} />
                    </button>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors">
                        <Camera size={18} />
                      </button>
                      <button className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors">
                        <Video size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
