import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div id='gallery' className='max-w-[1240px] mx-auto'>
			<h1 className='text-2xl font-bold text-center px-4 py-8'>Gallery</h1>
			<div className='relative flex justify-center px-4 pb-4'>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={
							index === current
								? 'opacity-[1] ease-in duration-1000'
								: 'opacity-0'
						}
					>
						{' '}
						<FaArrowCircleLeft
							onClick={previousSlide}
							size={50}
							className='absolute top-[40%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
						/>
						{index === current && (
							<Image
								src={slide.image}
								alt='image'
								width='1440'
								height='600'
								objectFit='cover'
							/>
						)}
						<FaArrowCircleRight
							onClick={nextSlide}
							size={50}
							className='absolute top-[40%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
