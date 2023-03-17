import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {useFormik} from "formik";
import { Link } from 'react-router-dom';
import './ProfileStartup.css';

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const initialValues = {
    founder:"",
    co_founder:"",
    type:"",
    est_year:"",
    prev_eval:"",
    rev_last_yr:"",
    pitch:"",
    name:"",
    location:"",
    ask_money:"",
    give_equity:"",
  };
  

const ProfileStartUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const length = location.state.passlength
    const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: (values,action) => {
          
          let founder = document.getElementById("founder").value;
          let cofounder = document.getElementById("co_founder").value;
          let type = document.getElementById("type").value;
          let est_year = document.getElementById("est_year").value;
          let prev_eval = document.getElementById("prev_eval").value;
          let rev_last_yr = document.getElementById("rev_last_yr").value;
          let pitch = document.getElementById("pitch").value;
          let name = document.getElementById("name").value;
          let location = document.getElementById("location").value;
          let ask_money = document.getElementById("ask_money").value;
          let give_equity = document.getElementById("give_equity").value;
        
      const passValue = {
        founder: founder,
        co_founder: cofounder,
        type_of_company: type,
        est_year: Number(est_year),
        evaluation_of_last_year: Number(prev_eval),
        revenue_of_last_year: Number(rev_last_yr),
        video_link: pitch,
        name: name,
        location: location,
        ask_money: Number(ask_money),
        give_equity: Number(give_equity),   
      }
      
      axios.post("https://fundflow.onrender.com/startup/create", passValue, config)
      .then((res) => {
        if(res.status === 200)
        {
        alert("Data Passed");
        navigate("/ProfileStartupShow")
        }
        
      }).catch((err) => {
          alert("Please fill all the fields correctly")
      })

      // action.resetForm();
    }
        
      });
  return (
    <div><div style={{display:"flex"}}>
    <div className="sidebar-dashboard" style={{height:"60rem"}}>
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
                            
                            alert("Fill the Profile first for Starting an AUCTION")
                        })}>AUCTION</p></div>
                        <div className="each-sidebar-list"><p onClick={(() => {
                           localStorage.clear()
                           navigate("/LoginStartUp")
                        })}>Log Out</p></div>
                          
                    </div>
        
    </div>
    <div className="main-dashboard" style={{height:"60rem"}}>
    <h1 style={{textAlign:"center",fontSize:"3rem",width:"10rem",marginLeft:"23rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>PROFILE</h1>
        
    <form className='form-profile' onSubmit={handleSubmit}>
    <div className='name-heading'>
            <label htmlFor="name">Name : </label>
        <input type="text"  name='name' id='name' placeholder='StartUp Name' autoComplete='off'
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='founder-heading'>
        <label htmlFor="founder">Founder : </label>
        <input type="text" name='founder' id='founder' placeholder="Founder's Name" autoComplete='off'
        value={values.founder}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div className='cofounder-heading'>
            <label htmlFor="co_founder">Co-Founder : </label>
        <input type="text"  name='co_founder' id='co_founder' placeholder="Co-Founder's Name" autoComplete='off'
        value={values.co_founder}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='type-heading'>
            <label htmlFor="type">Type of Business :  </label>
        <input type="text"  name='type' id='type' placeholder="Type of Organisation" autoComplete='off'
        value={values.type}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='est_year-heading'>
            <label htmlFor="est_year">Established Year : </label>
        <input type="text"  name='est_year' id='est_year' placeholder="Established Year" autoComplete='off'
        value={values.est_year}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='location-heading'>
            <label htmlFor="location"> Location : </label>
        <input type="text"  name='location' id='location' placeholder="Main office" autoComplete='off'
        value={values.location}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='prev_eval-heading'>
            <label htmlFor="prev_eval">Previous Evaluation : </label>
        <input type="text"  name='prev_eval' id='prev_eval' placeholder="Previous Evaluatation (Rs)" autoComplete='off'
        value={values.prev_eval}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='rev_last_yr-heading'>
            <label htmlFor="rev_last_yr">Revenue Last Year : </label>
        <input type="text"  name='rev_last_yr' id='rev_last_yr' placeholder="Revenue of Last Year (Rs)" autoComplete='off'
        value={values.rev_last_yr}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='pitch-heading'>
            <label htmlFor="pitch">Pitch Video link : </label>
        <input type="text"  name='pitch' id='pitch' placeholder="Video link of your Pitch" autoComplete='off'
        value={values.pitch}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='ask_money-heading'>
            <label htmlFor="ask_money">Ask Money : </label>
        <input type="text"  name='ask_money' id='ask_money' placeholder="Raise Money from Investors (Rs)" autoComplete='off'
        value={values.ask_money}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='give_equity-heading'>
            <label htmlFor="give_equity">Give Equity : </label>
        <input type="text"  name='give_equity' id='give_equity' placeholder="Equity you want to offer (%)" autoComplete='off'
        value={values.give_equity}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div style={{display:"flex"}}>
          <div>
        <button type='submit' className="create-btn" style={{marginLeft:"10rem",marginTop:"2rem"}}>Create</button>
        </div>
        </div>
      </form>
    </div>
    
</div>
</div>
  )
}

export default ProfileStartUp