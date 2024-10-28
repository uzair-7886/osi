import React from 'react';
import DeanCard from './DeanCard';
import { urlFor } from '@/sanity/lib/image'; // Import the image URL builder

const DeansSection = ({ data }) => {
    if (!data) {
        return null; // or display a loading state or an error message
    }

    // Destructure data for easier access
    const { sub_heading, description, images } = data;

    return (
        <section className="relative w-full py-16 md:py-24">
            <div className="text-center mb-12 px-16 md:px-24">
                <h2 className="text-orange uppercase tracking-widest text-lg font-bold">Our Team</h2>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{sub_heading}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 px-16">
                {images.map((image, index) => (
                    <DeanCard
                        key={index}
                        name={image.name}
                        description={image.description}
                        image={urlFor(image.image).url()}
                    />
                ))}
            </div>
        </section>
    );
};

export default DeansSection;
