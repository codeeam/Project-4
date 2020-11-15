import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import English from './Screens/English/English'
import Navbar from './component/NavbarAfterLogin/Navbar'
import './App.css';
import Login from './component/NavbarAfterLogin/Login';
import signup from './component/NavbarAfterLogin/Signup'
import Join from './Components/ChatApp/Join/Join'
import Chat from './Components/ChatApp/Chat/chat'
import About from './component/AboutUs/About'
import Contact from './component/AboutUs/Contact'
import SignUP from './component/NavbarAfterLogin/Signup';


function App() {
  useEffect(() => {
    console.log("It's running");
  }, [])

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="head">
            <Navbar />
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <Link to="/english" style={{ textDecoration: 'none' }} className="english1"><h3>English</h3></Link>
                <p>Some text</p>
                <p>Some text</p> 
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>France </h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Spanish</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Turkish</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>German </h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Chinese</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
          </div>
          <div className="bottom-stuff">
            <div className="bottom">
                
              <div className="about-us"><Link to="/aboutUs" style={{ textDecoration: 'none' }}><h3>About Us</h3></Link></div>
              <div className="contact-us"><Link to="/contactUs" style={{ textDecoration: 'none' }}><h3>Contact Us</h3></Link> </div>
            </div>
            <div className="header__right">
					<Link to="/login" style={{ textDecoration: 'none' }}><div className="signUp-cover"><h2 className="signUP">SignIn</h2></div></Link>
				</div>
          </div>
        </div>
      </Route>
      <Route  path="/login" exact component={Login} />
      <Route path ="/signup" component={SignUP}/>
      <Route exact path="/aboutUs" component={About}/>
      <Route exact path="/contactUs" component={Contact}/>
      <Route exact path="/english" component={English}/>
      <Route path="/joinChat" exact component={Join}/>
      <Route path="/chat" component={Chat}/>
    </Router>

  );
   
}

export default App;
