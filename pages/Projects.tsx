import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Globe, Smartphone, PenTool, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const webSectionRef = useRef<HTMLDivElement>(null);
  const webContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    if (gsap && ScrollTrigger && containerRef.current) {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // 1. WEB DESIGN: Horizontal Scroll
            if (webSectionRef.current && webContainerRef.current) {
                const sections = gsap.utils.toArray(".web-item");
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: webContainerRef.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + (webContainerRef.current!.offsetWidth)
                    }
                });
            }

            // 2. UI/UX: Mobile Parallax
            gsap.utils.toArray(".mobile-screen").forEach((screen: any, i) => {
                 const speed = i % 2 === 0 ? 100 : -100; // Alternate direction
                 gsap.to(screen, {
                     y: speed,
                     scrollTrigger: {
                         trigger: ".uiux-section",
                         start: "top bottom",
                         end: "bottom top",
                         scrub: 1
                     }
                 });
            });

            // 3. LOGOS: Glow Effect & Stagger
            gsap.from(".logo-grid-item", {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".logo-section",
                    start: "top 80%"
                }
            });
            
            // 4. Graphic Design: Reveal
             gsap.from(".graphic-item", {
                 y: 100,
                 opacity: 0,
                 duration: 1,
                 stagger: 0.2,
                 scrollTrigger: {
                     trigger: ".graphic-section",
                     start: "top 70%"
                 }
             });

        }, containerRef);

        return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white overflow-x-hidden">
        
        {/* Header */}
        <div className="pt-40 pb-20 container mx-auto px-6">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter">
                SELECTED <br/>
                <span className="text-white bg-[#007BFF] px-6 transform -skew-x-12 inline-block">WORKS</span>
            </h1>
            <p className="mt-10 text-xl text-gray-500 max-w-2xl font-medium">
                A curated journey through our digital disciplines. Scroll to explore our expertise in Web, Mobile, Branding, and Art.
            </p>
        </div>

        {/* SECTION 1: WEB DESIGN (Horizontal Scroll) */}
        <div ref={webContainerRef} className="relative bg-black text-white">
             <div className="absolute top-10 left-10 z-10 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                 <Globe size={20} className="text-[#007BFF]" />
                 <span className="font-bold uppercase tracking-widest text-sm">Web Design</span>
             </div>

             <div ref={webSectionRef} className="flex w-[400%] h-screen">
                 {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="web-item w-screen h-screen flex items-center justify-center p-10 md:p-32 border-r border-white/10 relative">
                         <div className="w-full h-full relative group perspective-1000">
                             <div className="absolute inset-0 bg-[#007BFF] rounded-[3rem] transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                             <img src={`/assets/image ${i}.png`} className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700" alt={`Selected web project ${i} - MEMO InfoTech`} />
                             
                             <div className="absolute bottom-10 left-10 z-20">
                                 <h2 className="text-6xl font-bold font-['Syne'] mb-2">Project {i}</h2>
                                 <p className="text-gray-300 uppercase tracking-widest">E-Commerce / 2024</p>
                             </div>
                             <div className="absolute top-10 right-10 z-20 bg-white text-black w-20 h-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110">
                                 <ArrowUpRight size={32} />
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* SECTION 2: UI/UX (Vertical Parallax) */}
        <div className="uiux-section py-32 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-20 text-center">
                <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-2 rounded-full mb-6">
                    <Smartphone size={20} className="text-[#007BFF]" />
                    <span className="font-bold uppercase tracking-widest text-sm">UI/UX & Mobile</span>
                </div>
                <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] text-black leading-none">Interface <br/> <span className="text-[#007BFF]">Depth</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-20">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`mobile-screen relative aspect-[9/19] rounded-[3rem] border-8 border-black overflow-hidden shadow-2xl ${i % 2 === 0 ? 'mt-20' : ''}`}>
                        <img src={`/assets/ui${i}.png`} className="w-full h-full object-cover" alt={`App UI mockup ${i}`} />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer backdrop-blur-sm">
                            <span className="text-white font-bold text-xl">View App</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3: BRANDING / LOGOS (Grid) */}
        <div className="logo-section py-32 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                     <div>
                        <div className="inline-flex items-center gap-3 border border-white/20 px-6 py-2 rounded-full mb-6">
                            <Layers size={20} className="text-[#007BFF]" />
                            <span className="font-bold uppercase tracking-widest text-sm">Identity & Logos</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold font-['Syne']">Mark of <br/>Excellence</h2>
                     </div>
                     <p className="text-gray-400 max-w-md text-right hidden md:block">
                         Timeless symbols crafted for forward-thinking brands.
                     </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                    {[1,2,3,4,5,6,7,8].map((i) => (
                        <div key={i} className="logo-grid-item aspect-square border border-white/10 relative overflow-hidden group cursor-pointer">
                             {/* Background Image */}
                             <img 
                                 src={`/assets/l${i}.png`} 
                                 alt={`Logo project ${i} - MEMO InfoTech`} 
                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />

                             {/* Content */}
                             <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
                                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                     <ArrowUpRight className="text-white" size={24} />
                                  </div>
                                  <h3 className="text-xl md:text-2xl font-bold font-['Syne'] text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Brand {i}</h3>
                                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Identity System</p>
                             </div>
                             
                             {/* Border Glow */}
                             <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#007BFF]/30 transition-colors duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* SECTION 4: GRAPHIC DESIGN (Masonry) */}
        <div className="graphic-section py-32 bg-white">
             <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                     <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full mb-6">
                         <PenTool size={20} className="text-[#007BFF]" />
                         <span className="font-bold uppercase tracking-widest text-sm text-black">Graphic Art</span>
                     </div>
                     <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] text-black leading-none">Visual <span className="text-[#007BFF]">Noise</span></h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="graphic-item break-inside-avoid relative group cursor-pointer">
                            <img src="/assets/image.svg" className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 grayscale hover:grayscale-0" alt="Graphic Art" />
                            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <span className="font-bold text-black">Art Piece #{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        <div className="py-20 bg-[#007BFF] text-center">
             <h2 className="text-4xl font-bold text-white font-['Syne'] mb-8">Ready to start your project?</h2>
             <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all shadow-2xl">
                 Get a Quote
             </button>
        </div>

    </div>
  );
};

export default Projects;