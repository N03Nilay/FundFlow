import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ListOfStartup.css'

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const DashboardInvestor = () => {
    const [dataOfEachStartUp,setdataOfEachStartUp] = useState([])
    const [showCheck,setshowCheck] = useState(0)
    const [load,setload] = useState(false)
    const [est_year,setest_year] = useState(0)
    const [eva_lastyear,seteva_last_year] = useState(0)
    const [name,setName] = useState("")
    const [founder,setfounder] = useState("")
    const [cofounder,setcofounder] = useState("")
    const [rev_year,setrev_year] = useState(0)
    const [type,settype] = useState("")
    const [pitch,setpitch] = useState("")
    const [email,setemail] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://fundflow.onrender.com/startup/get" , config)
        .then((res) => {
            // console.log(res.data)
            setdataOfEachStartUp(res.data)
    })
    axios.get("https://fundflow.onrender.com/investor/get_detail" , config)
    .then((res) => {
        console.log(res)
        console.log(res.data[0].experience)
        setshowCheck(res.data[0].experience)

})

},[])

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
                            if(showCheck === undefined)
                             navigate("/ProfileInvestor")
                             else
                             navigate('/ProfileShowInvestor')
                          }}>PROFILE</p></div>
                          <div className="each-sidebar-list"><p onClick={() => {
                        
                        navigate("/ListOfStartups")
                      }}>Start Ups</p></div>
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
              <div className="lower-dashboard">
              <h1 style={{textAlign:"center",fontSize:"3rem",width:"30rem",marginLeft:"15rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>Current Start Ups</h1>
                  <div className="lower-dashboard-down" style={{marginTop:"-1.8rem"}}>
                    
                      <div className="investors-list" style={{marginTop:"0.5rem"}}>
                          {dataOfEachStartUp.map((item,index) => {
                    return(
                        <div key={item._id}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className='arrow-inv'>
                            <p> &#9710;</p>
                            </div>
                <div key={item._id} className="check"><p className='each-investor' style={{marginLeft:"-13.5rem",marginTop:"1.6rem"}}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p></div>
                <div className="check" style={{width:"10rem"}}><button className='profile-btn' style={{marginLeft:"6rem",marginTop:"1.73rem"}} onClick={() => {
                setload(true)
                setest_year(item.est_year)
                seteva_last_year(item.evaluation_of_last_year)
                setName(item.name)
                setrev_year(item.revenue_of_last_year)
                settype(item.type_of_company)
                setpitch(item.video_link)
                setfounder(item.founder)
                setcofounder(item.co_founder)
                setemail(item.email)
                }}>Profile</button></div>  
                <div className="check"><span className='bullet' style={{color:"green",fontSize:"3rem"}}><button className='bid-btn' onClick={() => {
                   const comp_name = item.name;
                   const comp_sector = item.type_of_company
                   const comp_established = item.est_year
                   const comp_revenue = item.revenue_of_last_year
                   const comp_pitch = item.video_link
                   const comp_founder = item.founder
                   const comp_cofounder = item.co_founder
                   const comp_ask = item.ask_money
                   const comp_equity = item.give_equity
                    navigate("/Biddingpage",{state:{name:comp_name,sector:comp_sector,established:comp_established,revenue:comp_revenue,pitch:comp_pitch,founder:comp_founder,cofounder:comp_cofounder,ask:comp_ask,equity:comp_equity}})
                }}>BID</button></span></div> 
                </div>
                <hr style={{marginTop:"-0.8rem"}} />
                </div>
                )
            })}      

            { (load) ?  (<div className="check3" style={{position:"absolute",top:"4rem",left:"-0.5rem"}}>
                <div style={{display:"flex"}}>
                    <div><button id='connect-btn'><a href="mailto:{email}"> Connect</a></button></div>
            <div style={{width:"100rem"}}><h1 style={{fontSize:"3.3rem",textAlign:"center"}}>{name} </h1></div>
            <div onClick={() => {
                setload(false)
            }} style={{cursor:"pointer",position:"absolute",left:"60rem"}} ><h2>&#10060;</h2></div>
            </div>
            <div className="check-up1" style={{display:"flex",justifyContent:"space-around",marginTop:"-1.5rem"}}>
            <div className="check3-p1" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{founder}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Founder</p>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{type}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Type</p>
            </div>
            <div className="check3-p3" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{cofounder}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Co-Founder</p>
            </div>
            </div>
            <div className="check-up1" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="check3-p1" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{eva_lastyear}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>previous Evaluation</p>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{est_year}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Established Year</p>
            </div>
            <div className="check3-p3" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{rev_year}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Revenue of Last Year</p>
            </div>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{pitch}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Our Pitch</p>
            </div>
            

             </div>
             ) : (<></>)}
              
                      </div>
                      {/* <button className='view-more' onClick={() => {
                        navigate("/ListOfStartups")
                      }}>View more &#x290B;</button> */}
  
                  </div>
              </div>
          </div>
          
      </div>
    )
}

export default DashboardInvestor