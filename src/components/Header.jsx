import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#analyst' },
        { name: 'Why Us', href: '#value-prop' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkBg/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="SafeIsNotSecure Logo" className="h-12 w-12 rounded-full object-cover" />
                    <span className="text-2xl font-bold text-white tracking-tight">
                        Safe<span className="text-neonBlue">IsNotSecure</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-neonBlue transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-primary py-2 px-6 text-sm"
                    >
                        Book Assessment
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-darkBg border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-neonBlue py-2 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-primary text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Assessment
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
