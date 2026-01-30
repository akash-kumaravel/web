import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Code, Database, Globe, Smartphone, Server, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateSEO } from '../utils/seo';

const serviceRoutes: { [key: number]: string } = {
  0: '/services/web-design-development',
  1: '/services/ui-ux-design',
  2: '/services/mobile-app-development',
  3: '/services/software-development',
  4: '/services/graphic-design-services',
  5: '/services/digital-marketing-services',
  6: '/services/e-commerce-solutions',
  7: '/services/hosting-cloud-it',
  8: '/services/ai-automation',
  9: '/services/testing-qa',
  10: '/services/training-consulting',
  11: '/services/content-documentation'
};

const services = [
    {
        id: "01",
        title: "Web Design & Web Development",
        description: "We create stunning, high-performance websites that captivate and convert. From static landing pages to dynamic web applications using React, Next.js, and WebGL.",
        features: ["Static & Dynamic Websites", "Business/Corporate Sites", "Portfolio Websites", "E-commerce Websites", "Landing Pages", "Website Redesign", "Website Maintenance & Support"],
        color: "bg-black",
        textColor: "text-white"
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "Crafting beautiful, intuitive digital experiences. We design pixel-perfect interfaces that users love and drive engagement across all platforms.",
        features: ["User Experience Design", "User Interface Design", "Prototyping & Wireframing", "Design Systems", "Accessibility Design", "Responsive Design", "Interactive Prototypes"],
        color: "bg-[#007BFF]",
        textColor: "text-white"
    },
    {
        id: "03",
        title: "Mobile App Development",
        description: "Building powerful mobile solutions that engage users. We develop native iOS and Android apps, plus cross-platform solutions that work seamlessly everywhere.",
        features: ["Android App Development", "iOS App Development", "Cross-Platform Apps", "Mobile App UI/UX Design", "App Testing", "App Maintenance & Updates"],
        color: "bg-white",
        textColor: "text-black"
    },
    {
        id: "04",
        title: "Software Development",
        description: "Robust, scalable custom software solutions tailored to your business. From ERPs to SaaS platforms, we engineer the digital backbone of your enterprise.",
        features: ["Custom Software Development", "Web Applications", "SaaS Product Development", "ERP/CRM Systems", "HRMS/LMS Solutions", "API Development & Integration"],
        color: "bg-black",
        textColor: "text-white"
    },
    {
        id: "05",
        title: "Graphic Design & Creative Services",
        description: "Bringing your brand story to life through compelling visual content. From logos to animations, we create content that resonates with your audience.",
        features: ["Logo Design", "Brand Identity Design", "Graphic Design", "Social Media Creatives", "Posters & Banners", "Motion Posters & Animations", "Video Editing & Thumbnails"],
        color: "bg-[#007BFF]",
        textColor: "text-white"
    },
    {
        id: "06",
        title: "Digital Marketing Services",
        description: "Elevate your online presence with data-driven marketing strategies. We combine SEO, social media, paid campaigns, and content marketing for maximum reach and ROI.",
        features: ["Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Google Ads & Paid Campaigns", "Content Marketing", "Email & WhatsApp Marketing", "Lead Generation Campaigns", "Analytics & Performance Tracking"],
        color: "bg-white",
        textColor: "text-black"
    },
    {
        id: "07",
        title: "E-Commerce Solutions",
        description: "Transform your business with comprehensive e-commerce platforms. We handle everything from store development to payment integration and inventory management.",
        features: ["Online Store Development", "Shopify/WooCommerce Stores", "Payment Gateway Integration", "Product & Order Management", "Inventory Management", "E-commerce Maintenance"],
        color: "bg-black",
        textColor: "text-white"
    },
    {
        id: "08",
        title: "Hosting, Cloud & IT Services",
        description: "Secure, reliable infrastructure for your digital presence. We handle domain registration, hosting, server management, and ensure your systems are always online.",
        features: ["Domain Registration", "Web & Cloud Hosting", "Server Setup & Management", "Website Deployment", "SSL & Security", "Backup & Recovery"],
        color: "bg-[#007BFF]",
        textColor: "text-white"
    },
    {
        id: "09",
        title: "AI, Automation & Advanced Solutions",
        description: "Harness the power of artificial intelligence and automation. We build intelligent systems that streamline operations, improve decision-making, and drive innovation.",
        features: ["AI Chatbots", "Business Process Automation", "AI-Powered Web & App Features", "Data Dashboards & Reports", "Machine Learning Integration", "Predictive Analytics"],
        color: "bg-white",
        textColor: "text-black"
    },
    {
        id: "10",
        title: "Testing & Quality Assurance",
        description: "Ensure excellence with rigorous testing protocols. We identify and eliminate bugs before they reach users, guaranteeing high-quality, reliable software.",
        features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing", "Load Testing", "User Acceptance Testing (UAT)"],
        color: "bg-black",
        textColor: "text-white"
    },
    {
        id: "11",
        title: "Training, Internship & Consulting",
        description: "Build capability and drive transformation through education and expert guidance. We empower teams and businesses with knowledge and strategic consulting.",
        features: ["IT Training Programs", "Student Internships", "Corporate Training", "Digital & Technology Consulting", "Startup Consulting", "Business Strategy Sessions"],
        color: "bg-[#007BFF]",
        textColor: "text-white"
    },
    {
        id: "12",
        title: "Content & Documentation",
        description: "Clear, compelling content that communicates your value. From website copy to technical documentation, we create content that engages and informs.",
        features: ["Website Content Writing", "Technical Documentation", "Product Manuals", "UX & Marketing Copywriting", "Blog Content Creation", "SEO-Optimized Copy"],
        color: "bg-white",
        textColor: "text-black"
    }
];

const technologies = [
    "React", "Node.js", "Python", "TypeScript", "AWS", "Flutter", "Next.js", "Docker", "MongoDB", "PostgreSQL", "GraphQL", "Figma", "Tailwind CSS", "Three.js"
];

    // Map each service (by index) to the corresponding image filename in public/assets
    const serviceImages = [
        'Website Development.png',
        'UI UX Design.png',
        'Mobile APP Development.png',
        'Software Development.png',
        'Graphic Design & Creative Services.png',
        'Digital  Marketing.png',
        'E-Commerce Solutions.png',
        'Hosting, Cloud & IT Services.png',
        'AI, Automation & Advanced Solutions.png',
        'Testing & Quality Assurance.png',
        'Training, Internship & Consulting.png',
        'Content & Documentation.png'
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

    // SEO: set page title & description
    useEffect(() => {
        updateSEO({
            title: 'Services — Web Development, Design, Mobile Apps & More | Memo InfoTech',
            description: 'Custom web development, mobile apps, UI/UX design, branding, graphic design, digital marketing, and motion graphics. Full-stack engineering and creative services focused on performance and conversion.',
            keywords: 'web development services, mobile app development, UI UX design, graphic design, digital marketing, custom software',
            ogTitle: 'Professional Digital Services - Web, Design & Development',
            ogDescription: 'Expert services in web development, design, mobile apps, and digital solutions. Trusted by businesses across India.',
            canonicalUrl: 'https://www.memoinfotech.com/services/'
        });
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
                        We offer a holistic suite of digital services. From custom software to immersive websites, we handle it all with precision.
                    </p>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://Memoinfotech.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://Memoinfotech.com/services" }
                            ]
                    })}} />
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

                         {serviceRoutes[index] ? (
                             <div className="flex flex-col sm:flex-row gap-4">
                                <Link to={serviceRoutes[index]} className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all w-fit
                                   ${service.textColor === 'text-white' 
                                       ? 'bg-white text-black hover:bg-[#007BFF] hover:text-white' 
                                       : 'bg-black text-white hover:bg-[#007BFF]'}
                                `}>
                                    Learn More <ArrowRight size={20} />
                                </Link>
                                <Link to="/contact" className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all w-fit
                                   ${service.textColor === 'text-white' 
                                       ? 'border-2 border-white text-white hover:bg-white hover:text-black' 
                                       : 'border-2 border-black text-black hover:bg-black hover:text-white'}
                                `}>
                                    Start a Project <ArrowRight size={20} />
                                </Link>
                             </div>
                         ) : (
                            <Link to="/contact" className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all w-fit
                                ${service.textColor === 'text-white' 
                                    ? 'bg-white text-black hover:bg-[#007BFF] hover:text-white' 
                                    : 'bg-black text-white hover:bg-[#007BFF]'}
                             `}>
                                 Start a Project <ArrowRight size={20} />
                             </Link>
                         )}
                     </div>

                     {/* Image / Visual */}
                    <div className="md:w-1/2 relative h-[300px] md:h-auto rounded-[2rem] overflow-hidden group">
                         {/* Use mapped filename from assets with SEO-friendly attributes */}
                         <img src={`/assets/${serviceImages[index]}`} alt={`${service.title} — ${service.description}`} loading="lazy" decoding="async" width="1200" height="800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
