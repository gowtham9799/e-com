import React from 'react';
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

function Insta2() {

  return (
  <div className=' overflow-x-scroll bg-white gow flex  lg:hidden  '>
   <div className= ' mt-3 flex  grow  px-1 w-[80rem]'>
           {images.map((image, i) => (
    <div
        className={i == 0 ? 'img_wrap active' : 'img_wrap  '}
        key={i}>
        <img src={image} className='w-28 sm:w-32' alt="" />
    </div>
))}
   </div>
   </div>
  )
}

export default Insta2;