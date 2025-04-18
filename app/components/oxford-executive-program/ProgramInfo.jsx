// src/components/executive/ProgramInfo.jsx
'use client'
import React from 'react'
import Image from 'next/image'

export default function ProgramInfo({ programInfo }) {
  const { programName, fee, inclusions, deadline, applyText, applyLink } = programInfo
  return (
    <section className="bg-white">
    {/* ─── Dates & Duration Banner ────────────────────────────────────────── */}
    <div className="bg-darkblue">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-center py-24 text-white">
        {/* Dates */}
        <div className="flex flex-col items-center">
          <Image src="/svgs/calendar.svg" alt="Calendar" width={48} height={48} className='fill-current text-orange' />
          <span className="mt-4 text-lg ">18th August - 29th August, 2025</span>
        </div>

        {/* Duration */}
        <div className="flex flex-col items-center">
          <Image src="/svgs/time.svg" alt="Clock" width={48} height={48} />
          <span className="mt-4 text-lg">7 days</span>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
          <Image src="/svgs/map.svg" alt="Map pin" width={48} height={48} />
          <span className="mt-4 text-lg ">At the Oxford University</span>
        </div>
      </div>
    </div>

    {/* ─── Main Program Info ───────────────────────────────────────────────── */}
    <div className="max-w-5xl mx-auto text-center py-16">
      <h2 className="text-3xl font-semibold text-darkblue mb-4">
        {programName}
      </h2>
      <div className="text-2xl font-bold text-orange mb-2">
        {fee}
      </div>
      <p className="text-grey mb-6">
        {inclusions}
      </p>

      <div className="flex justify-center items-center space-x-2 mb-8">
        {/* <Image src="/svgs/q.svg" alt="Deadline" width={24} height={24} /> */}
        <span className="text-grey">Application Deadline: {deadline}</span>
      </div>

      <a
        href={applyLink}
        className="inline-block bg-darkblue text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition"
      >
        {applyText}
      </a>
    </div>
  </section>
  )
}
