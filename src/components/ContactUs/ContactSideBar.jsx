import React from "react";
import MessageIcon from "../../assets/images/contactUs/message-icon.svg";
import LocationIcon from "../../assets/images/contactUs/location-icon.svg";
import PhoneIcon from "../../assets/images/contactUs/phone-icon.svg";

import FacebookIcon from "../../assets/images/contactUs/facebook-icon.svg";
import TwitterIcon from "../../assets/images/contactUs/twitter-icon.svg";
import InstagramIcon from "../../assets/images/contactUs/instagram-icon.svg";
import LinkedInIcon from "../../assets/images/contactUs/linkedin-icon.svg";

const ContactSideBarData = [
	{
		icon: MessageIcon,
		title: "Chat to us",
		desc: "Our team is here to help",
		addDesc: "",
		attachment: "zuri.chat@gmail.com",
	},
	{
		icon: LocationIcon,
		title: "Office",
		desc: "Come say hello at our office",
		addDesc: "Beavaton, Oregon",
		attachment: "Washington County, USA",
	},
	{
		icon: PhoneIcon,
		title: "Phone",
		desc: "Mon-Fri 8am - 5pm",
		addDesc: "",
		attachment: "763-654-5423",
	},
];

const socialIcons = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon];

const ContactSideBar = () => {
	return (
		<div className='bg-[#009967] text-white mb-0 px-8 py-10'>
			<div className='text-center'>
				<h1 className='text-[1.3rem] font-medium'>Get in Touch</h1>
				<p className='text-sm'>Our friendly team is always here to chat.</p>
			</div>

			<div className='mt-8'>
				{ContactSideBarData.map((data, index) => (
					<div key={index} className='flex items-start gap-3 mb-8'>
						<div>
							<img src={data.icon} alt='MessageIcon' className='h-[15px]' />
						</div>
						<div className='-mt-1 flex flex-col gap-1'>
							<p className='font-semibold'>{data.title}</p>
							<p className='text-xs'>{data.desc}</p>
							<p className='text-xs'>{data.addDesc}</p>
							<p className='font-semibold text-sm'>{data.attachment}</p>
						</div>
					</div>
				))}
			</div>

			<div className='mt-4 flex gap-5'>
				{socialIcons.map((item, index) => (
					<img src={item} key={index} alt='FacebookIcon' className="h-[25px]" />
				))}
			</div>
		</div>
	);
};

export default ContactSideBar;
