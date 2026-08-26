import { abs, SITE } from '@/lib/site';
import type { LocationDoc } from '@/content/types';
import { ID } from './ids';
import { ref, type SchemaNode } from './graph';

/**
 * A city page describes a real service area, not a second business, so this is
 * modelled as a branch of the one organisation rather than a standalone
 * LocalBusiness with its own identity.
 */
export function localBusinessNode(doc: LocationDoc): SchemaNode {
	return {
		'@type': 'ProfessionalService',
		'@id': ID.localBusiness(doc.slug),
		name: `${SITE.org.name} — ${doc.city}`,
		description: doc.seo.description,
		url: abs(doc.path),
		parentOrganization: ref(ID.org()),
		founder: ref(ID.person()),
		employee: ref(ID.person()),
		address: {
			'@type': 'PostalAddress',
			addressLocality: doc.city,
			addressRegion: doc.region,
			addressCountry: doc.country,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: doc.geo.latitude,
			longitude: doc.geo.longitude,
		},
		areaServed: doc.nearbyAreas.map((name) => ({ '@type': 'Place', name })),
		makesOffer: doc.servicesOffered.map((slug) => ({
			'@type': 'Offer',
			itemOffered: ref(ID.service(slug)),
		})),
	};
}
