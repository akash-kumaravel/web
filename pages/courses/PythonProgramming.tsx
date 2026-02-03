import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Star, Code, Database, Globe, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQ from '../../components/FAQ';

const PythonProgramming: React.FC = () => {
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

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Python Programming Course in Nagercoil",
    "description": "Professional Python Programming course in Nagercoil by Memo Infotech Academy covering core Python, automation, web development, data science and certification.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Memo Infotech Academy",
      "url": "https://www.memoinfotech.com/academy"
    },
    "educationalCredentialAwarded": "Certificate",
    "timeRequired": "P8W",
    "courseMode": "Offline",
    "inLanguage": "en",
    "locationCreated": {
      "@type": "Place",
      "name": "Nagercoil, Tamil Nadu, India"
    }
  };

  const faqs = [
    { q: "Why should I learn Python?", a: "Python is the most versatile and in-demand programming language. It's used in web development, data science, automation, AI/ML, and more. It's also beginner-friendly with clean, readable syntax." },
    { q: "Is this course for complete beginners?", a: "Yes! This course is designed for beginners with no programming experience. We start from the basics and gradually build your skills to advanced concepts." },
    { q: "What will I be able to do after this course?", a: "You'll be able to write Python programs, build web applications with frameworks like Django, work with data using libraries like Pandas, and automate real-world tasks." },
    { q: "How long does it take to learn Python?", a: "Our comprehensive course is designed to be completed in 8 weeks with self-paced learning. However, you can learn at your own speed with lifetime access to all materials." },
    { q: "Will I get a certificate?", a: "Yes! Upon completion, you'll receive a recognized certificate from Memo Infotech Academy that validates your Python programming skills to employers." }
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
    { icon: <Code size={32} />, title: "Beginner-Friendly", description: "Start from zero, no experience needed" },
    { icon: <Users size={32} />, title: "Expert Mentorship", description: "Learn from industry professionals" },
    { icon: <Clock size={32} />, title: "Self-Paced", description: "Learn at your own speed anytime, anywhere" },
    { icon: <Zap size={32} />, title: "Hands-On Projects", description: "Build real applications" },
    { icon: <Globe size={32} />, title: "Community Support", description: "Connect with fellow learners" },
    { icon: <Star size={32} />, title: "Certificate", description: "Recognized industry certification" }
  ];

  return (
    <div ref={containerRef} className="bg-white w-full min-h-screen">
      <SEO
        title="Python Programming Course in Nagercoil | Memo Infotech Academy"
        description="Master Python Programming course in Nagercoil at Memo Infotech Academy. Learn core Python, automation, web development, data science, real projects and certification."
        canonical="https://www.memoinfotech.com/academy/python-programming"
        schemas={[courseSchema, faqSchema]}
      />
      <div className="fixed top-0 left-0 h-1 bg-[#007BFF] z-50 w-full transform origin-left scale-x-0 course-progress"></div>

      <div className="course-hero relative h-[60vh] overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#0056cc]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 w-full">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none mb-6 text-white max-w-4xl">
              Python Programming Course in Nagercoil
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Master Python from scratch. Build powerful applications, automate tasks, and launch your programming career.
            </p>
            <p className="text-blue-100 max-w-3xl mb-8">
              Memo Infotech Academy offers a professional <strong>Python Programming course in Nagercoil, Tamil Nadu</strong>,
              designed for beginners, developers, and data enthusiasts. Our training focuses on Python programming fundamentals and advanced applications, industry tools, and internship-based learning.
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
              Python is the most popular programming language for beginners and professionals alike. This course takes you from zero to hero in just 6 weeks.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Learn practical skills, build real projects, and understand programming fundamentals that apply to any language. Perfect for career changers and aspiring developers.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This course is part of our <Link to="/academy" className="text-[#007BFF] font-semibold hover:underline">
                IT training programs in Nagercoil</Link>. You may also explore our
              <Link to="/academy/data-analytics" className="text-[#007BFF] font-semibold hover:underline ml-1">
                Data Analytics course</Link>.
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
                    <p className="font-semibold text-black">Self-Paced Learning</p>
                    <p className="text-sm text-gray-600">Learn at your own speed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Expert Support</p>
                    <p className="text-sm text-gray-600">Mentor support & community</p>
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

      {/* FAQ */}
      <FAQ title="Frequently Asked Questions" highlight="" faqs={faqs} />

      {/* CTA */}
      <section className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-6">Start Your Python Journey Today</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 2000+ learners who have mastered Python and accelerated their tech careers.
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

export default PythonProgramming;
