import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, ArrowRight, Coffee, Globe, Heart, Zap, Monitor, Users } from 'lucide-react';

const jobs = [
    { id: 1, role: "Senior Product Designer", type: "Full-time", loc: "Remote", dept: "Design" },
    { id: 2, role: "Frontend Engineer (React/WebGL)", type: "Full-time", loc: "Remote", dept: "Engineering" },
    { id: 3, role: "Motion Graphics Artist", type: "Contract", loc: "Remote", dept: "Creative" },
    { id: 4, role: "Project Manager", type: "Full-time", loc: "Remote", dept: "Operations" },
    { id: 5, role: "Brand Strategist", type: "Full-time", loc: "Remote", dept: "Strategy" }
];

const perks = [
    { icon: <Coffee />, title: "Remote First", desc: "Work from anywhere in the world." },
    { icon: <Heart />, title: "Creative Freedom", desc: "Share ideas, explore new concepts, and influence real products." },
    { icon: <Zap />, title: "Real Impact", desc: "Your work will directly shape the company’s products and direction." },
    { icon: <Globe />, title: "Retreats", desc: "Annual global team meetups." },
    { icon: <Monitor />, title: "Education", desc: "$2k annual learning budget." },
    { icon: <Users />, title: "Friendly Team", desc: "Collaborative, supportive, and chill work culture." }
];

const Careers: React.FC = () => {
  const [openJob, setOpenJob] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
             gsap.from(".career-hero-text", {
                 y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"
             });
             
             gsap.from(".perk-card", {
                 y: 50, opacity: 0, duration: 0.6, stagger: 0.1, 
                 scrollTrigger: { trigger: ".perks-grid", start: "top 85%" }
             });
        }, containerRef);
        return () => ctx.revert();
    }
  }, []);

    // SEO: set page title & description
    useEffect(() => {
        document.title = 'Careers — Join MEMO InfoTech';
        const desc = 'Explore open roles for designers, developers, and product specialists. Learn about benefits, culture, and how we work.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, []);

  return (
    <div ref={containerRef} className="w-full bg-white">
        
        {/* Hero Section */}
        <div className="bg-black text-white pt-40 pb-32 rounded-b-[4rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20" 
                  style={{background: `url("/assets/image.svg") center/cover no-repeat`}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <p className="career-hero-text text-[#007BFF] font-bold uppercase tracking-[0.3em] mb-6">We are hiring</p>
                <h1 className="career-hero-text text-5xl md:text-[4rem] font-extrabold font-['Syne'] mb-10 leading-none">
                    JOIN THE <br/><span className="text-transparent stroke-text">COLLECTIVE</span>
                </h1>
                <p className="career-hero-text text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                    We are a team of misfits, dreamers, and creators building the digital future. If you're ready to do the best work of your life, welcome home.
                </p>
                <style>{`.stroke-text { -webkit-text-stroke: 2px white; }`}</style>
            </div>
        </div>

        {/* Values / Perks Section */}
        <div className="py-32 container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-5xl font-bold font-['Syne'] text-black">Why <span className="text-[#007BFF]">MEMO InfoTech?</span></h2>
                <p className="text-gray-500 max-w-md mt-4 md:mt-0">We take care of our people so they can take care of the work.</p>
            </div>
            <div className="perks-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {perks.map((perk, idx) => (
                    <div key={idx} className="perk-card bg-gray-50 p-6 rounded-3xl hover:bg-black hover:text-white transition-colors group cursor-default text-center flex flex-col items-center justify-center gap-4 border border-gray-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#007BFF] shadow-sm group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                            {perk.icon}
                        </div>
                        <h3 className="font-bold text-lg">{perk.title}</h3>
                        <p className="text-xs text-gray-500 group-hover:text-gray-400">{perk.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Open Positions - Accordion Style */}
        <div className="pb-32 container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-bold mb-12 font-['Syne']">Open Positions</h2>
            <div className="space-y-4">
                {jobs.map((job, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 hover:border-black">
                        <div 
                            className={`p-8 flex flex-col md:flex-row justify-between items-center cursor-pointer ${openJob === idx ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'}`}
                            onClick={() => setOpenJob(openJob === idx ? null : idx)}
                        >
                            <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                                <span className={`text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full border ${openJob === idx ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
                                    {job.dept}
                                </span>
                                <h3 className="text-2xl font-bold">{job.role}</h3>
                            </div>
                            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                <span className={`text-sm font-medium ${openJob === idx ? 'text-gray-400' : 'text-gray-500'}`}>{job.loc}</span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${openJob === idx ? 'bg-[#007BFF] rotate-90' : 'bg-gray-100'}`}>
                                    <ArrowRight size={20} className={openJob === idx ? 'text-white' : 'text-black'}/>
                                </div>
                            </div>
                        </div>
                        
                        {/* Expanded Content */}
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openJob === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-8 pt-0 bg-black text-gray-300 border-t border-gray-800">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                                    <div>
                                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">The Role</h4>
                                        <p className="leading-relaxed text-sm">
                                            We are looking for an experienced individual to join our team. 
                                            You will work directly with our creative director and clients to build immersive digital experiences.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Requirements</h4>
                                        <ul className="list-disc list-inside space-y-2 text-sm marker:text-[#007BFF]">
                                            <li>3+ years of relevant agency experience.</li>
                                            <li>Deep understanding of modern web technologies.</li>
                                            <li>Portfolio demonstrating high-end visual design.</li>
                                            <li>Ability to work in a fast-paced environment.</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href={`/apply?position=${encodeURIComponent(job.role)}`} className="block w-full py-4 bg-[#007BFF] text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all text-center">
                                    Apply for this Position
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    </div>
  );
};

export default Careers;
