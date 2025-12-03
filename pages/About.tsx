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
                            Discover our story, how we work, and why we're building the future of digital solutions.
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
                        MEMO InfoTech was founded in 2022 by Akash Kumaravel, a passionate technologist and product-focused creator who believed that quality IT solutions should be accessible, scalable, and engineered with real purpose.
                    </p>
                    <p className="text-gray-500 leading-loose mb-6">
                        What started as a small independent initiative has now grown into a trusted IT partner for businesses across India and beyond. From day one, our goal has been simple:
                    </p>
                    <ul className="text-gray-500 leading-loose mb-6 space-y-2">
                        <li className="font-semibold">Build technology that solves problems.</li>
                        <li className="font-semibold">Build technology that works.</li>
                        <li className="font-semibold">Build technology that grows with your business.</li>
                    </ul>
                    <p className="text-gray-500 leading-loose">
                        At MEMO InfoTech, we don't just develop software—we design digital ecosystems that help companies operate smarter, faster, and more efficiently.
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
                        { year: "2022", title: "The Beginning", desc: "MEMO InfoTech was launched by Akash Kumaravel to deliver modern, reliable, and high-performance digital solutions." },
                        { year: "2023", title: "Our Breakthrough", desc: "We secured our first major project by delivering a full-stack business application that opened doors to enterprise-level opportunities." },
                        { year: "2024", title: "Scaling Up", desc: "Our team expanded with skilled developers, designers, and tech specialists, allowing us to take on larger and more complex projects." },
                        { year: "2025", title: "Global Presence", desc: "MEMO InfoTech began serving international clients, building strong credibility in regions like Dubai and strengthening our global footprint." },
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

            {/* Content Section 2: How We Work */}
            <div className="mb-24">
                <h3 className="text-3xl font-bold mb-12 text-black">How We Work</h3>
                <p className="text-lg text-gray-600 leading-loose mb-12">
                    Every project at MEMO InfoTech follows a process built on clarity, engineering discipline, and strong technical understanding.
                </p>
                <div className="space-y-12">
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-black">1. Discovery & Strategy</h4>
                        <p className="text-lg text-gray-600 leading-loose mb-4">
                            We begin by understanding your business logic and asking the right technical questions:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                            <li>How will it scale?</li>
                            <li>How secure must it be?</li>
                            <li>What is the expected user load?</li>
                            <li>What systems need integration?</li>
                        </ul>
                        <p className="text-lg text-gray-600 leading-loose font-semibold">
                            We design the system architecture before writing a single line of code.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-black">2. Engineering & Development</h4>
                        <p className="text-lg text-gray-600 leading-loose mb-4">
                            Using modern technologies like React, Node.js, Python, Next.js, and cloud infrastructure, we build scalable software with a strong foundation.
                        </p>
                        <p className="text-lg text-gray-600 leading-loose">
                            Our development is Agile—fast iterations, continuous feedback, and transparent progress.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-black">3. Quality & Optimization</h4>
                        <p className="text-lg text-gray-600 leading-loose mb-4">
                            We ensure that every product is:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Tested thoroughly</li>
                            <li>Optimized for performance</li>
                            <li>Built to handle real-world usage</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-black">4. Long-Term Partnership</h4>
                        <p className="text-lg text-gray-600 leading-loose">
                            Our relationship doesn't end at deployment. We maintain, update, and scale your application as your business grows.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Founder Section */}
            <div className="mb-24 bg-gray-50 p-12 rounded-3xl">
                <h3 className="text-3xl font-bold mb-8 text-black">The Founder – Akash Kumaravel</h3>
                <p className="text-lg text-gray-600 leading-loose mb-6">
                    MEMO InfoTech is Founded by Akash Kumaravel. His vision is to build an IT company that goes beyond code—focusing on user experience, innovation, and long-term business impact.
                </p>
                <p className="text-lg text-gray-600 leading-loose">
                    Under his leadership, MEMO InfoTech continues to push boundaries in web development, design, automation, and cloud-based digital solutions.
                </p>
            </div>

            {/* Why Choose MEMO InfoTech */}
            <div className="mb-32">
                <h3 className="text-3xl font-bold mb-12 text-black">Why Choose MEMO InfoTech?</h3>
                <div className="values-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: "✓", title: "Real-World Problems", desc: "Strong focus on real-world business problems" },
                        { icon: "✓", title: "Clean Architecture", desc: "Clean architecture and future-ready engineering" },
                        { icon: "✓", title: "Transparent Communication", desc: "Transparent communication & on-time delivery" },
                        { icon: "✓", title: "Founder-Led", desc: "Designed and led by a passionate founder committed to high standards" }
                    ].map((val, idx) => (
                        <div key={idx} className="value-card bg-black text-white p-10 rounded-3xl hover:bg-[#007BFF] hover:shadow-[0_10px_40px_rgba(0,123,255,0.4)] transition-all duration-300 group cursor-default">
                            <div className="text-4xl font-bold mb-4 text-[#007BFF] group-hover:text-white transition-colors">{val.icon}</div>
                            <h4 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{val.title}</h4>
                            <p className="text-gray-400 group-hover:text-blue-100">{val.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 p-8 bg-[#007BFF]/10 border-l-4 border-[#007BFF] rounded-lg">
                    <p className="text-lg text-gray-700 font-semibold">
                        At MEMO InfoTech, we combine creativity, technology, and strategy to build solutions that matter.
                    </p>
                </div>
            </div>

            {/* OFFICE GALLERY */}


        </div>
      </div>
    </div>
  );
};

export default About;