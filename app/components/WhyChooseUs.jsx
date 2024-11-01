'use client'
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ActivitySection from "./shared/ActivitySection";
import { urlFor } from "@/sanity/lib/image";

const activityQuery = `*[_type == "whyosi"] {
  _id,
  name,
  description,
  facilities[]-> {
    name,
    subtitle,
    description,
    image
  }
}`;

const WhyChooseUs = () => {
  const [activities, setActivities] = useState([]);
  const [activityTitle, setActivityTitle] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await client.fetch(activityQuery);
        if (data && data.length > 0) {
          setActivityTitle(data[0].name);
          setActivityDescription(data[0].description);
          setActivities(data[0].facilities);
        }
      } catch (err) {
        setError("Failed to load activities. Please try again later.");
        console.error("Error fetching activities:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-full py-12 px-4 sm:px-6 lg:px-8 bg-white`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center`}
              >
                <div className="w-full lg:w-1/2 space-y-4 px-4 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 px-4 animate-pulse">
                  <div className="rounded-tr-[40px] overflow-hidden">
                    <div className="w-full h-[200px] sm:h-[400px] bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const mainActivities = activities.slice(0, -2);
  const lastTwoActivities = activities.slice(-2);

  return (
    <div className="w-full">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">{activityTitle}</h2>
        <p className="text-grey max-w-6xl mx-auto text-center px-4">
          {activityDescription}
        </p>
      </div>
      
      <ActivitySection activities={mainActivities} reversed={true} />

      {lastTwoActivities.length > 0 && (
        <div className="w-full py-12 px-6 sm:px-6 lg:px-8  bg-opacity-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {lastTwoActivities.map((activity, index) => (
                <div key={index} className="space-y-8">
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
                    <h3 className="text-2xl md:text-[40px] font-semibold text-black capitalize">
                      {activity.subtitle}
                    </h3>
                    <p className="text-black leading-relaxed text-grey">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;