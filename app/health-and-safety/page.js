// import React from 'react'
import HeroBanner from "../components/shared/HeroBanner";
import SummerBanner from "../components/shared/SummerBanner";
import HealthAndSafety from "../components/HealthAndSafety";

const page = () => {
  return (
    <>
      <HeroBanner text="Health and Safety" />
        <HealthAndSafety />
      <SummerBanner/>
    </>
  )
}

export default page
