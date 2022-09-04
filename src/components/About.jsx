import React from 'react'
import Me from '../assets/me.jpg'

const About = () => {
  return (
    <div name='about' className='pt-80 pb-40 w-full h-screen bg-[#f5f7f8] text-[#8da4b2]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                <div>

                    <div style={{backgroundImage: `url(${Me})`}}
            className='shadow-lg shadow-[#8697a2] group container rounded-md flex justify-center items-center mx-auto personal-img'>
              
                <div>
                </div>
                </div>
                <div> 

                <h1 className='text-center first-letter:font-[Inconsolata] text-6xl  text-[#47606f61]'>About</h1>

               <p className=' text-center pr-10 pl-10 font-[Inconsolata] text-3xl  text-[#8697a2]'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
               nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
               deserunt mollit anim id est laborum.
               </p>
                </div>

                </div>
                </div>


                
        </div>



  )
}

export default About