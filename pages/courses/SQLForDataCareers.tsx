import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Star, Code, Database, Globe, Zap, CheckCircle } from 'lucide-react';

const SQLForDataCareers: React.FC = () => {
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
    document.title = 'SQL for Data Careers Course in Nagercoil | Memo Infotech Academy';

    const desc = 'Join SQL for Data Careers course in Nagercoil at Memo Infotech Academy. Master SQL, database design, query optimization, real datasets and certification.';

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
    canonical.href = 'https://www.memoinfotech.com/academy/sql-for-data-careers';
  }, []);

  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "SQL for Data Careers Course in Nagercoil",
      "description": "Professional SQL for Data Careers course in Nagercoil by Memo Infotech Academy covering SQL, database design, query optimization and certification.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Memo Infotech Academy",
        "url": "https://www.memoinfotech.com/academy"
      },
      "educationalCredentialAwarded": "Certificate",
      "timeRequired": "P6W",
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
    { icon: <Database size={32} />, title: "SQL Mastery", description: "From basics to advanced queries" },
    { icon: <Users size={32} />, title: "Expert Support", description: "Learn from SQL professionals" },
    { icon: <Clock size={32} />, title: "Quick Learning", description: "Intensive 4-week course" },
    { icon: <Zap size={32} />, title: "Practical Skills", description: "Real database systems and queries" },
    { icon: <Globe size={32} />, title: "Career Ready", description: "Job placement assistance" },
    { icon: <Star size={32} />, title: "Industry Standard", description: "Learn most-used databases" }
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
              SQL for Data Careers Course in Nagercoil
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Master SQL and unlock high-paying data career opportunities. Learn the most essential skill for every data professional.
            </p>
            <p className="text-blue-100 max-w-3xl mb-8">
              Memo Infotech Academy offers a professional <strong>SQL for Data Careers course in Nagercoil, Tamil Nadu</strong>,
              designed for aspiring data professionals and career-changers. Our training focuses on SQL mastery for data analysis and database management, industry tools, and internship-based learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-white">
                <Clock size={20} />
                <span className="font-semibold">4 Weeks</span>
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
              SQL is the most important skill for data careers. This intensive 4-week course takes you from beginner to advanced SQL practitioner.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every data professional needs SQL. Learn to write efficient queries, work with databases, and become indispensable to your organization.
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
                    <p className="font-semibold text-black">Intensive Learning</p>
                    <p className="text-sm text-gray-600">Quick 4-week program</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Quick & Practical</p>
                    <p className="text-sm text-gray-600">Real-world SQL queries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Job Ready</p>
                    <p className="text-sm text-gray-600">Career placement support</p>
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
              <h3 className="text-xl font-bold text-black mb-3">Why is SQL important for data careers?</h3>
              <p className="text-gray-700">SQL is the universal language for working with databases. Every data analyst, data scientist, and business intelligence professional uses SQL daily. It's a non-negotiable skill for data careers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Is this course for beginners?</h3>
              <p className="text-gray-700">Yes! Our course is designed for aspiring data professionals and career-changers with no prior SQL experience. We cover everything from basic queries to advanced optimization techniques.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">What databases will I learn?</h3>
              <p className="text-gray-700">You'll learn SQL with the most popular databases including MySQL, PostgreSQL, SQL Server, and Oracle. The SQL fundamentals transfer across all database systems.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">How long is this course?</h3>
              <p className="text-gray-700">The SQL for Data Careers course is an intensive 6-week program. You can complete it at your own pace with lifetime access to all learning materials and updates.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">What's the salary potential for SQL professionals?</h3>
              <p className="text-gray-700">SQL professionals are in high demand with excellent earning potential. Combined with other data skills, SQL expertise leads to lucrative career opportunities across all industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#007BFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-6">Master SQL in 4 Weeks</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 1500+ data professionals mastering the most essential career skill.
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

export default SQLForDataCareers;

