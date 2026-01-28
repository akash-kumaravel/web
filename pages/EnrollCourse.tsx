import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { updateSEO, addBreadcrumbSchema } from '../utils/seo';
import { ArrowLeft, Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

const EnrollCourse: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseParam = searchParams.get('course') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: courseParam
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTk-Npq9H8Ah0YW6GcU4c8Xic0hOPTOW9KvZadLwKNPnr50u39qTyYZ3g79NnVyMx0/exec";

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      document.title = 'Enroll in Course — Academy at MEMO InfoTech';
      const desc = 'Enroll in professional courses at MEMO InfoTech Academy. Learn from industry experts and advance your career in tech.';
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) meta.content = desc;
      else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = new FormData();
    form.append('type', 'course-enrollment');
    form.append('fullName', formData.fullName);
    form.append('name', formData.fullName);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('course', formData.course);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', course: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Enrollment error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const courses = [
    'Full Stack Web Development',
    'Frontend Web Development',
    'Data Analytics',
    'Business Intelligence',
    'Python Programming',
    'UI/UX Design Master Course',
    'SQL for Data Careers',
    'Web Designing',
    'MERN Stack',
    'Graphic Design',
    'Motion Design & Animation'
  ];

  return (
    <div className="pt-32 pb-20 w-full bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/academy" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-8 hover:text-[#007BFF] transition-colors" aria-label="Back to Academy">
          <ArrowLeft size={16} /> Back to Academy
        </Link>
        
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] mb-6 text-black leading-none">
                Start Your <span className="text-[#007BFF]">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Take the first step towards advancing your career. Enroll in our professional courses and learn from industry experts.
            </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
            {status === 'success' ? (
                 <div className="flex flex-col items-center text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Enrollment Received!</h2>
                    <p className="text-gray-500 mb-8 max-w-md">
                        Thank you for enrolling in our course. Our team will contact you shortly with details about getting started.
                    </p>
                    <Link to="/academy" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#007BFF] transition-all">
                        Back to Academy
                    </Link>
                 </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Full Name</label>
                            <input 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                placeholder="Your name" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Email Address</label>
                            <input 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                placeholder="your@email.com" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Phone Number</label>
                            <input 
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                placeholder="+91 XXXXXXXXXX" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Course Selection</label>
                            <select 
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                required
                            >
                                <option value="">Select a course</option>
                                {courses.map((course) => (
                                    <option key={course} value={course}>{course}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {status === 'error' && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3">
                            <AlertCircle size={20} />
                            <span>Failed to submit enrollment. Please try again.</span>
                        </div>
                    )}

                    <button 
                        disabled={status === 'submitting'}
                        className="w-full bg-[#007BFF] text-white font-bold py-5 rounded-xl text-lg hover:bg-black hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                         {status === 'submitting' ? (
                                <>Submitting... <Loader2 size={20} className="animate-spin" /></>
                            ) : (
                                <>Enroll Now <Send size={20} /></>
                            )}
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
