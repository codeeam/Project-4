import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import SignUP from './component/SignUP'
import English from './component/English'
import Search from './component/Search'
// import Languages from './component/Languages'
import './App.css';

function App() {
  useEffect(() => {
    console.log("It's running");
  }, [])

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="head">
            <div className="logo-cover"><h2 className="logo">Logo</h2></div>
            <Search />
            <Link to="/SignUP" ><div className="signUp-cover"><h2 className="signUP">SignUP</h2></div> </Link>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <Link to="/english"><h2 className="english">English</h2></Link>
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
        </div>
      </Route>
      <Route exact path="/english" component={English} />
      <Route exact path="/SignUP" component={SignUP} />


    </Router>
 
  );
}

export default App;
