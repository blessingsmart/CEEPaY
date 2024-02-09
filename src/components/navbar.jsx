import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GrBasket } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='flex flex-col w-screen'> 
        <div className='flex h-10'> 
            <div className='bg-black w-full'></div>
            <div className='w-52 bg-gradient-to-r  from-purple-400 to-purple-500 border-l-4 border-white'></div>
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
        <div className='flex h-16 py-3 items-center justify-between px-10'>
            <div className='flex items-center gap-5'>
            <IoReorderThree size={40}/>
            <p className='font-semibold text-3xl'>CEFPaY</p>
            </div>
            <div className='flex gap-2 text-lg'>
                <input 
                type="text"
                placeholder='Search' 
                className='border-2 border-gray-200 rounded-lg w-96'/>
                <button className='bg-purple-700 rounded-lg px-3'>Search</button>
            </div>
            <div className='flex gap-8 text-lg'>
                <div className='flex gap-2 items-center'>
                    <RxAvatar />
                    <p>Account</p>
                    <IoIosArrowDown />
                </div>
                <div className='flex gap-2 items-center'>
                    <FaRegCircleQuestion />    
                    <p>Help</p>
                    <IoIosArrowDown />
                </div>
                <div className='flex gap-2 items-center'>
                    <GrBasket />    
                    <p>Cart</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar