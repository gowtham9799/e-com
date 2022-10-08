import React from 'react'
import {BsArrowRepeat} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';





const orders = [
{
    order_date: "12/2/2022",
    order_id: 45,
    custumer_name:"karthick",
    product_price:200,
    customer_address: "45,periyarcolony,coimbatore",
    product_image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    product_name:"MALAYALI TSHIRT UNISEX COMFORT FIT – GOLDEN 3D PRINT"

},

]


function Order() {


  return (


    <div className='bg-primary '>

<div className='xl:flex justify-center'>
<div className=' mt-32 flex justify-between  flex-wrap  xl:w-[60rem] px-2 py-2 '>
<p className='text-4xl  text-start font-medium capitalize drop-shadow-xl  lg:border-b  '>your orders</p>






<div className=''>
<div className='flex h-9 mt-3 '> 

<input type="text"  className="  border-gray-300   sm:text-sm rounded-xl mr-5 focus:ring-black focus:border-black" placeholder="search order.." />
<button  className=" text-sm font-medium  bg-brand  px-4 rounded-xl  shadow-md shadow-black hover:scale-105"> search</button>

</div>

</div>
</div>

</div>

    {orders.map((order) => (

<div className='px-2 my-4  xl:flex justify-center'>
    <div className='  xl:w-[60rem]  rounded-lg shadow-xl shadow-gray-400 text-start border-t bg-ternary '>
    
    <div className='flex flex-wrap justify-between w-full  p-2    rounded-t-lg px-4 '>
    
    <div className='flex flex-wrap justify-between w-full md:w-72'>
   
    
    <div className=' font-medium capitalize text-white'>
    <p className='  drop-shadow-xl'>order placed : <br/></p>{order.order_date}
    </div>


    <div className='text-white flex'>
    <p className='text-white  font-medium capitalize drop-shadow-xl'>total :</p>{order.product_price}
   </div>


   </div>




<div className='flex flex-wrap justify-between w-full md:w-72'>    
<div className='font-medium  text-white capitalize '>
    <p className='  drop-shadow-xl '> ship to : </p>


    <p data-tip={order.customer_address} className='flex'>{order.custumer_name} <ReactTooltip place="bottom" event='mouseover' eventOff="mouseleave"   /> <svg className="fill-current  w-5 mr-2 mb-5"  viewBox="0 0 20 20">
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
  </svg></p>
    </div>


    <div className='font-medium text-white'>
    <div className='flex'><p className='  drop-shadow-xl'>ORDER :  </p>  {order.order_id} </div>
    <button className='hover:underline  '>view order details</button>
    </div>

    </div>



    </div>




   <div className='flex flex-wrap  bg-primary rounded-b-lg '>



    <div >
    <Link to={""}>
    <img src={order.product_image} alt={''}
     className="w-36 h-36 lg:m-5 m-2 shadow-md shadow-black  rounded-xl hover:scale-105 ml-2 sm:ml-2 "/>
     </Link>
    </div>

    <div className='  ml-2 md:mt-3'>

    <Link to={""}><p className='font-medium text-black w-52 sm:w-72 lg:w-96  mt-2 hover:text-teal-600'> {order.product_name}</p></Link>
    <button className=' p-1 pb-2 px-5 lg:pb-2 l flex bg-brand rounded-xl my-2 h-8 lg:h-9 capitalize  shadow-md  hover:scale-105 font-medium'>
    <BsArrowRepeat className='w-5 h-5 mt-1 lg:mr-2 '/> buy again </button>
    <p className='font-medium   mt-2'>Qty:</p>
 
    
      

    </div>

    <div className='flex justify-between md:mt-5   md:block  w-full md:w-32 px-2 lg:ml-32 ' >

    <button className=' p-2 lg:pb-3 bg-brand  rounded-xl capitalize  text-sm  md:h-9 md:w-52 shadow-md my-3 hover:scale-105 font-medium' >give product rating</button>
    <button className=' p-2 lg:pb-3 bg-brand  rounded-xl capitalize   text-sm  md:h-9 md:w-52  my-3 shadow-md  hover:scale-105 font-medium' >Write a product review</button>
    
    </div>
    
 </div>
   
   
    </div>
   
    </div>
    ))}





    </div>

   


  )
}

export default Order





// <div className=' lg:w-[70rem] p-3 bg-gray-200 rounded-b-xl border-t-2'>
// <button className='capitalize hover:underline'>archive order</button>
// </div>