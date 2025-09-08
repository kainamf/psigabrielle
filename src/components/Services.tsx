import React from 'react';
import { Users, Award, Heart, Star } from 'lucide-react';

function Services() {
    return (
        <section id="servicos" className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Serviços Oferecidos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl">🧠</span>
                            <h3 className="text-2xl font-bold text-gray-900">Avaliação Neuropsicológica</h3>
                        </div>
                        <p className="text-gray-700 text-lg">
                            Investiga perfil cognitivo, emocional e comportamental. Indicado para TEA, TDAH, altas habilidades e dificuldades de aprendizagem.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl">💬</span>
                            <h3 className="text-2xl font-bold text-gray-900">Psicoterapia Cognitivo-Comportamental (TCC)</h3>
                        </div>
                        <p className="text-gray-700 text-lg">
                            Atendimento para crianças, adolescentes e adultos. Foco em ansiedade, depressão, regulação emocional e dificuldades de socialização.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl">👨‍👩‍👧</span>
                            <h3 className="text-2xl font-bold text-gray-900">Orientação Parental</h3>
                        </div>
                        <p className="text-gray-700 text-lg">
                            Apoio a pais e cuidadores para lidar com desafios diários e promover desenvolvimento emocional saudável.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl">🔍</span>
                            <h3 className="text-2xl font-bold text-gray-900">Diagnóstico Diferencial</h3>
                        </div>
                        <p className="text-gray-700 text-lg">
                            Processo especializado para diferenciar condições com sintomas semelhantes e definir estratégias de intervenção adequadas.
                        </p>
                    </div>
                </div>
                <div className="bg-primary/10 p-8 rounded-3xl shadow-xl text-center">
                    <h4 className="text-2xl font-bold text-primary mb-4">Formatos de Atendimento</h4>
                    <p className="text-lg text-gray-700">
                        Todos os serviços são ofertados presencialmente, online ou híbridos, garantindo flexibilidade e acessibilidade.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
