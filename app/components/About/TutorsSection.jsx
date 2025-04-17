// TutorsSection.jsx
// "use client";

import React from 'react';
import DeanCard from './DeanCard';

const tutors = [
  {
    name: 'Rafiullah Kakar',
    description: `Rafiullah Kakar is a public policy specialist and youth advocate with extensive experience in development, governance, and research. He has worked with multiple international organizations and government bodies on policy reform, youth empowerment, and community leadership initiatives. A Fulbright and Rhodes Scholar, Rafiullah brings a wealth of experience in real-world leadership challenges and solutions. He is currently pursuing his Phd at Cambridge`,
    image: '/images/team/Rafiullah Kakar.jpg'
  },
  {
    name: 'Rinchan Mirza',
    description: `Rinchan has vast experience of teaching and research at Oxford University and has also worked in a major consulting firm.`,
    image: '/images/team/Dr. Rinchan Mirza.jpg'
  },
  {
    name: 'Dr. Maurizio Tinnirello',
    description: `PHD in politics and International Relations  
He has tutored students at Cambridge, Columbia and Oxford Universities. He has over four years of teaching experience and taught Politics and International relations at the Oxford Institute.`,
    image: '/images/team/Dr. Maurizio Tinnirello.jpg'
  },
  {
    name: 'Dr. Hannah Meslen',
    description: `Research fellow at Oxford Martin School at Oxford University.  
She holds a PhD in Law and has published in the realms of legal theory and the philosophy of punishment. She delivered a lecture on 'Modernity and Technological Progress' at the Oxford Institute's summer programme.`,
    image: '/images/team/Dr. Hannah Maslen.jpg'
  },
  {
    name: 'Dr. Helen De Cruz',
    description: `Research fellow at the Faculty of Philosophy at Oxford University.
Her areas of expertise include the philosophy of cognitive science, philosophy of religion and naturalistic approaches to epistemology. Her research aims to answer "Is it reasonable (for humans) to hold religious beliefs?`,
    image: '/images/team/Dr. Helen De Cruz.jpeg'
  },
  {
    name: 'Ashlee Stester',
    description: `Ashlee holds a Master of Science in Diplomatic Studies at Oxford university.
A U.S.-trained and licensed attorney specializing in international law. She currently lectures at the University of Cambridge, Boston University, and Verm Law School, bringing a focus on practical problem-solving to her teaching.`,
    image: '/images/team/Ashlee Stetser.jpeg'
  }
];

const TutorsSection = () => (
  <section className="relative max-w-7xl mx-auto py-16 md:py-8">
    <div className="text-center mb-12 px-16 md:px-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Tutors</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 px-16">
      {tutors.map((tutor, idx) => (
        <DeanCard
          key={idx}
          name={tutor.name}
          description={tutor.description}
          image={tutor.image}
        />
      ))}
    </div>
  </section>
);

export default TutorsSection;
