import React from "react";
import Header from "../components/footer";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
