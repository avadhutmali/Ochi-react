import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2  border-zinc-300 flex overflow-hidden text-white whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='text-[24vw] pr-20 leading-none font-bold pt-10 -mt-[7vw] font-founders-grotesk  uppercase'>we are ochi</motion.h1> 
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='text-[24vw] pr-20 leading-none font-bold pt-10 -mt-[7vw] font-founders-grotesk  uppercase'>we are ochi</motion.h1> 
            
        </div>
    </div>
  )
}

export default Marquee