import type { ReactNode } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FooterLinks } from '@/components/FooterLinks';
import { JsonLd, type SchemaNode, type BreadcrumbTrail } from '@/lib/schema';
import { Breadcrumbs } from './Breadcrumbs';

/**
 * Shared frame for every content route.
 *
 * A server component that renders the existing client Nav and Footer — a
 * normal client boundary. Everything between them stays server-rendered, so
 * page copy never depends on JavaScript to become visible.
 */
export function PageShell({
	trail,
	graph,
	children,
}: {
	trail: BreadcrumbTrail;
	graph: SchemaNode[];
	children: ReactNode;
}) {
	return (
		<main
			className='w-full relative overflow-x-hidden'
			style={{ backgroundColor: 'var(--theme-bg)' }}
		>
			<JsonLd nodes={graph} />
			<Nav />

			<div
				className='px-[3vw] md:px-[4vw]'
				style={{
					paddingTop: 'clamp(7rem, 18vh, 12rem)',
					paddingBottom: 'clamp(4rem, 8vh, 8rem)',
				}}
			>
				<Breadcrumbs trail={trail} />
				{children}
			</div>

			<FooterLinks />
			<Footer />
		</main>
	);
}
