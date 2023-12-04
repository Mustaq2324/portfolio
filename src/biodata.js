import React from "react";
function biodata() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className=" h-full shadow-sm shadow-slate-600 p-5">
      
        <div className="mt-6 w-full ">
          {" "}
          {/* BIODATA */}
          <div className="bg-re w-full flex gap-1 ">
            <h1 className="font-bold">Name :</h1>
            <p className="text-gray-500">Harish</p>
          </div>
          <div className="bg-re w-full flex gap-1 mt-2">
            <h1 className="font-bold">Profile :</h1>
            <p className="text-gray-500">Full Deveolper</p>
          </div>
          <div className="bg-re w-full flex gap-1  mt-2">
            <h1 className="font-bold">Email :</h1>
            <p className="text-gray-500">harishyam07@gmail</p>
          </div>
          <div className="bg-re w-full flex gap-1 mt-2">
            <h1 className="font-bold">Phone :</h1>
            <p className="text-gray-500">9025870868</p>
          </div>
          <div>
            {/*    RANGE BAR */}
            <h1 className="mt-5  font-bold">SKILL</h1>
            <div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h2 className="mt-2 ">HTML</h2> <h2 className="mt-2">80%</h2>
                </div>
                <h1 className="w-[100%] h-2 bg-orange-400">
                  <p className="w-[80%] h-2 bg-gray-500"></p>
                </h1>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                
                  <h2 className="mt-2 ">CSS</h2> <h2 className="mt-2">70%</h2>
                </div>
                <h1 className="w-[100%] h-2 bg-orange-400">
                  <p className="w-[70%] h-2 bg-gray-500"></p>
                </h1>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h2 className="mt-2 ">JAVASCRIPT</h2>{" "}
                  <h2 className="mt-2">40%</h2>
                </div>
                <h1 className="w-[100%] h-2 bg-orange-400">
                  <p className="w-[40%] h-2 bg-gray-500"></p>
                </h1>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h2 className="mt-2 ">NODE</h2> <h2 className="mt-2">40%</h2>
                </div>
                <h1 className="w-[100%] h-2 bg-orange-400">
                  <p className="w-[10%] h-2 bg-gray-500"></p>
                </h1>
              </div>
            </div>{" "}
            {/* RANGER BAR FOTTER */}
          </div>
        </div>
        <div>
          {" "}
          {/*ABOUTME */}
          <h1 className="mt-8 font-bold text-3xl">About me</h1>
          <h1 className="w-[40%] h-1 bg-orange-400 mt-1"> </h1>
         <div className="text-gray-500 text-lg mt-9">
        
         <p>
            I am a passionate and highly motivated full stack developer, eager
            to embark on a fulfilling career in the world of web development. My
            journey into this field began with a strong fascination for creating
            digital experiences and solving complex problems.</p>
            
            <p>
            As a recent
            graduate with a degree in [Your Degree], I have honed my skills in
            both front-end and back-end development. My programming skills
            include proficiency in languages such as JavaScript, Python, HTML,
            CSS, and more. I am also well-versed in various web development
            frameworks and libraries, including React, Node.js, and Django.</p>


           <p>
            During my academic journey, I completed several hands-on projects
            that allowed me to apply my technical knowledge to real-world
            scenarios. These projects demonstrate my ability to design and
            develop responsive, user-friendly web applications. I thrive on
            challenges and have a keen eye for detail, ensuring that my code is
            not only functional but also clean and maintainable.
           </p>
         </div>
          
        </div>
      </div>
    </div>
  );
}

export default biodata;
