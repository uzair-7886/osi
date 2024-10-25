'use client'
import React from 'react';
// lets see

const DownloadBrochureHeroSection = () => {
    return (
        <section className="relative w-full py-16 px-4"> {/* Reduced padding */}
            <div className="max-w-7xl mx-auto md:flex-row items-center">
                <h2 className='text-center text-orange text-lg font-semibold'>OXFORD CENTRE FOR LEADERSHIP</h2>
                <h1 className="text-center mb-6 text-[26px] font-semibold text-gray-900">
                    Oxford Summer Courses
                </h1>

                <p className="text-base text-black mx-auto">
                    At the <span className="text-orange font-semibold">Oxford Summer Institute (OSI)</span>, we are dedicated to providing an immersive academic and cultural experience in one of the world's most prestigious educational environments. For over a decade, our non-profit institution has brought together students from across the globe to study in the hallowed halls of the University of Oxford. Our program is accredited by the <span className="text-orange font-semibold">British Accreditation Council (BAC)</span> as a short and further education provider, ensuring that students receive a high standard of learning and support.
                </p>
                <p className="text-base text-black mx-auto">
                    While OSI is not an official part of the University of Oxford, we proudly partner with its constituent colleges and departments to give our students unparalleled access to the Oxford experience. All of our tutors, lecturers, deans, and other staff members are associated with the University of Oxford, providing students with the opportunity to learn from current and former Oxford academics.
                </p>
                <p className="text-base text-black mx-auto">
                    Our program is designed to inspire the next generation of leaders, thinkers, and innovators by combining rigorous academics with enriching extracurricular activities. At OSI, students aged 15 to 25 will have the chance to explore subjects ranging from STEM to the humanities, all while experiencing the traditions, values, and spirit of this historic institution.
                </p>
                <p className="text-base text-black mx-auto">
                    Our curriculum is crafted to challenge and engage students, helping them develop critical thinking, debating, and communication skills. Whether delving into philosophy, tackling STEM challenges, or exploring the arts, students are guided by world-class instructors in an environment that fosters curiosity and collaboration.
                </p>
                <p className="text-base text-black mx-auto">
                    The <span className="text-orange font-semibold">Oxford Summer Institute</span> experience is not just about academics; it’s about creating lasting memories, forging lifelong friendships, and preparing students for future academic and career success.
                </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 -z-10"></div>
        </section>
    );
};


export default DownloadBrochureHeroSection;