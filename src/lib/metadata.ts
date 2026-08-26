import type { Metadata } from 'next';
import { SITE, withSlash } from './site';

/**
 * Builds a route's Metadata object.
 *
 * EVERY page must declare metadata through this helper. Next merges metadata
 * shallowly per top-level key, so a page that omits `alternates` inherits
 * `alternates.canonical` from the root layout — which would self-canonicalise
 * it to the home page and drop it from the index. buildMetadata always sets
 * `alternates`, which is the guard against that.
 */
export interface BuildMetadataInput {
	/** Site-relative path, e.g. '/services/erp-software/'. */
	path: string;
	/** Absolute <title> — bypasses the root layout's "%s | Syed Safwan Pirzade" template. */
	title: string;
	description: string;
	keywords?: readonly string[];
	ogType?: 'website' | 'article' | 'profile';
	ogTitle?: string;
	ogDescription?: string;
	/** Omit to let the route's own opengraph-image.tsx file convention populate it. */
	image?: { url: string; width: number; height: number; alt: string };
	noindex?: boolean;
	publishedTime?: string;
	modifiedTime?: string;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
	const path = withSlash(input.path);
	const ogTitle = input.ogTitle ?? input.title;
	const ogDescription = input.ogDescription ?? input.description;

	return {
		title: { absolute: input.title },
		description: input.description,
		...(input.keywords ? { keywords: [...input.keywords] } : {}),
		alternates: { canonical: path },
		openGraph: {
			type: input.ogType ?? 'website',
			title: ogTitle,
			description: ogDescription,
			url: path,
			siteName: SITE.name,
			locale: SITE.locale,
			...(input.image ? { images: [input.image] } : {}),
			...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
			...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
		},
		twitter: {
			card: 'summary_large_image',
			title: ogTitle,
			description: ogDescription,
			...(input.image ? { images: [input.image.url] } : {}),
		},
		...(input.noindex ? { robots: { index: false, follow: true } } : {}),
	};
}
