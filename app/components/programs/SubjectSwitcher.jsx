'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; 
import { client } from '@/sanity/lib/client';

const subjectjsquery = `*[_type == "subject"] {
       name,
       description,
       "courses": courses[]-> {
         name,
         description,
         image
       }
     }`;

const SubjectsSwitcher = () => {
  const [subjects, setSubjects] = useState([]);
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setExpandedCourse(expandedCourse?.name === course.name ? null : course);
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await client.fetch(subjectjsquery);
        if (data) {
          setSubjects(data);
          setActiveSubject(data[0]);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setSubjects([]);
      }
    };

    fetchSubjects();
  }, []);

  if (!subjects.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="text-center mb-12">
            <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-tr-lg">
                  <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                  <div className="p-4 bg-white rounded-2xl">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
          {expandedCourse&&
            <div className='py-5'>
              <img src={urlFor(expandedCourse.image)} alt="" className='w-full rounded-tr-2xl h-[240px] object-cover shadow-lg'/>
              <h3 className="text-xl font-medium text-orange pt-5">
                {expandedCourse.name}
              </h3>
              <p className="mt-2 text-gray-600">
                        {expandedCourse.description}
                      </p>
            </div>
          }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeSubject.courses?.map((course) => (
              <div
                key={course.name}
                className={`}`}
                onClick={() => handleCourseClick(course)}
              >
                <div className="">
                  <div className={`cursor-pointer`}>
                    {course.image && (
                      <img
                        src={urlFor(course.image)
                          .width(340)
                          .height(280)
                          .quality(90)
                          .url()}
                        alt={course.name}
                        fill
                        className="object-cover rounded-tr-2xl shadow-lg"
                      />
                    )}
                  </div>
                  <div className="py-4 bg-white rounded-2xl">
                    <h3 className="text-xl font-medium text-orange">
                      {course.name}
                    </h3>
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
