import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full text-white h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20">
            {["we create","eye opening","presentaions"].map((item,index)=>{
               return <div className="masker ">
                <div className="w-fit flex overflow-hidden">
                    {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1.2}}  className='w-[9vw] h-[6vw] relative top-[1.1vw] bg-red-400'></motion.div>)}
                    <h1 className='flex items-center uppercase text-[9vw] leading-[7.45vw]  font-medium font-founders-grotesk'>{item}</h1>
                </div>
            </div>
            })}
        </div>
        <div className="border-t-[1px] mt-20 border-zinc-800 flex justify-between items-center py-5 px-20">
            {["for public and private companies","From the first pitch to IPO"].map((itm,idx)=>{
               return  <p className='text-md font-light tracking-tighter leading-none'>{itm}</p>
            })}
            <div className="strat flex items-center gap-5">
                <div className="font-light text-sm uppercase px-5 py-2 border-[1px] border-zinc-400 rounded-full  text-md">Start new </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  border-2 border-zinc-500">
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage