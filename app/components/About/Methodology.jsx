"use client";

import React from 'react';
import { urlFor } from '@/sanity/lib/image'; // Ensure the correct path
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const MethodologySection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "descriptions" && lower(heading) == "our methodology"][0]{ 
        ...,
        images[]->{
          name,
          image
        },
        methodologies[]->{
          title,
          description
        }
      }`)
            .then((methodologyData) => {
                setData(methodologyData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!data) {
        return;
    }

    const { sub_heading, description, methodologies, images } = data;

    // Check if images array exists and has at least one image
    const hasImages = images && images.length > 0 && images[0].image;

    return (
        <div className="relative w-full py-8 px-6 md:py-24 md:px-24">
            <div className="max-w-7xl mx-auto items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="lg:col-span-1">
                        <div className="relative overflow-hidden rounded-tr-3xl h-75 w-full">
                            {hasImages ? (
                                <img
                                    src={urlFor(images[0].image).url()}
                                    alt={images[0].name}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                // Optionally, render a placeholder image or leave it empty
                                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500">No Image Available</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:col-span-1 space-y-6">
                        <h3 className="text-orange uppercase tracking-widest text-lg font-bold">Our Methodology</h3>
                        <h2 className="mt-4 text-4xl font-bold text-gray-800">{sub_heading}</h2>
                        <p className="mt-4 text-lg text-gray-600">{description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    {methodologies &&
                        methodologies.map((methodology, index) => (
                            <div key={index} className="lg:col-span-1 space-y-2">
                                <h3 className="text-orange text-lg font-bold">
                                    {index + 1}. {methodology.title}
                                </h3>
                                <p className="text-grey text-justify">{methodology.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default MethodologySection;
