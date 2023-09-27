import React from "react";
import "@/src/styles/header.css";
import Nav from "./nav";

const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
