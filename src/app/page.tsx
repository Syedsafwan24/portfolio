import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { Footer } from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sy3d.dev';

const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			name: 'Syed Safwan Pirzade',
			url: siteUrl,
			jobTitle: 'Frontend Developer',
			description:
				'Frontend Developer specializing in Next.js, React, and product-focused interfaces.',
		},
		{
			'@type': 'WebSite',
			name: 'Syed Safwan Pirzade Portfolio',
			url: siteUrl,
			description:
				'Portfolio showcasing frontend projects, product work, and engineering experience.',
			potentialAction: {
				'@type': 'SearchAction',
				target: `${siteUrl}/?q={search_term_string}`,
				'query-input': 'required name=search_term_string',
			},
		},
	],
};

export default function Home() {
	return (
		<main className='w-full relative'>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Nav />
			<Hero />
			<Ticker />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Certifications />
			<Footer />
		</main>
	);
}
