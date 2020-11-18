import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Languages from './Screens/Languages/Languages'
import English from './Screens/English/English'
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp'
import Join from './Components/ChatApp/Join/Join'
import Chat from './Components/ChatApp/Chat/chat'
import About from './Screens/AboutUs/About'
import Contact from './Components/ContactUs/Contact'


function App() {
  return (
    <Router>
      <Route path="/Languages/English" exact component={English} />
      <Route path="/Languages" exact component={Languages} />
      <Route path="/aboutUs" exact component={About} />
      <Route path="/contactUs" exact component={Contact} />
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/joinChat" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
