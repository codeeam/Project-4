import React, {  useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Languages from './Components/Languages/Languages'
import English from './Screens/English/English'

// import English from './Screens/English/English'
// import Navbar from './Components/Languages/Navbar'
import Signup from './Components/SignUp/Signup'
// import Join from './Components/ChatApp/Join/Join'
// import Chat from './Components/ChatApp/Chat/chat'
// import About from './Components/AboutUs/About'
// import Contact from './Components/ContactUs/Contact'


function App() {
  useEffect(() => {
    console.log("It's running");
  }, [])

  return (
    <Router>
      <Route  path="/Languages/English" exact component={English}/>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/Languages" exact component={Languages} />
      
      
      

      {/*<Route path ="/signup" component={signup}/>
      <Route exact path="/aboutUs" component={About}/>
      <Route exact path="/contactUs" component={Contact}/>
      <Route exact path="/english" component={English}/>
      <Route path="/joinChat" exact component={Join}/>
  <Route path="/chat" component={Chat}/>*/}
    </Router>

  );
   
}

export default App;
