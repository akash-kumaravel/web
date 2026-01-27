import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Palette, Smartphone, Zap, Eye, Gauge, Shield, Rocket, Users, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const UIUXDesign: React.FC = () => {
  useEffect(() => {
    document.title = 'UI/UX Design Services — Expert Digital Design Solutions';
    const desc = 'Professional UI/UX design services including user experience design, interface design, prototyping, and design systems. Creating intuitive and beautiful digital experiences.';
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-[#007BFF] font-semibold mb-6 hover:gap-3 transition-all">
          ← Back to Services
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            UI/UX Design
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We craft beautiful, intuitive digital experiences that users love. Our design-driven approach combines research, strategy, and creativity to create interfaces that drive results.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Design Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Design Excellence Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive design capabilities that ensure your product stands out and performs exceptionally.</p>
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
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how exceptional design drives measurable business growth and impact</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Create Amazing Designs?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's design digital experiences that users love and businesses value.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg">
              Start Your Project <ArrowRight size={20} />
            </a>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">100+</p>
              <p className="text-gray-600 mt-2">Design Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">4.9★</p>
              <p className="text-gray-600 mt-2">Avg. Client Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">15+</p>
              <p className="text-gray-600 mt-2">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;
