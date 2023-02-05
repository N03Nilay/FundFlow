import React, { useState } from 'react'
import {useFormik} from "formik";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

const CreateStartUp = () => {
  const [captcha,setcaptcha] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: (values,action) => {
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let cpassword = document.getElementById("cpassword").value;
    
      var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
          var letters = /^[a-zA-Z][a-zA-Z ]*$/;
          var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var mobnum = /(0|91)?[6-9][0-9]{9}/;
      if(username==="" && email==="" && password === "" , cpassword==="")
      {
        alert("please fill all the fields");
      }
else if(username==='')
    {
        alert('Please enter your Name');
    }
    else if(!letters.test(username))
    {
        alert('Name field required only alphabet characters');
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
else if(cpassword !== password){
  alert("Password not matched")
}
else{
    const signup = {
        name: username,
        email: email,
        password: password,
        Role: "pitcher",
        age: "19"

      }
      axios.post("https://fundflow.onrender.com/user/register", signup)
      .then((res) => {
        console.log(res.signup);
        alert("user Created")
      })
    

  action.resetForm();
}
    },
  });
  
  return (
    <div>
        <div className="createDoctor">
            <p style={{fontSize:"250%",letterSpacing:"0.5px",fontWeight:"bold",marginTop:"-0.01rem",paddingTop:"0.5rem"}}>FundFlow : For Start Up's</p>
            <p style={{fontSize:"130%",marginTop:"-1.5rem",fontWeight:"bold"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sunt? </p>
            <div className="allp" style={{display:"flex"}}>

            <div className="p1">
            <img src="heartbeat-line-icon-illustration-set-of-heartbeat-icon-on-symbol-cardiogram-heart-logo-vector-removebg-preview.png" style={{marginTop:"4.4rem"}} alt="" height="200rem" width="402rem" />
            </div>
            <div>
        <form className='form-create' onSubmit={handleSubmit}>
        <div className='username-heading'>
        
        <input type="username" name='username' id='username' placeholder='First and Last Name' autoComplete='off'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}/>
        <br />
        </div>
        <div className='email-heading'>
            <input type="email" name='email' id='email' placeholder='E-mail id' autoComplete='off'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        
        <div className='password-heading'>
        <input type="password"  name='password' id='password' placeholder='Set Password' autoComplete='off'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='password-heading'>
        <input type="password"  name='cpassword' id='cpassword' placeholder='Confirm Password' autoComplete='off'
        value={values.cpassword}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div style={{display:"flex"}}>
          <div className="captcha">
            {/* <ReCAPTCHA style={{transform:"scale(0.95)",transformOrigin:"0 0",marginLeft:"2rem",marginTop:"1rem"}}
    sitekey="6Lf6JPIjAAAAANP9Fcj7qxku87LThyJ9HJ3Cjp_7"
    onChange={(value) => {setcaptcha(true)}}
  /> */}
          </div>
          <div>
        <button type='submit'  className="create-btn">Create</button>
        </div>
        </div>
      </form>
      <p style={{fontSize:"120%",marginLeft:"-15rem",marginTop:"1.5rem"}}>Already have an account , <Link to="/LoginStartUp">LogIn</Link> </p>
      </div>
      
      </div>
        </div>
    </div>
  )
}

export default CreateStartUp