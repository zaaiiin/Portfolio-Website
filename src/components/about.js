import React from "react";
import { aboutMe } from "./data";
import "@/styles/about.css";

const About = () => {
  return (
    <div className="about-me bg-primaryDarkBrown text-white text-center rounded-none p-[40px] pb-[112px]">
      {aboutMe.map((value, index) => {
        const { p1, p2, p3 } = value;

        return (
          <div className="paragraphs ">
            <h1 className="about-me">More about me</h1>
            <div className="all-paragraphs md:m-[100px]">
              <p
                className="about-me_p p1 md:text-lg   fade-in-from-left"
                key={index}
              >
                {p1}
              </p>
              <p
                className="about-me_p p2 md:text-lg fade-in-from-left fade-in-delayed-1"
                key={index}
              >
                {p2}
              </p>
              <p
                className="about-me_p p3 md:text-lg  fade-in-from-left fade-in-delayed-2"
                key={index}
              >
                {p3}
              </p>
            </div>
          </div>
        );
      })}

      <button className="my-projects">See my projects</button>
    </div>
  );
};

export default About;
