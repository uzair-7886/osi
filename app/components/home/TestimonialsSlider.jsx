import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ut quam ut dapibus. Pellentesque tortor ante, consectetur eget dolor in, luctus luctus purus.",
      author: "Barbara D. Smith",
      rating: 4,
      image: "/images/person.png"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ut quam ut dapibus. Pellentesque tortor ante, consectetur eget dolor in, luctus luctus purus.",
        author: "Michael R. Johnson",
      rating: 5,
      image: "/images/person.png"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ut quam ut dapibus. Pellentesque tortor ante, consectetur eget dolor in, luctus luctus purus.",
        author: "Sarah K. Williams",
      rating: 2,
      image: "/images/person.png"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ut quam ut dapibus. Pellentesque tortor ante, consectetur eget dolor in, luctus luctus purus.",
      author: "Michael R. Johnson",
    rating: 5,
    image: "/images/person.png"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ut quam ut dapibus. Pellentesque tortor ante, consectetur eget dolor in, luctus luctus purus.",
    author: "Michael R. Johnson",
  rating: 5,
  image: "/images/person.png"
},
{
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ut quam ut dapibus. Pellentesque tortor ante, consectetur eget dolor in, luctus luctus purus.",
  author: "Michael R. Johnson",
rating: 5,
image: "/images/person.png"
},
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='bg-grey bg-opacity-10'>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-orange font-medium mb-2">TESTIMONIALS</h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-0">
              Look What Our<br />Participants Say!
            </h2>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <img src="/svgs/q.svg" alt="quotes" className='mb-6'/>
              <p className="text-gray-700 text-lg mb-8">
                {testimonials[currentSlide].text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentSlide].image} 
                    alt={testimonials[currentSlide].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-semibold text-gray-900">
                    {testimonials[currentSlide].author}
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[currentSlide].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-4">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-2 border-orange text-orange flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border-2 border-orange text-orange flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-8 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-orange' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;