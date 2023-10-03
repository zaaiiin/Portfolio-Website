import React from "react";
import "@/styles/hero.css";
import "@/app/flexbox.css";
import Desktop from "public/images/desktop.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <hero>
      <div className="hero flex-container m-[25px] lg:m-[50px]">
        <div className="hero-content col-4 pt-[30px] pr-[50px] pb-[0px] pl-[50px] md:p-[50px]">
          <h1 className="hero-title ">Hello, I'm Zaain </h1>
          <p className="hero-paragraph">
            I am a frontend developer and I love seeing ideas come to life on
            the screen! I also love learning new skills.
          </p>
          <button className="more-btn  ">More about me</button>
        </div>

        <div className="hero-photo col-1 m-[50px] lg:m-[0px] justify-center xl:justify-end  lg:mt-[50px] xl:mt-[70px]">
          <Image
            src={Desktop}
            alt="desktop"
            className="desktop-image md:w-[300px] md:h-[300px]  xl:w-[600px] xl:h-[600px] "
            width={210}
            height={210}
          ></Image>
        </div>
      </div>
    </hero>
  );
};

export default Hero;
