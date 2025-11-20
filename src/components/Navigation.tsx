import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "./i1.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Qui sommes-nous', href: '#about' },
    { label: 'Nos services', href: '#services' },
    { label: 'Nos valeurs', href: '#values' },
    { label: 'Nos réalisations', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex items-center space-x-3">
          <div className="w-40 h-23 flex items-center justify-center">
    <img 
  src={logo} 
  alt="Logo SUVA" 
  className="w-full h-full object-contain"
/>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-600 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}
