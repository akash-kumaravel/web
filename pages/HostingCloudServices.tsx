import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Cloud, Server, Shield, Gauge, Rocket, Users, TrendingUp, Lock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const HostingCloudServices: React.FC = () => {
  useEffect(() => {
    document.title = 'Hosting, Cloud & IT Services — Infrastructure Solutions';
    const desc = 'Professional hosting, cloud services, server management, domain registration, SSL, backup, and disaster recovery solutions.';
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Hosting, Cloud & IT Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Secure, reliable infrastructure for your digital presence. We handle domain registration, hosting, server management, and ensure your systems are always online.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Cloud & Hosting Services</h2>
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
            <a href="https://www.memoinfotech.com/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg">
              Get Started <ArrowRight size={20} />
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
              <a href="https://www.memoinfotech.com/software-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Software Dev</a>
              <a href="https://www.memoinfotech.com/e-commerce-solutions/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">E-Commerce</a>
              <a href="https://www.memoinfotech.com/ai-automation/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">AI & Automation</a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">1000+</p>
              <p className="text-gray-600 mt-2">Domains Managed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">99.99%</p>
              <p className="text-gray-600 mt-2">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">24/7</p>
              <p className="text-gray-600 mt-2">Support Available</p>
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
              <p className="text-gray-600 mb-4">Beautiful websites hosted on our reliable infrastructure.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/mobile-app-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Scalable hosting for mobile backends.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/software-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Reliable infrastructure for enterprise software.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/e-commerce-solutions/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce</h3>
              <p className="text-gray-600 mb-4">Fast, secure hosting for online stores.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/ai-automation/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Compute resources for ML and automation.</p>
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

export default HostingCloudServices;

