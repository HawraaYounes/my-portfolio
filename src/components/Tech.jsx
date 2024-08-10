import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='overflow-x-auto whitespace-nowrap py-10 scrollbar-hidden'>
      <div className='inline-flex gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex-shrink-0' key={technology.name}>
            <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
