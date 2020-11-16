import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, } from 'react-router-dom';
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
    <button className="btn">Create New Account</button>
    </div>
    
</div>
  )
}

export default SignUP;