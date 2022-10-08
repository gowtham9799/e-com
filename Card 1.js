import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
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

const product = [
  {
    product_name: "Zivame Bunny Rolls Knit Cotton Pyjama",
    image:
      "https://cdn.zivame.com/media/mimages/1663311866_trends22_des_16_09_05.jpg?t=1663311866",
    price: "$599",
    old_price: "₹499",
  },
  {
    product_name: "Zivame Bunny Rolls Knit Cotton Pyjama",
    image:
      "https://cdn.zivame.com/media/mimages/1663311866_trends22_des_16_09_05.jpg?t=1663311866",
    price: "$599",
    old_price: "₹499",
  },
  {
    product_name: "Zivame Bunny Rolls Knit Cotton Pyjama",
    image:
      "https://cdn.zivame.com/media/mimages/1663311866_trends22_des_16_09_05.jpg?t=1663311866",
    price: "$599",
    old_price: "₹499",
  },
  {
    product_name: "Zivame Bunny Rolls Knit Cotton Pyjama",
    image:
      "https://cdn.zivame.com/media/mimages/1663311866_trends22_des_16_09_05.jpg?t=1663311866",
    price: "$599",
    old_price: "₹499",
  },
  {
    product_name: "Zivame Bunny Rolls Knit Cotton Pyjama",
    image:
      "https://cdn.zivame.com/media/mimages/1663311866_trends22_des_16_09_05.jpg?t=1663311866",
    price: "$599",
    old_price: "₹499",
  },
];

function Card() {
  return (
    <div className="flex flex-wrap justify-start lg:ml-72 xl:ml-96 px-1 ">
      {product.map((pro) => (
        <div className=" w-[9rem] grow md:grow-0 md:w-[14.7rem] border overflow-y-hidden lg:w-[18rem] xl:w-[21rem] xl:h-[36rem] lg:h-[31rem] md:h-[30.5rem] shadow-md dark:bg-gray-900 mt-5 hover:scale-100 hover:shadow-lg hover:shadow-gray-500 duration-200 mx-2 lg:mx-3 ">
          <Link to={""} className="">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              autoPlaySpeed={3000}
              transitionDuration={1000}
              removeArrowOnDeviceType={["desktop","mobile","tablet","laptop"]}
              className=" "
            >
             
              <div>
                <img
                  className="px-2 py-2 object-contain"
                  src={"https://cdn.zivame.com/media/mimages/1663662019_BLUSHBLOOM_COLLECTIONBANNER_DESK.jpg?t=1663662019"}
                />
                </div>
                <div>
                <img
                  className="px-2 py-2 object-contain"
                  src={"https://m.media-amazon.com/images/I/61NK-yxJpJL._UY550_.jpg"}
                />
                </div>
                <div>
                <img
                  className="px-2 py-2 object-contain"
                  src={"https://https://i.pinimg.com/736x/a2/a4/36/a2a4365b486e5f339fea71b6c798a7a0.jpg"}
                />
                </div>
             
            </Carousel>
            </Link>
            <div className=" lg:hover:-translate-y-12 duration-1000 ease-in-out px-2 bg-primary py-4  ">
              <div className="flex justify-start     border-t-3 ">
                <p className="text-sm  text-gray-900 font-medium pb-2 pl-3">
                  {pro.product_name}{" "}
                </p>
              </div>

              <div className="text-start  pb-2 xl:pb-3  flex justify-between md:justify-start  pl-3 ">
                <del className="text-sm  text-black dark:text-white">
                  {pro.price}
                </del>
                <p className="text-red-500 pl-1 text-lg ">{pro.old_price}</p>
              </div>
            
              <div className="flex flex-wrap justify-between px-3 ">
              
              <p>Rating</p>
              <button className="flex capitalize bg-brand p-1 px-2 rounded-md text-white" ><HiOutlineShoppingCart className="w-5 h-6"/> add to cart</button>
              </div>
            
            </div>
        
        </div>
      ))}
    </div>
  );
}

export default Card;
