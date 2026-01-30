import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Cloud, Server, Shield, Gauge, Rocket, Users, TrendingUp, Lock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const HostingCloudServices: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Hosting & Cloud Services Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional hosting and cloud services company in Nagercoil, Tamil Nadu, offering AWS, Azure, Google Cloud, domain registration, and SSL certificates.';
    
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

    setOGMeta('og:title', 'Hosting & Cloud Services Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/hosting-cloud-services/');

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
          "name": "Hosting & Cloud Services",
          "item": "https://www.memoinfotech.com/services/hosting-cloud-services/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Hosting & Cloud Services",
      "description": "Professional hosting, cloud services, server management, domain registration, SSL, backup, and disaster recovery solutions. AWS, Azure, Google Cloud expertise.",
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
      "serviceType": "Hosting & Cloud Services",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Domain Registration", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Cloud Hosting", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Server Management", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert hosting and cloud services agency specializing in AWS and cloud infrastructure.",
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
      icon: <Cloud size={32} />,
      title: "Domain Registration",
      description: "Domain registration and management with WHOIS privacy and DNS configuration."
    },
    {
      icon: <Server size={32} />,
      title: "Web & Cloud Hosting",
      description: "Reliable cloud hosting on AWS, Azure, and Google Cloud with auto-scaling."
    },
    {
      icon: <Settings size={32} />,
      title: "Server Setup & Management",
      description: "Complete server configuration, monitoring, and management 24/7."
    },
    {
      icon: <Rocket size={32} />,
      title: "Website Deployment",
      description: "Seamless deployment with CI/CD pipelines and zero-downtime releases."
    },
    {
      icon: <Lock size={32} />,
      title: "SSL & Security",
      description: "SSL certificates, firewalls, DDoS protection, and security hardening."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Backup & Disaster Recovery",
      description: "Automated backups, recovery plans, and business continuity assurance."
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      client: "Financial Services Company",
      challenge: "Migrate from on-premise to cloud infrastructure",
      solution: "Planned and executed cloud migration with zero downtime, data security",
      result: "40% cost reduction, improved scalability, 99.99% uptime",
      metrics: ["40% Savings", "99.99% Uptime", "Zero Downtime"]
    },
    {
      title: "High-Traffic Platform Hosting",
      client: "Social Media Platform",
      challenge: "Host platform with 10M+ daily users, traffic spikes",
      solution: "Built multi-region cloud infrastructure with auto-scaling and CDN",
      result: "Handled 1B+ daily requests, 50ms avg response time",
      metrics: ["1B Requests", "50ms Response", "Auto-Scaling"]
    },
    {
      title: "Disaster Recovery Setup",
      client: "Healthcare Provider",
      challenge: "Need backup and disaster recovery for patient data",
      solution: "Implemented redundant systems, geo-replicated backups, recovery procedures",
      result: "RTO 1 hour, RPO 15 minutes, HIPAA compliant",
      metrics: ["1hr RTO", "15min RPO", "HIPAA Ready"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Performance Monitoring",
      description: "Real-time monitoring of server health, performance, and availability."
    },
    {
      icon: <Shield size={32} />,
      title: "Security Hardening",
      description: "Security audits, vulnerability scanning, and penetration testing."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Flexibility",
      description: "Multi-cloud strategy for flexibility, cost optimization, and redundancy."
    },
    {
      icon: <Users size={32} />,
      title: "Managed Services",
      description: "Full managed hosting services so you focus on your business."
    },
    {
      icon: <Rocket size={32} />,
      title: "Scalability",
      description: "Auto-scaling infrastructure that grows with your application demands."
    },
    {
      icon: <Lock size={32} />,
      title: "Compliance",
      description: "Compliance with GDPR, HIPAA, PCI-DSS, SOC 2, and other standards."
    }
  ];

  const benefits = [
    {
      title: "Reduced Costs",
      description: "Pay only for what you use with cloud infrastructure and auto-scaling."
    },
    {
      title: "High Availability",
      description: "Guaranteed uptime and redundancy ensures your systems are always online."
    },
    {
      title: "Security",
      description: "Enterprise-grade security protecting your data and applications."
    },
    {
      title: "Scalability",
      description: "Handle traffic spikes and growth without infrastructure investment."
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with compliant infrastructure."
    },
    {
      title: "Peace of Mind",
      description: "24/7 monitoring and support ensures smooth operations."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Hosting & Cloud Services Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Secure, reliable infrastructure for your digital presence. We handle domain registration, hosting, server management, and ensure your systems are always online.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>hosting and cloud services company in Nagercoil, Tamil Nadu</strong>, providing reliable infrastructure solutions to businesses across Kanyakumari district.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: Cloud & Hosting Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Cloud and Hosting Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Cloud &amp; Hosting Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Infrastructure Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Enterprise-grade cloud and hosting infrastructure features.</p>
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
            <p className="text-blue-100 max-w-2xl mx-auto">Discover why enterprise infrastructure matters for your business</p>
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

      {/* CTA */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready for Enterprise Infrastructure?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's build a secure, scalable infrastructure for your applications.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Hosting and Cloud Services Project">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all" aria-label="View All Services">
              View All Services
            </Link>
          </div>


        </div>
      </div>

      {/* Related Services */}
      <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design and Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Beautiful websites hosted on our reliable infrastructure.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/mobile-app-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Mobile App Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Scalable hosting for mobile backends.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Reliable infrastructure for enterprise software.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/e-commerce-solutions" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about E-Commerce Solutions">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce</h3>
              <p className="text-gray-600 mb-4">Fast, secure hosting for online stores.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/ai-automation" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about AI Automation">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Compute resources for ML and automation.</p>
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

export default HostingCloudServices;

