import { ANSWERS, ALL_ANSWERS } from '@/content/answers';
import { SERVICE_LIST } from '@/content/services';
import { LOCATIONS } from '@/content/locations';
import {
	globalNodes,
	webPageNode,
	breadcrumbNode,
	faqPageNode,
	ID,
	type BreadcrumbTrail,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/metadata';
import { PageShell } from '@/components/ui/PageShell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Prose } from '@/components/ui/Prose';
import { FaqList } from '@/components/ui/FaqList';
import { Block } from '@/components/ui/Block';
import { CtaBand } from '@/components/ui/CtaBand';
import { RelatedGrid } from '@/components/ui/RelatedGrid';

const title =
	'FAQ — Software Development in Bhatkal | Syed Safwan';
const description =
	'Direct answers about software, web, ERP, POS and election system development in Bhatkal — who builds it, what it costs and how long each project takes.';

export const metadata = buildMetadata({
	path: '/answers/',
	title,
	description,
	keywords: [
		'software developer Bhatkal',
		'who builds websites in Bhatkal',
		'Anjuman election software',
		'Tanzeem voting application',
		'website cost Bhatkal',
	],
});

const trail: BreadcrumbTrail = [
	{ name: 'Home', path: '/' },
	{ name: 'FAQ', path: '/answers/' },
];

const graph = [
	...globalNodes(),
	webPageNode({
		path: '/answers/',
		title,
		description,
		primaryEntityId: ID.person(),
		updated: '2026-08-26',
	}),
	breadcrumbNode(trail, '/answers/'),
	faqPageNode(ALL_ANSWERS, '/answers/'),
];

export default function Page() {
	return (
		<PageShell trail={trail} graph={graph}>
			<SectionHeader
				kicker='Frequently asked'
				heading='Software Development in Bhatkal — Frequently Asked Questions'
				as='h1'
				dividerMargin='5vh'
			/>

			<Prose
				paragraphs={[
					'The questions people actually ask before commissioning software here, answered directly. Where a real number exists it is given; where the honest answer is that it depends, that is stated plainly along with what it depends on.',
					'If your question is not covered here, please ask — it will be added for the next person.',
				]}
			/>

			{ANSWERS.map((group) => (
				<Block key={group.title} kicker={group.title}>
					<FaqList faqs={group.faqs} />
				</Block>
			))}

			<RelatedGrid
				title='Services in detail'
				items={SERVICE_LIST.map((doc) => ({
					label: doc.name,
					path: doc.path,
					note: doc.tagline,
				}))}
			/>

			<RelatedGrid
				title='Working in Bhatkal'
				items={[
					{
						label: LOCATIONS.bhatkal.city,
						path: LOCATIONS.bhatkal.path,
						note: LOCATIONS.bhatkal.seo.description,
					},
				]}
			/>

			<CtaBand
				heading='Still have a question?'
				body='Ask it directly. I would rather answer honestly up front, including telling you that what you need is not something I should build.'
			/>
		</PageShell>
	);
}
