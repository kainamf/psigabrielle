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
        <section id="contato" className="py-20 bg-gradient-to-br from-background to-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-accent mb-4">Entre em Contato</h2>
                    <p className="text-xl text-accent">Agende sua consulta e dê o primeiro passo</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <div className="space-y-8 flex flex-col h-full">
                        <div className="bg-background p-6 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-accent mb-6">Informações de Contato</h3>
                            <div className="space-y-4">
                                <a
                                    href={WHATSAPP}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-primary p-3 rounded-full group-hover:bg-accent transition-colors">
                                        <MessageCircle className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent">WhatsApp</div>
                                        <div className="text-accent">{PHONE}</div>
                                    </div>
                                </a>
                                <a
                                    href={INSTAGRAM_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                                >
                                    <div className="bg-gradient-to-r from-secondary to-primary p-3 rounded-full">
                                        <Instagram className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent">Instagram</div>
                                        <div className="text-accent">@{INSTAGRAM}</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                                    <div className="bg-primary p-3 rounded-full">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent">E-mail</div>
                                        <div className="text-accent">{EMAIL}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                                    <div className="bg-accent p-3 rounded-full">
                                        <MapPin className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent">Endereço</div>
                                        <div className="text-accent">{ADDRESS}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-accent text-white p-8 rounded-2xl">
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
                    <div className="bg-background rounded-2xl shadow-lg overflow-hidden flex flex-col h-full min-h-full">
                        <div className="p-6 border-b">
                            <h3 className="text-xl font-semibold text-accent">Localização</h3>
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
