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
  const location = useLocation();

  useEffect(() => {
    const PREFERRED_ORIGIN = 'https://www.memoinfotech.com';
    const origin = PREFERRED_ORIGIN;
    const canonicalHref = `${origin}${window.location.pathname}`;

    // Update canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;

    // Helper to upsert JSON-LD script by id
    const upsertJsonLd = (id: string, obj: any) => {
      let s = document.getElementById(id) as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement('script');
        s.type = 'application/ld+json';
        s.id = id;
        document.head.appendChild(s);
      }
      s.text = JSON.stringify(obj);
    };

    // Organization structured data
    const org = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MEMO InfoTech',
      url: origin,
      logo: `${origin}/assets/memo-infotech-logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/memoinfotech',
        'https://x.com/memoinfotech',
        'https://www.instagram.com/memoinfotech'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91 6374433734',
          contactType: 'customer service',
          areaServed: 'IN'
        }
      ],
      founder: { '@type': 'Person', name: 'Akash Kumaravel' },
      foundingDate: '2022',
      email: 'hello@memoinfotech.com'
    };
    upsertJsonLd('ld-org', org);

    // LocalBusiness schema (helps Maps / local SEO)
    const local = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'MEMO InfoTech',
      image: `${origin}/assets/memo-infotech-logo.png`,
      '@id': `${origin}#company`,
      url: origin,
      telephone: '+91 6374433734',
      email: 'hello@memoinfotech.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nagercoil',
        addressLocality: 'Nagercoil',
        addressRegion: 'Tamil Nadu',
        postalCode: '629001',
        addressCountry: 'IN'
      },
      openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00'
    };
    upsertJsonLd('ld-local', local);

    // WebSite + Sitelinks Searchbox
    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: origin,
      name: 'MEMO InfoTech',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
    upsertJsonLd('ld-web', website);

    // BreadcrumbList — build from pathname
    const parts = window.location.pathname.split('/').filter(Boolean);
    const itemList: Array<any> = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin }
    ];
    let acc = origin;
    parts.forEach((p, i) => {
      acc += `/${p}`;
      const name = decodeURIComponent(p).replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      itemList.push({ '@type': 'ListItem', position: i + 2, name, item: acc });
    });

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: itemList
    };
    upsertJsonLd('ld-breadcrumb', breadcrumb);

    // Keep effect in sync with route changes
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <div className="bg-white/5">
        <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <span className="font-semibold mr-3">Quick Links:</span>
          <a href="https://www.memoinfotech.com/about/" className="mr-3 hover:underline">About</a>
          <a href="https://www.memoinfotech.com/services/" className="mr-3 hover:underline">Services</a>
          <a href="https://www.memoinfotech.com/projects/" className="mr-3 hover:underline">Projects</a>
          <a href="https://www.memoinfotech.com/academy/" className="mr-3 hover:underline">Academy</a>
          <a href="https://www.memoinfotech.com/blog/" className="mr-3 hover:underline">Blog</a>
          <a href="https://www.memoinfotech.com/contact/" className="mr-3 hover:underline">Contact</a>
        </div>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
