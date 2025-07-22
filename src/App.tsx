import React from 'react';
import { Mail, MapPin, Instagram, MessageCircle, Star, Clock, Users, Award, Heart } from 'lucide-react';

function App() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-blue-900">
                            Gabrielle Mazulo
                            <div className="text-sm font-normal text-blue-600">Psicóloga CRP 05/74956</div>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">Início</button>
                            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</button>
                            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</button>
                            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</button>
                            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">Contato</button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                                Avaliação Neuropsicológica
                                <span className="text-blue-600 block">para Crianças e Adolescentes</span>
                            </h1>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Especialista em compreender o desenvolvimento cognitivo, emocional e comportamental de crianças e adolescentes através de avaliações neuropsicológicas precisas e humanizadas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/5521995263386"
                                    target="_blank"
                                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
                                >
                                    <MessageCircle size={20} />
                                    Agendar Consulta
                                </a>
                                <a
                                    href="https://instagram.com/psigabriellemazulo"
                                    target="_blank"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
                                >
                                    <Instagram size={20} />
                                    Instagram
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                                <div className="bg-blue-600 w-full h-64 rounded-xl flex items-center justify-center">
                                    <Heart size={80} className="text-white" />
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">Gabrielle Mazulo</h3>
                                    <p className="text-gray-600">Psicóloga Especialista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
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

            {/* About Section */}
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

            {/* Testimonials Section */}
            <section id="depoimentos" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Depoimentos</h2>
                        <p className="text-xl text-gray-600">O que as famílias dizem sobre nosso trabalho</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "A avaliação da Gabrielle foi fundamental para entendermos as necessidades do nosso filho. Profissional extremamente dedicada e carinhosa."
                            </p>
                            <div className="font-semibold text-blue-900">Maria Silva</div>
                            <div className="text-gray-500 text-sm">Mãe do João, 8 anos</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "Relatório muito detalhado e orientações práticas que realmente fazem diferença no dia a dia. Recomendo de olhos fechados!"
                            </p>
                            <div className="font-semibold text-blue-900">Ana Rodrigues</div>
                            <div className="text-gray-500 text-sm">Mãe da Laura, 12 anos</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "Atendimento humanizado e profissional. A Gabrielle soube lidar com muito carinho com nosso filho adolescente."
                            </p>
                            <div className="font-semibold text-blue-900">Carlos Mendes</div>
                            <div className="text-gray-500 text-sm">Pai do Rafael, 15 anos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contato" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
                        <p className="text-xl text-gray-600">Agende sua consulta e dê o primeiro passo</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-6">Informações de Contato</h3>

                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/5521995263386"
                                        target="_blank"
                                        className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                                    >
                                        <div className="bg-green-500 p-3 rounded-full group-hover:bg-green-600 transition-colors">
                                            <MessageCircle className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">WhatsApp</div>
                                            <div className="text-gray-600">(21) 99526-3386</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://instagram.com/psigabriellemazulo"
                                        target="_blank"
                                        className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                                    >
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                            <Instagram className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">Instagram</div>
                                            <div className="text-gray-600">@psigabriellemazulo</div>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                                        <div className="bg-blue-500 p-3 rounded-full">
                                            <Mail className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">E-mail</div>
                                            <div className="text-gray-600">psi.gabriellemazulo@gmail.com</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                        <div className="bg-gray-500 p-3 rounded-full">
                                            <MapPin className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">Endereço</div>
                                            <div className="text-gray-600">Av. das Américas, 19019. Sala 386 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-701</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Segunda a Sexta:</span>
                                        <span>8h às 18h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sábado:</span>
                                        <span>8h às 12h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Domingo:</span>
                                        <span>Fechado</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-6 border-b">
                                <h3 className="text-xl font-semibold text-blue-900">Localização</h3>
                            </div>
                            <div className="h-96">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6543!3d-23.5615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjQiUyA0NsKwMzknMTUuNSJX!5e0!3m2!1spt-BR!2sbr!4v1635789012345!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização da Clínica"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Gabrielle Mazulo</h3>
                            <p className="text-blue-100 mb-4 leading-relaxed">
                                Psicóloga especializada em avaliação neuropsicológica de crianças e adolescentes.
                                Cuidado humanizado e cientificamente fundamentado.
                            </p>
                            <p className="text-blue-200 text-sm">CRP 05/74956</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Serviços</h4>
                            <ul className="space-y-2 text-blue-100">
                                <li>Avaliação Neuropsicológica</li>
                                <li>Diagnóstico Diferencial</li>
                                <li>Orientação Familiar</li>
                                <li>Relatórios Especializados</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contato</h4>
                            <div className="space-y-2 text-blue-100">
                                <p>(21) 99526-3386</p>
                                <p>psi.gabriellemazulo@gmail.com</p>
                                <p>Rio de Janeiro/RJ</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
                        <p>&copy; 2024 Gabrielle Mazulo - Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>

            {/* Fixed WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/5521995263386"
                    target="_blank"
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-3"
                >
                    <MessageCircle size={24} />
                    <span className="hidden sm:inline font-semibold">Agendar Consulta</span>
                </a>
            </div>
        </div>
    );
}

export default App;