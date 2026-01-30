import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Star, Code, Database, Globe, Zap, CheckCircle } from 'lucide-react';

const MERNStack: React.FC = () => {
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

  useEffect(() => {
    document.title = 'MERN Stack Course in Nagercoil | Memo Infotech Academy';

    const desc = 'Learn MERN Stack course in Nagercoil at Memo Infotech Academy. Master MongoDB, Express, React, Node.js, real projects, certification and internship support.';

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) metaDesc.content = desc;
    else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = desc;
      document.head.appendChild(metaDesc);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.memoinfotech.com/academy/mern-stack';
  }, []);

  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "MERN Stack Course in Nagercoil",
      "description": "Professional MERN Stack course in Nagercoil by Memo Infotech Academy covering MongoDB, Express, React, Node.js, real projects and certification.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Memo Infotech Academy",
        "url": "https://www.memoinfotech.com/academy"
      },
      "educationalCredentialAwarded": "Certificate",
      "timeRequired": "P10W",
      "courseMode": "Offline",
      "inLanguage": "en",
      "locationCreated": {
        "@type": "Place",
        "name": "Nagercoil, Tamil Nadu, India"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(courseSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const features = [
    { icon: <Code size={32} />, title: "Modern Stack", description: "MongoDB, Express, React, Node.js" },
    { icon: <Users size={32} />, title: "Expert Mentors", description: "Learn from experienced developers" },
    { icon: <Clock size={32} />, title: "Fast Track", description: "Intensive 3-week program" },
    { icon: <Zap size={32} />, title: "Production Projects", description: "Build real-world applications" },
    { icon: <Globe size={32} />, title: "Deployment Skills", description: "Deploy to cloud platforms" },
    { icon: <Star size={32} />, title: "Job Ready", description: "Placement assistance included" }
  ];

  return (
    <div ref={containerRef} className="bg-white w-full min-h-screen">
      <div className="fixed top-0 left-0 h-1 bg-[#007BFF] z-50 w-full transform origin-left scale-x-0 course-progress"></div>

      <div className="course-hero relative h-[60vh] overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#0056cc]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 w-full">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none mb-6 text-white max-w-4xl">
              MERN Stack Course in Nagercoil
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Master the complete MERN stack and build production-ready full-stack applications in just 3 weeks.
            </p>
            <p className="text-blue-100 max-w-3xl mb-8">
              Memo Infotech Academy offers a professional <strong>MERN Stack course in Nagercoil, Tamil Nadu</strong>,
              designed for developers and tech enthusiasts. Our training focuses on MERN stack development with real-world projects, industry tools, and internship-based learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-white">
                <Clock size={20} />
                <span className="font-semibold">3 Weeks</span>
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
              The MERN stack is one of the most in-demand technology stacks in 2024. This intensive 3-week course teaches you to build complete, scalable full-stack applications.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From database design to deployment, learn everything needed to become a professional MERN stack developer and land high-paying jobs.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This course is part of our <Link to="/academy" className="text-[#007BFF] font-semibold hover:underline">
              IT training programs in Nagercoil</Link>. You may also explore our
              <Link to="/academy/full-stack-web-development" className="text-[#007BFF] font-semibold hover:underline ml-1">
              Full Stack Web Development course</Link>.
            </p>

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
                    <p className="font-semibold text-black">Intensive Program</p>
                    <p className="text-sm text-gray-600">Fast-track learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Full Stack Skills</p>
                    <p className="text-sm text-gray-600">End-to-end development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Full Projects</p>
                    <p className="text-sm text-gray-600">Production-ready apps</p>
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

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">What is MERN Stack?</h3>
              <p className="text-gray-700">MERN is a JavaScript technology stack that includes MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (runtime). It's one of the most in-demand tech stacks in 2024.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Is this course suitable for beginners?</h3>
              <p className="text-gray-700">Yes, we welcome developers of all levels. While basic JavaScript knowledge is helpful, our course covers everything you need to master the MERN stack from scratch.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">What projects will I build?</h3>
              <p className="text-gray-700">You'll build multiple full-stack applications including real-time chat applications, social media platforms, e-commerce systems, and more production-ready projects.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">How long is the MERN Stack course?</h3>
              <p className="text-gray-700">The course is an intensive 10-week program designed for fast-track learning. However, you can complete it at your own pace with flexible scheduling.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Do you provide placement assistance?</h3>
              <p className="text-gray-700">Yes! We offer complete placement assistance including resume optimization, technical interview preparation, and connections with hiring partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-6">Launch Your MERN Career</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 500+ developers mastering the most in-demand full-stack technology stack.
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
              to="/academy/full-stack-web-development"
              className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
            >
              <div className="h-56 overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/full stack.png"
                  alt="Full Stack Web Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                    Web Development
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                  Full Stack Web Development
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Learn front-end and back-end web development (React, Node.js, databases) and deploy production-ready applications.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Real Projects
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Job Assistance
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Lifetime Access
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    12 weeks
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
              to="/academy/frontend-web-development"
              className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
            >
              <div className="h-56 overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/frontend.png"
                  alt="Frontend Web Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                    Web Development
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                  Frontend Web Development
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Master HTML, CSS, JavaScript, and modern frameworks to build fast, responsive user interfaces.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Component Patterns
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Performance
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Portfolio Projects
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
              to="/academy/python-programming"
              className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
            >
              <div className="h-56 overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/Python.png"
                  alt="Python Programming"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                    Programming
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                  Python Programming
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Start with Python fundamentals and move to data handling, scripting, and building small applications.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Hands-on Labs
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Problem Solving
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#007BFF]" />
                    Certificate
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

export default MERNStack;
