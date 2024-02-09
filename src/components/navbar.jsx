import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex flex-col w-screen'> 
        <div className='flex h-10'> 
            <div className='bg-black w-full'></div>
            <div className='w-52 bg-gradient-to-r  from-purple-400 to-purple-600 border-l-4 border-white'></div>
            <div className='flex flex-col w-72 bg-blue-300 justify-center items-center font-semibold'>
                <p className='text-sm font-semibold py-0'>Call to order</p>
                <p className='font-bold text-xl'>0808 104 5656</p>
            </div>
        </div>
        <div className='flex h-10 bg-gray-200 justify-center items-center gap-10 font-medium'>
            <p>CEFPaY</p>
            <p>Become a vendor</p>
            <p className='flex gap-1 items-center'>services
            <IoIosArrowDown />
            </p>
        </div>
        <div className='flex h-16 p-3 justify-around'>
            <IoReorderThree size={40}/>
            <p className='font-semibold text-3xl'>CEFPaY</p>
            <div className='flex gap-3'>
                <input 
                type="text"
                placeholder='Search' 
                className='border-2 border-gray-200'/>
                <button className='bg-purple-800 rounded-lg px-3'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar