/**
 * Single source of truth for site identity.
 *
 * Before this module the site URL was a magic string duplicated across
 * layout.tsx, sitemap.ts, robots.ts and StructuredData.tsx. Everything that
 * needs the domain, the name, or the NAP block imports from here instead.
 *
 * NAP (name / address / phone) consistency matters for local SEO: these
 * values must stay byte-identical to the Google Business Profile, LinkedIn
 * and every directory listing.
 */

export const SITE = {
	url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://syedsafwan.dev').replace(
		/\/+$/,
		''
	),
	name: 'Syed Safwan Pirzade',
	shortName: 'Syed Safwan',
	/** Press has spelled it both ways; both must resolve to one entity. */
	alternateNames: [
		'Syed Safwan',
		'Syed Safwan Peerzade',
		'Safwan Pirzade',
		'Safwan Bhatkal',
	],
	jobTitle: 'Co-Founder & Full Stack Developer',
	description:
		'Full stack developer in Bhatkal, Karnataka building ERP, POS and billing software, e-commerce sites, mobile apps and online election systems for businesses.',
	lang: 'en-IN',
	locale: 'en_IN',

	org: {
		name: 'ProCraft',
		legalName: 'ProCraft Digital Agency',
		url: 'https://procraft.ae',
		description:
			'Digital agency offering comprehensive web and software solutions.',
		foundingDate: '2025-06',
	},

	nap: {
		/**
		 * Full international number, digits only, no '+' or spaces — the format
		 * wa.me requires. e.g. '919876543210' for +91 98765 43210.
		 * Leave empty to hide every WhatsApp link and omit `telephone` from schema.
		 */
		whatsapp: '917899986307',
		addressLocality: 'Bhatkal',
		addressRegion: 'Karnataka',
		postalCode: '581320',
		addressCountry: 'IN',
		email: 'syedsafwanpirzade@gmail.com',
	},

	geo: { latitude: 13.9855, longitude: 74.555 },

	socials: {
		github: 'https://github.com/Syedsafwan24',
		linkedin: 'https://linkedin.com/in/syedsafwanpirzade',
	},

	/** Independent press coverage naming Syed Safwan. Strongest E-E-A-T signal on the site. */
	press: {
		anjumanElection2024:
			'https://mail.sahilonline.org/bhatkal-anjuman-elections-computerized-voting-app-delivers-rapid-results',
		tanzeemElection2026:
			'https://sahilonline.org/bhatkal-tanzeem-elections-witness-major-shift-over-50-pc-new-faces-enter-executive-body',
	},

	resume: '/SyedSafwan_Resume_Final.pdf',

	/**
	 * Set these as environment variables (and as repo Actions variables for CI).
	 * Each block is omitted entirely when its value is unset, so nothing ships
	 * with a placeholder ID.
	 */
	analytics: {
		gaId: process.env.NEXT_PUBLIC_GA_ID || '',
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
		bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
	},
} as const;

/** Every profile the person entity is known by, for schema `sameAs`. */
export const sameAs: string[] = [
	...Object.values(SITE.socials),
	SITE.org.url,
];

/** next.config.ts sets trailingSlash: true — every path must end in a slash. */
export function withSlash(path: string): string {
	if (path === '/') return '/';
	const p = path.startsWith('/') ? path : `/${path}`;
	return p.endsWith('/') ? p : `${p}/`;
}

/** Absolute URL for a site-relative path, trailing slash guaranteed. */
export function abs(path: string): string {
	return `${SITE.url}${withSlash(path)}`;
}

/**
 * Schema.org @id builder. Fragments must be ABSOLUTE urls (origin + path +
 * #fragment), never a bare '#fragment', or cross-page entity merging fails.
 *
 *   entityId('person')                        -> https://syedsafwan.dev/#person
 *   entityId('service', '/services/erp/')     -> https://syedsafwan.dev/services/erp/#service
 */
export function entityId(fragment: string, path = '/'): string {
	return `${abs(path)}#${fragment}`;
}
