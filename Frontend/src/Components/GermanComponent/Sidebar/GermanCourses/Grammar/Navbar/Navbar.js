import React from 'react';
import TranslateIcon from '@material-ui/icons/Translate';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="header">
			<div className="header__left">
				<Link to='/Languages'>
					<TranslateIcon style={{ fontSize: 50, color: '#2e81f4' }} />
				</Link>
			</div>
			<div className="header__center">
				<h2>Engilsh Grammar</h2>
			</div>
			<div className="header__right">
				<IconButton>
					<Link to='/Languages'>
						<HomeIcon fontSize="large" style={{ color: '#2e81f4' }} />
					</Link>
				</IconButton>
				<Link to="/joinChat">
					<IconButton>
						<ChatIcon fontSize="large" style={{ color: '#2e81f4' }} />
					</IconButton>
				</Link>
			</div>
		</div>

	);
};

export default Navbar;
