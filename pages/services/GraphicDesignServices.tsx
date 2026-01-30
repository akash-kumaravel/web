import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Palette, Video, Zap, Gauge, Shield, Rocket, Users, Layers, TrendingUp, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicDesignServices: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Graphic Design Services Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional graphic design services company in Nagercoil, Tamil Nadu, offering logo design, branding, social media creatives, and motion graphics.';
    
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

    setOGMeta('og:title', 'Graphic Design Services Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/graphic-design-services/');

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
          "name": "Graphic Design Services",
          "item": "https://www.memoinfotech.com/services/graphic-design-services/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Graphic Design Services",
      "description": "Professional graphic design, logo design, branding, social media creatives, video editing, and motion graphics services. Award-winning creative design solutions.",
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
      "serviceType": "Graphic Design",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Logo Design", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Brand Identity Design", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Motion Graphics & Animation", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert graphic design agency specializing in branding and creative design solutions.",
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
      icon: <Palette size={32} />,
      title: "Logo Design",
      description: "Memorable, professional logos that represent your brand identity and resonate with your target audience."
    },
    {
      icon: <Image size={32} />,
      title: "Brand Identity Design",
      description: "Complete brand guidelines including colors, typography, imagery, and visual language."
    },
    {
      icon: <Zap size={32} />,
      title: "Graphic Design",
      description: "Print and digital graphics including posters, brochures, packaging, and promotional materials."
    },
    {
      icon: <Layers size={32} />,
      title: "Social Media Creatives",
      description: "Engaging social media content, posts, stories, and reels optimized for each platform."
    },
    {
      icon: <Video size={32} />,
      title: "Motion Graphics & Animation",
      description: "Animated videos, motion posters, explainer animations, and video effects."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Video Editing & Thumbnails",
      description: "Professional video editing, YouTube thumbnails, and video production services."
    }
  ];

  const caseStudies = [
    {
      title: "Complete Brand Redesign",
      client: "Tech Startup",
      challenge: "Outdated branding not reflecting growth and innovation",
      solution: "Redesigned logo, created comprehensive brand guidelines, and refreshed all marketing materials",
      result: "20% increase in brand recognition, 35% increase in engagement",
      metrics: ["20% Recognition", "35% Engagement", "New Identity"]
    },
    {
      title: "Social Media Campaign",
      client: "E-Commerce Brand",
      challenge: "Need engaging social content for viral growth",
      solution: "Designed 100+ social graphics and created video content for Instagram, TikTok, and YouTube",
      result: "500% increase in followers, 10M+ impressions in 3 months",
      metrics: ["500% Growth", "10M Impressions", "Viral Content"]
    },
    {
      title: "Video Production Suite",
      client: "SaaS Company",
      challenge: "Need professional explainer and product videos",
      solution: "Produced 5 explainer videos, product demos, and promotional content",
      result: "45% increase in conversions, 1M+ video views",
      metrics: ["45% Conversion", "1M+ Views", "Professional Content"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Creative Excellence",
      description: "Award-winning designers creating visually stunning and effective designs."
    },
    {
      icon: <Shield size={32} />,
      title: "Brand Consistency",
      description: "Ensuring all creative outputs align with your brand guidelines and vision."
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or creative excellence."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Process",
      description: "Working closely with you throughout the creative process to ensure satisfaction."
    },
    {
      icon: <Layers size={32} />,
      title: "Multi-Format Design",
      description: "Designing for print, digital, web, social media, and all modern platforms."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance-Driven",
      description: "Creative designs that not only look great but also drive business results."
    }
  ];

  const benefits = [
    {
      title: "Brand Recognition",
      description: "Stand out from competitors with distinctive, Memorable branding and visuals."
    },
    {
      title: "Increased Engagement",
      description: "Compelling creative content drives higher engagement and customer interaction."
    },
    {
      title: "Professional Image",
      description: "High-quality design elevates your brand perception and professionalism."
    },
    {
      title: "Customer Trust",
      description: "Professional visuals build credibility and trust with your target audience."
    },
    {
      title: "Marketing Effectiveness",
      description: "Well-designed marketing materials improve campaign performance and ROI."
    },
    {
      title: "Long-term Value",
      description: "Timeless designs that remain effective and relevant for years to come."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Graphic Design Services Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We bring your brand story to life through compelling visual content. From logos to animations, we create designs that resonate with your audience and drive results.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>graphic design services company in Nagercoil, Tamil Nadu</strong>, delivering professional branding and creative design solutions to businesses across Kanyakumari district.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: Creative Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Creative Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Graphic Design Services</h2>
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

        {/* ==================== Section 2: Creative Excellence ====================*/}
        <section className="py-32 bg-black text-white" aria-label="Creative Excellence Features" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Design Excellence &amp; Creative Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive creative services that bring your brand vision to life.</p>
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
        </section>

        {/* Business Benefits */}
        <section className="py-32 bg-[#007BFF] text-white" aria-label="Design Benefits" role="region">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how exceptional creative design elevates your brand</p>
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
      </section>

      {/* CTA */}
      <section className="py-32 bg-white" aria-label="Call to Action" role="region">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Create Amazing Visuals?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's bring your creative vision to life with stunning designs and content.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Graphic Design Project">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all" aria-label="View All Services">
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
            <Link to="/services/ui-ux-design" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about UI and UX Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Create cohesive visual brands with professional UI/UX design.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design and Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Bring your designs to life with responsive web development.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing Services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Promote your designs with targeted marketing.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/content-documentation" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Content Documentation">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Content</h3>
              <p className="text-gray-600 mb-4">Compelling content paired with stunning visuals.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/ai-automation" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about AI Automation">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Leverage AI for design optimization and personalization.</p>
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

export default GraphicDesignServices;

