import type { Path } from '@/content/types';
import {
	globalNodes,
	collectionPageNode,
	breadcrumbNode,
	type BreadcrumbTrail,
} from '@/lib/schema';
import { PageShell } from '@/components/ui/PageShell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Prose } from '@/components/ui/Prose';
import { CtaBand } from '@/components/ui/CtaBand';
import { RelatedGrid, type RelatedItem } from '@/components/ui/RelatedGrid';

/** Index page for the services, locations and work sections. */
export function HubPage({
	path,
	kicker,
	h1,
	title,
	description,
	intro,
	listTitle,
	items,
	ctaHeading,
	ctaBody,
}: {
	path: Path;
	kicker: string;
	h1: string;
	title: string;
	description: string;
	intro: readonly string[];
	listTitle: string;
	items: readonly RelatedItem[];
	ctaHeading: string;
	ctaBody: string;
}) {
	const trail: BreadcrumbTrail = [
		{ name: 'Home', path: '/' },
		{ name: kicker, path },
	];

	const graph = [
		...globalNodes(),
		collectionPageNode({
			path,
			title,
			description,
			itemPaths: items.map((item) => item.path),
		}),
		breadcrumbNode(trail, path),
	];

	return (
		<PageShell trail={trail} graph={graph}>
			<SectionHeader kicker={kicker} heading={h1} as='h1' dividerMargin='5vh' />
			<Prose paragraphs={intro} />
			<RelatedGrid title={listTitle} items={items} />
			<CtaBand heading={ctaHeading} body={ctaBody} />
		</PageShell>
	);
}
