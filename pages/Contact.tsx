import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3VFvRPhyO1nftU3yiexcbnFe6UJBCUd5AJyOrSB0pONxG_RIJ9K4MryGsPXwY4g/exec";

    // SEO: set page title & description
    React.useEffect(() => {
        document.title = 'Contact — MEMO InfoTech';
        const desc = 'Contact MEMO InfoTech for web development, branding, and motion design services. Start your project or inquire about partnerships and careers.';
        let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = desc;
        else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const form = new FormData();
    form.append('type', 'contact');
    form.append('firstName', formData.firstName);
    form.append('lastName', formData.lastName);
    form.append('name', `${formData.firstName} ${formData.lastName}`); // Combined for convenience
    form.append('email', formData.email);
    
    // Combine Subject and Message because the backend script only has a "Message" column
    const combinedMessage = `[Subject: ${formData.subject}]\n\n${formData.message}`;
    form.append('message', combinedMessage);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        // explicitly no JSON headers, fetch handles multipart/form-data boundary automatically
      });
      
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: 'Project Inquiry', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white w-full min-h-screen">
        <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-[4rem] font-bold mb-16 font-['Syne'] text-center text-black leading-none">Get in <span className="text-white bg-[#007BFF] px-4 inline-block transform rotate-2 shadow-[5px_5px_0px_#000]">Touch</span></h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                        <p className="mt-4 font-bold text-[#007BFF]">- CEO, Akash Kumaravel</p>
                     </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-8 text-black">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold uppercase text-xs tracking-wider text-black">First Name</label>
                                <input 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                    placeholder="user" 
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold uppercase text-xs tracking-wider text-black">Last Name</label>
                                <input 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                    placeholder="name" 
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Email Address</label>
                            <input 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                placeholder="user@example.com" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Subject</label>
                            <div className="relative">
                                <select 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black appearance-none"
                                >
                                    <option>Project Inquiry</option>
                                    <option>Job Application</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xs tracking-wider text-black">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6} 
                                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                                placeholder="Tell us everything..."
                                required
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <div className="bg-green-50 text-green-600 p-4 rounded-xl flex items-center gap-3">
                                <CheckCircle size={20} />
                                <span>Message sent successfully! We'll get back to you soon.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3">
                                <AlertCircle size={20} />
                                <span>Something went wrong. Please try again later.</span>
                            </div>
                        )}

                        <button 
                            disabled={status === 'submitting'}
                            className="w-full bg-[#007BFF] text-white font-bold py-5 rounded-xl text-lg hover:bg-black hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>Sending... <Loader2 size={20} className="animate-spin" /></>
                            ) : (
                                <>Submit Request <Send size={20} /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;