import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Palette, Smartphone, Zap, Eye, Gauge, Shield, Rocket, Users, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const UIUXDesign: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'UI/UX Design Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional UI/UX design company in Nagercoil, Tamil Nadu, delivering user-centered design, interface design, and conversion-focused digital experiences.';
    
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

    setOGMeta('og:title', 'UI/UX Design Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/ui-ux-design/');

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
          "name": "UI/UX Design",
          "item": "https://www.memoinfotech.com/services/ui-ux-design/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UI/UX Design",
      "description": "Professional UI/UX design services including user experience research, interface design, prototyping, design systems, and accessibility design.",
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
      "serviceType": "UI/UX Design",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "UX Research & Strategy", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "UI Design & Systems", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Prototyping & Testing", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert UI/UX design agency specializing in user experience design, interface design, and conversion-focused digital solutions.",
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
      icon: <Eye size={32} />,
      title: "User Experience Design",
      description: "Comprehensive UX strategy and research to understand user needs, behaviors, and create seamless digital journeys."
    },
    {
      icon: <Palette size={32} />,
      title: "User Interface Design",
      description: "Pixel-perfect UI design that combines aesthetics with functionality to create beautiful, intuitive interfaces."
    },
    {
      icon: <Layers size={32} />,
      title: "Prototyping & Wireframing",
      description: "Interactive prototypes and detailed wireframes to visualize concepts before development and gather feedback."
    },
    {
      icon: <Rocket size={32} />,
      title: "Design Systems",
      description: "Scalable design systems and component libraries that ensure consistency across products and platforms."
    },
    {
      icon: <Zap size={32} />,
      title: "Accessibility Design",
      description: "WCAG 2.1 AA compliant designs ensuring your product is accessible to all users, including those with disabilities."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Design",
      description: "Seamless experiences across all devices - mobile, tablet, and desktop with optimized layouts and interactions."
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Platform Redesign",
      client: "Fortune 500 Tech Company",
      challenge: "Complex platform with poor UX affecting user adoption",
      solution: "Conducted user research, created design system, redesigned interface with improved workflows",
      result: "45% increase in user adoption, 60% reduction in support tickets",
      metrics: ["45% Adoption Growth", "60% Support Reduction", "Award-Winning Design"]
    },
    {
      title: "Mobile App Design",
      client: "Healthcare Startup",
      challenge: "Need intuitive design for non-tech savvy users",
      solution: "User research, persona development, interactive prototypes with accessibility focus",
      result: "4.8/5 app store rating, 100K+ downloads in 3 months",
      metrics: ["4.8★ Rating", "100K+ Downloads", "Accessibility Leader"]
    },
    {
      title: "Design System Creation",
      client: "SaaS Company",
      challenge: "Inconsistent design across 5 different products",
      solution: "Built comprehensive design system with 200+ components and documentation",
      result: "40% faster design handoff, consistent brand experience",
      metrics: ["200+ Components", "40% Faster Handoff", "Unified Brand"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "User Research & Analytics",
      description: "In-depth user research, usability testing, and data analysis to inform design decisions."
    },
    {
      icon: <Shield size={32} />,
      title: "Accessibility Compliance",
      description: "WCAG 2.1 AA standards ensuring designs work for everyone including assistive technologies."
    },
    {
      icon: <Rocket size={32} />,
      title: "Interaction Design",
      description: "Smooth, delightful interactions and micro-animations that enhance user experience."
    },
    {
      icon: <Users size={32} />,
      title: "User Testing",
      description: "Comprehensive user testing and iteration based on real feedback to validate designs."
    },
    {
      icon: <Layers size={32} />,
      title: "Design Handoff",
      description: "Clean, organized design files and documentation for seamless developer collaboration."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance Metrics",
      description: "Track design impact with metrics like conversion rates, task completion, and user satisfaction."
    }
  ];

  const benefits = [
    {
      title: "Increased User Engagement",
      description: "Intuitive designs and delightful interactions keep users engaged and coming back."
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized UX removes friction and guides users toward desired actions and conversions."
    },
    {
      title: "Reduced Development Time",
      description: "Clear design systems and documentation streamline development and reduce rework."
    },
    {
      title: "Better Brand Perception",
      description: "Professional, polished designs build trust and establish premium brand positioning."
    },
    {
      title: "Lower Support Costs",
      description: "Intuitive interfaces reduce user confusion and support ticket volume."
    },
    {
      title: "Competitive Advantage",
      description: "Superior UX differentiates your product and attracts more users than competitors."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            UI/UX Design Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We craft beautiful, intuitive digital experiences that users love. Our design-driven approach combines research, strategy, and creativity to create interfaces that drive results.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: UI/UX Design Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="UI UX Design Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>UI/UX design company in Nagercoil, Tamil Nadu</strong>, helping startups and businesses across Kanyakumari district create intuitive, high-conversion digital experiences that users love.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: Our Design Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Design Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our UI/UX Design Services</h2>
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

        {/* ==================== Section 2: Design Excellence Features ====================*/}
        <section className="py-32 bg-black text-white" aria-label="Design Excellence Features" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Design Excellence &amp; Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive design capabilities that ensure your product stands out and performs exceptionally.</p>
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
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits of Professional UI/UX Design</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">Discover how exceptional design drives measurable business growth and customer satisfaction</p>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-16">Why Choose Memo Infotech for UI/UX Design?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">User-Centered Approach</h3>
                    <p className="text-blue-100">Every design decision is rooted in user research and real user needs, ensuring your product resonates with your audience.</p>
                  </div>
                </article>
                
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Award-Winning Designers</h3>
                    <p className="text-blue-100">Our team includes recognized design leaders who have won international awards and worked with Fortune 500 companies.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Design Systems</h3>
                    <p className="text-blue-100">We build scalable design systems that ensure consistency across your entire product ecosystem.</p>
                  </div>
                </article>
              </div>

              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accessibility Excellence</h3>
                    <p className="text-blue-100">WCAG 2.1 AA compliant designs that work for everyone, expanding your market reach and ensuring legal compliance.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Iterative Design Process</h3>
                    <p className="text-blue-100">We validate designs through testing and iterate based on real user feedback before development begins.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seamless Developer Handoff</h3>
                    <p className="text-blue-100">Clean, organized design files and comprehensive documentation ensure smooth collaboration with your development team.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Section 5: CTA ====================*/}
        <section className="py-32 bg-white" aria-label="Call to Action" role="region">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Create Amazing User Experiences?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's design digital experiences that users love and your business benefits from. Our team is ready to discuss your project.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your UI/UX Design Project">
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
              <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design & Development services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design &amp; Development</h3>
                <p className="text-gray-600 mb-4">Beautiful, high-performance websites built with React and Next.js paired with exceptional design.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/graphic-design-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Graphic Design services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Graphic Design</h3>
                <p className="text-gray-600 mb-4">Professional branding and visual assets to complement your digital products and design system.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">Drive engagement and conversions for your beautifully designed products with targeted marketing.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/mobile-app-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Mobile App Development services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile App Development</h3>
                <p className="text-gray-600 mb-4">Native iOS and Android apps with beautiful UI design and exceptional user experience.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/testing-qa" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Testing & QA services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing &amp; QA</h3>
                <p className="text-gray-600 mb-4">Comprehensive QA testing to ensure your beautifully designed product works flawlessly.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="View all services offered by Memo Infotech">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">All Services</h3>
                <p className="text-gray-600 mb-4">Explore our complete range of digital design and development services.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">View All →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UIUXDesign;
