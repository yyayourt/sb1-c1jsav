import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-orange-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Scissors size={24} />
          <span className="text-xl font-bold">Coiffure Élégance</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-orange-200">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-orange-200">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-200">Galerie</Link></li>
            <li><Link to="/reservation" className="hover:text-orange-200">Réservation</Link></li>
            <li><Link to="/contact" className="hover:text-orange-200">Contact</Link></li>
          </ul>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li><Link to="/" className="block py-2 hover:text-orange-200" onClick={toggleMenu}>Accueil</Link></li>
            <li><Link to="/services" className="block py-2 hover:text-orange-200" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/gallery" className="block py-2 hover:text-orange-200" onClick={toggleMenu}>Galerie</Link></li>
            <li><Link to="/reservation" className="block py-2 hover:text-orange-200" onClick={toggleMenu}>Réservation</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-orange-200" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
