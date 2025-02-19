import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Fatou Diallo',
    service: 'Coiffure',
    rating: 5,
    comment: "J'ai adoré ma nouvelle coiffure ! Le service était rapide et professionnel.",
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Olivier Koffi',
    service: 'Soin du visage',
    rating: 4,
    comment: "Le soin du visage était très relaxant. Ma peau est rayonnante !",
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    name: 'Mariam Bamba',
    service: 'Manucure',
    rating: 5,
    comment: "Le nail art est magnifique ! Je recommande vivement ce service.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mx-2">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h2 className="font-semibold">{testimonial.name}</h2>
                <p className="text-gray-600">{testimonial.service}</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                  size={16}
                />
              ))}
            </div>
            <p className="text-gray-700">{testimonial.comment}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;