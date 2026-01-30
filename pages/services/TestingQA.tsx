import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Bug, Zap, Target, BarChart3, Gauge, Users, FileText, Lightbulb, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestingQA: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Testing & Quality Assurance Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional testing and quality assurance company in Nagercoil, Tamil Nadu, offering manual testing, automated testing, performance testing, and security testing.';
    
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

    setOGMeta('og:title', 'Testing & Quality Assurance Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/testing-qa/');

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
          "name": "Testing & QA",
          "item": "https://www.memoinfotech.com/services/testing-qa/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Testing & Quality Assurance",
      "description": "Comprehensive testing services: manual testing, automated testing, performance testing, security testing, and QA consulting. Enterprise-grade quality assurance.",
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
      "serviceType": "Testing & QA",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Manual Testing", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Automated Testing", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Performance Testing", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert testing and quality assurance agency specializing in software quality.",
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
      icon: <Bug size={32} />,
      title: "Manual Testing",
      description: "Comprehensive manual QA testing for functionality, usability, and user experience."
    },
    {
      icon: <Zap size={32} />,
      title: "Automated Testing",
      description: "Test automation using Selenium, Cypress, and other frameworks for continuous testing."
    },
    {
      icon: <Target size={32} />,
      title: "Performance Testing",
      description: "Load testing, stress testing, and performance optimization for high-traffic applications."
    },
    {
      icon: <Shield size={32} />,
      title: "Security Testing",
      description: "Vulnerability assessments, penetration testing, and security audit services."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Test Strategy & Planning",
      description: "Create comprehensive testing strategy and test plans for your projects."
    },
    {
      icon: <Gauge size={32} />,
      title: "QA Consulting",
      description: "QA process improvement, best practices, and quality assurance consulting."
    }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Platform Testing",
      client: "Major Retail Company",
      challenge: "High transaction volume with zero tolerance for bugs or downtime",
      solution: "Implemented comprehensive testing strategy with manual + automated tests, load testing",
      result: "99.99% defect-free release, 50% reduction in production issues",
      metrics: ["99.99% Quality", "50% Issues ↓", "Zero Downtime"]
    },
    {
      title: "Mobile App QA",
      client: "FinTech Startup",
      challenge: "Ensure security and stability across multiple devices and OS versions",
      solution: "Automated testing, manual device testing, security penetration testing",
      result: "Launched without critical bugs, 4.8★ app store rating",
      metrics: ["4.8★ Rating", "Zero Critical", "30+ Devices"]
    },
    {
      title: "Cloud Application Performance",
      client: "SaaS Provider",
      challenge: "Handle 100K concurrent users with performance requirements",
      solution: "Load testing, stress testing, performance optimization recommendations",
      result: "99.95% uptime, sub-100ms response times under peak load",
      metrics: ["99.95% Uptime", "100K Users", "100ms Response"]
    }
  ];

  const features = [
    {
      icon: <FileText size={32} />,
      title: "Test Coverage Analysis",
      description: "Comprehensive test coverage planning and execution tracking."
    },
    {
      icon: <Gauge size={32} />,
      title: "Quality Metrics",
      description: "Track and report quality metrics, defect trends, and improvement areas."
    },
    {
      icon: <Target size={32} />,
      title: "Regression Testing",
      description: "Automated regression suites to catch regressions in updates."
    },
    {
      icon: <Users size={32} />,
      title: "User Acceptance Testing",
      description: "UAT coordination and execution with end users and stakeholders."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Test Optimization",
      description: "Optimize test execution time and resource utilization."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Continuous Testing",
      description: "CI/CD integration with continuous testing for faster releases."
    }
  ];

  const benefits = [
    {
      title: "Reduced Defects",
      description: "Catch bugs before production with comprehensive testing strategies."
    },
    {
      title: "Improved Quality",
      description: "Ensure consistent quality standards across all releases."
    },
    {
      title: "Cost Savings",
      description: "Find bugs early to reduce expensive production issues."
    },
    {
      title: "Faster Releases",
      description: "Automated testing enables faster deployment cycles."
    },
    {
      title: "Better Performance",
      description: "Ensure applications perform well under real-world conditions."
    },
    {
      title: "User Satisfaction",
      description: "Deliver reliable applications that meet user expectations."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Testing & Quality Assurance Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ensure software excellence with comprehensive testing, quality assurance, and performance validation. Catch bugs before production and deliver reliable applications.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>testing and quality assurance company in Nagercoil, Tamil Nadu</strong>, ensuring software quality for businesses across Kanyakumari district.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: QA & Testing Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Quality Assurance and Testing Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">QA &amp; Testing Services</h2>
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
        <section className="py-32 bg-black text-white" aria-label="Quality Assurance Excellence" role="region">
          <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Quality Assurance Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive QA capabilities for enterprise software.</p>
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
        <section className="py-32 bg-[#007BFF] text-white" aria-label="Quality Assurance Benefits" role="region">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Quality Assurance Benefits</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Why comprehensive QA is essential for software success</p>
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

        {/* ==================== Section 4: CTA ====================*/}
        <section className="py-32 bg-white" aria-label="Call to Action" role="region">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ensure Software Quality</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's implement comprehensive testing and QA to deliver excellent software.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Testing and QA Project">
              Start Your Project <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* ==================== Section 5: Related Services ====================*/}
      <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Build quality software with comprehensive testing.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Fully tested web applications and sites.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/mobile-app-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Mobile App Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Tested and optimized mobile applications.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/e-commerce-solutions" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about E-Commerce Solutions">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce</h3>
              <p className="text-gray-600 mb-4">Reliable and tested online stores.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/ai-automation" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about AI & Automation">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Validated AI and automation systems.</p>
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

export default TestingQA;

