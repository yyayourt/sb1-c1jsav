import React from 'react';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Les tendances coiffure de l'été à Abidjan",
      excerpt: "Découvrez les styles de coiffure qui feront sensation cet été dans les rues d'Abidjan.",
      date: "2024-05-15",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Astuces beauté naturelles avec des ingrédients locaux",
      excerpt: "Apprenez à utiliser les ingrédients locaux pour créer vos propres soins de beauté à la maison.",
      date: "2024-05-10",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Les meilleurs salons de beauté d'Abidjan",
      excerpt: "Notre sélection des salons de beauté incontournables à Abidjan pour tous vos besoins esthétiques.",
      date: "2024-05-05",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Beauté</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;