import React from 'react';
import './Navbar.css';
import TranslateIcon from '@material-ui/icons/Translate';

const Navbar = () => {
	return (
		<div className="header">
			<div className="header__left">
				<TranslateIcon style={{ fontSize: 50, color: '#2e81f4' }} />
			</div>
		</div>
	);
};

export default Navbar;
