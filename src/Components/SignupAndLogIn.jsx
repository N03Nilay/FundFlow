import React from 'react'
import {useNavigate } from 'react-router-dom'


const SignupAndLogIn = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="getting-started-body">
            <div className="left" style={{marginTop:"-3rem"}}>
                <p style={{fontSize:"250%"}}>For StartUps</p>
                <img src="frame_0_delay-0.01s-removebg-preview.png" style={{marginTop:"-1rem"}} alt="" height="300rem" width="600rem" />
                <p style={{fontSize:"200%",marginTop:"-0.5rem",paddingLeft:"0.9rem",paddingRight:"0.7rem"}}>
                Join our community to get your Best Investor around the Globe
            </p>
            <button className='btn-ingetstarted' onClick={() => {
                navigate("/CreateStartUp")
            }}>Create</button>
            <p style={{fontSize:"130%"}}>Already have an account , <a style={{textDecoration:"underline"}} onClick={() => {
                navigate("/LoginStartUp")
            }}> Log in </a></p>

            </div>
            <div className="right" style={{marginTop:"-3rem"}}>
            <p style={{fontSize:"250%"}}>For Investors</p>
            <img src="illustration-graphic-cartoon-character-of-business-transactions-free-vector-removebg-preview.png" style={{marginTop:"-1rem"}} alt="" height="300rem" width="300rem" />
  
            <p style={{fontSize:"200%",marginTop:"-0.5rem",paddingLeft:"0.9rem",paddingRight:"0.7rem"}}>
                Join our community to invest on the best StartUp ideas around the Globe 
            </p>
            
            <button className='btn-ingetstarted' onClick={() => {
                navigate("/CreateInvestor")
            }}>Create</button>
            <p style={{fontSize:"130%"}}>Already have an account , <a style={{textDecoration:"underline"}} onClick={() => {
                navigate("/LoginInvestor")
            }}> Log in </a> </p>

            </div>
        </div>

    </div>
  )
}

export default SignupAndLogIn