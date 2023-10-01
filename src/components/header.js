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
      {/* <div>
        <Nav />
      </div> */}
      <div>
        <button
          className="hamburger-menu bg-white absolute right-5 mt-5"
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
          <div>
            <button className="close-btn absolute right-5 mt-5 z-20">
              <Image
                src={Closebtn}
                className="close-icon  "
                height={25}
                width={25}
                onClick={() => setToggle(!toggle)}
              />
            </button>

            <ul className="menu-group  flex-col absolute right-0 mt-5 items-left rounded-md px-3 w-60">
              <li className="menu-group_item mt-2">About me</li>
              <li className="menu-group_item">My work</li>
              <li className="menu-group_item mb-2">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
