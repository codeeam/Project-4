import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/Languages/French" style={{ textDecoration: 'none' }} className="/Languages/French">
              <div className="card">
              <h3>French</h3>
              </div>
            </Link>
          </div>
        <div className="column">
          <Link to="/Languages/Spanish" style={{ textDecoration: 'none' }} className="/Languages/Spanish">
              <div className="card">
              <h3>Spanish</h3>
              </div>
            </Link>
          </div>
        <div className="column">
            <Link to="/Languages/Turkish" style={{ textDecoration: 'none' }} className="/Languages/Turkish">
              <div className="card">
              <h3>Turkish</h3>
              </div>
            </Link>
          </div>
        <div className="column">
           <Link to="/Languages/German" style={{ textDecoration: 'none' }} className="/Languages/German">
              <div className="card">
              <h3>German</h3>
              </div>
            </Link>
          </div>
        <div className="column">
            <Link to="/Languages/Chinese" style={{ textDecoration: 'none' }} className="/Languages/Chinese">
              <div className="card">
              <h3>Chinese</h3>
              </div>
            </Link>
          </div>
          </div>
        </div>
  ); 
}


export default App;
