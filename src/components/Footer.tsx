import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Coiffure Élégance</h3>
            <p>Votre expert en coiffure à Abidjan</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Liens rapides</h4>
            <ul>
              <li><Link to="/services" className="hover:text-orange-200">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-200">Galerie</Link></li>
              <li><Link to="/reservation" className="hover:text-orange-200">Réservation</Link></li>
              <li><Link to="/contact" className="hover:text-orange-200">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Suivez-moi</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-200"><Facebook /></a>
              <a href="#" className="hover:text-orange-200"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Coiffure Élégance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;