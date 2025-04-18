"use client";

import React from 'react';
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const DownloadBrochureHeroSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "descriptions" && heading == "OXFORD CENTRE FOR LEADERSHIP"][0]`)
            .then((introData) => {
                setData(introData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!data) {
        const widths = ["w-full", "w-5/6", "w-4/6", "w-3/6", "w-2/6"];
  return (
    <div className=" mx-auto py-10 max-w-7xl space-y-3 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded ${widths[i % widths.length]}`}
        />
      ))}
    </div>
  )
    }
    return (
        <section className="relative w-full py-16 px-16 md:py-24 md:px-24"> {/* Reduced padding */}
            <div className="max-w-7xl mx-auto md:flex-row items-center">
                <h2 className='text-center text-orange text-lg font-semibold mb-6'>{data.heading}</h2>
                {/* <h1 className="text-center mb-6 text-[26px] font-semibold text-gray-900">
                    {data.sub_heading}
                </h1> */}

                <p className="text-base text-grey mx-auto py-2 text-justify">
                The Oxford Centre for Leadership is an independent, non-profit organisation established by current and former academics, scholars and policymakers at University of Oxford to nurture the next generation of socially conscious, technologically adept and entrepreneurial leaders. 
                </p>
                <p className="text-base text-grey mx-auto py-2 text-justify">
                At the Oxford Centre for Leadership, we understand the complexities and challenges of today's polarised world. Recognizing the pivotal role of young leaders in steering us towards a more equitable and sustainable future, our programs are meticulously designed to foster generational dialogue, enhance skill development, and amplify the voices of historically marginalised segments of society.
                </p>
                <p className="text-base text-grey mx-auto py-2 text-justify">
                Our leadership programs are designed with Oxford heritage in mind, ensuring that the same principles and methodologies that guided remarkable leaders are available to you. We provide more than just courses; we offer transformative experiences that blend Oxford's proven methods with the latest in leadership practices. 
                </p>
                <p className="text-base text-grey py-2  mx-auto text-justify">
                The Centre therefore offers the Oxford Summer Program for students in the age group of 15-20 and the Oxford Executive Leadership Program for emerging leaders in public, private and non-profit sector organisations. The Centre also manages the Oxford Leadership Network which provides a platform for the members to engage in a year-round interaction. 
                </p>
                <p className="text-base text-grey py-2 text-justify mx-auto">
                The Centre’s flagship annual Oxford Leadership Conference brings together world leaders in the realms of business, technology and public policy as well as emerging leaders from all fields of life for an immersive learning experience. This unique event is not just a milestone but a gateway to unparalleled insights and skills refined over centuries at Oxford, now reimagined for the contemporary leadership landscape.
                </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 -z-10"></div>
        </section>
    );
};


export default DownloadBrochureHeroSection;