import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'





const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
      },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function carousel() {
  return (
    <div className=''>
    
    <Carousel responsive={responsive} className="py-4 ">
   

    <div className='flex justify-center '>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>
 
  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>
 

 
  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>


  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>


  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>


  
  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>

  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>

  <div className='flex justify-center'>
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
  
    <Link to={""} className='h-80 w-72'>
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class=" object-cover rounded-t-xl" />
      <div class="px-4  w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </Link>
   
  </div>
  </div>

  </Carousel>
    
  <Zoom>
  <img
    alt="That Wanaka Tree, New Zealand by Laura Smetsers"
    src="https://st.depositphotos.com/1005893/3369/i/600/depositphotos_33697419-stock-photo-business-concept.jpg"
    width="500"
  />
</Zoom>
    
    </div>
  )
}




export default carousel


