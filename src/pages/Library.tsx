import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Book, Video, Headphones, FileText, Download, Play, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

const libraryItems = [
  { id: 1, title: 'شرح صحيح البخاري - كتاب الإيمان', author: 'د. محمد اليماني', type: 'audio', category: 'شروحات', date: '2024' },
  { id: 2, title: 'منهج المحدثين في نقد المتون', author: 'الشيخ صالح العدني', type: 'pdf', category: 'بحوث', date: '2023' },
  { id: 3, title: 'ندوة السنة النبوية وتحديات العصر', author: 'نخبة من العلماء', type: 'video', category: 'ندوات', date: '2024' },
  { id: 4, title: 'تيسير مصطلح الحديث للمبتدئين', author: 'د. عبدالله التعزي', type: 'pdf', category: 'كتب', date: '2022' },
  { id: 5, title: 'فتاوى معاصرة في قضايا الأسرة', author: 'اللجنة العلمية', type: 'audio', category: 'فتاوى', date: '2024' },
  { id: 6, title: 'تحقيق مخطوطة نادرة في العلل', author: 'أحمد الإبي', type: 'pdf', category: 'تحقيقات', date: '2023' },
];

export const Library = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredItems = libraryItems.filter(item => {
    const matchesFilter = filter === 'all' || item.type === filter;
    const matchesSearch = item.title.includes(search) || item.author.includes(search);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 manuscript-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">المكتبة العلمية</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            كنز معرفي يضم آلاف المواد العلمية من كتب وبحوث ومحاضرات صوتية ومرئية.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-[64px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-1/3">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="ابحث عن كتاب، محاضرة، أو شيخ..." 
                className="w-full pr-12 pl-4 py-3 bg-accent border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: 'all', label: 'الكل', icon: Filter },
                { id: 'pdf', label: 'كتب وبحوث', icon: Book },
                { id: 'audio', label: 'صوتيات', icon: Headphones },
                { id: 'video', label: 'مرئيات', icon: Video },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all",
                    filter === item.id 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-accent text-gray-600 hover:bg-gray-200"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={cn(
                      "p-3 rounded-xl",
                      item.type === 'pdf' ? "bg-red-50 text-red-600" :
                      item.type === 'audio' ? "bg-blue-50 text-blue-600" :
                      "bg-green-50 text-green-600"
                    )}>
                      {item.type === 'pdf' ? <FileText size={24} /> :
                       item.type === 'audio' ? <Headphones size={24} /> :
                       <Video size={24} />}
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-accent px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-bold text-primary leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.author}</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{item.date} م</span>
                  <button className="flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                    {item.type === 'pdf' ? (
                      <>
                        <span>تحميل PDF</span>
                        <Download size={18} />
                      </>
                    ) : (
                      <>
                        <span>تشغيل الآن</span>
                        <Play size={18} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">عذراً، لم يتم العثور على نتائج تطابق بحثك.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
