import React from "react";
import Login from "./Login";
import Navcard from "./Navcard";
import Profile from "./Profile";
import {Link } from "react-router-dom";
import Contact from "./Contact";
import { useState } from "react";
import Brand from "./Brand";

function Nav() {
  const [open, setOpen] = useState(false);
  const [pen, etOpen] = useState(false);
  const [en, tOpen] = useState(false);
  const [nav, nOpen] = useState(false);
  const [brand, fixBrand] = useState(false);

  const forOpen = () => {
    setOpen(!open)
  }
  const orOpen = () => {
    etOpen(!pen)
  }
  const rOpen = () => {
    tOpen(!en)
  }
  const navOpen = () => {
    nOpen(!nav)
  }
  const myBrand= () => {
    fixBrand(!brand)
  }
  return (
    <>
      {" "}
      <div
        target="blank"
        className="w-full h-14 bg-gray-900 fixed  z-10  border-white "
      >
        <nav className="bg-gray-300 px-16">
          <div className="flex flex-wrap justify-between items-center   md:px-2 py-2.5">
          
          
          <div>
            <Link
              to={"https://flowbite.com"}
              className="flex items-center rounded-full"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
                className="mr-3  sm:h-9 rounded-full "
                alt="Flowbite Logo"
              />
              <p className="animate-rubberBand self-center text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                nammakada
              </p>
            </Link>
            <button
              data-collapse-toggle="mega-menu-full"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule={"evenodd"}
                ></path>
              </svg>
            </button>
            </div>


            <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-3 pl-10 w-[600px] text-sm rounded-full text-gray-900 " placeholder="Search " required=""/>
        <button type="submit" className="text-white h-7 absolute right-2.5  bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 ">Search</button>
    </div>
</form>


            <div button
              id="mega-menu-full"
              className="hidden  justify-end items-end w-full md:flex md:w-auto md:order-1 text-end">
              <ul className="flex flex-col  text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
               <button className=""> <Link to={"./Singlecaro"}
                 className=" pl-3"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  </button>

                <li>
                <div className="hidden md:block" >
            <ul className="flex  mt-4  rounded-lg border md:mt-0 md:text-sm md:font-medium md:border-0 group-hover:relative">
             
              <li className='group'>
                <button  className=" group flex justify-between items-center py-2 w-full font-medium 
                 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                 ">Dropdown 
                 <svg className="ml-1 w-5 h-5  group-hover:rotate-180 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" 
                 xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 
                 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
                
                
                {/* Dropdown menu */}
                <div  className="hidden z-10 w-28 font-normal absolute bg-gray-100 group-hover:block rounded  shadow roup"   >
                  <div className="py-1 text-sm text-center text-gray-700 dark:text-gray-400">
                      <button className=" py-2 px-4 ">Dashboard</button><hr className="mx-4"/>
                      <button  className=" py-2 px-4 ">Settings</button><hr className="mx-4"/>
                      <button  className=" py-2 px-4 ">Earnings</button><hr className="mx-4"/>
                  </div>
                  <div className="py-1">
                    <button to="" className=" text-center py-2 pr-8 text-sm text-gray-700
                     ">Sign out</button>
                  </div>
                </div>

   </li> </ul></div></li>

   
  <button onClick={() => fixBrand(!brand)} className="hover:text-blue-700" > Brand </button>
 
 <Link to={"./Card"} className="hover:text-blue-700 mt-2"> Prodect card </Link> 

<button onClick={() => nOpen(!nav)}  className="hover:text-blue-700 "> Nodification </button>

<button onClick={() => tOpen(!en)} className="hover:text-blue-700 "> Profile </button>

<button onClick={() => etOpen(!pen)} className="hover:text-blue-700 ">Login</button>

<button onClick={() => setOpen(!open)} className="hover:text-blue-700">Contact</button>

<Link />
 </ul>
 </div>
 
          </div>
        </nav>
       
        <div className=" flex-col w-full ml-32">
          <Brand setbrand = {myBrand} brand={brand} />
          <Contact forOpen = {forOpen} open={open} />
          <Login orOpen = {orOpen} pen={pen}/>
          <Navcard navOpen = {navOpen} nav={nav} />
          <Profile rOpen = {rOpen} en={en} /> 
        </div> 
        
      </div>
    </>
  );
}

export default Nav;
