import React from 'react';
import { ShieldCheck, ChevronRight, Youtube, Briefcase } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-darkBg via-darkBg/90 to-darkBg/70 z-10"></div>
                {/* Placeholder for User Image */}
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                    alt="Cybersecurity Background"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20">
                <div className="max-w-3xl lg:max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/30 text-neonBlue text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Trusted Website Security for African SMEs</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
                        Is Your Website <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonCyan">
                            Vulnerable to Hackers?
                        </span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-2xl lg:max-w-3xl leading-relaxed">
                        Professional Website Security Assessments for African SMEs, powered by SafeIsNotSecure.
                        Don't let a single vulnerability expose your customer data.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                                Book Assessment on WhatsApp
                                <ChevronRight className="w-5 h-5" />
                            </a>
                            <a href="#services" className="btn-secondary text-center">
                                Learn More
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-slate-800/50">
                            <a
                                href="https://youtube.com/@Safeisnotsecure"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800/50 hover:bg-red-600/10 border border-slate-700 hover:border-red-500 transition-all duration-300"
                            >
                                <div className="p-2 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                                    <Youtube className="w-5 h-5 text-red-500" />
                                </div>
                                <span className="font-medium text-slate-300 group-hover:text-white">Visit SIS YouTube</span>
                            </a>

                            <a
                                href="https://femiakins.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800/50 hover:bg-neonBlue/10 border border-slate-700 hover:border-neonBlue transition-all duration-300"
                            >
                                <div className="p-2 rounded-full bg-neonBlue/10 group-hover:bg-neonBlue/20 transition-colors">
                                    <Briefcase className="w-5 h-5 text-neonBlue" />
                                </div>
                                <span className="font-medium text-slate-300 group-hover:text-white">View Portfolio</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-darkBg to-transparent z-20"></div>
        </section>
    );
};

export default Hero;
