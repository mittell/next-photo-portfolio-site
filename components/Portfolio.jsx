import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
	return (
		<div className='max-w-[1240px] pb-4 pt-5 text-center'>
			<h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
			<div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4'>
				<div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
					<Image
						src='https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
						alt='Image'
						layout='responsive'
						width='677'
						height='451'
					/>
				</div>
				<div className='w-full h-full'>
					<Image
						src='https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1454&q=80'
						alt='Image'
						width='215'
						height='217'
						layout='responsive'
						objectFit='cover'
					/>
				</div>
				<div className='w-full h-full'>
					<Image
						src='https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
						alt='Image'
						width='215'
						height='217'
						layout='responsive'
						objectFit='cover'
					/>
				</div>
				<div className='w-full h-full'>
					<Image
						src='https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
						alt='Image'
						width='215'
						height='217'
						layout='responsive'
						objectFit='cover'
					/>
				</div>
				<div className='w-full h-full'>
					<Image
						src='https://images.unsplash.com/photo-1526374073174-7661a8028eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
						alt='Image'
						width='215'
						height='217'
						layout='responsive'
						objectFit='cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
