import React from 'react';
import { Award, Clock, Heart } from 'lucide-react';

function About() {
    return (
        <section id="sobre" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-900 mb-6">Sobre Gabrielle Mazulo</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
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
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-blue-600" size={20} />
                                    <span className="font-semibold text-blue-900">Formação</span>
                                </div>
                                <p className="text-sm text-gray-600">Psicologia - UNESP</p>
                                <p className="text-sm text-gray-600">Especialização em Neuropsicologia</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="text-blue-600" size={20} />
                                    <span className="font-semibold text-blue-900">Experiência</span>
                                </div>
                                <p className="text-sm text-gray-600">8+ anos na área</p>
                                <p className="text-sm text-gray-600">200+ avaliações</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-8">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-full h-80 rounded-xl flex items-center justify-center">
                                <div className="text-center text-white">
                                    <Heart size={60} className="mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold">Gabrielle Mazulo</h3>
                                    <p>CRP 05/74956</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
