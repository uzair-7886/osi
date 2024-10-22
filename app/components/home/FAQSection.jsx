import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "When should I arrive? And leave?",
      answer: "Course dates are inclusive, indicating the arrival and departure dates. For example, a course from 23rd June to 6th...",
      image: "/images/oxford.png",
    },
    {
      id: 2,
      question: "Who are the on-course (pastoral) staff?",
      answer: "Meet our dedicated on-course team committed to your well-being. Led by a site coordinator, the team includes...",
      image: "/images/oxford.png",
    },
    {
      id: 3,
      question: "What kind of places will I get to go to on the cultural excursions?",
      answer: "Explore gems like Oxford, Cambridge, and London, along with full-day...",
      image: "/images/oxford.png",
    },
    {
      id: 4,
      question: "How long is the day?",
      answer: "The day typically begins with breakfast at 07:30, followed by the first class or activity at 09:00. Evening activities finish around 20:00 for younger students...",
      image: "/images/oxford.png",
    },
  ];

  return (
    <div className='bg-grey bg-opacity-10'>

    <div className="w-full max-w-7xl mx-auto px-4 py-12 ">
      <div className="text-center mb-12">
        <h3 className="text-orange font-medium mb-2 text-xl">GOT QUESTIONS?</h3>
        <h2 className="text-4xl font-bold">We've Got Answers!</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {faqs.map((faq) => (
            <div key={faq.id} className="relative pt-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 shadow-2xl rounded-full">
              <div className="w-40 h-40 rounded-full  overflow-hidden">
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