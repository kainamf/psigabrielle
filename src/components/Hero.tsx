import React from 'react';

const INSTAGRAM = process.env.REACT_APP_INSTAGRAM;
const WHATSAPP = process.env.REACT_APP_WHATSAPP;
const CRP = process.env.REACT_APP_CRP;
import { MessageCircle, Instagram, Heart } from 'lucide-react';

function Hero() {
    return (
    <section id="inicio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <img src="/assets/images/Logo-escrita-fina.png" alt="Logo escrita fina" className="mx-auto mb-10 h-32 w-auto object-contain" />
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-16">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                        Psicóloga Gabrielle Mazulo CRP {CRP}<br />
                        <span className="block text-primary mt-2">Atendimento clínico com foco em neurodesenvolvimento e empatia</span>
                    </h1>
                    <p className="text-xl italic text-gray-700 mb-8 leading-relaxed max-w-xl">
                        Mais do que ensinar a se comportar, eu ensino a se reconhecer. E ser acolhido por inteiro.
                    </p>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg transition-all transform hover:scale-105 text-lg w-64 mx-auto md:mx-0"
                    >
                        <MessageCircle size={22} />
                        Agendar Consulta
                    </a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="max-w-md w-full">
                        <img
                            src="/assets/images/Gabrielle-alta3-4.jpg"
                            alt="Foto de Gabrielle"
                            className="w-full h-auto object-cover shadow-2xl rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Hero;
