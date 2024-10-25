import React from 'react';
// lets see

// Main component for the methodology section
const MethodologySection = () => {
    return (
        <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto items-center">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className="lg:col-span-1">
                    <div className="relative overflow-hidden rounded-tr-3xl h-75 w-full">
                        <img
                            src='/images/methodology.png'
                            alt="Oxford Library"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-orange uppercase tracking-widest text-lg font-bold">Our Methodology</h3>
                    <h2 className="mt-4 text-4xl font-bold text-gray-800">At Oxford Summer Institute</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We believe that true learning happens when students are actively engaged, challenged, and supported. Our
                        educational approach is grounded in the traditions of the University of Oxford, with a focus on small-group
                        tutorials, stimulating lectures, and interactive debates.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                <div className="lg:col-span-1 space-y-2">
                    <h3 className="text-orange text-lg font-bold">1. Tutorials:</h3>
                        <p className="text-gray">
                        Our tutorial system, inspired by the Oxford tradition, allows students to engage with subject experts in
                        small groups, encouraging in-depth discussion and personalized feedback. This method fosters independent
                        thinking and enables students to explore their chosen subjects at a deeper level.
                    </p>
                </div>
                <div className="lg:col-span-1 space-y-2">
                    <h3 className="text-orange text-lg font-bold">2. Lectures:</h3>
                    <p className="text-gray">
                        Our lectures, delivered by distinguished faculty and guest speakers, are designed to provide students with
                        a broad understanding of key topics. These sessions are not just about listening—they invite interaction,
                        questions, and critical engagement.
                    </p>
                </div>
                <div className="lg:col-span-1 space-y-2">
                    <h3 className="text-orange text-lg font-bold">3. Debating:</h3>
                    <p className="text-gray">
                        Debating is an integral part of our methodology, helping students develop the confidence to articulate
                        their thoughts and defend their ideas. These sessions, often held at the iconic Oxford Union, encourage
                        analytical thinking, public speaking, and collaborative problem-solving.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MethodologySection;
