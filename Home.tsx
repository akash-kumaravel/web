import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Box, Code, PenTool, Video, ArrowLeft, ArrowUpRight, MousePointer2, Globe, Award, Plus, Minus, Linkedin, Twitter, Loader2, CheckCircle, AlertCircle, Send, Mail, Phone, MapPin } from 'lucide-react';
// Replaced `Link` usage with native anchors for crawl-critical CTAs to improve crawlability
import { Testimonial } from '../types';
// Images are served from the public `assets` folder. Use direct public paths instead of importing from assets module.
import { blogPosts } from './Blog';

// Mock Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nithin",
    role: "Founder",
    company: "TechNova",
    text: "MEMO InfoTech completely modernized our software infrastructure. The Build bullling software for us.",
    image: "/assets/t1.png"
  },
  {
    id: 2,
    name: "Arun Raj",
    role: "CEO",
    company: "STEP IN",
    text: "Their team delivers at a professional level. The app they built for us is billing software.",
    image: "/assets/t2.png"
  },
  {
    id: 3,
    name: "Rizwan",
    role: "Founder",
    company: " Muhibah restaurant",
    text: "Professional, technical, and incredibly talented. MEMO InfoTech is the IT partner you want if you're ready to scale your business.",
    image: "/assets/t3.png"
  }
];

const teamMembers = [
  { name: "Alex Void", role: "Technical Director", img: "/assets/image.svg" },
  { name: "Nika Sol", role: "Lead Developer", img: "/assets/image.svg" },
  { name: "Jaxon Steele", role: "Solutions Architect", img: "/assets/image.svg" },
  { name: "Maya Green", role: "Project Manager", img: "/assets/image.svg" },
  { name: "Davide R.", role: "UI/UX Specialist", img: "/assets/image.svg" },
];

const serviceList = [
  { icon: <Code />, title: "Website Development", desc: "Custom websites and software solutions tailored to your business needs and goals.", img: "/assets/p1.png" },
  { icon: <Globe />, title: "Graphic & Logo Design", desc: "High-impact poster design, logos, and brand identity services.", img: "/assets/p2.png" },
  { icon: <Box />, title: "Mobile Applications", desc: "Native and cross-platform apps for iOS and Android.", img: "/assets/p3.png" },
  { icon: <Video />, title: "Motion & Explainers", desc: "Engaging motion posters and explainer videos that drive conversions.", img: "/assets/p4.png" }
];

const faqs = [
    { q: "How long names a typical software project take?", a: "Timelines vary by scope. A simple website might take 4-6 weeks, while complex custom software could take 3-6 months. We prioritize quality and security." },
    { q: "Do you work with global clients?", a: "Yes, we serve clients worldwide. Our services span web development, graphic design, and explainer videos for local and international projects." },
    { q: "What is your pricing structure?", a: "We operate on both project-based and retainer models. We believe in transparency and will provide a detailed proposal after our discovery session." },
    { q: "Do you create Motion Posters and Explainer Videos?", a: "Absolutely. We have a dedicated creative team specializing in high-end Motion Posters, 3D Animation, and Explainer Videos for brands." }
];

// blogPosts imported from ./Blog to keep a single source of truth

const horizontalWorks = [
  { title: "Background Remover", cat: "website", img: "/assets/h1.png" },
  { title: "Hivili", cat: "website", img: "/assets/h2.png" },
  { title: "Cloud Bestie", cat: "Cloud Storage", img: "/assets/h3.png" },
  { title: "Nexus", cat: "website", img: "/assets/h4.png" }
];

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // SEO: set page title & description
  useEffect(() => {
    document.title = 'MEMO InfoTech — Digital Product & Design Studio';
    const desc = 'MEMO InfoTech builds high-converting websites, brand identities, and motion content. Strategic web development, UX, and creative services to grow your business.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else {
      meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = desc;
      document.head.appendChild(meta);
    }
  }, []);
  const [heroMousePos, setHeroMousePos] = useState({ x: 0, y: 0 });
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [statsTriggered, setStatsTriggered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3VFvRPhyO1nftU3yiexcbnFe6UJBCUd5AJyOrSB0pONxG_RIJ9K4MryGsPXwY4g/exec";


  // Animated Counters State
  const [counts, setCounts] = useState({ companies: 0, years: 0, hours: 0, revenue: 0 });
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    // Hero Badge Animation (Independent)
    let start = 0;
    const end = 3;
    const duration = 2000;
    const startTime = performance.now();

    const animateHero = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        
        setHeroCount(Math.floor(end * ease));

        if (progress < 1) {
            requestAnimationFrame(animateHero);
        }
    };
    requestAnimationFrame(animateHero);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setHeroMousePos({ x, y });
      }
    };
    
    const currentHero = heroRef.current;
    if (currentHero) {
        currentHero.addEventListener('mousemove', handleMouseMove);
    }

    // GSAP Init
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    let ctx: any;

    if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
            // Hero Load
            const tl = gsap.timeline();
            tl.from(".hero-text", { y: 100, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" })
              .from(".hero-image-container", { scale: 0.9, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.5");

            // Video Scale Animation
            if (videoWrapperRef.current && videoRef.current) {
                gsap.fromTo(videoRef.current, 
                    { 
                        width: "40%", 
                        height: "40vh", 
                        borderRadius: "3rem" 
                    },
                    {
                        width: "100%",
                        height: "100vh",
                        borderRadius: "0rem",
                        ease: "none",
                        scrollTrigger: {
                            trigger: videoWrapperRef.current,
                            start: "top bottom",
                            end: "center center",
                            scrub: true,
                        }
                    }
                );
            }

            // Horizontal Scroll
            if (horizontalRef.current && horizontalContainerRef.current) {
                const sections = gsap.utils.toArray(".horizontal-item");
                
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontalContainerRef.current,
                        pin: true,
                        scrub: 1,
                        // Snap to each section
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + (horizontalContainerRef.current!.offsetWidth)
                    }
                });
            }

            // Stats Trigger
            ScrollTrigger.create({
                trigger: statsRef.current,
                start: "top 80%",
                onEnter: () => setStatsTriggered(true)
            });
        }, containerRef);
    }

    return () => {
        if (currentHero) currentHero.removeEventListener('mousemove', handleMouseMove);
        if (ctx) ctx.revert();
    };
  }, []);

  // Counter Animation Effect
  useEffect(() => {
      if (statsTriggered) {
          const duration = 2000; // 2 seconds
          const steps = 60;
          const intervalTime = duration / steps;
          
          // Updated targets: companies set to 30, years set to 3
          const targets = { companies: 30, years: 3, hours: 15, revenue: 80 };
          let currentStep = 0;

          const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              const ease = 1 - Math.pow(1 - progress, 3); // cubic ease out

              setCounts({
                  companies: Math.floor(targets.companies * ease),
                  years: Math.floor(targets.years * ease),
                  hours: Math.floor(targets.hours * ease),
                  revenue: Math.floor(targets.revenue * ease)
              });

              if (currentStep >= steps) clearInterval(timer);
          }, intervalTime);

          return () => clearInterval(timer);
      }
  }, [statsTriggered]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('submitting');

    const form = new FormData();
    form.append('name', contactForm.name);
    form.append('email', contactForm.email);
    form.append('message', contactForm.message);

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: form
        });
        setContactStatus('success');
        setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
        console.error(error);
        setContactStatus('error');
    }
  };

  return (
    <div ref={containerRef} className="bg-white w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="min-h-screen pt-32 pb-20 px-6 container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-[#007BFF] rounded-full animate-pulse blur-sm" />
        <div className="absolute bottom-1/4 right-10 w-12 h-12 border-4 border-[#007BFF] rounded-full opacity-50" 
             style={{ transform: `translate(${heroMousePos.x * -30}px, ${heroMousePos.y * -30}px)` }} />

        <div className="flex-1 z-10 hero-text text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-blue-100 border border-[#007BFF] rounded-full mb-6">
            <span className="text-sm font-bold text-[#0056b3] uppercase tracking-wider flex items-center gap-2">
                <Star size={14} fill="currentColor" /> Software Company
            </span>
          </div>
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter mb-8">
            Empowering Brands <br />
            <span className="relative inline-block">
              Through Creative
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#007BFF]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span> <br />
            Technology
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We are a premier Software Company specializing in Website Development, Brand Design, Explainer Videos, and Motion Graphics. We turn ideas into digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/contact" className="px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </a>
            <a href="/services" className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:-translate-y-1">
              Our Services
            </a>
          </div>
        </div>

        <div className="flex-1 relative hero-image-container w-full" style={{ perspective: '1000px' }}>
          <div className="relative z-10 transition-transform duration-100 ease-out"
               style={{ transform: `rotateY(${heroMousePos.x * 5}deg) rotateX(${heroMousePos.y * -5}deg)` }}>
            <div className="absolute inset-0 bg-[#007BFF] rounded-[3rem] transform translate-x-4 translate-y-4 -z-10 opacity-30 blur-xl"></div>
            <div className="w-full aspect-[4/5] max-w-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative bg-gray-100 mx-auto lg:mx-0">
              <img
                src="/assets/home.png"
                alt="Creative Professional at Work"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                width={500}
                height={625}
              />
            </div>
            
            {/* Floating Badge */}
            <div className="hidden md:flex absolute bottom-10 -left-12 bg-white p-6 rounded-3xl shadow-xl flex-col gap-2 border border-blue-50 animate-bounce-slow transition-transform duration-100"
                 style={{ transform: `translate(${heroMousePos.x * 20}px, ${heroMousePos.y * 20}px)` }}>
              <div className="flex gap-1 text-[#007BFF]">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="font-bold text-black">5-Star Rating</p>
          
            </div>

            {/* Floating Circle Badge - Using heroCount for immediate animation */}
            <div className="hidden md:flex absolute top-10 -right-5 bg-black text-white p-4 rounded-full w-32 h-32 flex-col items-center justify-center text-center shadow-2xl transform transition-transform duration-100"
                 style={{ transform: `translate(${heroMousePos.x * -15}px, ${heroMousePos.y * -15}px) rotate(12deg)` }}>
              <span className="text-3xl font-bold text-[#007BFF]">{heroCount}+</span>
              <span className="text-xs font-medium uppercase">Years Exp.</span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO REVEAL SECTION */}
      <section ref={videoWrapperRef} className="w-full flex items-center justify-center py-20 bg-black relative overflow-hidden">
         <div className="text-center mb-10 absolute top-20 left-0 w-full z-0">
            <h2 className="text-white text-xl tracking-[0.5em] uppercase opacity-50">Technology</h2>
         </div>
        <div ref={videoRef} className="relative overflow-hidden z-10 bg-gray-900 flex items-center justify-center shadow-[0_0_100px_rgba(0,123,255,0.2)]">
           <video
             src="/assets/home.mp4"
             className="w-full h-full object-cover opacity-80"
             autoPlay
             muted
             loop
             playsInline
             poster="/assets/poster.png"
             aria-label="Explainer video showcasing digital product solutions and services"
           >
             Your browser names not support the video tag.
           </video>
           <div className="sr-only">Explainer video showcasing digital product solutions and services</div>
           <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-md hover:scale-110 transition-transform cursor-pointer group">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1 group-hover:border-l-[#007BFF]"></div>
                </div>
                <h2 className="text-white text-3xl md:text-[4rem] font-bold font-['Syne'] mt-8 text-center leading-none">Future of <br/><span className="text-[#007BFF]">IT Solutions</span></h2>
             </div>
         </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="py-32 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: counts.companies, suffix: '+', label: 'Happy Clients ' },
              { num: counts.years, suffix: '+', label: 'Years Experience' },
              { num: counts.hours, suffix: '+', label: 'Websites Delivered' },
              { num: counts.revenue, suffix: '%', label: 'Client Growth' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-box p-8 border border-white/10 rounded-3xl hover:bg-white/5 hover:border-[#007BFF]/50 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#007BFF]/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150" />
                <h3 className="text-4xl font-bold mb-2 font-['Syne'] group-hover:text-[#007BFF] transition-colors">
                    {stat.num}{stat.suffix}
                </h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* HORIZONTAL SCROLL GALLERY */}
       <section ref={horizontalContainerRef} className="relative bg-white overflow-hidden">
          {/* 
            We use w-[500%] because we have 5 items (title + 4 works).
            Each item will be 20% width of the container (which equals 100% of viewport width).
          */}
          <div ref={horizontalRef} className="flex w-[500%] h-screen">
             {/* Title Panel */}
             <div className="horizontal-item w-[20%] h-full flex items-center justify-center bg-black text-white px-6 md:px-20 relative border-r border-white/10">
                 <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#007BFF 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                 <div className="relative z-10 text-center md:text-left">
                     <h2 className="text-6xl md:text-[4rem] font-bold font-['Syne'] leading-none">Recent <br/> <span className="text-[#007BFF]">Masterpieces</span></h2>
                     <div className="mt-10 flex items-center justify-center md:justify-start gap-4 text-xl">
                        <ArrowRight className="animate-bounce-horizontal" />
                        <span>Scroll to explore</span>
                     </div>
                 </div>
             </div>
             
             {/* Project Panels */}
             {horizontalWorks.map((work, i) => (
             <div key={i} className="horizontal-item w-[20%] h-full p-4 md:p-20 flex items-center justify-center bg-white border-r border-gray-100">
                     <div className="w-full h-full relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl">
                         <img src={work.img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt={`${work.title} — Design Portfolio`} width={364} height={468} />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
                             <span className="text-[#007BFF] font-bold uppercase tracking-widest mb-2">{work.cat}</span>
                             <h3 className="text-4xl md:text-6xl font-bold text-white font-['Syne']">{work.title}</h3>
                         </div>
                     </div>
                 </div>
             ))}
          </div>
       </section>

      {/* SERVICES SECTION */}
      <section className="py-32 bg-black text-white relative overflow-hidden rounded-t-[4rem] mt-[-4rem] z-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-5xl md:text-[4rem] font-bold mb-16 font-['Syne'] leading-none">Our <span className="text-[#007BFF]">Services</span></h2>
               <div className="space-y-4">
                 {serviceList.map((item, idx) => (
                   <div 
                        key={idx} 
                        onMouseEnter={() => setActiveServiceIndex(idx)}
                        className={`service-item group p-6 border rounded-3xl transition-all duration-300 cursor-pointer flex items-start gap-6
                        ${activeServiceIndex === idx ? 'bg-[#007BFF] border-[#007BFF] text-white' : 'border-white/10 hover:border-[#007BFF]/50'}`}
                   >
                      <div className={`p-3 rounded-full transition-colors ${activeServiceIndex === idx ? 'bg-white/20' : 'bg-white/10 group-hover:bg-[#007BFF] group-hover:text-white'}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className={`transition-colors ${activeServiceIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            {item.desc}
                        </p>
                      </div>
                      <ArrowUpRight className={`transition-transform ${activeServiceIndex === idx ? 'rotate-45 text-white' : 'text-gray-500 group-hover:text-white'}`} />
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="lg:w-1/2 relative flex flex-col justify-between">
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,123,255,0.15)]">
                <img 
                    src={serviceList[activeServiceIndex].img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt={`MEMO InfoTech Service - ${serviceList[activeServiceIndex].title}`}
                    width={500}
                    height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-10 left-10 transform translate-y-0 transition-transform duration-500">
                   <h3 className="text-5xl font-bold mb-2 text-white">{serviceList[activeServiceIndex].title}</h3>
                   <div className="h-1 w-20 bg-white mt-4 rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-8">
                <a href="/services" className="flex-1 py-4 bg-[#007BFF] text-white rounded-full font-bold text-center hover:bg-white hover:text-[#007BFF] transition-all shadow-lg hover:shadow-[#007BFF]/50">
                  See how we work
                </a>
                <a href="/careers" className="flex-1 py-4 border border-white/20 rounded-full font-bold text-center hover:bg-white hover:text-black transition-colors">
                  Meet our experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLOGAN STRIP */}
      <section className="py-12 bg-black border-t border-white/10 overflow-hidden">
        <div className="whitespace-nowrap flex gap-20 items-center animate-marquee">
          {[1,2,3,4,5,6,7,8].map(i => (
             <h2 key={i} className="text-6xl md:text-[4rem] font-bold font-['Syne'] text-transparent stroke-text uppercase opacity-100 hover:text-[#007BFF] transition-colors cursor-default">
               Innovate <span className="text-[#007BFF]">+</span> Create <span className="text-[#007BFF]">+</span> Inspire
             </h2>
          ))}
        </div>
        <style>{`
          .stroke-text {
            -webkit-text-stroke: 1px white;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>


      {/* FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl md:text-[4rem] font-bold mb-16 font-['Syne'] text-center leading-none">Curious <span className="text-[#007BFF]">Minds</span></h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-3xl overflow-hidden transition-all hover:border-[#007BFF]">
                        <button 
                            className="w-full p-8 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                        >
                            <span className="text-xl font-bold text-black pr-8">{faq.q}</span>
                            <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeAccordion === idx ? 'bg-[#007BFF] text-white rotate-180' : 'text-black'}`}>
                                {activeAccordion === idx ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === idx ? 'max-h-48' : 'max-h-0'}`}>
                            <div className="p-8 pt-0 text-gray-500 leading-relaxed">
                                {faq.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* LATEST INSIGHTS - Recently Added (Top 3) */}
      <section className="py-32 bg-[#f8f8f8]">
          <div className="container mx-auto px-6">
             <div className="flex justify-between items-end mb-16">
                 <div>
                    <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] mb-4 text-black leading-none">Recently <span className="text-[#007BFF]">Added</span></h2>
                    <p className="text-gray-500">Latest insights on Web Design, Branding, and Digital Strategy.</p>
                 </div>
                 <a href="/blog" className="hidden md:flex items-center gap-2 font-bold text-black hover:text-[#007BFF] transition-colors">
                   View all articles <ArrowRight size={20} />
                 </a>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {blogPosts.slice(0,3).map((post, idx) => (
                   <a href={`/blog/${post.id}`} key={idx} className="group cursor-pointer">
                         <div className="rounded-[2rem] overflow-hidden mb-6 relative aspect-video">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={364} height={256} />
                             <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                                 {post.category}
                             </div>
                         </div>
                         <h3 className="text-2xl font-bold mb-4 group-hover:text-[#007BFF] transition-colors">{post.title}</h3>
                         <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                             Read Article <ArrowRight size={16} />
                         </div>
                     </Link>
                 ))}
             </div>
          </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto bg-[#0a0a0a] rounded-[3rem] border border-white/5 p-8 md:p-20 relative overflow-hidden shadow-2xl">
                 {/* Decorative Glow */}
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#007BFF] opacity-10 blur-[80px] rounded-full"></div>
                 <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#007BFF] opacity-10 blur-[80px] rounded-full"></div>

                 <div className="flex flex-col items-center text-center">
                     <div className="mb-12">
                         <span className="text-[#007BFF] text-sm font-bold uppercase tracking-[0.3em]">Testimonials</span>
                         <h2 className="text-4xl md:text-5xl font-bold font-['Syne'] mt-4">Client Success</h2>
                     </div>

                     <div className="relative w-full min-h-[300px] flex items-center justify-center">
                         {testimonials.map((t, i) => (
                             <div 
                                key={t.id}
                                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
                                    i === activeTestimonial 
                                        ? 'opacity-100 translate-x-0 scale-100' 
                                        : i < activeTestimonial 
                                            ? 'opacity-0 -translate-x-20 scale-95 pointer-events-none'
                                            : 'opacity-0 translate-x-20 scale-95 pointer-events-none'
                                }`}
                             >
                                 <div className="mb-8 text-[#007BFF] opacity-50">
                                     {[1,2,3,4,5].map(star => (
                                         <Star key={star} className="inline-block w-5 h-5 fill-current" />
                                     ))}
                                 </div>
                                 <p className="text-2xl md:text-4xl font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
                                     "{t.text}"
                                 </p>
                                 <div className="flex items-center gap-4">
                                     <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#007BFF] flex-shrink-0">
                                         <img src={t.image} className="w-14 h-14 object-cover" alt={t.name} width={56} height={56} />
                                     </div>
                                     <div className="text-left">
                                         <h4 className="text-xl font-bold text-white">{t.name}</h4>
                                         <p className="text-gray-400 text-sm">{t.role} at {t.company}</p>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>

                     {/* Navigation Dots */}
                     <div className="flex gap-3 mt-12 z-20" role="tablist">
                         {testimonials.map((_, i) => (
                             <button 
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    i === activeTestimonial ? 'bg-[#007BFF] scale-125' : 'bg-gray-700 hover:bg-gray-500'
                                }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                                aria-selected={i === activeTestimonial}
                                role="tab"
                             />
                         ))}
                     </div>
                     
                     {/* Side Arrows */}
                     <button onClick={prevTestimonial} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#007BFF] hover:border-[#007BFF] hover:text-white transition-all z-20 hidden md:flex" aria-label="Previous testimonial">
                        <ArrowLeft />
                     </button>
                     <button onClick={nextTestimonial} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#007BFF] hover:border-[#007BFF] hover:text-white transition-all z-20 hidden md:flex" aria-label="Next testimonial">
                        <ArrowRight />
                     </button>
                 </div>
            </div>
        </div>
      </section>

      {/* CONTACT SECTION (Blue BG) */}
      <section className="py-32 bg-[#007BFF] text-black relative overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-900 opacity-20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl flex flex-col lg:flex-row gap-20 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="lg:w-1/2">
              <div className="bg-black text-white p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#007BFF] blur-[80px] opacity-50"></div>
                <h3 className="text-3xl font-bold mb-8">Contact Info</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                      <Mail />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase">Email us</p>
                      <p className="text-xl font-bold">info@memoinfotech.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase">Call us</p>
                      <p className="text-xl font-bold">+91 6374433734</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                      <MapPin />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase"> </p>
                      <p className="text-xl font-bold">India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 p-6 bg-[#222] rounded-2xl border border-white/10 hover:border-[#007BFF] transition-colors">
                  <p className="text-gray-300 italic">"We don’t just deliver projects. We build relationships"</p>
                  <p className="mt-4 font-bold text-[#007BFF]">- Founder, Akash Kumaravel</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4 font-['Syne'] text-black">Let's Build <br/>The Future</h2>
              <p className="text-gray-500 mb-10 text-lg">Ready to transform your business? Fill out the form below.</p>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-black">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent outline-none transition-all text-black placeholder-gray-400" 
                    placeholder="user name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-black">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent outline-none transition-all text-black placeholder-gray-400" 
                    placeholder="user@company.com" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-black">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent outline-none transition-all text-black placeholder-gray-400" 
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                {contactStatus === 'success' && (
                    <div className="bg-green-50 text-green-600 p-4 rounded-xl flex items-center gap-3">
                        <CheckCircle size={20} />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                )}

                {contactStatus === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3">
                        <AlertCircle size={20} />
                        <span>Something went wrong. Please try again later.</span>
                    </div>
                )}

                <button 
                    disabled={contactStatus === 'submitting'}
                    className="w-full bg-black text-white py-5 rounded-xl font-bold text-xl hover:shadow-xl hover:bg-[#007BFF] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {contactStatus === 'submitting' ? (
                        <>Sending... <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                        <>Send Message <Send size={20} /></>
                    )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;