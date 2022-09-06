import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const [nav, setNav] = useState(false)
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
      }, [currentPage]);

    // sets oppisite value
    const handleClick = () => setNav(!nav)

    return(
        <div className='fixed w-full h-[80px] flex justify-between items center px-4 bg-[#f5f7f8] text-[#59707d]'> 
        <div>
         <h1 className='text-3xl'>   CHARLOTTE'S WEB </h1>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
            {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
            </ul>

        {/* Ham */}
        <div onClick={handleClick} className='md:hidden py-7 z-10'>
            {!nav ? <FaBars /> : <FaTimes/> }
        </div>

        {/* Mobile */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f0f3f5] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl text-[#59707d] '> <a href="/">Home</a> </li>
                <li className='py-6 text-3xl text-[#59707d]'> <a href="/about">About</a> </li>
                <li className='py-6 text-3xl text-[#59707d]'> <a href="/portfolio"> Portfolio</a> </li>
                <li className='py-6 text-3xl text-[#59707d]'> <a href="/contact">Contact</a> </li>

            </ul>


        </div>
    )
}

export default Nav; 
