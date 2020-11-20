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
      <h1>Turkish Courses</h1>
      <Link Link to="/Languages/Turkish/Grammar" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={EmojiFlagsIcon} title="Dilbilgisi" /></Link>
      <Link Link to="/Languages/Turkish/Listening" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={HearingIcon} title="Dinleme" /></Link>
      <Link Link to="/Languages/Turkish/Reading" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={BookIcon} title="Okuma" /></Link>
      <Link Link to="/Languages/Turkish/Writing" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={CreateIcon} title="yazı" /></Link>
      <Link Link to="/Languages/Turkish/Speaking" style={{ textDecoration: 'none', color: "black" }}><SidebarRow Icon={RecordVoiceOverIcon} title="Konuşuyorum" /></Link>
    </div>
  );
};

export default Sidebar;
