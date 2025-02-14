'use client';

import React, { useEffect } from "react";
import HeroBanner from "../components/shared/HeroBanner";
import SummerBanner from "../components/shared/SummerBanner";
import OSIFacilities from "../components/OSIFacilities";

function FacilitiesPage() {
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          console.log("Available IDs in the DOM:", Array.from(document.querySelectorAll("[id]")).map(el => el.id));

          const id = hash.substring(1); // Decode the hash
          const targetElement = document.getElementById(id);
          console.log(id);
          console.log(targetElement);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
          }
        }, 1000); // Delay to ensure DOM is ready
      }
    };

    // Call once the page loads
    handleScrollToHash();

    // Add listener for hash changes (e.g., clicking links with hashes)
    window.addEventListener("hashchange", handleScrollToHash);

    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, []);

  return (
    <>
      <HeroBanner text="Facilities" />
      <OSIFacilities />
      <SummerBanner />
    </>
  );
}

export default FacilitiesPage;
