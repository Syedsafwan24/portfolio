import type { ServiceDoc } from '@/content/types';
import { SERVICES } from '@/content/services';
import { CASE_STUDIES } from '@/content/caseStudies';
import { LOCATIONS } from '@/content/locations';
import {
	globalNodes,
	webPageNode,
	breadcrumbNode,
	serviceNode,
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

export function ServicePage({ doc }: { doc: ServiceDoc }) {
	const trail: BreadcrumbTrail = [
		{ name: 'Home', path: '/' },
		{ name: 'Services', path: '/services/' },
		{ name: doc.shortName, path: doc.path },
	];

	const graph = [
		...globalNodes(),
		webPageNode({
			path: doc.path,
			title: doc.seo.title,
			description: doc.seo.description,
			primaryEntityId: ID.service(doc.slug),
			updated: doc.updated,
		}),
		breadcrumbNode(trail, doc.path),
		serviceNode(doc),
		...(doc.faqs.length ? [faqPageNode(doc.faqs, doc.path)] : []),
	];

	return (
		<PageShell trail={trail} graph={graph}>
			<SectionHeader
				kicker={doc.tagline}
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

			<Block kicker='What this includes'>
				<BulletList items={doc.offerings} />
			</Block>

			<Block kicker='How it works'>
				<BulletList items={doc.process} />
			</Block>

			<Block kicker='Built with'>
				<TagRow tags={doc.stack} />
			</Block>

			{doc.faqs.length ? (
				<Block kicker='Questions'>
					<FaqList faqs={doc.faqs} />
				</Block>
			) : null}

			<RelatedGrid
				title='Related work'
				items={doc.relatedCaseStudies.map((slug) => ({
					label: CASE_STUDIES[slug].name,
					path: CASE_STUDIES[slug].path,
					note: CASE_STUDIES[slug].summary,
				}))}
			/>

			<RelatedGrid
				title='Where I work'
				items={doc.primaryLocations.map((slug) => ({
					label: LOCATIONS[slug].city,
					path: LOCATIONS[slug].path,
					note: LOCATIONS[slug].tagline,
				}))}
			/>

			<RelatedGrid
				title='Other services'
				items={doc.relatedServices.map((slug) => ({
					label: SERVICES[slug].name,
					path: SERVICES[slug].path,
					note: SERVICES[slug].tagline,
				}))}
			/>

			<CtaBand
				heading='Start a project'
				body={`Tell me what you are trying to build and I will tell you honestly whether ${doc.shortName.toLowerCase()} is the right fit, what it would take, and roughly what it costs.`}
			/>
		</PageShell>
	);
}
