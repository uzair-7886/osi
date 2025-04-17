// import React from 'react'
import HeroBanner from "../components/shared/HeroBanner";
import SummerBanner from "../components/shared/SummerBanner";
import StudentCodeOfConduct from "../components/StudentCodeOfConduct";

const page = () => {
  return (
    <>
      <HeroBanner text="Student Code of Conduct" />
      <StudentCodeOfConduct/>   
      <SummerBanner/>
    </>
  )
}

export default page
