import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Search, Share2, Zap, Gauge, Shield, Rocket, Users, Layers, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketingServices: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Digital Marketing Services Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional digital marketing services company in Nagercoil, Tamil Nadu, offering SEO, social media marketing, Google Ads, content marketing, and lead generation.';
    
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) metaDesc.content = desc;
    else { 
      metaDesc = document.createElement('meta'); 
      metaDesc.name = 'description'; 
      metaDesc.content = desc; 
      document.head.appendChild(metaDesc); 
    }

    // OpenGraph Meta Tags (improves CTR in social & search previews)
    const setOGMeta = (prop: string, content: string) => {
      let og = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', prop);
        document.head.appendChild(og);
      }
      og.content = content;
    };

    setOGMeta('og:title', 'Digital Marketing Services Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/digital-marketing-services/');

    // ==================== SEO: Breadcrumb Schema ====================
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.memoinfotech.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.memoinfotech.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Digital Marketing Services",
          "item": "https://www.memoinfotech.com/services/digital-marketing-services/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "description": "Professional digital marketing services including SEO, social media marketing, Google Ads, content marketing, email marketing, and lead generation. ROI-focused strategies.",
      "provider": {
        "@type": "Organization",
        "name": "Memo Infotech",
        "url": "https://www.memoinfotech.com",
        "logo": "https://www.memoinfotech.com/logo.png",
        "sameAs": ["https://www.facebook.com/Memoinfotech", "https://www.linkedin.com/company/Memoinfotech"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "Customer Service"
        }
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Nagercoil, Tamil Nadu, India"
      },
      "serviceType": "Digital Marketing",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Search Engine Optimization (SEO)", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Social Media Marketing", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Google Ads & Paid Campaigns", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert digital marketing agency specializing in SEO, social media marketing, and paid advertising.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "sameAs": ["https://www.facebook.com/Memoinfotech", "https://www.linkedin.com/company/Memoinfotech"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "Customer Service"
      }
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.async = true;
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.async = true;
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.async = true;
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(serviceScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  const services = [
    {
      icon: <Search size={32} />,
      title: "Search Engine Optimization (SEO)",
      description: "Organic search optimization to rank higher on Google and drive qualified traffic to your website."
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Marketing (SMM)",
      description: "Strategic social media campaigns across Facebook, Instagram, LinkedIn, TikTok, and Twitter."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Google Ads & Paid Campaigns",
      description: "High-ROI paid advertising campaigns on Google, Bing, and social media platforms."
    },
    {
      icon: <Zap size={32} />,
      title: "Content Marketing",
      description: "Engaging content strategy including blog posts, videos, infographics, and thought leadership."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Email & WhatsApp Marketing",
      description: "Direct marketing campaigns through email and WhatsApp with personalized messaging."
    },
    {
      icon: <Layers size={32} />,
      title: "Lead Generation & Analytics",
      description: "Targeted campaigns to generate qualified leads and comprehensive analytics tracking."
    }
  ];

  const caseStudies = [
    {
      title: "E-Commerce SEO Campaign",
      client: "Online Retail Business",
      challenge: "Low organic traffic and poor search rankings",
      solution: "Implemented comprehensive SEO strategy, optimized content, built quality backlinks",
      result: "300% increase in organic traffic, ranked #1 for target keywords",
      metrics: ["300% Traffic", "Top Rankings", "$500K Revenue"]
    },
    {
      title: "SaaS Lead Generation",
      client: "B2B Software Company",
      challenge: "Need consistent qualified leads for sales team",
      solution: "Developed multi-channel marketing strategy combining SEO, content, and ads",
      result: "250+ qualified leads/month, 30% conversion rate, $2M pipeline",
      metrics: ["250 Leads/Month", "30% Conversion", "$2M Pipeline"]
    },
    {
      title: "Social Media Growth",
      client: "Consumer Brand",
      challenge: "Growing social presence and engagement",
      solution: "Created content calendar, managed all platforms, ran viral campaigns",
      result: "500K followers across platforms, 50M impressions, 15% engagement rate",
      metrics: ["500K Followers", "50M Impressions", "15% Engagement"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Data-Driven Strategy",
      description: "All campaigns based on analytics, market research, and proven strategies."
    },
    {
      icon: <Shield size={32} />,
      title: "Transparent Reporting",
      description: "Detailed monthly reports with KPIs, metrics, and ROI tracking."
    },
    {
      icon: <Rocket size={32} />,
      title: "Continuous Optimization",
      description: "Regular A/B testing and optimization to improve campaign performance."
    },
    {
      icon: <Users size={32} />,
      title: "Audience Targeting",
      description: "Precise audience targeting to reach the right people at the right time."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Multi-Channel Marketing",
      description: "Integrated campaigns across multiple channels for maximum reach."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth Hacking",
      description: "Innovative strategies to achieve rapid growth and competitive advantage."
    }
  ];

  const benefits = [
    {
      title: "Increased Brand Awareness",
      description: "Reach more potential customers through strategic marketing efforts."
    },
    {
      title: "More Qualified Leads",
      description: "Target the right audience to generate high-quality, sales-ready leads."
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized campaigns that turn visitors into customers and drive sales."
    },
    {
      title: "Better ROI",
      description: "Strategic marketing that delivers measurable results and positive ROI."
    },
    {
      title: "Brand Authority",
      description: "Establish your brand as an industry leader through content and thought leadership."
    },
    {
      title: "Customer Retention",
      description: "Build loyalty and keep customers engaged through ongoing marketing."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Digital Marketing Services Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Elevate your online presence with data-driven marketing strategies. We combine SEO, social media, paid campaigns, and content marketing for maximum reach and ROI.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>digital marketing services company in Nagercoil, Tamil Nadu</strong>, helping businesses across Kanyakumari district grow their online presence and drive customer acquisition.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: Marketing Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Digital Marketing Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <article key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all duration-300 group">
                  <div className="text-[#007BFF] mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-['Syne'] text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      {/* Advanced Features Section */}
      <div className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Marketing Excellence Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive marketing services designed for growth and results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 bg-[#111] border border-gray-800 rounded-2xl hover:border-[#007BFF] transition-all group">
                <div className="text-[#007BFF] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-['Syne'] mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Benefits */}
      <div className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how strategic marketing drives growth and business success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 bg-white/10 backdrop-blur border border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                <CheckCircle2 size={32} className="mb-4" />
                <h3 className="text-xl font-bold font-['Syne'] mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== Section 4: CTA ====================*/}
      <section className="py-32 bg-white" aria-label="Call to Action" role="region">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's create a marketing strategy that drives real growth and measurable results.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Digital Marketing Project">
              Start Your Project <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Beautiful websites that work seamlessly with your marketing strategy.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/graphic-design-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Graphic Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Graphic Design</h3>
              <p className="text-gray-600 mb-4">Stunning visuals and branding to support your marketing campaigns.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/content-documentation" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Content">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Content</h3>
              <p className="text-gray-600 mb-4">Compelling content creation for your marketing strategy.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/ui-ux-design" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about UI/UX Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Optimize user experience for better conversion rates.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/e-commerce-solutions" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about E-Commerce Solutions">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce</h3>
              <p className="text-gray-600 mb-4">Drive sales with integrated e-commerce and marketing.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="View all services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">All Services</h3>
              <p className="text-gray-600 mb-4">Explore our complete range of digital services.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">View All →</span>
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default DigitalMarketingServices;

