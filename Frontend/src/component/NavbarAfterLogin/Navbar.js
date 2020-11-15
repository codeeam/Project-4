import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './Login';
import './Navbar.css';
import TranslateIcon from '@material-ui/icons/Translate';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {

	return (
		<Router>
			<div className="header">
				<div className="header__left">
					<TranslateIcon style={{ fontSize: 50, color: '#2e81f4' }} />
				</div>
				<div className="header__center">
					<div className="header__input">
						<SearchIcon />
						<input placeholder="Search" type="text" />
					</div>
				</div>
				{/* <div className="header__right">
					<Link to="/signup" style={{ textDecoration: 'none' }}><div className="signUp-cover"><h2 className="signUP">SignIn</h2></div></Link>
				</div> */}
			</div>
			<Route  path="/login" exact component={Login} />
		</Router>
	);
};

export default Navbar;
