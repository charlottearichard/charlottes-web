import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {GiSpiderWeb} from 'react-icons/gi';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    // sets oppisite value
    const handleClick = () => setNav(!nav)

    return(
        <div className='fixed w-full h-[80px] flex justify-between items center px-4 bg-[#f5f7f8] text-[#59707d]'> 
        <div>
         <h1 className='text-3xl'>   CHARLOTTE'S WEB </h1>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li> Home </li>
                <li> About </li>
                <li> Portfolio </li>
                <li> Contact </li>
            </ul>

        {/* Ham */}
        <div onClick={handleClick} className='md:hidden py-7 z-10'>
            {!nav ? <FaBars /> : <FaTimes/> }
        </div>

        {/* Mobile */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f0f3f5] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl text-[#59707d] '> Home </li>
                <li className='py-6 text-3xl text-[#59707d]'> About </li>
                <li className='py-6 text-3xl text-[#59707d]'> Portfolio </li>
                <li className='py-6 text-3xl text-[#59707d]'> Contact </li>
                <li className='py-6 text-3xl text-[#59707d]'> Resume </li>

            </ul>


        </div>
    )
}

export default Navbar; 
