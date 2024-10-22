import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-tr-3xl h-60">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="text-white text-[32px] font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
