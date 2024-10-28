'use client'
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProgramCard from './ProgramCard';

const programQuery = `*[_type == "program"][0] {
  sectionTitle,
  subtitle,
  programs[] {
    title,
    ageRange,
    image
  }
}`;

const ProgramsSection = () => {
  const [programData, setProgramData] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await client.fetch(programQuery);
        setProgramData(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
        setProgramData(null);
      }
    };

    fetchPrograms();
  }, []);

  if (!programData) {
    return (
      <section className="py-20 px-4 bg-grey bg-opacity-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-grey bg-opacity-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange text-[22px] md:text-xl font-semibold mb-4">
            {programData.subtitle}
          </p>
          <h1 className="text-4xl font-semibold text-center mb-6">
            {programData.sectionTitle}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {programData.programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              ageRange={program.ageRange}
              imageUrl={urlFor(program.image).url()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;