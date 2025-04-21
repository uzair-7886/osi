'use client'

import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

export default function WhyAttend({ description, items }) {
  if ((!description?.length) && (!items?.length)) {
    return <div>No data for Why Attend</div>
  }

  return (
    <section className="max-w-5xl mx-auto text-grey">
      {/* — Intro rich‑text block — */}
      {description?.length > 0 && (
        <div className="bg-background w-full">
          <div className="max-w-5xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-orange text-2xl font-semibold text-center mb-8">
        Why Attend the Oxford Leadership Conference?
      </h2>
            <article className="prose lg:prose-lg text-grey">
              <PortableText
                value={description}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-base leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </article>
          </div>
        </div>
      )}

      {/* — Bullets, alternating layout like ActivitySection — */}
      <div className="w-full">
        {items.map((item, idx) => {
          const { image, title, description: desc } = item
          const isOdd = idx % 2 === 1

          return (
            <div
              key={idx}
              className={`w-full py-4 px-4 sm:px-6  ${
                isOdd ? ' bg-opacity-10' : 'bg-white'
              }`}
            >
              <div className="max-w-6xl mx-auto">
                <div
                  className={`flex flex-col gap-8 items-center ${
                    isOdd ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  {/* Text side */}
                  <div className="w-full lg:w-1/2 md:space-y-8 space-y-4 px-4">
                    {title && (
                      <h3 className="text-2xl font-semibold text-orange capitalize">
                        {title}
                      </h3>
                    )}
                    {desc && (
                      <p className="leading-relaxed text-grey text-justify">
                        {desc}
                      </p>
                    )}
                  </div>

                  {/* Image side */}
                  {image && (
                    <div className="w-full lg:w-1/2 px-4">
                      <div className="rounded-tr-[40px] overflow-hidden shadow-lg">
                        <div className="relative
                                        h-[200px] sm:h-[400px]
                                        md:w-[562px] md:h-[312px]
                                        w-full">
                          <Image
                            src={urlFor(image).url()}
                            alt={title}
                            fill
                            className="object-cover object-top"
                            draggable={false}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
