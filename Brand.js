import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {ImCancelCircle } from "react-icons/im";
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { MdRedeem } from "react-icons/md";
import {SiBrandfolder} from "react-icons/si"

const brands = [
  {
    brand_type: "our brand",
    brand_name:"tommy hilfiger",
    brand_id: 1,
    imageSrc:
      "https://yt3.ggpht.com/9xMkfTVDrIjDq-f4uZqVVPGxT6Z8mB5Snpso6kV6YDBKUNo3F1cZfCCu1Cb3gr78R1GkbKR0=s900-c-k-c0x00ffffff-no-rj",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    brand_type: "Partner brand",
    brand_name:"Calvin Klein ",
    brand_id: 1,
    imageSrc:
      "https://www.dlfmallofindia.com/wp-content/uploads/2020/04/calvin-klien.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
];

function Brand() {
  const [brand, setBrand] = useState(false);

  return (
    <div className="">
      <button onClick={() => setBrand(!brand)} className="float-left sm:ml-12 ">
        <p className="uppercase text-start font-medium mt-5 hover:text-blue-500">
          {" "}
          our brands <br />
          partner brands{" "}
        </p>
      </button>
      

      <Transition.Root show={brand} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setBrand}>
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
              <div className="pointer-events-none fixed inset-y-0 left-0 flex  ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500  sm:duration-700"
                  enterFrom="translate-x-[-100%]"
                  enterTo="translate-x-100%"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[-100%]"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen md:w-[26rem]  ">
                    <div className="flex h-screen flex-col  bg-gray-100 shadow-xl ">
                      <div className="flex  justify-between p-4  border-b-2 shadow-lg shadow-gray-300  absolute bg-gray-700 w-full z-10 rounded-b-xl">
                        <Dialog.Title className="flex text-lg font-medium text-white drop-shadow-lg shadow-black ml-3">
                        <SiBrandfolder className="w-7 h-7"/>  RANDS
                        </Dialog.Title>
                       
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-300 "
                            onClick={() => setBrand(!brand)}
                          >
                            <ImCancelCircle
                              className="h-6 w-6 hover:scale-150 mr-2"
                              aria-hidden="true"
                            />
                          </button>
                        </div>


                      </div>

                      <div className="overflow-y-auto h-full no-scrollbar">

                        <div className=" px-3" >
                          
                         
                     

                          <div className="mt-20  l mb-3">
                            <p className="font-medium uppercase text-md drop-shadow-lg shadow-black text-gray-700">
                              our brands{" "}
                            </p>
                            <p className="text-sm italic">
                              styles designed in-house for your perfect fit
                            </p>
                          </div>


                          <div className="flex flex-wrap justify-between px-3 ">


                            {brands.map((brand) => {
                              if (brand.brand_type === "our brand") {
                                
                                return (
                                  <div key={brand.brand_id} className="mt-5">
                                    <button className=" bg-white shadow-lg  hover:shadow-gray-400">
                                      <img
                                        src={brand.imageSrc}
                                        alt={brand.imageAlt}
                                        className="object-contain h-16 w-40"
                                      />
                                     
                                    </button>
                                    <p className="flex justify-start drop-shadow-xl font-medium uppercase text-gray-700 ml-1">{brand.brand_name}</p>
                                  </div>
                                );
                              } })} 


                              </div>


                              <hr className="my-3" />

                              <div className="mb-3">
                                <p className="font-medium uppercase text-md drop-shadow-lg shadow-black text-gray-700">
                                  PARTNER BRANDS{" "}
                                </p>
                                <p className="text-sm italic">
                                  Curated styles handpicked by our designers
                                </p>
                               
                              </div>

                              <div className="flex flex-wrap justify-between px-3 ">
                              {brands.map((brand) => {
                                if (brand.brand_type === "Partner brand") {
                                
                                  return (
                                    <div key={brand.brand_id} className="mt-5">
                                      <button className=" bg-white shadow-lg  hover:shadow-gray-400">
                                        <img
                                          src={brand.imageSrc}
                                          alt={brand.imageAlt}
                                          className="object-contain h-16 w-40"
                                        />
                                      </button>
                                      <p className="flex justify-start drop-shadow-xl font-medium uppercase text-gray-700 ml-1">{brand.brand_name}</p>
                                    </div>
                                  );
                                } })} </div>

                             
                         

                         
                          
                        </div>


                      </div>
                     

                     
                    <div className=" flex justify-evenly  text-sm text-gray-500  p-2 py-3 border-t-2 rounded-2xl ">        

                    <button type="button" className="font-medium text-lg text-gray-500 hover:text-gray-700 " onClick={() => setBrand(!brand)}> 
                     Continue Shopping
                    </button>
                  
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
  );
}

export default Brand;

//