import React from 'react';
import './Navbar.css';
import TranslateIcon from '@material-ui/icons/Translate';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Navbar = () => {
	return (
		<div className="header">
			<div className="header__left">
				<TranslateIcon style={{ fontSize: 50, color: '#2e81f4'}} />
			</div>
			<div className="header__center">
				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
				<div className="header__option">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SupervisedUserCircleIcon fontSize="large" />
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
		</div>
	);
};

export default Navbar;
