import React, { useState } from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./pages.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("ham");
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <div className="socialContainer">
        <div className="myLink">
          <a
            href="https://www.linkedin.com/in/mohammadreza-amini-15b49719a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={25} />
          </a>

          <a
            href="https://www.instagram.com/mrezaamini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={25} />
          </a>
          <a
            href="https://github.com/mrezaamini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={26} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
