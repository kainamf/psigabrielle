import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/about' },
  { name: 'Serviços', path: '/services' },
  { name: 'Contato', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full bg-background border-b border-primary-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/images/Logo-escrita-fina.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-semibold px-3 py-1 rounded transition-colors duration-200 text-primary-900 hover:bg-primary-100 ${location.pathname === link.path ? 'bg-primary-100' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
