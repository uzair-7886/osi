// import React from 'react'
import HeroBanner from "../components/shared/HeroBanner";
import SummerBanner from "../components/shared/SummerBanner";
import HealthAndSafety from "../components/HealthAndSafety";
import TermsAndConditions from "../components/TermsAndConditions";

const page = () => {
  return (
    <>
      <HeroBanner text="Health and Safety" />
        {/* <HealthAndSafety /> */}
        <TermsAndConditions/>
      <SummerBanner/>
    </>
  )
}

export default page
