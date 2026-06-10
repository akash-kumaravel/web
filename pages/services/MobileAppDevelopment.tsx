import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Apple, Code, Zap, Gauge, Shield, Rocket, Users, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppDevelopment: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Affordable Android App Development in India | Memo InfoTech';
    const desc = 'Memo InfoTech builds affordable Android, Flutter, and cross-platform mobile apps for startups, small businesses, local shops, and entrepreneurs. App projects start from ₹18,000 based on features.';
    
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

    setOGMeta('og:title', 'Affordable Android App Development in India | Memo InfoTech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/mobile-app-development/');

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
          "name": "Mobile App Development",
          "item": "https://www.memoinfotech.com/services/mobile-app-development/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Affordable Android, Flutter, and cross-platform mobile app development for startups, small businesses, local shops, and entrepreneurs. MVP apps, Firebase/Supabase backends, UI/UX design, app testing, and post-launch support.",
      "provider": {
        "@type": "Organization",
        "name": "Memo Infotech",
        "url": "https://www.memoinfotech.com",
        "logo": "https://www.memoinfotech.com/logo.png",
        "sameAs": ["https://www.facebook.com/Memoinfotech", "https://www.linkedin.com/company/Memoinfotech"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 6374433734",
          "contactType": "Customer Service"
        }
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Nagercoil, Tamil Nadu, India"
      },
      "serviceType": "Mobile App Development",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Android App Development", "priceRange": "From ₹18,000" },
        { "@type": "OfferingDetails", "name": "Flutter App Development", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "MVP App Development for Startups", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Affordable mobile app development agency for Android apps, Flutter apps, MVPs, AI chatbots, and business automation.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "sameAs": ["https://www.facebook.com/Memoinfotech", "https://www.linkedin.com/company/Memoinfotech"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 6374433734",
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
      icon: <Apple size={32} />,
      title: "Startup MVP App Development",
      description: "Budget-friendly app planning, UI screens, APIs, and launch support for startup MVPs and small business app ideas."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Android App Development",
      description: "Android apps for shops, service businesses, booking, billing, delivery, learning, and customer engagement."
    },
    {
      icon: <Code size={32} />,
      title: "Flutter & Cross-Platform Apps",
      description: "Efficient Flutter development for Android-first launches with a clean path to iOS and web expansion."
    },
    {
      icon: <Zap size={32} />,
      title: "Mobile App UI/UX Design",
      description: "Beautiful, intuitive mobile interfaces designed for touch interaction and optimal user experience."
    },
    {
      icon: <Gauge size={32} />,
      title: "App Testing & QA",
      description: "Comprehensive testing across devices, OS versions, and network conditions ensuring app reliability."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "App Maintenance & Updates",
      description: "Ongoing support, bug fixes, feature updates, and performance optimization for long-term success."
    }
  ];


  const features = [
    {
      icon: <Gauge size={32} />,
      title: "High Performance",
      description: "Optimized code and architecture for fast load times and smooth 60 FPS experiences."
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Privacy",
      description: "Industry-standard security practices with encryption, secure storage, and data protection."
    },
    {
      icon: <Rocket size={32} />,
      title: "Offline Functionality",
      description: "Apps work seamlessly even without internet connection with smart data synchronization."
    },
    {
      icon: <Users size={32} />,
      title: "Push Notifications",
      description: "Engaging push notifications and in-app messaging to keep users informed and engaged."
    },
    {
      icon: <Layers size={32} />,
      title: "Platform Integration",
      description: "Seamless integration with device features, APIs, and third-party services."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Analytics Tracking",
      description: "Comprehensive analytics to track user behavior, crashes, and app performance metrics."
    }
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: "Mobile apps open new revenue streams through app store sales, in-app purchases, and engagement."
    },
    {
      title: "Customer Engagement",
      description: "Direct access to customers with push notifications and personalized experiences."
    },
    {
      title: "Brand Loyalty",
      description: "Dedicated mobile apps strengthen brand relationships and improve customer retention."
    },
    {
      title: "Competitive Edge",
      description: "Meet customer expectations and stay ahead of competitors with mobile-first strategies."
    },
    {
      title: "Business Intelligence",
      description: "Rich analytics provide insights into user behavior and business performance."
    },
    {
      title: "Scalability",
      description: "Apps can grow with your business through modular features, reliable backend architecture, and maintainable code."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-20 md:pt-40 pb-12 md:pb-20 container mx-auto px-4 md:px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-4 md:mb-6">
            Affordable Android & Mobile App Development in India
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We build practical Android, Flutter, and cross-platform apps for startups, small businesses, local shops, entrepreneurs, and personal brands. App projects start from ₹18,000 and scale based on features, integrations, design, and maintenance needs.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo InfoTech</strong> is a trusted <strong>mobile app development company in Tamil Nadu</strong>, helping small businesses across India and worldwide launch affordable Android apps, Flutter apps, MVPs, and business automation solutions.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white" aria-label="Affordable App Development Pricing" role="region">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <article className="lg:col-span-2 p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-bold font-['Syne'] text-black mb-4">Android App Projects Start From ₹18,000</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We keep mobile app development simple for small businesses: first we understand your requirements, then we suggest the minimum useful feature set, and only then we estimate the final cost. Pricing depends on screens, backend, login, payment, admin panel, AI features, and maintenance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-semibold text-gray-700">
                <span className="p-4 bg-blue-50 rounded-2xl">Android apps for local businesses</span>
                <span className="p-4 bg-blue-50 rounded-2xl">Flutter MVPs for startups</span>
                <span className="p-4 bg-blue-50 rounded-2xl">Firebase, Supabase & AI integrations</span>
              </div>
            </article>
            <article className="p-8 rounded-3xl bg-black text-white">
              <h3 className="text-2xl font-bold font-['Syne'] mb-4">Best fit for</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Shops and local services</li>
                <li>• Startup MVPs</li>
                <li>• Booking and billing apps</li>
                <li>• Customer support chatbots</li>
                <li>• Internal workflow apps</li>
              </ul>
            </article>
          </div>
        </section>
        {/* ==================== Section 1: App Development Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our App Development Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Mobile App Development Services</h2>
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

        {/* ==================== Section 2: Advanced Mobile Capabilities ====================*/}
        <section className="py-32 bg-black text-white" aria-label="Advanced Mobile Capabilities" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Advanced Mobile Capabilities &amp; Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive app development features that ensure excellence and maximum impact.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <article key={i} className="p-8 bg-[#111] border border-gray-800 rounded-2xl hover:border-[#007BFF] transition-all group">
                  <div className="text-[#007BFF] mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-['Syne'] mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== Section 3: Business Benefits ====================*/}
        <section className="py-32 bg-[#007BFF] text-white" aria-label="Business Benefits" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits of Custom Mobile Apps</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">Discover how mobile apps drive engagement, revenue, and sustainable business growth</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <article key={i} className="p-8 bg-white/10 backdrop-blur border border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                  <CheckCircle2 size={32} className="mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold font-['Syne'] mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== Section 4: Why Choose Us ====================*/}
        <section className="py-32 bg-[#007BFF] text-white" aria-label="Why Choose Us" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] mb-16">Why Choose Memo Infotech for Mobile App Development?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Multi-Platform Expertise</h3>
                    <p className="text-blue-100">Android, Flutter, Firebase, Supabase, PostgreSQL, OpenAI APIs, Gemini APIs, and modern UI/UX workflows.</p>
                  </div>
                </article>
                
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Affordable, Requirement-First Delivery</h3>
                    <p className="text-blue-100">We keep scope practical, cost transparent, and features focused on what your first users actually need.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">App Store Expertise</h3>
                    <p className="text-blue-100">We navigate iOS App Store and Google Play guidelines for smooth approval and monetization.</p>
                  </div>
                </article>
              </div>

              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance &amp; Security</h3>
                    <p className="text-blue-100">Optimized for speed, battery efficiency, and security with industry-standard protection practices.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Post-Launch Support</h3>
                    <p className="text-blue-100">Dedicated support for bug fixes, updates, feature additions, and performance optimization.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
                    <p className="text-blue-100">Beautiful UI design with intuitive UX ensuring high engagement and positive user reviews.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Section 5: CTA ====================*/}
        <section className="py-32 bg-white" aria-label="Call to Action" role="region">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Launch Your Mobile App?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's plan a practical mobile app for your business. Share your idea and we will suggest the right features, timeline, and budget before development starts.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Mobile App Development Project">
                Start Your Project <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== Section 6: Related Services ====================*/}
        <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/services/ui-ux-design" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about UI/UX Design services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
                <p className="text-gray-600 mb-4">Beautiful, intuitive mobile app interfaces designed specifically for iOS and Android platforms.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Development</h3>
                <p className="text-gray-600 mb-4">Enterprise backend systems and APIs to power your mobile applications.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/testing-qa" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Testing & QA services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing &amp; QA</h3>
                <p className="text-gray-600 mb-4">Comprehensive mobile app testing across devices, OS versions, and network conditions.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/hosting-cloud-it" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Hosting & Cloud Services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Hosting &amp; Cloud</h3>
                <p className="text-gray-600 mb-4">Reliable backend infrastructure and cloud services for app scalability and performance.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">App store optimization and marketing to drive downloads and user engagement.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="View all services offered by Memo Infotech">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">All Services</h3>
                <p className="text-gray-600 mb-4">Explore our complete range of digital services and technology solutions.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">View All →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileAppDevelopment;
