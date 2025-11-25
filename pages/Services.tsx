import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Code, Database, Globe, Smartphone, Server, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "01",
        title: "Custom Software",
        description: "We engineer robust, scalable custom software solutions tailored to your unique business processes. From ERPs to CRMs, we build the digital backbone of your enterprise.",
        features: ["Enterprise Software (ERP)", "Custom CRM Solutions", "SaaS Development", "Legacy System Migration", "Cloud Architecture"],
        color: "bg-black",
        textColor: "text-white"
    },
    {
        id: "02",
        title: "Website Design",
        description: "Websites should be destinations. We specialize in high-performance Website Development in Nagercoil using React, Next.js, and WebGL to create digital flagship stores that captivate and convert.",
        features: ["Responsive Web Design", "E-commerce Platforms", "CMS Development", "Interactive 3D Elements", "SEO Optimization"],
        color: "bg-[#007BFF]",
        textColor: "text-white"
    },
    {
        id: "03",
        title: "Mobile App Dev",
        description: "Solving complex problems with elegant interfaces. We design scalable product ecosystems and mobile apps that users love to engage with daily.",
        features: ["iOS & Android Apps", "Cross-Platform (Flutter)", "App Store Deployment", "User Experience (UX)", "API Integration"],
        color: "bg-white",
        textColor: "text-black"
    },
    {
        id: "04",
        title: "Digital Branding",
        description: "Static is dead. We bring stories to life through high-end Motion Posters, Explainer Videos, and 3D animation that drives action for your brand.",
        features: ["Motion Posters", "Explainer Videos", "3D Animation", "Logo Design", "Social Content Strategy"],
        color: "bg-[#111]",
        textColor: "text-white"
    }
];

const technologies = [
    "React", "Node.js", "Python", "TypeScript", "AWS", "Flutter", "Next.js", "Docker", "MongoDB", "PostgreSQL", "GraphQL", "Figma", "Tailwind CSS", "Three.js"
];

const capabilities = [
    { icon: <Code />, title: "Frontend Engineering", desc: "Building pixel-perfect, responsive user interfaces using modern frameworks." },
    { icon: <Server />, title: "Backend Development", desc: "Scalable server-side logic, API development, and database management." },
    { icon: <Database />, title: "Database Design", desc: "Optimized data structures using SQL and NoSQL solutions." },
    { icon: <Smartphone />, title: "Mobile Solutions", desc: "Native and hybrid mobile applications for global reach." },
    { icon: <Globe />, title: "Web Architecture", desc: "High-availability system design for heavy traffic loads." },
    { icon: <Shield />, title: "Security & DevOps", desc: "Automated deployment pipelines and fortified security protocols." }
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && containerRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        
        const cards = gsap.utils.toArray(".service-card");
        cards.forEach((card: any, i: number) => {
            gsap.to(card, {
                scale: 0.98, // Slight scale effect
                scrollTrigger: {
                    trigger: card,
                    start: "top 15%",
                    end: "bottom top",
                    scrub: true,
                }
            });
        });

        // Stagger for capabilities
        gsap.from(".cap-item", {
            y: 50,
            // opacity: 0, // Removed to ensure visibility
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".capabilities-grid",
                start: "top 80%"
            }
        });
    }
  }, []);

  return (
        <div ref={containerRef} className="w-full bg-gray-100">
                {/* Header - Projects style */}
                <div className="pt-40 pb-20 container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black tracking-tighter">
                        SERVICES <br/>
                        <span className="text-white bg-[#007BFF] px-6 transform -skew-x-12 inline-block">OFFERED</span>
                    </h1>
                    <p className="mt-10 text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        We offer a holistic suite of digital services in Nagercoil. From custom software to immersive websites, we handle it all with precision.
                    </p>
                </div>

        {/* Tech Stack Marquee removed as requested */}

        {/* Stacking Cards Section */}
        <div className="pb-40 px-4 md:px-10 relative">
             {services.map((service, index) => (
                 <div 
                    key={index} 
                    className={`service-card sticky min-h-[70vh] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-10 shadow-2xl mb-10 overflow-hidden border border-black/5 ${service.color} ${service.textColor}`}
                    style={{ top: `${5 + index * 2}rem` }}
                 >
                     {/* Content */}
                     <div className="md:w-1/2 flex flex-col justify-center relative z-10">
                         <span className="text-5xl md:text-[5rem] font-bold font-['Syne'] opacity-20 mb-6">{service.id}</span>
                         <h2 className="text-4xl md:text-6xl font-bold font-['Syne'] mb-8 leading-tight">
                             {service.title}
                         </h2>
                         <p className={`text-xl mb-12 leading-relaxed ${service.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                             {service.description}
                         </p>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                             {service.features.map((feat, idx) => (
                                 <div key={idx} className="flex items-center gap-3">
                                     <CheckCircle2 size={20} className={service.textColor === 'text-white' ? 'text-[#007BFF]' : 'text-black'} />
                                     <span className="font-bold text-lg">{feat}</span>
                                 </div>
                             ))}
                         </div>

                         <Link to="/contact" className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all w-fit
                            ${service.textColor === 'text-white' 
                                ? 'bg-white text-black hover:bg-[#007BFF] hover:text-white' 
                                : 'bg-black text-white hover:bg-[#007BFF]'}
                         `}>
                             Start a Project <ArrowRight size={20} />
                         </Link>
                     </div>

                     {/* Image / Visual */}
                    <div className="md:w-1/2 relative h-[300px] md:h-auto rounded-[2rem] overflow-hidden group">
                         <img src={`/assets/s${index + 1}.png`} alt={`${service.title} service showcase`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         {/* Overlay Texture */}
                         <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-black to-transparent pointer-events-none"></div>
                     </div>
                 </div>
             ))}
        </div>

        {/* Detailed Capabilities Grid */}
        <div className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <p className="text-[#007BFF] font-bold tracking-widest uppercase mb-4">Engineering Excellence</p>
                    <h2 className="text-4xl md:text-[4rem] font-bold font-['Syne'] text-black leading-none">Detailed <br/>Capabilities</h2>
                </div>
                <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="cap-item p-10 bg-gray-50 rounded-[2rem] hover:bg-black hover:text-white transition-all duration-300 group border border-gray-100 hover:border-black">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#007BFF] mb-6 shadow-sm group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
                                {cap.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-['Syne']">{cap.title}</h3>
                            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        {/* Process Strip */}
        <div className="py-32 bg-black text-white text-center">
             <div className="container mx-auto px-6">
                 <h2 className="text-4xl font-bold font-['Syne'] mb-16">How We Work</h2>
                 <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                     {/* Connecting Line */}
                     <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>
                     
                     {['Discovery', 'Strategy', 'Design', 'Development', 'Launch'].map((step, i) => (
                         <div key={i} className="bg-black border border-gray-700 p-8 rounded-2xl w-full md:w-60 z-10 hover:border-[#007BFF] transition-colors">
                             <div className="w-10 h-10 bg-[#007BFF] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 shadow-[0_0_15px_#007BFF]">
                                 {i + 1}
                             </div>
                             <h3 className="font-bold text-xl">{step}</h3>
                         </div>
                     ))}
                 </div>
             </div>
        </div>

    </div>
  );
};

export default Services;