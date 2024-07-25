import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl font-neue-montreal '>
        <h1 className='font-neue-montreal text-[4.5vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full border-t-[1px] mt-20 border-[#6e832b] pt-10 flex gap-5">
            <div className="w-1/2 ">
                <h1 className='text-7xl'>Our apporach :</h1>
                <button className='px-10 py-6 bg-zinc-900 uppercase rounded-full text-white mt-10 flex gap-10 items-center'>Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#88a038] rounded-3xl"></div>
        </div>
    </div>
  )
}

export default About