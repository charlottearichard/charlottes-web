import React from 'react'
import Clouds from '../assets/clouds.jpg'
import LensTrends from '../assets/lenstrends.png'
import OldPort from '../assets/oldport.png'
import TranqTea from '../assets/tranquilitea.png'

const Portfolio = () => {
  return (
    <div className='bg-[rgb(245,247,248)] w-full md:h-screen text-[#8697a2] pt-10'>
        <div className='w-full h-full mx-auto p-4 flex flex-col justify-center'>
            <div className='pb-8'> 
            <h1 className='text-center first-letter:font-[Inconsolata] text-6xl  text-[#47606f61]'>Portfolio</h1>
            <p className='text-center pr-10 pl-10 font-[Inconsolata] text-3xl  text-[#8697a2]'>
                some things i've worked on </p>
            </div>

        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/*  lens trend img*/}
            <div style={{backgroundImage: `url(${LensTrends})`}}
            className='shadow-lg shadow-[#8697a2] group container rounded-md flex justify-center items-center mx-auto portfolio-img'>
               
               {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    {/* TITLE AND LINKS */}
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        LensTrends Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://moisescard.github.io/Lens-Trends/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8697a2]'>demo</button>
                        </a>
                        <a href='https://github.com/MoisesCard/Lens-Trends'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8697a2]'>github</button>
                        </a>
                    </div>
                </div>
            </div>

            {/*old port*/}
            <div style={{backgroundImage: `url(${OldPort})`}}
            className='shadow-lg shadow-[#8697a2] group container rounded-md flex justify-center items-center mx-auto portfolio-img'>
               
               {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    {/* TITLE AND LINKS */}
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Old Portfolio
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://charlottearichard.github.io/My-Website/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8697a2]'>demo</button>
                        </a>
                        <a href='https://github.com/charlottearichard/My-Website'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8697a2]'>github</button>
                        </a>
                    </div>
                </div>
            </div>

            {/*TranqTea*/}
            <div style={{backgroundImage: `url(${TranqTea})`}}
            className='shadow-lg shadow-[#8697a2] group container rounded-md flex justify-center items-center mx-auto portfolio-img'>
               
               {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    {/* TITLE AND LINKS */}
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        TranquiliTea Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/israel386/TranquiliTea'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8697a2]'>demo</button>
                        </a>
                        <a href='https://frozen-fjord-79958.herokuapp.com/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8697a2]'>github</button>
                        </a>
                    </div>
                </div>
            </div>



            </div>
        </div>
    </div>
  )
}

export default Portfolio