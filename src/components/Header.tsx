import React from 'react';

const CRP = process.env.REACT_APP_CRP;

function Header({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
    return (
        <header className="bg-white/90 backdrop-blur-lg fixed w-full top-0 z-50 shadow-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-3xl font-extrabold text-primary tracking-tight">Gabrielle Mazulo</span>
                    <span className="text-base font-medium text-gray-700">Psicóloga CRP {CRP}</span>
                </div>
                <nav className="hidden md:flex gap-10">
                    <button onClick={() => scrollToSection('inicio')} className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors">Início</button>
                    <button onClick={() => scrollToSection('servicos')} className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors">Serviços</button>
                    <button onClick={() => scrollToSection('sobre')} className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors">Sobre</button>
                    <button onClick={() => scrollToSection('contato')} className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors">Contato</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
