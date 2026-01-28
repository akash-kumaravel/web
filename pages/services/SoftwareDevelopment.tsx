import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Code, Database, Rocket, Zap, Gauge, Shield, Users, Layers, TrendingUp, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareDevelopment: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Custom Software Development Services | Enterprise Solutions';
    const desc = 'Professional custom software development for enterprise solutions. SaaS platforms, ERP, CRM systems, web applications. Scalable, secure, reliable software solutions.';
    
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

    setOGMeta('og:title', 'Custom Software Development Services | MEMO InfoTech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/software-development/');

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
          "name": "Software Development",
          "item": "https://www.memoinfotech.com/services/software-development/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Software Development",
      "description": "Professional custom software development for enterprise solutions, SaaS, ERP, CRM, and more. Scalable, secure, and reliable software solutions built to your specifications.",
      "provider": {
        "@type": "Organization",
        "name": "MEMO InfoTech",
        "url": "https://www.memoinfotech.com",
        "logo": "https://www.memoinfotech.com/logo.png",
        "sameAs": ["https://www.facebook.com/memoinfotech", "https://www.linkedin.com/company/memoinfotech"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "Customer Service"
        }
      },
      "areaServed": "Worldwide",
      "serviceType": "Software Development",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Custom Software Development", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "SaaS Product Development", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Enterprise Systems", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MEMO InfoTech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "sameAs": ["https://www.facebook.com/memoinfotech", "https://www.linkedin.com/company/memoinfotech"],
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
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch to match your unique business processes and requirements."
    },
    {
      icon: <Rocket size={32} />,
      title: "Web Applications",
      description: "Scalable, secure web applications built with modern frameworks and cloud technologies."
    },
    {
      icon: <Database size={32} />,
      title: "SaaS Product Development",
      description: "Multi-tenant, cloud-based SaaS platforms with subscription management and analytics."
    },
    {
      icon: <Layers size={32} />,
      title: "ERP/CRM Systems",
      description: "Enterprise resource planning and customer relationship management systems tailored to your needs."
    },
    {
      icon: <Users size={32} />,
      title: "HRMS/LMS Solutions",
      description: "Human resources and learning management systems for employee management and training."
    },
    {
      icon: <Server size={32} />,
      title: "API Development & Integration",
      description: "RESTful APIs, GraphQL, and third-party integrations for seamless system connectivity."
    }
  ];

  const caseStudies = [
    {
      title: "ERP System Implementation",
      client: "Manufacturing Company",
      challenge: "Legacy systems, disparate data sources, poor efficiency",
      solution: "Built custom ERP system integrating manufacturing, inventory, and financial modules",
      result: "50% operational efficiency improvement, $2M annual savings",
      metrics: ["50% Efficiency", "$2M Savings", "Real-time Visibility"]
    },
    {
      title: "SaaS Platform Launch",
      client: "HR Tech Startup",
      challenge: "Need scalable multi-tenant platform for SMBs",
      solution: "Developed cloud-native SaaS with role-based access, reporting, and integrations",
      result: "1000+ customers, $5M ARR, 40% MoM growth",
      metrics: ["1000+ Customers", "$5M ARR", "40% Growth"]
    },
    {
      title: "Legacy System Modernization",
      client: "Financial Services",
      challenge: "30-year-old system with poor performance",
      solution: "Migrated to cloud-based architecture with modern tech stack",
      result: "10x performance improvement, 60% cost reduction",
      metrics: ["10x Faster", "60% Cost Savings", "Zero Downtime"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "High Performance",
      description: "Optimized code and architecture handling millions of transactions with sub-second response times."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "Bank-level security, encryption, compliance with GDPR, HIPAA, SOC 2 standards."
    },
    {
      icon: <Rocket size={32} />,
      title: "Scalability",
      description: "Cloud-native architecture that scales automatically based on demand."
    },
    {
      icon: <Users size={32} />,
      title: "User Management",
      description: "Role-based access control, SSO, MFA, and comprehensive user administration."
    },
    {
      icon: <Database size={32} />,
      title: "Data Management",
      description: "Advanced database design, backup, disaster recovery, and data migration strategies."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Analytics & Reporting",
      description: "Business intelligence, dashboards, and real-time reporting for data-driven decisions."
    }
  ];

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Streamlined processes and automation reduce manual work and human errors significantly."
    },
    {
      title: "Cost Savings",
      description: "Custom solutions eliminate unnecessary features, reducing total cost of ownership."
    },
    {
      title: "Competitive Advantage",
      description: "Unique features and capabilities that differentiate your business from competitors."
    },
    {
      title: "Business Growth",
      description: "Scalable systems that grow with your business without rebuilding from scratch."
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security protecting your most valuable business assets."
    },
    {
      title: "Business Continuity",
      description: "Reliable systems with redundancy and disaster recovery ensuring uninterrupted operations."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Custom Software Development Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We engineer robust, scalable custom software solutions tailored to your unique business processes. From ERPs to SaaS platforms, we build the digital backbone of your enterprise.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 1: Software Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Software Development Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Software Development Services</h2>
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

        {/* ==================== Section 2: Enterprise Capabilities ====================*/}
        <section className="py-32 bg-black text-white" aria-label="Enterprise Capabilities" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Enterprise-Grade Capabilities &amp; Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Features and capabilities designed for enterprise-grade reliability and performance.</p>
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
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits of Custom Software</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">Discover how custom software drives operational excellence and business transformation</p>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-16">Why Choose MEMO InfoTech for Custom Software?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enterprise Architecture Expertise</h3>
                    <p className="text-blue-100">20+ years designing software for Fortune 500 companies and scaling startups.</p>
                  </div>
                </article>
                
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Full Technology Stack Mastery</h3>
                    <p className="text-blue-100">Proficiency across Java, Python, Node.js, C#, and modern frameworks.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scalable, Future-Proof Design</h3>
                    <p className="text-blue-100">Software built to handle 10x growth without architectural redesign.</p>
                  </div>
                </article>
              </div>

              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enterprise Security &amp; Compliance</h3>
                    <p className="text-blue-100">GDPR, HIPAA, SOC 2 compliance and military-grade security implementations.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Agile Development Process</h3>
                    <p className="text-blue-100">Rapid iterations, transparent communication, continuous delivery.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Long-Term Support &amp; Maintenance</h3>
                    <p className="text-blue-100">Dedicated teams for ongoing optimization, updates, and feature enhancements.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Section 5: CTA ====================*/}
        <section className="py-32 bg-white" aria-label="Call to Action" role="region">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Build Enterprise Software?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's create software that transforms your business and drives sustainable growth.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Custom Software Development Project">
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
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Development</h3>
                <p className="text-gray-600 mb-4">Build scalable web applications alongside your software solutions.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/mobile-app-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Mobile App Development services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
                <p className="text-gray-600 mb-4">Extend your software reach with mobile app development.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/ui-ux-design" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about UI/UX Design services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
                <p className="text-gray-600 mb-4">Create exceptional user interfaces for your software applications.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/testing-qa" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Testing & QA services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing & QA</h3>
                <p className="text-gray-600 mb-4">Ensure quality with rigorous testing and quality assurance.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/hosting-cloud-it" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Hosting & Cloud Services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Cloud & Hosting</h3>
                <p className="text-gray-600 mb-4">Deploy and scale your software on reliable cloud infrastructure.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="View all services offered by MEMO InfoTech">
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

export default SoftwareDevelopment;
