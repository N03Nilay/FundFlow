import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ProfileInvestor.css'

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const ProfileShowInvestor = () => {
    const navigate = useNavigate()
    const [invname,setinvname] = useState("")
    const [age,setage] = useState("")
    const [experience,setexperience] = useState("")
    const [num_comp,setnum_comp] = useState("")
    const [tot_money,settot_money] = useState("")
    const [email,setemail] = useState("")
    useEffect(() => {
        axios.get("https://fundflow.onrender.com/investor/get_detail" , config)
        .then((res) => {
            console.log(res)
            setinvname(res.data[0].name)
            setage(res.data[0].age)
            setexperience(res.data[0].experience)
            setnum_comp(res.data[0].no_of_companies_funded)
            settot_money(res.data[0].total_money_funded)
            setemail(res.data[0].email)
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
                              navigate("/DashboardInvestor")
                          }}>DASHBOARD</p></div>
                          <div className="each-sidebar-list"><p onClick={() => {
                            navigate('/ProfileShowInvestor')
                          }}>PROFILE</p></div>
                          <div className="each-sidebar-list"><p onClick={() => {
                        navigate("/ListOfStartups")
                      }}>Start Ups</p></div>
                          <div className="each-sidebar-list"><p>NOTIFICATIONS</p></div>
                          
                            
                      </div>
          
          </div>
          <div className="main-dashboard">
          <div style={{display:"flex"}}>
        <div>
    <h1 style={{textAlign:"center",fontSize:"3rem",width:"10rem",marginLeft:"18rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>PROFILE</h1>
    </div>
    <div>
        <button className="change-btn"
        onClick={() => {
            alert("Are you sure you want to make Changes")
            navigate("/ProfileInvestor")
        }}
        >Make Changes</button>
    </div>
    </div>

    <form className='form-profile-inv' style={{marginTop:"-1rem",marginLeft:"10rem"}}>
    <div className='inv-name-heading'>
        <label htmlFor="inv-name" style={{fontSize: "2rem"}}>Name : </label>
        <span name='inv-name' id='show_inv-name'style={{fontSize: "1.8rem",marginLeft:"17.9rem"}}
        >{invname}</span><br />
        </div>
        <div className='inv-email-heading'>
            <label htmlFor="inv-email" style={{fontSize: "2rem"}}>E-mail : </label>
        <span name='inv-email' id='show_inv-email' style={{fontSize: "1.8rem",marginLeft:"17.7rem"}}
        >{email}</span><br />
        </div>
        <div className='age-heading'>
        <label htmlFor="age" style={{fontSize: "2rem"}}>Age : </label>
        <span name='age' id='show_age' style={{fontSize: "1.8rem",marginLeft:"19.9rem"}}
        >{age}</span><br />
        </div>
        
        <div className='experience-heading'>
            <label htmlFor="experience" style={{fontSize: "2rem"}}>Experience : </label>
        <span name='experience' id='show_experience' style={{fontSize: "1.8rem",marginLeft:"14rem"}}
        >{experience} years</span><br />
        </div>
        <div className='num-comp-heading'>
            <label htmlFor="num-comp" style={{fontSize: "2rem"}}>Number of Companies <br />Funded :  </label>
        <span name='num-comp' id='show_num-comp' style={{fontSize: "1.8rem",position:"absolute",left:"55rem",top:"22.9rem"}}
        >{num_comp}</span><br />
        </div>
        <div className='tot_money-heading'>
            <label htmlFor="tot_money" style={{fontSize: "2rem"}}>Total money funded : </label>
        <span name='tot_money' id='show_tot_money' style={{fontSize: "1.8rem",marginLeft:"6rem"}}
        >Rs {tot_money}</span><br />
        </div>
        
        
      </form>
              
          </div>
          
      </div>
        
    </div>
  )
}

export default ProfileShowInvestor