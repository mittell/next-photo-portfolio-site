import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Photo Portfolio</title>
				<meta
					name='description'
					content='A Photo Portfolio site, built with Next.js and Tailwind'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero
				heading='Emotiv Photography'
				message='I capture moments in life and keep them alive.'
			/>
			<Slider slides={SliderData} />
		</div>
	);
}
