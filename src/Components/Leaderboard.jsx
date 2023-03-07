import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const Leaderboard = () => {
    const [each_leaderboard,seteach_leaderboard] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const check2 = {
                name: location.state.comp_name,
                        }
                            axios.post("https://fundflow.onrender.com/bid/get_leaderboard" , check2, config)
                            .then((res) => {
                                alert("leaderboard displayed")
                                console.log(res)
                            })
                           
    })
  return (
    <div><div style={{display:"flex"}}>
    <div className="sidebar-dashboard" style={{height:"50rem"}}>
        <p style={{fontSize:"3rem",textAlign:"center",color:"white",letterSpacing:"0.5rem"}}>FundFlow</p>
        <hr />
    <div className="sidebar-dashboard-list">
                    <div className="each-sidebar-list"><p onClick={() => {
                        navigate("/DashboardStartUp")
                    }}>DASHBOARD</p></div>
                    <div className="each-sidebar-list"><p onClick={() => {
                        navigate("/ProfileStartUp")
                    }}>PROFILE</p></div>
                    <div className="each-sidebar-list"><p>INVESTORS</p></div>
                    <div className="each-sidebar-list"><p>NOTIFICATIONS</p></div>
                </div>
    </div>
    <div className="main-dashboard" style={{height:"50rem"}}>
    <h1 style={{textAlign:"center",fontSize:"3rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>Your Leaderboard</h1>
        
        
        
    </div>
    
</div>
</div>
  )
}

export default Leaderboard