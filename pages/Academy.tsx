import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { BookOpen, Users, Award, Clock, ArrowRight, Star, Zap, Code, PenTool, Video, CheckCircle, AlertCircle, Loader2, Search, Filter } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    level: "Advanced",
    duration: "12 weeks",
    price: "$699",
    students: 1800,
    rating: 4.9,
    description: "Learn front-end and back-end web development (React, Node.js, databases) and deploy production-ready applications.",
    image: "/assets/full stack.png",
    highlights: ["Real Projects", "Job Assistance", "Lifetime Access"],
    url: "/academy/full-stack-web-development"
  },
  {
    id: 2,
    title: "Frontend Web Development",
    category: "Web Development",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$399",
    students: 1200,
    rating: 4.8,
    description: "Master HTML, CSS, JavaScript, and modern frameworks to build fast, responsive user interfaces.",
    image: "/assets/frontend.png",
    highlights: ["Component Patterns", "Performance", "Portfolio Projects"],
    url: "/academy/frontend-web-development"
  },
  {
    id: 3,
    title: "Data Analytics",
    category: "Data",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$499",
    students: 950,
    rating: 4.7,
    description: "Analyze data, build dashboards, and derive insights using Python, pandas, and visualization tools.",
    image: "/assets/data analytics.png",
    highlights: ["Hands-on Labs", "Dashboards", "Career Guidance"],
    url: "/academy/data-analytics"
  },
  {
    id: 4,
    title: "Business Intelligence",
    category: "Business",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$449",
    students: 700,
    rating: 4.6,
    description: "Learn BI tools, ETL concepts, reporting, and how to turn data into strategic business decisions.",
    image: "/assets/Business intelligence.png",
    highlights: ["ETL Practice", "BI Tools", "Use-case Workshops"],
    url: "/academy/business-intelligence"
  },
  {
    id: 5,
    title: "UI/UX Design Master Course",
    category: "Design",
    level: "Beginner",
    duration: "8 weeks",
    price: "$399",
    students: 1100,
    rating: 4.8,
    description: "Design user-centered interfaces, wireframing, prototyping and building a strong design portfolio.",
    image: "/assets/UI UX.png",
    highlights: ["Portfolio Project", "Design Tools", "Mentor Reviews"],
    url: "/academy/ui-ux-design-master"
  },
  {
    id: 6,
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    price: "$299",
    students: 1500,
    rating: 4.9,
    description: "Start with Python fundamentals and move to data handling, scripting, and building small applications.",
    image: "/assets/Python.png",
    highlights: ["Hands-on Labs", "Problem Solving", "Certificate"],
    url: "/academy/python-programming"
  },
  {
    id: 7,
    title: "SQL for Data Careers",
    category: "Data",
    level: "Beginner",
    duration: "4 weeks",
    price: "$199",
    students: 1300,
    rating: 4.7,
    description: "Learn SQL querying, joins, aggregations and best practices for analytics and data engineering roles.",
    image: "/assets/sql.png",
    highlights: ["Query Practice", "Interview Prep", "Real Datasets"],
    url: "/academy/sql-for-data-careers"
  },
  {
    id: 8,
    title: "Web Designing",
    category: "Design",
    level: "Beginner",
    duration: "6 weeks",
    price: "$249",
    students: 900,
    rating: 4.6,
    description: "Learn visual design for the web, responsive layouts, and modern CSS techniques for beautiful sites.",
    image: "/assets/web design.png",
    highlights: ["Responsive Design", "CSS Techniques", "Design Systems"],
    url: "/academy/web-designing"
  },
  {
    id: 9,
    title: "MERN STACK",
    category: "Business",
    level: "Intermediate",
    duration: "3 weeks",
    price: "$179",
    students: 420,
    rating: 4.5,
    description: "Training on MERN Stack software for inventory management, stock control and reporting for businesses.",
    image: "/assets/MERN.png",
    highlights: ["Software Hands-on", "Inventory Workflows", "Business Use-cases"],
    url: "/academy/mern-stack"
  },
  {
    id: 10,
    title: "Graphic Design",
    category: "Design",
    level: "Beginner",
    duration: "6 weeks",
    price: "$299",
    students: 980,
    rating: 4.7,
    description: "Learn fundamentals of graphic design, typography, color theory and industry tools to create impactful visuals.",
    image: "/assets/Graphic.png",
    highlights: ["Tool Training", "Branding", "Portfolio"],
    url: "/academy/graphic-design"
  },
  {
    id: 11,
    title: "Motion Design & Animation Course",
    category: "Creative",
    level: "Intermediate",
    duration: "10 weeks",
    price: "$549",
    students: 600,
    rating: 4.7,
    description: "Create motion graphics and animations for video, web and interactive media using industry-standard tools.",
    image: "/assets/Motion design.png",
    highlights: ["Animation Techniques", "Project Reel", "Software Included"],
    url: "/academy/motion-design-animation"
  }
];

const initialTestimonials = [
  {
    name: "Sarah Chen",
    course: "Frontend Web Development",
    text: "The Academy courses transformed my career. I went from junior to senior developer in 6 months.",
    image: "/assets/t1.png",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    course: "UI/UX Design Master Course",
    text: "Excellent instructors and real-world projects. This is exactly what I needed to level up.",
    image: "/assets/t2.png",
    rating: 5
  },
  {
    name: "Priya Patel",
    course: "Full Stack Web Development",
    text: "Outstanding community support and mentorship. Highly recommended for career changers.",
    image: "/assets/t3.png",
    rating: 5
  }
];

const Academy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const enrollRef = useRef<HTMLDivElement>(null);

  const [testimonialsState, setTestimonialsState] = useState<typeof initialTestimonials>(initialTestimonials);
  const [isClientSide, setIsClientSide] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', course: '', rating: '5', text: '', imageData: '', imageName: '' });
  const [reviewImageError, setReviewImageError] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // SEO Configuration
  const seoConfig = {
    title: 'IT Training Institute & Internship Programs in Nagercoil | Memo Infotech Academy',
    description: 'Memo Infotech Academy is a professional IT training institute in Nagercoil offering practical training programs, certification courses, internship opportunities and job placement assistance. Learn web development, software development, data analytics, design and more.',
    keywords: 'Memo Infotech Academy, IT training institute in Nagercoil, software training institute Nagercoil, internship training Nagercoil, coding courses Tamil Nadu, software internship programs, IT certification courses, coding bootcamp Nagercoil',
    canonical: 'https://www.memoinfotech.com/academy/'
  };

  // Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.memoinfotech.com/' },
      { '@type': 'ListItem', position: 2, name: 'Academy', item: 'https://www.memoinfotech.com/academy/' }
    ]
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Memo Infotech Academy',
    alternateName: 'Memo Academy',
    url: 'https://www.memoinfotech.com/academy/',
    logo: 'https://www.memoinfotech.com/assets/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagercoil',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Nagercoil, Tamil Nadu, India'
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Memo Infotech',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nagercoil',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN'
      }
    },
    telephone: '+91 6374433734',
    email: 'hello@memoinfotech.com'
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, index) => ({
      '@type': 'Course',
      position: index + 1,
      name: c.title,
      description: c.description,
      provider: {
        '@type': 'Organization',
        name: 'Memo Infotech',
        image: "/assets/Website Development.png"
      },
      url: `https://www.memoinfotech.com${c.url}`
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is Memo Infotech Academy an IT training institute in Nagercoil?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Memo Infotech Academy is a professional IT training institute in Nagercoil offering software courses, certification programs, and internship opportunities for students and fresh graduates.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What internship programs does Memo Infotech Academy offer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We provide internship training programs in web development, software development, data analytics, and other IT fields. Our internship programs in Nagercoil are designed with live projects and real-world applications.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you offer placement assistance for IT students?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, we offer comprehensive placement and career support including resume guidance, interview preparation, mock interviews, and direct connections with partner companies hiring IT professionals.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the duration of your IT training courses?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our courses range from 4 to 12 weeks depending on the program level and complexity. We offer flexible schedules to accommodate working professionals and full-time students.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I take courses if I have no programming experience?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely! We offer beginner-level courses in Python, web development, and other areas. Our instructors guide you from basics to advanced concepts with hands-on projects.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you provide certificates after course completion?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, all our students receive recognized certificates upon successful completion. These certificates are valued by employers and enhance your resume significantly.'
        }
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsClientSide(true);
  }, []);

  const handleEnrollClick = (courseName: string) => {
    setFormData({ ...formData, course: courseName });
    enrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load testimonials from localStorage on client side only
  useEffect(() => {
    if (isClientSide) {
      try {
        const raw = localStorage.getItem('academy_testimonials');
        if (raw) {
          const parsed = JSON.parse(raw);
          const normalized = parsed.map((t: any) => ({
            ...t,
            course: t.course || t.role || t.company || ''
          }));
          setTestimonialsState(normalized);
        }
      } catch (err) {
        console.error('Failed to load testimonials from localStorage:', err);
        // Keep initial testimonials if there's an error
      }
    }
  }, [isClientSide]);

  const categories = ["All", "Web Development", "Design", "Data", "Business", "Creative", "Programming"];

  useEffect(() => {
    let filtered = courses;
    if (selectedCategory !== "All") {
      filtered = filtered.filter(c => c.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory]);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTk-Npq9H8Ah0YW6GcU4c8Xic0hOPTOW9KvZadLwKNPnr50u39qTyYZ3g79NnVyMx0/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 100 * 1024) {
      setReviewImageError('Image must be 100 KB or smaller');
      setReviewForm({ ...reviewForm, imageData: '', imageName: '' });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setReviewForm(prev => ({ ...prev, imageData: String(reader.result), imageName: file.name }));
      setReviewImageError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const form = new FormData(e.currentTarget as HTMLFormElement);
    form.append('type', 'contact');
    form.append('name', formData.fullName);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', course: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewStatus('submitting');
    const newTestimonial = {
      name: reviewForm.name || 'Anonymous',
      course: reviewForm.course || '',
      role: reviewForm.course || 'Student',
      company: '',
      text: reviewForm.text || '',
      image: reviewForm.imageData && reviewForm.imageData.length > 0 ? reviewForm.imageData : '/assets/t4.png',
      rating: Number(reviewForm.rating) || 5
    };

    if (reviewImageError) {
      setReviewStatus('error');
      setTimeout(() => setReviewStatus('idle'), 3000);
      return;
    }

    // Optimistic UI update
    setTestimonialsState(prev => [newTestimonial, ...prev]);
    setReviewForm({ name: '', course: '', rating: '5', text: '', imageData: '', imageName: '' });

    try {
      const form = new FormData();
      form.append('type', 'testimonial');
      form.append('name', newTestimonial.name);
      form.append('course', newTestimonial.course);
      form.append('text', newTestimonial.text);
      form.append('rating', String(newTestimonial.rating));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });
      setReviewStatus('success');
      setTimeout(() => setReviewStatus('idle'), 4000);
    } catch (err) {
      setReviewStatus('error');
      setTimeout(() => setReviewStatus('idle'), 4000);
    }
  };

  // Persist testimonials to localStorage so reviews survive refresh
  useEffect(() => {
    if (isClientSide) {
      try {
        localStorage.setItem('academy_testimonials', JSON.stringify(testimonialsState));
      } catch (err) {
        console.error('Failed to save testimonials to localStorage:', err);
        // ignore storage errors
      }
    }
  }, [testimonialsState, isClientSide]);

  // Testimonials use a CSS marquee animation now (no JS scrolling)

  return (
    <div className="w-full bg-white">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        schemas={[breadcrumbSchema, orgSchema, courseSchema, faqSchema]}
      />
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-black to-[#000000] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-[4rem] font-bold font-['Syne'] mb-6 leading-tight">
              IT Training Institute & Internship Programs in Nagercoil
            </h1>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto">
              Memo Infotech Academy is a professional IT training institute in Nagercoil offering practical training programs, certification courses, and real-time internship opportunities for students and fresh graduates. We focus on industry-relevant skills to help learners build successful careers in IT and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#courses" className="px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Explore Courses <ArrowRight size={20} />
              </a>
              <a
                href="#enroll"
                onClick={(e) => {
                  e.preventDefault();
                  enrollRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1"
              >
                Start Learning
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: Users, label: "Active Students", value: "80+" },
              { icon: BookOpen, label: "Expert Courses", value: "10+" },
              { icon: Award, label: "Success Rate", value: "94%" },
              { icon: Star, label: "Avg Rating", value: "4.9/5" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:border-[#007BFF]/50 transition-all">
                <stat.icon size={40} className="mx-auto mb-4 text-[#007BFF]" />
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL ENTITY - ACADEMY LOCATION */}
      <section aria-label="Academy Location" className="py-12 bg-black text-center">
        <div className="container mx-auto px-6">
          <p className="max-w-4xl mx-auto text-gray-300 text-lg">
            <strong className="text-white">Memo Infotech Academy</strong> is a leading <strong className="text-white">IT training institute in Nagercoil, Tamil Nadu</strong>, offering industry-focused courses, internship programs, and career guidance for students across Kanyakumari district and surrounding regions.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="py-16 bg-[#f8f8f8] border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#007BFF] transition-colors text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === cat
                    ? 'bg-[#007BFF] text-white shadow-lg'
                    : 'bg-white text-black border-2 border-gray-200 hover:border-[#007BFF]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section id="courses" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] text-black mb-4">IT Courses & Training Programs in Nagercoil</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-focused training programs with hands-on projects and certification
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] text-black mb-4">
              <span className="text-[#007BFF]">Courses</span>
            </h2>
            <p className="text-xl text-gray-600">
              {filteredCourses.length} courses available
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => (
                <Link
                  to={course.url}
                  key={idx}
                  className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block"
                >
                  {/* Course Image */}
                  <div className="h-56 overflow-hidden bg-gray-200 relative">
                    <img
                      src={course.image}
                      alt={`${course.title} training course at Memo Infotech Academy`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* level badge removed per request */}
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#007BFF] bg-blue-50 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {course.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-[#007BFF]" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3">
                      <Link to={course.url} className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-bold hover:bg-blue-700 transition-all inline-block cursor-pointer">
                        View Course
                      </Link>
                      <button onClick={() => handleEnrollClick(course.title)} className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-[#007BFF] transition-all inline-block cursor-pointer">
                        Enroll
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] text-black mb-16 text-center">
            Why Choose Our IT <span className="text-[#007BFF]">Training Institute</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Industry Experts",
                desc: "Learn from professionals with 10+ years of experience in their fields."
              },
              {
                icon: Zap,
                title: "Practical Projects",
                desc: "Build real-world projects that you can showcase in your portfolio."
              },
              {
                icon: Video,
                title: "Lifetime Access",
                desc: "Access course materials forever with continuous updates and new content."
              },
              {
                icon: Users,
                title: "Community Support",
                desc: "Join our thriving community for networking and peer learning opportunities."
              },
              {
                icon: Award,
                title: "Certificates",
                desc: "Earn recognized certificates upon completion to boost your resume."
              },
              {
                icon: ArrowRight,
                title: "Career Support",
                desc: "Get job assistance, interview prep, and exclusive employer connections."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007BFF] hover:shadow-xl transition-all group cursor-default"
              >
                <div className="p-4 bg-blue-50 rounded-xl w-fit mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                  <feature.icon size={32} className="text-[#007BFF] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#007BFF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP PROGRAMS & LIVE PROJECTS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6 text-center">
            Internship Programs in Nagercoil with Live Projects
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Gain hands-on experience through our internship training programs and real-time project work. Our software internship programs in Nagercoil are designed to bridge the gap between classroom learning and industry requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development Internship",
                desc: "Build real websites and applications using React, Node.js, and modern frameworks",
                duration: "8-12 weeks"
              },
              {
                title: "Software Development Internship",
                desc: "Work on custom software projects with mentorship from experienced developers",
                duration: "10-14 weeks"
              },
              {
                title: "Data Analytics Internship",
                desc: "Analyze real business data and create actionable insights using Python and BI tools",
                duration: "8-10 weeks"
              }
            ].map((program, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 hover:border-[#007BFF] hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.desc}</p>
                <p className="text-sm font-semibold text-[#007BFF]">Duration: {program.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT & CAREER SUPPORT */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-['Syne'] text-black mb-6 text-center">
            Placement & Career Support for IT Students
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We help our graduates land their dream jobs with dedicated placement assistance, interview preparation, and connections with top companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: CheckCircle, label: "Interview Preparation", desc: "Mock interviews and technical question coaching" },
              { icon: Award, label: "Resume Building", desc: "Professional resume creation and portfolio review" },
              { icon: Users, label: "Company Connections", desc: "Direct access to job openings from partner companies" },
              { icon: ArrowRight, label: "Career Guidance", desc: "One-on-one mentoring for career planning" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl flex gap-6 items-start border border-gray-200 hover:border-[#007BFF] hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-50 rounded-xl flex-shrink-0">
                  <item.icon className="text-[#007BFF]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.label}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - HIGH SEO VALUE */}
      <FAQ
        title="Frequently Asked"
        highlight="Questions"
        faqs={[
          {
            q: 'Is Memo Infotech Academy an IT training institute in Nagercoil?',
            a: 'Yes, Memo Infotech Academy is a professional IT training institute in Nagercoil offering software courses, certification programs, and internship opportunities for students and fresh graduates.'
          },
          {
            q: 'What internship programs does Memo Infotech Academy offer?',
            a: 'We provide internship training programs in web development, software development, data analytics, and other IT fields. Our internship programs in Nagercoil are designed with live projects and real-world applications.'
          },
          {
            q: 'Do you offer placement assistance for IT students?',
            a: 'Yes, we offer comprehensive placement and career support including resume guidance, interview preparation, mock interviews, and direct connections with partner companies hiring IT professionals.'
          },
          {
            q: 'What is the duration of your IT training courses?',
            a: 'Our courses range from 4 to 12 weeks depending on the program level and complexity. We offer flexible schedules to accommodate working professionals and full-time students.'
          },
          {
            q: 'Can I take courses if I have no programming experience?',
            a: 'Absolutely! We offer beginner-level courses in Python, web development, and other areas. Our instructors guide you from basics to advanced concepts with hands-on projects.'
          },
          {
            q: 'Do you provide certificates after course completion?',
            a: 'Yes, all our students receive recognized certificates upon successful completion. These certificates are valued by employers and enhance your resume significantly.'
          }
        ]}
      />

      {/* ENROLLMENT SECTION */}
      <section id="enroll" ref={enrollRef} className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] text-black mb-6 text-center">
              Start Your <span className="text-[#007BFF]">Journey Today</span>
            </h2>
            <p className="text-center text-gray-600 text-xl mb-12">
              Fill out the form below and our team will reach out to help you choose the perfect course.
            </p>

            <form onSubmit={handleSubmit} className="bg-[#f8f8f8] p-10 rounded-[2rem] border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-black font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#007BFF] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-black font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#007BFF] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-black font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#007BFF] transition-colors"
                    placeholder="+91 6374433734"
                  />
                </div>
                <div>
                  <label className="block text-black font-bold mb-2">Select Course *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#007BFF] transition-colors"
                  >
                    <option value="">Choose a course</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-black font-bold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#007BFF] transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Application submitted successfully! We'll contact you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
                  <AlertCircle size={20} />
                  <span className="font-semibold">Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-4 bg-[#007BFF] text-white rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enrolling...
                  </>
                ) : (
                  <>
                    Enroll Now <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
