// import React from 'react'
import HeroBanner from "../components/shared/HeroBanner";
import SummerBanner from "../components/shared/SummerBanner";
import TermsAndConditions from "../components/TermsAndConditions";

const page = () => {
  return (
    <>
      <HeroBanner text="Terms & Conditions" />
        <TermsAndConditions/>
      <SummerBanner/>
    </>
  )
}

export default page
