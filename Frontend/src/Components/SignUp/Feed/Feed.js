import React, { useState } from 'react';
import './Feed.css';
import Axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Feed = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [registerStatus, setRegisterStatus] = useState(false);

    const register = () => {
        Axios.post('http://localhost:3000/register', { username: usernameReg, password: passwordReg }).then((response) => {
            if (!response.data.auth) {
                setRegisterStatus(false);
            } else {
                localStorage.setItem("token", response.data.token)
                setRegisterStatus(true);
            }
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

                    <div className="form-group">
                        <label>Password: </label>
                        <input type='password' placeholder="password" onChange={(e) => setPasswordReg(e.target.value)} />
                    </div>
                </div>
            </div>
            <button onClick={register}>
            
                   
                    (<Link className='signup' to='/' >Register</Link>)
                
            </button>

        </div>

    );
};

export default Feed
