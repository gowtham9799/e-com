import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import image1 from './images/bluet.jpg';
import image2 from './images/bluet.jpg';
import image3 from './images/bnw.jpg';
import image4 from './images/smi.jpg';
import image5 from './images/zephyr-stripe-skater-dress-white-n-blue.webp';
import Carousel from "react-multi-carousel";


const product = [
{
product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
image:"https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
price:"$599",
old_price:"₹499",
},   
]

function Card() {
  return (
    <div className='flex flex-wrap justify-start lg:ml-72 px-1 z-10'>

 {product.map((pro) => ( 
  
<div className="bg-gray-300 w-[9rem] grow md:grow-0 md:w-[16.5rem] lg:w-[16rem] xl:w-[21rem] rounded-lg shadow-md dark:bg-gray-900 mt-5 hover:scale-100 hover:shadow-lg hover:shadow-gray-500 duration-200 mx-2 lg:mx-3 ">
<Link to={""} >

    <div className=''>
        <img className='px-2 py-2' src={pro.image}/>
    </div>

    <div className="">
        <div className='flex justify-start xl:px- xl:absolute bg-gray-300 xl:py-4 xl:mt-[-35px]  border-t-3'>
            <p className="text-sm  text-gray-900 px-4 w-[21rem]">{pro.product_name} </p>
        </div>
        
        <div className="text-start px-4  py-2 flex">
            <del className="text-xl  text-black dark:text-white">{pro.price}</del>  
            <p className='text-red-500 pl-5 text-xl '>{pro.old_price}</p>     
        </div>
        <div className='flex justify-between flex-wrap  '>
        <div class="flex px-3 mt-2">
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5  h-6 ">5.0</span>
        </div>
        <div className='mx-2 mr-4 mt-3'>
        <button  className= "hover:scale-105  text-white mb-3 justify-start bg-cyan-500 hover:bg-gray-600 shadow-md shadow-gray-500 white:bg-gray-800 font-medium rounded-lg text-sm px-3 py-2 animate-bounce delay-1000  flex capitalize"> <HiOutlineShoppingCart className='w-5 h-5 mr-1'/>Add to cart </button>
        </div>
        </div>
    </div>
    </Link>
</div>

))}   


    </div>
  )
}

export default Card