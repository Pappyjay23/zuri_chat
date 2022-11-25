import React from "react";
import ZuriLogo2 from "../assets/images/zuri-logo-titledd.svg";
import GlobalIcon from "../assets/images/global-icon.svg";

const Navbar = () => {
	return (
		<div className="flex justify-between px-2 lg:px-8 py-2 items-center border-b border-[#99999923]">
			<img src={ZuriLogo2} alt='ZuriLogo2' className="h-[50px] lg:h-[70px]" />
			<div className="hidden lg:flex text-sm font-medium gap-5">
				<span>Pricing</span>
				<span>About</span>
				<span>Download</span>
				<span>Contact</span>
			</div>
			<div className="flex text-sm items-center gap-5">
				<img src={GlobalIcon} alt='GlobalIcon' className="hidden lg:block h-[20px]" />
				<button className=" text-xs px-4 lg:px-8 py-3 border border-[#009967] text-[#009967] font-semibold rounded-[4px]">Sign Up</button>
				<button className="text-xs px-4 lg:px-8 py-3 border border-[#009967] bg-[#009967] text-white font-semibold rounded-[4px]">Log In</button>
			</div>
		</div>
	);
};

export default Navbar;
