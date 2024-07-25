import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const [isHovering1, setHovering1] = useState(false);
  const [isHovering, setHovering] = useState(false);

  return (
    <div className='w-full py-20 text-white'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-neue-montreal tracking-tight'>Featured Project</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute left-full z-[9] top-1/2 -translate-x-1/2 -translate-y-1/2 flex text-8xl overflow-hidden font-founders-grotesk leading-none text-[#CDEA68]'>
              {"FYDE".split('').map((itm, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%" }}
                  animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
                  className='inline-block'
                >
                  {itm}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute right-full z-[9] top-1/2 translate-x-1/2 -translate-y-1/2 flex text-8xl overflow-hidden font-founders-grotesk leading-none text-[#CDEA68]'>
              {"VISE".split('').map((itm, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
                  className='inline-block'
                >
                  {itm}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
