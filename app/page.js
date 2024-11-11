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
import { LearningGrid } from "./components/home/LearningGrid";
import LivingGrid from "./components/home/LivingGrid";
import { fetchHeroData } from "./components/home/fetchHeroData";


// export const revalidate = 60;

export default async function Home() {
  const heroData = await fetchHeroData();
  return (
    <div>
      <Hero initialData={heroData}/>
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
