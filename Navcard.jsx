import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsBell } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

const product = [
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
  {
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
    price: "$599",
    old_price: "₹499",
  },
];

const products = [];

function Profile({ navOpen, nav}) {
//   const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    set1: false,
    set2: false,
    set3: false,
  });
  return (
    <div className="z-50">
    

      <Transition.Root show={nav} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={navOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" relative inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                    <div className="flex h-full flex-col shadow-white   bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 shadow-xl">
                      <div className="flex-1 overflow-y-auto  ">
                        <div className=""></div>

                        {/* <----------------------------------profile edit area-----------------------------------------------------> */}

                        <div className="h-auto w-[29.4rem]  ">
                          <div className="h-10 bg-black flex justify-between">
                            <IoIosArrowBack className="w-7 h-10 mr-1   bg-gray-500 text-white " />
                            <h5 className="text-start text-white mt-2 mr-52 text-xl">
                              EMPTY CART
                            </h5>
                            <div className=" flex  items-center mb-20">
                              <button
                                type="button"
                                className="  "
                                onClick={() => navOpen()} 
                              >
                                <AiOutlineClose className="w-7 h-10  mt-10 text-white bg-gray-500 hover:text-red-600" />
                                <span className="sr-only">Close panel</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* <-------------------------------------------------------------------------address fill area------------------------------------------------------------------> */}

                        <div className="w-[29.4rem] mb-10 justify-center flex">
                          <RiShoppingCartLine className="w-24 h-24 text-light  mt-10" />
                        </div>
                        <div className="mb-12">
                          <p className="  text-center">
                            {" "}
                            We're on snooze here!
                          </p>
                          <p className="text-center">
                            We don't have anything new for you. Continue
                          </p>
                          <p className="text-center">
                            shopping to get personalized messages.
                          </p>
                        </div>

                        <div className="flex flex-wrap   w-[29.4rem] justify-start  ">
                          {product.map((pro) => (
                            <div className="bg-black w-[8.5rem] mr-1 rounded-lg shadow-lg dark:bg-gray-900 mt-2 hover:scale-100 hover:shadow-lg hover:shadow-gray-500 duration-200 mx-3">
                              <Link to={""}>
                                <div className="">
                                  <img className=" " src={pro.image} />
                                </div>

                                <div className="text-start px-1 flex">
                                  <del className="text-lg  text-white dark:text-white pl-5">
                                    {pro.price}
                                  </del>
                                  <p className="text-red-500 pl-4 text-lg ">
                                    {pro.old_price}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>

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
  );
}

export default Profile;
