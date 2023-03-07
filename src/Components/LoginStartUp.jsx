import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {useFormik} from "formik";
import { Link } from 'react-router-dom';
import axios from 'axios';
const initialValues = {
    email: "",
    password: "",
  };
  var accessToken = "";

const LoginStartUp = () => {
    const [captcha,setcaptcha] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
    const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: (values,action) => {
          
          let email = document.getElementById("email").value;
         
          let password = document.getElementById("password").value;

        
          var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		      var letters = /^[a-zA-Z][a-zA-Z ]*$/;
		      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var mobnum = /(0|91)?[6-9][0-9]{9}/;
          if(email==="" && password === "")
          {
            alert("please fill all the fields");
          }
   
		else if(email==='')
		{
			alert('Please enter your email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(password==='')
		{
			alert('Please enter Password');
		}
    else if(document.getElementById("password").value.length < 5){
      alert("length should be minimum of 5 charaters")
    }
    else{
      const login = {
        email: email,
        password: password,
        role: "pitcher",
      }
      axios.post("https://fundflow.onrender.com/user/login", login)
      .then((res) => {
        if(res.status === 200)
        {
            accessToken = res.data.token;
            // localStorage.clear();
          localStorage.setItem("access token" , accessToken )
          alert("loggedin successfully")
          // setInterval(() => {
          //   console.log("")
          // },5000)
            navigate("/DashboardStartUp")
            // console.log(res)
          
        }
        else
        console.log("check");
      }).catch((err) => {
          alert(err.response.data.message)
      })
      action.resetForm();
    }
        },
      });
  
  return (
    <div>
         <div className="createDoctor">
            <p style={{fontSize:"250%",letterSpacing:"0.5px",fontWeight:"bold",marginTop:"-0.01rem",paddingTop:"0.5rem"}}>FundFlow : For Start Up's</p>
            
            <p style={{fontSize:"130%",marginTop:"-1.5rem",fontWeight:"bold"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, provident.</p>
            <div className="allp" style={{display:"flex",marginLeft:"12rem"}}>
            <div className="p1">
            <img src="2654608-removebg-preview.png" style={{marginTop:"1.4rem"}} alt="" height="300rem" width="350rem" />
            </div>
            <div>
        <form className='form-create' onSubmit={handleSubmit}>
        <div className='username-heading'>
        
        <input type="email" name='email' id='email' placeholder='E-mail id' autoComplete='off'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div className='password-heading'>
        <input type="password"  name='password' id='password' placeholder='Password' autoComplete='off'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div style={{display:"flex"}}>
          <div>
        <button type='submit' className="create-btn">LogIn</button>
        </div>
        </div>
        <p style={{fontSize:"120%",marginLeft:"-13rem",marginTop:"1.5rem"}}>Don't have an account , <Link to="/CreateStartUp" style={{color:"black"}}> Create it </Link></p>
        
      </form>
      
      </div>
      </div>
      
        </div>

    </div>
  )
}

export default LoginStartUp