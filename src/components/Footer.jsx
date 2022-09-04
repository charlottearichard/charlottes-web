import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {GrTwitter} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    
    <div className='bg-[rgb(245,247,248)]'>
        
        <p className='pt-10 text-center first-letter:font-[Inconsolata] text-2xl  text-[#5a6f7d]'>
        Made with love (and a little bit of frustration).</p>

        <div className='text-center py-6'>
          <button className='text-5xl px-6 text-[#b9c9d4]'> 
          <a href="https://github.com/charlottearichard">
          <AiFillGithub/> </a></button> 


          <button className='text-5xl px-6 text-[#b9c9d4]'> 
          <a href="https://twitter.com/npmcharlotte">
          <GrTwitter/></a></button>


          <button className='text-5xl px-6 text-[#b9c9d4]'> 
          <a href="/">
          <BsInstagram/></a></button>
        </div>
        </div>


  )
}

export default Footer