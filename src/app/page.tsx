import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { HomeFaq, HOME_FAQS } from '@/components/HomeFaq';
import { Footer } from '@/components/Footer';

import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';
import {
	JsonLd,
	globalNodes,
	profilePageNode,
	breadcrumbNode,
	faqPageNode,
} from '@/lib/schema';

const title = `${SITE.shortName} | Full Stack Developer in Bhatkal, India`;

export const metadata = buildMetadata({
	path: '/',
	title,
	description: SITE.description,
});

const graph = [
	...globalNodes(),
	profilePageNode({ title, description: SITE.description }),
	breadcrumbNode([{ name: 'Home', path: '/' }], '/'),
	faqPageNode(HOME_FAQS, '/'),
];

export default function Home() {
	return (
		<main
			className='w-full relative overflow-x-hidden'
			style={{ backgroundColor: 'var(--theme-bg)' }}
		>
			<JsonLd nodes={graph} />
			<Nav />
			<Hero />
			<Ticker />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<HomeFaq />
			<Footer />
		</main>
	);
}
