import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Footer.css'

function App() {
  return (
          <div className="bottom-stuff">
            <div className="bottom">             
              <div className="about-us">
                <Link to="/aboutUs" style={{ textDecoration: 'none' }}>
                  <h3>About Us</h3>
                </Link>
              </div>
              <div className="contact-us">
                <Link to="/contactUs" style={{ textDecoration: 'none' }}>
                  <h3>Contact Us</h3></Link>
              </div>
            </div>
          </div>
  ); 
}


export default App;
