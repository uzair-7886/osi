import HeroBanner from '../components/shared/HeroBanner';
import SummerBanner from '../components/shared/SummerBanner';
import SubjectSwitcher from '../components/programs/SubjectSwitcher';
import { fetchSubjects } from '../components/programs/fetchSubjects';

export default async function ProgramsPage({ searchParams }) {
  const selectedSubject = searchParams?.subject;

  const subjectsData = await fetchSubjects();
  const initialSubject = subjectsData.find(
    (subject) => subject.name === selectedSubject
  ) || subjectsData[0];

  return (
    <>
      <HeroBanner text="Subjects We Offer" />
      <SubjectSwitcher initialData={subjectsData} initialSubject={initialSubject} />
      <SummerBanner />
    </>
  );
}
