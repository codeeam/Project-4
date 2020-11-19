import React from "react";
import "./ListeningNavbar.css";
import TranslateIcon from "@material-ui/icons/Translate";
import HomeIcon from "@material-ui/icons/Home";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__left">
        <TranslateIcon style={{ fontSize: 50, color: "#2e81f4" }} />
      </div>
      <div className="header__center">
        <header style={{fontSize:"24px"}}>English Grammar Courses</header>
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
