import { abs } from '@/lib/site';
import type { Path } from '@/content/types';
import { ID } from './ids';
import type { SchemaNode } from './graph';

export type BreadcrumbTrail = { name: string; path: Path }[];

/**
 * Takes the same trail array the visible <Breadcrumbs> renders, so the markup
 * and the structured data can never disagree.
 */
export function breadcrumbNode(
	trail: BreadcrumbTrail,
	path: Path
): SchemaNode {
	return {
		'@type': 'BreadcrumbList',
		'@id': ID.breadcrumb(path),
		itemListElement: trail.map((crumb, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: crumb.name,
			item: abs(crumb.path),
		})),
	};
}
