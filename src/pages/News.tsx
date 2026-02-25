import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const newsItems = [
  {
    id: 1,
    title: 'انطلاق الدورة العلمية الكبرى في فقه الحديث بجامع الخير',
    date: '20 فبراير 2024',
    category: 'دورات علمية',
    excerpt: 'بدأت صباح اليوم فعاليات الدورة العلمية الكبرى التي تنظمها الرابطة بمشاركة نخبة من كبار العلماء والباحثين...',
    image: 'https://picsum.photos/seed/n1/800/500'
  },
  {
    id: 2,
    title: 'بيان الرابطة حول تعزيز قيم التسامح والوسطية في المجتمع اليمني',
    date: '15 فبراير 2024',
    category: 'بيانات رسمية',
    excerpt: 'أصدرت الأمانة العامة للرابطة بياناً أكدت فيه على ضرورة التمسك بالمنهج الوسطي ونبذ الغلو والتطرف...',
    image: 'https://picsum.photos/seed/n2/800/500'
  },
  {
    id: 3,
    title: 'اختتام مؤتمر السنة النبوية وتحديات العصر الرقمي',
    date: '10 فبراير 2024',
    category: 'مؤتمرات',
    excerpt: 'اختتمت مساء أمس أعمال المؤتمر السنوي الثالث للرابطة والذي ناقش سبل توظيف التكنولوجيا في خدمة السنة...',
    image: 'https://picsum.photos/seed/n3/800/500'
  },
  {
    id: 4,
    title: 'إعلان عن بدء استقبال طلبات العضوية للعام الجديد',
    date: '05 فبراير 2024',
    category: 'إعلانات',
    excerpt: 'تعلن لجنة العضوية عن فتح باب التسجيل للراغبين في الانضمام للرابطة من العلماء والباحثين وطلبة العلم...',
    image: 'https://picsum.photos/seed/n4/800/500'
  }
];

export const News = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">الأخبار والإعلانات</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            تابع آخر أخبار الرابطة، البيانات الرسمية، والفعاليات العلمية والدعوية القادمة.
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {['الكل', 'أخبار الرابطة', 'بيانات رسمية', 'دورات علمية', 'مؤتمرات', 'إعلانات'].map((cat) => (
                <button key={cat} className="px-4 py-2 rounded-full bg-accent text-gray-600 text-sm font-medium hover:bg-primary hover:text-white transition-all">
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="ابحث في الأخبار..." className="w-full pr-10 pl-4 py-2 bg-accent border-none rounded-lg text-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {newsItems.map((news) => (
              <motion.div 
                key={news.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span className="text-secondary">{news.category}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary leading-tight hover:text-secondary cursor-pointer">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>
                  </div>
                  <Link to={`/news/${news.id}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    <span>اقرأ الخبر كاملاً</span>
                    <ChevronLeft size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            {[1, 2, 3].map((p) => (
              <button key={p} className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all",
                p === 1 ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-accent"
              )}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
