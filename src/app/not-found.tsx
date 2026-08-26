import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FooterLinks } from '@/components/FooterLinks';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Prose } from '@/components/ui/Prose';
import { RelatedGrid } from '@/components/ui/RelatedGrid';

/**
 * Exported to out/404.html, which GitHub Pages serves with a real HTTP 404 for
 * unmatched paths — the correct crawl signal. Links into all four hubs so a
 * mistyped URL still leads somewhere useful.
 */
export default function NotFound() {
	return (
		<main
			className='w-full relative overflow-x-hidden'
			style={{ backgroundColor: 'var(--theme-bg)' }}
		>
			<Nav />
			<div
				className='px-[3vw] md:px-[4vw]'
				style={{
					paddingTop: 'clamp(7rem, 18vh, 12rem)',
					paddingBottom: 'clamp(4rem, 8vh, 8rem)',
				}}
			>
				<SectionHeader
					kicker='404'
					heading='This page does not exist'
					as='h1'
					dividerMargin='5vh'
				/>
				<Prose
					paragraphs={[
						'The page you were looking for is not here — either the link was wrong or it has moved. Nothing is broken on your side.',
					]}
				/>
				<RelatedGrid
					title='Try one of these'
					items={[
						{
							label: 'Services',
							path: '/services/',
							note: 'ERP, POS, web, e-commerce, mobile apps and election systems.',
						},
						{
							label: 'Work',
							path: '/work/',
							note: 'Case studies of systems in production use.',
						},
						{
							label: 'Areas',
							path: '/locations/',
							note: 'Bhatkal and across coastal Karnataka.',
						},
						{
							label: 'FAQ',
							path: '/answers/',
							note: 'Direct answers to the questions people actually ask.',
						},
					]}
				/>
				<div style={{ marginTop: '6vh' }}>
					<Link
						href='/'
						className='inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[1.1vh] rounded-full border font-sans uppercase tracking-[0.14em] transition-colors duration-300'
						style={{
							fontSize: 'clamp(0.65rem, 0.75vw, 0.78rem)',
							color: 'var(--theme-heading)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						Back home
					</Link>
				</div>
			</div>
			<FooterLinks />
			<Footer />
		</main>
	);
}
