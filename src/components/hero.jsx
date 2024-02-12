import React, { useEffect } from 'react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import sales from "..//assets/sales.jpg"
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';



const Hero = () => {

  useEffect(() => {
  
    const splide1 = new Splide('#splide1', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 1,
      breakpoints: {
        640: {
          perPage: 1,},
        },
      autoScroll: {
        speed: 1,
      },
    }).mount({ AutoScroll });
  
    return () => {
        // Destroy Splide instances on unmount to prevent memory leaks.
        splide1.destroy();
    };
  
  }, []); 

  return (
    <div className='bg-black flex md:justify-between justify-center my-5 w-screen md:px-10 md:py-5 p-3'>
        <div className='hidden bg-white text-black rounded-xl p-5 md:flex flex-col gap-5'>  
            <div className='flex gap-2'>
              <HiOutlineDevicePhoneMobile size={20} />
              <p>Mobile phones & Tablet</p>
            </div>
            <p>Electronics</p>
            <p>Home, Furniture & Appliances</p>
            <p>Health & Beauty</p>
            <p>{'Fashion (Male/Female)'}</p>
            <p>Sports, Arts & Outdoors</p>
            <p>Agriculture</p>
        </div>
        <div id="splide1" className="splide  md:basis-3/4 ">
          <div className="splide__track rounded-lg ">
            <ul className="splide__list "> 
            <li className="splide__slide px-5 ">
              <img src={sales} 
              alt=""
              className='rounded-lg'/>
            </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Hero