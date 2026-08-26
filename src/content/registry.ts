import type { RouteEntry } from './types';
import { SERVICE_LIST } from './services';
import { LOCATION_LIST } from './locations';
import { CASE_STUDY_LIST } from './caseStudies';

/**
 * The single enumeration of every indexable route.
 *
 * sitemap.ts, the footer link mesh and the hub pages all read from here, so
 * adding a doc to a content module propagates everywhere at once rather than
 * needing three separate hand edits.
 */
export const ROUTES: RouteEntry[] = [
	{
		path: '/',
		updated: '2026-08-26',
		changeFrequency: 'monthly',
		priority: 1.0,
		label: 'Home',
		group: 'root',
	},

	{
		path: '/services/',
		updated: '2026-08-26',
		changeFrequency: 'monthly',
		priority: 0.9,
		label: 'All services',
		group: 'service',
	},
	...SERVICE_LIST.map(
		(doc): RouteEntry => ({
			path: doc.path,
			updated: doc.updated,
			changeFrequency: 'monthly',
			priority: 0.9,
			label: doc.shortName,
			group: 'service',
		})
	),

	{
		path: '/locations/',
		updated: '2026-08-26',
		changeFrequency: 'monthly',
		priority: 0.8,
		label: 'All areas',
		group: 'location',
	},
	...LOCATION_LIST.map(
		(doc): RouteEntry => ({
			path: doc.path,
			updated: doc.updated,
			changeFrequency: 'monthly',
			// Bhatkal is the primary local target; the rest are supporting hubs.
			priority: doc.slug === 'bhatkal' ? 0.9 : 0.8,
			label: doc.city,
			group: 'location',
		})
	),

	{
		path: '/work/',
		updated: '2026-08-26',
		changeFrequency: 'monthly',
		priority: 0.8,
		label: 'All work',
		group: 'work',
	},
	...CASE_STUDY_LIST.map(
		(doc): RouteEntry => ({
			path: doc.path,
			updated: doc.updated,
			changeFrequency: 'yearly',
			priority: 0.7,
			label: doc.name,
			group: 'work',
		})
	),

	{
		path: '/answers/',
		updated: '2026-08-26',
		changeFrequency: 'monthly',
		priority: 0.8,
		label: 'FAQ',
		group: 'answers',
	},
];

export function routesInGroup(group: RouteEntry['group']): RouteEntry[] {
	return ROUTES.filter((r) => r.group === group);
}
