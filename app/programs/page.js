import React from 'react';
import HeroBanner from '../components/shared/HeroBanner';
import SummerBanner from '../components/shared/SummerBanner';
import SubjectSwitcher from '../components/programs/SubjectSwitcher';
import { fetchSubjects } from '../components/programs/fetchSubjects';

export const revalidate = 60 

export default async function ProgramsPage() {
  const subjectsData = await fetchSubjects();

  return (
    <>
      <HeroBanner text="Subjects We Offer" />
      <SubjectSwitcher initialData={subjectsData} />
      <SummerBanner />
    </>
  );
}