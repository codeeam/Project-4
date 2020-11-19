import React from 'react';
import Navbar from './../../Components/Languages/Navbar/Navbar'
import Feed from './../../Components/Languages/Feed/Feed'
import Footer from './../../Components/Languages/Footer/Footer'


function App() {
  return (
    <div className="App">
      <div className="head">
        <Navbar />
      </div>
      <div className="row">
        <Feed />
      </div>
      <div className="bottom-stuff">
        <Footer />
      </div>
    </div>
  );
}


export default App;
