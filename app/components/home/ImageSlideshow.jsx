import React, { useState, useRef, useEffect } from 'react';
import Marquee from "react-fast-marquee";

const ImageSlideshow = () => {
  const images = [
    '/images/slideshow/ox1.png',
    '/images/slideshow/ox2.png',
    '/images/slideshow/ox3.png',
    '/images/slideshow/ox4.png',
    '/images/slideshow/ox5.png',
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlay(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume autoplay after a short delay
    setTimeout(() => setIsAutoPlay(true), 1000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsAutoPlay(true), 1000);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Touch events support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoPlay(false);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlay(true), 1000);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <p className="text-orange font-medium mb-2">GLIMPSES FROM OUR</p>
        <h2 className="text-3xl font-bold">Summer Programs</h2>
      </div>

      <div
        ref={containerRef}
        className={`overflow-x-auto scroll-smooth ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div ref={marqueeRef} className="whitespace-nowrap">
          {isAutoPlay ? (
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {images.map((image, index) => (
                <div key={index} className="inline-block mx-2">
                  <img
                    src={image}
                    alt={`Summer Program ${index + 1}`}
                    className="md:w-[340px] md:h-[340px] md:rounded-[30px] rounded-2xl object-cover sm:w-[280px] sm:h-[280px] w-[150px] h-[150px]"
                    draggable="false"
                  />
                </div>
              ))}
            </Marquee>
          ) : (
            <div className="flex">
              {images.map((image, index) => (
                <div key={index} className="mx-2 flex-shrink-0">
                  <img
                    src={image}
                    alt={`Summer Program ${index + 1}`}
                    className="md:w-[340px] md:h-[340px] md:rounded-[30px] rounded-2xl object-cover sm:w-[280px] sm:h-[280px] w-[150px] h-[150px]"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;