import React from "react";
import { urlFor } from "@/sanity/lib/image";

function ActivitySection({ activities, reversed = false }) {
  return (
    <div className="w-full text-grey">
      {activities.map((activity, index) => (
        <div
          key={index}
          id={encodeURIComponent(activity.name)} // Add id for scrolling
          className={`w-full py-12 px-4 sm:px-6 lg:px-8 ${index % 2 === 1 ? "bg-[#12243E] bg-opacity-10 " : "bg-white"
            }`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`flex flex-col gap-8 ${reversed
                  ? index % 2 === 0
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                  : index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center`}
            >
              <div className="w-full lg:w-1/2 md:space-y-8 space-y-4 px-4">
                {activity.subtitle && (
                  <h3 className="text-orange uppercase tracking-wide font-semibold text-sm md:text-[22px]">
                    {activity.name}
                  </h3>
                )}
                <h3 className="text-2xl md:text-[40px] font-semibold text-black capitalize">
                  {activity.subtitle}
                </h3>
                <p
                  className={` leading-relaxed ${index % 2 === 0 ? "text-grey" : "text-black"
                    }`}
                >
                  {activity.description}
                </p>
              </div>

              <div className="w-full lg:w-1/2 px-4">
                {activity.image && (
                  <div className="rounded-tr-[40px] h-auto md:w-[562px] md:h-[312px] overflow-hidden shadow-lg">
                    <img
                      src={urlFor(activity.image).url()}
                      alt={activity.name}
                      className="w-full  object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivitySection;
