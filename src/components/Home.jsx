import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#f5f7f8]'>

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='font-[Inconsolata] text-3xl  text-[#8da4b2]'>hello world, my name is </h2>
        <h2 className='font-[Inconsolata] text-7xl  text-[#6a8596]'> Charlotte Ri'Chard </h2>
        <p className='font-[Inconsolata] text-5xl  text-[#b9c9d4]'> I am a web developer </p>
    <div>
        <button className="mt-7 py-3 font-[Inconsolata] text-2xl text-[#708897] border-4 border-[#708897] px-6 my-2 flex items-center hover:bg-[#708897] hover:text-[#e4ebef]" > LEARN MORE 
        <HiArrowNarrowRight className='ml-4'/> </button>
    </div>
    
    </div>

   

    </div>
  )
}

export default Home