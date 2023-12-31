import React from 'react'
import {GrMonitor} from "react-icons/gr"
import {IoMdCodeWorking} from "react-icons/io"
import {GiPhotoCamera} from "react-icons/gi"
import {AiOutlineMobile} from "react-icons/ai"
import {IoMdStats} from "react-icons/io"


function services() {
  return (
    <div className='p-4 flex flex-col items-center text-center '>
   <div className='flex flex-col items-center'>     
    <h1 className='font-bold text-5xl  mt-7'>SERVICES</h1>
      <p className='mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, obcaecati.</p>
      <p className='h-2 w-[50px] mt-3  bg-orange-400'></p>
    </div>   
             <div> 
              <div className='shadow-xl shadow-slate-600 p-4  mt-8  '>
              <div className='mt-10 flex flex-col items-center bg-white'>   
                   <span className='text-6xl flex items-center  justify-center border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><GrMonitor/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
              </div>
               <div  className='shadow-xl shadow-slate-600 p-4  mt-8'>
               <div className='mt-10 flex flex-col items-center'>  
                   <span className='text-6xl flex justify-center items-center  border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><IoMdCodeWorking/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               <div className='shadow-xl shadow-slate-600 p-4  mt-8' >
               <div className='mt-10 flex flex-col items-center'>
                   <span className='text-6xl flex  justify-center items-center   border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><GiPhotoCamera/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               <div  className='shadow-xl shadow-slate-600 p-4  mt-8'>
               <div className='mt-10 flex flex-col items-center'>   
                   <span className='text-6xl flex  justify-center items-center  border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><AiOutlineMobile/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               <div className='shadow-xl shadow-slate-600 p-4 mt-8'>
                   <div className='mt-10 flex flex-col items-center'>    
                    <span className='text-6xl flex  justify-center items-center   border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><IoMdStats/></span>
                   <h1 className='mt-3 font-bold text-xl'>MARKET SERVICES</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               
            </div>
    </div>
  )
}

export default services