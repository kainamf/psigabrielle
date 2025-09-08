import React from 'react';

const INSTAGRAM = process.env.REACT_APP_INSTAGRAM;
const WHATSAPP = process.env.REACT_APP_WHATSAPP;
const CRP = process.env.REACT_APP_CRP;
import { MessageCircle, Instagram, Heart } from 'lucide-react';

function Hero() {
    return (
    <section id="inicio" className="py-24 bg-">
        <div className="max-w-6xl mx-auto px-6">
            {/* Logo centralizada no topo */}
            <div className="flex justify-center mb-10">
                <img 
                    src="/assets/images/Logo-escrita-fina.png" 
                    alt="Logo Gabrielle Mazulo" 
                    className="w-64 md:w-[28rem] mx-auto"
                />
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Coluna da Esquerda: Descrição centralizada */}
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-2 leading-tight text-center">
                        Psicóloga Gabrielle Mazulo CRP {CRP} | Atendimento clínico com foco em neurodesenvolvimento e empatia
                    </h1>
                    <div className="mt-4 mb-6">
                        <blockquote className="text-lg md:text-xl italic text-neutral-700 font-medium text-center">
                            Mais do que ensinar a se comportar, eu ensino a se reconhecer. E ser acolhido por inteiro.
                        </blockquote>
                    </div>
                    <div className="mt-6">
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-300 hover:bg-primary-400 text-background px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto animate-bounce-slow text-base"
                        >
                            Agendar Consulta
                            <MessageCircle size={18} />
                        </a>
                        <style>{`
                            @keyframes bounce-slow {
                              0%, 100% { transform: translateY(0); }
                              50% { transform: translateY(-10px); }
                            }
                            .animate-bounce-slow {
                              animation: bounce-slow 2.5s infinite;
                            }
                        `}</style>
                    </div>
                </div>
                {/* Coluna da Direita: Imagem */}
                <div className="flex justify-center items-center">
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
