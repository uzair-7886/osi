import React, { useState } from 'react';

const ProgramMenu = ({ isMobile = false }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = {
    Programme: {
      title: "Programme",
      description: "Lorem Ipsum",
      fields: [
        "Physical Sciences",
        "Artificial Intelligence",
        "Leadership",
        "Social Sciences",
        "Entrepreneurship",
        "Humanities"
      ]
    },
    Facilities: {
      title: "Facilities",
      description: "Lorem Ipsum",
      fields: [
        "Physical Sciences",
        "Artificial Intelligence",
        "Leadership",
        "Social Sciences",
        "Entrepreneurship",
        "Humanities"
      ]
    },
    Activites: {
      title: "Activites",
      description: "Lorem Ipsum",
      fields: [
        "Physical Sciences",
        "Artificial Intelligence",
        "Leadership",
        "Social Sciences",
        "Entrepreneurship",
        "Humanities"
      ]
    },
    Ages: {
      title: "Ages",
      description: "Lorem Ipsum",
      fields: [
        "13-15",
        "16-18",
        "18+",
      ]
    }
  };

  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-lg p-6 cursor-pointer";

  return (
    <div className={baseClasses}>
      <div className={`flex ${isMobile ? 'flex-col' : ''} gap-8`}>
        {/* Left Menu */}
        <div className={`${isMobile ? 'w-full' : 'w-1/2'} space-y-4`}>
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              className="hover:bg-[#003180] hover:bg-opacity-10  shadow-sm rounded-tr-[20px] transition-colors duration-200"
              onMouseEnter={() => setHoveredSection(key)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-medium">{section.title}</div>
                    <div className="text-orange">{section.description}</div>
                  </div>
                  <div className="grid place-items-center w-8 h-8 text-orange">
                  <img
                  src="/svgs/widgets.svg"
                  alt="Widget Icon"
                  className="w-6 h-6"
                />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Menu */}
        <div className={`${isMobile ? 'w-full' : 'w-1/2'}`}>
          <div className="space-y-4">
            {hoveredSection && sections[hoveredSection].fields.map((field, index) => (
              <div key={index} className="border-b border-orange pb-4">
                <div className="text-base">{field}</div>
              </div>
            ))}
            <div className="flex items-center gap-2 text-orange pt-4">
              <div className="grid place-items-center w-8 h-8 rounded">
              <img
                  src="/svgs/widgets.svg"
                  alt="Widget Icon"
                  className="w-6 h-6"
                />
              </div>
              <a href="programs" className="font-medium">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramMenu;