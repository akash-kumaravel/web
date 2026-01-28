import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Code, Smartphone, Zap, Eye, TrendingUp, Shield, Rocket, Users, Layers, Gauge, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesignDevelopment: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Web Design & Development Services | Custom React & Next.js Solutions';
    const desc = 'Professional web design & development services. Custom React, Next.js, e-commerce, and responsive websites built for conversions. Expert design + development since 2015.';
    
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

    setOGMeta('og:title', 'Web Design & Development Services | MEMO InfoTech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/web-design-development/');

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
          "name": "Web Design & Development",
          "item": "https://www.memoinfotech.com/services/web-design-development/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Design & Development",
      "description": "Custom web design and development services including React apps, Next.js, e-commerce platforms, landing pages, and responsive websites.",
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
      "serviceType": "Web Design & Development",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "React Applications", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Next.js Applications", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "E-commerce Platforms", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MEMO InfoTech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert web design and development agency specializing in React, Next.js, and modern digital solutions.",
      "sameAs": ["https://www.facebook.com/memoinfotech", "https://www.linkedin.com/company/memoinfotech"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "Customer Support"
      }
    };

    // Inject all schemas
    const injectSchema = (schema: object) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.async = true;
      document.head.appendChild(script);
      return script;
    };

    const breadcrumbScript = injectSchema(breadcrumbSchema);
    const serviceScript = injectSchema(serviceSchema);
    const organizationScript = injectSchema(organizationSchema);

    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(serviceScript);
      document.head.removeChild(organizationScript);
    };
  }, []);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Static & Dynamic Websites",
      description: "Fast-loading static sites for information-heavy platforms, combined with dynamic functionality for interactive user experiences and real-time data management."
    },
    {
      icon: <Eye size={32} />,
      title: "Business / Corporate Websites",
      description: "Professional, credible online presences designed to establish authority, communicate your value proposition, and generate qualified leads."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Portfolio Websites",
      description: "Stunning showcase sites for creative professionals, artists, and freelancers to display their best work and attract new opportunities."
    },
    {
      icon: <Zap size={32} />,
      title: "E-commerce Websites",
      description: "Feature-rich online stores with secure payment processing, inventory management, and conversion-optimized checkout experiences."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Landing Pages",
      description: "High-converting landing pages designed specifically for campaigns, product launches, and lead generation with compelling CTAs."
    },
    {
      icon: <Code size={32} />,
      title: "Website Redesign",
      description: "Modernize your existing website with updated design, improved performance, better SEO, and enhanced user experience."
    },
    {
      icon: <Zap size={32} />,
      title: "Website Maintenance & Support",
      description: "Ongoing support including updates, security monitoring, performance optimization, and technical assistance for peace of mind."
    }
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "Docker",
    "Three.js"
  ];

  const process = [
    { step: "Discovery", desc: "Understanding your goals, target audience, and requirements" },
    { step: "Design", desc: "Creating wireframes and mockups for your approval" },
    { step: "Development", desc: "Building your site with clean, scalable code" },
    { step: "Testing", desc: "Rigorous QA to ensure performance and functionality" },
    { step: "Launch", desc: "Deployment with ongoing support and monitoring" }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "Fashion Retail Brand",
      challenge: "Outdated website with poor conversion rates",
      solution: "Built modern e-commerce platform with React, integrated payment gateway, and inventory management",
      result: "250% increase in online sales, 40% improvement in site speed",
      metrics: ["250% Sales Growth", "40% Speed Improvement", "35% Higher Conversion"]
    },
    {
      title: "SaaS Platform Launch",
      client: "B2B Software Company",
      challenge: "Need for scalable web application with real-time features",
      solution: "Developed Next.js application with GraphQL backend, real-time notifications, and analytics dashboard",
      result: "Successfully onboarded 500+ users in first month, 99.9% uptime",
      metrics: ["500+ Users", "99.9% Uptime", "Real-time Features"]
    },
    {
      title: "Corporate Rebranding Website",
      client: "Financial Services Firm",
      challenge: "Complete website redesign with brand refresh",
      solution: "Created modern, professional website with storytelling focus and lead generation forms",
      result: "50% increase in qualified leads, 60% improvement in user engagement",
      metrics: ["50% Lead Growth", "60% More Engagement", "First Page Google Ranking"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with lazy loading, code splitting, and CDN delivery ensuring sub-2 second load times."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "SSL/TLS encryption, OWASP compliance, regular security audits, and data protection protocols."
    },
    {
      icon: <Rocket size={32} />,
      title: "Conversion Optimization",
      description: "A/B testing, heat mapping, and user behavior analysis to maximize ROI and customer acquisition."
    },
    {
      icon: <Users size={32} />,
      title: "User Experience Design",
      description: "Intuitive interfaces, smooth interactions, and accessibility standards (WCAG 2.1 AA compliance)."
    },
    {
      icon: <Layers size={32} />,
      title: "Scalable Architecture",
      description: "Cloud-based infrastructure that grows with your business, handling millions of users seamlessly."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Analytics & Insights",
      description: "Integrated analytics tracking, detailed reports, and actionable insights for continuous improvement."
    }
  ];

  const benefits = [
    {
      title: "Increased Brand Credibility",
      description: "A professional, well-designed website builds trust with visitors and establishes your authority in your industry."
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized user experience and persuasive design elements guide visitors toward taking desired actions."
    },
    {
      title: "Improved Search Rankings",
      description: "SEO-optimized architecture and content strategies help your site rank higher in search results for relevant keywords."
    },
    {
      title: "Mobile-First Accessibility",
      description: "Responsive design ensures perfect functionality and appearance on all devices, reaching customers anywhere."
    },
    {
      title: "Faster Page Load Times",
      description: "Optimized performance reduces bounce rates and improves both user satisfaction and search engine rankings."
    },
    {
      title: "Long-Term Cost Savings",
      description: "Clean, maintainable code and scalable infrastructure reduce technical debt and future development costs."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Web Design &amp; Web Development Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We create stunning, high-performance websites that captivate and convert. From static landing pages to dynamic web applications using React, Next.js, and WebGL, we build digital experiences that drive results.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 1: Web Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Web Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Web Services</h2>
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

        {/* ==================== Section 2: Advanced Features ====================*/}
        <section className="py-32 bg-black text-white" aria-label="Advanced Features" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Advanced Features &amp; Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Built-in capabilities designed to help your website perform at its best and exceed expectations.</p>
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
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits of Professional Web Design</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">Discover how our web solutions drive measurable business growth and impact</p>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-16">Why Choose MEMO InfoTech for Web Development?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance-First Approach</h3>
                    <p className="text-blue-100">Lightning-fast load times and smooth interactions that keep users engaged and boost your search rankings.</p>
                  </div>
                </article>
                
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">SEO Optimized from Day One</h3>
                    <p className="text-blue-100">Built with search engines in mind to ensure your site ranks well and drives organic traffic consistently.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fully Responsive Design</h3>
                    <p className="text-blue-100">Perfect appearance and functionality across all devices and screen sizes for maximum reach.</p>
                  </div>
                </article>
              </div>

              <div className="space-y-6">
                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Security &amp; Compliance</h3>
                    <p className="text-blue-100">Industry-standard security practices and GDPR compliance for user data protection and peace of mind.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ongoing Support &amp; Maintenance</h3>
                    <p className="text-blue-100">Dedicated support team to handle updates, maintenance, and any issues that arise post-launch.</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scalable &amp; Future-Proof Solutions</h3>
                    <p className="text-blue-100">Your website grows with your business, handling increased traffic and functionality seamlessly.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Section 5: CTA ====================*/}
        <section className="py-32 bg-white" aria-label="Call to Action" role="region">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Build Your Web Presence?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's create a stunning website that attracts customers and drives growth for your business. Our team is ready to discuss your project and timeline.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Web Development Project">
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
                <p className="text-gray-600 mb-4">Beautiful interfaces paired with your web development for seamless user experiences.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/graphic-design-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Graphic Design services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Graphic Design</h3>
                <p className="text-gray-600 mb-4">Professional branding and visual assets to complement your web presence.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">Drive traffic and conversions for your website with targeted marketing strategies.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/e-commerce-solutions" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about E-Commerce Solutions">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce Solutions</h3>
                <p className="text-gray-600 mb-4">Build powerful online stores integrated with your website development.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services/hosting-cloud-it" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Hosting & Cloud Services">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Hosting &amp; Cloud</h3>
                <p className="text-gray-600 mb-4">Reliable hosting and infrastructure to keep your website running 24/7.</p>
                <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
              </Link>

              <Link to="/services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="View all services offered by MEMO InfoTech">
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

export default WebDesignDevelopment;

