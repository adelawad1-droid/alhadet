import React from 'react';
import { motion } from 'framer-motion';
import { User, Book, Mail, ExternalLink } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'أ.د. محمد بن علي اليماني',
    role: 'رئيس الرابطة',
    image: 'https://picsum.photos/seed/m1/400/400',
    bio: 'أستاذ الحديث وعلومه بجامعة صنعاء، له أكثر من 30 مؤلفاً في السنة النبوية وعلومها.',
    category: 'board'
  },
  {
    id: 2,
    name: 'الشيخ صالح بن أحمد العدني',
    role: 'نائب الرئيس',
    image: 'https://picsum.photos/seed/m2/400/400',
    bio: 'داعية وباحث شرعي، متخصص في فقه المعاملات والحديث الشريف.',
    category: 'board'
  },
  {
    id: 3,
    name: 'د. عبدالله بن حسين التعزي',
    role: 'الأمين العام',
    image: 'https://picsum.photos/seed/m3/400/400',
    bio: 'دكتوراه في أصول الدين، مهتم بتحقيق المخطوطات والبحث العلمي.',
    category: 'board'
  },
  {
    id: 4,
    name: 'الشيخ يحيى بن منصور الحضرمي',
    role: 'عضو اللجنة العلمية',
    image: 'https://picsum.photos/seed/m4/400/400',
    bio: 'خريج الجامعة الإسلامية بالمدينة المنورة، مدرس للحديث في عدة مراكز علمية.',
    category: 'scholars'
  },
  {
    id: 5,
    name: 'د. فاطمة بنت محمد الصنعاني',
    role: 'رئيسة القسم النسائي',
    image: 'https://picsum.photos/seed/m5/400/400',
    bio: 'متخصصة في السنة النبوية، لها جهود بارزة في التوعية الأسرية والشرعية.',
    category: 'scholars'
  },
  {
    id: 6,
    name: 'الباحث أحمد بن خالد الإبي',
    role: 'باحث في قسم الدراسات',
    image: 'https://picsum.photos/seed/m6/400/400',
    bio: 'ماجستير في علوم الحديث، مهتم بالدراسات الحديثية المعاصرة.',
    category: 'researchers'
  }
];

export const Members = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">أعضاء الرابطة</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نخبة من علماء ودعاة وباحثي اليمن الذين نذروا أنفسهم لخدمة العلم ونشر السنة.
          </p>
        </div>
      </section>

      {/* Board Section */}
      <section id="board" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">مجلس الإدارة</h2>
            <div className="w-24 h-1.5 bg-secondary rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {members.filter(m => m.category === 'board').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Scholars Section */}
      <section id="scholars" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">العلماء والدعاة</h2>
            <div className="w-24 h-1.5 bg-secondary rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.filter(m => m.category === 'scholars').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section id="researchers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">الباحثون</h2>
            <div className="w-24 h-1.5 bg-secondary rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.filter(m => m.category === 'researchers').map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const MemberCard = ({ member }: { member: any, key?: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
  >
    <div className="p-8 text-center space-y-6">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-primary rounded-full scale-110 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-accent group-hover:border-secondary transition-colors"
        />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-heading font-bold text-primary">{member.name}</h4>
        <p className="text-secondary font-medium text-sm">{member.role}</p>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
        {member.bio}
      </p>
      <div className="pt-4 flex justify-center gap-3">
        <button className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors">
          <User size={18} />
        </button>
        <button className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors">
          <Book size={18} />
        </button>
        <button className="p-2 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transition-colors">
          <Mail size={18} />
        </button>
      </div>
      <button className="w-full py-3 mt-4 bg-accent text-primary font-bold rounded-xl group-hover:bg-secondary group-hover:text-white transition-all flex items-center justify-center gap-2">
        <span>عرض السيرة الذاتية</span>
        <ExternalLink size={16} />
      </button>
    </div>
  </motion.div>
);
