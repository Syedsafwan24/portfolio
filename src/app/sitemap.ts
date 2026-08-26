import type { MetadataRoute } from 'next';
import { ROUTES } from '@/content/registry';
import { abs } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * Derived from the route registry so it can never drift from the real pages.
 *
 * `lastModified` comes from each doc's hand-bumped `updated` date rather than
 * `new Date()`. A build-time timestamp rewrites every entry on every CI run,
 * which teaches search engines the signal is noise; a stable value means a
 * diff in sitemap.xml represents a real content change.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return ROUTES.map((route) => ({
		url: abs(route.path),
		lastModified: route.updated,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));
}
