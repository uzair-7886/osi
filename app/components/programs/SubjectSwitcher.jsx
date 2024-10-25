'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; 

const SubjectsSwitcher = ({ subjects }) => {
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setExpandedCourse(expandedCourse?.name === course.name ? null : course);
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto">
          <nav className="flex overflow-x-auto">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => {
                  setActiveSubject(subject);
                  setExpandedCourse(null);
                }}
                className={`px-6 py-4 text-sm font-medium hover:text-orange whitespace-nowrap transition-colors
                  ${
                    activeSubject.name === subject.name
                      ? 'text-orange border-b-2 border-orange'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {subject.name.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            {activeSubject.name}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            {activeSubject.description}
          </p>

          <div className="text-center mb-12">
            <button className="text-orange font-medium">
              SEE COURSE OFFERINGS
            </button>
          </div>
            {console.log(activeSubject)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSubject.courses?.map((course) => (
              <div
                key={course.name}
                className={`transition-all duration-300 cursor-pointer
                  ${expandedCourse?.name === course.name ? 'col-span-full' : ''}`}
                onClick={() => handleCourseClick(course)}
              >
                <div className="relative overflow-hidden rounded-tr-lg">
                  <div className={`relative ${
                    expandedCourse?.name === course.name ? 'h-80' : 'h-48'
                  } transition-all duration-300`}>
                    {course.image && (
                      <img
                        src={urlFor(course.image)
                          .width(800)
                          .height(expandedCourse?.name === course.name ? 600 : 400)
                          .quality(90)
                          .url()}
                        alt={course.name}
                        fill
                        className="object-cover"
                        priority={expandedCourse?.name === course.name}
                      />
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-medium text-orange">
                      {course.name}
                    </h3>
                    {expandedCourse?.name === course.name && (
                      <p className="mt-2 text-gray-600">
                        {course.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsSwitcher;