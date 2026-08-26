import type { CaseStudyDoc } from '@/content/types';
import { SERVICES } from '@/content/services';
import {
	globalNodes,
	webPageNode,
	breadcrumbNode,
	workNode,
	faqPageNode,
	ID,
	type BreadcrumbTrail,
} from '@/lib/schema';
import { PageShell } from '@/components/ui/PageShell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Prose } from '@/components/ui/Prose';
import { BulletList } from '@/components/ui/BulletList';
import { MetricRow } from '@/components/ui/MetricRow';
import { TagRow } from '@/components/ui/TagRow';
import { FaqList } from '@/components/ui/FaqList';
import { CtaBand } from '@/components/ui/CtaBand';
import { RelatedGrid } from '@/components/ui/RelatedGrid';
import { Block } from '@/components/ui/Block';
import { Reveal } from '@/components/ui/Reveal';

export function CaseStudyPage({ doc }: { doc: CaseStudyDoc }) {
	const trail: BreadcrumbTrail = [
		{ name: 'Home', path: '/' },
		{ name: 'Work', path: '/work/' },
		{ name: doc.name, path: doc.path },
	];

	const graph = [
		...globalNodes(),
		webPageNode({
			path: doc.path,
			title: doc.seo.title,
			description: doc.seo.description,
			primaryEntityId: ID.work(doc.slug),
			updated: doc.updated,
		}),
		breadcrumbNode(trail, doc.path),
		workNode(doc),
		...(doc.faqs.length ? [faqPageNode(doc.faqs, doc.path)] : []),
	];

	return (
		<PageShell trail={trail} graph={graph}>
			<SectionHeader
				kicker={`${doc.client} · ${doc.year} · ${doc.status}`}
				heading={doc.h1}
				as='h1'
				dividerMargin='5vh'
			/>

			<Prose paragraphs={doc.intro} />

			{doc.metrics.length ? (
				<div style={{ marginTop: '6vh' }}>
					<MetricRow metrics={doc.metrics} />
				</div>
			) : null}

			<Block kicker='The problem'>
				<Prose paragraphs={doc.problem} />
			</Block>

			<Block kicker='Approach'>
				<BulletList items={doc.approach} />
			</Block>

			<Block kicker='Outcome'>
				<BulletList items={doc.outcome} />
			</Block>

			{doc.press?.length ? (
				<Block kicker='Independent coverage'>
					<div className='flex flex-col'>
						{doc.press.map((item) => (
							<Reveal key={item.url}>
								<a
									href={item.url}
									target='_blank'
									rel='noopener'
									data-cursor-text='Read article'
									className='w-full border-t last:border-b divider-row block'
									style={{ borderColor: 'var(--theme-border)' }}
								>
									<div className='py-[2.2vh] flex flex-col md:flex-row md:items-baseline gap-[0.8vh] md:gap-[2vw]'>
										<div
											className='md:w-1/4 font-sans uppercase tracking-[0.15em]'
											style={{
												fontSize: 'clamp(0.6rem, 0.7vw, 0.75rem)',
												color: 'var(--theme-muted)',
												fontWeight: 300,
											}}
										>
											{item.publisher} · {item.published}
										</div>
										<div
											className='md:w-3/4 font-sans'
											style={{
												fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
												lineHeight: 1.6,
												color: 'var(--theme-heading)',
												fontWeight: 400,
											}}
										>
											{item.title}{' '}
											<span aria-hidden='true'>&#8599;</span>
										</div>
									</div>
								</a>
							</Reveal>
						))}
					</div>
				</Block>
			) : null}

			<Block kicker='Built with'>
				<TagRow tags={doc.tech} />
			</Block>

			{doc.liveUrl ? (
				<Block kicker='Live'>
					<Reveal>
						<a
							href={doc.liveUrl}
							target='_blank'
							rel='noopener'
							data-cursor-text='Click to visit'
							className='inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[1.1vh] rounded-full border font-sans tracking-[0.08em] transition-colors duration-300'
							style={{
								fontSize: 'clamp(0.72rem, 0.85vw, 0.88rem)',
								color: 'var(--theme-heading)',
								borderColor: 'var(--theme-pill-border)',
							}}
						>
							{doc.liveUrl.replace(/^https?:\/\//, '')}
							<span aria-hidden='true'>&#8599;</span>
						</a>
					</Reveal>
				</Block>
			) : null}

			{doc.faqs.length ? (
				<Block kicker='Questions'>
					<FaqList faqs={doc.faqs} />
				</Block>
			) : null}

			<RelatedGrid
				title='Related services'
				items={doc.relatedServices.map((slug) => ({
					label: SERVICES[slug].name,
					path: SERVICES[slug].path,
					note: SERVICES[slug].tagline,
				}))}
			/>

			<CtaBand
				heading='Need something like this?'
				body='If you are solving a similar problem, tell me about it. I will be straight with you about what applies from this project and what would be different for yours.'
			/>
		</PageShell>
	);
}
