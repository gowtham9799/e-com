import React from "react";
import image12 from "./images/PAYMENT2.png";

function PaymentMethod() {
  return (
    <div className="flex flex-wrap  justify-center ">
      <div className=" lg:flex xl:mx-10  justify-center lg:w-[40rem] xl:w-[60rem] ">
        {/* delivery address div start */}

        <div className="">
        

          <div className=" py-3 flex px-4">
            <div>
              <p className=" text-2xl font-bold  text-justify"> 1.Delivery <p className="ml-5 text-2xl font-bold">Address</p>  </p>
            </div>
            <div>
              <p className="xl:ml-16 ml-4">
                Arun <br />
                Palakkatu thottam veerappampalayam (po) arachalur (via)
                <br /> erode raikapalayam, Tamilnatu 600007
                <br />
                <button className="text-cyan-400">
                  Add delivery instructions
                </button>
              </p>
              <p className="text-xl "></p>
            </div>
          </div>
          <hr className="  " />

          {/* delivery address end div */}

          {/* select paymen div  start */}

          <div className="px-5">

            <p className=" text-2xl mt-3 font-bold  text-amber-600">
              2. Select a payment method
            </p>

            <div className="px-5 border  border-gray-400 mt-3 rounded-xl ">
            
              <div>
                <p className="text-xl text-black mt-3 font-bold">
                  Your available balance
                </p>
              </div>

              <div className="mb-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  
                  className="w-4 h-4 mt-4 ml-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  className="ml-5 text-md mt-5 font-medium text-gray-900 dark:text-gray-300"
                >
                  Use your{" "}
                  <span className="font-bold ">₹15.00 Amazon Pay balancex</span>
                </label>
              </div>

              <div>
                <div className="flex">
                  <div className="relative  mt-4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="ml-3 border-2   bg-gray-200 block px-2.5 pb-2.5 pt-4   h-10 text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="  Enter code"
                    />
                  </div>
                  <div>
                    <button className="w-20 h-10 bg-amber-300 ml-6 mt-4 rounded-lg">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between py-4">
                  <div>
                    <p className="text-xl  text-black  font-bold">
                      Your saved credit and debit cards
                    </p>
                  </div>
                  <div className="flex w-72 justify-between">
                    <p className="text-lg  ">Name on card</p>
                    <p className="text-lg mr-10  ">Expires on</p>
                  </div>
                </div>
                
                <hr className=" mx-12 mt-5 ml-0" />

                <div className=" ">

                  <div className="flex flex-wrap justify-between py-4">
                    <div className="flex">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        value="USA"
                        className="w-4 h-4  border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        checked/>

                      <label
                        for="country-option-1"
                        className=" ml-3  text-lg font-bold text-gray-900" >
                        ICICI Bank Debit Card ending 
                      </label>
                    </div>

                    <div className="flex flex-wrap justify-between w-72">
                      <p className="text-lg  text-black ">Gowtham D</p>
                      <p className="text-lg  text-black mr-10">10/2024</p>
                    </div>
                  </div>

                  <div className="flex mt-3 justify-between w-96 ">
                    <p className="text-xl  mt-1 text-black font-normal">
                      Enter the cv (?);
                    </p>
                    <div className="  ">
                      <input
                        type="text"
                        id="floating_outlined"
                        className=" border-2 bg-gray-200 w-48 xl:w-32  px-2.5 pb-2.5 pt-4 ml-3 h-10 text-sm text-black bg-transparent rounded-lg 
                        border-1 border-gray-300  "
                        placeholder=" " />
                    </div>
                  </div>

                  <div className=" mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 mt-4 ml-1 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
                       dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                    <label
                      for="default-checkbox"
                      className="ml-2 text-lg mt-5 font-medium text-gray-900 dark:text-gray-300">
                      Save card as per new RBI guidelines
                    </label>

                    <button className="text-cyan-400 text-lg ml-5 mt-5">
                      Learn more{" "}
                    </button>
                  </div>

                  <p className="text-xl  mt-2 text-black  font-bold">
                    Another payment method
                  </p>

                  <hr className=" mx-12 mt-5 ml-0" />

                  <div className=" flex">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
                      className="w-4 h-4 mt-3 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="country-option-1"
                      className="block ml-5 mt-3 text-lg font-bold text-gray-900 dark:text-gray-300"
                    >
                      Add Debit/Credit/ATM Card
                    </label>
                  </div>
                  <div className="flex text-lg ">
                    <p className=" text-lg ">
                      You can save your cards as per new RBI guidelines.
                      <button className="text-cyan-400 text-lg ml-5">
                        Learn more{" "}
                      </button>
                    </p>
                  </div>
                  <img
                    src={image12}
                    alt="image12"
                    className=" h-10 mb-2 ml-10 mt-3 rounded-lg"
                  ></img>

                  <div className=" mb-4 flex">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
                      className="w-4 h-4 mt-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="country-option-1"
                      className="block ml-5 mt-3 text-lg font-bold text-gray-900 dark:text-gray-300"
                    >
                      Net Banking
                    </label>
                  </div>

                  <div className="">
                    <select
                      id="countries"
                      className=" h-10 w-96 border-2 border-zinc-300 bg-gray-200 rounded-md focus:outline-none"
                    >
                      <option selected="">Select an option</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div className=" mb-4 flex">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
                      className="w-4 h-4 mt-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="country-option-1"
                      className="block ml-5 mt-3 text-lg font-bold text-gray-900 dark:text-gray-300"
                    >
                      Other UPI Apps
                    </label>
                  </div>

                  <div>
                    <p className=" text-xl"> Please enter your UPI ID</p>
                    <div className="relative  mt-4  flex flex-wrap justify-between w-96">
                      <input
                        type="text"
                        id="floating_outlined"
                        className=" border-2 bg-gray-200  block px-2.5 pb-2.5 pt-4  w-72 h-10 text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" EX:Mobile Number@UPI "
                      />

                      <div>
                        <button className=" h-10 bg-amber-300  rounded-lg px-6">
                          verify
                        </button>
                      </div>
                    </div>

                    <div className=" mb-4 flex">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        value="USA"
                        className="w-4 h-4 mt-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        checked
                      />
                      <label
                        for="country-option-1"
                        className="block ml-3 mt-3 text-lg font-bold text-gray-900 dark:text-gray-300"
                      >
                        Pay on Delivery
                      </label>
                    </div>

                    <p className=" text-lg mb-3 text-justify">
                      Pay using cash, Paylink (debit, credit card, UPI) or Scan
                      & Pay (Flat INR 25 back on first Amazon <br />
                      Scan & Pay transaction){" "}
                      <button className="text-cyan-400 ml-1">
                        known more.
                      </button>
                    </p>
                    <div className="w-full rounded-xl mr-5 px-none h-16 bg-gray-200 border  border-gray-400  flex items-center ">
                      <button className="bg-yellow-300 border border-yellow-600 p-2 rounded-lg ml-5">
                        Use this payment method
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* select paymen div end*/}

          <div className="div3">
            <div>
              <p className=" text-2xl mt-8 px-3 font-bold"> 3.Items and delivery</p>
            </div>
            <div className="flex">
              <p className=" text-md mt-7 px-5">
                Need help? Check our{" "}
                <button className="text-cyan-400 ml-1">page help</button>
                <span className="ml-2">or</span>
                <button className="text-cyan-400 ml-1">contact us</button>{" "}
              </p>
            </div>
            <p className="px-5 text-md mt-8 text-justify ">
              When your order is placed, we'll send you an e-mail message
              acknowledging receipt of your order. If you choose topay using an
              electronic payment method (credit card, debit card or net banking)
              you will be directed to your bank's website to complete your
              payment. Your contract to purchase an item will not be complete
              until we receive your electronic payment and dispatch your item.
              If you choose to pay using Pay on Delivery (POD), you can pay
              using cash/card/net banking when you receive your item.
            </p>
            <p className=" text-md mt-5 px-5">
              See Amazon.in's
              <button className="text-cyan-400 ml-1">return policy.</button>
            </p>

            <div className="flex">
              <p className=" text-md mt-5 mb-3 px-5">
                Need to add more items to your order? Continue shopping on the{" "}
                <button className="text-cyan-400 ml-1">
                  Amazon.in home page.
                </button>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg-mx-4 mx-5 ">
        <div className=" div4  border  border-gray-400 h-[29rem] mt-5 rounded-xl w-full  lg:w-96">
          <div className=" mx-4">
            <button className="bg-yellow-300 border border-yellow-600 p-2 rounded-lg  mt-5 w-full">
              Use this payment method
            </button>
            <p className=" text-md mt-5 mx-5 text-justify">
              
              Choose a payment method to continue checking out. You'll still
              have a chance to review your order before it's final.
            </p>
            <hr className="mt-3" />
            <p className=" text-xl mt-5 font-bold">Order Summary</p>

            <div className="flex justify-between">
            <p className=" text-sm mt-2 ">Items:</p>
            <p className="">--</p>
            </div>
           
            <div className="flex justify-between">
            <p className=" text-sm mt-2 ">Delivery:</p>
            <p className="">--</p>
            </div>

            <div className="flex justify-between">
            <p className=" text-sm mt-2 ">Total:</p>
            <p className="">--</p>
            </div>

            <div className="flex justify-between">
            <p className=" text-sm mt-2 ">Promotion Applied:</p>
            <p className="">--</p>
            </div>

            <hr className="mt-3" />
            <p className=" text-xl mt-2 font-bold">
              
              Order Total:<span className="ml-44 text-red-600 ">₹ 766</span>
            </p>
            <button className="text-cyan-400 ml-1 mt-4 w-full bg-gray-300 h-10 rounded-lg font-bold">
              how are delivery cost validated ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
