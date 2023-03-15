import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { display } from '@mui/system';
    
const accessToken = localStorage.getItem("access token");
console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}



const DashboardStartUp = () => {
    const [dataOfEachInvestor,setdataOfEachInvestor] = useState([])
    const [length,setlength] = useState(0);
    var tname = "";
    const [eachstartup , seteachstartup] = useState([])
    const navigate = useNavigate();
    
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
        axios.get("https://fundflow.onrender.com/investor/get" , config)
                            .then((res) => {
                                setdataOfEachInvestor(res.data)
                                
                                // console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })

    },[])
    console.log(dataOfEachInvestor)
    const [load,setload] = useState(false)
    const [num,setnum] = useState(0);
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [age,setage] = useState("")
    const [exp,setexp] = useState("")
    const [tot_comp,settot_comp] = useState("")
    const [tot_money,settot_money] = useState("")
    
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
                            (length === 1)? (navigate("/ProfileStartUpShow",{state:{passlength:length}})) : (navigate("/ProfileStartUp",{state:{passlength:length}}))                        
                        }}>PROFILE</p></div>
                        <div className="each-sidebar-list"><p>INVESTORS</p></div>
                        <div className="each-sidebar-list"><p onClick={(() => {
                            if(tname === "")
                            alert("Fill the Profile first for Starting an AUCTION")
                            else
                            navigate("/Auction" , {state:{passlength:length}})
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
            <div className="lower-dashboard" >
            <h1 style={{textAlign:"center",fontSize:"3rem",width:"30rem",marginLeft:"15rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>Current Investors</h1>
                <div className="lower-dashboard-down" style={{marginTop:"-1.8rem"}}>
                    {/* <p style={{fontSize:"1.4rem",textAlign:"center",marginTop:"-0.01rem",paddingTop:"0.5rem"}}>Current Investors</p>
                    <hr style={{marginTop:"-1rem" }} /> */}
                    <div className="investors-list">
                          {dataOfEachInvestor.map((item,index) => {
                            if(index != 0)
                    return(
                        <div key={item._id}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div className='arrow-inv' >
                            <p> &#9710;</p>
                            </div>
                <div key={item._id} className="check" ><p className='each-investor' style={{marginLeft:"-10rem"}}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p></div> 
                <div className="check" style={{width:"10rem"}}><button className='profile-btn' onClick={() => {
                //    const inv_name = item.name;
                //    const inv_email = item.email;
                setload(true)
                   setname(item.name.charAt(0).toUpperCase() + item.name.slice(1));
                setemail(item.email)
                setage(item.age)
                setexp(item.experience)
                settot_comp(item.no_of_companies_funded)
                settot_money(item.total_money_funded)
                }}>Profile</button></div> 
                <div className="check" style={{width:"10rem"}}><button className='bid-btn' onClick={() => {
                   const inv_email = item.email;
                    alert(inv_email)
                }}>Connect</button></div> 

                
                </div>
                <hr style={{marginTop:"-0.8rem"}} className="hor-line" />
                </div>
                )
            })}        
                      </div>
                </div>


              {(load) ? (<div className='profile-inv-pop'>
              <div style={{display:"flex",marginTop:"-2rem"}}>
                    
            <div style={{width:"100rem"}}><h1 style={{fontSize:"3.3rem",textAlign:"center"}}>{name} </h1></div>
            <div onClick={() => {
                setload(false)
            }} style={{cursor:"pointer",position:"absolute",left:"52rem",top:"0.1rem"}} ><h2>&#10060;</h2></div>
            </div>

            <div className="check-up1" style={{display:"flex",justifyContent:"space-around",marginTop:"-1rem"}}>
            <div className="check3-p1" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{age}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Age</p>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{exp}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Experience</p>
            </div>
            
            </div>

            <div className="check-up1" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="check3-p1" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{tot_comp}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Companies funded</p>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"1.8rem"}}>{tot_money}</h2>
                <p style={{marginTop:"-0.8rem",fontSize:"1.2rem"}}>Total money funded</p>
            </div>
            
            </div>
                
                </div>) : (<></>)}


            </div>
        </div>
        
    </div>
  )
}

export default DashboardStartUp