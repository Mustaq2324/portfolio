import React from "react";
import pimg1 from "./img/work-1.jpg";
import pimg2 from "./img/work-2.jpg";
import pimg3 from "./img/work-3.jpg";
import pimg4 from "./img/work-4.jpg";
import pimg5 from "./img/work-5.jpg";
import pimg6 from "./img/work-6.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";

function Portfolio() {
  return (
    <div className="p-4 mt-11">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold">PORTFOLIO </h1>
        <p className="mt-3">
          {" "}
          ipsum dolor sit amet consectetur adipisicing elit. Veniam, beatae. HARISH{" "}
        </p>
        <p className="flex justify-center h-1 w-11 bg-orange-400 mt-4"></p>
      </div>
  
      <div className="mt-9 shadow-slate-700  shadow-xl p-4">
        <img src={pimg1} alt="project"></img>
        <h1 className="text-xl mt-8">Project NO 1</h1>
        <p className="text-orange-400">
          Web design<span className="text-black">/11.10.2023</span>{" "}
        </p>
        <span className="text-3xl flex justify-end mt-5">
          <AiOutlinePlusSquare  />
        </span>
       
      </div>

      <div className="mt-9 shadow-slate-700   shadow-xl p-4">
        <img src={pimg2} alt="project"></img>
        <h1 className="text-xl mt-8">Project NO 1</h1>
        <p className="text-orange-400">
          Web design<span className="text-black">/11.10.2023</span>{" "}
        </p>
        <span className="text-3xl flex justify-end mt-5">
          <AiOutlinePlusSquare  />
        </span>
       
      </div>
      <div className="mt-9 shadow-slate-700   shadow-xl p-4">
        <img src={pimg3} alt="project"></img>
        <h1 className="text-xl mt-8">Project NO 1</h1>
        <p className="text-orange-400">
          Web design<span className="text-black">/11.10.2023</span>{" "}
        </p>
        <span className="text-3xl flex justify-end mt-5">
          <AiOutlinePlusSquare  />
        </span>
       
      </div>
      <div className="mt-9 shadow-slate-700   shadow-xl p-4">
        <img src={pimg4} alt="project"></img>
        <h1 className="text-xl mt-8">Project NO 1</h1>
        <p className="text-orange-400">
          Web design<span className="text-black">/11.10.2023</span>{" "}
        </p>
        <span className="text-3xl flex justify-end mt-5">
          <AiOutlinePlusSquare  />
        </span>
       
      </div>
      <div className="mt-9 shadow-slate-700   shadow-xl p-4">
        <img src={pimg5} alt="project"></img>
        <h1 className="text-xl mt-8">Project NO 1</h1>
        <p className="text-orange-400">
          Web design<span className="text-black">/11.10.2023</span>{" "}
        </p>
        <span className="text-3xl flex justify-end mt-5">
          <AiOutlinePlusSquare  />
        </span>
       
      </div>
      <div className="mt-9 shadow-slate-700   shadow-xl p-4">
        <img src={pimg6} alt="project"></img>
        <h1 className="text-xl mt-8">Project NO 1</h1>
        <p className="text-orange-400">
          Web design<span className="text-black">/11.10.2023</span>{" "}
        </p>
        <span className="text-3xl flex justify-end mt-5">
          <AiOutlinePlusSquare  />
        </span>
       
      </div>
     
    </div>
  );
}

export default Portfolio;
