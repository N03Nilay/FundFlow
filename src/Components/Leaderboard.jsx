import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Dna } from 'react-loader-spinner';
import './ProfileStartup.css';

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const Leaderboard = (e) => {
    
    const [each_leaderboard,seteach_leaderboard] = useState([])
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
   
   
    const check2 = {
            name: location.state.comp_name,
          }
                        useEffect(() => {
                            axios.post("https://fundflow.onrender.com/bid/get_leaderboard",check2 , config)
                            .then((res) => {
                                console.log(res.data)
                                setLoading(true)
                                seteach_leaderboard(res.data)
                                 
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        },[])
                            
  return (
    <div>
        <div style={{display:"flex"}}>
    <div className="sidebar-dashboard">
        <p style={{fontSize:"3rem",textAlign:"center",color:"white",letterSpacing:"0.5rem"}}>FundFlow</p>
        <hr />
    <div className="sidebar-dashboard-list">
                    <div className="each-sidebar-list"><p onClick={() => {
                        navigate("/DashboardStartUp")
                    }}>DASHBOARD</p></div>
                    <div className="each-sidebar-list"><p onClick={() => {
                        navigate("/ProfileStartUpShow")
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
    <h1 style={{textAlign:"center",fontSize:"3rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>Your Leaderboard</h1>

    {(loading)?(<div className="leaderboard-details">
        <div className="pos" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="email">
                    <h2 style={{marginLeft:"0.5rem"}}>E-Mail</h2>
            </div>
            <div className="rank">
            <h2 style={{marginLeft:"1.5rem"}}>Rank</h2>
            </div>
            <div className="eval">
            <h2 style={{marginLeft:"0.5rem"}}>Evaluation</h2>
            </div>
        </div>
        <div className="all-rankers">
        {
            each_leaderboard.map((item,index) => {
                
                return(<>
                    <div className="rank-pos" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="email" style={{width:"10rem"}}>
                    <h2 style={{textAlign:"center",marginLeft:"-3rem",color: "#281E5D"}}>{item.email}</h2>
            </div>
            <div className="rank" style={{width:"12rem"}}>
            <h2 style={{textAlign:"center",color: "#281E5D"}}>{index+1}</h2>
            </div>
            <div className="eval" style={{width:"10rem"}}>
            <h2 style={{textAlign:"center",color: "#281E5D"}}>{item.evaluation}</h2>
            </div>
        </div>
                     </>
                )
            })
        } 
        </div>
        
    </div>) : (<>
        <div className="loader">
                    <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                className="loader"/></div>
    </>)}
    </div>
    
</div>
</div>
  )
}

export default Leaderboard