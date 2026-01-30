import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Globe, Smartphone, Server, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { updateSEO, addLocalBusinessSchema } from '../utils/seo';

const ItCompanyInNagercoil: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSEO({
      title: 'IT Company in Nagercoil | Web Development & IT Services Across India – Memo Infotech',
      description:
        'Memo Infotech is a trusted IT company in Nagercoil providing web development, software solutions, and IT services for businesses across India. Get scalable and affordable IT solutions.',
      keywords: 'IT company in Nagercoil, web development services, software development, IT services India, custom software, web design, mobile app development',
      canonicalUrl: 'https://www.memoinfotech.com/it-company-in-nagercoil/',
      ogImage: 'https://www.memoinfotech.com/assets/it-company-nagercoil-og.jpg',
      twitterTitle: 'IT Company in Nagercoil - Web Development & Software Solutions',
      twitterDescription: 'Trusted IT company providing web development, software solutions, and IT services across India. Memo Infotech, based in Nagercoil.'
    });

    addLocalBusinessSchema();

    // Add Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.memoinfotech.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'IT Company in Nagercoil', 'item': 'https://www.memoinfotech.com/it-company-in-nagercoil/' }
      ]
    };
    
    let breadcrumbScript = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script') as HTMLScriptElement;
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbSchema);

    // Add Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Memo Infotech',
      'url': 'https://www.memoinfotech.com',
      'logo': 'https://www.memoinfotech.com/logo.png',
      'description': 'Memo Infotech is an IT company in Nagercoil providing web development, software solutions, and IT services across India.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Nagercoil',
        'addressRegion': 'Tamil Nadu',
        'postalCode': '629001',
        'addressCountry': 'IN'
      },
      'telephone': '+91 6374433734',
      'email': 'hello@memoinfotech.com',
      'sameAs': [
        'https://www.facebook.com/Memoinfotech',
        'https://www.linkedin.com/company/Memoinfotech'
      ]
    };

    let orgScript = document.getElementById('org-schema') as HTMLScriptElement | null;
    if (!orgScript) {
      orgScript = document.createElement('script') as HTMLScriptElement;
      orgScript.id = 'org-schema';
      orgScript.type = 'application/ld+json';
      document.head.appendChild(orgScript);
    }
    orgScript.innerHTML = JSON.stringify(orgSchema);

    // Add FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What services does Memo Infotech provide as an IT company?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Memo Infotech provides comprehensive IT services including web development, custom software development, mobile app development, database solutions, hosting and cloud services, and quality assurance testing for businesses across India.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where is Memo Infotech located?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Memo Infotech is headquartered in Nagercoil, Tamil Nadu, India. We serve clients across India including Chennai, Bangalore, Coimbatore, Hyderabad, Mumbai, Delhi, Pune, and other regions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does Memo Infotech work with startups and small businesses?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, Memo Infotech works with startups, small businesses, and large enterprises. We tailor our IT solutions to meet the specific needs and budget requirements of each client.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What technologies does Memo Infotech use?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We use modern technologies including React, Node.js, Python, PHP, Laravel, MySQL, PostgreSQL, AWS, Docker, JavaScript, and TypeScript to deliver cutting-edge IT solutions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I contact Memo Infotech for a free consultation?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can contact us by calling +91 6374433734, visiting our contact page, or emailing hello@memoinfotech.com. We offer free consultations for all IT service inquiries.'
          }
        }
      ]
    };

    let faqScript = document.getElementById('faq-schema') as HTMLScriptElement | null;
    if (!faqScript) {
      faqScript = document.createElement('script') as HTMLScriptElement;
      faqScript.id = 'faq-schema';
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }
    faqScript.innerHTML = JSON.stringify(faqSchema);

    // Add Service Schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.memoinfotech.com/it-company-in-nagercoil/',
      'name': 'Memo Infotech - IT Company in Nagercoil',
      'description': 'Memo Infotech is a leading IT company in Nagercoil providing web development, software development, mobile app development, and IT consulting services.',
      'image': 'https://www.memoinfotech.com/assets/it-company-nagercoil-og.jpg',
      'url': 'https://www.memoinfotech.com/it-company-in-nagercoil/',
      'telephone': '+91 6374433734',
      'email': 'hello@memoinfotech.com',
      'priceRange': '₹₹₹',
      'areaServed': [
        'Nagercoil', 'Chennai', 'Bangalore', 'Coimbatore', 'Hyderabad', 'Mumbai', 'Delhi', 'Pune', 'India'
      ],
      'serviceType': [
        'Web Development', 'Software Development', 'Mobile App Development', 'IT Consulting', 'Database Solutions', 'Cloud Services', 'QA Testing'
      ]
    };

    let serviceScript = document.getElementById('service-schema') as HTMLScriptElement | null;
    if (!serviceScript) {
      serviceScript = document.createElement('script') as HTMLScriptElement;
      serviceScript.id = 'service-schema';
      serviceScript.type = 'application/ld+json';
      document.head.appendChild(serviceScript);
    }
    serviceScript.innerHTML = JSON.stringify(serviceSchema);
  }, []);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        // Hero Text Animation
        const heroTexts = gsap.utils.toArray('.hero-text');
        gsap.from(heroTexts, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        });

        // Stats Animation
        const stats = gsap.utils.toArray('.stat-item');
        gsap.from(stats, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%'
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom, responsive websites and web applications built with modern technologies',
      features: ['React & Next.js', 'E-commerce Sites', 'Business Websites', 'Web Apps']
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions designed for your specific business needs',
      features: ['ERP Systems', 'CRM Solutions', 'HRMS', 'Custom Platforms']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'App Maintenance']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable database design, optimization, and management services',
      features: ['MySQL', 'PostgreSQL', 'Cloud Databases', 'Data Migration']
    },
    {
      icon: Server,
      title: 'Hosting & Cloud',
      description: 'Reliable hosting and cloud infrastructure for optimal performance',
      features: ['Cloud Hosting', 'Server Management', 'SSL Security', 'CDN Setup']
    },
    {
      icon: Shield,
      title: 'Testing & QA',
      description: 'Comprehensive testing and quality assurance for bug-free software',
      features: ['Manual Testing', 'Automation Testing', 'Performance Testing', 'Security Audit']
    }
  ];

  const cities = ['Chennai', 'Bangalore', 'Coimbatore', 'Hyderabad', 'Mumbai', 'Delhi', 'Pune', 'Kochi'];

  return (
    <div ref={containerRef} className="w-full bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight mb-6 text-black">
                <span className="hero-text">IT Company in</span><br/>
                <span className="hero-text text-white bg-[#007BFF] px-6 inline-block transform -skew-x-12">Nagercoil</span>
              </h1>
              <p className="hero-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Serving businesses across India with world-class web development, software solutions, and IT services. From startups to enterprises, we transform ideas into scalable digital realities.
              </p>
              <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center bg-[#007BFF] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors gap-2">
                  Get Started <ArrowRight size={20} />
                </Link>
                <a href="tel:+916374433734" className="inline-flex items-center justify-center border-2 border-[#007BFF] text-[#007BFF] px-8 py-3 rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-colors">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-gray-50" itemScope itemType="https://schema.org/Service">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] text-black mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to drive your business growth
              </p>
            </div>

            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <article key={index} className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" itemScope itemType="https://schema.org/Service">
                    <div className="w-14 h-14 bg-[#007BFF] rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-black transition-colors">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3" itemProp="name">{service.title}</h3>
                    <p className="text-gray-600 mb-5 leading-relaxed" itemProp="description">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={16} className="text-[#007BFF]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold font-['Syne'] text-black mb-8">Why Choose Memo Infotech</h2>
                <div className="space-y-6">
                  {[
                    'Experienced team with 10+ years of combined expertise',
                    'Affordable and transparent pricing with no hidden costs',
                    'Timely delivery on all projects without compromises',
                    'Latest technologies and industry best practices',
                    'Dedicated support for post-launch success',
                    'Proven track record across startups and enterprises'
                  ].map((reason, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#007BFF] rounded-2xl p-10 text-white">
                <h3 className="text-3xl font-bold mb-6">Nationwide Coverage</h3>
                <p className="mb-6 leading-relaxed">
                  Headquartered in Nagercoil, we proudly serve clients across India with consistent quality and seamless remote collaboration.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {cities.map((city, index) => (
                    <div key={index} className="bg-white/10 px-4 py-2 rounded-lg text-center font-medium">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ItCompanyInNagercoil;
