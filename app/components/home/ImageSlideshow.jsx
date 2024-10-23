import React, { useState, useRef, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const slideshowQuery = `
  *[_type == "imageSlideshow"][0] {
    images
  }
`;

const ImageSlideshow = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await client.fetch(slideshowQuery);
        if (data?.images) {
          const formattedImages = data.images.map(image => urlFor(image).url());
          setImages(formattedImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      }
    };

    fetchImages();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlay(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume autoplay after a short delay
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsAutoPlay(true), 5000);
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
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  if (!images.length) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="text-center mb-8">
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="flex space-x-4 overflow-hidden">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="bg-gray-200 rounded-[30px] w-[340px] h-[340px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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