'use client'
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const faqQuery = `
  *[_type == "faqs"][0] {
    faqList[] {
      question,
      answer,
      image
    }
  }
`;

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await client.fetch(faqQuery);
        if (data?.faqList) {
          const formattedFaqs = data.faqList.map(item => ({
            question: item.question,
            answer: item.answer,
            image: item.image ? urlFor(item.image).url() : ""
          }));
          setFaqs(formattedFaqs);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setFaqs([]);
      }
    };

    fetchFaqs();
  }, []);

  if (!faqs.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="text-center mb-12">
            <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="relative pt-24">
                <div className="h-40 w-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="bg-white rounded-3xl p-6 pb-8">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-grey bg-opacity-10'>
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-orange font-medium mb-2 text-xl">GOT QUESTIONS?</h3>
          <h2 className="text-4xl font-bold">We've Got Answers!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="relative pt-24">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 shadow-2xl rounded-full">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src={faq.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-6 pb-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)] h-full">
                <div className="mt-16"> 
                  <h3 className="font-semibold text-2xl mb-3">{faq.question}</h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{faq.answer}</p>
                  <div className="flex justify-center">
                    <button className="bg-orange text-white px-8 py-3 rounded-full font-medium text-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;