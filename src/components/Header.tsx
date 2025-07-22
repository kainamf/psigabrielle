import React from 'react';

function Header({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
    return (
        <header className="bg-background/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-accent">
                        Gabrielle Mazulo
                        <div className="text-sm font-normal text-primary">Psicóloga CRP 05/74956</div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('inicio')} className="text-secondary hover:text-primary transition-colors">Início</button>
                        <button onClick={() => scrollToSection('servicos')} className="text-secondary hover:text-primary transition-colors">Serviços</button>
                        <button onClick={() => scrollToSection('sobre')} className="text-secondary hover:text-primary transition-colors">Sobre</button>
                        <button onClick={() => scrollToSection('depoimentos')} className="text-secondary hover:text-primary transition-colors">Depoimentos</button>
                        <button onClick={() => scrollToSection('contato')} className="text-secondary hover:text-primary transition-colors">Contato</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
