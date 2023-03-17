import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MainPage.css';


const MainPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="wave">
        {/* <img src="rsz_1wave.png" alt="" id='wave-pic' /> */}
        <div className="div1" style={{display:"flex"}}>
            <div className="left-div1">
            
            <h1 style={{fontSize:"3rem"}}>A new Venture to Ideas</h1>
            <p style={{fontSize:"1.5rem"}}>First streamlined and standardized platform for
evaluating and investing in new business ventures,
helping both investors and pitchers to find the best
opportunities for their needs</p>

<button id="foot"><button class="button-os" onClick={()=>{
  navigate('/SignupAndLogIn')
}}><a href="#" >Get Started</a></button></button>
        
            </div>
            <div className="right-div1">
            <img src="people-using-mobile-bank-remittance-money_74855-6617-removebg-preview.png" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage