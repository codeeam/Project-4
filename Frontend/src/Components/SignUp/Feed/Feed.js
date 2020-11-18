import React, { useState, useEffect } from 'react';
import './Feed.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const axios = require('axios')

const Feed = () =>
{
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    
    const register = () =>
    {
        axios.post('http://localhost:3000/register', { username: usernameReg, password: passwordReg }).then((response) =>
        {
            console.log(response);
        });
    };

    return (
        <div className="containar">
            <div className="head">
                <h2>Sign Up</h2>
            </div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label>UserName: </label>
                        <input type='text' placeholder="UserName" onChange={(e) => setUsernameReg(e.target.value)} />
                    </div>
                    {/* <div className="form-group">
                    <label>Email: </label>  
                    <input type="text" placeholder="Email"/>
                </div> */}
                    <div className="form-group">
                        <label>Password: </label>
                        <input type='password' placeholder="password" onChange={(e) => setPasswordReg(e.target.value)} />
                    </div>
                </div>
            </div>
            <Link className='Languages' to='/Languages'>Register</Link> 
        </div>
    
    );
};

export default Feed
