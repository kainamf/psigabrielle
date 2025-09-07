import React from 'react';

const CRP = process.env.REACT_APP_CRP;
const PHONE = process.env.REACT_APP_PHONE;
const EMAIL = process.env.REACT_APP_EMAIL;
const ADDRESS = process.env.REACT_APP_ADDRESS;

function Footer() {
    return (
        <footer className="bg-primary/10 text-gray-900 py-16 mt-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <h3 className="text-3xl font-extrabold text-primary mb-2">Gabrielle Mazulo</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Psicóloga especializada em avaliação neuropsicológica de crianças e adolescentes.<br />
                            Cuidado humanizado e cientificamente fundamentado.
                        </p>
                        <p className="text-base text-gray-500">CRP {CRP}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-primary">Serviços</h4>
                        <ul className="space-y-2 text-gray-700 text-base">
                            <li>Avaliação Neuropsicológica</li>
                            <li>Diagnóstico Diferencial</li>
                            <li>Orientação Familiar</li>
                            <li>Relatórios Especializados</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-primary">Contato</h4>
                        <div className="space-y-2 text-gray-700 text-base">
                            <p>{PHONE}</p>
                            <p>{EMAIL}</p>
                            <p>{ADDRESS}</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
                    <p>&copy; 2025 Kainã Freitas - Todos os direitos reservados</p>
                    <p className="text-xs mt-2">Desenvolvido por <a href="https://github.com/kainamf" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Kainã Freitas</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
