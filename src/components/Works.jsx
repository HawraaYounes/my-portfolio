import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col min-h-[570px]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col min-h-[570px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fill rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-grow mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-5">
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-[#915eff] font-poppins"
          >
            View Project
          </a>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex flex-col">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>

        <p className="mt-5 text-secondary text-[14px]">
          <span className="text-[#915eff] font-semibold">Note:</span> Click on the GitHub icon at the top right of each project card to view the project's GitHub repository.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
