// src/components/executive/OptionalLectures.jsx
'use client'
import React from 'react'

export default function OptionalLectures({ optionalLectures }) {
  return (
    <section className="py-16 bg-white mx-autp">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-orange mb-6">
          Optional Lectures Tailored for Public Leaders, Civil Servants, and Development Practitioners
        </h2>
        <ul className="list-disc list-inside space-y-2 text-grey columns-2">
          {optionalLectures.map((lec, i) => (
            <li key={i}>{lec}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
