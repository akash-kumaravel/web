import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#007BFF] text-white pt-20 pb-10 rounded-t-[3rem] mt-12 relative overflow-hidden">
       {/* Decorative background circle */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <div className="bg-white p-3 rounded-xl inline-block">
                <img
                  src="https://www.memoinfotech.com/assets/logo.svg"
                  alt="MEMO InfoTech"
                  className="h-10 w-auto object-contain"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <p className="font-medium mb-6 text-blue-50">
              MEMO InfoTech is a leading Software Company. We build robust software, stunning websites, and digital strategies that drive growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/memoinfotech?igsh=NjJ4bGoyMXA0bGI1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-[#007BFF] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110" aria-label="MEMO InfoTech Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/memoinfotech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-[#007BFF] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110" aria-label="MEMO InfoTech Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/memoinfotech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-[#007BFF] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110" aria-label="MEMO InfoTech LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 font-medium text-white">
              <li><Link to="/about" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Careers</Link></li>
              <li><Link to="/projects" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Contact</Link></li>
              <li><Link to="/academy" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Academy</Link></li>
              <li><Link to="/it-company-in-nagercoil" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">IT Company in Nagercoil</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 font-medium text-white">
              <li><Link to="/web-design-development" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Web Design & Development</Link></li>
              <li><Link to="/ui-ux-design" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">UI/UX Design</Link></li>
              <li><Link to="/mobile-app-development" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Mobile Apps</Link></li>
              <li><Link to="/software-development" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Software Development</Link></li>
              <li><Link to="/digital-marketing-services" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-gray-100 hover:underline decoration-2 underline-offset-4">View All Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Get in Touch</h3>
            <p className="font-medium mb-2 text-white">hello@memoinfotech.com</p>
            <p className="font-medium mb-2 text-white">+91 6374433734</p>
            <p className="font-medium text-blue-50">Nagercoil, Tamil Nadu 629001, India</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center font-semibold text-sm text-blue-100">
            <p>© 2024 MEMO InfoTech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
