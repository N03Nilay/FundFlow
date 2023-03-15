import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {useFormik} from "formik";
import './ProfileStartup.css';


const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const initialValues = {
    inv_name:"",
    age:"",
    experience:"",
    no_of_companies_funded:"",
    total_money_funded:"",
  };

const ProfileInvestor = () => {
  
    const navigate = useNavigate();
    const location = useLocation();
    const [invname,setinvname] = useState("")
    const [age,setage] = useState("")
    const [experience,setexperience] = useState("")
    const [num_comp,setnum_comp] = useState("")
    const [tot_money,settot_money] = useState("")
    const [email,setemail] = useState("")

    const [showCheck,setshowCheck] = useState(0)
    
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
            setshowCheck(res.data[0].experience)
      })
      .catch((err) => {
          console.log(err)
      })

  },[])
    const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: (values,action) => {
          
          let inv_name = invname;
          let inv_age = document.getElementById("age").value;
         
          let inv_experience = document.getElementById("experience").value;
          let inv_no_of_companies_funded = document.getElementById("no_of_companies_funded").value;
          let inv_total_money_funded = document.getElementById("total_money_funded").value;
        
      const passValue = {
        name: inv_name,
        age: Number(inv_age),
        experience: Number(inv_experience),
        no_of_companies_funded: Number(inv_no_of_companies_funded),
        total_money_funded: Number(inv_total_money_funded),   
      }
      
      axios.patch("https://fundflow.onrender.com/investor/patch", passValue, config)
      .then((res) => {
        if(res.status === 200)
        {
        alert("Data Passed");
        // navigate("/DashboardInvestor")
        }
        else
        alert("check");
      }).catch((err) => {
          alert("Please enter all the fields")
      })

      // action.resetForm();
    }
        
      });
  return (
    <div><div style={{display:"flex"}}>
    <div className="sidebar-dashboard" style={{height:"50rem"}}>
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
    <div className="main-dashboard" style={{height:"50rem"}}>
    <div>
    <h1 style={{textAlign:"center",fontSize:"3rem",width:"30rem",marginLeft:"18rem",padding:"0.2rem",textShadow: "2px 2px #0077b6"}}>SET PROFILE</h1>
    </div>
        
    <form className='form-profile' onSubmit={handleSubmit}>
    <div className='inv_name-heading-change'>
            <label style={{fontSize: "2rem"}} htmlFor="inv_name">Name : </label>
        <input className='make-change-input' type="text" style={{color:"grey",marginLeft:"13.7rem"}}  name='inv_name' id='inv_name' placeholder='Password' autoComplete='off'
        value={invname}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>

        <div className='inv-email-heading-change'>
            <label style={{fontSize: "2rem"}} htmlFor="inv_email">E-mail : </label>
        <input className='make-change-input' type="text" style={{color:"grey",marginLeft:"13.4rem"}}  name='inv_email' id='inv_name' placeholder={email} autoComplete='off'
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div className='age-heading-change'>
            <label style={{fontSize: "2rem"}} htmlFor="age">Age : </label>
        <input className='make-change-input' type="text" style={{marginLeft:"15.4rem"}} name='age' id='age' placeholder={age} autoComplete='off'
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}/><span style={{fontSize:"1.5rem"}}> (years)</span> <br />
        </div>
        <div className='experience-heading-change'>
            <label style={{fontSize: "2rem"}} htmlFor="experience">Experience : </label>
        <input className='make-change-input' type="text" style={{marginLeft:"9.4rem"}}  name='experience' id='experience' placeholder={experience} autoComplete='off'
        value={values.experience}
        onChange={handleChange}
        onBlur={handleBlur}/><span style={{fontSize:"1.5rem"}}> (years)</span> <br />
        </div>
        <div className='no_of_companies_funded-heading-change'>
            <label style={{fontSize: "2rem"}} htmlFor="no_of_companies_funded">Companies funded : </label>
        <input className='make-change-input' type="text" style={{marginLeft:"2.2rem"}}  name='no_of_companies_funded' id='no_of_companies_funded' placeholder={num_comp} autoComplete='off'
        value={values.no_of_companies_funded}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='total_money_funded-heading-change'>
            <label style={{fontSize: "2rem"}} htmlFor="total_money_funded">Total money : </label>
        <input className='make-change-input' type="text" style={{marginLeft:"8rem"}}  name='total_money_funded' id='total_money_funded' placeholder={tot_money} autoComplete='off'
        value={values.total_money_funded}
        onChange={handleChange}
        onBlur={handleBlur}/> <span style={{fontSize:"1.5rem"}}> (Rs)</span> <br />
        </div>
        
        <div style={{display:"flex"}}>
          <div>
        <button type='submit' className="create-btn" style={{marginLeft:"12rem",marginTop:"2rem"}}>Create</button>
        </div>
        </div>
      </form>
    </div>
    
</div>
</div>
  )
}

export default ProfileInvestor