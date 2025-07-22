import React from 'react';
import { MessageCircle, Instagram, Heart } from 'lucide-react';

function Hero() {
    return (
        <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-background to-primary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 leading-tight">
                            Avaliação Neuropsicológica
                            <span className="text-primary block">para Crianças e Adolescentes</span>
                        </h1>
                        <p className="text-xl text-accent mb-8 leading-relaxed">
                            Especialista em compreender o desenvolvimento cognitivo, emocional e comportamental de crianças e adolescentes através de avaliações neuropsicológicas precisas e humanizadas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/5521995263386"
                                target="_blank"
                                className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
                            >
                                <MessageCircle size={20} />
                                Agendar Consulta
                            </a>
                            <a
                                href="https://instagram.com/psigabriellemazulo"
                                target="_blank"
                                className="bg-gradient-to-r from-secondary to-primary hover:from-accent hover:to-primary text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
                            >
                                <Instagram size={20} />
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-background rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                            <div className="bg-primary w-full h-64 rounded-xl flex items-center justify-center">
                                <Heart size={80} className="text-white" />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-xl font-semibold text-accent">Gabrielle Mazulo</h3>
                                <p className="text-secondary">Psicóloga Especialista</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
