import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const GridImage = ({ image }) => {
	return (
		<div className='relative'>
			<Image
				src={image}
				alt='Image'
				className='w-full h-full'
				layout='responsive'
			/>
			<div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 group cursor-pointer'>
				<p className='text-gray-300 hidden group-hover:block'>
					<FaInstagram size={30} className='z-10' />
				</p>
			</div>
		</div>
	);
};

export default GridImage;
