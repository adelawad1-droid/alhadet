import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Eye, ShieldCheck, Download, Users, GraduationCap, BookOpen } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">من نحن</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            تعرف على تاريخ الرابطة، أهدافها، والقيم التي قامت عليها لخدمة العلم وأهله في اليمن.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">التعريف بالرابطة</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                تأسست رابطة أهل الحديث باليمن لتكون مظلة جامعة للعلماء والدعاة والباحثين المهتمين بعلوم السنة النبوية والحديث الشريف. تسعى الرابطة إلى إحياء المنهج العلمي الأصيل في دراسة السنة وتطبيقاتها المعاصرة، مع التركيز على نشر الوعي الشرعي الصحيح وحماية المجتمع من الأفكار الدخيلة.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                تضم الرابطة نخبة من كبار علماء اليمن المشهود لهم بالرسوخ في العلم والاعتدال في المنهج، وتعمل من خلال لجانها المتخصصة على تنفيذ البرامج العلمية والدعوية والاجتماعية التي تخدم الأمة.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/about1/800/600" 
                alt="About" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                أن نكون المرجع العلمي والدعوي الرائد في علوم السنة النبوية على مستوى اليمن، والمساهم الفعال في بناء مجتمع متمسك بهويته الإسلامية وقيمه الأصيلة.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center">
                <Target className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                نشر العلم الشرعي المؤصل، وخدمة السنة النبوية، وجمع كلمة العلماء، وتربية الأجيال على المنهج الوسطي، من خلال برامج علمية ودعوية متميزة وشراكات مجتمعية فاعلة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals & Values */}
      <section id="goals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">أهدافنا وقيمنا</h2>
            <div className="w-24 h-1.5 bg-secondary rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'نشر السنة', desc: 'نشر الأحاديث الصحيحة وعلومها بين فئات المجتمع المختلفة.', icon: ShieldCheck },
              { title: 'جمع العلماء', desc: 'توحيد جهود العلماء والدعاة في اليمن تحت كلمة واحدة.', icon: Users },
              { title: 'التأصيل العلمي', desc: 'إقامة الدورات والدروس العلمية المؤصلة لطلبة العلم.', icon: GraduationCap },
              { title: 'مواجهة الغلو', desc: 'حماية المجتمع من أفكار الغلو والتطرف والبدع.', icon: ShieldCheck },
              { title: 'البحث العلمي', desc: 'تشجيع البحوث والدراسات المتعلقة بالسنة النبوية.', icon: BookOpen },
              { title: 'الخدمة المجتمعية', desc: 'المساهمة في حل المشكلات الاجتماعية من منظور شرعي.', icon: Users },
            ].map((goal, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl hover:bg-accent transition-colors">
                <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                  <goal.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary text-lg">{goal.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bylaws */}
      <section id="bylaws" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold">النظام الأساسي للرابطة</h2>
              <p className="text-gray-300 text-lg">يمكنكم تحميل النسخة الكاملة من النظام الأساسي واللوائح المنظمة لعمل الرابطة بصيغة PDF.</p>
            </div>
            <button className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg shrink-0">
              <Download size={24} />
              <span>تحميل النظام الأساسي</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
