import React from 'react';
import { User, Linkedin, Twitter } from 'lucide-react';

const Analyst = () => {
    return (
        <section id="analyst" className="section-padding bg-darkBg relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-neonBlue/20 rounded-2xl transform rotate-6"></div>
                            <div className="absolute inset-0 bg-neonCyan/20 rounded-2xl transform -rotate-6"></div>
                            <img
                                src="/analyst.jpg"
                                alt="Akinsanya Femi"
                                className="relative z-10 w-80 h-96 lg:w-96 lg:h-[30rem] object-cover rounded-2xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-neonBlue text-sm font-medium mb-4">
                            Meet Your Analyst
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Femi Akinsanya
                        </h2>
                        <p className="text-neonCyan font-medium text-lg mb-6">
                            Founder & Lead Analyst at SafeIsNotSecure
                        </p>

                        <p className="text-slate-300 leading-relaxed mb-6">
                            "I specialize in helping African SMEs secure their websites, identify vulnerabilities, and protect customer data through professional, easy-to-understand security assessments."
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-8">
                            With the rising tide of cyber threats targeting small businesses in Africa, my mission is to provide accessible, high-quality security insights that empower business owners to stay safe online without needing a technical background.
                        </p>

                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/oluwafemi-akinsanya-omoakin/" className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-neonBlue hover:bg-slate-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/femi_akins_" className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-neonBlue hover:bg-slate-700 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analyst;
