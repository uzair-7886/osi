import React from 'react';
import { urlFor } from '@/sanity/lib/image';

function FacilitySection({activities}) {
  // Keep track of activities that have been rendered
  const renderedActivities = new Set();

  return (
    <div className="w-full text-grey">
      {activities.map((activity, index) => {
        // Skip activities that have already been rendered
        if (renderedActivities.has(activity)) return null;
        
        // Mark the current activity as rendered
        renderedActivities.add(activity);

        // Normal layout for activities at index 0, 2, 4, etc.
        if (index % 4 === 0 || index % 4 === 3) {
          return (
            <div 
              key={index}
              className={`w-full py-12 px-4 sm:px-6 lg:px-8 `}
            >
              <div className="max-w-6xl mx-auto">
                <div className={`flex flex-col gap-8 lg:flex-row items-center`}>
                  <div className="w-full lg:w-1/2 md:space-y-8 space-y-4 px-4">
                    {activity.subtitle && (
                      <h3 className="text-orange uppercase tracking-wide font-semibold text-sm md:text-[22px]">
                        {activity.name}
                      </h3>
                    )}
                    <h3 className="text-2xl md:text-[40px] font-semibold text-black">
                      {activity.subtitle}
                    </h3>
                    <p className={`leading-relaxed ${index % 4 === 0 ? 'text-grey' : 'text-black'}`}>
                      {activity.description}
                    </p>
                  </div>
                  
                  <div className="w-full lg:w-1/2 px-4">
                    {activity.image && (
                      <div className="rounded-tr-[40px] h-[200px] md:w-[562px] md:h-[312px] overflow-hidden shadow-lg">
                        <img
                          src={urlFor(activity.image).url()}
                          alt={activity.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        // Two-column layout for activities at index 1 and 2
        if (index % 4 === 1) {
          const nextActivity = activities[index + 1];
          
          // Mark the next activity as rendered to prevent duplicate
          if (nextActivity) {
            renderedActivities.add(nextActivity);
          }

          return (
            <div 
              key={index}
              className="w-full py-12 px-6 sm:px-6 lg:px-8 bg-[#12243E] bg-opacity-10"
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Activity */}
                  <div className="space-y-8">
                    {activity.image && (
                      <div className="rounded-tr-[40px] h-[200px] md:h-[312px] overflow-hidden shadow-lg">
                        <img
                          src={urlFor(activity.image).url()}
                          alt={activity.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-4">
                      {activity.subtitle && (
                        <h3 className="text-orange uppercase tracking-wide font-semibold text-sm md:text-[22px]">
                          {activity.name}
                        </h3>
                      )}
                      <h3 className="text-2xl md:text-[40px] font-semibold text-black">
                        {activity.subtitle}
                      </h3>
                      <p className="text-black leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                  {/* Next Activity */}
                  {nextActivity && (
                    <div className="space-y-8">
                      {nextActivity.image && (
                        <div className="rounded-tr-[40px] h-[200px] md:h-[312px] overflow-hidden shadow-lg">
                          <img
                            src={urlFor(nextActivity.image).url()}
                            alt={nextActivity.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="space-y-4">
                        {nextActivity.subtitle && (
                          <h3 className="text-orange uppercase tracking-wide font-semibold text-sm md:text-[22px]">
                            {nextActivity.name}
                          </h3>
                        )}
                        <h3 className="text-2xl md:text-[40px] font-semibold text-black">
                          {nextActivity.subtitle}
                        </h3>
                        <p className="text-black leading-relaxed">
                          {nextActivity.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }

        // Return null for any other cases to prevent rendering
        return null;
      })}
    </div>
  );
}

export default FacilitySection;