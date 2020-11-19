import React from 'react';
import './French.css';
import Navbar from '../../Components/FrenchComponent/Navbar/Navbar';
import Feed from '../../Components/FrenchComponent/Feed/Feed';
import Sidebar from '../../Components/FrenchComponent/Sidebar/Sidebar';
import Footer from '../../Components/FrenchComponent/Footer/Footer';


const French = () => {
	return (	
			<div className="french">
				<Navbar />
				<div className="french__body">
					<Sidebar />
					<Feed />
				</div>
				<Footer />
			</div>	
	);
};

export default French;
