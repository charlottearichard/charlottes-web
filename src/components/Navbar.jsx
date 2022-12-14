import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
                <li> <NavLink to='/'> Home </NavLink></li>
                <li> <NavLink to='/about'> About </NavLink></li>
                <li> <NavLink to='/portfolio'> Portfolio </NavLink></li>
                <li> <NavLink to='/contact'> Contact </NavLink></li>
            </ul>

        {/* Ham */}
        <div onClick={handleClick} className='md:hidden py-7 z-10'>
            {!nav ? <FaBars /> : <FaTimes/> }
        </div>

        {/* Mobile */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f0f3f5] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl text-[#59707d] '> <NavLink to="/">Home</NavLink> </li>
                <li className='py-6 text-3xl text-[#59707d]'> <NavLink to="/about">About</NavLink> </li>
                <li className='py-6 text-3xl text-[#59707d]'> <NavLink to="/portfolio"> Portfolio</NavLink> </li>
                <li className='py-6 text-3xl text-[#59707d]'> <NavLink to="/contact">Contact</NavLink> </li>

            </ul>


        </div>
    )
}

export default Navbar; 
