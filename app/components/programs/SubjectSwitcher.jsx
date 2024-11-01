'use client'
import React, { useState, useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);

  const handleCourseClick = (course) => {
    setIsExpanding(true);
    if (expandedCourse?.name === course.name) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(course);
      setTimeout(() => {
        const expandedView = document.getElementById('expanded-course');
        expandedView?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const scrollNav = (direction) => {
    const nav = document.querySelector('.subjects-nav');
    const scrollAmount = 200;
    if (nav) {
      const newPosition = direction === 'right' 
        ? scrollPosition + scrollAmount 
        : scrollPosition - scrollAmount;
      nav.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
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
      <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:py-12">
        <div className="animate-pulse">
          <div className="text-center mb-8 sm:mb-12">
            <div className="h-4 sm:h-6 bg-gray-200 rounded w-1/3 sm:w-1/4 mx-auto mb-2"></div>
            <div className="h-8 sm:h-10 bg-gray-200 rounded w-2/3 sm:w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="transition-all duration-300">
                <div className="relative overflow-hidden rounded-tr-lg">
                  <div className="h-40 sm:h-48 bg-gray-200 rounded-md mb-4"></div>
                  <div className="p-3 sm:p-4 bg-white rounded-2xl">
                    <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2 mb-3 sm:mb-4"></div>
                    <div className="h-12 sm:h-16 bg-gray-200 rounded"></div>
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
      <div className="bg-gray-100 border-b relative">
        <div className="container mx-auto relative flex justify-center items-center">
          <button 
            onClick={() => scrollNav('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollNav('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <nav className="subjects-nav flex overflow-x-auto scrollbar-hide relative">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => {
                  setActiveSubject(subject);
                  setExpandedCourse(null);
                }}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium hover:text-orange whitespace-nowrap transition-colors flex-shrink-0
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

      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 transition-all duration-300">
            {activeSubject.name}
          </h2>
          <p className="text-sm sm:text-base text-grey leading-relaxed mb-6 sm:mb-8 transition-all duration-300">
            {activeSubject.description}
          </p>
          <div className="text-center mb-8 sm:mb-12">
            <button className="text-orange font-medium text-sm sm:text-base hover:scale-105 transition-transform duration-300">
              SEE COURSE OFFERINGS
            </button>
          </div>
          
          <div 
            id="expanded-course"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedCourse ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {expandedCourse && (
              <div className="relative bg-white rounded-lg p-4 sm:p-6 mb-8">
                <button
                  onClick={() => setExpandedCourse(null)}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                </button>
                <div className="animate-fadeIn">
                  <img 
                    src={urlFor(expandedCourse.image)} 
                    alt="" 
                    className="w-full rounded-tr-2xl h-[180px] sm:h-[240px] object-cover shadow-lg mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-medium text-orange">
                    {expandedCourse.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    {expandedCourse.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeSubject.courses?.map((course) => (
              <div
                key={course.name}
                onClick={() => handleCourseClick(course)}
                className={`transform transition-all duration-300 hover:scale-[1.02] ${
                  expandedCourse?.name === course.name ? 'rounded-tr-2xl' : ''
                }`}
              >
                <div className="cursor-pointer">
                  {course.image && (
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-tr-2xl`}>
                      <img
                        src={urlFor(course.image)
                          .width(340)
                          .height(280)
                          .quality(90)
                          .url()}
                        alt={course.name}
                        className={`w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 ${
                          expandedCourse?.name === course.name ? 'rounded-tr-2xl' : ''
                        }`}
                      />
                    </div>
                  )}
                  <div className="py-3 sm:py-4 bg-white rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-medium text-orange">
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