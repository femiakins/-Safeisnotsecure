import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShoppingBag, Monitor, Briefcase } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "SIS helped us identify major security weaknesses we didn't know existed. Our site is now faster, more secure, and trusted by our customers.",
            author: "BrightTech Ecommerce",
            role: "Online Retailer",
            icon: <ShoppingBag className="w-6 h-6 text-neonBlue" />
        },
        {
            quote: "The assessment revealed plugin vulnerabilities that could have exposed our customer data. SIS fixed everything quickly.",
            author: "Nova Digital Studios",
            role: "Creative Agency",
            icon: <Monitor className="w-6 h-6 text-purple-500" />
        },
        {
            quote: "Professional, affordable, and thorough. This service helped us avoid a potential breach.",
            author: "Lush Cosmetics Africa",
            role: "Beauty Brand",
            icon: <Briefcase className="w-6 h-6 text-pink-500" />
        },
        {
            quote: "We were skeptical at first, but the report was eye-opening. The team explained everything in plain English.",
            author: "Swift Logistics",
            role: "Logistics Company",
            icon: <Briefcase className="w-6 h-6 text-orange-500" />
        },
        {
            quote: "Best investment we've made for our website this year. Highly recommended for any small business owner.",
            author: "GreenLeaf Agro",
            role: "Agri-Tech Startup",
            icon: <ShoppingBag className="w-6 h-6 text-green-500" />
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding bg-darkBg relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-neonBlue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-neonCyan/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        What African Businesses Are <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonCyan">
                            Saying About SIS
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Join hundreds of businesses that have secured their online presence with our assessments.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden px-4">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((item, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-2xl relative mx-auto max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
                                        {/* Quote Icon */}
                                        <div className="absolute -top-6 left-8 bg-neonBlue text-darkBg p-3 rounded-full shadow-lg">
                                            <Quote className="w-6 h-6 fill-current" />
                                        </div>

                                        {/* 5-Star Rating */}
                                        <div className="flex gap-1 mb-6 justify-center md:justify-start">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>

                                        <p className="text-slate-700 text-lg md:text-xl italic mb-8 leading-relaxed text-center md:text-left">
                                            "{item.quote}"
                                        </p>

                                        <div className="flex items-center justify-center md:justify-start gap-4 border-t border-slate-200 pt-6">
                                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                                                {item.icon}
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 text-lg">{item.author}</h4>
                                                <p className="text-slate-500 text-sm font-medium">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 p-3 rounded-full bg-slate-800/50 hover:bg-neonBlue text-white border border-slate-700 hover:border-neonBlue transition-all backdrop-blur-sm z-20 hidden md:block"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 p-3 rounded-full bg-slate-800/50 hover:bg-neonBlue text-white border border-slate-700 hover:border-neonBlue transition-all backdrop-blur-sm z-20 hidden md:block"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                        ? 'bg-neonBlue w-8'
                                        : 'bg-slate-700 hover:bg-slate-600'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
