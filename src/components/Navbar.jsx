import React, { useState } from 'react'
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"
import  "./Navbar.scss"
import { useNavigate,Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]= useState("home")
  return (
    <>
      <div className="navbar">
        <div className="navlogo">
            <img src={logo} alt=""  />
            <p>Styleora</p>
        </div>
        <ul className='nav-menu'>
        <li onClick={() =>{setMenu("home")}}> <Link style={{textDecoration:"none", color : "#626262"}} to="/">Home</Link>
          {menu === "home" ? <hr/>:<></>}</li>

        <li onClick={() =>{setMenu("mens")}}> <Link style= {{textDecoration:"none" , color : "#626262"}} to = "/mens">Men</Link> 
           {menu === "mens" ? <hr/>:<></>}
        </li>
        <li onClick={() =>{setMenu("womens")}}> <Link style= {{textDecoration:"none" , color : "#626262"}}  to = "/womens">Women</Link>
           {menu === "womens" ? <hr/>:<></>}</li>

        <li onClick={() =>{setMenu("kids")}}> <Link style ={{textDecoration:"none" , color : "#626262"}}  to = "/kids">Kids</Link>
           {menu === "kids" ? <hr/>:<></>}</li>
           
        </ul>
        <div className="nav-login-cart">
          

            <Link to = "/cart"><img src={cart} alt="" height='40px' /></Link>
             <div className="nav-cart-count">0</div>
        </div>
        
      </div>
      
    </>
  )
}

export default Navbar
