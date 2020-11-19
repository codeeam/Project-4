import React from 'react';
import './Chinese.css';
import Navbar from '../../Components/ChineseComponent/Navbar/Navbar';
import Feed from '../../Components/ChineseComponent/Feed/Feed';
import Sidebar from '../../Components/ChineseComponent/Sidebar/Sidebar';
import Footer from '../../Components/ChineseComponent/Footer/Footer';

const Chinese = () => {
	return (
		<div className="chinese">
			<Navbar />
			<div className="chinese__body">
				<Sidebar />
				<Feed />
			</div>
			<Footer />
		</div>
	);
};

export default Chinese;
