'use client'
import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'
import OSIActivities from '../components/OSIActivities'

function page() {
  return (
    <>
        <HeroBanner text="Activities"/>
        <OSIActivities/>
        <SummerBanner/>
    </>
  )
}

export default page