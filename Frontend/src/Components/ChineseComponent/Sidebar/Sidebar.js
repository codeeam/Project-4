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
      <h1>Chinese Courses</h1>
	    <Link Link to="/Languages/Chinese/Grammar" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={EmojiFlagsIcon} title="語法"/></Link>
      <Link Link to="/Languages/Chinese/Listening" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={HearingIcon} title="傾聽"/></Link>
      <Link Link to="/Languages/Chinese/Reading" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={BookIcon} title="讀"/></Link>
      <Link Link to="/Languages/Chinese/Writing" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={CreateIcon} title="寫作"/></Link>
      <Link Link to="/Languages/Chinese/Speaking" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={RecordVoiceOverIcon} title="請講"/></Link>
    </div> 
  );
};

export default Sidebar;
