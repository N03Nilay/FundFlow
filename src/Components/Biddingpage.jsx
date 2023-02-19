import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {useFormik} from "formik";

const initialValues = {
    price: "",
    percent: ""
  };

const Biddingpage = () => {
    const location = useLocation();
    const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: (values,action) => {
          
          let price = document.getElementById("price").value;
          
         
          let percent = document.getElementById("percent").value;
          
          if(price==="" && percent === "")
          {
            alert("please fill all the fields");
          }
   
        else if(price==='')
        {
            alert('Please enter your price');
        }
        else if (price < 1)
        {
            alert('Invalid price');
        }
        else if(percent==='')
        {
            alert('Please enter Password');
        }
    else if(percent < 0){
      alert("Invalid Percent")
    }
    else{
        const val = price/percent;
          alert("Valuation you are giving ->"+val)
    //   const login = {
    //     email: email,
    //     password: password,

    //   }
    //   axios.post("https://fundflow.onrender.com/user/login", login)
    //   .then((res) => {
    //     if(res.status === 200)
    //     {
    //     alert("loggedin successfully");
    //     navigate("/DashboardInvestor")
    //     }
    //     else
    //     console.log("check");
    //   }).catch((err) => {
    //       alert(err.response.data.message)
    //   })
      action.resetForm();

    }
    
        },
      });
      
  return (
    <div style={{marginTop:"-2rem"}}>
        <p style={{fontSize:"2.5rem",textAlign:"center"}}> Be ready to invest in best ever IDEA </p>
        <div style={{display:"flex",marginTop:"-1.8rem"}}>
        <div className="bid-left" style={{paddingTop:"5rem"}}>
        <h1 style={{textAlign:"center"}}>Start your Bid for {location.state.name} </h1>
        <div>
        <form onSubmit={handleSubmit}>
            <div style={{display:"flex",marginLeft:"4rem",marginTop:"2rem"}}>
        <div className='username-heading'>
        
        <b style={{fontSize:"1.5rem"}}>Rs</b><input type="number" style={{marginLeft:"0.8rem"}} name='price' id='price' placeholder='Price' autoComplete='off'
        value={values.price}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div className='password-heading'style={{marginLeft:"2rem"}}>
       <b style={{fontSize:"1.5rem"}}> for </b> <input type="number" style={{marginLeft:"2rem"}}  name='percent' id='percent' placeholder='Percent' autoComplete='off'
        value={values.percent}
        onChange={handleChange}
        onBlur={handleBlur}/> <b style={{marginLeft:"0.2rem",fontSize:"1.5rem"}}>%</b> 
        <br />
        </div>
        </div>
        
        <button type='submit' className="bid-start-btn">Bid Now</button>
        </form>
        </div>

        </div>
        <div className="bid-right">
            <h1 style={{textAlign:"center"}}>PROFILE</h1>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Founder : Nilay Rudra</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Co-Founder : Nilay Rudra</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Sector : {location.state.sector}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Established : {location.state.established}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Pitch : {location.state.pitch}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Revenue of last Year : Rs{location.state.revenue}</p>
            <div className='evaluation-box'>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Our Ask of <b>Rs 10000000</b> for <b>5%</b> of my company</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Our Evaluation Rs<b>2000</b></p>
            </div>
        </div>
        </div>
         </div>
  )
}

export default Biddingpage