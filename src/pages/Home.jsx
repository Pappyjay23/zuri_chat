import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<span>Home</span>
			<div className="flex flex-col">
				<Link to='/dashboard'>Dashboard</Link>
				<Link to='/contactUs'>Contact Us</Link>
				<Link to='/settings'>Settings</Link>
			</div>
		</div>
	);
};

export default Home;
