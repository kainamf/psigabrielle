import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Serviços', path: '/services' },
  { name: 'Contato', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full bg-background shadow-md sticky top-0 z-50 opacity-90">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center h-16">
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-semibold px-3 py-1 rounded transition-colors duration-200
                  ${location.pathname === link.path
                    ? 'bg-primary-900 text-background'
                    : 'bg-background text-primary-900 hover:bg-primary-100 hover:text-background'}
                `}
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
