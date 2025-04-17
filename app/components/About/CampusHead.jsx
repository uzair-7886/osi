import React from 'react'
import Image from 'next/image';

const CampusHead = () => {
  return (
                   <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image Section */}
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden">
                  <Image
                    src= "/images/team/ik.jpeg"
                    alt="Israr Khan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
    
              {/* Content Section */}
              <div className="w-full md:w-1/2 lg:w-3/5">
                <h2 className="text-4xl md:text-[36px] uppercase font-enriqueta font-bold text-mainYellow mb-6">
                   Campus Head
                </h2>
                
                <h3 className="text-2xl md:text-[18px] font-roboto font-bold text-orange mb-4">
                Israr Khan
                </h3>
    
                <p className="text-grey text-base text-justify font-roboto leading-relaxed">
                Israr Khan is the President of the Oxford Union and a Ph.D. candidate in Law at the University of Oxford, specializing in international investment law. He also teaches Civil Dispute Resolution at the Oxford Law Faculty. A Barrister-at-Law from Lincoln’s Inn, he was awarded the prestigious Droop Scholarship for outstanding performance.

                </p>
              </div>
            </div>
          </div>
  )
}

export default CampusHead
