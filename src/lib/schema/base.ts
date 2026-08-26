import { SITE, sameAs, abs } from '@/lib/site';
import { ALL_AREAS } from '@/content/areas';
import { ID } from './ids';
import { ref, type SchemaNode } from './graph';

/** The three global entities, emitted identically on every page. */

export function personNode(): SchemaNode {
	return {
		'@type': 'Person',
		'@id': ID.person(),
		name: SITE.name,
		alternateName: [...SITE.alternateNames],
		jobTitle: SITE.jobTitle,
		description: SITE.description,
		url: abs('/'),
		email: `mailto:${SITE.nap.email}`,
		...(SITE.nap.whatsapp ? { telephone: `+${SITE.nap.whatsapp}` } : {}),
		sameAs,
		knowsAbout: [
			'Web development',
			'Next.js',
			'React',
			'React Native',
			'TypeScript',
			'ERP systems',
			'POS and billing software',
			'E-commerce development',
			'Online election and voting systems',
			'UI/UX design',
		],
		worksFor: ref(ID.org()),
		address: {
			'@type': 'PostalAddress',
			addressLocality: SITE.nap.addressLocality,
			addressRegion: SITE.nap.addressRegion,
			postalCode: SITE.nap.postalCode,
			addressCountry: SITE.nap.addressCountry,
		},
		// Independent coverage naming this person. Strongest trust signal available.
		subjectOf: [
			{ '@type': 'NewsArticle', url: SITE.press.anjumanElection2024 },
			{ '@type': 'NewsArticle', url: SITE.press.tanzeemElection2026 },
		],
	};
}

export function organizationNode(): SchemaNode {
	return {
		'@type': 'ProfessionalService',
		'@id': ID.org(),
		name: SITE.org.name,
		legalName: SITE.org.legalName,
		url: SITE.org.url,
		description: SITE.org.description,
		foundingDate: SITE.org.foundingDate,
		founder: ref(ID.person()),
		employee: ref(ID.person()),
		areaServed: ALL_AREAS.map((name) => ({ '@type': 'Place', name })),
		...(SITE.nap.whatsapp
			? {
					telephone: `+${SITE.nap.whatsapp}`,
					contactPoint: {
						'@type': 'ContactPoint',
						contactType: 'sales',
						telephone: `+${SITE.nap.whatsapp}`,
						email: SITE.nap.email,
						availableLanguage: ['en', 'ur', 'hi', 'kn'],
					},
				}
			: {}),
	};
}

export function websiteNode(): SchemaNode {
	return {
		'@type': 'WebSite',
		'@id': ID.website(),
		name: `${SITE.name} — ${SITE.jobTitle}`,
		url: abs('/'),
		inLanguage: SITE.lang,
		publisher: ref(ID.person()),
		about: ref(ID.org()),
	};
}

/** The three nodes every page includes, in one call. */
export function globalNodes(): SchemaNode[] {
	return [personNode(), organizationNode(), websiteNode()];
}
