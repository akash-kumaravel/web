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

    // SEO: set page title & description
    useEffect(() => {
        document.title = 'About MEMO InfoTech — Mission & Team';
        const desc = 'Learn how MEMO InfoTech crafts digital products combining engineering, design, and growth strategy. Our team delivers scalable websites, apps, and brand experiences.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, []);

  return (
        <div ref={containerRef} className="pt-40 pb-20 w-full bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header - Projects style (keep header centered only) */}
                    <div className="overflow-hidden mb-2 text-center">
                        <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter">
                            ABOUT <br/>
                            <span className="text-white bg-[#007BFF] px-6 transform -skew-x-12 inline-block">US</span>
                        </h1>
                        <p className="mt-10 text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                            Learn about our journey, values, and the team behind MEMO InfoTech.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <a href="/services" className="inline-block bg-[#007BFF] text-white px-5 py-2 rounded-full font-bold hover:bg-black transition-colors">Our Services</a>
                            <a href="/contact" className="inline-block bg-black text-white px-5 py-2 rounded-full font-bold hover:bg-[#007BFF] transition-colors">Contact Us</a>
                        </div>
                        {/* Breadcrumb structured data for About */}
                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://memoinfotech.com/" },
                                    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://memoinfotech.com/about" }
                                ]
                        })}} />
                    </div>

            {/* Content Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
                <div>
                    <h3 className="text-3xl font-bold mb-6 text-black reveal-text">Our Story</h3>
                    <p className="text-gray-500 leading-loose mb-6">
                        Founded in 2022, MEMO InfoTech began with a mission to bring world-class IT services to market. Our founders, a team of passionate software engineers, believed that high-quality technology solutions should be accessible to businesses of all sizes.
                    </p>
                    <p className="text-gray-500 leading-loose">
                        Over the last decade, we have evolved from a small local team into a leading IT firm, serving clients globally. Yet, our core philosophy remains unchanged: Technology must solve problems. Technology must drive growth. Technology must work.
                    </p>
                </div>
                <div className="relative group">
                    <div className="reveal-image rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src="/assets/about.png" alt="MEMO InfoTech office and team collaboration" className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" />
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
                        { year: "2022", title: "Company Founded", desc: "MEMO InfoTech was established to provide modern digital solutions, helping businesses grow with reliable technology and smart innovation." },
                        { year: "2023", title: "First Major Contract", desc: "Delivered our first large-scale enterprise software project for a regional logistics company, setting the foundation for long-term success." },
                        { year: "2024", title: "Team Expansion", desc: "Our rapid growth led us to move into a larger facility and expand our team of developers, designers, and technology experts." },
                        { year: "2025", title: "Global Reach", desc: "Started serving international clients across Dubai , building a strong global footprint and industry recognition." },
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
                        But technology is just the tool. The strength of our company comes from our people. We are a dedicated team of developers, testers, and project managers committed to excellence. We take pride in our work and own the outcome.
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


        </div>
      </div>
    </div>
  );
};

export default About;