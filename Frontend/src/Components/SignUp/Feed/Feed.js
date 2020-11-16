import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Feed.css'



function SignUP() {

  return (
    <div className="containar"> 
        <div className="head">
            <h2>Sign up Page</h2>
        </div>
        <div className="content">
            <div className="form">  
                <div className="form-group">  
                    <label>UserName: </label> 
                    <input type="text" placeholder="UserName "/>
                </div>
                <div className="form-group">
                    <label>Email: </label>  
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Password: </label> 
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
          </div>
          <Link className='Languages' to='/Languages'> Create new Account</Link>
    </div>
  )
}

export default SignUP;