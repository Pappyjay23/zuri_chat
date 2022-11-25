import React from "react";
import SmallTag from "./SmallTag";
import Logo from "../images/CatchUpLogo.png";
import ProfileImg from "../images/profileImg.png";
import { SideMenuLinks } from "../data/SideBarData";
import { Link } from "react-router-dom";
import { HiOutlineCog, HiOutlineExternalLink, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const SideBar = () => {
	return (
		<div className='w-fit border-r border-[#E3E3E3] h-screen overflow-y-scroll scrollbar-hide scroll-smooth'>
			<div className=''>
				<div className='flex px-8 pt-8 pb-4 border-b border-[#FAFAFA]'>
					<img src={Logo} alt='Logo' className='h-[25px]' />
				</div>
				<div className='pl-8 pr-2 pt-4 pb-4 flex items-start gap-3 border-b border-[#E3E3E3]'>
					<div className='flex gap-3'>
						<img src={ProfileImg} alt='Profile Img' className='h-[35px]' />
						<div>
							<p className='font-bold text-[1rem]'>Mark Essien</p>
							<p className='text-[10px] text-[#717172] font-bold'>
								Markessien37@gmail.com
							</p>
						</div>
					</div>
					<SmallTag>Verified User*</SmallTag>
				</div>

				<div className='pt-8 pb-4 pl-8 pr-4 border-b border-[#E3E3E3]'>
					<span className='text-xs text-[#717172] font-bold'>Menu</span>
					<div className='mt-4'>
						{SideMenuLinks.map((item, id) => (
							<Link to={item.linkTo} key={id}>
								<div className='hover:bg-[#FAFAFA] active:bg-[#FAFAFA] py-3 px-2 flex items-center text-[#717172] hover:text-black active:text-black transition-all duration-200 cursor-pointer mb-5'>
									<span>{item.icon}</span>
									<span className='text-sm ml-3 font-bold'>{item.name}</span>
								</div>
							</Link>
						))}
					</div>
				</div>

				<div className='pt-8 pb-32 pl-8 pr-4'>
					<div>
						<Link to='/'>
							<div className='hover:bg-[#FAFAFA] active:bg-[#FAFAFA] py-3 px-2 flex items-center text-[#717172] hover:text-black active:text-black transition-all duration-200 cursor-pointer mb-5'>
								<span>
									<HiOutlineCog />
								</span>
								<span className='text-sm ml-3 font-bold'>Settings</span>
							</div>
						</Link>
						<Link to='/'>
							<div className='hover:bg-[#FAFAFA] active:bg-[#FAFAFA] py-3 px-2 flex items-center text-[#717172] hover:text-black active:text-black transition-all duration-200 cursor-pointer mb-5'>
								<span>
									<HiOutlineExternalLink />
								</span>
								<span className='text-sm ml-3 font-bold'>Log out</span>
							</div>
						</Link>
					</div>
				</div>

				<div className="pl-8 pb-8">
                    <div className="bg-[#FAFAFA] text-[#717172] w-fit flex gap-2 p-2 rounded-[8px] cursor-pointer">
                        <div className="hover:text-[#1070FF] p-3 bg-transparent hover:bg-white hover:shadow-sm transition-all duration-150 rounded-[8px] cursor-pointer"><HiOutlineSun /></div>
                        <div className="hover:text-[#1070FF] p-3 bg-transparent hover:bg-white hover:shadow-sm transition-all duration-150 rounded-[8px] cursor-pointer"><HiOutlineMoon /></div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default SideBar;
