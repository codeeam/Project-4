import React from 'react';
import './Spanish.css';
import Navbar from '../../Components/SpanishComponent/Navbar/Navbar';
import Feed from '../../Components/SpanishComponent/Feed/Feed';
import Sidebar from '../../Components/SpanishComponent/Sidebar/Sidebar';
import Footer from '../../Components/SpanishComponent/Footer/Footer';

const Spanish = () => {
	return (
		<div className="spanish">
			<Navbar />
			<div className="spanish__body">
				<Sidebar />
				<Feed />
			</div>
			<Footer />
		</div>
	);
};

export default Spanish;
