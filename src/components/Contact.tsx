import React from 'react';

const PHONE = process.env.REACT_APP_PHONE;
const EMAIL = process.env.REACT_APP_EMAIL;
const ADDRESS = process.env.REACT_APP_ADDRESS;
const INSTAGRAM = process.env.REACT_APP_INSTAGRAM;
const WHATSAPP = process.env.REACT_APP_WHATSAPP;
const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM}`;
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

function Contact() {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Entre em Contato</h2>
                    <p className="text-2xl text-gray-700">Agende sua consulta e dê o primeiro passo</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
                    <div className="flex flex-col gap-10 h-full">
                        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Informações de Contato</h3>
                            <div className="flex flex-col gap-4">
                                <a
                                    href={WHATSAPP}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary-100 rounded-xl hover:bg-primary-300 transition-colors group shadow"
                                >
                                    <div className="bg-primary p-3 rounded-full group-hover:bg-accent transition-colors">
                                        <MessageCircle className="text-black" size={28} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">WhatsApp</div>
                                        <div className="text-gray-700">{PHONE}</div>
                                    </div>
                                </a>
                                <a
                                    href={INSTAGRAM_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary-100 rounded-xl hover:bg-primary-300 transition-colors group shadow"
                                >
                                    <div className="bg-secondary p-3 rounded-full">
                                        <Instagram className="text-black" size={28} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Instagram</div>
                                        <div className="text-gray-700">@{INSTAGRAM}</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-primary-100 rounded-xl shadow">
                                    <div className="bg-primary p-3 rounded-full">
                                        <Mail className="text-black" size={28} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">E-mail</div>
                                        <div className="text-gray-700">{EMAIL}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-primary-100 rounded-xl shadow">
                                    <div className="bg-primary p-3 rounded-full">
                                        <MapPin className="text-black" size={28} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Endereço</div>
                                        <div className="text-gray-700">{ADDRESS}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary/10 p-8 rounded-3xl shadow-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Horário de Atendimento</h3>
                            <div className="space-y-2 text-lg text-gray-700">
                                <div className="flex justify-between">
                                    <span>Segunda a Sexta:</span>
                                    <span>8h às 21h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full min-h-full">
                        <div className="p-6 border-b">
                            <h3 className="text-xl font-bold text-gray-900">Localização</h3>
                        </div>
                        <div className="flex-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.234073964837!2d-43.48085768446444!3d-23.02156398495309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdc2b7e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sAv.%20das%20Am%C3%A9ricas%2C%2019019%20-%20Recreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022790-701!5e0!3m2!1spt-BR!2sbr!4v1721568000000!5m2!1spt-BR!2sbr"
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
