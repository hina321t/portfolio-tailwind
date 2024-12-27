import React from 'react'
import { TiThMenu } from "react-icons/ti";




const Navbar = () => {
    return(
        
<div>
        <header className="flex  justify-between mr-20 sticky top-0 items-center">
        {/* Logo */}
  

        <img src="/HT.png" alt="logo" className="h-15  w-20 rounded-lg mt-3 hover:text-blue-600 ml-20 " />    
        {/* navigation bar */}
        <ul className="flex space-x-8  font-semibold">
          <li id="home" className="menuLink  hover:text-blue-500"><a href="Hero">Home</a></li>
         <li id="about"className="menuLink  hover:text-blue-500"><a href="About">About</a></li> 
          <li id="projectid" className="menuLink  hover:text-blue-500"><a href="Project">Project </a></li>
          <li id="skills" className="menuLink  hover:text-blue-500"><a href="Skills">Skills</a></li>
          <li  id="contect" className="menuLink  hover:text-blue-500"><a href="Contect">Contect</a></li>
          
          
          
        
        </ul>
        <TiThMenu className="md:hidden" size={30} />

      </header>
      </div>



    )
}
export default Navbar