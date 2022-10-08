import React, {useState} from 'react'
import {Link} from 'react-router-dom'


import img1 from '../src/images/img1.png'
import img2 from '../src/images/img1.png'
import img3 from '../src/images/PAYMENT1.png'
import img5 from '../src/images/Myunde1.png'



import {AiOutlineClockCircle , AiOutlineGift, AiOutlineYoutube ,AiFillLinkedin} from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { BsTwitter , BsGoogle} from 'react-icons/bs'
import { FaPinterestP} from 'react-icons/fa'





function Footer() {

  const [isActive, setIsActive] = useState({ set1:false, set2:false, set3:false});
   
  return (


      <body className='from-gray-700  to-gray-100 z-50 text-black'>

      <div className='z-50 '>

      <main className="flex-1   gow z-50">  
            
                                    
                                          
                                             
                                                  <div className="flex flex-wrap  ml-3 sm:ml-8 text-lg z-50">

                                          <div className='mt-8 lg:ml-12 z-50'>

                                          <div className='flex '>
                                          <img src={img5} alt='logo' className='w-12 h-9 ml-5 '></img>
                                          <h3 className="font-bold text-2xl pb-2 ml-3  mt-2"> Myunde</h3>
                                          </div>


                                          
                                              <p className="ml-3 pt-3 justify-self-start font-medium"> Buy Brief,Boxer Brief, Trunk,Inner Boxer,Sleeveless vest,<br/>
                                              & Apparel from Myunde - The Online Lingerie &<br/>   
                                              Fashion Destination in India you'll love our beautifully<br/>
                                              crafted Brief,Boxer, nightwear & accesories.<br/>
                                              use our product size calculator to get your best fit.<br/>
                                              Explore our wide collection of gym vest, Tanktops, <br/>
                                              T-shirt, Short & Trackpants. Enjoy<br/>
                                              fabulous offers on our stunning range, from everybody<br/> 
                                              styles to high-fashion products in every size. myunde.com<br/>    
                                              offers solutions for every stage in a Men's life.<br/>
                                              </p> 

                                           </div>
                                             
                                             
                                             
                                              <div className="  mt-14  ml-4  sm:ml-12 lg:ml-32 xl:ml-40">
                                            <ul>
                                           
                                         
                                              <div className="pb-2 flex justify-between " ><b>SHOP BY CATEGORIES </b>
                                              <svg  onClick={()=>setIsActive({...isActive, set1:!isActive.set1})} className="fill-current h-6 w-10  sm:hidden "  viewBox="0 0 20 20">
                                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                    </svg>
                                                    </div>
                                                  

                                                    {(

                                                    <div className={isActive.set1 ? 'font-medium' : "font-medium hidden md:block"}>
                                                    <Link to={""} className="hover:text-green-500"><li>Brief</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Boxer</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Trunkl</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Vest</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Short Sleeve vest</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Gym Vest</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>T-shirt</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Sorts</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Track pantlounge Wear</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>Jogger</li></Link>
                                                    </div>
                                                   
                                                    )}

                                            </ul>
                                                    </div>
                                             
                                                  <div className=" mt-14 md:ml-4 ml-4 lg:ml-16 xl:ml-40 xl:mr-24">
                                          <ul>
                                              <div className="pb-2 flex justify-between " ><b>HELP & SUPPORT</b>
                                              <svg onClick={()=>setIsActive({...isActive, set2:!isActive.set2})} className="fill-current h-6 w-10  sm:hidden " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                              </svg>
                                              </div>

                                              { (

                                              <div className={ isActive.set2 ? "  font-medium " :'font-medium hidden md:block'} >
                                                <Link to={""} className="hover:text-green-500"><li>Track/Return order</li></Link>
                                                  <Link to={""} className="hover:text-green-500"><li>Contact Us</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>FAQs</li></Link>
                                                      <Link to={""} className="hover:text-green-500"><li>Shipping Policy </li></Link>
                                                          <Link to={""} className="hover:text-green-500"><li>Discret Packaging</li></Link>
                                                            <Link to={""} className="hover:text-green-500"> <li>Disclaimer Policy</li></Link>
                                                              <Link to={""} className="hover:text-green-500"><li>Responsible Dislosure</li></Link>
                                                                <Link to={""} className="hover:text-green-500"> <li>payment Policy</li></Link>
                                                                  <Link to={""} className="hover:text-green-500"><li>Privacy Policy</li></Link>
                                                                    <Link to={""} className="hover:text-green-500"><li>Terms of use</li></Link>
                                                                    </div>

                                              )}

                                          </ul>
                                          </div>
                                                
                                                 
                                              <div className= " mt-14 xl:ml-16 ml-4 md:ml-16">
                                          <ul>
                                            <div className="pb-2 flex justify-between "><b>DISCOVER MYUNDE</b>
                                            <svg  onClick={()=>setIsActive({...isActive, set3 : !isActive.set3})} className="fill-current h-6 w-10 sm:hidden " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                            </div>


                                            {  (


                                            <div className={isActive.set3 ? " font-medium " :'font-medium hidden md:block'}>
                                              <Link to={""} className="hover:text-green-500"><li>About myunde</li></Link>
                                                <Link to={""} className="hover:text-green-500"><li>Locate Myunde Studios</li></Link>
                                                  <Link to={""} className="hover:text-green-500"><li>Our Investors</li></Link>
                                                    <Link to={""} className="hover:text-green-500"><li>careers </li></Link>
                                                      <Link to={""} className="hover:text-green-500"><li>Press careers</li></Link>
                                                        <Link to={""} className="hover:text-green-500"> <li>Circle of Radiance</li></Link>
                                                          <Link to={""} className="hover:text-green-500"> <li>Myunde Collections</li></Link>
                                                            <Link to={""} className="hover:text-green-500"><li>Myunde Blog</li></Link>
                                                              <Link to={""} className="hover:text-green-500"><li>Myunde Fit secrets</li></Link>
                                                                <Link to={""} className="hover:text-green-500"><li>Find Your Perfect Fit</li></Link>
                                                                </div>
                                                        
                                                                )}


                                          </ul>
                                               </div>
                                             

                                               </div>

                                               

                                              





                                          <div className='mt-3 xl:flex justify-around  xl:mr-32 '>

                                          <div className=" flex  justify-evenly xl:justify-between mt-5  ">
                                            <Link to="https://www.apple.com/in/app-store/">
                                                <img src={img1} className=" lg:mt-[5px] mt-[2.5px] h-16 " alt="APP STORE" />
                                                </Link>
                                                <Link to="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiV6YPO6Nz5AhXbmWYCHZqZB9YYABAAGgJzbQ&ohost=www.google.com&cid=CAASJORoEh_3aYKL-YOpSmyBltvoICyF6qSW1A44PeGuyHodKEY7Pg&sig=AOD64_2PCDeL__NvOGjRSj7QXYFW-9aqfA&q&adurl&ved=2ahUKEwjNifzN6Nz5AhWkx3MBHVBhD8wQ0Qx6BAgDEAE">            
                                                    <img src={img2} className="h-[71px] xl:ml-12 " alt="GOOGLE PLAY" />
                                              
                                                    </Link>
                                          </div>
                                          
                                          <div className=" md:flex text-center mt-3 lg:h-20  mb-3 lg:justify-center bg-gray-400">
                                          <Link to={""} className=" text-start  flex justify-between  border-[1px] border-opacity-30 border-black  md:w-72  lg:w-80 font-medium  xl:w-80 p-4 opacity-60 hover:opacity-100" ><AiOutlineClockCircle  className="text-4xl mt-1 ml-4 "/>

                                          Discreat <br/>
                                          Packaging
                                      </Link>
              
                                          <Link to={""} className=" text-start  flex justify-between  border-[1px] border-opacity-30 border-black opacity-60 hover:opacity-100 font-medium md:w-72  lg:w-80   xl:w-80 p-4" ><AiOutlineGift className="text-4xl mt-1 ml-4 "/>

                                            Discreat <br/>
                                            Packaging
                                        </Link>
                                        <Link to={""} className=" text-start  flex justify-between  border-[1px] border-black border-opacity-30 opacity-60 hover:opacity-100 md:w-72 font-medium lg:w-80  xl:w-80 p-4" ><AiOutlineGift className="text-4xl mt-1 ml-4 "/>
                                          Dispatch <br/>
                                          within 24 hrs
                                      </Link>
                                      
                                       </div>

                                       </div>
                       
                          
          
          
               
                <div className="mx-10 text-center sm:text-start sm:flex sm:justify-between divide-y-2 divide-dotted sm:divide-y-0 divide-gray-300 px-5">


                <div className=" ml-6 mb-2 ">
                  <h4 className="mb-3 "><b>REGISTERED OFFICE ADDRESS:</b></h4>
                      <address>
                      Infinite Trends Pvt Ltd<br/>
                      1st Floor,MK plaza, Thoppu thottam,<br/>
                      Solipalayam Road, 15 velampalayam,<br/>
                      Trippur 641652.
                      </address>
               </div> 


               <div className="sm:mt-8 ">
                <ul>  
                   <li><b>phone no :</b><Link to={""} className="hover:text-green-500"> +91 9321136444 </Link></li>
                    <li><b>Email :</b><Link to={""} className="hover:text-green-500"> info@myunde.com</Link></li>
                    <li><b>web :</b><Link to={""} className="hover:text-green-500"> www.myunde.com</Link></li>
                </ul>
            </div> 


            <div className= "mx-24  text-center sm:mt-8  sm:text-xl sm:mr-12">
            <ul >
               <li className="text-xl"><b>100%</b></li>
                <li>secure payment </li>
            </ul>
        </div> 

          </div> 

    
          <div className=" sm:flex  px-16">
            <div className="text-center sm:text-start ml-4  ">
              <h4 className="mb-2 text-lg font-medium">Pay using</h4>
             <div className='flex justify-center sm:justify-start'> <img src={img3} alt="pay" className="w-72 sm:w-52  mb-2"/>   </div>
           </div> 
      </div> 


       

        
        <div className="  "> 

           
        <div className=" text-center text-xl sm:text-2xl flex justify-center">
         <Link to={""}><RiFacebookFill className='mt-2 mx-3 opacity-20 hover:opacity-100'/> </Link>
         <Link to={""}><BsTwitter className='mt-2 mx-3 opacity-20 hover:opacity-100'/> </Link>
         <Link to={""}><FaPinterestP className='mt-2 mx-3 opacity-20 hover:opacity-100'/> </Link>
         <Link to={""}><AiFillLinkedin className='mt-2 mx-3 opacity-20 hover:opacity-100'/></Link>
         <Link to={""}><AiOutlineYoutube className='mt-2 mx-3 opacity-20 hover:opacity-100'/> </Link>
         <Link to={""}><BsGoogle className='mt-2 mx-3 opacity-20 hover:opacity-100'/> </Link>
       </div>
 
       <div className=" text-center text-sm sm:text-lg mt-2 ">
       <p className="opacity-60">Copyright 2022 Myunde.All rights reserved</p>
     </div>
    
   </div>


    </main>
    </div>  
    </body> 
   
    )
  }
   
  export default Footer;
  









  
//   <div class="min-h-screen flex justify-center bg-gray-100 py-24">

//   <div>



// <div open x-data x-ref="dropdown" @click.away="$refs.dropdown.removeAttribute('open');" class="relative inline-block text-left">

// <summary>
// <div class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
// Options

// <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
// <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
// </svg>
// </div>
// </summary>



// <div class="py-1" role="none">
// <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
// <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
// <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>

// </div>


// </div>

// </div>