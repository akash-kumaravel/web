import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Apple, Code, Zap, Gauge, Shield, Rocket, Users, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = 'Mobile App Development Services — iOS & Android Apps';
    const desc = 'Professional mobile app development for iOS, Android, and cross-platform apps. Native and hybrid app development with seamless user experiences.';
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
      icon: <Apple size={32} />,
      title: "iOS App Development",
      description: "Native iOS applications built with Swift, optimized for iPhone, iPad, and Apple ecosystem integration."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Android App Development",
      description: "High-performance Android apps using Kotlin and Java, fully optimized for diverse Android devices."
    },
    {
      icon: <Code size={32} />,
      title: "Cross-Platform Apps",
      description: "Efficient cross-platform development using Flutter and React Native for maximum reach and code reuse."
    },
    {
      icon: <Zap size={32} />,
      title: "Mobile App UI/UX Design",
      description: "Beautiful, intuitive mobile interfaces designed for touch interaction and optimal user experience."
    },
    {
      icon: <Gauge size={32} />,
      title: "App Testing & QA",
      description: "Comprehensive testing across devices, OS versions, and network conditions ensuring app reliability."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "App Maintenance & Updates",
      description: "Ongoing support, bug fixes, feature updates, and performance optimization for long-term success."
    }
  ];

  const caseStudies = [
    {
      title: "Fintech Mobile App",
      client: "Digital Banking Startup",
      challenge: "Need secure, user-friendly mobile banking experience",
      solution: "Built iOS and Android apps with biometric security, real-time transactions, and intuitive UI",
      result: "500K+ downloads, 4.7★ rating, $10M+ transactions processed",
      metrics: ["500K+ Downloads", "4.7★ Rating", "Secure & Fast"]
    },
    {
      title: "Fitness Tracking App",
      client: "Health & Wellness Company",
      challenge: "Complex features requiring optimal performance",
      solution: "Developed cross-platform app with real-time tracking, social features, and wearable integration",
      result: "250K active users, 45% user retention, featured on app stores",
      metrics: ["250K Users", "45% Retention", "App Store Featured"]
    },
    {
      title: "E-Commerce Mobile App",
      client: "Retail Business",
      challenge: "Need mobile sales channel with seamless checkout",
      solution: "Built iOS and Android apps with AR product preview and one-click checkout",
      result: "60% of sales from mobile, 3.8★ rating, $5M annual revenue",
      metrics: ["60% Mobile Sales", "3.8★ Rating", "$5M Revenue"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "High Performance",
      description: "Optimized code and architecture for fast load times and smooth 60 FPS experiences."
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Privacy",
      description: "Industry-standard security practices with encryption, secure storage, and data protection."
    },
    {
      icon: <Rocket size={32} />,
      title: "Offline Functionality",
      description: "Apps work seamlessly even without internet connection with smart data synchronization."
    },
    {
      icon: <Users size={32} />,
      title: "Push Notifications",
      description: "Engaging push notifications and in-app messaging to keep users informed and engaged."
    },
    {
      icon: <Layers size={32} />,
      title: "Platform Integration",
      description: "Seamless integration with device features, APIs, and third-party services."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Analytics Tracking",
      description: "Comprehensive analytics to track user behavior, crashes, and app performance metrics."
    }
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: "Mobile apps open new revenue streams through app store sales, in-app purchases, and engagement."
    },
    {
      title: "Customer Engagement",
      description: "Direct access to customers with push notifications and personalized experiences."
    },
    {
      title: "Brand Loyalty",
      description: "Dedicated mobile apps strengthen brand relationships and improve customer retention."
    },
    {
      title: "Competitive Edge",
      description: "Meet customer expectations and stay ahead of competitors with mobile-first strategies."
    },
    {
      title: "Business Intelligence",
      description: "Rich analytics provide insights into user behavior and business performance."
    },
    {
      title: "Scalability",
      description: "Apps grow with your business handling millions of users and complex functionality."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We build powerful mobile applications that engage users and drive business growth. From iOS and Android to cross-platform solutions, we create apps users love.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our App Development Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Advanced Mobile Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive app development features that ensure excellence and success.</p>
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
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how mobile apps drive engagement, revenue, and business growth</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Launch Your App?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's build a mobile app that your users will love and your business will thrive with.</p>
          
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
              <a href="https://www.memoinfotech.com/software-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Software Dev</a>
              <a href="https://www.memoinfotech.com/web-design-development/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Web Design</a>
              <a href="https://www.memoinfotech.com/testing-qa/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Testing & QA</a>
              <a href="https://www.memoinfotech.com/hosting-cloud-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Hosting & Cloud</a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">75+</p>
              <p className="text-gray-600 mt-2">Apps Launched</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">50M+</p>
              <p className="text-gray-600 mt-2">Total Downloads</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">4.6★</p>
              <p className="text-gray-600 mt-2">Avg. App Rating</p>
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
              <p className="text-gray-600 mb-4">Create beautiful app interfaces with professional UI/UX design.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/software-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Development</h3>
              <p className="text-gray-600 mb-4">Build robust backend systems for your mobile applications.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/web-design-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Development</h3>
              <p className="text-gray-600 mb-4">Develop web platforms to complement your mobile app ecosystem.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/testing-qa/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing & QA</h3>
              <p className="text-gray-600 mb-4">Ensure your app quality with comprehensive testing services.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/digital-marketing-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Launch and grow your app with targeted marketing strategies.</p>
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

export default MobileAppDevelopment;
