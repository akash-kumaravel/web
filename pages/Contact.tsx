import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { updateSEO, addBreadcrumbSchema } from '../utils/seo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTk-Npq9H8Ah0YW6GcU4c8Xic0hOPTOW9KvZadLwKNPnr50u39qTyYZ3g79NnVyMx0/exec";

  useEffect(() => {
    updateSEO({
      title: 'Contact Us — Get in Touch with MEMO InfoTech',
      description: 'Contact MEMO InfoTech for web development, graphic design, and digital solutions. Call +91 6374433734 or email hello@memoinfotech.com. Based in Nagercoil, India.',
      keywords: 'contact MEMO InfoTech, web development inquiry, design service request, digital solutions contact',
      canonicalUrl: 'https://www.memoinfotech.com/contact/'
    });
    
    addBreadcrumbSchema([
      { name: 'Home', url: 'https://www.memoinfotech.com/' },
      { name: 'Contact', url: 'https://www.memoinfotech.com/contact/' }
    ]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = new FormData();
    form.append('type', 'course-enrollment');
    form.append('fullName', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('course', 'Contact Form');
    form.append('message', formData.message);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white w-full min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-[4rem] font-bold mb-16 font-['Syne'] text-center text-black leading-none">Get in <span className="text-white bg-[#007BFF] px-4 inline-block transform rotate-2 shadow-[5px_5px_0px_#000]">Touch</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Panel */}
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
                  <p className="text-xl font-bold">hello@memoinfotech.com</p>
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
                  <p className="text-gray-400 text-sm uppercase">Location</p>
                  <p className="text-xl font-bold">India</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-6 bg-[#222] rounded-2xl border border-white/10 hover:border-[#007BFF] transition-colors">
              <p className="text-gray-300 italic">"We don't just deliver projects. We build relationships"</p>
              <p className="mt-4 font-bold text-[#007BFF]">- Founder, Akash Kumaravel</p>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-black">Send a Message</h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <a href="/" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#007BFF] transition-all">
                  Return Home
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold uppercase text-xs tracking-wider text-black">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                    placeholder="Your Name" 
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
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                    placeholder="your@email.com" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold uppercase text-xs tracking-wider text-black">Mobile Number</label>
                  <input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                    placeholder="+91 00000 00000" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold uppercase text-xs tracking-wider text-black">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] transition-all text-black" 
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
