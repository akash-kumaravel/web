import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Users, Target, Zap, Award, Lightbulb, TrendingUp, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingConsulting: React.FC = () => {
  useEffect(() => {
    document.title = 'Training, Internship & Consulting Services — Skills & Knowledge Transfer';
    const desc = 'Professional training programs, internship opportunities, consulting services for technology upskilling and business transformation.';
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
      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-tight text-black tracking-tighter mb-6">
            Training, Internship & Consulting
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Build skills, accelerate careers, and transform organizations with comprehensive training, internship programs, and strategic consulting services.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16">Training & Consulting Services</h2>
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
      </div>

      {/* Business Benefits */}
      <div className="py-32 bg-[#007BFF] text-white">
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
      </div>

      {/* CTA */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Ready to Invest in Skills?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Join our programs or let's discuss how we can help your organization transform.</p>
          
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
              <a href="https://www.memoinfotech.com/digital-marketing-services/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">Digital Marketing</a>
              <a href="https://www.memoinfotech.com/ai-automation/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black hover:shadow-lg transition-all">AI & Automation</a>
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
              <p className="text-gray-600 mb-4">Implement best practices with our training.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/web-design-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-4">Learn modern web development practices.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/mobile-app-development/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Master mobile app development techniques.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/digital-marketing-services/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Learn effective digital marketing strategies.</p>
              <span className="text-[#007BFF] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More →</span>
            </a>

            <a href="https://www.memoinfotech.com/ai-automation/" className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold font-['Syne'] text-black mb-3 group-hover:text-[#007BFF] transition-colors">AI & Automation</h3>
              <p className="text-gray-600 mb-4">Explore AI and automation opportunities.</p>
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

export default TrainingConsulting;

