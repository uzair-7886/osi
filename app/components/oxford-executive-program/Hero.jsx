// src/components/executive/Hero.jsx
'use client'
import React from 'react'
import { PortableText } from '@portabletext/react'

export default function Hero({ title, overview }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange mb-6">{title}</h1>
        <div className="space-y-4 text-grey text-justify">
          <PortableText value={overview} />
        </div>
      </div>
    </section>
  )
}
