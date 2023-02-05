import React from 'react'
import {useNavigate } from 'react-router-dom'


const SignupAndLogIn = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="getting-started-body">
            <div className="left">
                <p style={{fontSize:"250%"}}>For StartUps</p>
                <img src="start-up-logo-removebg-preview.png" style={{marginTop:"-1rem"}} alt="" height="250rem" width="280rem" />
                <p style={{fontSize:"200%",marginTop:"-0.5rem",paddingLeft:"0.9rem",paddingRight:"0.7rem"}}>
                Join our community to get your Best Investor around the Globe
            </p>
            <button className='btn-ingetstarted' onClick={() => {
                navigate("/CreateStartUp")
            }}>Create</button>
            <p style={{fontSize:"130%"}}>Already have an account , Log in </p>

            </div>
            <div className="right">
            <p style={{fontSize:"250%"}}>For Investors</p>
            <img src="investor-logo-removebg-preview.png" style={{marginTop:"-1rem"}} alt="" height="250rem" width="280rem" />
  
            <p style={{fontSize:"200%",marginTop:"-0.5rem",paddingLeft:"0.9rem",paddingRight:"0.7rem"}}>
                Join our community to invest on the best StartUp ideas around the Globe 
            </p>
            
            <button className='btn-ingetstarted' onClick={() => {
                navigate("/CreateInvestor")
            }}>Create</button>
            <p style={{fontSize:"130%"}}>Already have an account , Log in </p>

            </div>
        </div>

    </div>
  )
}

export default SignupAndLogIn