import React from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineGift} from 'react-icons/ai'

import ReactTooltip from 'react-tooltip';


const places = [
  {
      order_date: "12/2/2022",
      quantity: 1,
      custumer_name:"karthick",
      product_price:200,
      customer_address: "45,periyarcolony,coimbatore",
      product_image: "https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg",
      product_name:"MALAYALI TSHIRT UNISEX COMFORT FIT – GOLDEN 3D PRINT",
  
  },
  {
      order_date: "12/2/2022",
      quantity: 1,
      custumer_name:"karthick",
      product_price:200,
      customer_address: "45,periyarcolony,coimbatore",
      product_image: "https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg",
      product_name:"MALAYALI TSHIRT UNISEX COMFORT FIT – GOLDEN 3D PRINT",
  
  },
]

function Place() {
  return (


      
    <div className='flex justify-center mt-32'>
    
   
    <div>


    <div className='mx-4 border-b-2  mb-1'>

        <p className="text-3xl  text-start font-semibold capitalize drop-shadow-xl    mt-3">review your order</p>
        <p className="text-start font-medium capitalize mb-2">by placing your order, you agree to myunde's  
        <Link to={"#"} className="text-green-600"> privacy notice </Link>and<Link to={"#"} className="text-green-600 "> conditions of use</Link></p>

    </div>


    <div className='flex flex-wrap'>

    <div className='mx-4 '>
    
    <div className='flex flex-wrap justify-between w-full lg:w-[60rem] border-2 px-5 py-4 bg-primary  mt-3 shadow-xl shadow-gray-300'>



    <div >
    <p className="text-start font-medium capitalize">shipping address <Link to={""} className="text-green-600"> change</Link></p>


    <div> 
    someone,<br/>
    Infinite Trends Pvt Ltd<br/>
    1st Floor,MK plaza, Thoppu thottam,<br/>
    Solipalayam Road, 15 velampalayam,<br/>
    Trippur 641652.
    </div>

     <Link to={""} className="text-green-600 text-start font-medium capitalize">add delivery instructions</Link>

    </div>


    <div className='mt-3'>
    <p className="text-start font-medium capitalize">payment method <Link to={""} className="text-green-600"> change</Link></p>
    <p>pay on delivery (cash/card)</p>

    </div>


    <div className='mt-3'>
    <p className="text-start font-medium capitalize">gift cards voucher & promotional codes</p>

    <input type="text , number"  className="  border-gray-300   sm:text-sm rounded-md mr-5 focus:ring-black focus:border-black h-9 border pl-3 mt-2" placeholder="Enter Code" />
    <button  className=" text-sm font-medium  bg-brand  px-4 rounded-md  shadow-md shadow-gray-400  hover:scale-105 h-8"> Apply</button>

    </div> 



    </div>


    <div  className='flex flex-wrap justify-between w-full lg:w-[60rem]  bg-primary  mt-3 border-2 shadow-xl shadow-gray-300'>

    <div className=' font-medium capitalize m-2 flex flex-wrap justify-between w-full px-3'>
    <div>
    <p className='  drop-shadow-xl text-xl'>delivery date: <br/></p>
   

    <p className="text-start font-medium capitalize">if your order in the next 14 hours and 48 minutes <Link to={"#"} className="text-green-600">(details)</Link></p>
    </div>
    <div>
    <button className=' p-1 pb-2 px-4 pt-1 lg:pb-2  flex bg-brand rounded-xl my-2 h-8 lg:h-9 capitalize shadow-md shadow-gray-400   hover:scale-105 font-medium'>
     <AiOutlineGift className='w-5 h-5  lg:mr-2 ' /> add gift options </button>
     </div>
    </div>


    {places.map((place) => (

    <div className='flex flex-wrap justify-between w-full lg:w-[60rem]  bg-primary px-3 py-3 '>
    <div className='flex flex-wrap' >
        
    <Link to={""} className="bo">
    <img src={place.product_image} alt={''}
     className="w-36 h-36  m-2 shadow-lg shadow-gray-700  rounded-xl hover:scale-105  "/>
     </Link>


     <div className='ml-4'>

     <Link to={""}><p className='font-medium text-black    mt-5 hover:text-teal-600 '>{place.product_name}
     </p></Link>
     
     
     
     <p className='font-medium   mt-2 '>Qty:{place.quantity}</p>
  
     
     <p className=' font-medium capitalize drop-shadow-xl text-xl lg:mt-6'>total :0.00</p>
   
 
     </div>
    </div>

    

</div>

    ))}
    

</div>


    </div>



    <div className='divide-y-2 divide-dotted divide-gray-300 w-full lg:w-[60rem]  xl:w-80  px-4 mx-4 border-2 mt-3 bg-primary shadow-xl shadow-gray-300 h-[29.5rem]'>

    <div className='my-3 px-3'>

    <p className="text-2xl  text-start font-semibold capitalize drop-shadow-xl  text-red-900  mb-3 ">order summary</p>
    
    <div className='capitalize font-medium'>
    
    <div className='flex justify-between  '>
    <p>items </p>
    <p>2</p>
    </div>


    <div className='flex justify-between   '>
    <p>delivery </p>
    <p>222</p>
    </div>
        
    <div className='flex justify-between   '>
    <p>Total </p>
    <p>457 </p>
    </div>
   
    <div className='flex justify-between   '>
    <p>promotion applied </p>
    <p>45 </p>
    </div>

    </div>

    </div>

    <div>

    <div className='flex justify-between  font-semibold capitalize  my-4 px-3'>
    <p className="text-2xl  text-start  text-red-900 drop-shadow-xl">order total :</p>
    <p>784 </p>
    </div>

    </div>



    <div className='font-semibold capitalize   px-5 '>

    <p className="text-xl  text-start mb-2 mt-3">your savings :</p>
    <li>free delivery </li>
    <li className='mb-2'>item discount</li>
    <Link to={"#"} className="text-green-600 flex mb-5"> details <svg  className="fill-current h-6 w-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg></Link>

    </div>

    <div className='flex justify-center '>
    <button className='w-full   bg-brand rounded-xl my-2 h-16 capitalize shadow-md shadow-gray-400  hover:scale-105 font-medium mb-8 ' >place your order</button>
    </div>




    </div>

    </div>
    </div>


    </div>
    
  
  )
}

export default Place



// div className=' lg:w-[60rem]  border-2 px-5  bg-primary'>
   
    
   
    
   
   
    
//     <div className=' font-medium capitalize '>
//     <p className='  drop-shadow-xl text-xl'>delivery date: <br/></p>
   

// <p className="text-start font-medium capitalize">if your order in the next 14 hours and 48 minutes <Link to={"#"} className="text-green-600">(details)</Link></p>
// </div>


   








   




//    <div className='flex flex-wrap justify-between w-full lg:w-[60rem]    bg-primary  mt-3 '>



//     <div className='flex flex-wrap' >
//     <Link to={""}>
//     <img src={""} alt={''}
//      className="w-36 h-36 lg:m-5 m-2 shadow-md shadow-black  rounded-xl hover:scale-105  "/>
//      </Link>
//      <div >

//      <Link to={""}><p className='font-medium text-black    mt-2 hover:text-teal-600'> gn</p></Link>
     
//      <p className=' font-medium capitalize drop-shadow-xl'>total :</p>
   
     
//      <p className='font-medium   mt-2'>Qty:</p>
  
//      <button className=' p-1 pb-2 px-5 lg:pb-2 l flex bg-brand rounded-xl my-2 h-8 lg:h-9 capitalize  shadow-md  hover:scale-105 font-medium'>
//      <BsArrowRepeat className='w-5 h-5 mt-1 lg:mr-2 '/> add gift option </button>
       
 
//      </div>

//     </div>

    

   
//     <div className=' font-medium capitalize '>
//     <p className='  drop-shadow-xl text-xl'>choose a delivery speed  <br/></p>
//    <p className="text-start "> <Link to={"#"} className="text-green-600">some date</Link> --FREE delivery on eligable orders</p>
//     </div>

    
//  </div>
   
   
//     </div>
   