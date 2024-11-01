import React from 'react'
import FAQAccordion from '../components/shared/FAQAccordion'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'

export default function FAQPage() {
  return (
    <>
      <HeroBanner text="FAQ's" />
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 py-8">
            <div className="">
              <h2 className="text-4xl md:text-[22px] text-orange font-semibold mb-4">GENERAL FAQ'S</h2>
              <h3 className="text-3xl md:text-[40px] font-semibold mb-4">Need Something Cleared Up?</h3>
              <p className="text-grey">
                Here are our frequently asked questions. You can find everything you need to know
                about OSI. Can't find your answer? {' '}
                <a href="#" className=" underline">
                  Please chat with our team
                </a>
                .
              </p>
            </div>
          </div>
          <div className="lg:w-2/3">
            <FAQAccordion />
          </div>
        </div>
      </div>
      <SummerBanner/>
    </>
  );
}