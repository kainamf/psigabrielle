import React from 'react';
import { Award, Clock, Heart } from 'lucide-react';

function About() {
    return (
        <section id="sobre" className="py-20 bg-gradient-to-br from-background to-primary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-accent mb-6">Sobre Gabrielle Mazulo</h2>
                        <div className="space-y-4 text-accent leading-relaxed">
                            <p>
                                Sou Gabrielle, mestranda em Ensino em Biociências e Saúde pela Fiocruz, pós-graduanda em neuropsicologia pelo IPOG e psicóloga formada pela Universidade Federal Rural do Rio de Janeiro (UFRRJ).
                            </p>
                            <p>
                                Ofereço os serviços de psicoterapia individual de crianças e adolescentes, Avaliação Neuropsicológica de Crianças, Adolescentes e Adultos e Orientação Parental.
                            </p>
                            <p>
                                Meu propósito é ajudar famílias e escolas a acolherem o desenvolvimento dos pequenos de maneira saudável.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-background p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Formação</span>
                                </div>
                                <p className="text-sm text-accent">Psicologia - UFRRJ</p>
                                <p className="text-sm text-accent">Especialização em Neuropsicologia</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-12">
                        <div className="rounded-2xl shadow-2xl p-0 bg-background" style={{ width: '350px', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <iframe
                                src="https://www.instagram.com/p/C75CChOPQh8/embed"
                                width="350"
                                height="480"
                                allowTransparency={true}
                                frameBorder="0"
                                scrolling="no"
                                allow="encrypted-media"
                                title="Instagram Post"
                                className="rounded-xl"
                                style={{ border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
