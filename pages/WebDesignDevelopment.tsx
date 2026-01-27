import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Code, Smartphone, Zap, Eye, TrendingUp, Shield, Rocket, Users, Layers, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesignDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = 'Web Design & Development Services — Professional Web Solutions';
    const desc = 'Expert web design and development services including static sites, dynamic web applications, e-commerce platforms, and website maintenance. Built with React, Next.js, and modern technologies.';
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
      title: "Static & Dynamic Websites",
      description: "Fast-loading static sites for information-heavy platforms, combined with dynamic functionality for interactive user experiences and real-time data management."
    },
    {
      icon: <Eye size={32} />,
      title: "Business / Corporate Websites",
      description: "Professional, credible online presences designed to establish authority, communicate your value proposition, and generate qualified leads."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Portfolio Websites",
      description: "Stunning showcase sites for creative professionals, artists, and freelancers to display their best work and attract new opportunities."
    },
    {
      icon: <Zap size={32} />,
      title: "E-commerce Websites",
      description: "Feature-rich online stores with secure payment processing, inventory management, and conversion-optimized checkout experiences."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Landing Pages",
      description: "High-converting landing pages designed specifically for campaigns, product launches, and lead generation with compelling CTAs."
    },
    {
      icon: <Code size={32} />,
      title: "Website Redesign",
      description: "Modernize your existing website with updated design, improved performance, better SEO, and enhanced user experience."
    },
    {
      icon: <Zap size={32} />,
      title: "Website Maintenance & Support",
      description: "Ongoing support including updates, security monitoring, performance optimization, and technical assistance for peace of mind."
    }
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "Docker",
    "Three.js"
  ];

  const process = [
    { step: "Discovery", desc: "Understanding your goals, target audience, and requirements" },
    { step: "Design", desc: "Creating wireframes and mockups for your approval" },
    { step: "Development", desc: "Building your site with clean, scalable code" },
    { step: "Testing", desc: "Rigorous QA to ensure performance and functionality" },
    { step: "Launch", desc: "Deployment with ongoing support and monitoring" }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "Fashion Retail Brand",
      challenge: "Outdated website with poor conversion rates",
      solution: "Built modern e-commerce platform with React, integrated payment gateway, and inventory management",
      result: "250% increase in online sales, 40% improvement in site speed",
      metrics: ["250% Sales Growth", "40% Speed Improvement", "35% Higher Conversion"]
    },
    {
      title: "SaaS Platform Launch",
      client: "B2B Software Company",
      challenge: "Need for scalable web application with real-time features",
      solution: "Developed Next.js application with GraphQL backend, real-time notifications, and analytics dashboard",
      result: "Successfully onboarded 500+ users in first month, 99.9% uptime",
      metrics: ["500+ Users", "99.9% Uptime", "Real-time Features"]
    },
    {
      title: "Corporate Rebranding Website",
      client: "Financial Services Firm",
      challenge: "Complete website redesign with brand refresh",
      solution: "Created modern, professional website with storytelling focus and lead generation forms",
      result: "50% increase in qualified leads, 60% improvement in user engagement",
      metrics: ["50% Lead Growth", "60% More Engagement", "First Page Google Ranking"]
    }
  ];

  const features = [
    {
      icon: <Gauge size={32} />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with lazy loading, code splitting, and CDN delivery ensuring sub-2 second load times."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "SSL/TLS encryption, OWASP compliance, regular security audits, and data protection protocols."
    },
    {
      icon: <Rocket size={32} />,
      title: "Conversion Optimization",
      description: "A/B testing, heat mapping, and user behavior analysis to maximize ROI and customer acquisition."
    },
    {
      icon: <Users size={32} />,
      title: "User Experience Design",
      description: "Intuitive interfaces, smooth interactions, and accessibility standards (WCAG 2.1 AA compliance)."
    },
    {
      icon: <Layers size={32} />,
      title: "Scalable Architecture",
      description: "Cloud-based infrastructure that grows with your business, handling millions of users seamlessly."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Analytics & Insights",
      description: "Integrated analytics tracking, detailed reports, and actionable insights for continuous improvement."
    }
  ];

  const benefits = [
    {
      title: "Increased Brand Credibility",
      description: "A professional, well-designed website builds trust with visitors and establishes your authority in your industry."
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized user experience and persuasive design elements guide visitors toward taking desired actions."
    },
    {
      title: "Improved Search Rankings",
      description: "SEO-optimized architecture and content strategies help your site rank higher in search results for relevant keywords."
    },
    {
      title: "Mobile-First Accessibility",
      description: "Responsive design ensures perfect functionality and appearance on all devices, reaching customers anywhere."
    },
    {
      title: "Faster Page Load Times",
      description: "Optimized performance reduces bounce rates and improves both user satisfaction and search engine rankings."
    },
    {
      title: "Long-Term Cost Savings",
      description: "Clean, maintainable code and scalable infrastructure reduce technical debt and future development costs."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Web Design & Web Development
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We create stunning, high-performance websites that captivate and convert. From static landing pages to dynamic web applications using React, Next.js, and WebGL, we build digital experiences that drive results.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Our Web Services</h2>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Advanced Features & Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Built-in capabilities designed to help your website perform at its best and exceed expectations.</p>
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
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Business Benefits</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Discover how our web solutions drive measurable business growth and impact</p>
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

      {/* Why Choose Us */}
      <div className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] mb-16">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance-First Approach</h3>
                  <p className="text-blue-100">Lightning-fast load times and smooth interactions that keep users engaged.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
                  <p className="text-blue-100">Built with search engines in mind to ensure your site ranks well and drives organic traffic.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                  <p className="text-blue-100">Perfect appearance and functionality across all devices and screen sizes.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
                  <p className="text-blue-100">Industry-standard security practices and GDPR compliance for user data protection.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-blue-100">Dedicated support team to handle updates, maintenance, and any issues that arise.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                  <p className="text-blue-100">Your website grows with your business, handling increased traffic and functionality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Build Your Web Presence?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let's create a stunning website that attracts customers and drives growth for your business. Our team is ready to discuss your project.</p>
          
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
              <a href="https://www.memoinfotech.com/graphic-design-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Graphic Design</a>
              <a href="https://www.memoinfotech.com/digital-marketing-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Digital Marketing</a>
              <a href="https://www.memoinfotech.com/e-commerce-solutions/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">E-Commerce</a>
              <a href="https://www.memoinfotech.com/hosting-cloud-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Hosting & Cloud</a>
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
              <p className="text-gray-600 mb-4">Beautiful interfaces paired with your web development for seamless user experiences.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/graphic-design-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Graphic Design</h3>
              <p className="text-gray-600 mb-4">Professional branding and visual assets to complement your web presence.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/digital-marketing-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Drive traffic and conversions for your website with targeted marketing strategies.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/e-commerce-solutions/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">E-Commerce Solutions</h3>
              <p className="text-gray-600 mb-4">Build powerful online stores integrated with your website development.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/hosting-cloud-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Hosting & Cloud</h3>
              <p className="text-gray-600 mb-4">Reliable hosting and infrastructure to keep your website running 24/7.</p>
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

export default WebDesignDevelopment;
