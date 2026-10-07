import React from 'react'
import "./Hero.scss"
import handicon from '../../assets/handicon.jpg';
import arrowicon from "../../assets/arrow.png";
import men from "../../assets/men.avif";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
     <h2>Best Deals ! Best Prices !</h2>
       

<div className="hero-hand-icon">
    <p>new</p>
    <img src={handicon} alt="" height="60px" />
</div>
<p>Collections</p>
<p>For everyone</p>

 <div className="hero-latest-btn">
    <div>Latest Collections</div>
    <img src={arrowicon} alt="" height= "30px"/>
 </div>
 
 </div>


        <div className="hero-right">
{/* <img src={men} alt="" height= "400px" /> */}
<p>Discount <br /> 10% off </p>
        </div>
      </div>
    </>
  )
}

export default Hero
