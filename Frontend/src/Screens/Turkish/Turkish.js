import React from 'react';
import './Turkish.css';
import Navbar from '../../Components/TurkishComponent/Navbar/Navbar';
import Feed from '../../Components/TurkishComponent/Feed/Feed';
import Sidebar from '../../Components/TurkishComponent/Sidebar/Sidebar';
import Footer from '../../Components/TurkishComponent/Footer/Footer';


const Turkish = () => {
	return (	
			<div className="turkish">
				<Navbar />
				<div className="turkish__body">
					<Sidebar />
					<Feed />
				</div>
				<Footer />
			</div>	
	);
};

export default Turkish;
