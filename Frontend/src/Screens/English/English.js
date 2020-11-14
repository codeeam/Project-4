import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './English.css';
import Navbar from '../../Components/EnglishComponent/Navbar/Navbar';
import Feed from './../../Components/EnglishComponent/Feed/Feed';
import Sidebar from './../../Components/EnglishComponent/Sidebar/Sidebar';

const English = () => {
	return (
		<div className="english">
			<Navbar />
			<div className="english__body">
				<Sidebar />
				<Feed />
			</div>
		</div>
	);
};

export default English;
