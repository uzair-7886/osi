"use client";

import React from 'react';
import { urlFor } from '@/sanity/lib/image'; // Ensure the correct path
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const OurTeam = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "descriptions" && heading == "OUR TEAM"][0]{
        ...,
        images[]->{
          name,
          image
        }
      }`)
            .then((teamData) => {
                setData(teamData);
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
        <div className="bg-gray-200 relative w-full py-16 px-16 md:py-24 md:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-6/12">
                    <h2 className="text-orange text-lg font-semibold uppercase mb-2">Our Team</h2>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">{sub_heading}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
                </div>

                {/* Image Section */}
                <div className="md:w-5/12 pt-12 flex flex-col md:flex-row items-center md:items-start justify-between md:ml-10">
                    {/* Render images dynamically */}
                    {images && images.length > 0 && (
                        <>
                            {/* Assuming you have specific layouts for each image, you can map accordingly */}
                            {/* For this example, we'll display the images in the order they appear */}

                            {/* First Image (Large Image on the Left) */}
                            <div className="bg-orange-500 p-4 rounded-3xl flex justify-center md:self-end w-full md:w-[300px] h-[500px]">
                                <img
                                    src={urlFor(images[0].image).url()}
                                    alt={images[0].name}
                                    className="rounded-3xl object-cover w-full h-full"
                                />
                            </div>

                            {/* Smaller Images on the Right */}
                            <div className="flex flex-col space-y-6 md:-mt-20">
                                {/* Second Image */}
                                {images[1] && (
                                    <div className="bg-blue-600 rounded-3xl flex justify-center md:self-end w-full md:w-[215px] h-[275px]">
                                        <img
                                            src={urlFor(images[1].image).url()}
                                            alt={images[1].name}
                                            className="rounded-3xl object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                                {/* Third Image */}
                                {images[2] && (
                                    <div className="bg-lime-500 rounded-3xl flex justify-center md:self-end w-full md:w-[215px] h-[175px]">
                                        <img
                                            src={urlFor(images[2].image).url()}
                                            alt={images[2].name}
                                            className="rounded-3xl object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
