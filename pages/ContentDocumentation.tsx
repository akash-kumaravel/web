import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, FileText, BookOpen, PenTool, Video, Zap, Target, TrendingUp, Users, Lightbulb, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentDocumentation: React.FC = () => {
  useEffect(() => {
    document.title = 'Content & Documentation Services — Documentation Excellence';
    const desc = 'Professional content writing, technical documentation, API documentation, user guides, knowledge bases, and content strategy services.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { 
      meta = document.createElement('meta'); 
      meta.name = 'description'; 
      meta.content = desc; 
      document.head.appendChild(meta); 
    }
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Content & Documentation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional content and documentation services that help users understand and adopt your products. From technical docs to user guides.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Content & Documentation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all duration-300 group">
                <div className="text-[#007BFF] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-['Syne'] text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {/* Case Studies */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600">Real results from real clients</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <div key={i} className={`p-10 rounded-3xl border-2 ${i % 2 === 0 ? 'bg-gray-50 border-gray-200' : 'bg-[#007BFF] border-[#0056cc]'}`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 === 1 ? 'text-white' : ''}`}>
                  <div>
                    <h3 className={`text-3xl font-bold font-['Syne'] mb-4 ${i % 2 === 1 ? 'text-white' : 'text-black'}`}>
                      {study.title}
                    </h3>
                    <p className={`text-sm font-semibold mb-6 ${i % 2 === 1 ? 'text-blue-100' : 'text-[#007BFF]'}`}>
                      {study.client}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className={`text-sm font-bold mb-2 ${i % 2 === 1 ? 'text-blue-100' : 'text-gray-600'}`}>Challenge</p>
                        <p className={i % 2 === 1 ? 'text-blue-50' : 'text-gray-700'}>{study.challenge}</p>
                      </div>
                      <div>
                        <p className={`text-sm font-bold mb-2 ${i % 2 === 1 ? 'text-blue-100' : 'text-gray-600'}`}>Solution</p>
                        <p className={i % 2 === 1 ? 'text-blue-50' : 'text-gray-700'}>{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className={`text-sm font-bold mb-6 ${i % 2 === 1 ? 'text-blue-100' : 'text-gray-600'}`}>Results</p>
                    <p className={`mb-8 leading-relaxed ${i % 2 === 1 ? 'text-blue-50' : 'text-gray-700'}`}>
                      {study.result}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, j) => (
                        <div key={j} className={`p-4 rounded-lg text-center ${i % 2 === 1 ? 'bg-blue-400/20 text-white' : 'bg-gray-100 text-black'}`}>
                          <p className="text-sm font-bold">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
            <a href="https://www.memoinfotech.com/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg">
              Start Your Project <ArrowRight size={20} />
            </a>
            <a href="https://www.memoinfotech.com/services/" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </a>
          </div>

          {/* Connect services */}
          <div className="mt-12 pt-12 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-6 font-semibold">Connect with complementary services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.memoinfotech.com/web-design-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Web Design</a>
              <a href="https://www.memoinfotech.com/graphic-design-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Graphic Design</a>
              <a href="https://www.memoinfotech.com/software-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Software Dev</a>
              <a href="https://www.memoinfotech.com/digital-marketing-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Digital Marketing</a>
              <a href="https://www.memoinfotech.com/training-consulting/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Training</a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">1000+</p>
              <p className="text-gray-600 mt-2">Articles Written</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">500+</p>
              <p className="text-gray-600 mt-2">Video Tutorials</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">100+</p>
              <p className="text-gray-600 mt-2">Doc Portals Built</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.memoinfotech.com/web-design-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Beautiful sites with comprehensive documentation.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/graphic-design-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Graphic Design</h3>
              <p className="text-gray-600 mb-4">Well-documented visual content and assets.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/software-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Code with complete technical documentation.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/digital-marketing-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Marketing campaigns with detailed reporting.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/training-consulting/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Training</h3>
              <p className="text-gray-600 mb-4">Learn documentation best practices.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">All Services</h3>
              <p className="text-gray-600 mb-4">Explore our complete range of digital services.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">View All →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDocumentation;

