import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import {BiFilterAlt} from 'react-icons/bi'
import img1 from './images/black.jpg'
import img2 from './images/black.jpg'
import img3 from './images/black.jpg'
import img4 from './images/blue.png'
import img5 from './images/yellow.jpg'
import { Link } from 'react-router-dom'



function Filter() {
    const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({set0:true, set1:true, set2:true, set3:true, set4:true, set5:true ,set10:true});
   
  return (

    <div className='z-0 fixed ' >
  
    <button onClick={()=> setOpen(!open)} className="float-left sm:ml-12 flex  ml-5 lg:hidden">
    <BiFilterAlt className='mt-1 mr-1 '/> FILTER BY 
    </button>


    <div className=''   > 

   {(<div as="div" className={ open ? "relative z-0    " : "relative  hidden lg:block bg-gray-400 z-[-10]" } >
                               
        <div className="fixed inset-0 gow  z-[0]">
        <div className=" inset-0 overflow-hidden">
            <div className="pointer-events-none inset-y-0 left-0 flex  ">
                           
           
                <div className="pointer-events-auto w-screen sm:w-[18rem]  shadow-black lg:mt-24 z-0 lg:ml-8 ">
                <div className="flex h-screen flex-col ">
                    
                <div className="flex fixed xl:bg-gray-500 border justify-between p-4  border-b-2 shadow-lg lg:shadow-none shadow-gray-300   bg-gray-700 lg:bg-white w-full sm:w-[18rem] z-10 rounded-b-xl">
                        <div className="flex text-lg font-medium lg:text-white text-white drop-shadow-lg shadow-black ml-3"><BiFilterAlt className=' mr-1 mt-1'/> FILTER BY </div>
                        <div className="ml-3 flex h-7 items-center">
                        <button   type="button"   className="-m-2 p-2 text-gray-300 " >
                        <AiOutlineClose className="h-6 w-6 hover:scale-150 mr-2 lg:hidden" aria-hidden="true" onClick={() => setOpen(!open)}  />
                        </button> 
                        </div>   
                  
                    </div>
                            
                       
                      
                    <div className="flex-1 gow  xl:bg-gray-300  px-2">

                    <div className="relative group w-full mt-20 border black ">
                    <button className="flex w-full justify-between  " onClick={()=>setIsActive({...isActive, set3:!isActive.set3})}>
                      <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " > <h3>SIZE</h3></p>
                      <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg></button>
                    <div  className=" group-focus:block  ">
                     
                         {isActive.set3 && (
                    
                            <div className='ml-5 mb-5  justify-center items-center h-36 overflow-auto no-scrollbar'>
                            <div className='form-check form-check-inline'>
                            
                            <input type="checkbox" id="T-shirt" className="form-check-input  appearance-none bg-smokewhite  hover:bg-gray-200 rounded-md text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5 "/>
                            <label for="T-shirt" className=' text-lg  text-center font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg '>  S</label><br/>
                           
                            <input type="checkbox"  id="T-shirt1" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="T-shirt1" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> M</label><br/>
                            <input type="checkbox"  id="T-shirt2" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="T-shirt2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> L</label><br/>
                            <input type="checkbox"  id="T-shirt2" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="T-shirt2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> XL</label><br/>
                            
                            <input type="checkbox"  id="T-shirt4" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="T-shirt4" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> XXL</label><br/>
                             </div> 
                             </div>    
                    )}
                    </div>
                    </div>

                    
                  
                    <div className="relative group w-full mt-3 py-2">
                    <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set4:!isActive.set4})}>
                      <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " >  <h3>COLOR</h3></p>
                      <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg></button>
                    <div  className=" group-focus:block ">
                    
                         {isActive.set4 && (
                           <div>
                    
                                             
                           <div className=' flex justify-evenly mb-5 '> 
                           <div className='w-10 h-10 rounded-full border-2 hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                           <Link to={""} className="cursor-pointer" > <img src={img1} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link> 
                             </div>
                             <div className='w-10 h-10 rounded-full border-2 hover:shadow-lg  hover:shadow-black border-white opacity-80 hover:opacity-100 drop-shadow-lg' >
                             <Link to={""} className="cursor-pointer" ><img src={img2} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                             </div>
                             <div className='w-10 h-10 rounded-full border-2  hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                             <Link to={""} className="cursor-pointer" ><img src={img3} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                             </div>
                             <div className='w-10 h-10 rounded-full border-2  hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                             <Link to={""} className="cursor-pointer" ><img src={img4} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                             </div>
                             <div className='w-10 h-10 rounded-full border-2  hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                             <Link to={""} className="cursor-pointer" ><img src={img5} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                             </div>
                             </div> 
                         </div>
                         
                    )}
                    </div>
                    </div>

            
                    <div className="relative group w-full mt-3 py-2">
                    <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set5:!isActive.set5})}>
                      <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " >  <h3>FABRIC</h3></p>
                      <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg></button>
                    <div  className=" group-focus:block ">
                     
                    {isActive.set5 && (


                            <div className='ml-5 mb-3 h-28 overflow-auto no-scrollbar'>
                            <input type="checkbox" id="fabric" className="bg-smokewhite rounded-md hover:bg-gray-200  text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5 "/>
                            <label for="fabric" className='text-lg  font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Cotton</label><br/>
                            <input type="checkbox" id="fabric1" className="bg-smokewhite rounded-md hover:bg-gray-200   text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="fabric1" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Cotton&Polyester</label><br/>
                            <input type="checkbox" id="fabric2" className="bg-smokewhite rounded-md hover:bg-gray-200   text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="fabric2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Modal Elastane</label><br/>
                            <input type="checkbox" id="fabric2" className="bg-smokewhite rounded-md hover:bg-gray-200   text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="fabric2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Polyester</label><br/>
                           
                            </div> 
                           
                        )}
                        </div>
                        </div>


                        <div className="relative group w-full mt-3 py-2 ">
                        <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set2:!isActive.set2})}>
                          <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " >  <h3> PACK / MULTIPACK</h3></p>
                          <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg></button>
                        <div  className=" group-focus:block ">
                         
                        {isActive.set2 && (
                            <div className='ml-5 mb-3 h-28 overflow-auto no-scrollbar'>
                            
                            <input type="checkbox" id="pack" className="bg-smokewhite hover:bg-gray-200 rounded-lg text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="pack" className='text-lg  font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Pack on 1</label><br/>
                            <input type="checkbox" id="pack1" className="bg-smokewhite hover:bg-gray-200 rounded-lg text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="pack1" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Pack on 2</label><br/>
                            <input type="checkbox" id="pack2" className="bg-smokewhite hover:bg-gray-200  rounded-lg text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="pack2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Pack on 3 </label><br/>
                            <input type="checkbox" id="pack3" className="bg-smokewhite hover:bg-gray-200  rounded-lg text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                            <label for="pack3" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Pack on 4</label><br/>
    
                      </div> 
                      )}
                    </div>
                    </div>

                    <div className="relative group w-full mt-3 py-2">
                    <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set1:!isActive.set1})}>
                      <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " >  <h3> PRICE</h3></p>
                      <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg></button>
                    <div  className=" group-focus:block  ">
                     

                    {isActive.set1 && (
                        <div className='ml-5 h-28 overflow-auto no-scrollbar'>
                        <input type="checkbox" id="price" className="bg-smokewhite hover:bg-gray-200  rounded-sm text-black focus:ring-white   shadow-sm shadow-black hover:border-black h-5 w-5"/>
                        <label for="price" className='text-lg  text-center font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'>  Rs.200 - Rs.500</label><br/>
                        <input type="checkbox" id="price1"  className="bg-smokewhite hover:bg-gray-200 rounded-sm text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                        <label for="price1" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.500 - Rs.800</label><br/>
                        <input type="checkbox" id="price2" className="bg-smokewhite hover:bg-gray-200 rounded-sm text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                        <label for="price2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.800 - Rs.1200 </label><br/>   
                        <input type="checkbox" id="price3" className="bg-smokewhite hover:bg-gray-200 rounded-sm text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                        <label for="price3" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.1200 - Rs.2000</label><br/>
                        
                  </div> 
                  )}
                </div>
                </div>

   
                <div className="relative group w-full mt-3 py-2">
                <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set1:!isActive.set1})}>
                  <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " >  <h3> PRICE</h3></p>
                  <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg></button>
                <div  className=" group-focus:block  ">
                 

                {isActive.set1 && (
                    <div className='ml-5 h-28 overflow-auto no-scrollbar'>
                    <input type="checkbox" id="price" className="bg-smokewhite hover:bg-gray-200  rounded-full text-black focus:ring-white   shadow-sm shadow-black hover:border-black h-5 w-5"/>
                    <label for="price" className='text-lg  text-center font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'>  Rs.200 - Rs.500</label><br/>
                    <input type="checkbox" id="price1"  className="bg-smokewhite hover:bg-gray-200 rounded-full text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                    <label for="price1" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.500 - Rs.800</label><br/>
                    <input type="checkbox" id="price2" className="bg-smokewhite hover:bg-gray-200 rounded-full text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                    <label for="price2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.800 - Rs.1200 </label><br/>   
                    <input type="checkbox" id="price3" className="bg-smokewhite hover:bg-gray-200 rounded-full text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                    <label for="price3" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.1200 - Rs.2000</label><br/>
                    
              </div> 
              )}
            </div>
            </div>

</div>

                    <div className=" flex justify-evenly  text-sm text-gray-500 link-underline link-underline:hover ">
                        <button type="button" className="font-medium text-md text-gray-500 hover:text-gray-700 mb-20 " onClick={() => setOpen(!open)}>  Continue Shopping<span aria-hidden="true" > &rarr;</span>
                        </button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>)}
    </div>   
    </div>
  )
}
export default Filter






