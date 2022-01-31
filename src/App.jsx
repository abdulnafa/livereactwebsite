import { Routes, Route } from "react-router-dom"
import React  from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App=()=>{
return(

    <>
      <Navbar/>

<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>

  
    {/* <Home/>
    <About/>
    <Contact/> */}
    </>
);

}

export default App;