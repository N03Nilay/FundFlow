import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Startupend = () => {
  const navigate = useNavigate();
  return (
    <div>
        
        <div className='div_1'>
            <h1>Fundflow</h1>
             <ul className='lists'>
                <a href="#" className='shadab'><li>Home</li> </a>
                <a href="#"><li>Startup</li> </a>
                <a href="#"><li>contact</li> </a>
                <a href="#"><li>About us</li> </a>
                <a href="#"><li>Go pro</li> </a>
             </ul>
             <Button className='signin'>sign in</Button>
             <Button className='get_started' onClick={() => {
              navigate("/SignupAndLogin")
             }}>Get Started</Button>
        </div>
        <div className='div_2'>
        <div className='container'>
            <h1  className='content'>Find perfect partnership for your business</h1>
            <p className='content_2'>Your platform for exclusive investment opportunities</p>
            <Button className='getstarted2'  onClick={() => {
              navigate("/SignupAndLogin")
             }}>Get Started</Button>
        </div>
        {/* <img src="http://www.pngall.com/wp-content/uploads/5/Investment-PNG-Free-Image.png" alt="akshay" /> */}
        {/* <img src="https://cdn-icons-png.flaticon.com/512/3310/3310653.png" alt="" /> */}
        
         <img src="https://img.freepik.com/free-vector/family-couple-saving-money_74855-5240.jpg?size=626&ext=jpg&ga=GA1.2.1835633118.1675786343" alt="" />
        </div> 
           <div className='div_3'>
            <div className='pis'>
              <h4>500+</h4> <p >registerd candidates </p>
            </div>
          <div className='pis'><h4>50+</h4><p >Startups funded</p>  </div>
            <div className='pis'><h4>10000+</h4> <p>visits per month</p></div>
        </div>
    </div>
  )
}

export default Startupend