import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Star, Code, Database, Globe, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQ from '../../components/FAQ';

const FullStackWebDevelopment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        // Hero parallax
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

        // Content fade in
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

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Full Stack Web Development Course in Nagercoil",
    "description": "Professional Full Stack Web Development course in Nagercoil by Memo Infotech Academy covering frontend, backend, databases, real projects and certification.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Memo Infotech Academy",
      "url": "https://www.memoinfotech.com/academy"
    },
    "educationalCredentialAwarded": "Certificate",
    "timeRequired": "P12W",
    "courseMode": "Offline",
    "inLanguage": "en",
    "locationCreated": {
      "@type": "Place",
      "name": "Nagercoil, Tamil Nadu, India"
    }
  };

  const faqs = [
    { q: "What is the duration of the Full Stack Web Development course?", a: "The course is designed to be completed in 12 weeks with self-paced learning and flexible schedules. You can access course materials anytime and learn at your own speed." },
    { q: "Do I need prior programming experience?", a: "No, the course is designed for beginners, intermediates, and developers of all levels. We start from the fundamentals and progressively advance to complex concepts." },
    { q: "What will I learn in this course?", a: "You'll master frontend development with React, backend development with Node.js and Express, databases, real-world project development, and deployment strategies." },
    { q: "Will I get job assistance?", a: "Yes! We provide comprehensive job assistance including resume review, interview preparation, and placement support to help you land your first development job." },
    { q: "What projects will I build?", a: "You'll build 5+ real-world applications including e-commerce platforms, social media apps, project management tools, and more to showcase in your portfolio." }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  const features = [
    { icon: <Code size={32} />, title: "Live Projects", description: "Build 5+ real-world applications during the course" },
    { icon: <Users size={32} />, title: "Expert Mentorship", description: "Learn from industry professionals with 10+ years experience" },
    { icon: <Clock size={32} />, title: "Flexible Learning", description: "Self-paced with recorded sessions and live Q&A" },
    { icon: <Zap size={32} />, title: "Job Assistance", description: "Resume review, interview prep, and job placement help" },
    { icon: <Globe size={32} />, title: "Global Community", description: "Network with 2000+ developers worldwide" },
    { icon: <Star size={32} />, title: "Lifetime Access", description: "Access course materials forever with free updates" }
  ];

  return (
    <div ref={containerRef} className="bg-white w-full min-h-screen">
      <SEO
        title="Full Stack Web Development Course in Nagercoil | Memo Infotech Academy"
        description="Master full-stack web development course in Nagercoil at Memo Infotech Academy. Learn frontend, backend, databases, real projects, certification and internship support."
        canonical="https://www.memoinfotech.com/academy/full-stack-web-development"
        schemas={[courseSchema, faqSchema]}
      />
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-[#007BFF] z-50 w-full transform origin-left scale-x-0 course-progress"></div>

      {/* Hero Section */}
      <div className="course-hero relative h-[60vh] overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#0056cc]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 w-full">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none mb-6 text-white max-w-4xl">
              Full Stack Web Development Course in Nagercoil
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Master both frontend and backend development. Build complete web applications from database to deployment in just 12 weeks.
            </p>
            <p className="text-blue-100 max-w-3xl mb-8">
              Memo Infotech Academy offers a professional <strong>Full Stack Web Development course in Nagercoil, Tamil Nadu</strong>,
              designed for beginners, intermediates, and developers. Our training focuses on full-stack development with modern frameworks, industry tools, and internship-based learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-white">
                <Clock size={20} />
                <span className="font-semibold">12 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="container mx-auto px-6 py-20">
        <div className="course-content grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6">Course Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This comprehensive course transforms you into a proficient full-stack developer. You'll learn the complete web development stack, from creating beautiful, responsive user interfaces with React to building robust backend services with Node.js and databases.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Through hands-on projects and real-world scenarios, you'll gain practical experience that employers value. By the end, you'll have a portfolio of production-ready applications ready to showcase to potential employers.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This course is part of our <Link to="/academy" className="text-[#007BFF] font-semibold hover:underline">
                IT training programs in Nagercoil</Link>. You may also explore our
              <Link to="/academy/frontend-web-development" className="text-[#007BFF] font-semibold hover:underline ml-1">
                Frontend Web Development course</Link>.
            </p>

          </div>

          {/* Sidebar */}
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
                    <p className="text-sm text-gray-600">Resume & interview prep</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">5+ Real Projects</p>
                    <p className="text-sm text-gray-600">Build your portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
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
      <FAQ title="Frequently Asked Questions" highlight="" faqs={faqs} />

      {/* CTA */}
      <section className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-6">Ready to Become a Full Stack Developer?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 2000+ developers who have transformed their careers with this comprehensive course.
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

    </div>
  );
};

export default FullStackWebDevelopment;

