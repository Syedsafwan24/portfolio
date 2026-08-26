import type { LocationDoc } from '@/content/types';
import { SERVICES } from '@/content/services';
import { LOCATIONS } from '@/content/locations';
import { CASE_STUDIES } from '@/content/caseStudies';
import {
	globalNodes,
	webPageNode,
	breadcrumbNode,
	localBusinessNode,
	faqPageNode,
	ID,
	type BreadcrumbTrail,
} from '@/lib/schema';
import { PageShell } from '@/components/ui/PageShell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Prose } from '@/components/ui/Prose';
import { BulletList } from '@/components/ui/BulletList';
import { TagRow } from '@/components/ui/TagRow';
import { FaqList } from '@/components/ui/FaqList';
import { CtaBand } from '@/components/ui/CtaBand';
import { RelatedGrid } from '@/components/ui/RelatedGrid';
import { Block } from '@/components/ui/Block';

export function LocationPage({ doc }: { doc: LocationDoc }) {
	const trail: BreadcrumbTrail = [
		{ name: 'Home', path: '/' },
		{ name: 'Locations', path: '/locations/' },
		{ name: doc.city, path: doc.path },
	];

	const graph = [
		...globalNodes(),
		webPageNode({
			path: doc.path,
			title: doc.seo.title,
			description: doc.seo.description,
			primaryEntityId: ID.localBusiness(doc.slug),
			updated: doc.updated,
		}),
		breadcrumbNode(trail, doc.path),
		localBusinessNode(doc),
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

			<Block kicker='Why work with me here'>
				<BulletList items={doc.localProof} />
			</Block>

			<Block kicker={`Areas covered from ${doc.city}`}>
				<TagRow tags={doc.nearbyAreas} />
			</Block>

			<RelatedGrid
				title={`Services in ${doc.city}`}
				items={doc.servicesOffered.map((slug) => ({
					label: SERVICES[slug].name,
					path: SERVICES[slug].path,
					note: SERVICES[slug].seo.description,
				}))}
			/>

			{doc.faqs.length ? (
				<Block kicker='Questions'>
					<FaqList faqs={doc.faqs} />
				</Block>
			) : null}

			<RelatedGrid
				title='Relevant work'
				items={doc.relatedCaseStudies.map((slug) => ({
					label: CASE_STUDIES[slug].name,
					path: CASE_STUDIES[slug].path,
					note: CASE_STUDIES[slug].summary,
				}))}
			/>

			<RelatedGrid
				title='Nearby'
				items={doc.relatedLocations.map((slug) => ({
					label: LOCATIONS[slug].city,
					path: LOCATIONS[slug].path,
					note: LOCATIONS[slug].tagline,
				}))}
			/>

			<CtaBand
				heading={`Building something in ${doc.city}?`}
				body='Tell me what the problem actually is and I will tell you what it would take to solve — including when the honest answer is that you do not need custom software at all.'
			/>
		</PageShell>
	);
}
