import React from 'react'
import anime from 'animejs/lib/anime.es.js'
import "./App.css";

function Myundeanimation1() {

 
    anime.timeline({loop:true})
    .add({
      
      targets: '.ml5 .line',
      opacity: [0.5,1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700,
      targets: '.duration-demo .el',
      translateX: 250,
    }).add({
      targets: '.ml5 .line',
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
      
    }).add({
      targets: '.ml5 .ampersand',
      opacity: [0,1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
      
      

    }).add({
      targets: '.ml5 .letters-left',
      opacity: [0,1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
      
    }).add({
      targets: '.ml5 .letters-right',
      opacity: [0,1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
      
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 500,
      easing: "easeOutExpo",
      delay:700,
      targets: '.duration-demo .el',
      translateX: 250,
    });
   


    return (
<div className='text-center bg-black'>
      <h1 className="ml5 ">
        <div className="text-wrapper">
          <p className="line line1 text-yellow-300" />
        <div className='flex'>
          <p className="letters letters-left   text-green-600 font-medium"> <span className='text-red-600 font-bold'>M</span>YUNDE</p>
        
          {/* <span className="letters ampersand">&amp;</span> */}
          <p className="letters letters-right text-yellow-300 font-medium">.COM</p>
       </div>
          <p className="line line2 text-yellow-300" />
        </div>
      </h1>
    
  
    </div>
  )
}

export default Myundeanimation1;