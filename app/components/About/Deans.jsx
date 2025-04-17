// "use client";

import React from 'react';
import DeanCard from './DeanCard';

const deans = [
  {
    name: 'Leo Buckley',
    description: `Leo Buckley reads History at Trinity College Oxford. As a former President of the Oxford Union, he began competitive debating as a finalist at the Oxford Union Schools Debating Championship and has since debated against figures such as Former Speaker of the House, Kevin McCarthy. He is also a Documentary Producer with projects focusing on the Middle East. His experience ranges from political advocacy to working in the House of Commons and assisting startups with media strategies.`,
    image: '/images/team/Leo Buckley.jpeg'
  },
  {
    name: 'Bob Sira Sira',
    description: `Bob Sira is a technology strategist and entrepreneur with extensive experience in artificial intelligence and digital transformation. He works with Microsoft and has advised global organizations on integrating AI-driven solutions for leadership and innovation. With a background in software engineering and business strategy, Bob has helped startups and established enterprises leverage technology for sustainable growth.`,
    image: '/images/team/Bob Sira Sira_.jpg'
  },
  {
    name: 'Liza Barkova',
    description: `Liza is a student at the University of Oxford, where she studies Philosophy, Public Policy, and Economics. She has a keen interest in leadership development, ethical decision-making, and policy implementation. Liza has been involved in various academic and extracurricular initiatives focusing on youth empowerment and critical thinking, making her an excellent mentor for aspiring young leaders.
`,
    image: '/images/team/Liza Barkova_.jpg'
  },
  {
    name: 'Sid Nagrath',
    description: `Sid is a student at the University of Oxford, where he studies Philosophy, Politics, and Economics (PPE) and is a debater at the Oxford Union. As the Secretary of the Oxford Union, he has played a key role in organizing high-profile debates and discussions. Sid has a strong background in competitive debating and leadership training, making him an excellent mentor for young debaters and future leaders.`,
    image: '/images/team/person.png'
  }
];

const DeansSection = () => (
  <section className="relative max-w-7xl mx-auto py-16 md:py-8 ">
    <div className="text-center mb-12 px-16 md:px-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Deans</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 px-16">
      {deans.map((dean, index) => (
        <DeanCard
          key={index}
          name={dean.name}
          description={dean.description}
          image={dean.image}
        />
      ))}
    </div>
  </section>
);

export default DeansSection;
