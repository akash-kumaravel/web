import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, FileText, BookOpen, PenTool, Video, Zap, Target, TrendingUp, Users, Lightbulb, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentDocumentation: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Content & Documentation Services | Technical Writing & API Documentation';
    const desc = 'Professional content writing and technical documentation services. API docs, user guides, technical writing, knowledge bases, content strategy. Clear, accurate, SEO-optimized content.';
    
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

    setOGMeta('og:title', 'Content & Documentation Services | MEMO InfoTech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/content-documentation/');

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
          "name": "Content & Documentation",
          "item": "https://www.memoinfotech.com/services/content-documentation/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Content & Documentation",
      "description": "Professional content writing, technical documentation, API documentation, user guides, knowledge bases, and content strategy services. SEO-optimized, clear, and accurate.",
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
      "serviceType": "Content & Documentation",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Technical Documentation", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "API Documentation", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Content Writing", "priceRange": "Custom Quote" }
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
      icon: <FileText size={32} />,
      title: "Technical Documentation",
      description: "Comprehensive technical docs, API documentation, system architecture guides."
    },
    {
      icon: <BookOpen size={32} />,
      title: "User Guides & Manuals",
      description: "Step-by-step user guides, video tutorials, knowledge bases for end users."
    },
    {
      icon: <PenTool size={32} />,
      title: "Content Writing",
      description: "Blog posts, whitepapers, case studies, website copy, and marketing content."
    },
    {
      icon: <Video size={32} />,
      title: "Video Documentation",
      description: "Explainer videos, tutorial videos, screen recordings, and video guides."
    },
    {
      icon: <Code size={32} />,
      title: "Code Documentation",
      description: "Code comments, README files, inline documentation, and developer guides."
    },
    {
      icon: <Target size={32} />,
      title: "Content Strategy",
      description: "Content planning, taxonomy design, information architecture, governance."
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Documentation Portal",
      client: "SaaS Enterprise Platform",
      challenge: "Create comprehensive documentation for complex product with 100+ features",
      solution: "Built documentation portal with API docs, user guides, video tutorials, search",
      result: "40% reduction in support tickets, 95% user satisfaction, accessible docs",
      metrics: ["40% Tickets ↓", "95% Satisfaction", "100% Accessible"]
    },
    {
      title: "Developer-First API Documentation",
      client: "API-First Tech Company",
      challenge: "Make API easily understandable and adoptable for developers",
      solution: "Created interactive API docs, code examples, SDKs, quick start guides",
      result: "3x faster API adoption, 1000+ API integrations, 4.9★ developer rating",
      metrics: ["3x Adoption", "1000+ Integrations", "4.9★ Rating"]
    },
    {
      title: "Knowledge Base & Help Center",
      client: "B2B SaaS Provider",
      challenge: "Reduce support load and improve customer self-service",
      solution: "Built comprehensive knowledge base with 500+ articles, search, video guides",
      result: "60% reduction in support requests, 85% resolution via self-service",
      metrics: ["60% Less Support", "85% Self-Service", "500+ Articles"]
    }
  ];

  const features = [
    {
      icon: <Lightbulb size={32} />,
      title: "Content Strategy",
      description: "Strategic planning for content that drives user adoption and satisfaction."
    },
    {
      icon: <Target size={32} />,
      title: "User-Centered Design",
      description: "Documentation designed for your specific users and use cases."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Turnaround",
      description: "Agile documentation approach with rapid content creation and updates."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "SEO Optimization",
      description: "Content optimized for search visibility and discoverability."
    },
    {
      icon: <Users size={32} />,
      title: "User Testing",
      description: "Validate documentation with real users and iterate for improvements."
    },
    {
      icon: <Code size={32} />,
      title: "Multi-Format",
      description: "Content in multiple formats: written, video, interactive, code samples."
    }
  ];

  const benefits = [
    {
      title: "Faster User Adoption",
      description: "Clear documentation helps users quickly adopt and use your product."
    },
    {
      title: "Reduced Support Load",
      description: "Good documentation reduces support tickets and support costs significantly."
    },
    {
      title: "Improved User Experience",
      description: "Documentation that users actually find helpful improves satisfaction."
    },
    {
      title: "Better Developer Experience",
      description: "Great API and technical docs improve developer adoption and happiness."
    },
    {
      title: "SEO Benefits",
      description: "Well-written content improves search visibility and organic traffic."
    },
    {
      title: "Brand Authority",
      description: "Comprehensive content establishes your company as a thought leader."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Content &amp; Documentation Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional content and documentation services that help users understand and adopt your products. From technical docs to user guides.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 1: Content Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Content and Documentation Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Content &amp; Documentation Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Content Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Professional content and documentation capabilities for products and services.</p>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Content Benefits</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Why quality content and documentation are critical for product success</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Let's Create Great Content</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Professional documentation and content that helps your users succeed.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Content Documentation Project">
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
              <p className="text-gray-600 mb-4">Beautiful sites with comprehensive documentation.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/graphic-design-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Graphic Design Services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Graphic Design</h3>
              <p className="text-gray-600 mb-4">Well-documented visual content and assets.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Code with complete technical documentation.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing Services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Marketing campaigns with detailed reporting.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/training-consulting" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Training and Consulting">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Training</h3>
              <p className="text-gray-600 mb-4">Learn documentation best practices.</p>
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

export default ContentDocumentation;

