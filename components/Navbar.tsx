import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

const servicesDropdown = [
  { label: 'Web Design & Development', path: '/web-design-development' },
  { label: 'UI/UX Design', path: '/ui-ux-design' },
  { label: 'Mobile App Development', path: '/mobile-app-development' },
  { label: 'Software Development', path: '/software-development' },
  { label: 'Graphic Design & Creative', path: '/graphic-design-services' },
  { label: 'Digital Marketing', path: '/digital-marketing-services' },
  { label: 'E-Commerce Solutions', path: '/e-commerce-solutions' },
  { label: 'Hosting, Cloud & IT', path: '/hosting-cloud-it' },
  { label: 'AI & Automation', path: '/ai-automation' },
  { label: 'Testing & QA', path: '/testing-qa' },
  { label: 'Training & Consulting', path: '/training-consulting' },
  { label: 'Content & Documentation', path: '/content-documentation' },
];

const careerDropdown = [
  { label: 'Career Opportunities', path: '/careers' },
  { label: 'Apply Now', path: '/apply' },
];

const academyDropdown = [
  { label: 'Full Stack Web Development', path: '/academy' },
  { label: 'Frontend Web Development', path: '/academy' },
  { label: 'Data Analytics', path: '/academy' },
  { label: 'Business Intelligence', path: '/academy' },
  { label: 'UI/UX Design Master Course', path: '/academy' },
  { label: 'Python Programming', path: '/academy' },
  { label: 'SQL for Data Careers', path: '/academy' },
  { label: 'Web Designing', path: '/academy' },
  { label: 'Mobile App Development', path: '/academy' },
  { label: 'Digital Marketing Basics', path: '/academy' },
];

const jobDropdown = [
  { label: 'Senior Product Designer', path: '/careers' },
  { label: 'Frontend Engineer (React/WebGL)', path: '/careers' },
  { label: 'Motion Graphics Artist', path: '/careers' },
  { label: 'Project Manager', path: '/careers' },
  { label: 'Brand Strategist', path: '/careers' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const normalize = (p: string) => (p ? p.replace(/\/+$/, '') : '/');
  const PREFERRED_ORIGIN = 'https://www.memoinfotech.com';
  const makeHref = (p: string) => {
    const path = !p || p === '/' ? '/' : p.endsWith('/') ? p : `${p}/`;
    return `${PREFERRED_ORIGIN}${path}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href={makeHref('/')} className="flex items-center gap-2 group">
          <img
            src="https://www.memoinfotech.com/assets/logo.svg"
            alt="MEMO InfoTech"
            className="h-10 md:h-12 w-auto object-contain"
            width={48}
            height={48}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const href = makeHref(item.path);
            const isActive = normalize(location.pathname) === normalize(item.path);
            const hasDropdown = item.label === 'Services' || item.label === 'Academy' || item.label === 'Careers';
            
            let dropdownItems = [];
            if (item.label === 'Services') dropdownItems = servicesDropdown;
            if (item.label === 'Academy') dropdownItems = academyDropdown;
            if (item.label === 'Careers') dropdownItems = jobDropdown;

            const handleMouseEnter = () => {
              if (dropdownTimeout) clearTimeout(dropdownTimeout);
              if (hasDropdown) setActiveDropdown(item.label);
            };

            const handleMouseLeave = () => {
              const timeout = setTimeout(() => {
                setActiveDropdown(null);
              }, 150);
              setDropdownTimeout(timeout);
            };

            return (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={href}
                  className={`text-sm font-bold uppercase tracking-wide hover:text-[#007BFF] transition-colors relative flex items-center gap-1 cursor-pointer ${
                    isActive ? 'text-black' : 'text-black'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {hasDropdown && <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#007BFF] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </a>

                {/* Dropdown Menu */}
                {hasDropdown && dropdownItems.length > 0 && (
                  <div 
                    className={`absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 z-50 ${
                      activeDropdown === item.label ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.path}
                        href={makeHref(dropdownItem.path)}
                        className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-[#007BFF] hover:text-white transition-all duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-gray-50 last:border-b-0"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
           <a
             href={makeHref('/contact')}
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
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 lg:hidden shadow-xl flex flex-col gap-4 max-h-96 overflow-y-auto" id="mobile-menu">
          {navItems.map((item) => {
            const href = makeHref(item.path);
            const hasDropdown = item.label === 'Services' || item.label === 'Academy' || item.label === 'Careers';
            const isDropdownOpen = mobileDropdowns[item.label];
            
            let dropdownItems = [];
            if (item.label === 'Services') dropdownItems = servicesDropdown;
            if (item.label === 'Academy') dropdownItems = [{ label: 'Academy', path: '/academy' }];
            if (item.label === 'Careers') dropdownItems = careerDropdown;

            return (
              <div key={item.path}>
                <div className="flex items-center justify-between">
                  <a
                    href={hasDropdown ? '#' : href}
                    className="text-xl font-bold text-black hover:text-[#007BFF] pl-2 border-l-4 border-transparent hover:border-[#007BFF] transition-all flex-1"
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                        setMobileDropdowns(prev => ({
                          ...prev,
                          [item.label]: !prev[item.label]
                        }));
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                  {hasDropdown && (
                    <button
                      className="ml-2 text-gray-600 hover:text-[#007BFF]"
                      onClick={() => setMobileDropdowns(prev => ({
                        ...prev,
                        [item.label]: !prev[item.label]
                      }))}
                    >
                      <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {hasDropdown && isDropdownOpen && dropdownItems.length > 0 && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-[#007BFF] pl-4">
                    {dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.path}
                        href={makeHref(dropdownItem.path)}
                        className="text-lg font-semibold text-gray-700 hover:text-[#007BFF] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
