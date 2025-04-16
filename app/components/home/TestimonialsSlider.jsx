'use client'
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const testimonialsQuery = `
  *[_type == "testimonials"][0] {
    testimonialsList[] {
      text,
      name,
      rating,
      image
    }
  }
`;

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(testimonialsQuery);
        if (data?.testimonialsList) {
          const formattedTestimonials = data.testimonialsList.map(item => ({
            text: item.text,
            author: item.name,
            rating: item.rating || 5,
            image: item.image ? urlFor(item.image).url() : ""
          }));
          setTestimonials(formattedTestimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([
          
        ]);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials.length) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 flex items-center justify-center">
        <div className="animate-pulse w-full">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

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
            <div className="bg-white rounded-3xl p-8 shadow-lg h-80">
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
                  disabled={testimonials.length <= 1}
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border-2 border-orange text-orange flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                  disabled={testimonials.length <= 1}
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