import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, User, Tag, Search, Loader2, Check } from 'lucide-react';
import { UNIFIED_ASSET } from '../assets/images';
import { Link } from 'react-router-dom';

export const blogPosts = [
    {
        id: 1,
        title: "The Psychology of Minimalist Web Design in 2025",
        excerpt: "Why less is more, and how cognitive load affects conversion rates in the modern digital landscape.",
        category: "Design",
        author: "Alex Void",
        date: "Oct 12, 2024",
        image: "/assets/news 1.png",
        featured: true
    },
    {
        id: 2,
        title: "Three.js and The Future of Immersive Web",
        excerpt: "Pushing the boundaries of browser capability with WebGL and hardware acceleration.",
        category: "Development",
        author: "Jaxon Steele",
        date: "Oct 08, 2024",
        image: "/assets/news 2.png",
        featured: false
    },
    {
        id: 3,
        title: "AI-Driven Branding: A New Era",
        excerpt: "How generative AI is helping agencies create more personalized and dynamic brand identities.",
        category: "Strategy",
        author: "Sasha B.",
        date: "Sep 28, 2024",
        image: "/assets/news 3.png",
        featured: false
    },
    {
        id: 4,
        title: "Sustainable Digital Design",
        excerpt: "Reducing the carbon footprint of your website through optimized assets and green hosting.",
        category: "Insights",
        author: "Nika Sol",
        date: "Sep 20, 2024",
        image: "/assets/news 4.png",
        featured: false
    },
    {
        id: 5,
        title: "Typography Trends for the Bold",
        excerpt: "Why kinetic typography is taking over hero sections across the awwwards ecosystem.",
        category: "Design",
        author: "Alex Void",
        date: "Sep 15, 2024",
        image: "/assets/news 5.png",
        featured: false
    },
    {
        id: 6,
        title: "The Death of the Cookie",
        excerpt: "Navigating the privacy-first web and what it means for your marketing analytics.",
        category: "Strategy",
        author: "Maya Green",
        date: "Sep 10, 2024",
        image: "/assets/news 6.png",
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
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3VFvRPhyO1nftU3yiexcbnFe6UJBCUd5AJyOrSB0pONxG_RIJ9K4MryGsPXwY4g/exec";

    const filteredPosts = activeCategory === "All" 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPost = blogPosts[0];

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
                body: form
            });
            setSubStatus('success');
            setEmail('');
        } catch (error) {
            console.error("Subscription error:", error);
            setSubStatus('error');
        }
    };

    return (
        <div ref={containerRef} className="pt-32 pb-20 w-full bg-white">
            <div className="container mx-auto px-6">
                
                {/* Hero / Header */}
                <div className="mb-20 flex flex-col lg:flex-row items-end justify-between gap-10 border-b border-gray-100 pb-10">
                    <div>
                        <h1 className="blog-hero-text text-5xl md:text-[4rem] font-bold font-['Syne'] text-black mb-4 tracking-tighter leading-none">
                            INSIGHTS
                        </h1>
                        <p className="blog-hero-text text-xl text-gray-500 max-w-xl">
                            Exploring the intersection of design, technology, and culture.
                        </p>
                    </div>
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
                    <Link to={`/blog/${featuredPost.id}`} className="block mb-24 group cursor-pointer">
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
                    </Link>
                )}

                {/* Post Grid */}
                <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {filteredPosts.filter(p => activeCategory === "All" ? !p.featured : true).map((post) => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="blog-card group cursor-pointer flex flex-col h-full">
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
                        </Link>
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