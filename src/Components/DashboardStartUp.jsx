import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const DashboardStartUp = () => {
    const [length,setlength] = useState(0);
    var tname = "";

    useEffect(() => {
        axios.get("https://fundflow.onrender.com/startup/get_details" , config)
        .then((res) => {
            console.log(accessToken);
            console.log(res)
            setlength(res.data.length)
            if(length === 1){
            tname = res.data[0].name
            console.log(tname)
        }

        })
        .catch((err) => {
            console.log(err)
        })

    })
    const [num,setnum] = useState(0);
    
    const navigate = useNavigate();
    const location = useLocation();
    const StartAuction = () => {
        if(num === 0){
        setnum(num+1)
        const check = {
            name: tname,
          }
        axios.post("https://fundflow.onrender.com/startup/start_auction" , check, config)
        .then((res) => {
            alert("auction started")  
        })}
        else
        alert("Alredy started")
        
    }
  return (
    <div style={{display:"flex"}}>
        <div className="sidebar-dashboard">
            <p style={{fontSize:"3rem",textAlign:"center",color:"white",letterSpacing:"0.5rem"}}>FundFlow</p>
            <hr />
        <div className="sidebar-dashboard-list">
                        <div className="each-sidebar-list"><p onClick={() => {
                            navigate("/DashboardStartUp")
                        }}>DASHBOARD</p></div>
                        <div className="each-sidebar-list"><p onClick={() => {
                            (length === 1)? (navigate("/ProfileStartUpShow")) : (navigate("/ProfileStartUp"))
                            
                        }}>PROFILE</p></div>
                        <div className="each-sidebar-list"><p>INVESTORS</p></div>
                        <div className="each-sidebar-list"><p onClick={(() => {
                            navigate("/Auction")
                        })}>AUCTION</p></div>
                        <div className="each-sidebar-list"><p onClick={(() => {
                           localStorage.clear()
                           navigate("/LoginStartUp")
                        })}>Log Out</p></div>
                          
                    </div>
        
        </div>
        <div className="main-dashboard">
            <div className="upper-dashboard">
                <p style={{fontSize:"1.2rem",marginLeft:"1rem",paddingTop:"0.2rem"}}>Analytics</p>
                <hr style={{marginTop:"-1rem"}}/>
                <div className="upper-dashboard-flex" style={{display:"flex",justifyContent:"space-around"}}>
                <div className="p1" style={{marginTop:"-1.3rem"}}>
                <h2>1250</h2>
                <p style={{marginTop:"-1rem",marginLeft:"-4rem"}}>Investor's have Registerd</p>
                </div>
                <div className="p2" style={{marginTop:"-1.3rem"}}>
                <h2>5000</h2>
                <p style={{marginTop:"-1rem",marginLeft:"-4rem"}}>Start Up's have registered their Pitch</p>
                </div>
                <div className="p3" style={{marginTop:"-1.3rem"}}>
                <h2>5M</h2>
                <p style={{marginTop:"-1rem",marginLeft:"-4rem"}}>Funding has been raised</p>
                </div>
                </div>
                <hr style={{marginTop:"-0.5rem"}}/>
            
            </div>
            <div className="lower-dashboard" style={{display:"flex"}}>
                <div className="lower-dashboard-down">
                    <p style={{fontSize:"1.4rem",textAlign:"center",marginTop:"-0.01rem",paddingTop:"0.5rem"}}>Current Investors</p>
                    <hr style={{marginTop:"-1rem" }} />
                    <div className="investors-list">
                        <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}>&#x2022;</span><p className='each-investor'>Aman Gupta</p></div>
                        <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}>&#x2022;</span><p className='each-investor'>Aman Gupta</p></div>
                        <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}>&#x2022;</span><p className='each-investor'>Aman Gupta</p></div>
                        <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}>&#x2022;</span><p className='each-investor'>Aman Gupta</p></div>
                        
                        
                        
                    </div>
                    <button className='view-more' onClick={StartAuction}>Start Auction</button>
                    <button className='view-more' onClick={() => {
                        
                        const check2 = {
                            name: tname,
                          }
                        axios.post("https://fundflow.onrender.com/startup/end_auction" , check2, config)
                        .then((res) => {
                            alert("auction Ended")
                            console.log(res)
                        })
                    }}>End Auction</button>


                    <button className='view-more' onClick={() => {
                        
                        const check2 = {
                            name: tname,
                          }
                        axios.post("https://fundflow.onrender.com/bid/get_leaderboard" , check2, config)
                        .then((res) => {
                            
                            console.log(res)
                        })
                    }}>Get Leaderboard</button>

                </div>
                <div className="lower-dashboard-down">

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DashboardStartUp