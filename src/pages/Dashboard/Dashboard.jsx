import React from "react";
import MainBoard from "../../components/MainBoard";
import SideBar from "../../components/SideBar";

const Dashboard = () => {
	return (
		<div className='flex w-full'>
			<SideBar />
			<MainBoard />
		</div>
	);
};

export default Dashboard;
