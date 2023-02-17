import React from "react";
import Herobanner from "./components/Herobanner";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Sideprojects from "./components/Sideprojects";




function app() {
  return (
    <div className="appclass">
      
    <Nav/>  
    <Herobanner/>
    
    <About/>
    <Skills/> 
    <Portfolio/>
    <Sideprojects/>
    <Blog/>
    <Reviews/>
    <Contact/>
    <Footer />

    </div>
  )
}
export default app;
