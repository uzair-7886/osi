'use client'
import DownloadBrochureHeroSection from "./components/home/DownloadBrochureHeroSection";
import FAQSection from "./components/home/FAQSection";
import Hero from "./components/home/Hero";
import ImageSlideshow from "./components/home/ImageSlideshow";
import ProgramsSection from "./components/home/ProgramsSection";
import RegisterHeroSection from "./components/home/RegisterHeroSection";
import Subjects from "./components/home/Subjects";
import SummerBanner from "./components/home/SummerBanner";
import TestimonialsSlider from "./components/home/TestimonialsSlider";
import { LearningGrid } from "./components/home/ImagesGrid";
import { LivingGrid } from "./components/home/ImagesGrid";

export default function Home() {
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
