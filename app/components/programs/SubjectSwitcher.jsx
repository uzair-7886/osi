'use client';
import React, { useState, useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';

const SubjectsSwitcher = ({ initialData, initialSubject }) => {
  const [activeSubject, setActiveSubject] = useState(initialSubject || initialData[0]);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const ageOptions = ['13-15', '16-18', '18+']; // Age groups for dropdown

  useEffect(() => {
    // Check for `age` query param in URL and set the dropdown accordingly
    const ageParam = searchParams.get('age');
    if (ageParam && ageOptions.includes(ageParam)) {
      setSelectedAge(ageParam);
    }
  }, [searchParams]);

  const handleAgeChange = (age) => {
    setSelectedAge(age);
    // Update the URL query parameters
    // router.push(`/programs?age=${encodeURIComponent(age)}`);
  };

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
      const newPosition =
        direction === 'right' ? scrollPosition + scrollAmount : scrollPosition - scrollAmount;
      nav.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const filteredCourses = activeSubject.courses?.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="bg-gray-100 border-b relative">
        <div className="container mx-auto relative flex justify-center items-center">
          {/* Subject Navigation */}
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
            {/* Age Dropdown */}
            <select
              value={selectedAge}
              onChange={(e) => handleAgeChange(e.target.value)}
              className="bg-gray-100 focus:outline-none px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 text-[#2B2B2B]"
            >
              <option value="" disabled>
                Ages
              </option>
              {ageOptions.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
            {initialData.map((subject) => (
              <button
                key={subject.name}
                onClick={() => {
                  setActiveSubject(subject);
                  setExpandedCourse(null);
                  setSearchQuery('');
                }}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium hover:text-orange whitespace-nowrap transition-colors flex-shrink-0 ${activeSubject.name === subject.name
                  ? 'text-orange border-b-2 border-orange'
                  : 'text-[#2B2B2B]'
                  }`}
              >
                {subject.name.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Subject Details */}
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 transition-all duration-300">
              {activeSubject.name}
            </h2>
            <p className="text-sm sm:text-base text-grey leading-relaxed mb-6 transition-all duration-300">
              {activeSubject.description}
            </p>
          </div>

          <div className="flex md:flex-row flex-col-reverse justify-between items-center mb-8 gap-y-2">
            <button className="text-orange font-medium text-sm sm:text-base hover:scale-105 transition-transform duration-300">
              SEE COURSE OFFERINGS
            </button>
            <div className="relative flex items-center w-[300px]">
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-4 pr-12 rounded-l-lg bg-[#12243E] bg-opacity-10 border-none focus:outline-none text-sm"
                />
                <button className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center bg-[#1e3a8a] rounded-r-lg">
                  <img
                    src="/svgs/search.svg"
                    alt="Search"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            id="expanded-course"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCourse ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            {expandedCourse && (
              <div className="relative bg-white rounded-lg p-4 sm:p-6 mb-8">
                <div className="animate-fadeIn">
                  <img
                    src={urlFor(expandedCourse.image)}
                    alt=""
                    className="w-full rounded-tr-[35px] h-[180px] sm:h-[240px] object-cover shadow-lg mb-4"
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
            {filteredCourses?.map((course) => (
              <div
                key={course.name}
                onClick={() => handleCourseClick(course)}
                className={`transform transition-all duration-300 hover:scale-[1.02] ${expandedCourse?.name === course.name ? 'rounded-tr-2xl' : ''
                  }`}
              >
                <div className="cursor-pointer">
                  {course.image && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-tr-[35px]">
                      <img
                        src={urlFor(course.image)
                          .width(340)
                          .height(240)
                          .quality(90)
                          .url()}
                        alt={course.name}
                        className={`w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 ${expandedCourse?.name === course.name ? 'rounded-tr-2xl' : ''
                          }`}
                      />
                    </div>
                  )}
                  <div className="py-3 sm:py-4 bg-white rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-medium text-orange">{course.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses?.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No courses found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectsSwitcher;
