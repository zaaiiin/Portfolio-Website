import React from "react";
import "@/src/styles/hero.css";
import "@/src/app/flexbox.css";
import Desktop from "public/images/desktop.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <hero>
      <div className="hero flex-container">
        <div className="hero-content col-4">
          <h1 className="hero-title">Hello, I'm Zaain </h1>
          <p className="hero-paragraph">
            I am a frontend developer and I love seeing ideas come to life on
            the screen! I also love learning new skills.
          </p>
          <button className="more-btn">More about me</button>
        </div>

        <div className="hero-photo col-2">
          <Image
            src={Desktop}
            alt="desktop"
            className="desktop-image"
            width={200}
            height={200}
          ></Image>
        </div>

        {/* <div className="hero-design">hhhhhhhhh</div> */}
      </div>
    </hero>
  );
};

export default Hero;
