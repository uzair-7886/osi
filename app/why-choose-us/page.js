import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'
import WhyChooseUs from '../components/WhyChooseUs'


function page() {
  return (
    <>
        <HeroBanner text="Why Choose Us?"/>
        <WhyChooseUs />
        <SummerBanner />
    </>
  )
}

export default page