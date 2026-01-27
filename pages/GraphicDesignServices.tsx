import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Palette, Video, Zap, Gauge, Shield, Rocket, Users, Layers, TrendingUp, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicDesignServices: React.FC = () => {
  useEffect(() => {
    document.title = 'Graphic Design & Creative Services — Professional Design Solutions';
    const desc = 'Professional graphic design, logo design, branding, social media creatives, video editing, and motion graphics services.';
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
      icon: <Palette size={32} />,
      title: "Logo Design",
      description: "Memorable, professional logos that represent your brand identity and resonate with your target audience."
    },
    {
      icon: <Image size={32} />,
      title: "Brand Identity Design",
      description: "Complete brand guidelines including colors, typography, imagery, and visual language."
    },
    {
      icon: <Zap size={32} />,
      title: "Graphic Design",
      description: "Print and digital graphics including posters, brochures, packaging, and promotional materials."
    },
    {
      icon: <Layers size={32} />,
      title: "Social Media Creatives",
      description: "Engaging social media content, posts, stories, and reels optimized for each platform."
    },
    {
      icon: <Video size={32} />,
      title: "Motion Graphics & Animation",
      description: "Animated videos, motion posters, explainer animations, and video effects."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Video Editing & Thumbnails",
      description: "Professional video editing, YouTube thumbnails, and video production services."
    }
  ];

  const caseStudies = [
    {
      title: "Complete Brand Redesign",
      client: "Tech Startup",
      challenge: "Outdated branding not reflecting growth and innovation",
      solution: "Redesigned logo, created comprehensive brand guidelines, and refreshed all marketing materials",
      result: "20% increase in brand recognition, 35% increase in engagement",
      metrics: ["20% Recognition", "35% Engagement", "New Identity"]
    },
    {
      title: "Social Media Campaign",
      client: "E-Commerce Brand",
      challenge: "Need engaging social content for viral growth",
      solution: "Designed 100+ social graphics and created video content for Instagram, TikTok, and YouTube",
      result: "500% increase in followers, 10M+ impressions in 3 months",
      metrics: ["500% Growth", "10M Impressions", "Viral Content"]
    },
    {
      title: "Video Production Suite",
      client: "SaaS Company",
      challenge: "Need professional explainer and product videos",
      solution: "Produced 5 explainer videos, product demos, and promotional content",
      result: "45% increase in conversions, 1M+ video views",
      metrics: ["45% Conversion", "1M+ Views", "Professional Content"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Creative Excellence",
      description: "Award-winning designers creating visually stunning and effective designs."
    },
    {
      icon: <Shield size={32} />,
      title: "Brand Consistency",
      description: "Ensuring all creative outputs align with your brand guidelines and vision."
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or creative excellence."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Process",
      description: "Working closely with you throughout the creative process to ensure satisfaction."
    },
    {
      icon: <Layers size={32} />,
      title: "Multi-Format Design",
      description: "Designing for print, digital, web, social media, and all modern platforms."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance-Driven",
      description: "Creative designs that not only look great but also drive business results."
    }
  ];

  const benefits = [
    {
      title: "Brand Recognition",
      description: "Stand out from competitors with distinctive, memorable branding and visuals."
    },
    {
      title: "Increased Engagement",
      description: "Compelling creative content drives higher engagement and customer interaction."
    },
    {
      title: "Professional Image",
      description: "High-quality design elevates your brand perception and professionalism."
    },
    {
      title: "Customer Trust",
      description: "Professional visuals build credibility and trust with your target audience."
    },
    {
      title: "Marketing Effectiveness",
      description: "Well-designed marketing materials improve campaign performance and ROI."
    },
    {
      title: "Long-term Value",
      description: "Timeless designs that remain effective and relevant for years to come."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Graphic Design & Creative Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We bring your brand story to life through compelling visual content. From logos to animations, we create designs that resonate with your audience and drive results.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Creative Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Creative Excellence Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive creative services that bring your vision to life.</p>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how exceptional creative design elevates your brand</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Create Amazing Visuals?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's bring your creative vision to life with stunning designs and content.</p>
          
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
              <a href="https://www.memoinfotech.com/ui-ux-design/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">UI/UX Design</a>
              <a href="https://www.memoinfotech.com/web-design-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Web Design</a>
              <a href="https://www.memoinfotech.com/digital-marketing-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Digital Marketing</a>
              <a href="https://www.memoinfotech.com/content-documentation/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Content</a>
              <a href="https://www.memoinfotech.com/ai-automation/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">AI & Automation</a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">200+</p>
              <p className="text-gray-600 mt-2">Creative Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">30+</p>
              <p className="text-gray-600 mt-2">Design Awards</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">4.9★</p>
              <p className="text-gray-600 mt-2">Client Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.memoinfotech.com/ui-ux-design/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Create cohesive visual brands with professional UI/UX design.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/web-design-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Bring your designs to life with responsive web development.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/digital-marketing-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Promote your designs with targeted marketing.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/content-documentation/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Content</h3>
              <p className="text-gray-600 mb-4">Compelling content paired with stunning visuals.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/ai-automation/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Leverage AI for design optimization and personalization.</p>
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

export default GraphicDesignServices;

