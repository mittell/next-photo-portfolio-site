import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [colour, setColour] = useState('transparent');
	const [textColour, setTextColour] = useState('white');

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const changeColour = () => {
			if (window.scrollY >= 90) {
				setColour('#ffffff');
				setTextColour('#000000');
			} else {
				setColour('transparent');
				setTextColour('#ffffff');
			}
		};
		window.addEventListener('scroll', changeColour);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${colour}` }}
			className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
		>
			<div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
				<Link href='/'>
					<h1 style={{ color: `${textColour}` }} className='font-bold text-4xl'>
						Emotiv
					</h1>
				</Link>
				<ul style={{ color: `${textColour}` }} className='hidden sm:flex'>
					<li className='p-4'>
						<Link href='/'>Home</Link>
					</li>
					<li className='p-4'>
						<Link href='/#gallery'>Gallery</Link>
					</li>
					<li className='p-4'>
						<Link href='/work'>Work</Link>
					</li>
					<li className='p-4'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>

				<div
					className='block sm:hidden z-10 cursor-pointer'
					onClick={handleNav}
				>
					{nav ? (
						<AiOutlineClose size={20} style={{ color: '`${textColour}`' }} />
					) : (
						<AiOutlineMenu size={20} style={{ color: `${textColour}` }} />
					)}
				</div>

				<div
					className={
						nav
							? "'sm:hidden absolute top-0 left-0 right-0 botton-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'"
							: 'sm:hidden absolute top-0 left-[-100%] right-0 botton-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
					}
				>
					<ul>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'
						>
							<Link href='/'>Home</Link>
						</li>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'
						>
							<Link href='/#gallery'>Gallery</Link>
						</li>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'
						>
							<Link href='/work'>Work</Link>
						</li>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'
						>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
