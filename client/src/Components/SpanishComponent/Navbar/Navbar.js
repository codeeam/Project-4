import React from 'react';
import './Navbar.css';
import TranslateIcon from '@material-ui/icons/Translate';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="header">
			<div className="header__left">
				<Link to='/Languages'>
					<TranslateIcon style={{ fontSize: 50, color: '#2e81f4' }} />
				</Link>
			</div>
			<div className="header__center">
				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
				<div className="header__option">
					<Link to='/Languages'>
						<HomeIcon fontSize="large" style={{ color: '#2e81f4' }} />
					</Link>
				</div>
			</div>
			<div className="header__right">
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
			<Link to="/joinChat">
				<IconButton>
					<ChatIcon fontSize="large" style={{ color: '#2e81f4' }} />
				</IconButton>
			</Link>
		</div>
	);
};

export default Navbar;
