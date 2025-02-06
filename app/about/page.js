import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from "../components/shared/SummerBanner";
import Intro from "../components/About/Intro";
import OurTeam from "../components/About/OurTeam";
import MethodologySection from "../components/About/Methodology";
import Tutors from "../components/About/Tutors";
import Deans from "../components/About/Deans";
import { client } from "@/sanity/lib/client";

// lets see
async function page() {
    // // Fetch data from Sanity
    // const introData = await client.fetch(
    //     `*[_type == "descriptions" && heading == "OXFORD CENTRE FOR LEADERSHIP"][0]`
    // );
    // const teamData = await client.fetch(
    //   `*[_type == "descriptions" && heading == "OUR TEAM"][0]{
    //     ...,
    //     images[]->{
    //       name,
    //       image
    //     }
    //   }`
    // );
    // const methodologyData = await client.fetch(
    //   `*[_type == "descriptions" && lower(heading) == "our methodology"][0]{ 
    //     ...,
    //     images[]->{
    //       name,
    //       image
    //     },
    //     methodologies[]->{
    //       title,
    //       description
    //     }
    //   }`
    // );
    // const tutorsData = await client.fetch(
    //     `*[_type == "descriptions" && heading == "Why OCI?"][0]{
    //     ...,
    //     images[]->{
    //       name,
    //       description,
    //       image
    //     }
    //   }`
    // );
    // const DeansData = await client.fetch(
    //     `*[_type == "descriptions" && sub_heading == "Deans"][0]{
    //     ...,
    //     images[]->{
    //       name,
    //       description,
    //       image
    //     }
    //   }`
    // );

    return (
        <>
            <HeroBanner text="About Us" />
            <Intro />
            <MethodologySection />
            <Tutors />
            <OurTeam />
            <Deans />
            <SummerBanner />
        </>
    )
}

export default page