"use client";

import React from 'react';
import TutorCard from './TutorCard';
import { urlFor } from '@/sanity/lib/image'; // Import the image URL builder
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const TutorsSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "descriptions" && heading == "Why OCI?"][0]{
        ...,
        images[]->{
          name,
          description,
          image
        }
      }`)
            .then((tutorsData) => {
                setData(tutorsData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!data) {
        return;
    }

    // Destructure data for easier access
    const { sub_heading, description, images } = data;

    return (
        <section className="bg-gray-200 relative w-full py-16 md:py-24">
            <div className="text-center mb-12 px-16 md:px-24">
                <h2 className="text-orange uppercase tracking-widest text-lg font-bold">Why OCI?</h2>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{sub_heading}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 px-16">
                {images && images.length > 0 ? (
                    images.map((image, index) => (
                        <TutorCard
                            key={index}
                            name={image.name}
                            description={image.description}
                            image={urlFor(image.image).url()}
                        />
                    ))
                ) : (
                    <p>No tutors available.</p>
                )}
            </div>
        </section>
    );
};

export default TutorsSection;
