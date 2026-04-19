import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import { RootProvider } from '@/components/RootProvider';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const syne = Syne({
	variable: '--font-syne',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
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
		<html lang='en' className={`${inter.variable} ${syne.variable}`}>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(() => {
							try {
								const savedTheme = localStorage.getItem('theme');
								if (savedTheme === 'light') {
									document.documentElement.classList.add('light-mode');
								} else {
									document.documentElement.classList.remove('light-mode');
								}
							} catch (e) {
								document.documentElement.classList.remove('light-mode');
							}
						})();`,
					}}
				/>
			</head>
			<body
				className='antialiased min-h-screen'
				style={{
					backgroundColor: 'var(--theme-bg)',
					color: 'var(--color-foreground)',
				}}
			>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
