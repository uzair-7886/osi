import React, { useState, useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

const useScrollPause = () => {
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsPaused(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsPaused(false), 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return isPaused;
};

const ImageSlideshow = () => {
  const images = [
    '/images/slideshow/ox1.png',
    '/images/slideshow/ox2.png',
    '/images/slideshow/ox3.png',
    '/images/slideshow/ox4.png',
    '/images/slideshow/ox5.png',
  ];

  const isPaused = useScrollPause();
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <p className="text-orange font-medium mb-2">GLIMPSES FROM OUR</p>
        <h2 className="text-3xl font-bold">Summer Programs</h2>
      </div>

      <div 
        ref={scrollContainerRef}
        className={`overflow-x-auto ${isPaused ? 'cursor-grab active:cursor-grabbing' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          play={!isPaused}
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
    </div>
  );
};

export default ImageSlideshow;