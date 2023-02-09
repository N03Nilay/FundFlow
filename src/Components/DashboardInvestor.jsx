import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DashboardInvestor = () => {
    const [dataOfEachStartUp,setdataOfEachStartUp] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://fundflow.onrender.com/startup/get")
        .then((res) => {
            // console.log(res.data)
            
            setdataOfEachStartUp(res.data)
        })
    })

    return (
      <div style={{display:"flex"}}>
          <div className="sidebar-dashboard">
              <p style={{fontSize:"3rem",textAlign:"center",color:"white",letterSpacing:"0.5rem"}}>FundFlow</p>
              <hr />
          <div className="sidebar-dashboard-list">
                          <div className="each-sidebar-list"><p onClick={() => {
                              navigate("/DashboardInvestor")
                          }}>DASHBOARD</p></div>
                          <div className="each-sidebar-list"><p onClick={() => {
                              alert("hello")
                          }}>PROFILE</p></div>
                          <div className="each-sidebar-list"><p onClick={() => {
                        
                        navigate("/ListOfStartups")
                      }}>Start Ups</p></div>
                          <div className="each-sidebar-list"><p>NOTIFICATIONS</p></div>
                            
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
                      <p style={{fontSize:"1.4rem",textAlign:"center",marginTop:"-0.01rem",paddingTop:"0.5rem"}}>Current Start Up's</p>
                      <hr style={{marginTop:"-1rem"}} />
                      <div className="investors-list">
                          {/* <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}>&#x2022;</span><p className='each-investor'>Reliance Industries</p></div> */}
                          {dataOfEachStartUp.map((item,index) => {
                    return(
                        <div key={item._id}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                <div key={item._id} className="check"><span className='bullet' style={{color:"green",fontSize:"3rem",paddingTop:"5rem"}}>&#x2022;</span><p className='each-investor'>{item.name}</p></div> 
                <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}><button className='bid-btn' onClick={() => {
                   const comp_name = item.name
                    navigate("/Biddingpage",{state:{name:comp_name}})
                }}>BID</button></span></div> 
                </div>
                <hr style={{marginTop:"-0.8rem"}} />
                </div>
                )
            })}        
                      </div>
                      <button className='view-more' onClick={() => {
                        navigate("/ListOfStartups")
                      }}>View more &#x290B;</button>
  
                  </div>
                  <div className="lower-dashboard-down">
  
                  </div>
              </div>
          </div>
          
      </div>
    )
}

export default DashboardInvestor