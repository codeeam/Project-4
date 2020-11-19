import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ Icon, title }) => {
	return (
		<div className="sidebarRow">
			{Icon && <Icon />}
			<p>{title}</p>
		</div>
	);
};

export default SidebarRow;