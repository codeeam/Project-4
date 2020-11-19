import React from "react";
import "./GrammerNavbar.css";
import TranslateIcon from "@material-ui/icons/Translate";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="header">
      <div className="header__left">
        <TranslateIcon style={{ fontSize: 50, color: "#2e81f4" }} />
      </div>
      <div className="header__center">
        <header style={{fontSize:"24px"}}>English Grammar Courses</header>
        <div className="header__option">
         <Link to='/Languages/English'> <HomeIcon fontSize="large" style={{ color: "#2e81f4" }} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
