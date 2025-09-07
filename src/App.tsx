import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;