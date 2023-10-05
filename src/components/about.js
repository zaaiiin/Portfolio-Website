import React from "react";
import { aboutMe } from "./data";
import "@/styles/about.css";

const About = () => {
  return (
    <div className="about-me bg-primaryDarkBrown text-white text-center rounded-none pt-[20px] pb-28">
      {aboutMe.map((value, index) => {
        const { p1, p2, p3 } = value;

        return (
          <div className="paragraphs">
            <h1 className="about-me">More about me</h1>
            <p className="about-me_p p1  fade-in-from-left" key={index}>
              {p1}
            </p>
            <p
              className="about-me_p p2 fade-in-from-left fade-in-delayed-1"
              key={index}
            >
              {p2}
            </p>
            <p
              className="about-me_p p3 fade-in-from-left fade-in-delayed-2"
              key={index}
            >
              {p3}
            </p>
          </div>
        );
      })}

      <button className="my-projects">See my projects</button>
    </div>
  );
};

export default About;
