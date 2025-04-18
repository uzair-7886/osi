// src/components/executive/Audience.jsx
'use client'
import React from 'react'

export default function Audience({ audience }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-darkblue mb-6">Who Should Attend?</h2>
        <ul className="list-disc pl-5 space-y-2 text-grey">
          {audience.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
