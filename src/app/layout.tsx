import type { Metadata, Viewport } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import { RootProvider } from '@/components/RootProvider';
import Script from 'next/script';
import { SITE } from '@/lib/site';

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

/**
 * Root metadata.
 *
 * Deliberately does NOT set `openGraph.images` / `twitter.images`. Those keys
 * are inherited wholesale by every child route and would suppress each route's
 * own opengraph-image.tsx file convention. The home page's OG image is picked
 * up from src/app/opengraph-image.tsx automatically.
 *
 * `alternates.canonical` is likewise NOT set here — an inherited canonical of
 * '/' would make every subpage self-canonicalise to the home page. Each route
 * declares its own via buildMetadata() in src/lib/metadata.ts.
 */
export const metadata: Metadata = {
	metadataBase: new URL(SITE.url),
	title: {
		default: `${SITE.shortName} | Full Stack Developer in Bhatkal, India`,
		template: `%s | ${SITE.name}`,
	},
	description: SITE.description,
	keywords: [
		'Syed Safwan Pirzade',
		'Syed Safwan Peerzade',
		'software developer in Bhatkal',
		'web developer Bhatkal',
		'website developer Bhatkal',
		'software company Bhatkal',
		'ERP software Bhatkal',
		'POS billing software',
		'e-commerce website development',
		'mobile app developer Bhatkal',
		'online election voting system',
		'Co-Founder ProCraft',
	],
	authors: [{ name: SITE.name, url: SITE.url }],
	creator: SITE.name,
	publisher: SITE.name,
	openGraph: {
		title: `${SITE.shortName} | Full Stack Developer in Bhatkal, India`,
		description: SITE.description,
		url: '/',
		siteName: SITE.name,
		locale: SITE.locale,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE.shortName} | Full Stack Developer in Bhatkal, India`,
		description: SITE.description,
	},
	...(SITE.verification.google || SITE.verification.bing
		? {
				verification: {
					...(SITE.verification.google
						? { google: SITE.verification.google }
						: {}),
					...(SITE.verification.bing
						? { other: { 'msvalidate.01': SITE.verification.bing } }
						: {}),
				},
			}
		: {}),
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

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	colorScheme: 'dark light',
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#111111' },
		{ media: '(prefers-color-scheme: light)', color: '#f4f0e8' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={SITE.lang} className={`${inter.variable} ${syne.variable}`}>
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

				{/* Loaded only when NEXT_PUBLIC_GA_ID is set, so no placeholder ships. */}
				{SITE.analytics.gaId ? (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${SITE.analytics.gaId}`}
							strategy='afterInteractive'
						/>
						<Script id='ga4-init' strategy='afterInteractive'>
							{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.analytics.gaId}');`}
						</Script>
					</>
				) : null}
			</body>
		</html>
	);
}
