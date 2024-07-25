import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center gap-5 bg-zinc-100 px-32'>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="relative card w-full rounded-xl h-[50vh] bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full text-[#CDEA68] border-[#CDEA68]  border-[1px]'>&copy; 2019-2024</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
            <div className="relative flex items-center justify-center card w-1/2 rounded-xl h-[50vh] bg-[#212121]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full text-white  border-[1px]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="relative flex items-center justify-center card w-1/2  rounded-xl h-[50vh] bg-[#212121]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full text-white  border-[1px]'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>

    </div>
  )
}

export default Cards