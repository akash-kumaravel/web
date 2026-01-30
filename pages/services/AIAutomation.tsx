import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Zap, Brain, Target, BarChart3, Workflow, Lightbulb, TrendingUp, Cpu, PieChart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomation: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'AI & Automation Solutions Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional AI and automation solutions company in Nagercoil, Tamil Nadu, offering custom AI models, chatbots, process automation, and machine learning solutions.';
    
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

    setOGMeta('og:title', 'AI & Automation Solutions Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/ai-automation/');

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
          "name": "AI & Automation",
          "item": "https://www.memoinfotech.com/services/ai-automation/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & Automation",
      "description": "Leverage AI, machine learning, chatbots, process automation, and advanced analytics to transform your business operations. Custom AI solutions for intelligent automation.",
      "provider": {
        "@type": "Organization",
        "name": "Memo Infotech",
        "url": "https://www.memoinfotech.com",
        "logo": "https://www.memoinfotech.com/logo.png",
        "sameAs": ["https://www.facebook.com/Memoinfotech", "https://www.linkedin.com/company/Memoinfotech"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "Customer Service"
        }
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Nagercoil, Tamil Nadu, India"
      },
      "serviceType": "AI & Automation",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Custom AI Solutions", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "AI Chatbots", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Process Automation", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert AI and automation agency specializing in intelligent business solutions and machine learning.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "sameAs": ["https://www.facebook.com/Memoinfotech", "https://www.linkedin.com/company/Memoinfotech"],
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
      icon: <Brain size={32} />,
      title: "Custom AI Solutions",
      description: "Build custom AI models and solutions tailored to your specific business needs."
    },
    {
      icon: <Zap size={32} />,
      title: "AI Chatbots",
      description: "Intelligent chatbots for customer service, lead generation, and support automation."
    },
    {
      icon: <Workflow size={32} />,
      title: "Process Automation",
      description: "Automate manual processes with RPA and workflow automation to increase efficiency."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Advanced Analytics",
      description: "Data analytics, predictive modeling, and business intelligence solutions."
    },
    {
      icon: <Cpu size={32} />,
      title: "Machine Learning",
      description: "ML models for classification, regression, recommendation, and anomaly detection."
    },
    {
      icon: <Sparkles size={32} />,
      title: "AI Optimization",
      description: "Optimize business processes with AI-powered algorithms and decision systems."
    }
  ];

  const caseStudies = [
    {
      title: "Customer Service Automation",
      client: "E-Commerce Platform",
      challenge: "Handle 10,000+ customer queries daily with limited support staff",
      solution: "Built AI chatbot using NLP, integrated with CRM for intelligent routing",
      result: "80% queries resolved by chatbot, 60% support cost reduction",
      metrics: ["80% Automated", "60% Savings", "90% Satisfaction"]
    },
    {
      title: "Predictive Analytics System",
      client: "Financial Institution",
      challenge: "Predict customer churn and identify high-risk accounts",
      solution: "Developed ML models using historical data, real-time scoring system",
      result: "92% churn prediction accuracy, $5M revenue retained",
      metrics: ["92% Accuracy", "$5M Saved", "Real-time"]
    },
    {
      title: "Business Process Automation",
      client: "Manufacturing Company",
      challenge: "Manual inventory and order processing taking 40 hours/week",
      solution: "Implemented RPA bots for order processing and inventory management",
      result: "100% automation, 40 hours/week saved, zero errors",
      metrics: ["40hrs Saved", "100% Accuracy", "Zero Errors"]
    }
  ];

  const features = [
    {
      icon: <Brain size={32} />,
      title: "Deep Learning",
      description: "Advanced neural networks for image recognition, NLP, and complex patterns."
    },
    {
      icon: <Target size={32} />,
      title: "Predictive Models",
      description: "Forecast trends, customer behavior, and business outcomes accurately."
    },
    {
      icon: <Workflow size={32} />,
      title: "Process Automation",
      description: "Automate repetitive tasks and complex business workflows."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analytics",
      description: "Extract insights from big data and unstructured information."
    },
    {
      icon: <PieChart size={32} />,
      title: "Business Intelligence",
      description: "Interactive dashboards and reports for data-driven decisions."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation Strategy",
      description: "Guide your AI transformation journey with expert consulting."
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate tasks, reduce manual work, and improve operational efficiency."
    },
    {
      title: "Better Decisions",
      description: "Data-driven insights and predictive analytics for smarter business decisions."
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through automation and process optimization."
    },
    {
      title: "Competitive Edge",
      description: "Leverage AI for innovation and stay ahead of competitors."
    },
    {
      title: "Scalability",
      description: "AI systems scale with your business without proportional cost increases."
    },
    {
      title: "Better Experiences",
      description: "Personalized customer experiences and improved service quality."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            AI & Automation Solutions Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your business with artificial intelligence, machine learning, and intelligent automation. Increase efficiency, reduce costs, and gain competitive advantage.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>AI and automation solutions company in Nagercoil, Tamil Nadu</strong>, helping businesses across Kanyakumari district leverage intelligent automation for growth.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: AI & Automation Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our AI and Automation Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our AI &amp; Automation Services</h2>
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

        {/* ==================== Section 2: Advanced AI Capabilities ====================*/}
        <section className="py-32 bg-black text-white" aria-label="Advanced AI Capabilities" role="region">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-['Syne'] mb-4">Advanced AI &amp; Automation Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Cutting-edge technology and intelligent solutions to transform your business operations.</p>
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
        </section>

        {/* Business Benefits */}
        <section className="py-32 bg-[#007BFF] text-white" aria-label="Why Choose Our AI Solutions" role="region">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Why Choose Our AI Solutions</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Transform your business with intelligent automation and AI-driven insights</p>
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
        </section>

        {/* CTA */}
        <section className="py-32 bg-white" aria-label="Call to Action" role="region">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Transform with AI?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's explore how AI and automation can revolutionize your business operations.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your AI Automation Project">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all" aria-label="View All Services">
              View All Services
            </Link>
          </div>


        </div>
      </section>

      {/* Related Services */}
      <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Build intelligent applications with AI integration.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design and Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">AI-powered web experiences and personalization.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing Services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">AI-driven marketing optimization and analytics.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/hosting-cloud-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Hosting and Cloud Services">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Hosting & Cloud</h3>
              <p className="text-gray-600 mb-4">Scalable infrastructure for AI workloads.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/testing-qa" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Testing and QA">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Testing & QA</h3>
              <p className="text-gray-600 mb-4">Quality assurance for AI systems.</p>
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

export default AIAutomation;

