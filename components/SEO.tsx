
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  schemas?: any[];
  author?: string;
  lastModified?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://www.memoinfotech.com/assets/Memo-infotech-logo.png',
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  schemas,
  author = 'Akash Kumaravel',
  lastModified,
  image = ogImage
}) => {
  const siteTitle = "Memo InfoTech";
  const siteUrl = "https://www.memoinfotech.com";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  // Comprehensive keyword set for better SEO/AEO coverage
  const defaultKeywords = "IT Company Nagercoil, Web Development Nagercoil, Software Development Nagercoil, Graphic Design Nagercoil, Logo Design Nagercoil, Motion Graphics Nagercoil, Explainer Videos Nagercoil, UI/UX Design Nagercoil, Digital Marketing Nagercoil, Brand Design Nagercoil, Web Design Agency Kanyakumari, Mobile App Development, E-commerce Solutions, Digital Solutions Tamil Nadu, Creative Agency India";

  // Organization schema for GEO optimization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Memo Infotech",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/logo.svg`,
    "description": "A premier software company specializing in web development, graphic design, and digital solutions",
    "telephone": "+91 6374433734",
    "email": "hello@memoinfotech.com",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "name": "Akash Kumaravel"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagercoil",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/Memoinfotech",
      "https://x.com/Memoinfotech",
      "https://www.instagram.com/Memoinfotech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91 6374433734",
      "email": "hello@memoinfotech.com",
      "areaServed": "IN"
    }
  };

  // LocalBusiness schema for GEO optimization
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Memo Infotech",
    "image": `${siteUrl}/assets/logo.svg`,
    "url": siteUrl,
    "telephone": "+91 6374433734",
    "email": "hello@memoinfotech.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagercoil",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629001",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Nagercoil",
      "Kanyakumari",
      "Tamil Nadu",
      "India"
    ],
    "openingHours": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.1833,
      "longitude": 77.4119
    }
  };

  // Combine all schemas
  const allSchemas = schemas ? [organizationSchema, localBusinessSchema, ...schemas] : [organizationSchema, localBusinessSchema];

  return (
    <Helmet>
      {/* Primary SEO Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#007BFF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Last Modified for freshness signals */}
      {lastModified && <meta name="last-modified" content={lastModified} />}

      {/* Language and Region Tags */}
      <meta name="language" content="English" />
      <html lang="en" />

      {/* Geo Tags for GEO Optimization */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Nagercoil" />
      <meta name="geo.position" content="8.1833;77.4119" />
      <meta name="ICBM" content="8.1833, 77.4119" />

      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:site" content="@Memoinfotech" />
      <meta property="twitter:title" content={ogTitle || fullTitle} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />
      {canonical && <meta property="twitter:url" content={canonical} />}

      {/* Verification Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Performance & Security */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data (JSON-LD) - SEO, AEO, GEO Optimized */}
      {allSchemas && allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
