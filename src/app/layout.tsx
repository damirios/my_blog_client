import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
	title: 'Damir Site',
	description: 'My site about my web development path, presenting my projects and blog',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<link rel="rel" href="/favicon.ico" sizes='any' />
			<body>
				<div className="wrapper">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
