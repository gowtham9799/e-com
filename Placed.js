import React from 'react'
import {MdVerified} from 'react-icons/md'
import {Link} from 'react-router-dom'


function Placed() {
  return (
    <div className='px-4 flex justify-center mt-32 '>
   


<div className='divide-y-2 border-2 bg-primary w-full lg:w-[60rem] divide-dotted divide-gray-300 px-5 shadow-xl  rounded-xl shadow-gray-400'>

<div className='my-2 flex flex-wrap justify-between'> 
 <div><p className='text-2xl flex text-green-700 capitalize font-medium drop-shadow-xl'><MdVerified className='mt-1.5 mr-1'/> order placed, thank you</p>
<p className='text-lg flex capitalize  font-normal sm:ml-7'>confirmation will be sent to your email !!</p></div>

<div>

<p className='text-xl flex text-green-700 capitalize font-medium drop-shadow-xl'>day/month/year</p>
<p  className='text-lg flex capitalize  font-normal '>delivery date</p></div>
</div>


<p className=' capitalize my-2'>shipping to<span className='text-lg font-medium'> someone</span>  , address</p>






<div className='py-3 '>

<Link to={""} className='text-lg  text-red-700 capitalize font-medium drop-shadow-xl'> review or edit your recent order</Link>

</div>

</div>

    </div>
  )
}

export default Placed