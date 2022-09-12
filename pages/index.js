import Head from 'next/head';
import Hero from '../components/Hero';

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
		</div>
	);
}
