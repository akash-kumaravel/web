import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Star, Code, Database, Globe, Zap, CheckCircle } from 'lucide-react';

const GraphicDesign: React.FC = () => {
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
      module: "Module 1: Design Fundamentals",
      topics: ["Color Theory", "Typography", "Composition", "Visual Hierarchy"],
      duration: "1 week"
    },
    {
      module: "Module 2: Adobe Creative Suite",
      topics: ["Photoshop Mastery", "Illustrator", "InDesign", "Brand Guidelines"],
      duration: "1.5 weeks"
    },
    {
      module: "Module 3: Branding & Marketing Design",
      topics: ["Logo Design", "Print Design", "Packaging", "Social Media Graphics"],
      duration: "1.5 weeks"
    },
    {
      module: "Module 4: Portfolio & Real Projects",
      topics: ["Professional Portfolio", "Client Work", "Industry Standards"],
      duration: "2 weeks"
    }
  ];

  const features = [
    { icon: <Code size={32} />, title: "Adobe Suite", description: "Master Photoshop, Illustrator, InDesign" },
    { icon: <Users size={32} />, title: "Expert Mentors", description: "Learn from award-winning designers" },
    { icon: <Clock size={32} />, title: "Self-Paced", description: "Learn at your own speed anytime, anywhere" },
    { icon: <Zap size={32} />, title: "Real Projects", description: "Work on actual branding assignments" },
    { icon: <Globe size={32} />, title: "Industry Skills", description: "Professional design techniques" },
    { icon: <Star size={32} />, title: "Portfolio Ready", description: "Build professional work samples" }
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
              Graphic Design
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Master professional graphic design using Adobe Creative Suite. Create stunning visual designs that captivate audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-white">
                <Clock size={20} />
                <span className="font-semibold">6 Weeks</span>
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
              Graphic design is a highly creative and lucrative career path. This course teaches you professional design principles and mastery of industry-standard tools.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From logo design to branding, learn to create visually compelling designs that communicate powerful messages and drive business results.
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
                    <p className="font-semibold text-black">Award Winners</p>
                    <p className="text-sm text-gray-600">Learn from award-winning designers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Professional Portfolio</p>
                    <p className="text-sm text-gray-600">Build industry-standard work</p>
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
          <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-6">Master Graphic Design</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 620+ designers creating professional visual designs for global brands.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/academy/web-designing"
              className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
            >
              <div className="h-56 overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/Website Development.png"
                  alt="Web Designing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                    Design
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                  Web Designing
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Learn visual design for the web, responsive layouts, and modern CSS techniques for beautiful sites.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Responsive Design
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    CSS Techniques
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Design Systems
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    6 weeks
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-bold group-hover:bg-blue-700 transition-all inline-block cursor-pointer">
                    View Course
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/academy/ui-ux-design-master"
              className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
            >
              <div className="h-56 overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/UI UX.png"
                  alt="UI/UX Design Master Course"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                    Design
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                  UI/UX Design Master Course
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Design user-centered interfaces, wireframing, prototyping and building a strong design portfolio.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Portfolio Project
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Design Tools
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Mentor Reviews
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    8 weeks
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-bold group-hover:bg-blue-700 transition-all inline-block cursor-pointer">
                    View Course
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/academy/motion-design-animation"
              className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
            >
              <div className="h-56 overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/Motion design.png"
                  alt="Motion Design & Animation Course"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                    Creative
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                  Motion Design & Animation Course
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Create motion graphics and animations for video, web and interactive media using industry-standard tools.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Animation Techniques
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Project Reel
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Software Included
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    10 weeks
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-bold group-hover:bg-blue-700 transition-all inline-block cursor-pointer">
                    View Course
                  </span>
                </div>
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

export default GraphicDesign;
