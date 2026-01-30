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

  useEffect(() => {
    document.title = 'Graphic Design Course in Nagercoil | Memo Infotech Academy';

    const desc = 'Join Graphic Design course in Nagercoil at Memo Infotech Academy. Master Adobe Creative Suite, design principles, branding, real projects and certification.';

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
    canonical.href = 'https://www.memoinfotech.com/academy/graphic-design';
  }, []);

  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Graphic Design Course in Nagercoil",
      "description": "Professional Graphic Design course in Nagercoil by Memo Infotech Academy covering Adobe Creative Suite, design principles, branding and certification.",
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

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(courseSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 w-full">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none mb-6 text-white max-w-4xl">
              Graphic Design Course in Nagercoil
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Master professional graphic design using Adobe Creative Suite. Create stunning visual designs that captivate audiences.
            </p>
            <p className="text-blue-100 max-w-3xl mb-8">
              Memo Infotech Academy offers a professional <strong>Graphic Design course in Nagercoil, Tamil Nadu</strong>,
              designed for aspiring designers, creatives, and artists. Our training focuses on graphic design fundamentals, tools, and professional branding, industry tools, and internship-based learning.
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
            <p className="text-lg text-gray-700 mb-8">
              This course is part of our <Link to="/academy" className="text-[#007BFF] font-semibold hover:underline">
              IT training programs in Nagercoil</Link>. You may also explore our
              <Link to="/academy/web-designing" className="text-[#007BFF] font-semibold hover:underline ml-1">
              Web Designing course</Link>.
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

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-16 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Do I need prior design experience?</h3>
              <p className="text-gray-700">No! Our Graphic Design course is designed for beginners and aspiring designers. We start with design fundamentals and progress to professional-level work.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">What Adobe tools will I learn?</h3>
              <p className="text-gray-700">You'll master the Adobe Creative Suite including Photoshop, Illustrator, InDesign, and more. These are industry-standard tools used by professional designers worldwide.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Will I build a portfolio?</h3>
              <p className="text-gray-700">Yes! Throughout the course, you'll create professional design projects including logos, branding materials, print designs, and digital assets for your portfolio.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">How long is the Graphic Design course?</h3>
              <p className="text-gray-700">The course is an 8-week comprehensive program with self-paced learning. You have lifetime access to course materials and can learn at your own rhythm.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">What career opportunities are available?</h3>
              <p className="text-gray-700">Graphic designers can work as freelancers, join design agencies, work in-house for companies, or specialize in niches like web design, branding, or packaging design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

    </div>
  );
};

export default GraphicDesign;

