import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Users, Target, Zap, Award, Lightbulb, TrendingUp, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingConsulting: React.FC = () => {
  useEffect(() => {
    // ==================== SEO: Meta Tags ====================
    document.title = 'Training & Consulting Company in Nagercoil, Tamil Nadu | Memo Infotech';
    const desc = 'Memo Infotech is a professional training and consulting company in Nagercoil, Tamil Nadu, offering technology training programs, internship opportunities, and business transformation consulting.';
    
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

    setOGMeta('og:title', 'Training & Consulting Company in Nagercoil, Tamil Nadu | Memo Infotech');
    setOGMeta('og:description', desc);
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', 'https://www.memoinfotech.com/services/training-consulting/');

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
          "name": "Training & Consulting",
          "item": "https://www.memoinfotech.com/services/training-consulting/"
        }
      ]
    };

    // ==================== SEO: Service Schema ====================
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Training & Consulting",
      "description": "Professional training programs, internship opportunities, consulting services for technology upskilling and business transformation. Expert mentorship and real-world project experience.",
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
      "serviceType": "Training & Consulting",
      "hasOfferingDetails": [
        { "@type": "OfferingDetails", "name": "Technical Training Programs", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Internship Programs", "priceRange": "Custom Quote" },
        { "@type": "OfferingDetails", "name": "Consulting Services", "priceRange": "Custom Quote" }
      ]
    };

    // ==================== SEO: Organization Schema ====================
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Memo Infotech",
      "url": "https://www.memoinfotech.com",
      "logo": "https://www.memoinfotech.com/logo.png",
      "description": "Expert training and consulting agency specializing in technology upskilling, internship programs, and business transformation.",
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
      icon: <BookOpen size={32} />,
      title: "Technical Training Programs",
      description: "Web development, mobile apps, backend systems, AI/ML, cloud, DevOps training."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Internship Programs",
      description: "Structured internship programs with real project experience and mentorship."
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Training",
      description: "Customized training for teams on new technologies and best practices."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Consulting Services",
      description: "Technology consulting, architecture guidance, and strategic advisory services."
    },
    {
      icon: <Code size={32} />,
      title: "Coding Bootcamps",
      description: "Intensive bootcamps to build marketable tech skills in 12-16 weeks."
    },
    {
      icon: <Award size={32} />,
      title: "Certification Programs",
      description: "Industry-recognized certifications in development, cloud, and emerging tech."
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Team Upskilling",
      client: "Fortune 500 Tech Company",
      challenge: "Train 200+ employees on cloud-native development and DevOps practices",
      solution: "Customized curriculum, hands-on labs, project assignments, continuous support",
      result: "95% completion rate, 40+ employees promoted, $10M+ project deliveries",
      metrics: ["95% Completion", "40+ Promotions", "$10M Delivered"]
    },
    {
      title: "Startup Internship Program",
      client: "Fintech Startup",
      challenge: "Build young talent pool while completing critical projects",
      solution: "Structured 6-month program with mentorship, projects, and skill building",
      result: "12 interns hired full-time, 5 major features delivered, 90% retention",
      metrics: ["12 Hired", "5 Features", "90% Retention"]
    },
    {
      title: "Digital Transformation Consulting",
      client: "Manufacturing Enterprise",
      challenge: "Guide organization through digital transformation journey",
      solution: "Strategy consulting, technology assessment, implementation guidance, training",
      result: "Defined transformation roadmap, 3-year plan, immediate 20% efficiency gain",
      metrics: ["Roadmap Set", "20% Gain", "3-Yr Plan"]
    }
  ];

  const features = [
    {
      icon: <Lightbulb size={32} />,
      title: "Expert Instructors",
      description: "Experienced professionals with real-world industry experience teaching."
    },
    {
      icon: <Target size={32} />,
      title: "Hands-On Learning",
      description: "Practical projects and assignments for real skill development."
    },
    {
      icon: <Zap size={32} />,
      title: "Flexible Format",
      description: "Online, in-person, or hybrid training options to fit your schedule."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Career Support",
      description: "Job placement assistance and career guidance for graduates."
    },
    {
      icon: <Award size={32} />,
      title: "Certifications",
      description: "Industry-recognized certificates upon program completion."
    },
    {
      icon: <Users size={32} />,
      title: "Ongoing Support",
      description: "Mentorship, community access, and continuous learning resources."
    }
  ];

  const benefits = [
    {
      title: "Skill Development",
      description: "Build in-demand skills and stay current with technology trends."
    },
    {
      title: "Career Advancement",
      description: "Gain certifications and experience for career growth and promotions."
    },
    {
      title: "Business Transformation",
      description: "Consulting guides your organization through digital initiatives successfully."
    },
    {
      title: "Talent Building",
      description: "Build internal talent pipeline and reduce external hiring costs."
    },
    {
      title: "Knowledge Transfer",
      description: "Transfer expertise and ensure organizational knowledge continuity."
    },
    {
      title: "Innovation Capability",
      description: "Build capability for innovation and technology adoption."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* ==================== SEMANTIC HTML: Header with H1 ====================*/}
      <header className="pt-40 pb-20 container mx-auto px-6" role="region" aria-label="Page Header">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Training & Consulting Company in Nagercoil, Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Build skills, accelerate careers, and transform organizations with comprehensive training, internship programs, and strategic consulting services.
          </p>
        </div>
      </header>

      <main className="w-full" role="main" aria-label="Main Content">
        {/* ==================== Section 0: Service Location ====================*/}
        <section className="py-16 bg-blue-50 border-t-4 border-[#007BFF]" aria-label="Service Location" role="region">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Memo Infotech</strong> is a trusted <strong>training and consulting company in Nagercoil, Tamil Nadu</strong>, serving professionals and businesses across Kanyakumari district with comprehensive skill development and transformation programs.
            </p>
          </div>
        </section>
        {/* ==================== Section 1: Training & Consulting Services ====================*/}
        <section className="py-32 bg-white" aria-label="Our Training and Consulting Services" role="region">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Training &amp; Consulting Services</h2>
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

        {/* Advanced Features Section */}
        <section className="py-32 bg-black text-white" aria-label="Learning Excellence" role="region">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Learning Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive learning and consulting solutions for individuals and organizations.</p>
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
        <section className="py-32 bg-[#007BFF] text-white" aria-label="Business Benefits" role="region">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Why Choose Our Programs</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Build skills, advance careers, and transform organizations with expert guidance</p>
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

        {/* ==================== Section 4: CTA ====================*/}
      <section className="py-32 bg-white" aria-label="Call to Action" role="region">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Invest in Skills?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Join our programs or let's discuss how we can help your organization transform.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all shadow-lg" aria-label="Start Your Training and Consulting Project">
              Start Your Project <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold hover:bg-[#007BFF] hover:text-white transition-all">
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* ==================== Section 5: Related Services ====================*/}
      <section className="py-32 bg-gray-50" aria-label="Related Services" role="region">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/software-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Software Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Software Dev</h3>
              <p className="text-gray-600 mb-4">Implement best practices with our training.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/web-design-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Web Design">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Learn modern web development practices.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/mobile-app-development" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Mobile App Development">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Master mobile app development techniques.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/digital-marketing-services" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about Digital Marketing">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Learn effective digital marketing strategies.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </Link>

            <Link to="/services/ai-automation" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all" aria-label="Learn more about AI & Automation">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Explore AI and automation opportunities.</p>
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

export default TrainingConsulting;

