import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Star, Calendar } from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home: React.FC = () => {
  return (
    <div className="bg-orange-50">
      <section className="hero bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue chez Coiffure Élégance</h1>
          <p className="text-xl mb-8">Votre expert en coiffure à Abidjan</p>
          <Link to="/reservation" className="bg-white text-orange-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-100 transition duration-300">Réserver maintenant</Link>
        </div>
      </section>

      <section className="about py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Coiffeur" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
              <p className="mb-4">Je suis Marie Koné, coiffeuse passionnée avec plus de 10 ans d'expérience. Spécialisée dans les coiffures africaines modernes et traditionnelles, je m'engage à vous offrir un service personnalisé et de qualité.</p>
              <ul className="mb-4">
                <li className="flex items-center mb-2"><Scissors className="mr-2 text-orange-600" size={20} /> Expert en tresses et tissages</li>
                <li className="flex items-center mb-2"><Star className="mr-2 text-orange-600" size={20} /> Utilisation de produits de qualité</li>
                <li className="flex items-center"><Calendar className="mr-2 text-orange-600" size={20} /> Flexibilité des rendez-vous</li>
              </ul>
              <Link to="/services" className="bg-orange-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300">Voir mes services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent mes clients</h2>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="cta bg-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Prêt pour une nouvelle coiffure ?</h2>
          <p className="text-xl mb-8 text-white">Réservez votre rendez-vous dès maintenant et transformez votre look !</p>
          <Link to="/reservation" className="bg-white text-orange-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-100 transition duration-300">Réserver un rendez-vous</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;