import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './ProfileStartup.css';
const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const Auction = () => {
    const [num,setnum] = useState(0);
    const [lead_check,setlead_check] = useState(0);
    const [name,setname] = useState("")
    const [ask_money,setask_money] = useState("")
    const [give_equity,setgive_equity] = useState("")
    useEffect(() => {
        axios.get("https://fundflow.onrender.com/startup/get_details" , config)
        .then((res) => {
            setname(res.data[0].name)
            setask_money(res.data[0].ask_money)
            setgive_equity(res.data[0].give_equity)
        })
        .catch((err) => {
            console.log(err)
        })

    })
    const navigate = useNavigate();
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
       
        <div>
    <h1 style={{textAlign:"center",fontSize:"3rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>Get the best Investors for your <br />{name}</h1>
    </div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
                    <p style={{textAlign:"center",fontSize:"1.6rem"}}><b>Rs {ask_money}</b></p>
                    <p style={{fontSize:"1.6rem",letterSpacing:"0.1rem",marginTop:"-1.5rem"}}>Asking Money</p>
            </div>
            <div>
            <p style={{textAlign:"center",fontSize:"1.6rem"}}><b>{give_equity}% </b></p>
                    <p style={{fontSize:"1.6rem",letterSpacing:"0.1rem",marginTop:"-1.5rem"}}>Giving Equity</p>
            </div>
            <div>
            <p style={{textAlign:"center",fontSize:"1.6rem"}}><b>Rs {((100/give_equity * ask_money)).toFixed(2)} </b></p>
                    <p style={{fontSize:"1.6rem",letterSpacing:"0.1rem",marginTop:"-1.5rem"}}>Current Evaluation</p>
            </div>
        </div>
        
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
                    <button className="auction-start-btn" onClick={() => {
                        if(num === 0){
                            setnum(num+1)
                            const check = {
                                name: name,
                              }
                            axios.post("https://fundflow.onrender.com/startup/start_auction" , check, config)
                            .then((res) => {
                                alert("auction started")  
                            })}
                            else
                            alert("Alredy started")
                    }}>Start Auction</button>
            </div>
            <div>
            <button className="auction-end-btn" onClick={() => {
                        if(num === 1){
                            setlead_check(lead_check+1)
                        const check2 = {
                            name: name,
                          }
                        axios.post("https://fundflow.onrender.com/startup/end_auction" , check2, config)
                        .then((res) => {
                            alert("auction Ended")
                            console.log(res)
                        })}
                        else{
                            alert("not started")
                        }
                    }}>End Auction</button>
            </div>
            
        </div>
        <div>
            <button className="auction-leaderboard-btn" onClick={() => {
                        if(lead_check === 1)
                        {
                            // const check2 = {
                            //     name: name,
                            //   }
                            // axios.post("https://fundflow.onrender.com/bid/get_leaderboard" , check2, config)
                            // .then((res) => {
                            //     alert("leaderboard displayed")
                            //     console.log(res)
                            // })
                            navigate("/Leaderboard",{state:{comp_name:name}})
                        }
                        else{
                            alert("Start you Auction to get the leaderboard")
                        }
                    }} >Get Leaderboard</button>
            </div>
        
        
    </div>
    
</div>
</div>
  )
}

export default Auction