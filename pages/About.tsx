import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Hero Text Reveal
            const heroText = gsap.utils.toArray(".about-hero-text");
            gsap.from(heroText, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out"
            });

            // Image Wipe Reveal
            const images = gsap.utils.toArray(".reveal-image");
            images.forEach((img: any) => {
                gsap.fromTo(img, 
                    { clipPath: "inset(0 100% 0 0)" },
                    { 
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1.5,
                        ease: "power3.inOut",
                        scrollTrigger: {
                            trigger: img,
                            start: "top 80%",
                        }
                    }
                );
            });

            // Timeline Line Animation
            gsap.fromTo(".timeline-line",
                { scaleY: 0 },
                {
                    scaleY: 1,
                    transformOrigin: "top",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".timeline-container",
                        start: "top 70%",
                        end: "bottom 70%",
                        scrub: 1
                    }
                }
            );

            // Timeline Items Stagger
            gsap.from(".timeline-item", {
                opacity: 0,
                x: -50,
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".timeline-container",
                    start: "top 70%"
                }
            });

            // Values Cards (animate position but don't start from fully transparent)
            gsap.from(".value-card", {
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 80%"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 w-full bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="overflow-hidden mb-2">
                <h1 className="about-hero-text text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter">
                    Who We Are
                </h1>
            </div>
            <div className="mb-10">
                <span className="about-hero-text inline-block text-white bg-[#007BFF] px-6 py-1 text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none tracking-tighter transform -rotate-2 shadow-[8px_8px_0px_#000]">
                    MEMO InfoTech
                </span>
            </div>
            
            <p className="about-hero-text text-2xl text-gray-600 mb-20 leading-relaxed border-l-4 border-[#007BFF] pl-8">
                MEMO InfoTech is Nagercoil's premier IT solutions provider, situated at the intersection of robust engineering and digital strategy. We exist to empower businesses through technology.
            </p>

            {/* Content Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
                <div>
                    <h3 className="text-3xl font-bold mb-6 text-black reveal-text">Our Story</h3>
                    <p className="text-gray-500 leading-loose mb-6">
                        Founded in 2014, MEMO InfoTech began with a mission to bring world-class IT services to Nagercoil. Our founders, a team of passionate software engineers, believed that high-quality technology solutions should be accessible to businesses of all sizes.
                    </p>
                    <p className="text-gray-500 leading-loose">
                        Over the last decade, we have evolved from a small local team into a leading IT firm, serving clients globally. Yet, our core philosophy remains unchanged: Technology must solve problems. Technology must drive growth. Technology must work.
                    </p>
                </div>
                <div className="relative group">
                    <div className="reveal-image rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src="/assets/about.png" alt="MEMO InfoTech office and team in Nagercoil" className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-[#007BFF] text-white p-8 rounded-3xl shadow-xl max-w-xs transform rotate-3 group-hover:rotate-0 transition-transform z-10">
                        <p className="font-bold text-xl">"We don't just write code. We build futures."</p>
                    </div>
                </div>
            </div>

            {/* HISTORY TIMELINE */}
            <div className="timeline-container mb-32 relative">
                <h3 className="text-3xl font-bold mb-16 text-black text-center">Our Evolution</h3>
                <div className="relative ml-6 md:ml-10 space-y-16">
                    {/* Animated Vertical Line */}
                    <div className="timeline-line absolute left-0 top-0 bottom-0 w-1 bg-gray-200 origin-top h-full"></div>

                    {[
                        { year: "2014", title: "The Inception", desc: "Founded in Nagercoil, Tamil Nadu." },
                        { year: "2016", title: "First Major Contract", desc: "Delivered enterprise software for a regional logistics firm." },
                        { year: "2018", title: "Team Expansion", desc: "Moved to a larger facility to accommodate our growing team of developers." },
                        { year: "2021", title: "Global Reach", desc: "Started serving international clients in the US and UK." },
                        { year: "2024", title: "MEMO InfoTech 2.0", desc: "Launching our AI and Machine Learning division." }
                    ].map((item, idx) => (
                        <div key={idx} className="timeline-item relative pl-10 group">
                             <div className="absolute -left-[7px] top-1 w-4 h-4 bg-white border-4 border-[#007BFF] rounded-full group-hover:scale-150 transition-transform z-10"></div>
                             <span className="text-[#007BFF] font-bold text-xl block mb-1">{item.year}</span>
                             <h4 className="text-2xl font-bold text-black mb-2">{item.title}</h4>
                             <p className="text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section 2 (Long Text) */}
            <div className="mb-24">
                <h3 className="text-3xl font-bold mb-8 text-black">The Methodology</h3>
                <div className="space-y-8 text-lg text-gray-600 leading-loose">
                    <p>
                        Our process is a precise blend of data-driven strategy and engineering excellence. We start by understanding your business logic. We ask the technical questions. Scalability? Security? User load? We define the architecture before writing a single line of code.
                    </p>
                    <p>
                        Once we have the blueprint, we build. We use modern technologies like React, Node.js, Python, and Cloud Infrastructure to create robust software solutions. We believe in Agile methodology, ensuring rapid iteration and constant feedback loops.
                    </p>
                    <p>
                        But technology is just the tool. The strength of our company comes from our people. We are a dedicated team of developers, testers, and project managers right here in Nagercoil. We take pride in our work and own the outcome.
                    </p>
                    <p>
                         From the initial concept to final deployment and maintenance, we are your partners. We test rigorously. We optimize relentlessly. In a competitive digital world, we ensure your IT infrastructure is a strategic asset, not a bottleneck.
                    </p>
                </div>
            </div>

            {/* Values Grid */}
            <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {[
                    { title: "Integrity", desc: "We deliver what we promise." },
                    { title: "Innovation", desc: "We embrace the latest tech." },
                    { title: "Excellence", desc: "Code quality matters to us." }
                ].map((val, idx) => (
                    <div key={idx} className="value-card bg-black text-white p-10 rounded-3xl hover:bg-[#007BFF] hover:shadow-[0_10px_40px_rgba(0,123,255,0.4)] transition-all duration-300 group cursor-default">
                        <h4 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{val.title}</h4>
                        <p className="text-gray-400 group-hover:text-blue-100">{val.desc}</p>
                    </div>
                ))}
            </div>

            {/* OFFICE GALLERY */}
            <div>
                <h3 className="text-3xl font-bold mb-12 text-black">Life at MEMO InfoTech</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    <div className="reveal-image col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg"><img src="/assets/life1.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Life at MEMO - team gathering" /></div>
                    <div className="reveal-image rounded-3xl overflow-hidden shadow-lg"><img src="/assets/life2.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Life at MEMO - workspace" /></div>
                    <div className="reveal-image rounded-3xl overflow-hidden shadow-lg"><img src="/assets/life3.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Life at MEMO - brainstorming" /></div>
                    <div className="reveal-image col-span-2 rounded-3xl overflow-hidden shadow-lg"><img src="/assets/life4.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Life at MEMO - office event" /></div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;