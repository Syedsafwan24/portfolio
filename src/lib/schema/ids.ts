import { entityId } from '@/lib/site';
import type {
	CaseStudySlug,
	LocationSlug,
	Path,
	ServiceSlug,
} from '@/content/types';

/**
 * Every @id is an absolute URL (origin + path + #fragment). A bare '#fragment'
 * is only unique within one document, so cross-page entity merging fails.
 */
export const ID = {
	person: () => entityId('person'),
	org: () => entityId('organization'),
	website: () => entityId('website'),
	profilePage: () => entityId('profilepage'),
	webpage: (path: Path) => entityId('webpage', path),
	breadcrumb: (path: Path) => entityId('breadcrumb', path),
	faq: (path: Path) => entityId('faq', path),
	service: (slug: ServiceSlug) => entityId('service', `/services/${slug}/`),
	localBusiness: (slug: LocationSlug) =>
		entityId('localbusiness', `/locations/${slug}/`),
	work: (slug: CaseStudySlug) => entityId('work', `/work/${slug}/`),
} as const;
