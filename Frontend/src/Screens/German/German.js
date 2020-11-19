import React from 'react';
import './German.css';
import Navbar from '../../Components/GermanComponent/Navbar/Navbar';
import Feed from '../../Components/GermanComponent/Feed/Feed';
import Sidebar from '../../Components/GermanComponent/Sidebar/Sidebar';
import Footer from '../../Components/GermanComponent/Footer/Footer';

const German = () => {
	return (
		<div className="german">
			<Navbar />
			<div className="german__body">
				<Sidebar />
				<Feed />
			</div>
			<Footer />
		</div>
	);
};

export default German;
