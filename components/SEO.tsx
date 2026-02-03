
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
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://www.memoinfotech.com/assets/Memo-infotech-logo.png', // Default image
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  schemas
}) => {
  const siteTitle = "Memo InfoTech";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  // Default keywords if none provided
  const defaultKeywords = "IT Company Nagercoil, Website Development Nagercoil, Graphic Design Nagercoil, Poster Design Nagercoil, Logo Design Nagercoil, Motion Posters Nagercoil, Explainer Videos Nagercoil, Software Company Nagercoil, Branding Agency Kanyakumari, Digital Marketing Nagercoil";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:title" content={ogTitle || fullTitle} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />
      {canonical && <meta property="twitter:url" content={canonical} />}

      {/* Structured Data (JSON-LD) */}
      {schemas && schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
