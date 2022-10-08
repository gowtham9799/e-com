import { Fragment, useState, useEffect  } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BsCart4 } from "react-icons/bs";
import { BsArrowLeft } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'

import { useFormik } from 'formik';

const products = [

]

 function Example({ orOpen, pen }) {


    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const formik = useFormik({
      initialValues: {
        email: '',
      },
    
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2))
      },
    })
    

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      // setIsSubmit(true);
    };
  
    useEffect(() => {
    
    }, [formErrors]);
    const validate = (values) => {
      const errors = {} ;
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const match =  /^[0-9]{10}$/;

      if (!values.username) {
        errors.username = "Username is required!" ;
       
      }
      else if (!regex.test(values.username)) {
        errors.username = "This is not a valid username format!";
      }


      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }



      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }


      if (!values.phonenumber) {
        match.phonenumber = "phonenumber is required";
      } 
       else if (values.phonenumber.length > 10) {
        match.phonenumber = "phonenumber cannot exceed more than 10 characters";
      }
      return errors;
    };








    const [go , setGo] = useState({
        login:true,
        loginmob:false,
        loginmai:false,
        register:false

    })
   
    return (
        <div className='mt-[-1.4rem] z-50 '>
            <button
                type="button"
                className="mt-12 float-right mr-52"
                onClick={() => orOpen()}>
                <span className="sr-only ">Close panel</span>
            </button>

            <Transition.Root show={pen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={orOpen}>

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
                 <Dialog.Panel className="pointer-events-auto w-screen sm:w-[26rem] ">
                   <div className="flex h-full flex-col     shadow-xl">
<div className="flex-1 overflow-y-auto py-6   bg- bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl 
focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<div className="flex items-start justify-between border-b-2 rounded-2xl shadow-md shadow-white " >    
<Dialog.Title className="text-lg font-medium ml-2 flex px-2 text-white  mb-2"><BsArrowLeft className='mr-3 mt-[5px] text-white '  
                                                        onClick={()=> setGo({ 
                                                        login:true,
                                                        loginmob:false,
                                                        loginmai:false,
                                                        register:false
                                                        }) }
                                                   
                                                     /> login or register
                                                   
              </Dialog.Title>
              <div className=" flex h-7 items-center">
              <button 
               type="button"
               className="-m-5 p-2 text-gray-400 hover:text-gray-500 mr-2"
               onClick={() => orOpen()}> 
              <AiOutlineClose className='w-5 h-5 text-white  opacity-50 hover:opacity-100' />
                                                            <span className="sr-only">Close panel</span>
                                                        </button>
                                                    </div>
                                                </div>

{/* <-------------------------------------------------Login register----------------------------------------------------------------------> */}
{go.login && (
    <div className='px-8 '>
    <div className='  mt-10  h-auto pb-5 rounded-xl text-center  px-8 border shadow-lg shadow-gray-300  opacity-50 hover:opacity-100'>
    <h4 className='text-center pt-[10px] text-lg text-white'>Login With</h4>
    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-4 rounded-lg' >
    <div className='flex bg-white  h-8   items-center justify-center rounded-lg'>
    <div><FcGoogle className='w-6 h-6 my-2' /></div>
    <div className=' ml-2   rounded-lg text-black' ><h6 >Google</h6></div>
    </div></button>
    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[30px] rounded-lg' 
    onClick={()=>setGo({...go, loginmob:!go.loginmob ,login:!go.login})}>
    <div className='flex bg-white  h-8   items-center justify-center rounded-lg'>
    <div><BiPhoneCall className='w-6 h-6 mb-1' /></div>
    <div className='bg-gray-50 ml-2   rounded-lg text-black'><h6 >Login using mobile number</h6></div>
    </div></button>
    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[30px] rounded-lg'
     onClick={()=>setGo({...go, loginmai:!go.loginmai,login:!go.login})}>
    <div className='flex bg-white  h-8   items-center justify-center rounded-lg'>
    <div><GrMail className='w-6 h-6 mb-1' /></div>
    <div className='bg-gray-50 ml-2  rounded-lg text-black'><h6 >Login using mail</h6></div>
    </div></button>
    </div>
    <div className='flex mt-5'>
                                               
    <h5 className='pt-[25px] pl-[25px] text-lg text-white'>Don't have an account? 
    <button onClick={()=>setGo({...go, register:!go.register ,login:!go.login})}><span className='text-red-400 text-xl pl-5'>Register</span></button></h5>
    
                                                </div>
                                                
                                               </div> 
                                                )}
{/* <-------------------------------------------------Login mobile number----------------------------------------------------------------------> */}
{go.loginmob && (
    <div>    
         <div className='shadow-md mt-10  h-auto pb-5 rounded-lg text-center border border-white shadow-white-lg px-8 opacity-50 hover:opacity-100 mx-4'>
         <form onSubmit={handleSubmit}>
         <div className="ui divider"></div>
        <div className="ui form">
                      <h4 className='text-center pt-[10px] pb-5 text-xl text-white'>Login Using Mobile Number</h4>


                    <div>
                    <label className=' text-start pt-2 mr-48 text-white'>User Name</label>
                    <input type="text"
                     name="username"
                     placeholder="ex:john"
                     value={formValues.username}
                     onChange={handleChange} 
                     className="pl-3 w-[85%] h-[30px]  focus:outline-none border-b-2 rounded-lg border-2 border-yellow-400" >                       
                    </input>
                    <p className=''>{formErrors.username}</p>
                    </div>

<div>
            <label className=' text-start pt-3  text-white mr-40'> Phone Number</label>
            <input type="text"  
             placeholder='ex:6380355874'
             name="phonenumber"         
             value={formValues.phonenumber}
             onChange={handleChange} 
             className="pl-2 w-[85%] h-[30px]  focus:outline-none border-2 border-yellow-400  rounded-lg" ></input>
             <p>{formErrors.phonenumber}</p>
             </div>
             
            {/* <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div> */}
                    
                    
                    
                    <button
             className='text-center bg-red-400 w-[30%] text-black h-[25px] mt-[20px] rounded-2xl fluid ui button blue'> LOG IN
                    </button>
                    </div>
        </form>

                <h6 className='text-center mt-[20px] text-white'> (or)</h6>
                 <button className=' w-[85%] shadow-sm border border-slate-300  mt-[10px] '>
                <div className='flex bg-white h-8   items-center justify-center '>
                 <div><FcGoogle className='w-6 h-6 mb-1' /></div>
              <div className='bg-gray-50    rounded-lg'><h6 className='text-black'>Google</h6></div>
                 </div></button>
                 <button className=' w-[85%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[20px] ' 
                  onClick={()=>setGo({...go, loginmai:!go.loginmai,loginmob:!go.loginmob})}>
                <div className='flex bg-white  h-8   items-center justify-center'>
                 <div><GrMail className='w-6 h-6' /></div>
             <div className='bg-gray-50 ml-2   rounded-lg'><h6 className='text-black'>Login using mail</h6></div>
             </div></button>
                                                </div> 
                                                </div> 
                                                )}




{/* /* <-------------------------------------------------Login mail---------------------------------------------------------------------->  */}
{go.loginmai  && (
    <div>      
    <div className='mt-10  h-auto pb-5 rounded-lg text-center border border-white shadow-white-lg  opacity-60 hover:opacity-100 px-8 mx-6'>
    
    <form onSubmit={handleSubmit}>
         <div className="ui divider"></div>
        <div className="ui form">                                       
    <h4 className='text-center pt-[10px] text-xl text-white'>Login Using Mail</h4>

    <div>
    <div>
    <label className=' text-start mr-56  text-white'>email</label>
    </div>
                   
                    <input type="text"
                     name="email"
                     placeholder="ex:john"
                     value={formValues.email}
                     onChange={handleChange} 
                     className="pl-3 w-[85%] h-[30px]   focus:outline-none border-2 border-yellow-400  rounded-lg" >                       
                    </input>
                    <p>{formErrors.email}</p>
                    </div>

                    <div>
                    <label className=' text-start pt-2 mr-48 text-white'>password</label>
                    <input type="text"
                     name="password"
                     placeholder="ex:john"
                     value={formValues.password}
                     onChange={handleChange} 
                     className="pl-3 w-[85%] h-[30px] border-2 border-yellow-400  focus:outline-none border-b-2 rounded-lg" >                       
                    </input>
                    <p>{formErrors.password}</p>
                    </div>

     <button className='text-center bg-red-400 w-[30%] text-white h-[23px] mt-[20px]  rounded-2xl '> LOG IN</button>
    </div>
</form>

                           
         <h6 className='text-center mt-[20px] text-white'> (or)</h6>
         <h6 className='text-center mt-[10px] text-white'> Login with social account</h6>
         <button className=' w-[85%] shadow-sm border border-slate-300  mt-[10px] '>
         <div className='flex bg-white h-8   items-center justify-center '>
         <div><FcGoogle className='w-6 h-6 mb-1' /></div>
         <div className='bg-gray-50 ml-2  rounded-lg'><h6 className='text-black' >Google</h6></div>
         </div></button>
         <button className=' w-[85%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[20px]'
          onClick={()=>setGo({...go, loginmob:!go.loginmob ,loginmai:!go.loginmai})}>
         <div className='flex bg-white  h-8   items-center justify-center'>
         <div><BiPhoneCall className='w-6 h-6' /></div>
         <div className='bg-gray-50 ml-2   rounded-lg'><h6 className='text-black'>Login using mobile number</h6></div>
        </div></button>
            </div>
          </div> 
         )}
{/* <-------------------------------------------------register form----------------------------------------------------------------------> */}
{go.register && (
    <div className=''>      
    <div className=' mt-10  h-auto pb-5 rounded-lg text-center border border-white shadow-white-lg  opacity-60 hover:opacity-100 px-8 mx-6'>
    <h4 className='text-center pt-[10px] text-xl text-white'>Register with</h4>
    <button className=' w-[90%] shadow-sm border border-slate-300  mt-[10px] '>
    <div className='flex bg-white h-8   items-center justify-center '>
    <div><FcGoogle className='w-6 h-6 mb-1' /></div>
    <div className='bg-gray-50 ml-2 rounded-lg'><h6 className='text-black'>Google</h6></div>
    </div></button> 
    <h6 className='text-center mt-[20px] text-white'> (or)</h6>

    <form onSubmit={handleSubmit}>
         <div className="ui divider"></div>
        <div className="ui form"> 
            <label className=' text-start pt-2 pl-5 mr-48 text-white'>User Name</label>
              <div> 
              <input
              type="text"
              name="username"
              placeholder="ex:john"
              value={formValues.username}
              onChange={handleChange}
              className=" w-[90%]  focus:outline-none border-2 border-yellow-400  rounded-full pl-2"         
              />
              <p>{formErrors.username}</p>
              </div>
    
    
    <label className=' text-start pt-3 pl-5 text-white mr-40'> Phone Number</label>
    <input type="tel"   placeholder="ex:6380355874" className="w-[90%]  focus:outline-none border-2 border-yellow-400  rounded-full pl-2" />

    <div>
    <h6 className=' pr-5 float-right inline mr-8 mt-5 text-red-400'> OTP will be sent for verification</h6>
    </div>



<label className=' text-start mt-20 pl-5  mr-52 text-white'>Email ID</label>
                    <div>
                    <input type="text"
                     name="email"
                     placeholder="ex:john"
                     value={formValues.email}
                     onChange={handleChange} 
                     className=" w-[90%] h-[25px]  focus:outline-none border-2 border-yellow-400  rounded-full pl-2" >                   
                    </input>
                    <p>{formErrors.email}</p>
                    </div>

    <button className='text-center bg-red-400 w-[30%] text-white h-[25px] mt-3 ml-5 rounded-md'>REGISTER</button>
    
</div>
</form>


<h6 className='text-center mt-3 text-lg text-white'> By proceeding, you agree to Zivame<span className='text-white text-lg mr-2'>
<span className='text-red-400 text-lg mr-2 '>Privacy Policy</span> and</span><span className='text-red-400 text-lg mr-2'>rerms & conditions</span> </h6>
<h6 className='mt-3  text-lg text-white'>Already have an account?<span className='text-red-400 text-lg '> Login</span></h6>
    </div>
    
</div>
)}


{/* <-------------------------------------------------end----------------------------------------------------------------------> */}


                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {products.map((product) => (
                                                        <li key={product.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={product.imageSrc}
                                                                    alt={product.imageAlt}
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href={product.href}>{product.name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{product.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
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

export default Example;

