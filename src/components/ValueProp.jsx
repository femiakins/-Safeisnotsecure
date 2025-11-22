import React from 'react';
import { AlertTriangle, ServerCrash, Database, TrendingUp } from 'lucide-react';

const ValueProp = () => {
    const stats = [
        {
            icon: <AlertTriangle className="w-10 h-10 text-red-500" />,
            title: "70% of African SME Websites",
            description: "Have critical vulnerabilities that hackers can exploit easily."
        },
        {
            icon: <ServerCrash className="w-10 h-10 text-orange-500" />,
            title: "Targeted Attacks",
            description: "Hackers specifically target weak plugins, outdated CMS, and exposed admin logins."
        },
        {
            icon: <Database className="w-10 h-10 text-yellow-500" />,
            title: "Data Exposure",
            description: "A single vulnerability can expose your entire customer database and financial records."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-neonBlue" />,
            title: "Business Continuity",
            description: "Regular assessments prevent costly downtime and protect your reputation."
        }
    ];

    return (
        <section id="value-prop" className="section-padding bg-darkBg">
            <div className="bg-cardBg rounded-3xl p-8 md:p-16 border border-slate-800 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-neonBlue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Your Business Needs This
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Cybersecurity isn't just for big corporations. Small businesses are the most frequent targets because they often lack proper protection.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-darkBg/50 p-6 rounded-xl border border-slate-700/50 hover:border-neonBlue/30 transition-colors">
                            <div className="mb-4 bg-darkBg p-3 rounded-lg inline-block">
                                {stat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{stat.title}</h3>
                            <p className="text-slate-400 text-sm">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
