import React, { useEffect, useRef, useState } from 'react';
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
    highlights: ["Real Projects", "Job Assistance", "Lifetime Access"]
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
    highlights: ["Component Patterns", "Performance", "Portfolio Projects"]
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
    highlights: ["Hands-on Labs", "Dashboards", "Career Guidance"]
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
    highlights: ["ETL Practice", "BI Tools", "Use-case Workshops"]
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
    highlights: ["Portfolio Project", "Design Tools", "Mentor Reviews"]
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
    highlights: ["Hands-on Labs", "Problem Solving", "Certificate"]
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
    highlights: ["Query Practice", "Interview Prep", "Real Datasets"]
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
    highlights: ["Responsive Design", "CSS Techniques", "Design Systems"]
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
    highlights: ["Software Hands-on", "Inventory Workflows", "Business Use-cases"]
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
    highlights: ["Tool Training", "Branding", "Portfolio"]
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
    highlights: ["Animation Techniques", "Project Reel", "Software Included"]
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
  

  const handleEnrollClick = (courseName: string) => {
    setFormData({ ...formData, course: courseName });
    enrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Academy — MEMO InfoTech';
    const desc = 'Learn web development, design, and digital skills from industry experts. Enroll in professional courses and advance your career.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else {
      meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = desc;
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);
    setIsClientSide(true);
  }, []);

  // Inject Course JSON-LD for all courses on this page (improves search visibility for course rich results)
  useEffect(() => {
    try {
      const origin = window.location.origin || 'https://www.memoinfotech.com';
      const courseLd = courses.map(c => ({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: c.title,
        description: c.description,
        provider: {
          '@type': 'Organization',
          name: 'MEMO InfoTech',
          sameAs: origin
        },
        url: `${origin}/academy#course-${c.id}`
      }));

      let s = document.getElementById('ld-courses') as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement('script');
        s.type = 'application/ld+json';
        s.id = 'ld-courses';
        document.head.appendChild(s);
      }
      s.text = JSON.stringify(courseLd);
    } catch (err) {
      // fail silently in non-browser environments
      console.warn('Could not inject course JSON-LD', err);
    }
  }, []);

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

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPw6ehwECGlSxJgtdtqBokzgkaDfeAZQ8Hxo611d0O9gpnGtkbp2I2KOj2DcEH5Mnoow/exec";

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
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget as HTMLFormElement),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', course: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
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

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form
      });
      if (response.ok) {
        setReviewStatus('success');
        setTimeout(() => setReviewStatus('idle'), 4000);
      } else {
        setReviewStatus('error');
        setTimeout(() => setReviewStatus('idle'), 4000);
      }
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
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-black to-[#000000] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-[4rem] font-bold font-['Syne'] mb-6 leading-tight">
              Level Up Your <span className="text-[#007BFF]">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Learn from industry experts and master in-demand skills. Our comprehensive courses are designed to accelerate your career growth.
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
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === cat
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
                <div
                  key={idx}
                  className="group rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[#007BFF] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Course Image */}
                  <div className="h-56 overflow-hidden bg-gray-200 relative">
                    <img
                      src={course.image}
                      alt={course.title}
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
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleEnrollClick(course.title)}
                        className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-bold hover:bg-blue-700 transition-all"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
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
            Why Choose Our <span className="text-[#007BFF]">Academy</span>
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

      {/* TESTIMONIALS */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-[4rem] font-bold font-['Syne'] mb-4 text-center">
            Student <span className="text-[#007BFF]">Success Stories</span>
          </h2>
          <p className="text-center text-gray-400 text-xl mb-16">
            Hear from our graduates and their career transformations
          </p>

          {/* Write a review form */}
          <div className="max-w-3xl mx-auto mb-12">
            <form onSubmit={handleReviewSubmit} className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={reviewForm.name}
                  onChange={handleReviewChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-full bg-black/40 border border-white/10 text-white placeholder-gray-300"
                />
                <select
                  name="course"
                  value={reviewForm.course}
                  onChange={handleReviewChange}
                  required
                  className="w-full px-4 py-3 rounded-full bg-black/40 border border-white/10 text-white"
                >
                  <option value="">Select course</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <select
                    name="rating"
                    value={reviewForm.rating}
                    onChange={handleReviewChange}
                    className="w-full px-4 py-3 rounded-full bg-black/40 border border-white/10 text-white"
                  >
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Very Good</option>
                    <option value="3">3 - Good</option>
                    <option value="2">2 - Fair</option>
                    <option value="1">1 - Poor</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  name="text"
                  value={reviewForm.text}
                  onChange={handleReviewChange}
                  rows={3}
                  required
                  placeholder="Write your review..."
                  className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-300 resize-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Upload an image (optional, max 100 KB)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm file:bg-[#007BFF] file:text-white file:px-4 file:py-2 file:rounded-full"
                />
                {reviewImageError && <div className="text-sm text-red-400 mt-2">{reviewImageError}</div>}
                {reviewForm.imageData && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-300 mb-2">Preview:</p>
                    <img src={reviewForm.imageData} alt="preview" className="w-24 h-24 object-cover rounded-md border border-white/10" />
                  </div>
                )}
              </div>

              {reviewStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-700/20 rounded-md text-green-200">Thanks — your review was submitted.</div>
              )}
              {reviewStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-700/20 rounded-md text-red-200">Unable to submit review. Try again later.</div>
              )}

              <div className="text-right">
                <button
                  type="submit"
                  disabled={reviewStatus === 'submitting'}
                  className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-semibold disabled:opacity-50"
                >
                  {reviewStatus === 'submitting' ? 'Submitting...' : 'Write a review'}
                </button>
              </div>
            </form>
          </div>

          {/* CSS marquee container - duplicates content for seamless loop */}
          <div className="overflow-hidden -mx-2 md:-mx-6">
            <style>{`
              .marquee-track { display: inline-flex; gap: 1.5rem; padding: 1rem 0; align-items: stretch; animation: marquee 20s linear infinite; }
              @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
              .marquee-container:hover .marquee-track, .marquee-track:hover { animation-play-state: paused; }
            `}</style>
            <div className="marquee-container">
              <div className="marquee-track">
                {(testimonialsState.concat(testimonialsState)).map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="min-w-[220px] md:min-w-[260px] max-w-[400px] flex-shrink-0 p-8 bg-white/10 border border-white/20 rounded-2xl hover:border-[#007BFF]/50 transition-all"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#007BFF]">
                        <img src={testimonial.image} className="w-full h-full object-cover" alt={testimonial.name} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.course ? `Course: ${testimonial.course}` : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on our limited-time offer. Enroll in any course today and get 20% off!
          </p>
          <a
            href="#enroll"
            className="inline-block px-10 py-4 bg-white text-[#007BFF] rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Academy;
