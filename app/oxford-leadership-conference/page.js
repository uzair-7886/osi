'use client'
import HeroBanner from '../components/shared/HeroBanner'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import Intro from '../components/oxford-leadership-conference/Intro'
import Partners from '../components/oxford-leadership-conference/Partners'
import Audience from '../components/oxford-leadership-conference/Audience'
import WhyAttend from '../components/oxford-leadership-conference/WhyAttend'
import Speakers from '../components/oxford-leadership-conference/Speakers'
import Expect from '../components/oxford-leadership-conference/Expect'
import Themes from '../components/oxford-leadership-conference/Themes'
import Impact from '../components/oxford-leadership-conference/Impact'
import Fees from '../components/oxford-leadership-conference/Fees'
import JoinUs from '../components/oxford-leadership-conference/JoinUs'
import Beyond from '../components/oxford-leadership-conference/Beyond'

const page = () => {
    const [data, setData] = useState(null)

  useEffect(() => {
    client.fetch(
        `*[_type=="conference"][0]{
           hero,
           partners,
           audience,
           whyAttend,
           speakers,
           expectations,
           themes,
           impact,
           fees,
           joinUsRoles,
           beyond
        }`
    ).then(setData).catch(console.error)
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
    <HeroBanner text={"Oxford Leadership Conference"} />
    <Intro hero={data.hero} />
    <Partners logos={data.partners} />
    <Audience items={data.audience} />
    <WhyAttend items={data.whyAttend} />
    <Speakers speakers={data.speakers} />
    <Expect bullets={data.expectations} />
    <Themes themes={data.themes} />
    <Impact stats={data.impact} />
    <Fees feeData={data.fees} />
    <JoinUs roles={data.joinUsRoles} />
    <Beyond data={data.beyond} />
    </>
  )
}

export default page
