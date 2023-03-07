import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {useFormik} from "formik";
import axios from 'axios'

const accessToken = localStorage.getItem("access token");
console.log(accessToken)
const config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

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
      

        const val = (100/percent) * price;
        const cname = location.state.name;
        const pass_value = {
          name: cname,
          evaluation: val,
        }
          // alert("Valuation you are giving ->"+val)
      axios.post("https://fundflow.onrender.com/bid/postbid", pass_value , config)
      .then((res) => {
        alert("Your rank is" +res.data.rank)
      }).catch((err) => {
          console.log(err)
      })
      action.resetForm();

    }
    
        }
      });
      
  return (
    <div style={{marginTop:"-2rem"}}>
        <div style={{display:"flex",marginTop:"-1.8rem"}}>
        <div className="bid-left" style={{height:"41.05rem",paddingTop:"3rem"}}>
        <h1 style={{textAlign:"center",fontSize:"2.5rem"}}>Start your Bid for {location.state.name} </h1>
        <div>
        <form onSubmit={handleSubmit} style={{marginTop:"5rem"}}>
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
        <div className="bid-right" style={{height:"41.05rem",paddingTop:"3rem"}}>
            <h1 style={{textAlign:"center",borderRadius:"10px",border:"2px dashed black",width:"10rem",marginLeft:"9rem",padding:"0.2rem",paddingBottom:"0.5rem",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",textShadow: "2px 2px #0077b6"}}>PROFILE</h1>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Founder : {location.state.founder}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Co-Founder : {location.state.cofounder}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Sector : {location.state.sector}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Established : {location.state.established}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Pitch : {location.state.pitch}</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Revenue of last Year : Rs {location.state.revenue}</p>
            <div className='evaluation-box'>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Our Ask of Rs <b>{location.state.ask}</b> for <b>{location.state.equity}%</b> of my company</p>
            <p style={{marginTop:"-0.2rem",textAlign:"center",fontSize:"1.5rem"}}>Our Evaluation Rs <b>{(100/location.state.equity) * location.state.ask}</b></p>
            </div>
        </div>
        </div>
         </div>
  )
}

export default Biddingpage