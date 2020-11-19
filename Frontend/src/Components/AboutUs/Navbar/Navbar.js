import React from 'react';
import './Navbar.css';
import TranslateIcon from '@material-ui/icons/Translate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="header">
			<div className="header__left">
				<Link to='/Languages'>
					<TranslateIcon style={{ fontSize: 50, color: '#2e81f4' }} />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
