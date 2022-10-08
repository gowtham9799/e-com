import React, { useEffect } from 'react'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import {Link} from 'react-router-dom'

import {IoIosContacts} from "react-icons/io"
import {MdDeleteForever} from 'react-icons/md'
import {AiOutlineGift} from 'react-icons/ai'
import {MdRedeem} from 'react-icons/md'

function Contact({ forOpen, open }) {
 
    
        // const [open, setOpen] = useState(false)
        const [isActive, setIsActive] = useState({set3:false,set4:false});
        const [itemCount, setItemCount] = React.useState(1);
        const [total, setTotal] =useState(0)

        // useEffect(() => {
        //     setOpen(bool)
        // }, [bool])

        console.log(open)
      
     
    
        return (
    
            <div className='' >
    
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={forOpen}>
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
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex  pl-10">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full" >
                   
                        <Dialog.Panel className="pointer-events-auto w-screen md:w-[26rem]  ">
                        <div className="flex h-screen flex-col bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-xl">
                         
                        <div className="flex flex-wrap justify-between py-4  border-b-2 shadow-lg shadow-black  absolutebg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full z-10 rounded-b-xl">
                               <Dialog.Title className="flex text-lg  font-medium text-white drop-shadow-lg shadow-black ml-3 uppercase ">Contact Us <IoIosContacts className='w-7 h-7 ml-2'/> </Dialog.Title>
                              
                              
                                <div className="ml-3 flex h-7 items-center ">
                                <button   type="button"   className="-m-2 p-2 text-gray-300 " onClick={() => forOpen()} >
                                <AiOutlineClose className="h-6 w-6 hover:scale-150 mr-4" aria-hidden="true" />
                                </button> 
                               
                                </div>  
                                
                                   
                                
                            </div>
                           

                            <div className="flex-1 overflow-y-auto scroll-none">
                            
                            <div className="mt-24 ml-12">

                               
                                <div className='w-80 h-32  opacity-50 hover:opacity-100 border flex flex-wrap justify-center font-medium rounded-xl shadow-md shadow-white'>
                                <p className='w-full pl-14 p-5'>1 step away from logging in!</p>
                                <button className=' bg-brand  px-6 h-8 rounded-xl mt-[-20px] shadow-md shadow-gray-400'>sign in</button>
                                
                                </div>

                            </div>
    
    <div className="text-lg font-medium ml-4 my-2 mt-4 ">
    <Link to={""}  >FAQ</Link>
    
    </div>


<div className='px-4'>
<div className='py-2'><p className='uppercase font-medium text-lg'>share  feedback</p>
<p className='text-sm w-[23rem]'>To share feedback and suggestions on how we could improve ourselves, write to us at customercare 
<Link to={""} className="text-black text-bold font-medium"> @Myunde.com </Link>
or fill the form below</p></div>

<div className='mt-2'>
<label htmlFor="price" className=" ml-1 block text-sm font-medium text-gray-700 drop-shadow-lg"> YOUR NAME <span className='text-red-400'> *</span> </label>
 <input type="text"  name="price"  id="price" className="pl-2 rounded-lg border-gray-300 w-[23rem] focus:border-black focus:ring-black sm:text-sm mt-1 py-2" placeholder="your name" />

</div>
<div className='mt-2'>
<label htmlFor="price" className=" ml-1 block text-sm font-medium text-gray-700 drop-shadow-lg"> YOUR EMAIL <span className='text-red-400'> *</span> </label>
 <input type="text"  name="price"  id="price" className="pl-2 rounded-lg border-gray-300 w-[23rem] focus:border-black focus:ring-black sm:text-sm mt-1 py-2" placeholder="your name" />

</div>
<div className='mt-2'>
<label htmlFor="price" className=" ml-1 block text-sm font-medium text-gray-700 uppercase drop-shadow-lg"> your message <span className='text-red-400'> *</span></label>
<textarea type="text"  name="price"  id="price" maxLength="500" className="p-1 mt-2 rounded-lg border-gray-300 w-[23rem] focus:border-black focus:ring-black sm:text-sm pb-16" placeholder="(500 CHARACTERS MAX)" />
</div>
<div className='mt-3'>
<p className='uppercase font-medium text-md'><span className='text-red-400'> * </span> required field</p>
</div>
<div className='py-6 flex justify-center'>
<button className='bg-black text-white px-6  p-1 rounded-lg    shadow-md shadow-gray-400'> send feedback</button>
</div>
<hr className='w-52 border ml-[90px]' />
</div>

    
                           
    
                           
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
    
  
  
    
export default Contact