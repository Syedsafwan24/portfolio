import { abs } from '@/lib/site';
import { AREAS_BY_HUB } from '@/content/areas';
import type { ServiceDoc } from '@/content/types';
import { ID } from './ids';
import { ref, type SchemaNode } from './graph';

export function serviceNode(doc: ServiceDoc): SchemaNode {
	// Areas come from the hubs this service is actually sold into, so the claim
	// is always backed by a location page that names those places in prose.
	const areas = doc.primaryLocations.flatMap((slug) => [
		...AREAS_BY_HUB[slug],
	]);

	return {
		'@type': 'Service',
		'@id': ID.service(doc.slug),
		name: doc.name,
		serviceType: doc.serviceType,
		description: doc.seo.description,
		url: abs(doc.path),
		provider: ref(ID.org()),
		areaServed: areas.map((name) => ({ '@type': 'Place', name })),
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: doc.name,
			itemListElement: doc.offerings.map((offering) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: offering.title,
					description: offering.body,
				},
			})),
		},
		...(doc.relatedServices.length
			? { isRelatedTo: doc.relatedServices.map((s) => ref(ID.service(s))) }
			: {}),
	};
}
