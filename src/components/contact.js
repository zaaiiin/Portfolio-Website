import React from "react";
import "@/styles/contact.css";

const Contact = () => {
  return (
    <div
      className="contact-me bg-primaryDarkBrown text-white text-center rounded-none pt-[40px] pb-[112px]"
      id="contact"
    >
      <h1>Contact Me</h1>
      <form className="contact-form mt-[30px] flex flex-col justify-center items-center mx-auto px-auto ">
        <input type="text" id="name" placeholder="Name"></input>
        <input
          type="text"
          id="email-address"
          placeholder="Email Address"
        ></input>
        <input
          type="text"
          id="message"
          placeholder="Message"
          className="test"
        ></input>
        <div className="submit-btn_container mt-[30px] ">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
