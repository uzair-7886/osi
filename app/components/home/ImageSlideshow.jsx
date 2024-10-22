import Marquee from "react-fast-marquee";
import React from 'react';

const ImageSlideshow = () => {
  const images = [
    '/images/slideshow/ox1.png',
    '/images/slideshow/ox2.png',
    '/images/slideshow/ox3.png',
    '/images/slideshow/ox4.png',
    '/images/slideshow/ox5.png',

  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <p className="text-orange font-medium mb-2">GLIMPSES FROM OUR</p>
        <h2 className="text-3xl font-bold">Summer Programs</h2>
      </div>

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {images.map((image, index) => (
          <div key={index} className="mx-2">
            <img
              src={image}
              alt={`Summer Program ${index + 1}`}
              className="md:w-[340px] md:h-[340px] md:rounded-[30px] rounded-2xl object-cover sm:w-[280px] sm:h-[280px] w-[150px] h-[150px]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageSlideshow;