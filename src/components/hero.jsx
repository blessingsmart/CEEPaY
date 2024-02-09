import React from 'react'
import food from "..//assets/food1.jpg"

const Hero = () => {
  return (
    <div className='bg-black flex w-screen relative'>
        <div className='bg-white text-black m-5 rounded-xl p-5 flex flex-col gap-5'>
            <p>Mobile phones & Tablet</p>
            <p>Electronics</p>
            <p>Home, Furniture & Appliances</p>
            <p>Health & Beauty</p>
            <p>{'Fashion (Male/Female)'}</p>
            <p>Sports, Arts & Outdoors</p>
            <p>Agriculture</p>
        </div>
            <img src={food} alt=""
                className='rounded-xl my-5 absolute top-0 bottom-0 right-0 w-1/2 object-cover' />
    </div>
  )
}

export default Hero