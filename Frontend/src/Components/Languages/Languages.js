import React from 'react';
import { BrowserRouter as Router, Link,  } from 'react-router-dom';
import Navbar from './Navbar'
import English from '../../Screens/English/English'




function App() {
  return (
    <Router>
      
        <div className="App">
          <div className="head">
            <Navbar />
          </div>
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
          <div className="bottom-stuff">
            <div className="bottom">
                
              <div className="about-us"><Link to="/aboutUs" style={{ textDecoration: 'none' }}><h3>About Us</h3></Link></div>
              <div className="contact-us"><Link to="/contactUs" style={{ textDecoration: 'none' }}><h3>Contact Us</h3></Link> </div>
            </div>
            <div className="header__right">
					{/* <Link to="/login" style={{ textDecoration: 'none' }}><div className="signUp-cover"><h2 className="signUP">SignIn</h2></div></Link> */}
				</div>
          </div>
              </div>
              
    
      
      </Router>
      

  );
   
}


export default App;
