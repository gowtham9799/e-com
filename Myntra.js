import React, { Fragment } from 'react'

import im from './images/boxer.jpg'
import Zoom from 'react-medium-image-zoom'
import './myntrazoom.css'
import {HiOutlineStar} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {BsFillHandbagFill ,BsHeart ,BsListStars } from "react-icons/bs"
import {MdOutlineLocalOffer} from 'react-icons/md'
import {BiDetail} from 'react-icons/bi'
import { useState} from 'react';
import { AiOutlineLike } from "react-icons/ai";
// import { useAlert } from "react-alert"
import "./style.css"



const images =[

    im,
    im,
    im,
    im,
    im,
  
 
]



const Stars =[

  {
      star_id:1,
      name:"1star",
      star_count:1,
      text:'Green and pink printed kurti with dhoti pants Green and pink floral print A-line above knee length kurta',
      images:im,
  },
  {
      star_id:2,
      name:"1star",
      star_count:2,
      text:'useEffectis defined but never usedno-unused-vars',
  },
  {
      star_id:3,
      name:"1star",
      star_count:3,
      text:'Green and pink printed kurti with dhoti pants Green and pink floral print A-line above knee length kurta',
  },
   {
      star_id:3,
      name:"1star",
      star_count:3,
      text:'Green and pink printed kurti with dhoti pants Green and pink floral print A-line above knee length kurta',
  },
]

 



function Myntra() {



  const [starCount, setStarCount] = useState(5)
  const length = Stars.length;

  const filtered = Stars.filter(star => {
    return star.star_count === Number(starCount)})
    return (

    <div className=''>
    
    <div className='flex flex-wrap xl:ml-24 xl:items-start'>
    
    
   
   <div className='xl:flex  flex-wrap xl:w-[55rem] lg:justify-start lg:mt-12 lg:w-[43rem] justify-center p-2 md:w-full'> 
   <div className='flex justify-center'>
   <div className=' lg:w-80 xl:w-96  md:w-96 xl:h-[35rem] overflow-hidden bg-gray-300 m-4 lg:hidden ' >

   <img src={im} alt={"fga"} className="  hover:scale-110 ease-in duration-200  "></img>

   </div>
   </div>
   <div className='flex lg:flex-wrap justify-evenly lg:justify-start'>
{ images.map((img) =>(


  <div className=" ">


  <Zoom 
  img={img}  className=" flex  hover:scale-110 ease-in duration-200  "
  />
  <div className=' lg:w-72 xl:w-96  xl:h-[35rem] overflow-hidden bg-gray-300 lg:m-4 m-2 md:w-20 ' >

   

   </div>

   </div>
  ))}

  </div>
   </div>
    


   <div className='lg:mt-16 xl:w-[50rem] xl:ml-12 px-3  w-full lg:w-80'>
<hr/>
<div className='my-4'>
<p className='text-3xl font-medium'>Roadster</p>
<p className='pb-2 text-lg text-gray-500'>Unisex Turquoise Blue Solid TRIUMPH 55 Cabin Trolley Suitcase</p>

<button  className='flex border p-1 mb-2 hover:border-black'>
<p className='flex border-r-2 px-2'>23<HiOutlineStar className='w-5 h-5 mt-0.5 ml-1 text-cyan-400'/></p>
<p className='px-2' onClick={""}>23.2 K rating</p>

</button>

</div>
<hr/>
<div>
<div className='flex pt-2  '>
<p className='text-2xl font-medium'>₹234</p>
<p className='text-xl ml-2 mt-1'>MRP <del className=''>  ₹ 432</del></p></div>
<p className='text-cyan-600 font-normal text-sm capitalize'>INCLUSIVE OF ALL TAXES</p>
<div className='flex pt-5  uppercase'>
<p className='text-xl font-medium '>select size</p>
<button className='text-md ml-8 text-cyan-600 font-medium uppercase'> size Chart</button>
</div>


<div className='mt-3 '>
<form action="#">
<div className=" stock-sizes flex  pl-3 w-72  justify-between mt-4 ">
  <div className="">
    <input id="test0" name="same-group-name" type="radio" className="hidden "/>
    <label for="test0" className='border'>
      <div
        className="size flex justify-center items-center text-xl font-semibold "
        
      >S</div>
    </label>
  </div>
  <div className="">
    <input id="test1" name="same-group-name" type="radio" className="hidden" />
    <label for="test1">
      <div
        className="size flex justify-center items-center text-xl font-semibold"
       
      >M</div>
    </label>
  </div>
  <div className="">
    <input id="test2" name="same-group-name" type="radio" className="hidden"/>
    <label for="test2">
      <div
        className="size flex justify-center items-center text-xl font-semibold"
       
      >L
      </div>
    </label>
  </div>
  <div className="">
    <input id="test3" name="same-group-name" type="radio" className="hidden"/>
    <label for="test3">
      <div
        className="size flex justify-center items-center text-xl font-semibold"
       
      >XL
      </div>
    </label>
  </div>
</div>
</form>




</div>
<div className='flex pt-5  uppercase'>
<p className='text-xl font-medium '>select color</p>

</div>


<div className='flex w-72 xl:w-96 justify-between mt-4 '>
<div className="container">
<form action="#">
  <div className=" stock-images   flex  flex-wrap w-72  justify-evenly  ">
    <div className=" p-2">
      <input id="test" name="same-group-name" type="radio" className="hidden"/>
      <label for="test">
        <div
          className="image"
          style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
        ></div>
      </label>
    </div>
    <div className="p-2">
      <input id="test7" name="same-group-name" type="radio" className="hidden" />
      <label for="test7">
        <div
          className="image"
          style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
        ></div>
      </label>
    </div>
    <div className="p-2">
      <input id="test8" name="same-group-name" type="radio" className="hidden"/>
      <label for="test8">
        <div
          className="image"
          style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
        >
        </div>
      </label>
    </div>
    <div className="p-2">
    <input id="test9" name="same-group-name" type="radio" className="hidden"/>
    <label for="test9">
      <div
        className="image"
        style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
      >
      </div>
    </label>
  </div>
  <div className="p-2">
  <input id="test81" name="same-group-name" type="radio" className="hidden"/>
  <label for="test81">
    <div
      className="image"
      style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
    >
    </div>
  </label>
</div>
<div className="p-2">
<input id="test82" name="same-group-name" type="radio" className="hidden"/>
<label for="test82">
  <div
    className="image"
    style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
  >
  </div>
</label>
</div>
<div className="p-2">
<input id="test83" name="same-group-name" type="radio" className="hidden"/>
<label for="test83">
  <div
    className="image"
    style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
  >
  </div>
</label>
</div>
<div className="p-2">
<input id="test84" name="same-group-name" type="radio" className="hidden"/>
<label for="test84">
  <div
    className="image"
    style={{backgroundImage: `url(http://loremflickr.com/620/440/london)`}}
  >
  </div>
</label>
</div>
  </div>
</form>
</div>
     
      </div>
<div className='flex flex-wrap font-medium mt-8 mb-6 '>
<button className='flex p-4 border bg-brand text-white capitalize w-full md:w-80  justify-center md:mr-8 lg:mr-0 xl:mr-8 rounded-md hover:scale-105 mb-3 lg:mb-3 xl:mb-0 md:mb-0 '><BsFillHandbagFill className='w-5 h-5 mx-2'/> add to cart</button>
<button className='flex p-4 border  text-black capitalize w-full md:w-80 xl:w-72 justify-center rounded-md hover:scale-105 hover:bg-gray-100'><BsHeart className='w-5 h-5 mx-2'/> wishlist</button>
</div>

</div>
<hr/>


<div>
<p className='text-xl uppercase font-medium flex my-3'>delivery options <TbTruckDelivery className='w-7 h-7 ml-2'/></p>
<input type="text"  name="price"  id="price" className="block rounded-sm border-gray-300 w-full md:w-72  focus:border-black focus:ring-black sm:text-sm " placeholder=""  />
<p className='text-sm mt-1 capitalize'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>

<ul className='mt-4'>
<li>100% Original Products</li>
<li>Pay on delivery might be available</li>
<li>Try & Buy might be available</li>
</ul>

<p className='text-xl uppercase font-medium flex mt-5 '>BEST OFFERS <MdOutlineLocalOffer className='w-5 h-5 mt-1 ml-2'/></p>
<p className='capitalize '>best price: RS. 323</p>
<div className='my-4'>
<li>Applicable on: Orders above Rs. 799 (only on first purchase)</li>
<li>Coupon code: MYUNdE200</li>
<li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
</div>
</div>
<hr/>

<div>

<p className='text-xl uppercase font-medium flex mt-5 '>product detailS <BiDetail className='w-5 h-5 mt-1 ml-2'/></p>
<p className='mt-3'>Green and pink printed kurti with dhoti pants
Green and pink floral print A-line above knee length kurta with gotta patti detail, has a round neck, one shoulder with tie-up detail, flared hem, concealed zip closure
Pink and white printed dhoti pants with dyed effect, slip-on closure</p>
<p className='text-lg mt-3 mb-2 capitalize font-medium'>Material & Care</p>

<ul>
<li>Top fabric: Pure Cotton</li>
<li>Bottom fabric: Pure Cotton</li>
<li>Dry-clean</li>

</ul>

<p className='text-lg mt-3 mb-2 capitalize font-medium'>specifications</p>
<div className='flex flex-wrap justify-between  h-72 overflow-hidden overflow-y-auto w-full'>
<div className='xl:w-72 w-full'>



<div className='my-3'>
<p className='text-xs '>Sleeve Length</p>
<p className='text-lg'>Sleeveless</p>
</div>
<hr/>
<div className='my-3'>
<p className='text-xs '>Type</p>
<p className='text-lg'>trunks</p>
</div>
<hr/>
<div className='my-3'>
<p className='text-xs '>Bottom Pattern</p>
<p className='text-lg'>Printed</p>
</div>
<hr/>
<div className='my-3'>
<p className='text-xs '>Waistband</p>
<p className='text-lg'>Elasticated</p>
</div>
<hr/>

<div className='my-3'>
<p className='text-xs '>Ornamentation</p>
<p className='text-lg'>Gotta Patti</p>
</div>
<hr/>

<div className='my-3'>
<p className='text-xs '>Weave Type</p>
<p className='text-lg'>Machine Weave</p>
</div>
<hr/>


</div>

<div className='xl:w-72 w-full'>



<div className='my-3'>
<p className='text-xs '>Sleeve Length</p>
<p className='text-lg'>Sleeveless</p>
</div>
<hr/>
<div className='my-3'>
<p className='text-xs '>Type</p>
<p className='text-lg'>trunks</p>
</div>
<hr/>
<div className='my-3'>
<p className='text-xs '>Bottom Pattern</p>
<p className='text-lg'>Printed</p>
</div>
<hr/>
<div className='my-3'>
<p className='text-xs '>Waistband</p>
<p className='text-lg'>Elasticated</p>
</div>
<hr/>

<div className='my-3'>
<p className='text-xs '>Ornamentation</p>
<p className='text-lg'>Gotta Patti</p>
</div>
<hr/>

<div className='my-3'>
<p className='text-xs '>Weave Type</p>
<p className='text-lg'>Machine Weave</p>
</div>
<hr/>


</div>

</div>
<hr/>

<div className='my-4'>
<p className="text-xl uppercase font-medium flex mt-5" >RATINGS <BsListStars className='w-6 h-6 mt-0.5 ml-2'/></p>
<div className='flex flex-wrap mt-3'>
<div className='xl:border-r-2  md:border-r-2 lg:border-0 w-40  '>
  <p className='text-7xl flex font-thin '>4.3 <HiOutlineStar className='w-8 h-8 mt-8 ml-1 text-cyan-400'/> </p>
<p className='mt-3'>724 Verified Buyers</p>
</div>

<div className='xl:ml-16 md:ml-5 lg:ml-0'>
<p className='flex'>4 <HiOutlineStar className='mt-1.5' /><hr className='w-40 border-4 mt-2 ml-2 '/> 2345</p>
<p className='flex'>4 <HiOutlineStar className='mt-1.5' /><hr className='w-40 border-4 mt-2 ml-2'/> 434</p>
<p className='flex'>4 <HiOutlineStar className='mt-1' /><hr className='w-40 border-4 mt-2 ml-2'/> 314</p>
<p className='flex'>4 <HiOutlineStar className='mt-1' /><hr className='w-40 border-4 mt-2 ml-2'/> 41</p>
<p className='flex'>4 <HiOutlineStar className='mt-1' /><hr className='w-40 border-4 mt-2 ml-2'/> 3</p>



</div>
</div>


</div>
<hr/>

<div>
<p className='text-lg mt-3 mb-2 capitalize font-medium'>customer photos  ( )</p>
<Zoom>
<div>

<img src={im} alt="" className='cls w-16 h-20' />
</div>
</Zoom>

<p className='text-lg mt-3 mb-2 capitalize font-medium'>customer reviews  ({length})</p>
<div className=''>
   
    <div className='my-2 lg:my-4 '>
<select id="countries" className="w-full md:w-72  border  rounded-md   focus:ring-black focus:border-black " onChange={(e)=> setStarCount(e.target.value)}>
  <option selected="">Review star rating</option>

 
  <option value={1} >1-star</option>
  <option value={2} >2-star</option>
  <option value={3} >3-star</option>
  <option value={4} >4-star</option>
  <option value={5} >5-star</option>
</select>
</div>

 <hr/>


<div className='   overflow-y-auto  xl:w-[42rem] px-2 md:w-[42rem] lg:w-full'>
 


    {filtered.map((star)=>{
       
    return(
      
        <div>
        <div className='my-6'>
<div className='flex pl-0 mt-3 text-xl my-3'>


</div>
<div>
<h6 className='review2'>{star.star_count}</h6>
</div>
<Zoom>
<div>
<img src={star.images} alt="" className='w-16 h-20'/>
</div>
</Zoom>
<p>{star.text}</p>
</div>
<div className='flex justify-end mb-5'>
<h5 className='  mt-2 font-medium'>Helpful ?</h5>
<button className='  bg-brand text-white ml-2 w-10 h-10 rounded-md shadow-md shadow-gray-600'><AiOutlineLike className='w-5 h-5 ml-3'/></button>
</div>
<hr className='border-gray-400'/>


  </div>     
    )
 })}



</div>




    </div>
  
   
</div>





</div>


<div className='my-3 mb-32'>
<p >Product Code: 12160300</p>
<p className='uppercase'>Seller : <span className='font-bold'>webtech fashion pvt ltd </span>
</p>
<button  className='font-semibold'>View Supplier Information</button>
</div>


   </div> 

  

   </div>
  
    </div>
  )
}

export default Myntra





// <button className=' text-black  w-16 h-12   rounded-full  border hover:border-cyan-500 hover:scale-110' >S</button>
// <button className=' text-black  w-16 h-12   rounded-full  border hover:border-cyan-500 hover:scale-110'>M</button>
// <button className=' text-black  w-16 h-12  rounded-full  border hover:border-cyan-500 hover:scale-110'>L</button>
// <button className=' text-black  w-16 h-12  rounded-full  border hover:border-cyan-500 hover:scale-110'>XL</button>
// <button className=' text-black  w-16 h-12  rounded-full  border hover:border-cyan-500 hover:scale-110'>XXL</button>