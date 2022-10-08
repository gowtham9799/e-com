// import React from 'react'
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function Shipaddress() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const contact = ["Tamilnadu", "Kerala"];
  const [search, setsearch] = useState("");

  return (
    <div className="lg:flex justify-center bg-white">
      <div>
        <div className="">
          <div>
            <p className="ml-5 text-4xl">Select a delivery address</p>
            <p className="ml-5 text-lg mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              debitis vero. Dolores doloremque ipsam minima voluptatum doloribus{" "}
              <br /> sapiente consectetur, accusantium vitae corrupti nobis sit
              debitis?
            </p>
          </div>

          <div className="flex capitalize">
            <div>
              <p className="ml-5 text-2xl mt-4">Most recently used</p>
              <h5 className="pl-5 mt-5 text-lg">Gowtham</h5>
              <h6 className="pl-5 text-lg">
                Takeaway · <br /> No-contact delivery <br />
                Address: no 162, <br /> Boat house, <br /> East Coast Rd, <br />{" "}
                Athanavur, <br />
                Tamil Nadu 635853 <br />
                india
              </h6>
              <h6 className="pl-5 text-lg text-sky-500">
                add delivery instructionsions
              </h6>
              <div className="px-3">
                <button className="w-80 xl:w-96 text-lg h-11 px-3 mt-4 text-center text-black border-2 border-zinc-300 bg-amber-300 rounded-md  capitalize">
                  Delivery to this address
                </button>
              </div>

              <div className="flex mt-3 px-3">
                <div>
                  <button
                    type="tel"
                    className=" w-[9rem] lg:w-44 h-11 text-lg text-center border-2 border-zinc-300 rounded-md "
                  >
                    Edit
                  </button>
                </div>
                <div className="px-3 ">
                  <button
                    type="tel"
                    className=" w-[9rem] lg:w-44 text-center h-11 text-lg  ml-3 border-2 border-zinc-300 rounded-md "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* <div className='ml-16'>      
        <h5 className='pl-5 mt-[65px]'>Gowtham</h5>
        <h6 className='pl-5'>Takeaway · <br/> No-contact delivery <br/>
        Address: no 162, <br/> Boat house, <br/> East Coast Rd, <br/> Athanavur, <br/>Tamil Nadu 635853  <br/>india</h6>
        <h6 className='pl-5 text-sky-500'>add delivery instructionsions</h6>

        <button  className='w-96 h-11 ml-5 mt-4 text-center text-black border-2 border-zinc-300 bg-amber-300 rounded-md mr-2 capitalize'  >Delivery to this address</button>

             <div className='flex mt-3'>
                 <div >
                 <button type="tel" className="pl- w-44 h-11 ml-5 text-center border-2 border-zinc-300 rounded-md mr-2" >Edit</button>
              </div>
              <div className=' '>
                 <button type="tel" className="pl- w-44 text-center h-11 ml-6   border-2 border-zinc-300 rounded-md mr-2" >Delete</button>
             </div>
             </div>

             </div>                                                                                          */}
          </div>
        </div>

        <div className="capitalize mt-5 mb-3 w-full px-3 ">
          <h2 className=" text-lg">Add a new address</h2>
          <div></div>
          <div className="">
            <label className="flex flex-wrap justify-between w-full sm:w-38 text-lg border-2 border-zinc-300 bg-cyan-200 rounded-md  py-2 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <button className=" bg-gray-300 w-24 h-9 text-lg rounded-md float-right ">
                Auto fill
              </button>
            </label>
          </div>

          <h5 className=" mt-4 text-lg">Country / Religion</h5>

          <div className="">
            <Select
              options={options}
              value={value}
              onChange={changeHandler}
              className="z-50 placeholder:text-lg w-full  border-2 border-zinc-300 bg-gray-200 rounded-md"
              placeholder="india..."
            />
          </div>

          <div className="">
            <div>
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2  bg-gray-200  block px-2.5 pb-2.5 pt-4 w-full h-10 text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Full name
                </label>
              </div>
            </div>

            <div>
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2 border-zinc-300 bg-gray-20 block px-2.5 pb-2.5 pt-4 w-full h-10 text-sm text-black bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Mobile number
                </label>
              </div>
            </div>

            <div>
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2 border-zinc-300 bg-gray-200  block px-2.5 pb-2.5 pt-4  w-full h-10 text-sm text-black bg-transparent rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Pincode
                </label>
              </div>
            </div>

            <div>
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2 border-zinc-300 bg-gray-200 rounded-md block px-2.5 pb-2.5 pt-4  w-full h-10 text-sm text-black bg-transparent  border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Flat, House no, Apartment
                </label>
              </div>
            </div>

            <div>
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2 border-zinc-300 bg-gray-200  block px-2.5 pb-2.5 pt-4  w-full h-10 text-sm text-black bg-transparent rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Area, Streat, Village
                </label>
              </div>
            </div>

            <div>
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2 border-zinc-300 bg-gray-200  block px-2.5 pb-2.5 pt-4  w-full h-10 text-sm text-black bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Landmark
                </label>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full ">
              <div className="relative  mt-4">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" border-2 border-zinc-300 bg-gray-200 block px-2.5 pb-2.5 pt-4  w-full h-10 text-sm text-black bg-transparent rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="   absolute text-lg text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {" "}
                  Town/City
                </label>
              </div>
              <h5 className=" mt-4 text-lg">State</h5>
              <div>
                <select
                  id="countries"
                  className=" w-full h-10  border-2 border-zinc-300 bg-gray-200 rounded-md focus:outline-none"
                >
                  <option selected="">State</option>
                  <option value="US">Andhra Pradesh</option>
                  <option value="CA">Arunachal Pradesh</option>
                  <option value="FR">Assam</option>
                  <option value="DE">Chhattisgarh</option>
                  <option value="DE">Goa</option>
                  <option value="DE">Gujarat</option>
                  <option value="DE">Haryana</option>
                  <option value="DE">Himachal Pradesh</option>
                  <option value="DE">Jharkhand</option>
                  <option value="DE">Karnataka</option>
                  <option value="DE">Kerala</option>
                  <option value="DE">Madhya Pradesh</option>
                  <option value="DE">Maharashtra</option>
                  <option value="DE">Manipur</option>
                  <option value="DE">Meghalaya</option>
                  <option value="DE">Mizoram</option>
                  <option value="DE">Nagaland</option>
                  <option value="DE">Odisha</option>
                  <option value="DE">Punjab</option>
                  <option value="DE">Rajasthan</option>
                  <option value="DE">Sikkim</option>
                  <option value="DE">Tamil Nadu</option>
                  <option value="DE">Telangana</option>
                  <option value="DE">Tripura</option>
                  <option value="DE">Uttar Pradesh</option>
                  <option value="DE">Uttarakhand</option>
                  <option value="DE">West Bengal</option>
                </select>
              </div>
            </div>
          </div>

          <div clasName="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 mt-4  text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              for="default-checkbox"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Make this my defauld address
            </label>
          </div>
          <div className="">
            <h5 className=" mt-3 text-2xl">Add delivery instructions</h5>
            <h6 className="text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              ex asperiores eligendi omnis suscipit voluptates vero <br />
              voluptatum, itaque numquam ipsum nihil laboriosam accusantium
              voluptatem! Harum.
            </h6>
            <h5 className=" mt-4 text-xl">Address type</h5>
          </div>
          <div>
            <select
              id="countries"
              className=" w-full h-10 mt-3 border-2 border-zinc-300 bg-gray-200 rounded-md focus:outline-none"
            >
              <option selected="">Select an Adddress type</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div>
              <button
                type="tel"
                className=" w-44 h-11  mt-4 text-lg bg-yellow-300 text-center border-2 border-zinc-300 rounded-md mr-2 mb-40"
              >
                Use this address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipaddress;
