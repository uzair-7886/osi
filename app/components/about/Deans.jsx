import React from 'react';
import DeanCard from './DeanCard';

const DeansSection = () => {
    const deans = [
        {
            name: 'Sarah Mitchell',
            description: 'Founder and CEO',
            image: '/images/team3.png', // Replace with actual image path
        },
        {
            name: 'Emily Thompson',
            description: 'Cheif Operating Officer',
            image: '/images/team3.png', // Replace with actual image path
        },
        {
            name: 'John Davis',
            description: 'Cheif Financial Officer',
            image: '/images/team3.png', // Replace with actual image path
        },
        {
            name: 'Rachel Adams',
            description: 'Cheif Marketing Officer',
            image: '/images/team3.png', // Replace with actual image path
        },
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-orange uppercase tracking-widest text-lg font-bold py-4">Our Team</h2>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Deans</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis adipisci blanditiis, magni cupiditate ducimus eveniet? Quaerat, consequatur quos alias debitis suscipit nemo in omnis rem sapiente. Odio, exercitationem cumque.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 px-16">
                {deans.map((Dean, index) => (
                    <DeanCard
                        key={index}
                        name={Dean.name}
                        description={Dean.description}
                        image={Dean.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default DeansSection;
