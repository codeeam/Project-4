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
      <h1>Spanish Courses</h1>
      <Link Link to="/Languages/Spanish/Grammar" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={EmojiFlagsIcon} title="Gramática" /></Link>
      <Link Link to="/Languages/Spanish/Listening" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={HearingIcon} title="Escuchando" /></Link>
      <Link Link to="/Languages/Spanish/Reading" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={BookIcon} title="Leyendo" /></Link>
      <Link Link to="/Languages/Spanish/Writing" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={CreateIcon} title="Escritura" /></Link>
      <Link Link to="/Languages/Spanish/Speaking" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={RecordVoiceOverIcon} title="Hablando" /></Link>
    </div>
  );
};

export default Sidebar;
