import React from 'react'
import FAQAccordion from '../components/shared/FAQAccordion'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <>
      <HeroBanner text="FAQ's" />
      <FAQ/>
      <SummerBanner/>
    </>
  );
}