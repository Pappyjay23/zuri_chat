import React from "react";
import ContactMainBoard from "../../components/ContactUs/ContactMainBoard";
import ContactSideBar from "../../components/ContactUs/ContactSideBar";
import Navbar from "../../components/Navbar";

const ContactUs = () => {
	return (
		<div>
			<Navbar />
			<div className='flex w-full h-full'>
				<ContactSideBar />
				<ContactMainBoard />
			</div>
		</div>
	);
};

export default ContactUs;
