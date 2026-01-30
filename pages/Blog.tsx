import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { updateSEO, addBreadcrumbSchema } from '../utils/seo';
import { ArrowRight, Calendar, User, Tag, Search, Loader2, Check } from 'lucide-react';

export const blogPosts = [
    {
        id: 1,
        slug: "minimalist-web-design-2025",
        title: "The Psychology of Minimalist Web Design in 2025",
        excerpt: "Why less is more, and how cognitive load affects conversion rates in the modern digital landscape.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">Minimalist design is more than an aesthetic — it's a strategy that reduces cognitive load, improves usability, and helps users complete tasks faster. In 2025, minimalism continues to evolve: it's not just about removing elements, it's about prioritising intent and micro-interactions.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Why Cognitive Load Matters</h2>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">When users are presented with fewer choices and clearer visual hierarchy, decision-making becomes easier. That leads to higher conversion rates and fewer support requests. Minimalist interfaces guide attention to key actions using contrast, spacing, and motion.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Practical Steps</h3>
            <ul class="list-disc pl-6 mb-6 text-gray-600">
                <li>Audit every element: keep only items that serve a clear user task.</li>
                <li>Use spacing and typography to establish hierarchy rather than color alone.</li>
                <li>Design microcopy and affordances to reduce ambiguity.</li>
            </ul>

            <p class="mb-6 text-lg leading-relaxed text-gray-600">Start with analytics: identify the top user flows and progressively remove noise from those paths. Minimalism should be informed by data, not just taste.</p>
        `,
        category: "Design",
        author: "Alex Void",
        date: "Oct 12, 2024",
        image: "/assets/news 1.png",
        featured: true
    },
    {
        id: 2,
        slug: "threejs-immersive-web",
        title: "Three.js and The Future of Immersive Web",
        excerpt: "Pushing the boundaries of browser capability with WebGL and hardware acceleration.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">Three.js has democratized 3D on the web. As browsers get faster and GPUs become more powerful, immersive web experiences are moving from novelty into mainstream product features — from interactive product previews to full-brand experiences.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">When To Use 3D</h2>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Use WebGL/Three.js when 3D materially improves user understanding or conversion: product configurators, visual storytelling, spatial data visualizations. Avoid 3D for pure decoration where it increases load time.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Performance Tips</h3>
            <ul class="list-disc pl-6 mb-6 text-gray-600">
                <li>Use LOD (Level of Detail) and texture atlases to reduce draw calls.</li>
                <li>Prefer baked lighting where possible and keep shader complexity low.</li>
                <li>Fallback gracefully to static images on low-end devices.</li>
            </ul>

            <pre class="bg-gray-100 p-4 rounded mb-6 overflow-auto"><code>const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// Keep scene graph shallow, reuse geometries and materials</code></pre>

            <p class="mb-6 text-lg leading-relaxed text-gray-600">When implemented thoughtfully, 3D can deliver Memorable interactions without sacrificing accessibility or performance.</p>
        `,
        category: "Development",
        author: "Jaxon Steele",
        date: "Oct 08, 2024",
        image: "/assets/news 2.png",
        featured: false
    },
    {
        id: 3,
        slug: "ai-driven-branding",
        title: "AI-Driven Branding: A New Era",
        excerpt: "How generative AI is helping agencies create more personalized and dynamic brand identities.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">Generative AI is reshaping how brands are created and scaled. From rapid concept exploration to on-the-fly asset generation, AI tools allow teams to iterate faster and explore directions that would have been time-prohibitive before.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Opportunities & Risks</h2>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">AI accelerates ideation, but brand strategy still needs human input. The best outcomes come from hybrid workflows where AI proposes variations and humans curate and refine the final direction.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Practical Workflow</h3>
            <ol class="list-decimal pl-6 mb-6 text-gray-600">
                <li>Define brand constraints (color, tone, audience).</li>
                <li>Generate multiple visual directions using AI tools.</li>
                <li>Human review and refine, then produce production-ready assets.</li>
            </ol>

            <p class="mb-6 text-lg leading-relaxed text-gray-600">Use AI to increase throughput, not as a replacement for strategic thinking. This ensures brand consistency and long-term value.</p>
        `,
        category: "Strategy",
        author: "Sasha B.",
        date: "Sep 28, 2024",
        image: "/assets/news 3.png",
        featured: false
    },
    {
        id: 4,
        slug: "sustainable-digital-design",
        title: "Sustainable Digital Design",
        excerpt: "Reducing the carbon footprint of your website through optimized assets and green hosting.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">Sustainable design isn't just ethical — it improves user experience and performance. By reducing asset sizes, optimizing delivery, and choosing responsible infrastructure, teams can lower energy usage and page load times.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Key Strategies</h2>
            <ul class="list-disc pl-6 mb-6 text-gray-600">
                <li>Optimize images (AVIF/WebP) and serve responsive sizes.</li>
                <li>Eliminate render-blocking resources and use server-side compression.</li>
                <li>Adopt efficient hosting providers and CDNs with renewable energy.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">Measuring Impact</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Measure performance with Core Web Vitals and use tools that estimate Carbon per Page View. Small improvements compound across millions of views.</p>

            <p class="mb-6 text-lg leading-relaxed text-gray-600">Sustainability is a design constraint — treat it like accessibility: baked into workflows, not an afterthought.</p>
        `,
        category: "Insights",
        author: "Nika Sol",
        date: "Sep 20, 2024",
        image: "/assets/news 4.png",
        featured: false
    },
    {
        id: 5,
        slug: "typography-trends",
        title: "Typography Trends for the Bold",
        excerpt: "Why kinetic typography is taking over hero sections across the awwwards ecosystem.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">Typography sets tone and personality. In 2025, variable fonts, expressive letterforms, and kinetic type are enabling designers to create bold, performant typographic systems that scale across devices.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Trends to Try</h2>
            <ul class="list-disc pl-6 mb-6 text-gray-600">
                <li>Variable fonts for responsive weight and width control.</li>
                <li>Kinetic type with reduced motion options for accessibility.</li>
                <li>High-contrast pairings that maintain legibility at small sizes.</li>
            </ul>

            <p class="mb-6 text-lg leading-relaxed text-gray-600">Always test for legibility across devices and include user preferences for reduced motion. Typography should amplify content, not distract from it.</p>
        `,
        category: "Design",
        author: "Alex Void",
        date: "Sep 15, 2024",
        image: "/assets/news 5.png",
        featured: false
    },
    {
        id: 6,
        slug: "death-of-cookie",
        title: "The Death of the Cookie",
        excerpt: "Navigating the privacy-first web and what it means for your marketing analytics.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">Cookies are fading as third-party tracking is restricted across browsers. Marketers and product teams must adapt to a model that favors first-party data, contextual signals, and privacy-preserving measurement.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Alternatives to Third-Party Cookies</h2>
            <ul class="list-disc pl-6 mb-6 text-gray-600">
                <li>Invest in first-party data collection and consented email lists.</li>
                <li>Leverage server-side analytics and aggregated measurement techniques.</li>
                <li>Use contextual targeting and cohort-based attribution methods.</li>
            </ul>

            <p class="mb-6 text-lg leading-relaxed text-gray-600">Plan for a cookieless future by auditing your current tracking, mapping critical events to server-side pipelines, and educating stakeholders about changes in attribution.</p>
        `,
        category: "Strategy",
        author: "Maya Green",
        date: "Sep 10, 2024",
        image: "/assets/news 6.png",
        featured: false
    },
    {
        id: 7,
        slug: "it-company-in-nagercoil",
        title: "Best IT & Digital Solutions Company in Nagercoil – Memo InfoTech",
        excerpt: "Looking for a trusted IT company in Nagercoil? Memo InfoTech offers complete digital solutions including web development, software, apps, SEO & branding.",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">In today's digital-first world, businesses need a reliable IT partner to grow online and stay competitive. Memo InfoTech is a leading IT and digital solutions company in Nagercoil, offering complete technology and digital services under one roof. From website development and software solutions to digital marketing, branding, and mobile app development, we help startups, small businesses, and enterprises transform digitally with result-driven solutions.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Why Choose Memo InfoTech as Your IT Company in Nagercoil?</h2>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Choosing the right IT company can define your business success. Memo InfoTech stands out because we focus on quality, scalability, and measurable results.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Local Expertise</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We understand the business landscape of Nagercoil and Kanyakumari district, helping local businesses grow faster online.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>End-to-End Digital Solutions</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">No need to work with multiple vendors. We handle everything—from strategy to execution.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Custom-Built Solutions</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Every business is unique. We deliver tailor-made IT solutions based on your goals, not templates.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Affordable & Scalable</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">High-quality services at competitive pricing, suitable for startups and growing businesses.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Our Digital Solutions & IT Services in Nagercoil</h2>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Website Design & Development</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We design fast, responsive, and SEO-friendly websites that convert visitors into customers. We create web experiences optimized for search engines and user engagement.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Software Development</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Custom software solutions to automate, manage, and scale your business operations efficiently. From enterprise applications to business process automation.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Mobile App Development</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Android and iOS app development focused on performance, usability, and scalability. Native and cross-platform solutions tailored to your business needs.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Digital Marketing & SEO</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We help your business rank higher on Google, generate leads, and increase brand visibility through proven digital marketing strategies and SEO optimization.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>Branding & Graphic Design</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Build a powerful brand identity with logos, creatives, and visual systems that stand out and communicate your brand values effectively.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4"><span class="inline-block w-4 h-4 bg-[#007BFF] rounded-full mr-3"></span>UI/UX Design</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">User-centered designs that improve engagement, trust, and conversions. We create intuitive interfaces that delight users and achieve business goals.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Industries We Serve</h2>
            <ul class="list-disc pl-6 mb-6 text-gray-600">
                <li>Small & Medium Businesses</li>
                <li>Startups</li>
                <li>Educational Institutions</li>
                <li>Retail & E-commerce</li>
                <li>Healthcare</li>
                <li>Service-Based Businesses</li>
            </ul>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Why Local Businesses in Nagercoil Trust Memo InfoTech</h2>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Memo InfoTech is not just another IT firm. We are a long-term digital growth partner for businesses looking to scale with technology. Our transparent process, expert team, and focus on ROI make us one of the most trusted IT companies in Nagercoil.</p>

            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Frequently Asked Questions</h2>

            <h3 class="text-2xl font-bold mt-8 mb-4">Which is the best IT company in Nagercoil?</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Memo InfoTech is considered one of the best IT and digital solutions companies in Nagercoil due to its complete service offering, custom solutions, and strong client support.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">What services does Memo InfoTech offer?</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We offer website development, software development, mobile app development, digital marketing, branding, UI/UX design, and complete digital solutions tailored to your business.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Do you provide IT services outside Nagercoil?</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Yes, while we are based in Nagercoil, we serve clients across Tamil Nadu and India with the same quality and dedication.</p>
        `,
        category: "Insights",
        author: "Memo InfoTech",
        date: "Jan 22, 2025",
        image: "/assets/news 7.png",
        featured: false
    }
];

const categories = ["All", "Design", "Development", "Strategy", "Insights"];

const Blog: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    
    // Subscription State
    const [email, setEmail] = useState("");
    const [subStatus, setSubStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTk-Npq9H8Ah0YW6GcU4c8Xic0hOPTOW9KvZadLwKNPnr50u39qTyYZ3g79NnVyMx0/exec";

    const filteredPosts = activeCategory === "All" 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPost = blogPosts[0];

    useEffect(() => {
      updateSEO({
        title: 'Blog | Web Design & Development Insights | Memo InfoTech',
        description: 'Read our latest articles on web design, development, digital marketing, and technology trends. Expert insights and tips for your business.',
        keywords: 'blog, web design tips, development insights, digital marketing, technology trends',
        canonicalUrl: 'https://www.memoinfotech.com/blog/'
      });
      
      addBreadcrumbSchema([
        { name: 'Home', url: 'https://www.memoinfotech.com/' },
        { name: 'Blog', url: 'https://www.memoinfotech.com/blog/' }
      ]);
    }, []);

    useEffect(() => {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        
        if (gsap && ScrollTrigger && containerRef.current) {
            gsap.registerPlugin(ScrollTrigger);
            let ctx = gsap.context(() => {
                gsap.from(".blog-hero-text", {
                    y: 100, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1
                });
                gsap.from(".blog-card", {
                    y: 50, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.1,
                    scrollTrigger: { trigger: ".blog-grid", start: "top 80%" }
                });
            }, containerRef);
            return () => ctx.revert();
        }
    }, []);

    // SEO: set page title & description
    useEffect(() => {
        document.title = 'Blog — Insights on Design & Technology';
        const desc = 'Actionable articles on web design, performance, branding, and product strategy. Practical guides for designers and developers.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, []);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        
        setSubStatus('submitting');

        const form = new FormData();
        form.append('type', 'subscribe');
        form.append('email', email);
        // Add required fields for script to avoid errors if it expects them
        form.append('name', 'Subscriber'); 
        form.append('message', 'Newsletter Subscription');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: form,
                mode: 'no-cors'
            });
            setSubStatus('success');
            setEmail('');
            setTimeout(() => setSubStatus('idle'), 5000);
        } catch (error) {
            console.error("Subscription error:", error);
            setSubStatus('error');
            setTimeout(() => setSubStatus('idle'), 5000);
        }
    };

    return (
                <div ref={containerRef} className="pt-40 pb-20 w-full bg-white">
                        <div className="container mx-auto px-6 text-center">
                                {/* Header - Projects style */}
                                <div className="overflow-hidden mb-2">
                                    <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter">
                                        BLOG <br/>
                                        <span className="text-white bg-[#007BFF] px-6 transform -skew-x-12 inline-block">INSIGHTS</span>
                                    </h1>
                                    <p className="mt-10 text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                                        Exploring the intersection of design, technology, and culture.
                                    </p>
                                    <div className="mt-6">
                                        <Link to="/contact" className="inline-block bg-[#007BFF] text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-colors" aria-label="Contact Memo InfoTech">Contact Us</Link>
                                    </div>
                                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "BreadcrumbList",
                                        "itemListElement": [
                                          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://Memoinfotech.com/" },
                                          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://Memoinfotech.com/blog" }
                                        ]
                                    })}} />
                                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-4 mb-16 blog-hero-text">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border transition-all
                            ${activeCategory === cat 
                                ? 'bg-black text-white border-black' 
                                : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post (Only show if All is selected or category matches) */}
                {activeCategory === "All" && (
                    <a href={`/blog/${(featuredPost as any).slug || featuredPost.id}`} className="block mb-24 group cursor-pointer">
                        <div className="relative rounded-[3rem] overflow-hidden h-[60vh] w-full mb-8 shadow-2xl">
                            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 md:p-16 flex flex-col justify-end items-start">
                                <span className="px-4 py-1 bg-[#007BFF] text-white text-xs font-bold uppercase rounded-full mb-4">Featured</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-white font-['Syne'] mb-4 max-w-4xl group-hover:underline decoration-4 underline-offset-8 decoration-[#007BFF] transition-all">
                                    {featuredPost.title}
                                </h2>
                                <div className="flex items-center gap-6 text-gray-300 text-sm font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><User size={14}/> {featuredPost.author}</span>
                                    <span className="flex items-center gap-2"><Calendar size={14}/> {featuredPost.date}</span>
                                </div>
                            </div>
                        </div>
                        </a>
                )}

                {/* Post Grid */}
                <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {filteredPosts.filter(p => activeCategory === "All" ? !p.featured : true).map((post) => (
                        <a href={`/blog/${(post as any).slug || post.id}`} key={post.id} className="blog-card group cursor-pointer flex flex-col h-full">
                            <div className="rounded-3xl overflow-hidden mb-6 aspect-[4/3] relative shadow-md group-hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                                    {post.category}
                                </div>
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-[#007BFF] rounded-full"></span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-['Syne'] mb-3 leading-tight group-hover:text-[#007BFF] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 mb-6 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform">
                                    Read Story <ArrowRight size={18} className="text-[#007BFF]" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="mt-32 bg-[#007BFF] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                     {/* Abstract BG */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                        style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-[4rem] font-bold text-white font-['Syne'] mb-6 leading-none">Stay in the Loop</h2>
                        <p className="text-blue-100 text-lg mb-10">Get the latest insights, trends, and news delivered directly to your inbox. No spam, just pure creativity.</p>
                        
                        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={subStatus === 'success' || subStatus === 'submitting'}
                                className="flex-1 px-6 py-4 rounded-full outline-none text-black focus:ring-4 ring-white/30 transition-all disabled:opacity-70"
                                required
                            />
                            <button 
                                type="submit"
                                disabled={subStatus === 'success' || subStatus === 'submitting'}
                                className={`px-10 py-4 font-bold rounded-full transition-all shadow-xl flex items-center justify-center min-w-[160px]
                                ${subStatus === 'success' 
                                    ? 'bg-green-500 text-white cursor-default' 
                                    : 'bg-black text-white hover:bg-white hover:text-black'}`}
                            >
                                {subStatus === 'submitting' ? (
                                    <Loader2 className="animate-spin" />
                                ) : subStatus === 'success' ? (
                                    <>Subscribed <Check size={18} className="ml-2" /></>
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </form>
                        {subStatus === 'error' && (
                            <p className="text-red-200 mt-4 font-bold bg-red-900/20 inline-block px-4 py-2 rounded-lg">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
