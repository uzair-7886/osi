import React from 'react';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import HeroBanner from '../components/shared/HeroBanner';
import SummerBanner from '../components/shared/SummerBanner';
import SubjectSwitcher from '../components/programs/SubjectSwitcher';
import { client } from "@/sanity/lib/client";

// const getCachedSubjects = unstable_cache(
//   async () => {
//     return await client.fetch(`*[_type == "subject"] {
//       name,
//       description,
//       "courses": courses[]-> {
//         name,
//         description,
//         image
//       }
//     }`);
//   },
//   ['subjects'],
//   { revalidate: 60 } 
// );

export const revalidate = 60; 

export default async function Page() {
  // const subjects = await getCachedSubjects();

  return (
    <>
      <HeroBanner text="Subjects We Offer" />
      <SubjectSwitcher  />
      <SummerBanner />
    </>
  );
}