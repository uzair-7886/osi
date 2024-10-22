import React from 'react';
import ProgramCard from './ProgramCard'

const ProgramsSection = () => {
  const programs = [
    {
      title: "Junior Oxford Summer Program",
      ageRange: "(13-15)",
      imageUrl: "/images/program1.png" 
    },
    {
      title: "Senior Oxford Summer Program",
      ageRange: "(16-17).",
      imageUrl: "/images/program2.png" 
    },
    {
      title: "University Oxford Summer Program",
      ageRange: "(18+)",
      imageUrl: "/images/program3.png" 
    }
  ];

  return (
    <section className="py-20 px-4 bg-grey bg-opacity-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange text-[22px] md:text-xl font-semibold mb-4">
            A DECADE OF DELIVERING
          </p>
          <h1 className="text-4xl font-semibold text-center mb-6">
          Unmatched Oxford Summer Experience
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              ageRange={program.ageRange}
              imageUrl={program.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;