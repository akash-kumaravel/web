import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft, UploadCloud, Loader2, CheckCircle, AlertCircle, Send, Link as LinkIcon } from 'lucide-react';

const Apply: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const positionParam = searchParams.get('position') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: positionParam,
    portfolio: '',
    coverLetter: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3VFvRPhyO1nftU3yiexcbnFe6UJBCUd5AJyOrSB0pONxG_RIJ9K4MryGsPXwY4g/exec";

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

    // SEO: set page title & description
    useEffect(() => {
        document.title = 'Apply — Careers at MEMO InfoTech';
        const desc = 'Submit your resume and portfolio to apply for open positions at MEMO InfoTech. Showcase your skills and experience.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const form = new FormData();
    form.append('type', 'application');
    form.append('fullName', formData.fullName);
    form.append('name', formData.fullName); // Fallback for script
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('position', formData.position);
    form.append('portfolio', formData.portfolio);
    form.append('message', formData.coverLetter); // Fallback for script
    form.append('coverLetter', formData.coverLetter);
    
    if (file) {
      form.append('resume', file);
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form
      });
      
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', position: '', portfolio: '', coverLetter: '' });
      setFile(null);
    } catch (error) {
      console.error("Application error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 w-full bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <a href="/careers" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-8 hover:text-[#007BFF] transition-colors">
            <ArrowLeft size={16} /> Back to Careers
        </a>
        
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] mb-6 text-black leading-none">
                Join the <span className="text-[#007BFF]">Team</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Ready to make an impact? Send us your details and let's build something great together.
            </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
            {status === 'success' ? (
                 <div className="flex flex-col items-center text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
                    <p className="text-gray-500 mb-8 max-w-md">
                        Thank you for applying to MEMO InfoTech. Our team will review your application and get back to you shortly.
                    </p>
                    <a href="/" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#007BFF] transition-all">
                        Return Home
                    </a>
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
                                placeholder="user name" 
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
                                placeholder="user@example.com" 
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
                                placeholder="+91 6374433734" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Position Applied For</label>
                            <input 
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                placeholder="e.g. Frontend Developer" 
                                required
                            />
                        </div>
                    </div>

                    {/* Portfolio Link */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xs tracking-wider text-black flex items-center gap-2">
                            Portfolio / Website <LinkIcon size={14} />
                        </label>
                        <input 
                            name="portfolio"
                            type="url"
                            value={formData.portfolio}
                            onChange={handleChange}
                            className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                            placeholder="https://your-portfolio.com" 
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xs tracking-wider text-black">Resume / CV</label>
                        <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-[#007BFF] transition-colors bg-white text-center group">
                            <input 
                                type="file" 
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                                required
                            />
                            <div className="flex flex-col items-center justify-center gap-3">
                                <div className="w-12 h-12 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <UploadCloud size={24} />
                                </div>
                                {file ? (
                                    <div className="text-green-600 font-bold flex items-center gap-2">
                                        <CheckCircle size={16} /> {file.name}
                                    </div>
                                ) : (
                                    <>
                                        <p className="font-bold text-gray-700">Click to upload or drag and drop</p>
                                        <p className="text-sm text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xs tracking-wider text-black">Cover Letter (Optional)</label>
                        <textarea 
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            rows={5} 
                            className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                            placeholder="Tell us why you'd be a great fit..."
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3">
                            <AlertCircle size={20} />
                            <span>Failed to submit application. Please try again.</span>
                        </div>
                    )}

                    <button 
                        disabled={status === 'submitting'}
                        className="w-full bg-[#007BFF] text-white font-bold py-5 rounded-xl text-lg hover:bg-black hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                         {status === 'submitting' ? (
                                <>Submitting... <Loader2 size={20} className="animate-spin" /></>
                            ) : (
                                <>Submit Application <Send size={20} /></>
                            )}
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default Apply;