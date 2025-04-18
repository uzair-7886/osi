'use client'

import React, { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'

const HealthAndSafety = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    const query = `*[_type == "healthSafety"][0]{
      title,
      intro,
      protocols[]{title, description}
    }`
    client
      .fetch(query)
      .then(data => setContent(data))
      .catch(err => console.error('Sanity fetch error:', err))
  }, [])

  // ─── Skeleton Loader ──────────────────────────────────────────────────────────
  if (!content) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          {/* Title skeleton */}
          <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto" />

          {/* Intro skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>

          {/* Protocols grid skeleton */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(n => (
              <div
                key={n}
                className="h-32 bg-gray-200 rounded"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ─── Real Content ────────────────────────────────────────────────────────────
  const { title, intro, protocols } = content

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-orange mb-6 text-center">
        {title}
      </h1>

      {/* Intro: rich text */}
      <div className="prose prose-lg mx-auto mb-8">
        <PortableText
          value={intro}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="text-base text-center text-grey leading-relaxed mb-4">
                  {children}
                </p>
              )
            }
          }}
        />
      </div>

      {/* Protocols grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {protocols.map((item, i) => (
          <div
            key={i}
            className="border-l-4 border-orange bg-white shadow-sm rounded p-4"
          >
            <h2 className="text-xl font-semibold text-darkblue mb-2">
              {item.title}
            </h2>
            <p className="text-base text-grey leading-snug text-justify">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HealthAndSafety
