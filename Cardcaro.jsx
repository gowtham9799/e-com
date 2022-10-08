import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from './images/ins1.png';
import image2 from './images/ins2.png';
import image3 from './images/ins3.png';
import image4 from './images/ins4.png';
import image5 from './images/ins5.png';
import image6 from './images/ins6.png';
import image7 from './images/ins7.png';
import image8 from './images/ins8.png';
import image9 from './images/ins9.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

function Cardcaro() {

  return (
    
    <div>
<div className=' gow hidden sm:block w- sm:w-32 h-[36rem] md:h-[42rem]  overflow-hidden  overflow-y-auto mx-6 no-scrollbar drop-shadow-xl  rounded-lg md:ml-20'>
<div >
<Carousel  infinite={true} autoPlaySpeed={5000}  keyBoardControl={true}   dotListClass="custom-dot-list-style" className="  rounded-xl border">
    <div>
    {images.map((image, i) => (
    <div
        className={i == 0 ? 'img_wrap active' : 'img_wrap  '}
        key={i}>
        <img src={image} className='w-28 sm:w-32' alt="" />
    </div>
))}
    </div>
    </Carousel>
</div>

</div>
    </div>
  )
}

export default Cardcaro