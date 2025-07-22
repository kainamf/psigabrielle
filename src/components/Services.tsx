import React from 'react';
import { Users, Award, Heart, Star } from 'lucide-react';

function Services() {
    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Serviços Especializados</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofereço avaliações neuropsicológicas completas e personalizadas para cada criança e adolescente
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Avaliação Neuropsicológica</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Avaliação completa das funções cognitivas, incluindo atenção, memória, linguagem, funções executivas e habilidades acadêmicas.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Award className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Diagnóstico Diferencial</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Identificação precisa de condições como TDAH, TEA, dificuldades de aprendizagem e outros transtornos do neurodesenvolvimento.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Heart className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Orientação Familiar</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Suporte e orientação para famílias e escolas sobre estratégias de intervenção e acompanhamento adequados.
                        </p>
                    </div>
                </div>
                <div className="mt-16 bg-blue-900 text-white p-8 rounded-2xl">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-300 mb-2">200+</div>
                            <div className="text-blue-100">Avaliações Realizadas</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-300 mb-2">8+</div>
                            <div className="text-blue-100">Anos de Experiência</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
                            <div className="text-blue-100">Satisfação das Famílias</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
