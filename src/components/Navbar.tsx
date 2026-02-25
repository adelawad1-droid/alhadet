import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'الرئيسية', path: '/' },
  { 
    name: 'من نحن', 
    path: '/about',
    children: [
      { name: 'التعريف بالرابطة', path: '/about#intro' },
      { name: 'الرؤية والرسالة', path: '/about#vision' },
      { name: 'الأهداف والقيم', path: '/about#goals' },
      { name: 'النظام الأساسي', path: '/about#bylaws' },
    ]
  },
  { 
    name: 'الأعضاء', 
    path: '/members',
    children: [
      { name: 'مجلس الإدارة', path: '/members#board' },
      { name: 'العلماء والدعاة', path: '/members#scholars' },
      { name: 'الباحثون', path: '/members#researchers' },
    ]
  },
  { name: 'الأنشطة', path: '/activities' },
  { name: 'المكتبة', path: '/library' },
  { name: 'الأخبار', path: '/news' },
  { name: 'اتصل بنا', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const shouldShowSolid = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      shouldShowSolid ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xl border-2 border-secondary">
              ر
            </div>
            <div className={cn(
              "flex flex-col",
              shouldShowSolid ? "text-primary" : "text-white"
            )}>
              <span className="font-heading text-lg leading-tight font-bold">رابطة أهل الحديث</span>
              <span className="text-xs opacity-80">بالجمهورية اليمنية</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                    shouldShowSolid ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white",
                    location.pathname === item.path && (shouldShowSolid ? "text-primary bg-primary/5" : "text-white bg-white/10")
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown size={14} />}
                </Link>
                
                {item.children && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <button className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} className={shouldShowSolid ? "text-gray-600" : "text-white"} />
            </button>
            
            <Link 
              to="/join" 
              className="mr-4 px-6 py-2 bg-secondary text-white rounded-md font-medium hover:bg-secondary/90 transition-colors shadow-sm"
            >
              انضم إلينا
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                shouldShowSolid ? "text-gray-700" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[64px] bg-white z-40 transition-transform duration-300 transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-1 overflow-y-auto h-full">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="bg-gray-50 px-4 py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-gray-600 border-b border-gray-200 last:border-0"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6">
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-4 bg-primary text-white rounded-lg font-bold text-lg"
            >
              انضم للرابطة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
