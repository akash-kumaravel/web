import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { updateSEO, addBreadcrumbSchema } from '../utils/seo';
import { ArrowUpRight, Globe, Smartphone, PenTool, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const webSectionRef = useRef<HTMLDivElement>(null);
  const webContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSEO({
      title: 'Our Projects & Portfolio | Web Design, UI/UX & More | MEMO InfoTech',
      description: 'Explore our portfolio of web design, UI/UX, logo design, and branding projects. See how we deliver digital excellence for businesses across India.',
      keywords: 'web design portfolio, UI UX projects, design showcase, branding work, web development portfolio',
      canonicalUrl: 'https://www.memoinfotech.com/projects/'
    });
    
    addBreadcrumbSchema([
      { name: 'Home', url: 'https://www.memoinfotech.com/' },
      { name: 'Projects', url: 'https://www.memoinfotech.com/projects/' }
    ]);
  }, []);

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

    // SEO: set page title & description
    useEffect(() => {
        document.title = 'Projects — Case Studies & Portfolio';
        const desc = 'Selected case studies: modern web apps, branding, and graphic design. See results, process, and impact across industries.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, []);

  return (
    <div ref={containerRef} className="w-full bg-white overflow-x-hidden">
        
        {/* Header */}
        <div className="pt-40 pb-20 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter">
                SELECTED <br/>
                <span className="text-white bg-[#007BFF] px-6 transform -skew-x-12 inline-block">WORKS</span>
            </h1>
            <p className="mt-10 text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                A curated journey through our digital disciplines. Scroll to explore our expertise in Web, Mobile, Branding, and Art.
            </p>
                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://memoinfotech.com/" },
                                    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://memoinfotech.com/projects" }
                                ]
                        })}} />
                </div>

                {/* SECTION 1: WEB DESIGN (Horizontal Scroll) */}
        <div ref={webContainerRef} className="relative bg-black text-white">
             <div className="absolute top-10 left-10 z-10 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                 <Globe size={20} className="text-[#007BFF]" />
                 <span className="font-bold uppercase tracking-widest text-sm">Web Design</span>
             </div>

             <div ref={webSectionRef} className="flex w-[400%] h-screen">
                 {[
                   { name: "Background Remover", i: 1 },
                   { name: "Hivili", i: 2 },
                   { name: "Cloud Bestie", i: 3 },
                   { name: "AI", i: 4 }
                 ].map((project) => (
                     <div key={project.i} className="web-item w-screen h-screen flex items-center justify-center p-10 md:p-32 border-r border-white/10 relative">
                         <div className="w-full h-full relative group perspective-1000">
                             <div className="absolute inset-0 bg-[#007BFF] rounded-[3rem] transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                             <img src={`/assets/image ${project.i}.png`} className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700" alt={`Selected web project ${project.i} - MEMO InfoTech`} />
                             
                             <div className="absolute bottom-10 left-10 z-20">
                                 <h2 className="text-6xl font-bold font-['Syne'] mb-2">{project.name}</h2>
                                 <p className="text-gray-300 uppercase tracking-widest">Website / 2024</p>
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
        
                           <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 border border-white/20 px-6 py-2 rounded-full mb-6">
                            <Layers size={20} className="text-[#007BFF]" />
                            <span className="font-bold uppercase tracking-widest text-sm">Identity & Logos</span>
                        </div>
             <h2 className="text-5xl md:text-[4rem] font-bold mb-6 font-['Syne'] text-black leading-none">The <span className="text-[#007BFF]">Collective</span></h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Engineers, Designers, and Strategists committed to digital excellence.</p>
          </div>
          
          {/* Horizontal Accordion Container */}
          <div className="flex flex-col md:flex-row min-h-[80vh] md:h-[600px] w-full gap-2">
             {[
               { img: "/assets/f1.png", title: "Mahi's Fashion" },
               { img: "/assets/f2.png", title: "Mahi's Fashion" },
               { img: "/assets/f3.png", title: "CAD Point" },
               { img: "/assets/f4.png", title: "Tech Fives" },
               { img: "/assets/f5.png", title: "Knlox" }
             ].map((item, idx) => (
               <div 
                  key={idx} 
                  className="relative flex-1 overflow-hidden transition-all duration-500 ease-in-out hover:flex-[3] group rounded-3xl cursor-pointer min-h-[200px]"
               >
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Vertical Text (Default) */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                     <h3 className="text-white font-bold text-2xl tracking-widest uppercase transform md:-rotate-90 whitespace-nowrap">{item.title}</h3>
                  </div>

                  {/* Expanded Info (Hover) */}
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Syne']">{item.title}</h3>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

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
                    {[
                      { name: "Blacorng", i: 1 },
                      { name: "Trumph Card", i: 2 },
                      { name: "Coco short", i: 3 },
                      { name: "DP icon", i: 4 },
                      { name: "MD", i: 5 },
                      { name: "Tech Fives", i: 6 }
                    ].map((item) => (
                        <div key={item.i} className="graphic-item break-inside-avoid relative group cursor-pointer">
                            <img src={`/assets/m${item.i}.png`} className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 grayscale hover:grayscale-0" alt={`Graphic Art ${item.i}`} />
                            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <span className="font-bold text-black">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        <div className="py-20 bg-[#007BFF] text-center">
             <h2 className="text-4xl font-bold text-white font-['Syne'] mb-8">Ready to start your project?</h2>
             <Link to="/contact" className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all shadow-2xl" aria-label="Contact MEMO InfoTech">
                 Get a Quote
             </Link>
        </div>

    </div>
  );
};

export default Projects;
