import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Analyst from './components/Analyst';
import Services from './components/Services';
import ValueProp from './components/ValueProp';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-darkBg text-slate-300 font-sans selection:bg-neonBlue selection:text-darkBg">
            <Header />
            <main>
                <Hero />
                <Analyst />
                <Services />
                <ValueProp />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
