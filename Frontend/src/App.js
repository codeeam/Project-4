import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Languages from './Screens/Languages/Languages'
import English from './Screens/English/English'
import German from './Screens/German/German'
import French from './Screens/French/French'
import Chinese from './Screens/Chinese/Chinese'
import Spanish from './Screens/Spanish/Spanish'
import Turkish from './Screens/Turkish/Turkish'


import Grammar from './Components/EnglishComponent/Sidebar/EnglishCourses/Grammer/Grammar'
import Listening from './Components/EnglishComponent/Sidebar/EnglishCourses/Listening/Listening'



import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp'

import Join from './Components/ChatApp/Join/Join'
import Chat from './Components/ChatApp/Chat/chat'

import About from './Screens/AboutUs/About'
import Contact from './Components/ContactUs/Contact'


function App() {
  return (
    <Router>
      <Route path="/Languages" exact component={Languages} />
      <Route path="/Languages/English" exact component={English} />
      <Route path="/Languages/German" exact component={German} />
      <Route path="/Languages/French" exact component={French} />
      <Route path="/Languages/Chinese" exact component={Chinese} />
      <Route path="/Languages/Spanish" exact component={Spanish} />
      <Route path="/Languages/Turkish" exact component={Turkish} />
      
      
      <Route path="/Languages/English/Grammar" exact component={Grammar}/>
      <Route path="/Languages/English/Listening" exact component={Listening}/>
      
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      
      <Route path="/joinChat" exact component={Join} />
      <Route path="/chat" component={Chat} />

      <Route path="/aboutUs" exact component={About} />
      <Route path="/contactUs" exact component={Contact} />
    </Router>
  );
}

export default App;
