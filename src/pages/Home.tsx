import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Calendar, ChevronLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const stats = [
  { label: 'عضو رسمي', value: '1,250+', icon: Users },
  { label: 'دورة علمية', value: '450+', icon: GraduationCap },
  { label: 'بحث ومؤلف', value: '800+', icon: BookOpen },
  { label: 'فعالية سنوية', value: '120+', icon: Calendar },
];

const latestNews = [
  {
    id: 1,
    title: 'انطلاق الدورة العلمية الكبرى في فقه الحديث',
    date: '20 فبراير 2024',
    category: 'دورات علمية',
    image: 'https://picsum.photos/seed/news1/600/400'
  },
  {
    id: 2,
    title: 'بيان الرابطة حول تعزيز قيم التسامح والوسطية',
    date: '15 فبراير 2024',
    category: 'بيانات رسمية',
    image: 'https://picsum.photos/seed/news2/600/400'
  },
  {
    id: 3,
    title: 'اختتام مؤتمر السنة النبوية وتحديات العصر',
    date: '10 فبراير 2024',
    category: 'مؤتمرات',
    image: 'https://picsum.photos/seed/news3/600/400'
  }
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/yemen/1920/1080" 
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-sm font-medium">الموقع الرسمي للرابطة</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              رابطة أهل الحديث باليمن
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
              صرح علمي شامخ يجمع علماء ودعاة اليمن على منهج الكتاب والسنة، لنشر العلم النافع وخدمة الأمة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join" className="px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg hover:-translate-y-1">
                انضم إلينا الآن
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                تعرف على الرابطة
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="mx-auto text-secondary/40 mb-4" size={40} />
          <p className="text-2xl md:text-3xl font-heading italic text-primary leading-relaxed">
            "نضّر الله امرأً سمع مقالتي فوعاها فأداها كما سمعها"
          </p>
          <p className="text-sm text-gray-500 mt-4">- حديث شريف -</p>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'المكتبة العلمية', path: '/library', color: 'bg-primary' },
              { name: 'الأنشطة الدعوية', path: '/activities', color: 'bg-secondary' },
              { name: 'أخبار الرابطة', path: '/news', color: 'bg-primary' },
              { name: 'تواصل معنا', path: '/contact', color: 'bg-secondary' },
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={cn(
                  "h-32 flex items-center justify-center rounded-xl text-white font-bold text-xl shadow-md hover:scale-105 transition-transform text-center px-4",
                  item.color
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-secondary" size={32} />
                </div>
                <div className="text-4xl font-bold font-heading text-secondary">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* President Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-2xl"></div>
                <img 
                  src="https://picsum.photos/seed/president/600/800" 
                  alt="President" 
                  className="relative z-10 rounded-2xl shadow-xl w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-2">
                <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">كلمة رئيس الرابطة</h2>
                <h3 className="text-4xl font-heading font-bold text-primary">رسالة العلم والأمانة</h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed italic">
                "إن رابطة أهل الحديث باليمن لم تكن يوماً مجرد كيان إداري، بل هي بيت لكل طالب علم وملاذ لكل باحث عن الحق. هدفنا هو جمع الكلمة على التوحيد والسنة، وتقديم العلم الشرعي الصافي بعيداً عن الغلو والتفريط، ليكون منارة هدى لمجتمعنا اليمني العزيز."
              </p>
              <div className="pt-4">
                <p className="font-bold text-primary text-lg">الشيخ د. محمد بن علي اليماني</p>
                <p className="text-gray-500">رئيس رابطة أهل الحديث باليمن</p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                <span>اقرأ المزيد عن الرؤية</span>
                <ChevronLeft size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">الأخبار والإعلانات</h2>
              <h3 className="text-4xl font-heading font-bold text-primary">آخر مستجدات الرابطة</h3>
            </div>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              <span>عرض جميع الأخبار</span>
              <ChevronLeft size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <motion.div 
                key={news.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-400 text-sm">{news.date}</p>
                  <h4 className="text-xl font-heading font-bold text-primary leading-tight hover:text-secondary cursor-pointer">
                    {news.title}
                  </h4>
                  <Link to={`/news/${news.id}`} className="inline-flex items-center gap-2 text-secondary text-sm font-bold">
                    <span>اقرأ التفاصيل</span>
                    <ChevronLeft size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link to="/news" className="inline-flex items-center gap-2 text-primary font-bold">
              <span>عرض جميع الأخبار</span>
              <ChevronLeft size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
