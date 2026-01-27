import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Zap, Brain, Target, BarChart3, Workflow, Lightbulb, TrendingUp, Cpu, PieChart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomation: React.FC = () => {
  useEffect(() => {
    document.title = 'AI, Automation & Advanced Solutions — Smart Business Technology';
    const desc = 'Leverage AI, machine learning, chatbots, process automation, and advanced analytics to transform your business operations.';
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-[#007BFF] font-semibold mb-6 hover:gap-3 transition-all">
          ← Back to Services
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            AI, Automation & Advanced Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your business with artificial intelligence, machine learning, and intelligent automation. Increase efficiency, reduce costs, and gain competitive advantage.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">AI & Automation Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Advanced AI Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Cutting-edge technology to transform your business.</p>
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
      </div>

      {/* CTA */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Transform with AI?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's explore how AI and automation can revolutionize your business operations.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg">
              Get Started <ArrowRight size={20} />
            </a>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">150+</p>
              <p className="text-gray-600 mt-2">AI Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">$100M+</p>
              <p className="text-gray-600 mt-2">Client Value Created</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#007BFF] font-['Syne']">5x</p>
              <p className="text-gray-600 mt-2">Average ROI Increase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomation;
