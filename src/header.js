import React from "react";
import { FaBars } from "react-icons/fa6";
import profileimg from "./img/edited.png";

function Header() {
  return (
    <div className="header-container bg-black text-white ">
      {/* NAME */}
      <div className="flex justify-around p-4 bg-black w-full fixed z-[100]">
        <h1 className="text-2xl font-bold ml-3">HarishFolio</h1>
        <span className="mr-3 mt-1 text-2xl"><FaBars /></span>
      </div>
      <div className="pt-16">
        <div
          id="cover"
          className="h-[500px]   bg-cover w-full bg-center   "
          style={{ backgroundImage: `url(${profileimg})` }}
        >
          <h1 className="absolute text-xl font-bold ml-[60vw]">I am Harish</h1>
          <h2 className="animate-bounce text-sm absolute mt-8  ml-[62vw]">Web Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
  