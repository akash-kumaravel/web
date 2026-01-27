import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Bug, Zap, Target, BarChart3, Gauge, Users, FileText, Lightbulb, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestingQA: React.FC = () => {
  useEffect(() => {
    document.title = 'Testing & Quality Assurance Services — Software Quality Excellence';
    const desc = 'Comprehensive testing services: manual testing, automated testing, performance testing, security testing, and QA consulting.';
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Testing & Quality Assurance
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ensure software excellence with comprehensive testing, quality assurance, and performance validation. Catch bugs before production.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">QA & Testing Services</h2>
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
      </div>

      {/* Business Benefits */}
      <div className="py-32 bg-[#007BFF] text-white">
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
      </div>

      {/* CTA */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ensure Software Quality</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's implement comprehensive testing and QA to deliver excellent software.</p>
          
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
              <a href="https://www.memoinfotech.com/software-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Software Dev</a>
              <a href="https://www.memoinfotech.com/web-design-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Web Design</a>
              <a href="https://www.memoinfotech.com/mobile-app-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Mobile Apps</a>
              <a href="https://www.memoinfotech.com/e-commerce-solutions/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">E-Commerce</a>
              <a href="https://www.memoinfotech.com/ai-automation/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">AI & Automation</a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">500+</p>
              <p className="text-gray-600 mt-2">QA Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">1M+</p>
              <p className="text-gray-600 mt-2">Test Cases Executed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">98%</p>
              <p className="text-gray-600 mt-2">Bug Detection Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.memoinfotech.com/software-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Build quality software with comprehensive testing.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/web-design-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Fully tested web applications and sites.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/mobile-app-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Tested and optimized mobile applications.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/e-commerce-solutions/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce</h3>
              <p className="text-gray-600 mb-4">Reliable and tested online stores.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/ai-automation/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Validated AI and automation systems.</p>
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

export default TestingQA;

