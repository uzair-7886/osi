import React from "react";
import Link from "next/link";

const FeeKeyDates = () => {
  const programs = [
    {
      duration: "2 Weeks",
      title: "Oxford Summer Program",
      dates: "18th August – 29th August 2025 ",
      price: "£5,999/-",
      items: [
        "TUITION FEE",
        "MEALS",
        "TRANSPORTATION WITHIN UK",
        "STUDY MATERIAL",
        "ACCOMMODATION",
      ],
    },
    {
      duration: "8 Days",
      title: "Oxford Executive Leadership Program",
      dates: "18th August – 23rd August 2025",
      price: "£6,999/-",
      items: [
        "TUITION FEE",
        "MEALS",
        "TRANSPORTATION WITHIN UK",
        "STUDY MATERIAL",
        "ACCOMMODATION",
      ],
    },

  ];

  return (
    <div className="flex justify-center items-center px-4 py-8 my-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {programs.map((program, index) => (
          <div
            key={index}
            className=" border-[5px] border-darkblue w-full"
          >
            <div className="bg-darkblue text-white py-4 px-6 ">
              <div className="flex justify-center">
                <div className="text-white border rounded-md border-white font-bold text-sm inline-block px-4 py-1 mb-2">
                  {program.duration}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center py-4">
                {program.title}
              </h3>
              <p className="text-sm text-center">Dates: {program.dates}</p>
            </div>
            <div className="bg-white p-4">
              <div className="space-y-2 mb-8">
                {program.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b w-2/3 mx-auto py-4 text-center border-darkblue pb-2 text-sm text-darkblue"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold text-center mb-4">
                {program.price}
              </p>
              <div className="text-center">
                <Link href="/application"
                className="bg-darkblue rounded-lg text-white px-6 py-2 font-medium hover:bg-opacity-90">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeKeyDates;
