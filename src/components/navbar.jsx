import React from 'react'

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
    </div>
  )
}

export default Navbar