import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="scroll-content">
        {[...technologies, ...technologies].map((technology, index) => (
          <div className="w-28 h-28 flex-shrink-0 mx-3" key={index}>
            <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
