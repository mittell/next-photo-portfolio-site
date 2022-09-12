import Head from 'next/head';

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
		</div>
	);
}
