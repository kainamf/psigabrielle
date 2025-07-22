import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

function Contact() {
    return (
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
    );
}

export default Contact;
