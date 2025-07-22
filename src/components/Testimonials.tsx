import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Depoimentos</h2>
                    <p className="text-xl text-gray-600">O que as famílias dizem sobre nosso trabalho</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[{
                        text: "A avaliação da Gabrielle foi fundamental para entendermos as necessidades do nosso filho. Profissional extremamente dedicada e carinhosa.",
                        name: "Maria Silva",
                        info: "Mãe do João, 8 anos"
                    }, {
                        text: "Relatório muito detalhado e orientações práticas que realmente fazem diferença no dia a dia. Recomendo de olhos fechados!",
                        name: "Ana Rodrigues",
                        info: "Mãe da Laura, 12 anos"
                    }, {
                        text: "Atendimento humanizado e profissional. A Gabrielle soube lidar com muito carinho com nosso filho adolescente.",
                        name: "Carlos Mendes",
                        info: "Pai do Rafael, 15 anos"
                    }].map((dep, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">{dep.text}</p>
                            <div className="font-semibold text-blue-900">{dep.name}</div>
                            <div className="text-gray-500 text-sm">{dep.info}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
