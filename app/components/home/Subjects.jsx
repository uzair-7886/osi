import React from 'react';

const Subjects = () => {
  const subjects = [
    { title: 'Physical Sciences', image:"/images/subjects/physical.png" },
    { title: 'Social Sciences', image:"/images/subjects/social.png" },
    { title: 'Humanities', image:"/images/subjects/humanities.png" },
    { title: 'Entrepreneurship', image:"/images/subjects/entrep.png" },
    { title: 'Artificial Intelligence', image:"/images/subjects/ai.png" },
    { title: 'Data Science', image:"/images/subjects/ds.png" },
    { title: 'Climate Science', image:"/images/subjects/climate.png" },
  ];

  return (
    <div className='bg-grey bg-opacity-10'>

    <div className="px-10 py-6 max-w-7xl  mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-8">Subjects Offered</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subjects.map((subject, index) => (
            <div
            key={index}
            className="bg-white rounded-[16px] shadow-md p-6 flex flex-col items-center transition-transform  md:w-[273px] md:h-[233px] w-[150px]"
          >
            <div className=" flex items-center justify-center text-orange mb-4">
              <img src={subject.image} alt="" />
            </div>
            <h3 className="text-lg font-semibold text-center">{subject.title}</h3>
          </div>
        ))}
        
        <div className="bg-orange rounded-[16px] shadow-md p-6 flex items-center justify-center text-white hover:bg-orange transition-colors cursor-pointer md:w-[273px] md:h-[233px] w-[150px]">
          <div className="">
            <h3 className="text-2xl md:text-4xl font-semibold mb-2">View All Subjects</h3>
            <img src="/images/subjects/Path.png" alt="" />
          </div>
        </div>
      </div>
    </div>
        </div>
  );
};

export default Subjects;