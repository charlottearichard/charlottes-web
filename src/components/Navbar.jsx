import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {GiSpiderWeb} from 'react-icons/gi'
const Navbar = () => {
    return(
        <div className='fixed w-full h-[80px] flex justify-between items center px-4 bg-[#f5f7f8] text-[#2d383f]'> 
        <div>
         <h1 className='text-3xl'>   CHARLOTTE'S WEB </h1>
        </div>

        {/* Menu */}
        <div> 
            <ul className='hidden md:flex'>
                <li> Home </li>
                <li> About </li>
                <li> Portfolio </li>
                <li> Contact </li>
            </ul>
        </div>

        {/* Ham */}
        <div className='hidden'>
            <FaBars/> 
        </div>

        {/* Mobile */}
        <ul className='hidden'>
                <li> Home </li>
                <li> About </li>
                <li> Portfolio </li>
                <li> Contact </li>
            </ul>


        {/* Socials */}
        <div className='hidden'></div>


        </div>
    )
}

export default Navbar; 
