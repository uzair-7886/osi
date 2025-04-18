// src/components/executive/Courses.jsx
'use client'
import React from 'react'

export default function Courses({ courses }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-orange mb-6">
          Courses for All Professionals (Public and Corporate Sectors)
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-grey">
          {courses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
