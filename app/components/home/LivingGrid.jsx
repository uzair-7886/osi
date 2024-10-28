'use client'
import React, { useState, useEffect } from 'react';
import TallCard from './TallCard';
import Card from './Card';
import { client } from "@/sanity/lib/client";  
import { urlFor } from "@/sanity/lib/image";   

const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      {children}
    </div>
  );
};

const learningQuery = `*[_type == "livingGrid"][0] {
  title,
  mainCard {
    title,
    image
  },
  gridCards[] {
    title,
    image
  }
}`;

export const LivingGrid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(learningQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching learning grid data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-6 animate-pulse"></div>
        <GridContainer>
          <div className="h-[400px] bg-gray-200 rounded animate-pulse"></div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-48 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </GridContainer>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-20">
      <h1 className="text-4xl font-semibold text-center mb-6">
        {data.title}
      </h1>

      <GridContainer>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.gridCards.map((card, index) => (
            <Card
              key={index}
              image={urlFor(card.image).url()}
              title={card.title}
            />
          ))}
        </div>
        <TallCard
          image={urlFor(data.mainCard.image).url()}
          title={data.mainCard.title}
        />
      </GridContainer>
    </div>
  );
};

export default LivingGrid;