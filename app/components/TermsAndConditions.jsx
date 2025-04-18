// src/components/TermsAndConditions.jsx
'use client'

import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

/** Slugify section titles to IDs */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const TermsAndConditions = () => {
  const [raw, setRaw] = useState(null)

  useEffect(() => {
    client
      .fetch(`*[_type=="termsAndConditions"][0]{ rawContent }`)
      .then(data => setRaw(data?.rawContent ?? ''))
      .catch(err => console.error('Sanity fetch error:', err))
  }, [])

  // ─── Skeleton Loader ──────────────────────────────────────────────────────────
  if (raw === null) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="animate-pulse space-y-6">
          {/* Title */}
          <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto" />

          {/* TOC placeholder */}
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 rounded w-1/4" />
            <div className="h-5 bg-gray-200 rounded w-1/4" />
            <div className="h-5 bg-gray-200 rounded w-1/4" />
          </div>

          {/* Intro paragraph */}
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />

          {/* Sections placeholder */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/2" />
            <div className="h-32 bg-gray-200 rounded w-full" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
            <div className="h-32 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>
    )
  }

  // ─── Parse & Render ───────────────────────────────────────────────────────────
  const lines = raw.trim().split('\n')

  // find indices of "N. Title" lines
  const headings = lines
    .map((line, idx) => ({ line, idx }))
    .filter(({ line }) => /^\d+\.\s/.test(line))

  // build sections array
  const sections = headings.map(({ line, idx }, i) => {
    const nextIdx = i + 1 < headings.length ? headings[i + 1].idx : lines.length
    return {
      title: line.trim(),
      id: slugify(line),
      content: lines.slice(idx + 1, nextIdx)
    }
  })

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-grey">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-orange text-center mb-8">
        Terms &amp; Conditions
      </h1>

      {/* Table of contents */}
      <nav className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-orange mb-4">Contents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {sections.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="text-grey hover:text-orange hover:underline"
            >
              {sec.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Original opening paragraph */}
      <p className="text-grey py-4 text-justify">
        When registering for the program and whilst communicating with The Oxford Center for Leadership, upon completion of booking confirmation i.e. payment of deposit or full amount as set out in Paragraph 3, the The Oxford Center for Leadership student participants and their parents/legal guardians agree to be bound by the following terms and conditions [‘the Contract’]. The participants and their parents/legal guardians must ensure they completely understand the Contract and if required, seek advice in order to ensure they do understand ‘the Contract’ in advance of the Contract taking effect subject to Paragraph 3.2.
      </p>

      {/* Numbered sections */}
      {sections.map(sec => (
        <section id={sec.id} key={sec.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-orange mb-4">
            {sec.title}
          </h2>
          <div className="space-y-4 text-grey text-base leading-relaxed text-justify">
            {sec.content.map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default TermsAndConditions
