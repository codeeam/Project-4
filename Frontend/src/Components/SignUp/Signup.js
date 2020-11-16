import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Sign.css'



function SignUP() {

  return (
    <div className="contenar"> 
    <div className="header">
    <h2>Sign up Page</h2>
    </div>

    <div className="content">
        <div className="form">

        <div className="form-group">  <label>UserName</label> 
    <input type="text" placeholder="UserName "/>
    </div>
   <div className="form-group">
   <label>Email</label>  
  <input type="text" placeholder="Email"/>
   </div>
  <div className="form-group">
  <label>Password</label> 
  <input type="password" placeholder="Password"/>
  </div>
        </div>
      
    </div>

    <div className="footer">
    <Link className='Languages' to ='/Languages'> Create new Account</Link>
    </div>
    
</div>
  )
}

export default SignUP;