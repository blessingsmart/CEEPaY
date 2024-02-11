import React from 'react'
import { IoReorderThree, IoShirtOutline, IoPricetagsOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GrBasket } from "react-icons/gr";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='flex flex-col'> 
        <div className='hidden md:flex h-12'> 
            <div className='bg-black w-full'></div>
            <div className='w-52 bg-gradient-to-r  from-purple-400 to-purple-500 border-l-4 border-white'></div>
            <div className='flex flex-col w-72 bg-blue-300 justify-center items-center font-semibold'>
                <p className='text-sm font-semibold'>Call to order</p>
                <strong>0808 104 5656</strong>
            </div>
        </div>
        <div className='flex h-10 bg-gray-200 px-3 justify-center items-center gap-5 md:gap-10 text-sm font-medium'>
            <p>CEFPaY</p>
            <p>Become a vendor</p>
            <p className='flex gap-1 items-center'>services
            <IoIosArrowDown />
            </p>
        </div>
        <div className='flex h-16 p-3 items-center md:justify-between gap-2 md:px-10'>
            <div className='flex items-center md:gap-5'>
                <IoReorderThree size={40}/>
                <p className='hidden md:block font-semibold text-xl md:text-3xl'>CEFPaY</p>
            </div>
            <div className='flex md:gap-2 md:text-lg'>
                <input 
                type="text"
                placeholder='Search' 
                className='border-2 border-gray-200 md:rounded-md rounded-l-md p-1 md:w-96'/>
                <button className='hidden md:block bg-purple-700 rounded-md px-3'>Search</button>
                <button className='md:hidden bg-purple-700 rounded-r-md px-2'>
                    <IoIosSearch />
                </button>
            </div>
            <div className='hidden md:flex gap-8 text-base'>
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
        <div className='flex gap-3 text-sm justify-center items-center md:hidden'>
            <div className='flex flex-col items-center'>
                <TbDotsCircleHorizontal size={20}/>
                <h2>Browse All</h2>
            </div>
            <div className='flex flex-col items-center'>
                <IoShirtOutline size={20} />
                <h2>Fashion</h2>
            </div>
            <div className='flex flex-col items-center'>
                <HiOutlineDesktopComputer size={20} />
                <h2>computers</h2>
            </div>
            <div className='flex flex-col items-center'>
                <HiOutlineDevicePhoneMobile size={20} />
                <h2>phones</h2>
            </div>
            <div className='flex flex-col items-center'>
                <IoPricetagsOutline size={20} />
                <h2>All Deals</h2>
            </div>
        </div>
    </div>
  )
}

export default Navbar