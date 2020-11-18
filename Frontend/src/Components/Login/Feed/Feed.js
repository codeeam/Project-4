import React, { useState, useEffect } from 'react';
import './Feed.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const axios = require('axios')

const Feed = () =>
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [loginStatus, setLoginStatus] = useState(false);

    axios.defaults.withCredentials = true;
    

    const login = () =>
    {
        axios.post('http://localhost:3000/login', { username: username, password: password }).then((response) =>
        {
        if (!response.data.auth) {
            setLoginStatus(false);
        } else {
            localStorage.setItem("token", response.data.token)
            setLoginStatus(true);
        }
        
        });
    };

    const userAuth = () =>
    {
        axios.get('http://localhost:3000/isUserAuth', {
        headers: {
            "x-access-token": localStorage.getItem("token")
        }
        }).then((response) =>
        {
        console.log(response.data);
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/login').then((response) =>
        {
        if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username)
        }
        
        })
    }, [])

            
    return (
        <div className="containar"> 
            <div className="head">
                <h2>Login</h2>
            </div>
            <div className="content">
                <div className="form">     
                    <div className="formGroup">
                        <label>Username:</label>  
                        <input type='text' placeholder="UserName" onChange={ (e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                        <label>Password: </label> 
                         <input type='password' placeholder="password" onChange={ (e) => setPassword(e.target.value)}/>
                    </div>
                </div>
            </div>

            <Link className='Languages' to='/Languages'> Login </Link> 
            <Link className='signup' to='/signup'> Create new Account</Link>
        </div>
    )
}

export default Feed
