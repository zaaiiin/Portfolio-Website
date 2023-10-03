"use client";
import React, { use } from "react";
import "@/styles/header.css";
import Image from "next/image";
import Hamburgerbtn from "public/images/menu-icon.png";
import Closebtn from "public/images/close-btn.png";
import { useState } from "react";
import Nav from "./nav";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex h-10 relative">
      <div className="logo"></div>
      <div>
        <Nav />
      </div>
      <div>
        <button
          className="hamburger-menu bg-white absolute right-5 mt-5 md:invisible"
          onClick={() => setToggle(!toggle)}
        >
          <Image
            src={Hamburgerbtn}
            className="menu-icon"
            height={10}
            width={25}
          />
        </button>

        {toggle && (
          <div className="menu-container ">
            <ul className="menu-group absolute right-5 top-5 flex flex-col  items-left w-[200px] h-max bg-black ">
              <button
                className="close-btn absolute top-1 right-0 z-20"
                onClick={() => setToggle(!toggle)}
              >
                <Image
                  src={Closebtn}
                  className="close-icon "
                  height={15}
                  width={15}
                />
              </button>

              <li className="menu-group_item about-me">About me</li>
              <li className="menu-group_item">My work</li>
              <li className="menu-group_item contact">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
