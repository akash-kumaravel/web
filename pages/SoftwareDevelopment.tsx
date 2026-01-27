import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Code, Database, Rocket, Zap, Gauge, Shield, Users, Layers, TrendingUp, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = 'Custom Software Development Services — Enterprise Solutions';
    const desc = 'Professional custom software development for enterprise solutions, SaaS, ERP, CRM, and more. Scalable, secure, and reliable software solutions.';
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We engineer robust, scalable custom software solutions tailored to your unique business processes. From ERPs to SaaS platforms, we build the digital backbone of your enterprise.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Software Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Enterprise Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Features and capabilities designed for enterprise-grade reliability and performance.</p>
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
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how custom software drives operational excellence and business transformation</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Build Enterprise Software?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's create software that transforms your business and drives growth.</p>
          
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
              <a href="https://www.memoinfotech.com/mobile-app-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Mobile Apps</a>
              <a href="https://www.memoinfotech.com/ui-ux-design/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">UI/UX Design</a>
              <a href="https://www.memoinfotech.com/testing-qa/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Testing & QA</a>
              <a href="https://www.memoinfotech.com/hosting-cloud-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Hosting & Cloud</a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">60+</p>
              <p className="text-gray-600 mt-2">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">$500M+</p>
              <p className="text-gray-600 mt-2">Client Transactions</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">99.99%</p>
              <p className="text-gray-600 mt-2">System Uptime</p>
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
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Development</h3>
              <p className="text-gray-600 mb-4">Build scalable web applications alongside your software solutions.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/mobile-app-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Extend your software reach with mobile app development.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/ui-ux-design/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Create exceptional user interfaces for your software applications.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/testing-qa/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing & QA</h3>
              <p className="text-gray-600 mb-4">Ensure quality with rigorous testing and quality assurance.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/hosting-cloud-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">

              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Cloud & Hosting</h3>
              <p className="text-gray-600 mb-4">Deploy and scale your software on reliable cloud infrastructure.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">All Services</h3>
              <p className="text-gray-600 mb-4">Explore our complete range of digital services and solutions.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">View All →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
