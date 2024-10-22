import React from 'react';
import TallCard from './TallCard';
import Card from './Card';


const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      {children}
    </div>
  );
};



export const LearningGrid = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-20">
      <h1 className="text-4xl font-semibold text-center mb-6">
        Learn The Oxford Way
      </h1>

      <GridContainer>
        <TallCard
          image="/images/program1.png"
          title="Learn From Oxford Academics"
        />
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-0 pb-0">
          <Card image="/images/program1.png" title="Tutorials" />
          <Card image="/images/program1.png" title="Lectures" />
          <Card image="/images/program1.png" title="Debating" />
          <Card image="/images/program1.png" title="Admission Counseling" />
        </div>
      </GridContainer>
    </div>
  );
};

export const LivingGrid = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-20">
      <h1 className="text-4xl font-semibold text-center mb-6">
        Live The Oxford Way
      </h1>

      <GridContainer>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-0 pb-0">
          <Card image="/images/program1.png" title="Accomodation" />
          <Card image="/images/program1.png" title="Fine Dinning" />
          <Card image="/images/program1.png" title="Punting" />
          <Card image="/images/program1.png" title="London Trip" />
        </div>
        <TallCard
          image="/images/program1.png"
          title="Harry Potter Style Tour"
        />
      </GridContainer>
    </div>
  );
};
