import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Star, Code, Database, Globe, Zap } from 'lucide-react';

const DataAnalytics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.to(".course-hero-img", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".course-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        gsap.from(".course-content > *", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".course-content",
            start: "top 85%"
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  const curriculum = [
    {
      module: "Module 1: Python Fundamentals for Data",
      topics: ["Python Syntax", "Data Structures", "Libraries (NumPy, Pandas)", "Data Cleaning & Preprocessing"],
      duration: "2.5 weeks"
    },
    {
      module: "Module 2: SQL & Database Queries",
      topics: ["SQL Basics", "Advanced Queries", "Joins & Subqueries", "Window Functions"],
      duration: "2 weeks"
    },
    {
      module: "Module 3: Data Visualization",
      topics: ["Matplotlib & Seaborn", "Tableau", "Dashboard Design", "Storytelling with Data"],
      duration: "2.5 weeks"
    },
    {
      module: "Module 4: Statistical Analysis",
      topics: ["Descriptive Statistics", "Hypothesis Testing", "Regression Analysis", "Business Intelligence"],
      duration: "2.5 weeks"
    },
    {
      module: "Module 5: Real-World Projects",
      topics: ["End-to-End Data Analysis", "Portfolio Projects", "Industry Case Studies"],
      duration: "0.5 weeks"
    }
  ];

  const features = [
    { icon: <Database size={32} />, title: "Data Manipulation", description: "Master Python and SQL for data handling" },
    { icon: <Users size={32} />, title: "Job Assistance", description: "Career guidance and job placement support" },
    { icon: <Clock size={32} />, title: "Self-Paced", description: "Learn at your own speed anytime, anywhere" },
    { icon: <Zap size={32} />, title: "Practical Skills", description: "Industry-used tools and frameworks" },
    { icon: <Globe size={32} />, title: "Real Data", description: "Work with actual business datasets" },
    { icon: <Star size={32} />, title: "Lifetime Access", description: "Complete course access forever" }
  ];

  return (
    <div ref={containerRef} className="bg-white w-full min-h-screen">
      <div className="fixed top-0 left-0 h-1 bg-[#007BFF] z-50 w-full transform origin-left scale-x-0 course-progress"></div>

      <div className="course-hero relative h-[60vh] overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#0056cc]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 py-20">
            <Link to="/academy" className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest mb-6 hover:text-gray-200 transition-colors">
              <ArrowLeft size={16} /> Back to Academy
            </Link>
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none mb-6 text-white max-w-4xl">
              Data Analytics
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Transform raw data into actionable insights. Learn Python, SQL, and visualization tools used by Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-white">
                <Clock size={20} />
                <span className="font-semibold">10 Weeks</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="course-content grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Course Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Learn data analytics from the ground up. This course teaches you how to extract, analyze, and visualize data to drive business decisions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Work with real datasets, master industry-standard tools, and build a portfolio of analytics projects that showcase your skills to employers.
            </p>

            <h3 className="text-3xl font-bold font-['Syne'] text-black mb-8">Curriculum</h3>
            <div className="space-y-6">
              {curriculum.map((item, idx) => (
                <div key={idx} className="border-l-4 border-[#007BFF] pl-6 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-black">{item.module}</h4>
                    <span className="text-sm font-semibold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">{item.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, i) => (
                      <span key={i} className="text-gray-600 text-sm">{topic}{i < item.topics.length - 1 ? ',' : ''}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-32">
              <Link to="/enroll" className="block w-full bg-[#007BFF] text-white rounded-full font-bold py-4 hover:bg-black transition-all mb-3 text-center">
                Enroll Now
              </Link>

              <Link to="/contact" className="block w-full border-2 border-[#007BFF] text-[#007BFF] rounded-full font-bold py-3 text-center hover:bg-[#007BFF] hover:text-white transition-all mb-8">
                Ask Questions
              </Link>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Self-Paced Learning</p>
                    <p className="text-sm text-gray-600">Learn at your own speed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Job Assistance</p>
                    <p className="text-sm text-gray-600">Interview & placement prep</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Real Projects</p>
                    <p className="text-sm text-gray-600">Build your portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
                <div className="text-[#007BFF] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-6">Ready to Start Your Analytics Journey?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 800+ data professionals transforming their careers with our comprehensive analytics program.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/enroll" className="px-8 py-4 bg-white text-[#007BFF] rounded-full font-bold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
              Enroll Now <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#007BFF] transition-all inline-flex items-center justify-center gap-2">
              Schedule Demo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Other Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/academy/full-stack-web-development" className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <Code size={64} className="text-white opacity-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#007BFF]">Full Stack Web Development</h3>
                <p className="text-gray-600 text-sm mb-4">Learn front-end and back-end web development and deploy production-ready applications.</p>
                <span className="text-[#007BFF] font-semibold">12 weeks</span>
              </div>
            </Link>
            <Link to="/academy/frontend-web-development" className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <Code size={64} className="text-white opacity-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#007BFF]">Frontend Web Development</h3>
                <p className="text-gray-600 text-sm mb-4">Master React, JavaScript, and modern frontend technologies to build interactive web applications.</p>
                <span className="text-[#007BFF] font-semibold">8 weeks</span>
              </div>
            </Link>
            <Link to="/academy/python-programming" className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <Code size={64} className="text-white opacity-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#007BFF]">Python Programming</h3>
                <p className="text-gray-600 text-sm mb-4">Start with Python fundamentals and move to data handling, scripting, and applications.</p>
                <span className="text-[#007BFF] font-semibold">6 weeks</span>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link to="/academy" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold hover:bg-black transition-all">
              View All Courses <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;
