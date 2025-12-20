import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Share2, Twitter, Facebook, Linkedin, Clock, User } from 'lucide-react';
import { blogPosts } from './Blog';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
    const [shareMsg, setShareMsg] = useState<string | null>(null);

    // Look up the blog post by id and fall back to a default article
    const postId = Number(id);
    const post = blogPosts.find(p => p.id === postId);

    const article = {
        title: post ? post.title : "Article",
        subtitle: post ? post.excerpt : "",
        author: post ? post.author : "",
        date: post ? post.date : "",
        readTime: post ? '6 min read' : '8 min read',
        category: post ? post.category : 'Insights',
        image: post ? post.image : "/assets/image.svg",
        // Use post.content when available, otherwise keep the default placeholder HTML
        content: post && (post as any).content ? (post as any).content : `
            <p class="mb-6 text-xl leading-relaxed text-gray-700">${post ? post.excerpt : 'Article content goes here.'}</p>
            <h2 class="text-3xl font-bold font-['Syne'] mt-12 mb-6 text-black">Article Details</h2>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Full article content should be supplied by your CMS or data source. This is placeholder content for the demo.</p>
        `
    };

  useEffect(() => {
    window.scrollTo(0, 0);
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Parallax Hero
            gsap.to(".article-hero-img", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".article-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Content Fade In
            gsap.from(".article-content > *", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".article-content",
                    start: "top 85%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }
  }, [id]);

    // SEO: dynamic title & meta based on article
    useEffect(() => {
        const title = article.title ? `${article.title} — MEMO InfoTech` : 'Article — MEMO InfoTech';
        document.title = title;
        const desc = article.subtitle || 'Read this article from MEMO InfoTech on design and technology.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, [article.title, article.subtitle]);

    const getShareUrl = () => {
        try {
            // Prefer a clean site URL for sharing
            return `${window.location.origin}/blog/${id}`;
        } catch (e) {
            return window.location.href;
        }
    };

    const openPopup = (shareUrl: string) => {
        window.open(shareUrl, '_blank', 'toolbar=0,status=0,width=600,height=500');
    };

    const handleTwitterShare = () => {
        const url = getShareUrl();
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(url)}`;
        openPopup(shareUrl);
    };

    const handleLinkedInShare = () => {
        const url = getShareUrl();
        const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(article.title)}`;
        openPopup(shareUrl);
    };

    const handleFacebookShare = () => {
        const url = getShareUrl();
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        openPopup(shareUrl);
    };

    const handleNativeShare = async () => {
        const url = getShareUrl();
        // Use Web Share API if available
        if ((navigator as any).share) {
            try {
                await (navigator as any).share({ title: article.title, text: article.subtitle, url });
                setShareMsg('Thanks for sharing');
            } catch (err) {
                setShareMsg('Share canceled');
            }
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(url);
                setShareMsg('Link copied to clipboard');
            } catch (err) {
                setShareMsg('Could not copy link');
            }
        } else {
            // Fallback copy
            const textarea = document.createElement('textarea');
            textarea.value = url;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                setShareMsg('Link copied to clipboard');
            } catch (err) {
                setShareMsg('Could not copy link');
            }
            document.body.removeChild(textarea);
        }

        // Clear message after short delay
        setTimeout(() => setShareMsg(null), 3000);
    };

  return (
    <div ref={containerRef} className="bg-white w-full min-h-screen">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 h-1 bg-[#007BFF] z-50 w-full transform origin-left scale-x-0 article-progress"></div>
        
        {/* Hero Section */}
        <div className="article-hero relative h-[70vh] overflow-hidden">
            <img src={article.image} alt={article.title} className="article-hero-img w-full h-[120%] object-cover -mt-[10%]" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-white z-10 bg-gradient-to-t from-black/80 to-transparent">
                <div className="container mx-auto">
                    <a href="https://www.memoinfotech.com/blog/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-6 hover:text-[#007BFF] transition-colors">
                        <ArrowLeft size={16} /> Back to Insights
                    </a>
                    <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-wider text-[#007BFF]">
                        <span>{article.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-[4rem] font-bold font-['Syne'] leading-none mb-8 max-w-5xl">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-8 text-sm md:text-base font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
                                <User size={14}/>
                            </div>
                            {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} /> {article.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="opacity-50">|</span> {article.date}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-6 py-20 relative">
            <div className="flex flex-col lg:flex-row gap-20">
                
                {/* Sticky Sidebar (Share) */}
                <div className="hidden lg:block w-24 relative">
                    <div className="sticky top-32 flex flex-col gap-6 items-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 transform -rotate-90 mb-4">Share</p>
                        <button onClick={handleTwitterShare} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all" aria-label="Share on Twitter">
                            <Twitter size={18} />
                        </button>
                        <button onClick={handleLinkedInShare} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all" aria-label="Share on LinkedIn">
                            <Linkedin size={18} />
                        </button>
                        <button onClick={handleFacebookShare} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all" aria-label="Share on Facebook">
                            <Facebook size={18} />
                        </button>
                        <button onClick={handleNativeShare} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all mt-8" aria-label="Share or copy link">
                            <Share2 size={18} />
                        </button>
                        {shareMsg && (
                            <div className="text-xs text-center mt-2 px-2 py-1 bg-black text-white rounded-md">{shareMsg}</div>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed text-black mb-10 font-['Syne']">
                        {article.subtitle}
                    </p>
                    
                    <div 
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: article.content }} 
                    />

                    <hr className="my-16 border-gray-200" />

                    {/* Author Box */}
                    <div className="flex items-center gap-6 bg-gray-50 p-8 rounded-3xl">
                         <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                             <img src="/assets/image.svg" alt={article.author} className="w-full h-full object-cover" />
                         </div>
                         <div>
                             <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Written by</p>
                             <h3 className="text-xl font-bold text-black mb-2">{article.author}</h3>
                             <p className="text-gray-500 text-sm">Creative Director at MEMO InfoTech. Obsessed with grid systems, brutalism, and good coffee.</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Next Post Teaser */}
        <div className="bg-black text-white py-32">
             <div className="container mx-auto px-6 text-center">
                 <p className="text-[#007BFF] font-bold uppercase tracking-widest mb-6">Read Next</p>
                 <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] mb-10 hover:text-[#007BFF] cursor-pointer transition-colors leading-none">
                     Three.js and The Future of Immersive Web
                 </h2>
                 <a href="https://www.memoinfotech.com/blog/" className="inline-block px-10 py-4 border border-white rounded-full font-bold hover:bg-white hover:text-black transition-all">
                     View All Articles
                 </a>
             </div>
        </div>
    </div>
  );
};

export default BlogDetail;