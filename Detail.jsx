import React, { useEffect } from "react";

import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState, useRef } from "react";
import image1 from "./images/boxer.jpg";
import image2 from "./images/bluet.jpg";
import image3 from "./images/bnw.jpg";
import image4 from "./images/smi.jpg";
import image5 from "./images/zephyr-stripe-skater-dress-white-n-blue.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactImageMagnify from "react-image-magnify";
import ReactTooltip from "react-tooltip";
// import { text } from "@fortawesome/fontawesome-svg-core";

const images = [image1, image2, image3, image4, image5];

const Stars = [
  {
    star_id: 1,
    name: "1star",
    star_count: 1,
    text: "1",
  },
  {
    star_id: 2,
    name: "1star",
    star_count: 2,
    text: "useEffectis defined but never usedno-unused-vars",
  },
  {
    star_id: 3,
    name: "1star",
    star_count: 3,
    text: "3",
  },
  {
    star_id: 4,
    name: "1star",
    star_count: 4,
    text: "4",
  },
  {
    star_id: 5,
    name: "1star",
    star_count: 5,
    text: "5",
  },
  {
    star_id: 2,
    name: "1star",
    star_count: 2,
    text: "2",
  },
  {
    star_id: 3,
    name: "1star",
    star_count: 3,
    text: "3",
  },
  {
    star_id: 4,
    name: "1star",
    star_count: 4,
    text: "4",
  },
  {
    star_id: 5,
    name: "1star",
    star_count: 5,
    text: "5",
  },
  {
    star_id: 2,
    name: "1star",
    star_count: 2,
    text: "2",
  },
  {
    star_id: 3,
    name: "1star",
    star_count: 3,
    text: "3",
  },
  {
    star_id: 4,
    name: "1star",
    star_count: 4,
    text: "4",
  },
  {
    star_id: 5,
    name: "1star",
    star_count: 5,
    text: "5",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Text = [
  {
    id: 1,
    name: "first",
    text: " Our collection of dresses in varying lengths & stylish silhouettes,from casual to dressy",
  },
  {
    id: 2,
    name: "second",
    text: " Our collection of dresses in varying lengths & stylish silhouettes.",
  },

  {
    id: 2,
    name: "second",
    text: " Our collection of dresses in varying lengths & stylish silhouettes.",
  },
];

function Detail() {
  const [text, setText] = useState({ set2: false });

  const [starCount, setStarCount] = useState(5);

  const Star = ({ starId, marked }) => {
    return (
      <span
        star-id={starId}
        role="button"
        style={{ color: "black", cursor: "pointer", fontSize: "40px" }}
      >
        {marked ? "\u2605" : "\u2606"}
      </span>
    );
  };

  // Create an array of 5: Array.from({length: 5}, (v,i) => i)

  // Manages on Hover selection of a star
  const [selection, setSelection] = React.useState(0);

  // Manages rating selection
  const [rating, setRating] = React.useState(0);

  const hoverOver = (event) => {
    let starId = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      starId = event.target.getAttribute("star-id");
    }
    setSelection(starId);
  };

  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const [data, setData] = useState({
    id: 1,
    name: "first",
    text: " Our collection of dresses in varying lengths & stylish silhouettes, from casual to dressy",
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const filtered = Stars.filter((star) => {
    return star.star_count === Number(starCount);
  });
  console.log(filtered);

  return (
    <div className="capitalize ">
      <div className="w-full h-24 bg-cyan-300"></div>

      <div className="flex flex-wrap lg:flex-nowrap mb-5 bg-primary">
        <div className="sm:flex mt-3">
          <div className="hidden lg:block w- sm:w-32 h-[36rem] md:h-[42rem] xl:mt-3 overflow-hidden  overflow-y-auto mx-6 no-scrollbar drop-shadow-xl  border-y-[6px] border-cyan-600 rounded-lg md:ml-20">
            <div className=" ">
              <div className="left_1">
                {images.map((image, i) => (
                  <div
                    className={i == 0 ? "img_wrap active" : "img_wrap"}
                    key={i}
                    onMouseOver={() => hoverHandler(image, i)}
                    ref={addRefs}
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="  md:w-[30rem] md:h-[42rem]  rounded-xl shadow-gray-400 px-3 hidden lg:block xl:mt-3">
            <ReactImageMagnify
              className="absolute z-50 "
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  src: img,
                  width: 1000,
                  height: 1000,
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "100%",
                },
              }}
            />
          </div>
        </div>
       

        <div className="  h-[55rem]  overflow-y-auto px-4 w-full   mt-3 xl:ml-5 bg-primary md:mt-8 lg:mt-5 no-scrollbar">
          <div className="lg:hidden ">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              dotListClass="custom-dot-list-style"
              className="  rounded-xl border"
            >
              <div>
                <img src={image1} alt="sdfa" className="w-[50rem] " />
              </div>
              <div>
                <img src={image2} alt="sdfa" className="w-[50rem]" />
              </div>
              <div>
                <img src={image3} alt="sdfa" className="w-[50rem]" />
              </div>
              <div>
                <img src={image4} alt="sdfa" className="w-[50rem]" />
              </div>
              <div>
                <img src={image5} alt="sdfa" className="w-[50rem]" />
              </div>
            </Carousel>
          </div>
          <div className="xl:ml-24">
            <div className="">
              <div className="z-0 bg-primary py-1 relative lg:position-none mt-[-30px] rounded-t-3xl ">
                <h1 className="text-2xl xl:text-4xl font-medium my-3 ml-4 lg:ml-0 md:mt-6 ">
                  {" "}
                  Zephyr Stripe Skater Dress- White N Blue
                </h1>
              </div>
              <div>
                <h1 className="text-2xl text-red-700 mt-2 font-medium">
                  {" "}
                  ₹1276 <span className="text-black text-lg "> ₹1595 </span>(20%
                  OFF)
                </h1>
              </div>
              <div className=" font-medium text-lg">
                <p> inclusive of all taxes</p>
              </div>
              <div className="flex text-xl mt-3">
                <AiFillStar className="mt-0.5 text-2xl" />
                <h6 className="ml-2">
                  4.6 <span className="text-green-700 ">(7 reviews)</span>
                </h6>
              </div>
            </div>
            <hr className="border-gray-400" />
            <div className="w-full  ">
              <div className="mt-2">
                <h1 className="text-xl font-medium"> PRODUCT FEATURES</h1>
              </div>
              <div className="mt-3 bg-white xl:w-[50rem] rounded-xl">
                <ul className="pl-0">
                  {Text.map((item) => {
                    return (
                      <button
                        className=" text-white ml-5 capitalize rounded-md bg-brand  mt-3 w-24 "
                        alt="data1"
                        onClick={() =>
                          setData({
                            id: item.id,
                            name: item.name,
                            text: item.text,
                          })
                        }
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </ul>
                <div
                  className="w-[100%] h-[150px] bg-white rounded-xl mb-3"
                  key={data.id}
                >
                  <p className="pt-[20px] pl-[20px]" alt="data1">
                    {data.text}
                  </p>
                  <h6 className="pl-[20px] text-red-700">
                    See Matching Products
                  </h6>
                </div>
              </div>
            </div>
            <hr />

            <div className=" border-x-[0.8rem] px-2 pb-4">
              <div>
                <h6 className="mt-[20px] text-xl font-medium"> SIZES</h6>
              </div>
              <div className="flex flex-wrap justify-between ">
                <div className="flex w-72 xl:w-96 justify-evenly mt-4 font-medium ">
                  <button className=" text-black  w-12 h-12  bg-gray-200 rounded-full shadow-md shadow-gray-400 hover:scale-110">
                    S
                  </button>
                  <button className=" text-black  w-12 h-12  bg-gray-200 rounded-full shadow-md shadow-gray-400 hover:scale-110">
                    M
                  </button>
                  <button className=" text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400 hover:scale-110">
                    L
                  </button>
                  <button className=" text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400 hover:scale-110">
                    XL
                  </button>
                  <button className=" text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400 hover:scale-110">
                    XXL
                  </button>
                </div>
                <div className="mt-5 text-lg">
                  {" "}
                  Not Sure About Your Size ?{" "}
                  <button className="text-green-700 font-medium">
                    Size Chart
                  </button>
                  <h6 className="mt-[20px]  text-red-700 text-lg font-medium ">
                    {" "}
                    +2 Sizes Out Of Stock
                  </h6>
                </div>
              </div>

              <div>
                <h6 className="mt-[20px] xl:mt-2  text-xl font-medium">
                  {" "}
                  Colors
                </h6>
              </div>
              <div className="flex flex-wrap justify-between  ">
                <div className="flex w-72 xl:w-96 justify-evenly mt-4">
                  <button className=" text-black  w-12 h-12 bg-white rounded-full shadow-md shadow-gray-400 border border-black hover:scale-110"></button>
                  <button className=" text-black  w-12 h-12 bg-blue-700 rounded-full shadow-md shadow-gray-400 border border-black hover:scale-110"></button>
                  <button className=" text-black  w-12 h-12 bg-green-800 rounded-full shadow-md shadow-gray-400 border border-black hover:scale-110"></button>
                  <button className=" text-black  w-12 h-12 bg-black rounded-full shadow-md shadow-gray-400 border border-black hover:scale-110"></button>
                  <button className=" text-black  w-12 h-12 bg-red-700 rounded-full shadow-md shadow-gray-400 border border-black hover:scale-110"></button>
                </div>
                <div className="mt-5 text-lg">
                  {" "}
                  Not Sure About Your Size ?{" "}
                  <button className="text-green-700 font-medium">
                    Size Chart
                  </button>
                  <h6 className="mt-[20px] xl:mt-2  text-red-700 text-lg font-medium">
                    {" "}
                    +2 Sizes Out Of Stock
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start ">
              <button className="bg-blue-300   px-3 py-2 rounded-l-lg my-5 font-medium text-white hover:scale-105">
                <IoIosHeartEmpty className="w-7 h-7" />
              </button>
              <button className="bg-brand   w-60 py-2  my-5 rounded-r-lg font-medium text-white hover:scale-105">
                {" "}
                ADD TO CART
              </button>
            </div>
            <hr className="border-gray-400" />

            <div className="my-4 font-normal ">
              <div>
                <h3 className="mt-3 font-medium text-xl">DESCRIPTION</h3>
              </div>
              <div>
                <h6 className="mt-3">Contains 1 piece</h6>
              </div>
              <div>
                <h3 className="my-3 font-medium text-xl ">FABRIC:</h3>
              </div>
              <div>
                <li> Fabric: Viscose</li>
                <li> Do Not Dry Clean</li>
                <li>Do Not Bleach</li>
                <li> Wash Dark Colours Separately</li>
                <li> Machine Wash Allowed </li>
              </div>
            </div>
            <hr className="border-gray-400" />

            <div className="flex flex-wrap justify-between ">
              <div>
                <div className="text-xl">
                  <p className="text-xl font-medium my-2 uppercase">Review</p>
                  <h2> 4.6 (7 Reviews)</h2>
                  <div className="flex my-3 text-2xl">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </div>

                  <div className="flex">
                    <div>
                      <p className="mt-1">5 Stars</p>
                    </div>
                    <div className="xl:w-64 w-52 h-6 my-3 xl:ml-4 ml-2 bg-gray-200 rounded-full dark:bg-gray-700 text-white">
                      <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[80%]">
                        {" "}
                        80%
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <p className="mt-1">4 Stars</p>
                    </div>
                    <div className="xl:w-64 w-52 h-6 my-3 xl:ml-4 ml-2 bg-gray-200 rounded-full  text-white">
                      <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[60%]">
                        {" "}
                        60%
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <p className="mt-1">3 Stars</p>
                    </div>
                    <div className="xl:w-64 w-52 h-6 my-3 xl:ml-4 ml-2 bg-gray-200 rounded-full  text-white">
                      <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[40%]">
                        {" "}
                        40%
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <p className="mt-1">2 Stars</p>
                    </div>
                    <div className="xl:w-64 w-52 h-6 my-3 xl:ml-4 ml-2 bg-gray-200 rounded-full text-white">
                      <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[30%]">
                        {" "}
                        30%
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <p className="mt-1">1 Stars</p>
                    </div>
                    <div className="xl:w-64 w-52 h-6 my-3 xl:ml-4 ml-2 bg-gray-200 rounded-full text-white">
                      <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[20%]">
                        {" "}
                        20%
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className=" text-lg font-medium mt-5">
                      REVIEW THIS PRODUCT
                    </h5>
                  </div>
                  <div>
                    <h6 className="font-medium">your rating :</h6>
                  </div>

                  <div>
                    <div className="flex flex-wrap pl-0   my-3 ">
                      <div
                        onMouseOver={hoverOver}
                        onMouseOut={() => hoverOver(null)}
                        onClick={(event) =>
                          setRating(event.target.getAttribute("star-id"))
                        }
                      >
                        {Array.from({ length: 5 }, (v, i) => (
                          <Star
                            starId={i + 1}
                            marked={selection ? selection > i : rating > i}
                          />
                        ))}
                      </div>

                      <button
                        className="text-green-700    ml-4  text-lg capitalize font-medium flex hover:underline"
                        onClick={() => setText({ ...text, set2: !text.set2 })}
                      >
                        Write a review
                      </button>
                    </div>
                    {text.set2 && (
                      <div>
                        <textarea className="w-full h-28 active:border-black focus:border-black "></textarea>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="">
                <div className="my-2 lg:my-4 ">
                  <select
                    id="countries"
                    className=" w-72  ml-2 border-2 border-zinc-300 bg-gray-200 rounded-md   focus:ring-black focus:border-black "
                    onChange={(e) => setStarCount(e.target.value)}
                  >
                    <option selected="">Review star rating</option>

                    <option value={1}>1-star</option>
                    <option value={2}>2-star</option>
                    <option value={3}>3-star</option>
                    <option value={4}>4-star</option>
                    <option value={5}>5-star</option>
                  </select>
                </div>

                <div className=" h-[20rem]  overflow-y-auto  xl:w-[42rem] px-2 md:w-[42rem] lg:w-full">
                  {filtered.map((star) => {
                    return (
                      <>
                        <div className="my-6">
                          <div className="flex pl-0 mt-3 text-xl my-3"></div>
                          <div>
                            <h6 className="review2">{star.star_count}</h6>
                          </div>
                          <p>{star.text}</p>
                        </div>
                        <div className="flex justify-end mb-5">
                          <h5 className="  mt-2 font-medium">Helpful ?</h5>
                          <button className="  bg-brand text-white ml-2 w-10 h-10 rounded-md shadow-md shadow-gray-600">
                            <AiOutlineLike className=" w-5 h-5 ml-3 " />
                          </button>
                        </div>
                        <hr className="border-gray-400" />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr />

            <div>
              <div className="my-4">
                <h5 className="text-lg font-medium my-4">
                  CHECK DELIVERY TIME
                </h5>
                <input
                  className=" h-10 border-2 flex  border-gray-400 pl-2 rounded-lg w-72"
                  placeholder="Pincode"
                />
                <h5 className="pt-3 font-medium"> Dispatch in 24 hours</h5>
                <h5 className="mt-10 text-lg font-medium my-2">
                  SELLER INFORMATION
                </h5>
                <h5 className="font-medium my-2">
                  Generic Name :{" "}
                  <span className="text-green-700">
                    {" "}
                    Apparel Casual Wovens Apparel
                  </span>
                </h5>
                <h5 className="font-medium">
                  Sold By :{" "}
                  <span className="text-green-700">
                    Select size to get seller name{" "}
                  </span>{" "}
                </h5>
              </div>
            </div>
            <hr className="border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
