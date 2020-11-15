import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, } from 'react-router-dom';
import Signup from './Signup'


function Login() {

  return (
    <div>
    <div className="contenar"> 
    <div className="header">
    <h2>Login Page</h2>
    </div>

    <div className="content">
        <div className="form">

        
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
    <button className="btn">Login</button>
    </div>
    
</div>
<Router>
    <Route path='/signup'>
        <Signup/>
    </Route>

</Router>
<Link className='signup' to ='/signup'> Create new Account</Link>

</div>
  )
}

export default Login;   