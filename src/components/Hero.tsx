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
                    <div className="relative mt-8 md:mt-12">
                        <div className="bg-background rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform flex flex-col items-center">
                            <a
                                href="https://www.instagram.com/p/C6MxDq5vgY0/?utm_source=ig_web_copy_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-xl overflow-hidden hover:scale-105 transition-transform"
                                style={{ maxWidth: '350px', width: '100%' }}
                            >
                                <img
                                    src="/Hero.jpg"
                                    alt="Gabrielle Mazulo"
                                    className="w-full h-auto rounded-xl"
                                    style={{ display: 'block', maxHeight: '400px', objectFit: 'contain', margin: '0 auto' }}
                                />
                            </a>
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
