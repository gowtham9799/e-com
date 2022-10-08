import React  from 'react'
import { useState } from 'react';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Carousel from "react-multi-carousel";

import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import {BiFilterAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




const product = [
{
product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
image:"https://www.mrdustbin.com/en/wp-content/uploads/2021/05/surya.jpg",
price:"$599",
old_price:"₹499",
id:1
},
{
  product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
  image:"https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
  price:"$599",
  old_price:"₹499",
  id:2
  },
{
  product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
  image:"https://i.pinimg.com/736x/3f/7d/2e/3f7d2e51a8aa3a1b03e9f95bca177b30.jpg",
  price:"$599",
  old_price:"₹499",
  id:3
  },
  {
    product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
    image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
    price:"$599",
    old_price:"₹499",
    id:4
    },
    {
      product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
      image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
      price:"$599",
      old_price:"₹499",
      id:4
      },
      {
        product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
        image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
        price:"$599",
        old_price:"₹499",
        id:5
        },  
        {
          product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
          image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
          price:"$599",
          old_price:"₹499",
          id:6
          },  
          {
            product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
            image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
            price:"$599",
            old_price:"₹499",
            id:7
            },  
            {
              product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
              image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
              price:"$599",
              old_price:"₹499",
              id:8
              },      
]


function Card() {

  const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({set0:true, set1:true, set2:true, set3:true, set4:true, set5:true ,set10:true});
  return (
    
    <div className=' flex' >

   <div className=' overflow-y-auto gow h-[55.7rem] bg-white'>
  <div className='flex flex-wrap justify-start lg:ml-96  px-3 ml-3  pt-32'>
{product.map((pro) => ( 
<div className='my-3 group'>
<div className=" border-white w-[8rem]  md:grow-0  md:w-[14rem] md:mx-2 lg:w-[11rem] xl:w-[19rem] xl:h-[32.5rem] overflow-hidden rounded-lg shadow-md   hover:scale-105 hover:shadow-lg hover:shadow-white  duration-400 mx-1 lg:mx-3 ">
<Link to={`/Detail/${pro.id}`} >

<Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            transitionDuration={1000}
            removeArrowOnDeviceType={["desktop","mobile","tablet","laptop"]}
            className=" "
          >
           

            <div>
              <img
                className="px-2 py-2 object-contain"
                src={pro.image}
                id={1}
              />
              </div>

            

          </Carousel>
          </Link>
          <div className=" group-hover:-translate-y-24 duration-1000 ease-in-out px-2 bg-gray-900 py-4  ">
            <div className="flex justify-start border-t-3 ">
              <p className="text-sm  text-white font-medium pb-2 pl-3">
                {pro.product_name}
              </p>
            </div>
      
      <div className="text-start px-3  py-1 flex">
          <del className="text-xl  text-white">{pro.price}</del>  
          <p className='text-red-500 pl-5 text-xl '>{pro.old_price}</p>     
      </div>
      <div className='flex justify-between flex-wrap '>
      <div class="flex px-3 mt-1">
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 pt-1 h-6 ">5.0</span>
      </div>
      <div className='mx-2 mr-4 mt-2'>
      <button  className= "hover:scale-105  text-white mb-3 justify-start bg-cyan-500 hover:bg-gray-600 shadow-md  white:bg-gray-800 font-medium rounded-lg text-sm px-3 py-2 animate-bounce delay-1000  flex capitalize"> <HiOutlineShoppingCart className='w-5 h-5 mr-1'/>Add to cart </button>
      </div>
      </div>
  </div>
 
</div>
</div>
))}   
  </div>
  </div>
  
   </div>
  )
}
export default Card