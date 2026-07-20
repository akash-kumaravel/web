import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  Target, 
  Zap, 
  Award,
  Cpu,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';

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
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
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
                    x: -30,
                    duration: 0.6,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".timeline-container",
                        start: "top 80%"
                    }
                });

                // Values Cards
                gsap.from(".value-card", {
                    y: 30,
                    duration: 0.6,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: ".values-grid",
                        start: "top 85%"
                    }
                });

            }, containerRef);

            return () => ctx.revert();
        }
    }, []);

    const stats = [
        { label: "Projects Delivered", value: "50+", icon: Award },
        { label: "Client Satisfaction", value: "99%", icon: Sparkles },
        { label: "Tech Experts", value: "15+", icon: Cpu },
        { label: "Uptime & Quality", value: "99.9%", icon: Zap },
    ];

    const processSteps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            icon: Compass,
            desc: "We analyze business logic, system architecture, expected scale, and user flow to craft a clear technical roadmap.",
            points: ["Scalability Analysis", "Security Architecture", "User Load Planning"]
        },
        {
            number: "02",
            title: "Engineering & Build",
            icon: Code2,
            desc: "Using React, Node.js, Python, Flutter, and cloud infrastructure, we build modular, high-performing software.",
            points: ["Agile Sprints", "Clean Architecture", "API First Design"]
        },
        {
            number: "03",
            title: "Quality & Optimization",
            icon: ShieldCheck,
            desc: "Every system undergoes rigorous automated testing, security audits, and performance tuning for real-world load.",
            points: ["Automated Testing", "Security Auditing", "Performance Tuning"]
        },
        {
            number: "04",
            title: "Growth & Partnership",
            icon: Rocket,
            desc: "Our partnership extends post-launch. We continuously maintain, update, and scale digital products as you grow.",
            points: ["Continuous Support", "Proactive Monitoring", "Feature Iteration"]
        }
    ];

    return (
        <div ref={containerRef} className="pt-20 md:pt-40 pb-10 md:pb-20 w-full bg-white text-black overflow-hidden">
            <SEO
                title="About Us — Web Development & Design Agency"
                description="Learn about Memo InfoTech, a leading web development and design agency in Nagercoil. Discover our mission, team, and commitment to digital excellence."
                keywords="about Memo InfoTech, web design agency, digital solutions provider, Nagercoil IT company"
                canonical="https://www.memoinfotech.com/about/"
                schemas={[{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.memoinfotech.com/" },
                        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.memoinfotech.com/about/" }
                    ]
                }]}
            />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header - Matching Projects & standard page style */}
                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter about-hero-text">
                        ABOUT <br />
                        <span className="text-white bg-[#007BFF] px-6 transform -skew-x-12 inline-block">US</span>
                    </h1>
                    <p className="mt-6 md:mt-10 text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium about-hero-text">
                        Discover our story, how we work, and why we're building the future of digital solutions.
                    </p>
                    <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 about-hero-text">
                        <Link to="/services" className="inline-block bg-[#007BFF] text-white px-4 md:px-5 py-2 rounded-full font-bold text-sm md:text-base hover:bg-black transition-colors" aria-label="View All Services">Our Services</Link>
                        <Link to="/contact" className="inline-block bg-black text-white px-4 md:px-5 py-2 rounded-full font-bold text-sm md:text-base hover:bg-[#007BFF] transition-colors" aria-label="Contact Memo InfoTech">Contact Us</Link>
                    </div>
                </div>

                {/* STATS HIGHLIGHT BAR */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-24">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={idx} 
                                className="p-5 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#007BFF] transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#007BFF] mb-3 group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold font-['Syne'] text-black mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm font-semibold text-gray-500">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* STORY & SHOWCASE SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-24 items-start">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">Our Story</h3>
                        <p className="text-gray-500 leading-loose mb-4 md:mb-6 text-sm md:text-base">
                            Memo InfoTech was founded in 2024 by passionate technologists and product-focused creators who believed that quality IT solutions should be accessible, scalable, and engineered with real purpose.
                        </p>
                        <p className="text-gray-500 leading-loose mb-6 text-sm md:text-base">
                            What started as a small independent initiative has now grown into a trusted IT partner for businesses across India and beyond. From day one, our goal has been simple:
                        </p>
                        <ul className="text-gray-500 leading-loose mb-4 md:mb-6 space-y-2 text-sm md:text-base">
                            <li className="font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                                Build technology that solves problems.
                            </li>
                            <li className="font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                                Build technology that works.
                            </li>
                            <li className="font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                                Build technology that grows with your business.
                            </li>
                        </ul>
                        <p className="text-gray-500 leading-loose text-sm md:text-base">
                            At Memo InfoTech, we don't just develop software—we design digital ecosystems that help companies operate smarter, faster, and more efficiently.
                        </p>
                    </div>

                    <div>
                        <div className="relative p-6 md:p-8 rounded-3xl bg-black text-white shadow-xl overflow-hidden">
                            <div className="w-10 h-10 rounded-xl bg-[#007BFF] flex items-center justify-center text-white font-bold mb-6">
                                <Target className="w-5 h-5" />
                            </div>

                            <blockquote className="text-lg md:text-xl font-bold leading-relaxed mb-6 text-white">
                                "We don't just write code. We build futures."
                            </blockquote>

                            <div className="pt-4 border-t border-gray-800">
                                <div className="text-xs uppercase tracking-widest text-[#007BFF] font-bold mb-3">
                                    Core Tech Stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "Python", "Next.js", "Flutter", "TailwindCSS", "AWS Cloud"].map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HISTORY TIMELINE */}
                <div className="timeline-container mb-12 md:mb-24 relative">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-black text-center">Our Evolution</h3>
                    <div className="relative ml-4 md:ml-6 lg:ml-10 space-y-8 md:space-y-12">
                        {/* Animated Vertical Line */}
                        <div className="timeline-line absolute left-0 top-0 bottom-0 w-1 bg-gray-200 origin-top h-full"></div>

                        {[
                            { year: "2024", title: "The Beginning", desc: "Memo InfoTech was launched to deliver modern, reliable, and high-performance digital solutions." },
                            { year: "2025", title: "Our Breakthrough", desc: "We secured our first major project by delivering a full-stack business application that opened doors to enterprise opportunities." },
                            { year: "2026", title: "Scaling Up", desc: "Our team expanded with skilled developers, designers, and tech specialists, taking on larger and complex projects." },
                            { year: "2027", title: "Global Presence", desc: "Memo InfoTech is preparing to serve international clients and strengthen our global footprint." },
                        ].map((item, idx) => (
                            <div key={idx} className="timeline-item relative pl-8 md:pl-10 group">
                                <div className="absolute -left-2 md:-left-2.5 top-1 w-3 md:w-4 h-3 md:h-4 bg-white border-4 border-[#007BFF] rounded-full group-hover:scale-150 transition-transform z-10"></div>
                                <span className="text-[#007BFF] font-bold text-base md:text-lg block mb-1">{item.year}</span>
                                <h4 className="text-lg md:text-xl font-bold text-black mb-1">{item.title}</h4>
                                <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Section 2: How We Work */}
                <div className="mb-12 md:mb-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-black">How We Work</h3>
                    <p className="text-base md:text-lg text-gray-600 leading-loose mb-8 md:mb-12">
                        Every project at Memo InfoTech follows a process built on clarity, engineering discipline, and strong technical understanding.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {processSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="p-6 md:p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#007BFF] transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold font-['Syne'] text-[#007BFF]">
                                            {step.number}
                                        </span>
                                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-black">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold mb-2 text-black">{step.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.points.map((pt, pIdx) => (
                                            <span key={pIdx} className="text-xs bg-white border border-gray-200 px-2.5 py-1 rounded-full text-gray-600 font-medium">
                                                {pt}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Why Choose Memo InfoTech */}
                <div className="mb-12 md:mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-black">Why Choose Memo InfoTech?</h3>
                    <div className="values-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            { icon: "✓", title: "Real-World Problems", desc: "Strong focus on real-world business problems and practical solutions." },
                            { icon: "✓", title: "Clean Architecture", desc: "Clean architecture, modular design, and future-ready engineering." },
                            { icon: "✓", title: "Transparent Communication", desc: "Transparent communication, regular updates, and on-time delivery." },
                            { icon: "✓", title: "Quality-Driven", desc: "Designed and engineered with high standards and meticulous attention to detail." }
                        ].map((val, idx) => (
                            <div key={idx} className="value-card bg-black text-white p-6 md:p-10 rounded-3xl hover:bg-[#007BFF] hover:shadow-[0_10px_40px_rgba(0,123,255,0.4)] transition-all duration-300 group cursor-default">
                                <div className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#007BFF] group-hover:text-white transition-colors">{val.icon}</div>
                                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 group-hover:translate-x-2 transition-transform">{val.title}</h4>
                                <p className="text-gray-400 group-hover:text-blue-100 text-sm md:text-base">{val.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-12 p-6 md:p-8 bg-[#007BFF]/10 border-l-4 border-[#007BFF] rounded-lg">
                        <p className="text-base md:text-lg text-gray-700 font-semibold">
                            At Memo InfoTech, we combine creativity, technology, and strategy to build solutions that matter.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
