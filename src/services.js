import React from 'react'
import {GrMonitor} from "react-icons/gr"
import {IoMdCodeWorking} from "react-icons/io"
import {GiPhotoCamera} from "react-icons/gi"
import {AiOutlineMobile} from "react-icons/ai"
import {IoMdStats} from "react-icons/io"


function services() {
  return (
    <div className='p-4'>
   <div>     {/*STARTER */}
    <h1 className='font-bold text-5xl ml-7 mt-7'>SERVICES</h1>
      <p className='mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, obcaecati.</p>
      <p className='h-2 w-[50px] mt-3 ml-28 bg-orange-400'></p>
    </div>   
             <div> {/* ICONS */}
              <div className='shadow-xl shadow-slate-600 p-4  mt-8'>
              <div className='mt-10 text-center bg-white'>    {/* NO1 */}
                   <span className='text-6xl flex items-center ml-16 justify-center border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><GrMonitor/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
              </div>
               <div  className='shadow-xl shadow-slate-600 p-4  mt-8'>
               <div className='mt-10 text-center'>    {/* NO2 */}
                   <span className='text-6xl flex justify-center items-center ml-16  border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><IoMdCodeWorking/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               <div className='shadow-xl shadow-slate-600 p-4  mt-8' >
               <div className='mt-10 text-center'>    {/* NO3 */}
                   <span className='text-6xl flex  justify-center items-center ml-16  border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><GiPhotoCamera/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               <div  className='shadow-xl shadow-slate-600 p-4  mt-8'>
               <div className='mt-10 text-center'>    {/* NO4 */}
                   <span className='text-6xl flex  justify-center items-center ml-16  border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><AiOutlineMobile/></span>
                   <h1 className='mt-3 font-bold text-xl'>WEB DESIGN</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               <div className='shadow-xl shadow-slate-600 p-4 mt-8'>
                   <div className='mt-10 text-center'>    {/* NO5 */}
                    <span className='text-6xl flex  justify-center items-center ml-16  border-[9px]  border-orange-400 rounded-full w-[120px] h-[120px] p-2'><IoMdStats/></span>
                   <h1 className='mt-3 font-bold text-xl'>MARKET SERVICES</h1>
                   <p className='mt-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam rem praesentium illum ratione animi quis consequatur dolor obcaecati nesciunt.</p>
                 </div>
               </div>
               
            </div>
    </div>
  )
}

export default services