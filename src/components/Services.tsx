import React from 'react';
import { Users, Award, Heart, Star } from 'lucide-react';

function Services() {
    return (
        <section id="servicos" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-accent mb-4">Serviços Especializados</h2>
                    <p className="text-xl text-accent max-w-3xl mx-auto">
                        Ofereço avaliações neuropsicológicas completas e personalizadas para cada criança e adolescente
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-background to-primary p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4">Avaliação Neuropsicológica</h3>
                        <p className="text-accent leading-relaxed">
                            Avaliação completa das funções cognitivas, incluindo atenção, memória, linguagem, funções executivas e habilidades acadêmicas.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-background p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Award className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4">Diagnóstico Diferencial</h3>
                        <p className="text-accent leading-relaxed">
                            Identificação precisa, em crianças, adolescentes e adultos, de condições como TDAH, TEA, Altas Habilidades/Superdotação, dificuldades de aprendizagem e outros transtornos do neurodesenvolvimento.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Heart className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4">Orientação Familiar</h3>
                        <p className="text-accent leading-relaxed">
                            Suporte e orientação para famílias e escolas sobre estratégias de intervenção e acompanhamento adequados.
                        </p>
                    </div>
                </div>
                <div className="mt-16 bg-accent text-white p-8 rounded-2xl">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <span className="mb-4">
                                {/* person.svg */}
                                <svg aria-hidden="true" className="w-12 h-12 text-primary" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/></svg>
                            </span>
                            <span className="text-lg font-semibold">Você escolhe: presencial ou on-line, sempre com acolhimento.</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="mb-4">
                                {/* edit.svg */}
                                <svg aria-hidden="true" className="w-12 h-12 text-primary" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"/></svg>
                            </span>
                            <span className="text-lg font-semibold">Cuidado único para cada história e necessidade.</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="mb-4">
                                {/* private.svg */}
                                <svg aria-hidden="true" className="w-12 h-12 text-primary" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"/></svg>
                            </span>
                            <span className="text-lg font-semibold">Confiança, respeito e total discrição em cada atendimento.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
