import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl border-2 border-secondary">
                ر
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl leading-tight font-bold">رابطة أهل الحديث</span>
                <span className="text-xs opacity-80">بالجمهورية اليمنية</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              صرح علمي ودعوي يعنى بنشر السنة النبوية المطهرة، وخدمة طلبة العلم، وتعزيز الوعي الشرعي في المجتمع اليمني وفق منهج أهل السنة والجماعة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-secondary font-heading text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">عن الرابطة</Link></li>
              <li><Link to="/members" className="hover:text-white transition-colors">أعضاء الرابطة</Link></li>
              <li><Link to="/activities" className="hover:text-white transition-colors">الأنشطة والفعاليات</Link></li>
              <li><Link to="/library" className="hover:text-white transition-colors">المكتبة العلمية</Link></li>
              <li><Link to="/join" className="hover:text-white transition-colors">طلب الانضمام</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-secondary font-heading text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>الجمهورية اليمنية - صنعاء - شارع الستين</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={20} />
                <span dir="ltr">+967 1 234 567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={20} />
                <span>info@ahlalhadith-ye.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-secondary font-heading text-xl font-bold mb-6">القائمة البريدية</h3>
            <p className="text-gray-300 text-sm mb-4">اشترك معنا ليصلك جديد المحاضرات والكتب والأخبار.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-secondary text-white"
              />
              <button className="bg-secondary text-white py-2 rounded-md font-bold hover:bg-secondary/90 transition-colors">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} رابطة أهل الحديث باليمن</p>
        </div>
      </div>
    </footer>
  );
};
