import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import HearingIcon from '@material-ui/icons/Hearing';
import BookIcon from '@material-ui/icons/Book';
import CreateIcon from '@material-ui/icons/Create';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<h1>English Courses</h1>
			<SidebarRow Icon={EmojiFlagsIcon} title="Grammer" />
			<SidebarRow Icon={HearingIcon} title="Listening" />
			<SidebarRow Icon={BookIcon} title="Reading" />
			<SidebarRow Icon={CreateIcon} title="Writing" />
			<SidebarRow Icon={RecordVoiceOverIcon} title="Speaking" />
		</div>
	);
};

export default Sidebar;
