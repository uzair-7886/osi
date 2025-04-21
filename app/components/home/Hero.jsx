"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

const Hero = ({ initialData }) => {
  const backgroundImageUrl = initialData?.image
    ? urlFor(initialData.image).url()
    : "";

  return (
    <div className="relative h-screen w-full">
       <div
       className="absolute inset-0 w-full h-full bg-cover bg-top"      style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />


      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            {initialData && (
              <>
                <p className="text-orange font-bold text-[26px] sm:text-xl mb-2">
                  {initialData.text.split(/\s+/).slice(0, 2).join(" ")}
                </p>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                  {initialData.text.split(/\s+/).slice(2).join(" ")}
                </h1>
                <p className="text-white text-xl sm:text-2xl mb-8">
                  {initialData.date}
                </p>
                <button onClick={() => (window.location.href = "/application")} className="bg-darkblue text-white px-8 py-3 rounded-full text-lg font-semibold">
                  {initialData.buttonText}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;