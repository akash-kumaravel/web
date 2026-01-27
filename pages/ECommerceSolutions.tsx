import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Package, Gauge, Shield, Rocket, Users, Layers, TrendingUp, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ECommerceSolutions: React.FC = () => {
  useEffect(() => {
    document.title = 'E-Commerce Solutions — Online Store Development';
    const desc = 'Professional e-commerce development including Shopify, WooCommerce, payment gateways, inventory management, and complete online store solutions.';
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
      icon: <ShoppingCart size={32} />,
      title: "Online Store Development",
      description: "Custom e-commerce platforms built on modern technology with complete functionality."
    },
    {
      icon: <Settings size={32} />,
      title: "Shopify & WooCommerce Stores",
      description: "Pre-built platform stores optimized for quick launch and ease of management."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payment Gateway Integration",
      description: "Secure integration with all major payment gateways and wallets for smooth transactions."
    },
    {
      icon: <Package size={32} />,
      title: "Product & Order Management",
      description: "Comprehensive product catalog, inventory tracking, and order management systems."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Inventory Management",
      description: "Real-time inventory tracking, stock alerts, and automated management systems."
    },
    {
      icon: <Layers size={32} />,
      title: "E-commerce Maintenance",
      description: "Ongoing support, updates, performance optimization, and security monitoring."
    }
  ];

  const caseStudies = [
    {
      title: "Fashion Retail Platform",
      client: "Clothing E-Commerce Business",
      challenge: "Legacy store with poor UX and low conversion rates",
      solution: "Built modern e-commerce platform with AR product view and one-click checkout",
      result: "300% sales increase, 50% higher conversion rate, $10M annual revenue",
      metrics: ["300% Sales", "50% Conversion", "$10M Revenue"]
    },
    {
      title: "Multi-Vendor Marketplace",
      client: "Marketplace Startup",
      challenge: "Need platform for multiple sellers and complex inventory",
      solution: "Developed custom marketplace with vendor management, ratings, and reviews",
      result: "1000+ vendors, $50M GMV in Year 1, 4.8★ rating",
      metrics: ["1000+ Vendors", "$50M GMV", "4.8★ Rating"]
    },
    {
      title: "B2B Online Store",
      client: "Manufacturing Company",
      challenge: "Need B2B ordering platform for wholesale business",
      solution: "Built custom B2B platform with bulk ordering, custom pricing, and accounts",
      result: "80% of revenue from online, $5M monthly orders, 500+ B2B customers",
      metrics: ["80% Online", "$5M Orders", "500+ Customers"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "High Performance",
      description: "Fast-loading stores optimized for conversion and user experience."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Transactions",
      description: "PCI-DSS compliant, SSL encrypted, and fraud detection systems."
    },
    {
      icon: <Rocket size={32} />,
      title: "Conversion Optimization",
      description: "Built-in optimization for cart recovery, upsells, and customer retention."
    },
    {
      icon: <Users size={32} />,
      title: "Customer Management",
      description: "CRM integration, loyalty programs, and personalized recommendations."
    },
    {
      icon: <Package size={32} />,
      title: "Order Fulfillment",
      description: "Automated order processing, shipping integration, and tracking."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Business Analytics",
      description: "Comprehensive sales analytics, customer insights, and business reports."
    }
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: "E-commerce opens new sales channels and reaches customers 24/7."
    },
    {
      title: "Better Customer Experience",
      description: "Seamless shopping experience leads to higher satisfaction and loyalty."
    },
    {
      title: "Lower Overhead",
      description: "Reduce physical store costs with online sales channels."
    },
    {
      title: "Scalability",
      description: "Grow your business without proportional increase in operating costs."
    },
    {
      title: "Market Expansion",
      description: "Reach customers globally with online store presence."
    },
    {
      title: "Data-Driven Decisions",
      description: "Rich analytics provide insights for business optimization and growth."
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
            E-Commerce Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your business with comprehensive e-commerce platforms. We handle everything from store development to payment integration and inventory management.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our E-Commerce Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">E-Commerce Excellence Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive e-commerce features that drive sales and customer satisfaction.</p>
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
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how e-commerce platforms drive revenue and growth</p>
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
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Launch Your E-Commerce Store?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's build a powerful online store that drives sales and grows your business.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg">
              Start Your Store <ArrowRight size={20} />
            </a>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">100+</p>
              <p className="text-gray-600 mt-2">Stores Launched</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">$500M+</p>
              <p className="text-gray-600 mt-2">Client Sales Volume</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">99.9%</p>
              <p className="text-gray-600 mt-2">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceSolutions;
