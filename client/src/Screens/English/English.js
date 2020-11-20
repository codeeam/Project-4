import React from 'react';
import './English.css';
import Navbar from '../../Components/EnglishComponent/Navbar/Navbar';
import Feed from './../../Components/EnglishComponent/Feed/Feed';
import Sidebar from './../../Components/EnglishComponent/Sidebar/Sidebar';
import Footer from './../../Components/EnglishComponent/Footer/Footer';

const English = () => {
	return (
		<div className="english">
			<Navbar />
			<div className="english__body">
				<Sidebar />
				<Feed />
			</div>
			<Footer />
		</div>
	);
};

export default English;
