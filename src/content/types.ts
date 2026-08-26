/**
 * Content model for the local-SEO / AEO page set.
 *
 * Page content lives in typed modules here; rendering lives in shared server
 * templates. Each route file is a thin shell that pairs one doc with one
 * template, so copy edits never touch JSX and the sitemap, footer mesh and
 * breadcrumbs all derive from a single enumeration (registry.ts).
 */

export type ServiceSlug =
	| 'election-voting-systems'
	| 'erp-software'
	| 'pos-billing-software'
	| 'web-development'
	| 'ecommerce-development'
	| 'mobile-app-development';

export type LocationSlug =
	| 'bhatkal'
	| 'karwar'
	| 'kumta'
	| 'honnavar'
	| 'udupi'
	| 'mangalore';

export type CaseStudySlug =
	| 'election-systems'
	| 'procraft-erp'
	| 'bcj-awards-portal'
	| 'bcj-cms'
	| 'smart-arrow';

/** ISO date, hand-bumped when a doc is meaningfully edited. Drives sitemap lastModified. */
export type IsoDate = `${number}-${number}-${number}`;

/**
 * Canonical path. The template literal type enforces the trailing slash that
 * next.config.ts `trailingSlash: true` requires — a missing slash is a compile
 * error rather than a redirect hop on every internal link.
 */
export type Path = '/' | `/${string}/`;

/** Answers run 40-70 words, answer-first. This is the text an LLM lifts verbatim. */
export interface Faq {
	q: string;
	a: string;
}

export interface Metric {
	value: string;
	label: string;
}

export interface Bullet {
	title: string;
	body: string;
}

export interface Seo {
	/** Absolute <title>, 50-60 chars. */
	title: string;
	/** 150-160 chars. */
	description: string;
	keywords?: readonly string[];
	/** Small label baked into the generated OG image. */
	ogEyebrow?: string;
	/** Large line baked into the generated OG image. */
	ogTitle?: string;
}

interface DocBase {
	path: Path;
	updated: IsoDate;
	/** One crawlable heading string containing the target keyword naturally. */
	h1: string;
	seo: Seo;
	/** Lead paragraphs. The first must answer the page's implied question directly. */
	intro: readonly string[];
	faqs: readonly Faq[];
}

export interface ServiceDoc extends DocBase {
	slug: ServiceSlug;
	name: string;
	/** Nav / footer / card label. */
	shortName: string;
	tagline: string;
	/** schema.org Service.serviceType */
	serviceType: string;
	offerings: readonly Bullet[];
	process: readonly Bullet[];
	stack: readonly string[];
	metrics: readonly Metric[];
	relatedCaseStudies: readonly CaseStudySlug[];
	relatedServices: readonly ServiceSlug[];
	primaryLocations: readonly LocationSlug[];
}

export interface LocationDoc extends DocBase {
	slug: LocationSlug;
	city: string;
	/** One-line summary used on cross-link rows. */
	tagline: string;
	region: string;
	country: 'IN';
	geo: { latitude: number; longitude: number };
	/** Smaller towns covered by this hub. Feeds Service.areaServed Place nodes. */
	nearbyAreas: readonly string[];
	localProof: readonly Bullet[];
	servicesOffered: readonly ServiceSlug[];
	relatedLocations: readonly LocationSlug[];
	relatedCaseStudies: readonly CaseStudySlug[];
}

export interface PressCitation {
	title: string;
	publisher: string;
	url: string;
	published: IsoDate;
}

export interface CaseStudyDoc extends DocBase {
	slug: CaseStudySlug;
	name: string;
	client: string;
	year: string;
	status: 'LIVE' | 'IN DEVELOPMENT' | 'DELIVERED';
	liveUrl?: string;
	summary: string;
	problem: readonly string[];
	approach: readonly Bullet[];
	outcome: readonly Bullet[];
	metrics: readonly Metric[];
	tech: readonly string[];
	/** Present -> SoftwareApplication, absent -> CreativeWork. */
	softwareCategory?: string;
	/** Independent coverage. Rendered as visible outbound links and as schema `citation`. */
	press?: readonly PressCitation[];
	/**
	 * Credit is shared where the work was a team effort. When false, schema uses
	 * `contributor` rather than `author` so the page never overstates authorship
	 * beyond what its own cited sources say.
	 */
	soleAuthor: boolean;
	relatedServices: readonly ServiceSlug[];
}

export interface FaqGroup {
	title: string;
	faqs: readonly Faq[];
}

export type RouteGroup =
	| 'root'
	| 'service'
	| 'location'
	| 'work'
	| 'answers'
	| 'hire';

export interface RouteEntry {
	path: Path;
	updated: IsoDate;
	changeFrequency: 'weekly' | 'monthly' | 'yearly';
	priority: number;
	/** Reused by the footer link mesh and breadcrumbs. */
	label: string;
	group: RouteGroup;
}
