import React, { useEffect, useState } from 'react'
import axios from 'axios'

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}


const ListOfStartups = () => {
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
    
    useEffect(() => {
    axios.get("https://fundflow.onrender.com/startup/get" , config)
    .then((res) => {
        // console.log(res.data)
        console.log("accessToken")
        setdataOfEachStartUp(res.data)
        console.log(res.data)
    }).catch((err) => {
        console.log(accessToken)
    })
})

  return (
    <div style={{height:"39.05rem"}}>
        <div style={{position:"relative"}}>
        <div className="check2">
        <p style={{textAlign:"center",fontSize:"2.5rem"}}>Bid on best of The Start Up Ideas</p>
        </div>
        <div className="list-of-startup">
            {dataOfEachStartUp.map((item,index) => {
                return(
                <div className="each-startup" key={item._id}>
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
                }}>View More</button>
            </div>
                )
            })}
            { (load) ?  (<div className="check3">
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div style={{textAlign:"center",marginLeft:"29rem"}}><h1 style={{fontSize:"3.3rem"}}>{name} </h1></div>
            <div onClick={() => {
                setload(false)
            }} style={{marginLeft:"26rem",marginTop:"-1rem",cursor:"pointer"}} ><h2>&#10060;</h2></div>
            </div>
            <div className="check-up1" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="check3-p1" style={{textAlign:"center"}}>
                <h2>{founder}</h2>
                <p>Founder</p>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2>{type}</h2>
                <p>Type</p>
            </div>
            <div className="check3-p3" style={{textAlign:"center"}}>
                <h2>Nilay Rudra</h2>
                <p>Co-Founder</p>
            </div>
            </div>
            <div className="check-up1" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="check3-p1" style={{textAlign:"center"}}>
                <h2>{eva_lastyear}</h2>
                <p>previous Evaluation</p>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2>{est_year}</h2>
                <p>Established Year</p>
            </div>
            <div className="check3-p3" style={{textAlign:"center"}}>
                <h2>{rev_year}</h2>
                <p>Revenue of Last Year</p>
            </div>
            </div>
            <div className="check3-p2" style={{textAlign:"center"}}>
                <h2>{pitch}</h2>
                <p>Our Pitch</p>
            </div>
            

             </div>) : (<></>)}
            
        </div>
        </div>
       
    </div>
  )
}

export default ListOfStartups