import React from 'react';

const CRP = process.env.REACT_APP_CRP;
const PHONE = process.env.REACT_APP_PHONE;
const EMAIL = process.env.REACT_APP_EMAIL;
const ADDRESS = process.env.REACT_APP_ADDRESS;

function Footer() {
    return (
    <footer className="bg-primary-300 text-white py-4 mt-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-base">© 2025 Kainã Freitas - Todos os direitos reservados</p>
                <p className="text-base mt-2">Desenvolvido por <a href="https://dev-kainamf.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-100">Kainã Freitas</a></p>
            </div>
        </footer>
    );
}

export default Footer;
