import React from 'react';
// lets see

const OurTeam = () => {
    return (
        <div className="bg-gray-200 py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-6/12">
                    <h2 className="text-orange text-lg font-semibold uppercase mb-2">Our Team</h2>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        The Oxford Summer Institute is led by a team with over ten years of experience in organizing premier summer programs
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our leadership is made up of current and former academics from the University of Oxford, who bring a wealth of knowledge, dedication, and passion for teaching to our program. Each member of our team is committed to fostering an environment where students can thrive academically and personally.
                        <br />
                        Our teaching staff includes professors, lecturers, and researchers from a variety of fields who have taught at Oxford or other leading institutions. Their diverse expertise ensures that students receive top-tier education in a wide range of disciplines, whether they are studying the humanities, sciences, social sciences, or business. Our program directors and coordinators work tirelessly behind the scenes to ensure that every aspect of the program runs smoothly, from organizing activities to providing individual student support.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-5/12 pt-12 flex flex-col md:flex-row items-center md:items-start justify-between md:ml-10">
                    {/* Large Image on the Left */}
                    <div className="bg-orange-500 p-4 rounded-3xl flex justify-center md:self-end w-full md:w-[300px] h-[500px]">
                        <img
                            src="/images/team1.png"
                            alt="Team Member 1"
                            className="rounded-3xl object-cover w-full h-full"
                        />
                    </div>

                    {/* Smaller Images on the Right */}
                    <div className="flex flex-col space-y-6 md:-mt-20">
                        <div className="bg-blue-600 rounded-3xl flex justify-center md:self-end w-full md:w-[215px] h-[275px]">
                            <img
                                src="/images/team2.png"
                                alt="Team Member 2"
                                className="rounded-3xl object-cover w-full h-full"
                            />
                        </div>
                        <div className="bg-lime-500 rounded-3xl flex justify-center md:self-end w-full md:w-[215px] h-[175px]">
                            <img
                                src="/images/team3.png"
                                alt="Team Member 3"
                                className="rounded-3xl object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;