import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function Login() {

  return (
    <div>

      {/* <Navbar /> */}
    
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
    <Link className='Languages' to ='/Languages'> Login</Link>

    </div>
    <Link className='signup' to ='/signup'> Create new Account</Link>
</div>

      </div>
      
      </div>
  )
}

export default Login;   