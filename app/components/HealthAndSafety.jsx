// src/components/HealthAndSafety.jsx
import React from 'react';

const healthSafetyContent = {
  title: 'Health & Safety',
  intro: [
    'We prioritise the health and safety of our students, ensuring their experience is secure, enjoyable, and well‑supported.',
    'Depending on the age group, students are accompanied at all times by experienced staff members and residential mentors (deans) during program activities. Deans also live on‑site at the students’ accommodation halls, providing 24/7 supervision and support.'
  ],
  protocols: [
    {
      title: 'Safeguarding & Child Protection',
      description:
        'All staff members are trained in safeguarding practices, adhering to UK government regulations to maintain a safe and supportive environment for students of all ages.'
    },
    {
      title: 'DBS Checks',
      description:
        'We conduct thorough background checks, including Disclosure and Barring Service (DBS) screenings, for all staff, mentors, and associated team members to ensure the highest standards of safety and well‑being.'
    },
    {
      title: 'Monitored & Secure Premises',
      description:
        'The college facilities are equipped with monitored entry and exit points, CCTV surveillance, and fire and safety alarms to provide a secure environment.'
    },
    {
      title: '24‑Hour Hotline for Parents',
      description:
        'A dedicated 24‑hour hotline is available for parents to reach their children or program staff at any time.'
    },
    {
      title: 'First Aid & Risk Management',
      description:
        'First aid services are accessible at all times, and we perform comprehensive risk assessments for all activities, ensuring effective measures are in place to mitigate and minimise any risks.'
    }
  ]
};

const HealthAndSafety = () => {
  const { title, intro, protocols } = healthSafetyContent;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-orange mb-6 text-center">{title}</h1>

      {/* Intro paragraphs */}
      {intro.map((text, i) => (
        <p key={i} className="text-base text-center text-grey leading-relaxed mb-4">
          {text}
        </p>
      ))}

      {/* Protocols grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {protocols.map((item, i) => (
          <div
            key={i}
            className="border-l-4 border-orange bg-white shadow-sm rounded p-4"
          >
            <h2 className="text-xl font-semibold text-darkblue mb-2">
              {item.title}
            </h2>
            <p className="text-base text-grey leading-snug text-justify">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthAndSafety;
