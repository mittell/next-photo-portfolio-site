import React from 'react';
import Image1 from '../public/assets/ig-img-1.jpeg';
import Image2 from '../public/assets/ig-img-2.jpeg';
import Image3 from '../public/assets/ig-img-3.jpeg';
import Image4 from '../public/assets/ig-img-4.jpeg';
import Image5 from '../public/assets/ig-img-5.jpeg';
import Image6 from '../public/assets/ig-img-6.jpeg';
import GridImage from './GridImage';

const Grid = () => {
	return (
		<div className='max-w-[1240px] mx-auto text-center py-4'>
			<p className='text-2xl font-bold'>Follow me on Instagram</p>
			<p className='pb-4 cursor-pointer'>@emotiv</p>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
				<GridImage image={Image1} />
				<GridImage image={Image2} />
				<GridImage image={Image3} />
				<GridImage image={Image4} />
				<GridImage image={Image5} />
				<GridImage image={Image6} />
			</div>
		</div>
	);
};

export default Grid;
