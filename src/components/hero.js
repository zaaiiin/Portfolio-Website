import React from "react";
import "@/styles/hero.css";
import "@/app/flexbox.css";
import Desktop from "public/images/desktop.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <hero>
      <div className="hero flex-container">
        <div className="hero-content col-4 ">
          <h1 className="hero-title bg-red  ">Hello, I'm Zaain </h1>
          <p className="hero-paragraph">
            I am a frontend developer and I love seeing ideas come to life on
            the screen! I also love learning new skills.
          </p>
          <button className="more-btn bg-sky-800 text-white">
            More about me
          </button>
        </div>

        <div className="hero-photo col-2">
          <Image
            src={Desktop}
            alt="desktop"
            className="desktop-image"
            width={210}
            height={210}
          ></Image>
        </div>

        {/* <div className="hero-design">hhhhhhhhh</div> */}
      </div>
    </hero>
  );
};

export default Hero;
