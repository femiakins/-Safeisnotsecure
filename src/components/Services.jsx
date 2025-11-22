import React from 'react';
import { Check, Shield, Zap, Lock } from 'lucide-react';

const Services = () => {
    const packages = [
        {
            name: "Basic Website Check",
            price: "₦30,000",
            description: "Perfect for small businesses that want a quick security overview.",
            icon: <Shield className="w-8 h-8 text-neonBlue" />,
            features: [
                "Basic vulnerability scan",
                "Admin login exposure check",
                "SSL validity review",
                "Basic plugin/CMS version inspection",
                "Summary PDF report"
            ],
            cta: "Order Basic Assessment",
            popular: false
        },
        {
            name: "Standard Security Assessment",
            price: "₦50,000",
            description: "Complete security assessment for SMEs.",
            icon: <Zap className="w-8 h-8 text-neonCyan" />,
            features: [
                "Full vulnerability scan",
                "Deep plugin & CMS security check",
                "Security headers review",
                "Admin panel exposure audit",
                "DNS & email security audit",
                "Malware scan",
                "Full PDF report",
                "3 recommended fixes",
                "WhatsApp support"
            ],
            cta: "Order Standard Assessment",
            popular: true
        },
        {
            name: "Premium Security & Hardening",
            price: "₦120,000",
            description: "Advanced protection for ecommerce sites & high-risk businesses.",
            icon: <Lock className="w-8 h-8 text-purple-400" />,
            features: [
                "Everything in Standard",
                "Manual security testing",
                "Basic penetration testing",
                "Threat overview",
                "Deep malware detection",
                "Performance & uptime analysis",
                "Priority 24-hour report delivery",
                "1-week follow-up support"
            ],
            cta: "Order Premium Assessment",
            popular: false
        }
    ];

    return (
        <section id="services" className="section-padding bg-darkBg">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Security Package
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Professional security assessments tailored to your business needs. No hidden fees.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${pkg.popular
                            ? 'bg-cardBg border-2 border-neonBlue shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                            : 'bg-cardBg border border-slate-700 hover:border-slate-500'
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neonBlue text-darkBg text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <div className="mb-4 inline-block p-3 rounded-lg bg-darkBg/50">
                                {pkg.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                            <p className="text-slate-400 text-sm h-10">{pkg.description}</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-3xl font-bold text-white">{pkg.price}</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                                    <Check className="w-5 h-5 text-neonBlue shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className={`w-full block text-center py-3 rounded-lg font-bold transition-colors ${pkg.popular
                                ? 'bg-neonBlue text-darkBg hover:bg-cyan-400'
                                : 'bg-slate-700 text-white hover:bg-slate-600'
                                }`}
                        >
                            {pkg.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
