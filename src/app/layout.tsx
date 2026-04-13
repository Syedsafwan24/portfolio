import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { RootProvider } from '@/components/RootProvider';

const jetBrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
	weight: ['400'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sy3d.dev';
const siteTitle = 'Syed Safwan Pirzade';
const siteDescription =
	'Frontend Developer building high-performance web products with Next.js, React, and modern UI systems.';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: `${siteTitle} | Portfolio`,
		template: `%s | ${siteTitle}`,
	},
	description: siteDescription,
	keywords: [
		'Syed Safwan Pirzade',
		'Frontend Developer',
		'Next.js Developer',
		'React Developer',
		'Portfolio',
		'UI UX',
	],
	authors: [{ name: siteTitle }],
	creator: siteTitle,
	publisher: siteTitle,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: `${siteTitle} | Portfolio`,
		description: siteDescription,
		url: '/',
		siteName: siteTitle,
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: `${siteTitle} | Portfolio`,
		description: siteDescription,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${jetBrainsMono.variable}`}>
			<body className='antialiased font-sans min-h-screen text-black bg-white selection:bg-black selection:text-white'>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
