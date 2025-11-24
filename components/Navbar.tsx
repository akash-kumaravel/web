import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/assets/logo.svg" 
            alt="MEMO Softwares" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold uppercase tracking-wide hover:text-[#007BFF] transition-colors relative group ${
                location.pathname === item.path ? 'text-black' : 'text-black'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#007BFF] transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <Link 
             to="/contact"
             className="px-6 py-2 bg-black text-white rounded-full font-bold hover:bg-[#007BFF] hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black hover:text-[#007BFF] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 lg:hidden shadow-xl flex flex-col gap-4 h-screen">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-xl font-bold text-black hover:text-[#007BFF] pl-2 border-l-4 border-transparent hover:border-[#007BFF] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;