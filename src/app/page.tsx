import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { Footer } from '@/components/Footer';

import { StructuredData } from '@/components/StructuredData';

export default function Home() {
	return (
		<main
			className='w-full relative overflow-x-hidden'
			style={{ backgroundColor: 'var(--theme-bg)' }}
		>
			<StructuredData />
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
