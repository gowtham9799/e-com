import React, { Fragment, useState}  from 'react'
// import {Link} from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { FcBusinessman} from "react-icons/fc";
import { GiHumanTarget } from 'react-icons/gi'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { BsJournalBookmark } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import image5 from './images/surya.jpg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import { GoHome } from 'react-icons/go'
import { BsBuilding } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {BsThreeDotsVertical} from 'react-icons/bs'

const products = [

]



function Profile({ rOpen, en}) {
    
    // const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({ set1:false, set2:false, set3:false});
    const [po , setpo] = useState({
        profile:true,
        addaddress:false,
        address:false,
     
    })
    return (
        <div className='mt-2'> 

            

            <Transition.Root show={en} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={rOpen}>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen  sm:w-[100%] ">
                                        <div className="flex h-full flex-col     bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-xl">
                                            <div className="flex-1 overflow-y-auto  ">
                                                <div className="">

                                                   
                                                </div>


                                                {/* <----------------------------------profile area-----------------------------------------------------> */}
                                                {po.profile && (
                                       <div>
                                                     <div className='flex justify-between   '>
                                                        <div className='pt-2 pl-4 pr-2'>
                                                            <img src={image5} alt="image1" className=' w-48 h-28 rounded-full  object-fit'></img>
                                                        </div>
                                                        <div className=' text-start ml-1 '>
                                                            <div>  <h5 className=' mt-3 uppercase text-lg'>enter your name</h5>   </div>
                                                            <div>  <h5 className=' mt-3 uppercase text-lg'>email id</h5>   </div>
                                                            <div>  <h5 className=' mt-3 uppercase text-lg'>phone number</h5>   </div>
                                                        </div>

                                                        
                                                        <div className=" flex  items-center mb-20">
                                                        <button
                                                            type="button"
                                                            className="  "
                                                               onClick={() => rOpen()}
                                                         
                                                        >
                                                            <AiOutlineClose className='w-7 h-7 mr-5  hover:text-red-600' />
                                                            <span className="sr-only">Close panel</span>
                                                        </button>
                                                    </div>


                                                    </div>
                                                    <hr className='mr-5 ml-5 mt-10' />

                                                    <div className='  h-full  lg   py-3'>
                                                        <div className='flex justify-between'>
                                                            <div className=' '>
                                                                <BsJournalBookmark className="w-10 h-10 ml-14  mt-4  hover:text-red-400 font-thin "  />
                                                                <h6 className='ml-8 mt-3 hover:text-red-400 text-left text-base'>MY ORDERS</h6>
                                                            </div>
                                                            <div className=' '>
                                                                <GiHumanTarget className="w-10 h-10 ml-6  mt-4  hover:text-red-400 font-thin" onClick={()=>setpo({...po, addaddress:!po.addaddress ,profile:!po.profile})}/>
                                                                <h6 className='mr-3 mt-3 hover:text-red-400 text-center text-base'>MY PROFILE</h6>
                                                            </div>
                                                            <div className=''>
                                                                <BsHeart className="w-10 h-10  mt-4 ml-3 hover:text-red-400" />
                                                                <h6 className=' mt-3 mr-8 hover:text-red-400 text-right text-base'>WISHLIST</h6>
                                                            </div>
                                                        </div>
                                                        <hr className='mr-5 ml-5 mt-10' />

                                                        <div className=' text-start ml-7'>
                                                            <div className='mt-4'>
                                                                <h5 className='text-red-400 text-base'> TRACK ORDER</h5>
                                                            </div>
                                                            <div className='mt-4'>
                                                                <h5 className='hover:text-red-600 text-base'>CONTECT US</h5>
                                                            </div>
                                                            <div className='mt-4'>
                                                                <h5 className='hover:text-red-600 text-base'>FAQs</h5>
                                                            </div>
                                                            <div className='mt-4'>
                                                                <h5 className='hover:text-red-600 text-base'>NODIFICATIONS</h5>
                                                            </div>
                                                            <div className='mt-4'>
                                                                <button type="button" className="text-gray-900  w-11/12 bg-white border border-gray-300 focus:outline-none
                                                                             hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white 
                                                                             dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-start">LOG OUT</button>
                                                            </div>
                                                        </div>
                                                    </div> 
        
                                                    </div>
                                                )}
                                                {/* <----------------------------------profile edit area-----------------------------------------------------> */}
                                                {po.addaddress && (
                                                 <div className=' bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  h-auto w-[100%]  '>
                                                    <div className='h-9 bg-black flex justify-between'>
                                                        <IoIosArrowBack className='w-7 h-7 mr-1 mt-1 text-white  '  onClick={()=> setpo({ 
                                                         profile:true,
                                                         addaddress:false,
                                                         address:false,
                                                        }) }/>
                                                        <h5 className='text-start text-white mt-2 mr-52'>MY PROFILE</h5>
                                                        <div className=" flex  items-center mb-20">
                                                        <button
                                                            type="button"
                                                            className="  "
                                                            onClick={() => rOpen()}
                                                        >
                                                            <AiOutlineClose className='w-7 h-7 mr-5 mt-[30px] text-white  hover:text-red-600' />
                                                            <span className="sr-only">Close panel</span>
                                                        </button>
                                                    </div>

                                                    </div>

                                                    <div className='flex h-10'>
                                                        <button className='mt-3 ml-3 hover:text-red-400'> BASIC</button>
                                                        <button className='mt-3  ml-4 hover:text-red-400'> OCCATION</button>
                                                        <button className='mt-3 ml-4 hover:text-red-400'> ADDRESSCESS</button>
                                                    </div>

                                                    <div className='flex justify-between'>
                                                        <div className='pt-2 pl-4 pr-2 '>
                                                            <img src={image5} alt="image1" className=' w-28 h-28 rounded-full  object-fit'></img>
                                                        </div>
                                                        <div className=' text-start relative z-10'>
                                                            <div>  <h5 className=' mt-3 uppercase text-lg'>enter your na</h5>   </div>
                                                            <div>  <h5 className=' mt-3 uppercase text-lg'>email id</h5>   </div>
                                                            <div>  <h5 className=' mt-3 uppercase text-lg'>phone number</h5>   </div>
                                                        </div>
                                                       
                                                    <div className="flex relative  ">
                                                                        <ul>                           
                                                        <div className="mt-3" ><b> </b>
                                                            <svg  onClick={()=>setIsActive({...isActive, set1:!isActive.set1})} className="fill-current h-6 w-10  "  viewBox="0 0 20 20">
                                                            <BsThreeDotsVertical className='text-2xl ' />
                                                            </svg></div>
                                                                                                                                                            
                                                            {isActive.set1 && (
                                                                <div className='bg-white absolute w-36 z-20 mr-0 left- right-0'>
                                                            <div to={""} className="hover:text-green-500 p-2"><li>Edit Name</li></div>
                                                            <div to={""} className="hover:text-green-500 p-2"><li>Edit eMail</li></div>
                                                            <div to={""} className="hover:text-green-500 p-2"><li>Edit Number</li></div>
                                                            <div to={""} className="hover:text-green-500 p-2"><li>Delete Account</li></div>
                                                        </div>
                                                            )} 
                                                            </ul>
                                                        </div>



                                                    </div>

                                                    <div className='flex justify-between px-3 mt-5 text-md' >
                                                        <h5 className='text-start text-BLACK mt-1 '>OCCATION</h5>
                                                        <h5 className='text-start text-red-400 mt-1 text-sm pr-2'>ADD NEW</h5>

                                                    </div>
                                                    <div className='mt-4 ml-5  '>
                                                        <button type="button" className="rounded-lg w-[94%] h-32 bg-white border border-gray-300 focus:outline-none
                                                                             hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-gray-800 
                                                                             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
                                                                              text-start"> <AiOutlinePlusCircle className='w-7 h-7 ml-44 mt-4 text-red-400 ' onClick={()=>setpo({...po, address:!po.address ,addaddress:!po.addaddress})}/><h5 className='text-start text-red-400 
                                                                               text-sm ml-40 mt-2' >ADD NEW</h5> </button>

                                                    </div>
                                                    <div className='flex justify-between px-3 mt-5 text-md' >
                                                        <h5 className='text-start text-BLACK mt-1 '>ADDRESS BOOK</h5>
                                                        <h5 className='text-start text-red-400 mt-1 text-sm pr-2'>ADD NEW</h5>
                                                    </div>


                                                    <div className='mt-4 ml-5 '>
                                                        <button type="button" className="rounded-lg w-[94%] h-32 bg-white border border-gray-300 
                                                                            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-1 py-2.5 mr-2 mb-2
                                                                             dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 
                                                                             text-start"> <AiOutlinePlusCircle className='w-7 h-7 ml-44 mt-4 text-red-400 ' /><h5 className='text-start text-red-400 
                                                                              text-sm ml-32 mt-2 mr-2'>ADD YOUR ADDRESS</h5> </button>

                                                    </div>
                                                </div> 
                                                )} 
                                                {/* <-------------------------------------------------------------------------address fill area------------------------------------------------------------------> */}
                                                {po.address && (
                                                 <div className=' h-[53rem] w-[100%]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  '>
                                                    <div className='h-9 pt-4 flex justify-between'>
                                                        <h5 className='text-start text-white mt-2 ml-3'>ADD  NEW  A D D R E S S</h5>
                                                        <div className=" flex  items-center mb-20">
                                                        <button
                                                            type="button"
                                                            className=" flex "
                                                            onClick={() => rOpen()}
                                                        >
                                                            <AiOutlineClose className='w-7 h-7 ml-40 mt-10 hover:text-white' />
                                                            <h5 className='text-start text-xl text-black mt-10 mr-4'> CANCEL</h5>
                                                        </button>
                                                    </div>

                                                       
                                                    </div>
                                                    <div className='flex mt-10'>
                                                        <div>
                                                            <h6 className='ml-3 mt-6 hover:text-white text-left text-base'>ADDRESS <br></br>TYPE</h6>
                                                        </div>
                                                        <div className=' '>
                                                            <GoHome className="w-6 h-6 ml-20  mt-4  hover:text-white  " />
                                                            <h6 className='ml-16 mt-3 hover:text-white text-left text-base'>HOME</h6>
                                                        </div>
                                                        <div className=' '>
                                                            <BsBuilding className="w-6 h-6  mt-4 ml-16 hover:text-white font-thin" />
                                                            <h6 className='mr-3 mt-3 ml-12 hover:text-white text-center text-base'>OFFICE</h6>
                                                        </div>
                                                        <div className=''>
                                                            <HiOutlineLocationMarker className="w-6 h-6  mt-4 ml-12 hover:text-red-400" />
                                                            <h6 className=' mt-3 mr-8 ml-7 hover:text-red-400 text-right text-base'>OTHERS</h6>
                                                        </div>
                                                    </div>

                                                    <div className=''>
                                                        <div>
                                                            <h6 className='ml-3 mt-8 hover:text-red-400 text-left text-base '><span className='text-white text-bold'>F U L L</span> NAME<span className=' h-4 w-4 ml-3 text-red-400 '>*</span></h6>
                                                        </div>

                                                        <div className=' flex'>
                                                            <div >
                                                                <input type="tel" placeholder='Your first name' className="pl-3 w-[95%] h-11 ml-3 border-2 border-zinc-300 rounded-sm mr-2" ></input>
                                                            </div>
                                                            <div className=' '>
                                                                <input type="tel" placeholder='Your last name' className="pl-3 w-[95%] h-11 ml-3   border-2 border-zinc-300 rounded-sm mr-2" ></input>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className='ml-3 mt-4 text-left text-base'><span className='text-white'>M O B I L E</span>   NUMBER <span className=' h-4 w-4 ml-2 text-red-400'>*</span></h6>
                                                        </div>
                                                        <div className=' '>
                                                            <input type="tel" placeholder='Mobile number' className="pl-3 w-[94%] h-11 ml-3  border-2 border-zinc-300 rounded-sm" ></input>
                                                        </div>
                                                        <div>
                                                            <h6 className='ml-3 mt-6 text-left text-base'><span className='text-white'>S T R E E T</span> ADDRESS <span className=' h-4 w-4 ml-2 text-red-400'>*</span></h6>
                                                        </div>
                                                        <div className=' '>
                                                            <input type="tel" placeholder='Mobile number' className="pl-3 w-[94%] h-11 ml-3  border-2 border-zinc-300 rounded-sm" ></input>
                                                        </div>
                                                        <div className=' '>
                                                            <input type="tel" placeholder='Mobile number' className="pl-3 w-[94%] h-11 ml-3 mt-3 border-2 border-zinc-300 rounded-sm" ></input>
                                                        </div>
                                                        <div>
                                                            <h6 className='ml-3 mt-6 text-left text-base'><span className='text-white'>P O S T A L</span> CODE <span className=' h-4 w-4 ml-2 text-red-400'>*</span></h6>
                                                        </div>
                                                        <div >
                                                            <input type="tel" placeholder='Delivery pin code' className="pl-3 w-[45%] h-11 ml-3 border-2 border-zinc-300 rounded-sm" ></input>
                                                        </div>
                                                        <div>
                                                            <h6 className='ml-3 mt-6 text-left text-base'><span className='text-white'>R E Q U I R E D </span> FIELD <span className=' h-4 w-4 ml-2 text-red-400'>*</span></h6>
                                                        </div>
                                                        <div className='flex'>
                                                            <h5 className='text-start text-white mt-7 mr-2 ml-36'> CANCEL</h5>
                                                            <button className='bg-red-400 w-36 h-9 rounded-full float-right mr-5 mt-5 text-white '> ADD ADDRESS</button>
                                                        </div>

                                                    </div>
                                                </div>
                                                )}
                                            {/* * <-------------------------------------------------------------------------address fill area------------------------------------------------------------------> */}  




                                            </div>
                                        </div>




                                      



                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    )
}

export default Profile