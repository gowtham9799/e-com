import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image2 from './images/full-2.jpg';
import image1 from './images/full-1.jpg';
import image3 from './images/full1.jpg';
import image4 from './images/full4.jpg';
import { Link } from 'react-router-dom';
import image5 from "./images/Puja1.jpg";
import image6 from "./images/puja2.jpg";

const images = [
    image5,
    image1,
    image3,
    image4,


  ];
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Singlecaro() {
  return (
    <div className='mx-5 pt-28 '>
 
 <Carousel responsive={responsive} className="z-0" autoPlay={true} autoPlaySpeed={2000} infinite={true} showDots={true} >
 {images.map((image, i) => (
  <Link to={"./Card"} className=""><div
        className={i == 0 ? 'img_wrap active ' : 'img_wrap '}
        key={i}>
        <img src={image} alt="" className='w-[105rem] h-[40rem] ml-5' />
    </div></Link>
))}
</Carousel>

<div className=' flex justify-center mt-16 overflow-hidden'>
  <img src={image6} alt="image6 " className='w-full mx-20 '></img>
</div>

<div className=' flex justify-center mt-16 overflow-hidden'>
  <img src={image5} alt="image5 " className='w-full mx-20 '></img>
</div>



    </div>
  )
}

export default Singlecaro;