import React from 'react';
import { MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-darkBg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neonBlue/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl lg:max-w-6xl">
                <div className="bg-cardBg rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need More Information?
                        </h2>
                        <p className="text-slate-400">
                            If you have questions or want to discuss a custom security assessment, reach out anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                        <a
                            href="https://wa.me/+2347026742567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-darkBg border border-slate-700 hover:border-neonBlue/50 hover:bg-darkBg/80 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-slate-400 mb-4">Chat with Femi</p>
                            <span className="text-neonBlue font-medium">Start Chat &rarr;</span>
                        </a>

                        <a
                            href="mailto:support@safeisnotsecure.com"
                            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-darkBg border border-slate-700 hover:border-neonBlue/50 hover:bg-darkBg/80 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-neonBlue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8 text-neonBlue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <p className="text-slate-400 mb-4">safeisnotsecure@gmail.com</p>
                            <span className="text-neonBlue font-medium">Send Email &rarr;</span>
                        </a>
                    </div>

                    <div className="bg-darkBg/50 rounded-xl p-6 md:p-8 border border-slate-700/50">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Send className="w-5 h-5 text-neonBlue" />
                            Send a Message
                        </h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-darkBg border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-darkBg border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                                />
                            </div>
                            <textarea
                                placeholder="How can we help you?"
                                rows="4"
                                className="w-full bg-darkBg border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                            ></textarea>
                            <button className="btn-primary w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
