// import React from 'react';
// import { Row, Col, Container, Button, Dropdown, Carousel } from "react-bootstrap";
// import { AiFillStar } from "react-icons/ai";
// import { BsStarHalf } from "react-icons/bs";
// import { AiOutlineStar } from "react-icons/ai";
// import { AiOutlineLike } from "react-icons/ai";
// import { useState } from 'react';
// import image1 from './images/zephyr-stripe-skater-dress-white-n-blue.webp';
// import image2 from './images/zephyr-stripe-skater-dress-white-n-blue (1).webp';
// import image3 from './images/zephyr-stripe-skater-dress-white-n-blue (2).webp';
// import image4 from './images/zephyr-stripe-skater-dress-white-n-blue (3).webp';
// import image5 from './images/zephyr-stripe-skater-dress-white-n-blue.webp';
// import { useWindowScrollPositions } from './use';

// const Text = [
//     {
//         id: 1,
//         name: "first",
//         text: " Our collection of dresses in varying lengths & stylish silhouettes,from casual to dressy"
//     },
//     {
//         id: 2,
//         name: "second",
//         text: " Our collection of dresses in varying lengths & stylish silhouettes."
//     },
//     {
//         id: 3,
//         name: "third",
//         text: " Our collection of dresses in varying lengths"
//     },
// ]


// function Design() {
//     const { scrollX, scrollY } = useWindowScrollPositions()

//     const [pic, setPic] = useState(image1);
//     const [data, setData] = useState({
//         id: 1,
//         name: "first",
//         text: " Our collection of dresses in varying lengths & stylish silhouettes, from casual to dressy"
//     },)
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };







//     return (

//         <div className='' >


//             {/* <----- left hand side img---------> */}
//             <Container fluid>

//                 <Row>
//                     <Col sm={12} lg={12} className='w-[100%] h-[8rem] bg-red-400 fixed z-10'>

//                     </Col>
//                 </Row>


//                 <Row>
//                     <Col xxl={1} xl={1} lg={1} md={1} sm={1} xsm={1} className="sm:block sm:pb-[3] pt-[10rem]">

//                         <ul className='hidden sm:block'>
//                             <li className={scrollY <= 1000 ? 'no-scrollbar overflow-y-auto  w-[10%] lg:w-[10%] sm:mb-[3] md:pr-[30px] xl:pr-[30px] lg:pr-[40px] h-[37.5rem] object-contain fixed' : 'gow overflow-y-auto  w-[10%] lg:w-[10%] sm:mb-[3] md:pr-[30px] xl:pr-[30px] lg:pr-[40px] h-[37.5rem] object-contain absolute mt-[72rem] '}>
//                                 <img src={image1} alt="image1" className=' mb-2 rounded-lg' onClick={() => setPic(image1)}></img>
//                                 <img src={image2} alt="image2" className=' mb-2 rounded-lg' onClick={() => setPic(image2)}></img>
//                                 <img src={image3} alt="image3" className=' mb-2 rounded-lg' onClick={() => setPic(image3)}></img>
//                                 <img src={image4} alt="image4" className=' mb-2 rounded-lg' onClick={() => setPic(image4)}></img>
//                                 <img src={image5} alt="image5" className=' mb-2 rounded-lg' onClick={() => setPic(image5)}></img>
//                                 <img src={image1} alt="image1" className=' mb-2 rounded-lg' onClick={() => setPic(image1)} ></img>
//                                 <img src={image2} alt="image2" className=' mb-2 rounded-lg' onClick={() => setPic(image2)}></img>
//                                 <img src={image3} alt="image3" className=' mb-2 rounded-lg' onClick={() => setPic(image3)}></img>
//                             </li></ul></Col>





//                      <Col xxl={4} xl={4} lg={4} md={4} sm={4} xsm={4} className='sm:pt-[10rem]   flex object-contain justify-start '>
//                         <div>
//                             <img src={`${pic}`} alt="image2" className={scrollY <= 1000 ? "hidden sm:block md:w-64 lg:w-80 xl:w-[25rem] mb-4 rounded-2xl  fixed xl:ml-20 md:ml-5" : "hidden sm:block md:w-64 lg:w-80 xl:w-[25rem] mb-4 mt-[72rem] rounded-2xl xl:ml-20 md:ml-5"}></img>

//                         </div>

//                         <div className='md:hidden relative'>
//                             <Carousel fade>
//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={image1}
//                                         alt="First slide"
//                                     />
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={image2}
//                                         alt="Second slide"
//                                     />
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={image3}
//                                         alt="Third slide"
//                                     />
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={image4}
//                                         alt="Third slide"
//                                     />
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={image5}
//                                         alt="Third slide"
//                                     />
//                                 </Carousel.Item>

//                             </Carousel>
//                         </div>



//                     </Col> 
//                     {/* <----- left hand side img---------> */}

//                     {/* <----- right hand side component 1 ---------> */}
//                      <Col xxl={7} xl={7} lg={7} md={7} sm={7} xsm={7} className='  sm:pt-[11rem]'><div className=' w-25rem h-15rem '>
//                         Scroll position is ({scrollX}, {scrollY})
//                         <h1 className='text-2xl' > Zephyr Stripe Skater Dress- White N Blue</h1>
//                         <h1 className='text-3xl text-red-400' > ₹1276₹ <span className='text-black'>1595</span>(20% OFF)</h1>
//                         <p> inclusive of all taxes</p><div className='flex'><AiFillStar className='mt-0.5' />
//                             <h6 className='ml-2'>4.6 <span className='text-red-400 '>(7 reviews)</span></h6>
//                             </div> <hr></hr></div> 
//                         {/* <----- right hand side component 2 ---------> */}
//                         <div className=' overflow-y-auto h-[20] bg-grey-200  '>
//                             <h1 className='text-2xl'> PRODUCT FEATURES</h1>
//                             <div className='mt-5 border-black'>

//                                 <ul className='pl-0'>
//                                     {Text.map((item) => {
//                                         return (
//                                             <Button className=' w-[65px] ml-[20px] btn btn-danger' alt="data1" onClick={() => setData({ id: item.id, name: item.name, text: item.text })}>{item.name}</Button>
//                                         )
//                                     })}

//                                 </ul>
//                                 <div className='w-[100%] h-[150px] bg-gray-200' key={data.id}>
//                                     <p className='pt-[20px] pl-[20px]' alt="data1">{data.text}</p>
//                                     <h6 className='pl-[20px] text-red-400'>See Matching Products</h6>

//                                 </div></div>
//                             <hr />
//                             {/* <----- right hand side component 3 ---------> */}
//                             <div> <h6 className='mt-[20px] '> SIZES</h6>
//                                 <h6 className='mt-[20px] float-right mr-16'> Not Sure About Your Size ? <button className='text-red-400'>Size Chart</button></h6>
//                             </div>

//                             <div><ul className=''>
//                                 <button className='shadow text-black hover:bg-red-400 rounded-full w-10 h-10 mr-5 my-1 md:border-r-[21px] md:border-l-[17px] '>S</button>
//                                 <button className='shadow text-black hover:bg-red-400 rounded-full w-10 h-10 mr-5 my-1 md:border-r-[21px] md:border-l-[17px]'>M</button>
//                                 <button className='shadow text-black hover:bg-red-400 rounded-full w-10 h-10 mr-5 my-1 md:border-r-[21px] md:border-l-[17px]'>L</button>

//                                 <h6 className='mt-[20px] ml-[10px]  text-red-400 md:flex'> +2 Sizes Out Of Stock</h6>
//                             </ul></div>

//                             <div> <h6 className='mt-[20px] '> Colors</h6>
//                                 <h6 className='mt-[20px] float-right mr-12 md:flex'> Not Sure About Your colors ? <button className='text-red-400'>colors Chart</button></h6>
//                             </div>

//                             <div><ul className=''>
//                                 <button className='shadow text-black hover:bg-red-400 rounded-full w-10 h-10 mr-5 pt-1 md:border-r-[21px] md:border-l-[17px]'></button>
//                                 <button className='shadow text-black hover:bg-red-400 rounded-full w-10 h-10 mr-5 pt-1 md:border-r-[21px] md:border-l-[17px]'></button>
//                                 <button className='shadow text-black hover:bg-red-400 rounded-full w-10 h-10 mr-5 pt-1 md:border-r-[21px] md:border-l-[17px]'></button>

//                                 <h6 className='c-3-12 mt-[20px] ml-[10px] text-red-400'> +2 colors Out Of Stock</h6>
//                             </ul><button className='c-3-13 btn btn-danger'> ADD TO CART</button></div> <hr></hr>
//                             {/* <----- right hand side component 4 ---------> */}
//                             <div className='c-3-14'>
//                                 <h3 className='c-3-14'>DESCRIPTION</h3><h6 className='c-3-14'>Contains 1 piece</h6> <h3 className='c-3-15'>FABRIC:</h3>
//                                 <ul><li> Fabric: Viscose</li><li> Do Not Dry Clean</li><li>Do Not Bleach</li><li> Wash Dark Colours Separately</li>
//                                     <li> Machine Wash Allowed <span className='text-red-400'>less</span></li></ul></div><hr></hr>
//                             {/* <----- right hand side component 5 left side (rating)---------> */}
//                             <div><Col xxl={5} xl={5} lg={5} md={5} sm={5} xsm={5} className="rating1 w-[100%] h-[400px]">
//                                 <h4>Review</h4><h2> 4.6 (7 Reviews)</h2>
//                                 <ul className='flex pl-0'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></ul>

//                                 <div className='flex'>  <p classname="text-orange-400">5 Stars</p>
//                                     <div className="w-[75%] h-4 mt-1 ml-5 bg-gray-200 rounded-full dark:bg-gray-700">
//                                         <div className="bg-red-400 text-xs font-medium text-center p-0.5 leading-none rounded-full w-[80%]"> 80%</div></div></div>

//                                 <div className='flex'>  <p classname="text-orange-400">4 Stars</p>
//                                     <div className="w-[75%] h-4 mt-1 ml-5 bg-gray-200 rounded-full dark:bg-gray-700">
//                                         <div className="bg-red-400 text-xs font-medium text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div></div></div>

//                                 <div className='flex'>  <p classname="text-orange-400">3 Stars</p>
//                                     <div className="w-[75%] h-4 mt-1 ml-5 bg-gray-200 rounded-full dark:bg-gray-700">
//                                         <div className="bg-red-400 text-xs font-medium text-center p-0.5 leading-none rounded-full  w-[50%]"> 50%</div></div></div>

//                                 <div className='flex'>  <p classname="text-orange-400">2 Stars</p>
//                                     <div className="w-[75%] h-4 mt-1 ml-5 bg-gray-200 rounded-full dark:bg-gray-700">
//                                         <div className="bg-red-400 text-xs font-medium text-center p-0.5 leading-none rounded-full  w-[40%]"> 40%</div></div></div>

//                                 <div className='flex'>  <p classname="text-orange-400">1 Stars</p>
//                                     <div className="w-[70%] h-4 mt-1 ml-5 bg-gray-200 rounded-full dark:bg-gray-700">
//                                         <div className="bg-red-400 text-xs font-medium text-center p-0.5 leading-none rounded-full  w-[30%]"> 30%</div></div></div>

//                                 <h6 className='mt-5 sm:mt-20'>REVIEW THIS PRODUCT</h6><p >your rating :</p>
//                                 <ul className='flex pl-0 mt-1'><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
//                                     <p className='text-red-400 ml-10 mb-4'>Write a review</p></ul></Col>
//                                 {/* <----- right hand side component 5 rhs(dropdowns) ---------> */}
//                                 <Col xxl={7} xl={7} lg={7} md={7} sm={7} xsm={7} className="scrollbar [100%] h-[25rem] pr-[2rem] overflow-y-auto float-right  ">

//                                     <Dropdown ><Dropdown.Toggle variant="Light" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
//                                         <Dropdown.Menu><Dropdown.Item href="#/action-1">See All Reviews</Dropdown.Item><Dropdown.Item href="#/action-2">5 Star Reviews</Dropdown.Item>
//                                             <Dropdown.Item href="#/action-3">4 Star Reviews</Dropdown.Item><Dropdown.Item href="#/action-3">3 Star Reviews</Dropdown.Item>
//                                             <Dropdown.Item href="#/action-3">2 Star Reviews</Dropdown.Item><Dropdown.Item href="#/action-3">1 Star Reviews</Dropdown.Item>
//                                         </Dropdown.Menu></Dropdown>

//                                     <ul className='flex pl-0 mt-1'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></ul>
//                                     <p className='review2'>arpitha chinnapelli4 month agoNice dress I have ordered this product by using GrabOn coupon got discount on this</p>
//                                     <button className='mr-[10px] float-right btn btn-danger w-10 h-10'><AiOutlineLike /></button>
//                                     <button><i classname="fa fa-home"></i></button>
//                                     <h5 className='mr-[10px] float-right mt-2'>Helpful ?</h5>
//                                     <hr className='flex w-100 mt-5'></hr>

//                                     <ul className='flex pl-0 mt-1'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></ul>
//                                     <p className='review2'>arpitha chinnapelli4 month agoNice dress I have ordered this product by using GrabOn coupon got discount on this</p>
//                                     <button className='mr-[10px] float-right btn btn-danger w-10 h-10'><AiOutlineLike /></button>
//                                     <button><i classname="fa fa-home"></i></button>
//                                     <h5 className='mr-[10px] float-right mt-2'>Helpful ?</h5>
//                                     <hr className='flex w-100 mt-5'></hr>

//                                     <ul className='flex pl-0 mt-1'><AiFillStar /><AiFillStar /><AiFillStar /></ul>
//                                     <p className='review2'>arpitha chinnapelli4 month agoNice dress I have ordered this product by using GrabOn coupon got discount on this</p>
//                                     <button className='mr-[10px] float-right btn btn-danger w-10 h-10'><AiOutlineLike /></button>
//                                     <button><i classname="fa fa-home"></i></button>
//                                     <h5 className='mr-[10px] float-right mt-2'>Helpful ?</h5>
//                                     <hr className='flex w-100 mt-5'></hr>
//                                 </Col><hr></hr>
//                                 {/* <----- right hand side component 6 ---------> */}
//                                 <Col xxl={12} xl={12} lg={12} md={12} sm={12} xsm={12} className="h-20">
//                                     <h5>CHECK DELIVERY TIME</h5>
//                                     <input className=' h-10 border-4 flex ' placeholder='Pincode' />
//                                     <h5 className='pt-3'> Dispatch in 24 hours</h5>
//                                 </Col>
//                                 <Col xxl={12} xl={12} lg={12} md={12} sm={12} xsm={12} className="h-20">
//                                     <h5 className='mt-10'>SELLER INFORMATION</h5>
//                                     <h5>Generic Name : <span className='text-red-400'> Apparel Casual Wovens Apparel</span></h5>
//                                     <h5>Sold By : <span className='text-red-400'>Select size to get seller name </span> </h5>
//                                 </Col><hr/>
//                             </div>


//                         </div>


//                     </Col></Row>

//                 <Row className='bg-gray-500'>
//                     <Col>
//                         <h5 className='mt-10'>SELLER INFORMATION</h5>
//                         <h5>Generic Name : <span className='text-red-400'> Apparel Casual Wovens Apparel</span></h5>
//                         <h5>Sold By : <span className='text-red-400'>Select size to get seller name </span> </h5>
//                     </Col>
                    
//                 </Row>

               



//             </Container></div>)
// }


// export default Design




