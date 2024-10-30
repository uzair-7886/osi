import React from 'react'
import { urlFor } from '@/sanity/lib/image';

function ActivitySection({activities}) {
  return (
    <div className="w-full">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`w-full py-12 px-4 sm:px-6 lg:px-8 ${
              index % 2 === 1 ? 'bg-[#12243E] bg-opacity-10' : 'bg-white'
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center`}>
                <div className="w-full lg:w-1/2 space-y-4 px-4">
                  {activity.subtitle && (
                    <h3 className="text-orange uppercase tracking-wide font-semibold text-sm">
                      {activity.subtitle}
                    </h3>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold">{activity.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
                
                <div className="w-full lg:w-1/2 px-4">
                  {activity.image && (
                    <div className="rounded-tr-[40px] overflow-hidden shadow-lg">
                      <img
                        src={urlFor(activity.image).width(600).url()}
                        alt={activity.name}
                        className="w-full h-[200px] sm:h-[400px] object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ActivitySection