'use client'
import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'
import OSIFacilities from '../components/OSIFacilities'

function page() {
  return (
    <>
        <HeroBanner text="Facilities"/>
        <OSIFacilities/>
        <SummerBanner/>
    </>
  )
}

export default page