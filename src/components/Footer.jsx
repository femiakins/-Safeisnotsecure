import React from 'react';
import { Shield, Twitter, Linkedin, Facebook, Youtube, Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-darkBg border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="SafeIsNotSecure Logo" className="h-12 w-12 rounded-full object-cover" />
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Safe<span className="text-neonBlue">IsNotSecure</span>
                            </span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Professional Website Security Assessments for African SMEs. Protecting your business from digital threats.
                        </p>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="text-slate-400 hover:text-neonBlue transition-colors">
                                                <img src="/logo.svg" alt="SafeIsNotSecure Logo" className="h-12 w-12 rounded-full object-cover" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-neonBlue transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-neonBlue transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-neonBlue transition-colors">
                                <instagram className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                            <a href="https://www.youtube.com/@Safeisnotsecure" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                    <Youtube className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                                </div>
                                <span className="text-sm">Visit SIS YouTube Channel</span>
                            </a>
                            <a href="https://femiakins.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-neonBlue/20 transition-colors">
                                    <Briefcase className="w-4 h-4 group-hover:text-neonBlue transition-colors" />
                                </div>
                                <span className="text-sm">View Cybersecurity Portfolio</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-slate-400 hover:text-neonBlue transition-colors">Services</a></li>
                            <li><a href="#analyst" className="text-slate-400 hover:text-neonBlue transition-colors">About Analyst</a></li>
                            <li><a href="#value-prop" className="text-slate-400 hover:text-neonBlue transition-colors">Why Us</a></li>
                            <li><a href="#faq" className="text-slate-400 hover:text-neonBlue transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-slate-400">Lagos, Nigeria</li>
                            <li><a href="mailto:safeisnotsecure@gmail.com" className="text-slate-400 hover:text-neonBlue transition-colors">safeisnotsecure@gmail.com</a></li>
                            <li><a href="tel:+2347026742567" className="text-slate-400 hover:text-neonBlue transition-colors">+2347026742567</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} SafeIsNotSecure. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
