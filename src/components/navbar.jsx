import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col w-screen'> 
        <div className='flex h-10'> 
            <div className='bg-black w-full'></div>
            <div className='w-64 bg-gradient-to-r  from-purple-400 to-purple-600 border-l-4 border-white'></div>
            <div className='flex flex-col w-52 justify-center items-center font-semibold text-sm'>
                <h1 className=''>Call to order</h1>
                <h1>0808 104 5656</h1>
            </div>

        </div>
    </div>
  )
}

export default Navbar