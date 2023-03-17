import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ListOfStartup.css'
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}


const ListOfStartups = () => {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [dataOfEachStartUp,setdataOfEachStartUp] = useState([])
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

    const [showCheck,setshowCheck] = useState(0)
    
    useEffect(() => {
    axios.get("https://fundflow.onrender.com/startup/get" , config)
    .then((res) => {
        // console.log(res.data)
        console.log("accessToken")
        setdataOfEachStartUp(res.data)
        setLoading(true)
        console.log(res.data)
    }).catch((err) => {
        console.log(accessToken)
    })
    axios.get("https://fundflow.onrender.com/investor/get_detail" , config)
    .then((res) => {
        console.log(res)
        console.log(res.data[0].experience)
        setshowCheck(res.data[0].experience)

})
},[])

  return (
    <div style={{display:"flex",height:"39.1rem"}}>
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
        <div style={{position:"relative" ,backgroundImage: "linear-gradient(to right, #74ebd5 0%, #9face6 100%)",paddingBottom:"1rem",paddingRight:"2.5rem"}}>
        <div className="check2">
        <p style={{textAlign:"center",fontSize:"2.5rem"}}>Bid on best of The Start Up Ideas</p>
        </div>
        {(loading)?(<div className="list-of-startup" style={{width:"65rem",height:"32rem",boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",overflow:"scroll",marginLeft:"0.5rem",borderRadius:"8px"}}>
            {dataOfEachStartUp.map((item,index) => {
                if(item.video_link != undefined){
                return(
                <div className="each-startup" key={item._id} style={{paddingBottom:"1rem"}}>
                <p style={{fontSize:"1.5rem",textAlign:"center"}}>{item.name}</p>
                <hr style={{marginTop:"-0.5rem"}} />
                <p style={{marginTop:"-0.05rem",fontSize:"1.2rem",textAlign:"center"}}>Sector : {item.type_of_company}</p>
                <p style={{marginTop:"-0.5rem",fontSize:"1.2rem",textAlign:"center"}}>Estalished : {item.est_year}</p>
                <hr style={{marginTop:"-0.3rem"}} />
                <button className='view-more-each-startup' onClick={() => {
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
                }}>View More</button>
            </div>
                )}
            })}
            { (load) ?  (<div className="check3">
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
  )
}

export default ListOfStartups