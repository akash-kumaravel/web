import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Academy', path: '/academy' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const normalize = (p: string) => (p ? p.replace(/\/+$/, '') : '/');

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
            <img 
              src="/assets/logo.svg" 
              alt="MEMO InfoTech" 
              className="h-10 md:h-12 w-auto object-contain"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const href = item.path === '/' ? '/' : `${item.path}/`;
            const isActive = normalize(location.pathname) === normalize(item.path);
            return (
              <a
                key={item.path}
                href={href}
                className={`text-sm font-bold uppercase tracking-wide hover:text-[#007BFF] transition-colors relative group ${
                  isActive ? 'text-black' : 'text-black'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#007BFF] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </a>
            );
          })}
          <a
             href="/contact/"
             className="px-6 py-2 bg-black text-white rounded-full font-bold hover:bg-[#007BFF] hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black hover:text-[#007BFF] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 lg:hidden shadow-xl flex flex-col gap-4 h-screen" id="mobile-menu">
          {navItems.map((item) => {
            const href = item.path === '/' ? '/' : `${item.path}/`;
            return (
              <a
                key={item.path}
                href={href}
                className="text-xl font-bold text-black hover:text-[#007BFF] pl-2 border-l-4 border-transparent hover:border-[#007BFF] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;