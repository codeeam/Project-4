import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import HearingIcon from "@material-ui/icons/Hearing";
import BookIcon from "@material-ui/icons/Book";
import CreateIcon from "@material-ui/icons/Create";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>German Courses</h1>
	    <Link Link to="/Languages/German/Grammar" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={EmojiFlagsIcon} title="Grammatik"/></Link>
      <Link Link to="/Languages/German/Listening" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={HearingIcon} title="Hören" /></Link>
      <Link Link to="/Languages/German/Reading" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={BookIcon} title="lesen" /></Link>
      <Link Link to="/Languages/German/Writing" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={CreateIcon} title="Schreiben" /></Link>
      <Link Link to="/Languages/German/Speaking" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={RecordVoiceOverIcon} title="Sprechen" /></Link>
    </div> 
  );
};

export default Sidebar;
