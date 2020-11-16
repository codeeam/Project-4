import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Feed.css'



function Login() {

  return (
        <div className="containar"> 
            <div className="head">
                <h2>Login Page</h2>
            </div>
            <div className="content">
                <div className="form">     
                    <div className="formGroup">
                        <label>Email:</label>  
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="formGroup">
                        <label>Password: </label> 
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <Link className='Languages' to='/Languages'> Login</Link>
            <Link className='signup' to ='/signup'> Create new Account</Link>
        </div>
  )
}

export default Login;   