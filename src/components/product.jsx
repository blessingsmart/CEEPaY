import React, { useEffect} from 'react'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import phone from "../assets/ad.png";
import groceries from "../assets/ad-1.png";
import furniture from "../assets/ad-2.png";
import electronics from "../assets/ad-3.png";
import fashion from "../assets/ad-4.png";
import generator from "../assets/ad-5.png";
import mobile from "../assets/ad-6.png";
import watches from "../assets/ad-7.png";
import blender from '../assets/item.png';
import han from "../assets/item-1.png";
import rice from "../assets/item-2.png";
import whiskey from "../assets/item-3.png";
import eyeglass from "../assets/item-4.png";
import tripod from "../assets/item-5.png";
import makeup from "../assets/item-6.png";
import radio from "../assets/item-7.png";
import laptop from "../assets/itemblur.png";



const Product = () => {

    useEffect(() => {
  
        const splide2 = new Splide('#splide2', {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 4,},
            },
          autoScroll: {
            speed: 1,
          },
        }).mount({ AutoScroll });
      
        return () => {
            // Destroy Splide instances on unmount to prevent memory leaks.
            splide2.destroy();
        };
      
      }, []); 



  return (
    <div className='w-screen'>
        <div className='grid grid-cols-4 gap-5 my-10 justify-items-center'>
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
        <div className='py-5 mx-12'>
            <h1 className='mb-5 font-bold text-2xl'>Best Selling Items</h1>
            <div id="splide2" className="splide  md:basis-3/4 ">
                <div className="splide__track rounded-lg ">
                    <ul className="splide__list "> 
                        <li className="splide__slide px-5 ">
                            <img src={blender} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Silver Crest 2 Litres German Indust...</h2>
                            <h2>₦19,800</h2>
                        </li>
                        <li className="splide__slide px-5 ">
                            <img src={han} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>HAN RIVER Powerful Multifunction...</h2>
                            <h2>₦2,767</h2>
                        </li>
                        <li className="splide__slide px-5 ">
                            <img src={rice} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Mama's Pride Nigerian Parboiled R...</h2>
                            <h2>₦9,900</h2>
                        </li>
                        <li className="splide__slide px-5 ">
                            <img src={whiskey} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Jameson Irish Whiskey 70cl</h2>
                            <h2>₦9,500</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='h-12 px-12 bg-red-600 text-white flex justify-between items-center'>
            <h2>Discount Sales</h2>
            <button>see more</button>
        </div >
        <div className='grid grid-cols-4 gap-5 my-10 justify-items-center'>
            <div className='flex flex-col gap-3 text-center'>
                <img src={eyeglass} alt="mobile phone" />
                <h2>Mobile Phones & Tablets</h2>
                <h2>₦3,075</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={tripod} alt="mobile phone" />
                <h2>Photochromic Anti Blue Light Glass...</h2>
                <h2>₦21,150</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={makeup} alt="mobile phone" />
                <h2>Phone Vlog Video Kit With Tripod...</h2>
                <h2>₦3,499</h2>
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <img src={radio} alt="mobile phone" />
                <h2>BLUETTI EB3A 600W 268Wh Port...</h2>
                <h2>₦219,999</h2>
            </div>
        </div>
        <div className='py-5 mx-12'>
            <h1 className='mb-5 font-bold text-2xl'>Best Selling Items</h1>
            <div className='flex gap-5 my-10 justify-items-center'>
                        <div className=" px-5 ">
                            <img src={blender} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Silver Crest 2 Litres German Indust...</h2>
                            <h2>₦19,800</h2>
                        </div>
                        <div className="px-5 ">
                            <img src={han} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>HAN RIVER Powerful Multifunction...</h2>
                            <h2>₦2,767</h2>
                        </div>
                        <div className="px-5 ">
                            <img src={rice} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Mama's Pride Nigerian Parboiled R...</h2>
                            <h2>₦9,900</h2>
                        </div>
                        <div className="px-5 ">
                            <img src={whiskey} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Jameson Irish Whiskey 70cl</h2>
                            <h2>₦9,500</h2>
                        </div>
                </div>
        </div>
        <div className='py-5 mx-12'>
            <h1 className='mb-5 font-bold text-2xl'>Best Selling Items</h1>
            <div className='flex gap-5 my-10 justify-items-center'>
                        <div className=" px-5 ">
                            <img src={blender} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Silver Crest 2 Litres German Indust...</h2>
                            <h2>₦19,800</h2>
                        </div>
                        <div className="px-5 ">
                            <img src={han} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>HAN RIVER Powerful Multifunction...</h2>
                            <h2>₦2,767</h2>
                        </div>
                        <div className="px-5 ">
                            <img src={rice} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Mama's Pride Nigerian Parboiled R...</h2>
                            <h2>₦9,900</h2>
                        </div>
                        <div className="px-5 ">
                            <img src={whiskey} 
                            alt=""
                            className='rounded-lg'/>
                            <h2>Jameson Irish Whiskey 70cl</h2>
                            <h2>₦9,500</h2>
                        </div>
                </div>
        </div>
        <div className='h-12 px-12 bg-red-600 text-white flex justify-between items-center'>
            <h2>Discount Sales</h2>
            <button>see more</button>
        </div >
        <div>
            {/* <div className=''>
                <div className='relative bg-pink-600 h-full w-full'></div>
                <img src={laptop} alt="" 
                className='absolute'/>
                <h3>Computing Deals</h3>
            </div> */}
        </div>
    </div>
  )
}

export default Product