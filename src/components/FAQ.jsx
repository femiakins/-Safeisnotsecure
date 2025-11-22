import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "How long does the assessment take?",
            answer: "For the Basic check, we typically deliver results within 24 hours. Standard and Premium assessments take 2-3 business days to ensure a thorough inspection."
        },
        {
            question: "What will I receive?",
            answer: "You will receive a comprehensive PDF report detailing all vulnerabilities found, along with a non-technical summary and step-by-step recommendations for fixing them."
        },
        {
            question: "How do I implement your recommendations?",
            answer: "Our reports are designed to be easy to follow. For Standard and Premium packages, we provide specific guidance. If you need hands-on help, we can discuss implementation support."
        },
        {
            question: "Is my data safe during the scan?",
            answer: "Absolutely. We use non-intrusive scanning methods that do not disrupt your website's performance or compromise your data privacy."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="section-padding bg-darkBg">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-cardBg rounded-xl border border-slate-800 overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-neonBlue" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400" />
                                )}
                            </button>

                            <div
                                className={`px-6 text-slate-400 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
