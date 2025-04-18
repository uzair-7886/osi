'use client'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

import Intro from '../components/oxford-executive-program/Hero'
import Audience from '../components/oxford-executive-program/Audience'
import ProgramInfo from '../components/oxford-executive-program/ProgramInfo'
import Courses from '../components/oxford-executive-program/Courses'
import OptionalLectures from '../components/oxford-executive-program/OptionalLectures'
import HeroBanner from '../components/shared/HeroBanner'


export default function ExecutiveProgramPage() {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      client
        .fetch(
          `*[_type=="executiveProgram"][0]{
            title,
            overview,
            audience,
            programInfo{programName, fee, inclusions, deadline, applyText, applyLink},
            courses[],
            optionalLectures[]
          }`
        )
        .then(setData)
        .catch(console.error)
    }, [])
  
    if (!data) {
        return (
            <div className="max-w-5xl mx-auto px-6 py-10">
              <div className="animate-pulse space-y-6">
                <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto" />
      
                <div className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-1/4" />
                  <div className="h-5 bg-gray-200 rounded w-1/4" />
                  <div className="h-5 bg-gray-200 rounded w-1/4" />
                </div>
      
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
      
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
  
    return (
      <>
        <HeroBanner text="Oxford Executive Program" />
        <Intro title={data.title} overview={data.overview} />
        <Audience audience={data.audience} />
        <ProgramInfo programInfo={data.programInfo} />
        <Courses courses={data.courses} />
        <OptionalLectures optionalLectures={data.optionalLectures} />
      </>
    )
  }
