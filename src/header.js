// Header.js

import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import profileimg from "./img/edited.png";
import Biodata from "./biodata";
import Services from "./services";
import Another from "./another";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import "./index.css";

function Header() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(false);

  function handleNavbar() {
    setShow(!show);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="body">
      <div className={`h-20 p-2 z-50 top-0 sticky text-white bg-black w-full ${color ? "bg-orange-600" : "bg-black"} transition-all duration-500`}>
        <div className="flex justify-between p-3 items-center">
          <h1 className="text-2xl font-bold">HarishFolio</h1>
          <span className="text-2xl" onClick={handleNavbar}>
            <FaBars />
          </span>
        </div>
      </div>
      <div className="container bg-black text-white">
        <nav
          className={`${
            show ? "right-0" : "-right-full"
          } z-50 w-full h-full bg-orange-500 fixed top-0 transition-all duration-700`}
        >
          <h3
            className="mr-3 p-6 flex justify-end text-white transition-all duration-700 text-2xl"
            onClick={handleNavbar}
          >
            <ImCancelCircle />
          </h3>
          <h1 className="text-4xl font-bold gap-4">Harish Folio</h1>
          <ul className="text-xl flex flex-col gap-3 mt-7 p-4">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>WORK</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div
          id="cover"
          className="h-[500px] bg-cover w-full bg-center pt-20"
          style={{ backgroundImage: `url(${profileimg})` }}
        >
          <div className="relative">
            <h1 className="absolute text-xl font-bold right-4 sm:right-10">I am Harish</h1>
            <h2 className="animate-bounce text-sm absolute mt-8 ml-[62vw] right-4 top-5 sm:right-10">Web Developer</h2>
          </div>
        </div>
      </div>
      <Biodata />
      <Services />
      <Another />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default Header;
