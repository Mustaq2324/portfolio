import React from "react";
import secimg from "./img/post-3.jpg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi";
import { FaAward } from "react-icons/fa6";

function another() {
  return (
    <div>
      <div
        className="h-[300vw] w-[100%] bg-cover  bg-fixed my-5  relative"
        style={{ backgroundImage: `url(${secimg})` }}
      >
        <div className="absolute top-0 left-0 w-[100%] h-full bg-gray-600 bg-opacity-70"></div>
            <div className="  w-full">
            <div className="absolute z-20 ">
             <div className="flex flex-col justify-center ml-[80px] items-center">
             <span className="text-6xl flex  justify-center items-center  border-[9px] mt-7  border-orange-400  rounded-full w-[100px] h-[100px] p-2"><IoMdCheckmarkCircle /></span>
               <h1 className="font-bold text-xl mt-3 ">450</h1>
               <h2 className="text-lg">  WORKS COMPLETED</h2>
             </div>
          </div>
          <div className="absolute z-20  ">
             <div className="flex flex-col justify-center ml-[80px] items-center mt-[200px]">
             <span className="text-6xl flex  justify-center items-center  border-[9px] mt-7  border-orange-400  rounded-full w-[100px] h-[100px] p-2">< SlCalender/></span>
               <h1 className="font-bold text-xl mt-3 ">450</h1>
               <h2 className="text-lg">  WORKS COMPLETED</h2>
             </div>
          </div>
          <div className="absolute z-20 ">
             <div className="flex flex-col justify-center ml-[80px] items-center mt-[400px]">
             <span className="text-6xl flex  justify-center items-center  border-[9px] mt-7  border-orange-400  rounded-full w-[100px] h-[100px] p-2"><HiUserGroup  /></span>
               <h1 className="font-bold text-xl mt-3 ">450</h1>
               <h2 className="text-lg">  WORKS COMPLETED</h2>
             </div>
          </div>
          <div className="absolute z-20 ">
             <div className="flex flex-col justify-center ml-[80px] items-center mt-[600px]" >
             <span className="text-6xl flex  justify-center items-center  border-[9px] mt-7  border-orange-400  rounded-full w-[100px] h-[100px] p-2"><FaAward/></span>
               <h1 className="font-bold text-xl mt-3 ">450</h1>
               <h2 className="text-lg">  WORKS COMPLETED</h2>
             </div>
          </div>
           </div>

      </div>
    </div>
  );
}

export default another;
