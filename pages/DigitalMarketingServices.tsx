import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Search, Share2, Zap, Gauge, Shield, Rocket, Users, Layers, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketingServices: React.FC = () => {
  useEffect(() => {
    document.title = 'Digital Marketing Services — SEO, SMM, SEM Solutions';
    const desc = 'Professional digital marketing services including SEO, social media marketing, Google Ads, content marketing, email marketing, and lead generation.';
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
      icon: <Search size={32} />,
      title: "Search Engine Optimization (SEO)",
      description: "Organic search optimization to rank higher on Google and drive qualified traffic to your website."
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Marketing (SMM)",
      description: "Strategic social media campaigns across Facebook, Instagram, LinkedIn, TikTok, and Twitter."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Google Ads & Paid Campaigns",
      description: "High-ROI paid advertising campaigns on Google, Bing, and social media platforms."
    },
    {
      icon: <Zap size={32} />,
      title: "Content Marketing",
      description: "Engaging content strategy including blog posts, videos, infographics, and thought leadership."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Email & WhatsApp Marketing",
      description: "Direct marketing campaigns through email and WhatsApp with personalized messaging."
    },
    {
      icon: <Layers size={32} />,
      title: "Lead Generation & Analytics",
      description: "Targeted campaigns to generate qualified leads and comprehensive analytics tracking."
    }
  ];

  const caseStudies = [
    {
      title: "E-Commerce SEO Campaign",
      client: "Online Retail Business",
      challenge: "Low organic traffic and poor search rankings",
      solution: "Implemented comprehensive SEO strategy, optimized content, built quality backlinks",
      result: "300% increase in organic traffic, ranked #1 for target keywords",
      metrics: ["300% Traffic", "Top Rankings", "$500K Revenue"]
    },
    {
      title: "SaaS Lead Generation",
      client: "B2B Software Company",
      challenge: "Need consistent qualified leads for sales team",
      solution: "Developed multi-channel marketing strategy combining SEO, content, and ads",
      result: "250+ qualified leads/month, 30% conversion rate, $2M pipeline",
      metrics: ["250 Leads/Month", "30% Conversion", "$2M Pipeline"]
    },
    {
      title: "Social Media Growth",
      client: "Consumer Brand",
      challenge: "Growing social presence and engagement",
      solution: "Created content calendar, managed all platforms, ran viral campaigns",
      result: "500K followers across platforms, 50M impressions, 15% engagement rate",
      metrics: ["500K Followers", "50M Impressions", "15% Engagement"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Data-Driven Strategy",
      description: "All campaigns based on analytics, market research, and proven strategies."
    },
    {
      icon: <Shield size={32} />,
      title: "Transparent Reporting",
      description: "Detailed monthly reports with KPIs, metrics, and ROI tracking."
    },
    {
      icon: <Rocket size={32} />,
      title: "Continuous Optimization",
      description: "Regular A/B testing and optimization to improve campaign performance."
    },
    {
      icon: <Users size={32} />,
      title: "Audience Targeting",
      description: "Precise audience targeting to reach the right people at the right time."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Multi-Channel Marketing",
      description: "Integrated campaigns across multiple channels for maximum reach."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth Hacking",
      description: "Innovative strategies to achieve rapid growth and competitive advantage."
    }
  ];

  const benefits = [
    {
      title: "Increased Brand Awareness",
      description: "Reach more potential customers through strategic marketing efforts."
    },
    {
      title: "More Qualified Leads",
      description: "Target the right audience to generate high-quality, sales-ready leads."
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized campaigns that turn visitors into customers and drive sales."
    },
    {
      title: "Better ROI",
      description: "Strategic marketing that delivers measurable results and positive ROI."
    },
    {
      title: "Brand Authority",
      description: "Establish your brand as an industry leader through content and thought leadership."
    },
    {
      title: "Customer Retention",
      description: "Build loyalty and keep customers engaged through ongoing marketing."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-[#007BFF] font-semibold mb-6 hover:gap-3 transition-all">
          ← Back to Services
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Elevate your online presence with data-driven marketing strategies. We combine SEO, social media, paid campaigns, and content marketing for maximum reach and ROI.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Marketing Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Marketing Excellence Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive marketing services designed for growth and results.</p>
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
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how strategic marketing drives growth and business success</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's create a marketing strategy that drives real growth and measurable results.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg">
              Start Your Campaign <ArrowRight size={20} />
            </a>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">500+</p>
              <p className="text-gray-600 mt-2">Campaigns Managed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">$50M+</p>
              <p className="text-gray-600 mt-2">Client Revenue Generated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">400%</p>
              <p className="text-gray-600 mt-2">Avg. ROI Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingServices;
