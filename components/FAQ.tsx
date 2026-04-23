import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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

    // Generate FAQPage schema for AEO (Answer Engine Optimization)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <section className="py-16 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold mb-8 md:mb-16 font-['Syne'] text-center leading-none">
                        {title} <span className="text-[#007BFF]">{highlight}</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-3xl overflow-hidden transition-all hover:border-[#007BFF]" itemScope itemType="https://schema.org/Question">
                                <button
                                    className="w-full p-4 md:p-8 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                                    onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                                    aria-expanded={activeAccordion === idx}
                                >
                                    <span className="text-base md:text-lg lg:text-xl font-bold text-black pr-6 md:pr-8" itemProp="name">{faq.q}</span>
                                    <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeAccordion === idx ? 'bg-[#007BFF] text-white rotate-180' : 'text-black'}`}>
                                        {activeAccordion === idx ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === idx ? 'max-h-96' : 'max-h-0'}`} itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                    <div className="p-4 md:p-8 pt-0 text-gray-500 text-sm md:text-base leading-relaxed" itemProp="text">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
