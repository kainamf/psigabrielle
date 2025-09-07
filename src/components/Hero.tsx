import React from 'react';

const INSTAGRAM = process.env.REACT_APP_INSTAGRAM;
const WHATSAPP = process.env.REACT_APP_WHATSAPP;
const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM}`;
import { MessageCircle, Instagram, Heart } from 'lucide-react';

function Hero() {
    return (
    <section id="inicio" className="py-24 bg-white mt-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                        Avaliação Neuropsicológica
                        <span className="block text-primary mt-2">para Crianças e Adolescentes</span>
                    </h1>
                    <p className="text-2xl text-gray-700 mb-10 leading-relaxed max-w-xl">
                        Especialista em compreender o desenvolvimento cognitivo, emocional e comportamental de crianças e adolescentes através de avaliações neuropsicológicas precisas e humanizadas.
                    </p>
                    <div className="flex gap-6 mt-2">
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            className="bg-primary hover:bg-accent text-white px-10 py-5 rounded-xl font-bold flex items-center gap-4 shadow-xl transition-all duration-200 hover:scale-105 text-lg"
                        >
                            <MessageCircle size={24} />
                            Agendar Consulta
                        </a>
                        <a
                            href={INSTAGRAM_LINK}
                            target="_blank"
                            className="bg-white border-2 border-primary text-primary px-10 py-5 rounded-xl font-bold flex items-center gap-4 shadow-xl transition-all duration-200 hover:bg-primary hover:text-white text-lg"
                        >
                            <Instagram size={24} />
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center max-w-xs w-full hover:shadow-3xl transition-shadow duration-300">
                        <img
                            src="/assets/images/Gabrielle-alta  fkuhn 1.jpg"
                            alt="Gabrielle Mazulo"
                            className="w-full h-auto rounded-2xl mb-6 object-cover"
                            style={{ maxHeight: '400px' }}
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Gabrielle Mazulo</h3>
                        <p className="text-primary text-lg">Psicóloga Especialista</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
