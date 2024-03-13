import React from 'react'
import phone from "../assets/ad.png";
import groceries from "../assets/ad-1.png";
import furniture from "../assets/ad-2.png";
import electronics from "../assets/ad-3.png";
import fashion from "../assets/ad-4.png";
import generator from "../assets/ad-5.png";
import mobile from "../assets/ad-6.png";
import watches from "../assets/ad-7.png";

const Product = () => {
  return (
    <div className='w-screen'>
        <div className='grid grid-cols-4 gap-5 justify-items-center'>
            <div className='flex flex-col gap-3 text-center'>
                <img src={phone} alt="mobile phone" />
                <h2>Mobile Phones & Tablets</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={groceries} alt="groceries & food" />
                <h2>Groceries & Food</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={furniture} alt="furniture & Appliance" />
                <h2>Home, Furniture & Appliance</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={electronics} alt="Electronics" />
                <h2>Electronics</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={fashion} alt="Fashion (Male/Female)" />
                <h2>{"Fashion (Male/Female)"}</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={generator} alt="Generators" />
                <h2>Generators</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={mobile} alt="Mobile Accessorie" />
                <h2>Mobile Accessorie</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={watches} alt="Watches" />
                <h2>Watches</h2>
            </div>
        </div>
        <div>
            <h1>Best Selling Items</h1>
        </div>
    </div>
  )
}

export default Product