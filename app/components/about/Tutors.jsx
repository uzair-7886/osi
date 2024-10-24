import React from 'react';
import TutorCard from './TutorCard';

const TutorsSection = () => {
    const tutors = [
        {
            name: 'Tutor Name',
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Consectetur nascetur aptent donec porta posuere mattis iaculis. Nullam himenaeos facilisis interdum tempus eleifend.',
            image: '/images/team3.png', // Replace with actual image path
        },
        {
            name: 'Tutor Name',
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Consectetur nascetur aptent donec porta posuere mattis iaculis. Nullam himenaeos facilisis interdum tempus eleifend.',
            image: '/images/team3.png', // Replace with actual image path
        },
        {
            name: 'Tutor Name',
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Consectetur nascetur aptent donec porta posuere mattis iaculis. Nullam himenaeos facilisis interdum tempus eleifend.',
            image: '/images/team3.png', // Replace with actual image path
        },
        {
            name: 'Tutor Name',
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Consectetur nascetur aptent donec porta posuere mattis iaculis. Nullam himenaeos facilisis interdum tempus eleifend.',
            image: '/images/team3.png', // Replace with actual image path
        },
    ];

    return (
        <section className="bg-gray-200 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-orange uppercase tracking-widest text-lg font-bold">Why OCI?</h2>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Tutors</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    The Oxford Summer Institute stands out for its unique blend of academic rigor, cultural immersion, and life-changing experiences.
                    Here's why students choose OSI:
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 px-16">
                {tutors.map((tutor, index) => (
                    <TutorCard
                        key={index}
                        name={tutor.name}
                        description={tutor.description}
                        image={tutor.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default TutorsSection;
