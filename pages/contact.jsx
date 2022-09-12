import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => {
	return (
		<div>
			<Hero
				heading='Contact'
				message='Please use the form below for more information and quotes.'
			/>
			<Contact />
		</div>
	);
};

export default contact;
