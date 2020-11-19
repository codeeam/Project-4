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
      <h1>French Courses</h1>
	    <Link Link to="/Languages/French/Grammar" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={EmojiFlagsIcon} title="Grammaire"/></Link>
      <Link Link to="/Languages/French/listening" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={HearingIcon} title="Écoute" /></Link>
      <Link Link to="/Languages/French/Reading" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={BookIcon} title="En train de lire" /></Link>
      <Link Link to="/Languages/French/Writing" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={CreateIcon} title="L'écriture" /></Link>
      <Link Link to="/Languages/French/Speaking" style={{ textDecoration: 'none' ,color: "black" }}><SidebarRow Icon={RecordVoiceOverIcon} title="Parlant" /></Link>
    </div> 
  );
};

export default Sidebar;
