import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Feed.css'


function App() {
  return (
        <div className="App">
          <div className="row">
          <div className="column">
            <Link to="/Languages/English" style={{ textDecoration: 'none' }} className="/Languages/English">
              <div className="card">
              <h3>English</h3>
              </div>
            </Link>
          </div>
          <div className="column">
            <div className="card">
              <h3>France </h3>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Spanish</h3>           
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Turkish</h3>            
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>German </h3>             
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Chinese</h3>             
            </div>
          </div>
          </div>
        </div>
  ); 
}


export default App;
