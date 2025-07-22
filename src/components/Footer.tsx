import React from 'react';

function Footer() {
    return (
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
    );
}

export default Footer;
