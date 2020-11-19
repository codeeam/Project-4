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
      <h1>English Courses</h1>
	    <Link Link to="/Languages/English/Grammar" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={EmojiFlagsIcon} title="Grammar"/></Link>
      <Link Link to="/Languages/English/Listening" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={HearingIcon} title="Listening" /></Link>
      <Link Link to="/Languages/English/Reading" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={BookIcon} title="Reading" /></Link>
      <Link Link to="/Languages/English/Writing" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={CreateIcon} title="Writing" /></Link>
      <Link Link to="/Languages/English/Speaking" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={RecordVoiceOverIcon} title="Speaking" /></Link>
    </div> 
  );
};

export default Sidebar;
