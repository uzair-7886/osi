'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export default function Expect({ bullets }) {
  if (!bullets?.length) return <div>No data</div>

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-orange text-3xl font-semibold text-center mb-6">
        What to Expect?
      </h2>

      <div className="overflow-x-auto">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={70}
          className="whitespace-nowrap"
        >
          {bullets.map(({ image, text }, i) => (
            <div key={i} className="inline-block mx-4 flex-shrink-0">
              <div className="relative 
                              md:w-[340px] md:h-[340px] 
                              sm:w-[280px] sm:h-[280px] 
                              w-[150px] h-[150px] 
                              rounded-2xl overflow-hidden">
                <Image
                  src={urlFor(image)
                    .width(340)
                    .height(340)
                    .fit('crop')
                    .auto('format')
                    .url()}
                  alt={text}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <p className="text-orange text-sm  md:text-lg font-medium text-center mt-3 
                            md:w-[340px] sm:w-[280px] w-[150px]">
                {text}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
