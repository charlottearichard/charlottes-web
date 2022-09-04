import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#f5f7f8] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[700px] w-full'>
        <div className='pb-8'>
        <h1 className='text-center first-letter:font-[Inconsolata] text-6xl  text-[#47606f61]'>Contact</h1>
        <p className='font-[Inconsolata] text-center text-2xl text-[#697881]'> lets get in touch </p>
        </div>
        <input className='my-4 p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
        <textarea className='my-4 p-2' rows="10" placeholder='Message' name="message"></textarea>
        <button className="mt-7 py-3 justify-center font-[Inconsolata] text-2xl text-[#708897] border-4 border-[#708897] px-6 my-2 flex items-center hover:bg-[#708897] hover:text-[#e4ebef]" > 
        Say 'Hello'! </button>
      
      </form>

      </div>
  )
}

export default Contact