'use client'
import DownloadBrochureHeroSection from "./components/home/DownloadBrochureHeroSection";
import FAQSection from "./components/home/FAQSection";
import Hero from "./components/home/Hero";
import ImageSlideshow from "./components/home/ImageSlideshow";
import ProgramsSection from "./components/home/ProgramsSection";
import RegisterHeroSection from "./components/home/RegisterHeroSection";
import Subjects from "./components/home/Subjects";
import SummerBanner from "./components/shared/SummerBanner";
import TestimonialsSlider from "./components/home/TestimonialsSlider";
import { LearningGrid } from "./components/home/ImagesGrid";
import { LivingGrid } from "./components/home/ImagesGrid";

// const heroSectionQuery = `
//   *[_type == "heroSection"][0] {
//     text,
//     date,
//     buttonText,
//     image
//   }
// `;

// async function getHeroData() {
//   try {
//     return await client.fetch(heroSectionQuery);
//   } catch (error) {
//     console.error('Error fetching hero data:', error);
//     return null;
//   }
// }

// export const revalidate = 60;

export default async function Home() {
  // const heroData = await getHeroData();
  return (
    <div>
      <Hero/>
      <ProgramsSection/>
      <LearningGrid/>
      <RegisterHeroSection/>
      <LivingGrid/>
      <Subjects/>
      <DownloadBrochureHeroSection/>
      <FAQSection/>
      <ImageSlideshow/>
      <TestimonialsSlider/>
      <SummerBanner/>
    </div>
  );
}
