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

const ProfileMakeChange = (e) => {
    const [name,setname] = useState("")
    const [founder,setfounder] = useState("")
    const [cofounder,setcofounder] = useState("")
    const [type,settype] = useState("")
    const [est_year,setest_year] = useState("")
    const [loc,setloc] = useState("")
    const [prev_eval,setprev_eval] = useState("")
    const [rev_last_yr,setrev_last_yr] = useState("")
    const [pitch,setpitch] = useState("")
    const [ask_money,setask_money] = useState("")
    const [give_equity,setgive_equity] = useState("")
    useEffect(() => {
        axios.get("https://fundflow.onrender.com/startup/get_details" , config)
        .then((res) => {
            console.log(res)
            setname(res.data[0].name)
            setfounder(res.data[0].founder)
            setcofounder(res.data[0].co_founder)
            settype(res.data[0].type_of_company)
            setloc(res.data[0].location)
            setest_year(res.data[0].est_year)
            setrev_last_yr(res.data[0].revenue_of_last_year)
            setpitch(res.data[0].video_link)
            setprev_eval(res.data[0].evaluation_of_last_year)
            setask_money(res.data[0].ask_money)
            setgive_equity(res.data[0].give_equity)
        })
        .catch((err) => {
            console.log(err)
        })

    })
    const navigate = useNavigate();
    const location = useLocation();

    
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
        <div style={{display:"flex"}}>
        <div>
    <h1 style={{textAlign:"center",fontSize:"3rem",width:"10rem",marginLeft:"18rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>PROFILE</h1>
    </div>
    <div>
        <button className="change-btn"
        onClick={() => {
            alert("Are you sure you want to save the following changes")
            const passValues = {
                founder: founder,
                co_founder: cofounder,
                type_of_company: type,
                est_year: Number(est_year),
                evaluation_of_last_year: Number(prev_eval),
                revenue_of_last_year: Number(rev_last_yr),
                video_link: pitch,
                name: name,
                location: loc,
                ask_money: Number(ask_money),
                give_equity: Number(give_equity),
            }
            axios.patch("https://fundflow.onrender.com/startup/patch_startup" , passValues , config)
            .then((res) => {
                alert("Changes saved")
            })
            .catch((err) => {
                console.log(err)
            })
        }}
        >Set Changes</button>
    </div>
    </div>

        
    <form className='form-profile' style={{marginTop:"-1rem",marginLeft:"10rem"}}>
    <div className='name-heading'>
        <label htmlFor="name" style={{fontSize: "2rem"}}>Name : </label>
        <span name='name' id='show_name'style={{fontSize: "1.8rem",marginLeft: "16.3rem"}}
        ><input type="text" className='make-change-input' value={name}/></span><br />
        </div>
        <div className='founder-heading'>
        <label htmlFor="founder" style={{fontSize: "2rem"}}>Founder : </label>
        <span ame='founder' id='show_founder' style={{fontSize: "1.8rem",marginLeft: "14.3rem"}}
        ><input type="text" className='make-change-input' value={founder}/></span><br />
        </div>
        
        <div className='cofounder-heading'>
            <label htmlFor="co_founder" style={{fontSize: "2rem"}}>Co-Founder : </label>
        <span name='co_founder' id='show_co_founder' style={{fontSize: "1.8rem",marginLeft: "11.2rem"}}
        ><input type="text" className='make-change-input' value={cofounder}/></span><br />
        </div>
        <div className='type-heading'>
            <label htmlFor="type" style={{fontSize: "2rem"}}>Type of Business :  </label>
        <span name='type' id='show_type' style={{fontSize: "1.8rem",marginLeft: "7.3rem"}}
        ><input type="text" className='make-change-input' value={type}/></span><br />
        </div>
        <div className='est_year-heading'>
            <label htmlFor="est_year" style={{fontSize: "2rem"}}>Established Year : </label>
        <span name='est_year' id='show_est_year' style={{fontSize: "1.8rem",marginLeft: "7.8rem"}}
        ><input type="text" className='make-change-input' value={est_year}/></span><br />
        </div>
        <div className='location-heading'>
            <label htmlFor="location" style={{fontSize: "2rem"}}> Location : </label>
        <span name='location' id='show_location' style={{fontSize: "1.8rem",marginLeft: "14.5rem"}}
        ><input type="text" className='make-change-input' value={loc}/></span><br />
        </div>
        <div className='prev_eval-heading'>
            <label htmlFor="prev_eval" style={{fontSize: "2rem"}}>Previous Evaluation : </label>
        <span name='prev_eval' id='show_prev_eval' style={{fontSize: "1.8rem",marginLeft: "5rem"}}
        ><input type="text" className='make-change-input' placeholder={'Rs '+prev_eval}  onChange={(e) => {
            setprev_eval(e.target.value)
        }}/> </span><br />
        </div>
        <div className='rev_last_yr-heading'>
            <label htmlFor="rev_last_yr" style={{fontSize: "2rem"}}>Revenue Last Year : </label>
        <span name='rev_last_yr' id='show_rev_last_yr' style={{fontSize: "1.8rem",marginLeft: "6.3rem"}}
        ><input type="text" className='make-change-input' placeholder={'Rs '+rev_last_yr}  onChange={(e)=>{
            setrev_last_yr(e.target.value)
        }}/></span><br />
        </div>
        <div className='pitch-heading'>
            <label htmlFor="pitch" style={{fontSize: "2rem"}}>Pitch Video link : </label>
        <span name='pitch' id='show_pitch' style={{fontSize: "1.8rem",marginLeft: "8.4rem"}}
        ><input type="text" className='make-change-input' placeholder={pitch}  onChange={(e) => {
            setpitch(e.target.value)
        }}/></span><br />
        </div>
        <div className='ask_money-heading'>
            <label htmlFor="ask_money" style={{fontSize: "2rem"}}>Ask Money : </label>
        <span name='ask_money' id='show_ask_money' style={{fontSize: "1.8rem",marginLeft: "12.3rem"}}
        ><input type="text" className='make-change-input' placeholder={'Rs '+ask_money}  onChange={(e) => {
            setask_money(e.target.value)
        }} /></span><br />
        </div>
        <div className='give_equity-heading'>
            <label htmlFor="give_equity" style={{fontSize: "2rem"}}>Give Equity : </label>
        <span name='give_equity' id='show_give_equity' style={{fontSize: "1.8rem",marginLeft: "12.3rem"}}
        ><input type="text" className='make-change-input' placeholder={give_equity +'%'} onChange={(e) => {
            setgive_equity(e.target.value) 
        }} /></span><br />
        </div>
      </form>
    </div>
    
</div>
</div>
  )
}

export default ProfileMakeChange