import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Apple, Code, Zap, Gauge, Shield, Rocket, Users, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppDevelopment: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Mobile App Development Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional mobile app development company in Nagercoil, Tamil Nadu, offering iOS, Android, and cross-platform app development with native and hybrid technologies.';
    
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

    setOGMeta('og:title', 'Mobile App Development Company in Nagercoil, Tamil Nadu | Memo Infotech');
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
      "description": "Professional mobile app development for iOS and Android. Native apps with Swift/Kotlin, cross-platform apps with React Native/Flutter. Modern UI/UX, backend integration, app store deployment.",
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
      "serviceType": "Mobile App Development",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "iOS App Development", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Android App Development", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Cross-Platform Apps", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert mobile app development agency specializing in iOS and Android applications.",
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
      icon: <Apple size={32} />,
      title: "iOS App Development",
      description: "Native iOS applications built with Swift, optimized for iPhone, iPad, and Apple ecosystem integration."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Android App Development",
      description: "High-performance Android apps using Kotlin and Java, fully optimized for diverse Android devices."
    },
    {
      icon: <Code size={32} />,
      title: "Cross-Platform Apps",
      description: "Efficient cross-platform development using Flutter and React Native for maximum reach and code reuse."
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

  const caseStudies = [
    {
      title: "Fintech Mobile App",
      client: "Digital Banking Startup",
      challenge: "Need secure, user-friendly mobile banking experience",
      solution: "Built iOS and Android apps with biometric security, real-time transactions, and intuitive UI",
      result: "500K+ downloads, 4.7★ rating, $10M+ transactions processed",
      metrics: ["500K+ Downloads", "4.7★ Rating", "Secure & Fast"]
    },
    {
      title: "Fitness Tracking App",
      client: "Health & Wellness Company",
      challenge: "Complex features requiring optimal performance",
      solution: "Developed cross-platform app with real-time tracking, social features, and wearable integration",
      result: "250K active users, 45% user retention, featured on app stores",
      metrics: ["250K Users", "45% Retention", "App Store Featured"]
    },
    {
      title: "E-Commerce Mobile App",
      client: "Retail Business",
      challenge: "Need mobile sales channel with seamless checkout",
      solution: "Built iOS and Android apps with AR product preview and one-click checkout",
      result: "60% of sales from mobile, 3.8★ rating, $5M annual revenue",
      metrics: ["60% Mobile Sales", "3.8★ Rating", "$5M Revenue"]
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
      description: "Apps grow with your business handling millions of users and complex functionality."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Mobile App Development Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We build powerful mobile applications for iOS, Android, and cross-platform platforms. Native apps with Swift/Kotlin and hybrid apps with React Native/Flutter. Apps users love and businesses profit from.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>mobile app development company in Nagercoil, Tamil Nadu</strong>, delivering native iOS and Android apps to businesses across Kanyakumari district.
            </p>
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
                    <p className="text-blue-100">Native iOS, Android, and cross-platform development with mastery of Swift, Kotlin, React Native, and Flutter.</p>
                  </div>
                </article>
                
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Award-Winning Apps</h3>
                    <p className="text-blue-100">Our apps have been featured on app stores, downloaded millions of times, and earned top ratings.</p>
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
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's build a mobile app that your users will love and your business will thrive with. Our team is ready to discuss your app idea.</p>
            
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

        {/* Related Services */}
        <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/ui-ux-design" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about UI/UX Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Create beautiful app interfaces with professional UI/UX design.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Development</h3>
              <p className="text-gray-600 mb-4">Build robust backend systems for your mobile applications.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Development</h3>
              <p className="text-gray-600 mb-4">Develop web platforms to complement your mobile app ecosystem.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/testing-qa" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Testing & QA">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing & QA</h3>
              <p className="text-gray-600 mb-4">Ensure your app quality with comprehensive testing services.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Launch and grow your app with targeted marketing strategies.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="View all services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">All Services</h3>
              <p className="text-gray-600 mb-4">Explore our complete range of digital services and solutions.</p>
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
