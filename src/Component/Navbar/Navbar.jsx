import React,{Fragment,useState} from 'react'
import {HiBars3BottomRight} from 'react-icons/hi2'

import './navbar.css'
const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    const [transitionNavbar, setTransitionNavbar]=useState(false);
    function changeBackground  (){
      if(window.scrollY>=150){
        setTransitionNavbar(true)
      }
      else{
        setTransitionNavbar(false)
      }
      
    }
   
    window.addEventListener("scroll", changeBackground);
    
  return (
    <Fragment>
       <nav className={transitionNavbar ? "navbar active":"navbar" }>
        <h1>Downtown<span>.</span></h1>
         <div className={showMenu?"menu mobile-menu":"menu"}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <div className="btn">
                <a href="#">Add Property</a>
            </div>
         </div>
         <HiBars3BottomRight className="bars" onClick={()=>setShowMenu(!showMenu)}/>
       </nav> 
    </Fragment>
  )
}

export default Navbar