import React from "react";
import { projects } from "./data";
import "@/app/flexbox.css";
import "@/app/globals.css";
import Image from "next/image";
import "@/styles/projects.css";

const ProjectsCards = () => {
  return (
    <>
      <div className="projects flex-container  text-black m-20 mx-0 justify-center gap-[30px]">
        {projects.map((value, index) => {
          const { project, caption, skills, cover } = value;

          return (
            <div className="projects-container ">
              <h2 className="project-name col-2 text-xl">{project}</h2>

              <div
                className="project-card shadow w-[300px] h-[400px] border-[2px] bg-primaryOrange rounded-lg p-5 m-0 "
                key={index}
              >
                <div className="img h-40 justify-center">
                  <Image src={cover} alt="project-screenshot" />
                </div>

                <div className="project-caption_container flex-end flex">
                  <p className="project-caption bg-black text-white p-4 mb-2 rounded-md ">
                    {caption}
                  </p>
                </div>

                <div className="skills-used_container">
                  <ul className="skills-used flex flex-wrap justify-start cursor-pointer ">
                    {skills.map((skill, skillIndex) => (
                      <li
                        className="each-skill bg-white px-3 m-1 rounded"
                        key={skillIndex}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsCards;
