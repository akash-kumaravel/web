import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.memoinfotech.com';
    const canonicalHref = `${origin}${window.location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
  });

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <div className="bg-white/5">
        <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <span className="font-semibold mr-3">Quick Links:</span>
          <a href="/about/" className="mr-3 hover:underline">About</a>
          <a href="/services/" className="mr-3 hover:underline">Services</a>
          <a href="/projects/" className="mr-3 hover:underline">Projects</a>
          <a href="/academy/" className="mr-3 hover:underline">Academy</a>
          <a href="/blog/" className="mr-3 hover:underline">Blog</a>
          <a href="/contact/" className="mr-3 hover:underline">Contact</a>
        </div>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;