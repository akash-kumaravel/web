/**
 * SEO Utilities for SPA Meta Tag Management
 * Handles dynamic title, description, and canonical URL updates for search engine optimization
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  imageAlt?: string;
}

/**
 * Update document head with SEO metadata
 * @param config - SEO configuration object
 */
export const updateSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  updateMetaTag('name', 'title', config.title);
  updateMetaTag('name', 'description', config.description);
  
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Open Graph tags
  updateMetaTag('property', 'og:title', config.ogTitle || config.title);
  updateMetaTag('property', 'og:description', config.ogDescription || config.description);
  updateMetaTag('property', 'og:url', config.ogUrl || window.location.href);
  
  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
    updateMetaTag('property', 'og:image:alt', config.imageAlt || config.title);
  }

  // Twitter Card tags
  updateMetaTag('property', 'twitter:title', config.twitterTitle || config.title);
  updateMetaTag('property', 'twitter:description', config.twitterDescription || config.description);
  
  if (config.twitterImage) {
    updateMetaTag('property', 'twitter:image', config.twitterImage);
  }

  // Canonical URL
  if (config.canonicalUrl) {
    updateCanonicalURL(config.canonicalUrl);
  }

  // Update structured data for current page
  updatePageStructuredData(config);
};

/**
 * Update or create a meta tag
 */
function updateMetaTag(attr: 'name' | 'property', name: string, content: string) {
  let metaTag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attr, name);
    document.head.appendChild(metaTag);
  }
  
  metaTag.content = content;
}

/**
 * Update canonical URL tag
 */
function updateCanonicalURL(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
}

/**
 * Update page-level structured data (JSON-LD)
 */
function updatePageStructuredData(config: SEOConfig) {
  // Remove old structured data
  const existingScript = document.querySelector('script[type="application/ld+json"][data-seo="page-data"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo', 'page-data');
  script.innerHTML = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.canonicalUrl || window.location.href,
    image: config.ogImage || 'https://www.memoinfotech.com/og-image.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'MEMO InfoTech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.memoinfotech.com/assets/memo-infotech-logo.png'
      }
    }
  });

  document.head.appendChild(script);
}

/**
 * Add breadcrumb schema data
 */
export const addBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.innerHTML = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  });

  document.head.appendChild(breadcrumbScript);
};

/**
 * Add article schema data
 */
export const addArticleSchema = (config: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    image: config.image,
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    author: {
      '@type': 'Person',
      name: config.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'MEMO InfoTech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.memoinfotech.com/assets/memo-infotech-logo.png'
      }
    },
    url: config.url
  });

  document.head.appendChild(script);
};

/**
 * Add Organization LocalBusiness schema for geo-targeting
 */
export const addLocalBusinessSchema = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MEMO InfoTech',
    image: 'https://www.memoinfotech.com/assets/memo-infotech-logo.png',
    description: 'Leading IT company providing web development, graphic design, and digital solutions in Nagercoil',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagercoil',
      addressRegion: 'Tamil Nadu',
      postalCode: '629001',
      addressCountry: 'IN'
    },
    telephone: '+91 6374433734',
    email: 'hello@memoinfotech.com',
    url: 'https://www.memoinfotech.com',
    sameAs: [
      'https://www.linkedin.com/company/memoinfotech',
      'https://x.com/memoinfotech',
      'https://www.instagram.com/memoinfotech'
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '8.1833',
      longitude: '77.4119'
    }
  });

  document.head.appendChild(script);
};
