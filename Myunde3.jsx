import React from 'react'
import anime from 'animejs/lib/anime.es.js'
import "./App.css";

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

function Myunde3() {
  return (
    <div className='bg-black text-center h-screen pt-72'>
          <h1 className="ml12 text-white text-bold "><span className='text-red-600  font-bold'>M</span>YUNDE</h1>
    </div>
  )
}

export default Myunde3;