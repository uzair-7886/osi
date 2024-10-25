import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from "../components/shared/SummerBanner";
import Intro from "../components/About/Intro";
import OurTeam from "../components/About/OurTeam";
import MethodologySection from "../components/About/Methodology";
import Tutors from "../components/About/Tutors";
import Deans from "../components/About/Deans";

// lets see
function page() {
    return (
        <>
            <HeroBanner text="About Us" />
            <Intro />
            <OurTeam />
            <MethodologySection />
            <Tutors />
            <Deans />
            <SummerBanner />
        </>
    )
}

export default page