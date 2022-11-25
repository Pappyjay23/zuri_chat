import React from "react";

const ContactMainBoard = () => {
	return (
		<div className='flex-1'>
			<div className='w-[70%] mx-auto py-10'>
				<div className='text-center'>
					<h1 className='text-[1.3rem] font-medium'>Contact Us</h1>
					<p className='text-sm'>
						Let us know how we can help. We will respond as soon as possible!
					</p>
				</div>

				<form className='mt-8'>
					<div className='flex flex-col mb-6'>
						<label htmlFor='fullName' className='text-sm font-semibold'>
							Full Name
						</label>
						<input
							required
							id='fullName'
							type='text'
							placeholder='Enter your First and Last Name'
							className='p-3 bg-white border border-[#999899] text-[#151517] placeholder:text-[#999899] font-medium rounded-[4px] text-sm mt-3 outline-none'
						/>
					</div>
					<div className='flex flex-col mb-6'>
						<label htmlFor='email' className='text-sm font-semibold'>
							Email Address
						</label>
						<input
							required
							id='email'
							type='email'
							placeholder='Type your email here'
							className='p-3 bg-white border border-[#999899] text-[#151517] placeholder:text-[#999899] font-medium rounded-[4px] text-sm mt-3 outline-none'
						/>
					</div>
					<div className='flex flex-col mb-6'>
						<label htmlFor='phoneNumber' className='text-sm font-semibold'>
							Phone Number
						</label>
						<input
							required
							id='phoneNumber'
							type='phone'
							placeholder='Type your phone number here'
							className='p-3 bg-white border border-[#999899] text-[#151517] placeholder:text-[#999899] font-medium rounded-[4px] text-sm mt-3 outline-none'
						/>
					</div>
					<div className='flex flex-col mb-6'>
						<label htmlFor='message' className='text-sm font-semibold'>
							Message
						</label>
						<textarea
							required
							id='message'
							type='phone'
							placeholder='Type your message here'
							className='p-3 h-[190px] bg-white border border-[#999899] text-[#151517] placeholder:text-[#999899] font-medium rounded-[4px] text-sm mt-3 outline-none'
						/>
					</div>
					<div className='flex mb-6'>
						<input
							required
							id='message'
							type='checkbox'
							placeholder='Type your message here'
							className=''
						/>
						<label htmlFor='message' className='text-sm font-medium ml-2'>
							I will like to recieve your news
						</label>
					</div>

					<div>
						<button className='px-8 py-3 border border-[#009967] bg-[#009967] text-white font-semibold rounded-[4px]'>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactMainBoard;
