import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    q: string;
    a: string;
}

interface FAQProps {
    faqs: FAQItem[];
    title?: string;
    highlight?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqs, title = "Curious", highlight = "Minds" }) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-5xl md:text-[4rem] font-bold mb-16 font-['Syne'] text-center leading-none">
                    {title} <span className="text-[#007BFF]">{highlight}</span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-3xl overflow-hidden transition-all hover:border-[#007BFF]">
                            <button
                                className="w-full p-8 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                            >
                                <span className="text-xl font-bold text-black pr-8">{faq.q}</span>
                                <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeAccordion === idx ? 'bg-[#007BFF] text-white rotate-180' : 'text-black'}`}>
                                    {activeAccordion === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === idx ? 'max-h-48' : 'max-h-0'}`}>
                                <div className="p-8 pt-0 text-gray-500 leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
