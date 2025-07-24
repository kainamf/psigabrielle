import React from 'react';

const CRP = process.env.REACT_APP_CRP;
const PHONE = process.env.REACT_APP_PHONE;
const EMAIL = process.env.REACT_APP_EMAIL;
const ADDRESS = process.env.REACT_APP_ADDRESS;

function Footer() {
    return (
        <footer className="bg-accent text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Gabrielle Mazulo</h3>
                        <p className="text-primary mb-4 leading-relaxed">
                            Psicóloga especializada em avaliação neuropsicológica de crianças e adolescentes.
                            Cuidado humanizado e cientificamente fundamentado.
                        </p>
                        <p className="text-secondary text-sm">CRP {CRP}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Serviços</h4>
                        <ul className="space-y-2 text-primary">
                            <li>Avaliação Neuropsicológica</li>
                            <li>Diagnóstico Diferencial</li>
                            <li>Orientação Familiar</li>
                            <li>Relatórios Especializados</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contato</h4>
                        <div className="space-y-2 text-primary">
                            <p>{PHONE}</p>
                            <p>{EMAIL}</p>
                            <p>{ADDRESS}</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-primary mt-8 pt-8 text-center text-secondary">
                    <p>&copy; 2025 Kainã Freitas - Todos os direitos reservados</p>
                    <p className="text-xs mt-2">Desenvolvido por <a href="https://github.com/kainamf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Kainã Freitas</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
