import "./App.css";
import Card from "./Card";
import Instastory from "./Instastory";
import Detail from "./Detail";
import {Routes, Route, Link } from "react-router-dom";
import Caro from "./Caro";
import Singlecaro from "./Singlecaro";
import Ex from "./Ex";
import Nav from "./Nav";
import Footer from './Footer'
import Nav1 from "./Nav1";
// import Myundeanimation1 from "./Myundeanimation1";
// import Myunde2 from "./Myunde2";
// import Myunde3 from "./Myunde3";
// import Myunde4 from "./Myunde4";
// import Myunde5 from "./Myunde5";
import Insta2 from "./Insta2";
import Design from "./Design";
import Ex1 from "./Ex1";
import Cardcaro from "./Cardcaro";
import Try from "./Try";
import Pagination from "./Pagination";
import Validation from "./Validation";

function App() {
  return (
    <div className="bg-gray-100">
             <Nav/> 
     <Routes>
     
         <Route path="/Card" element={<Card/>}/>
        <Route path="/Singlecaro" element={<Singlecaro/>}/> 
        <Route path="/Detail/:id" element={<Detail/>}/> 
      </Routes> 
       <Pagination/>
         <Footer/>   
           
         {/* <Myundeanimation1 />  */}
         {/* <Myunde2/> *
        {/* {/* <Myunde3/> */}
            {/* <Myunde4/>  */}
            {/* <Myunde5/>  */}
            {/* <Insta2/>
           {/* <Nav1/>
           {/* */}
           {/* <Ex1/>
           <Insta2/> */}
           {/* <Cardcaro/> */}
           {/* <Try/> */}
         <Validation/>
    </div>
  )
}
export default App;