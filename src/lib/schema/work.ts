import { abs } from '@/lib/site';
import type { CaseStudyDoc } from '@/content/types';
import { ID } from './ids';
import { ref, type SchemaNode } from './graph';

/**
 * Case studies model as SoftwareApplication when they describe a running
 * product, and CreativeWork otherwise.
 *
 * Credit follows the doc's `soleAuthor` flag: where the work was a team
 * effort the person is a `contributor`, not the `author`. Overstating
 * authorship on a page that cites its own sources is worse than useless — the
 * citation refutes the claim.
 */
export function workNode(doc: CaseStudyDoc): SchemaNode {
	const credit = doc.soleAuthor
		? { author: ref(ID.person()) }
		: { contributor: ref(ID.person()) };

	return {
		'@type': doc.softwareCategory ? 'SoftwareApplication' : 'CreativeWork',
		'@id': ID.work(doc.slug),
		name: doc.name,
		description: doc.summary,
		url: abs(doc.path),
		...(doc.liveUrl ? { sameAs: [doc.liveUrl] } : {}),
		...(doc.softwareCategory
			? {
					applicationCategory: doc.softwareCategory,
					operatingSystem: 'Web',
				}
			: {}),
		...credit,
		publisher: ref(ID.org()),
		datePublished: doc.year,
		...(doc.press?.length
			? {
					citation: doc.press.map((p) => ({
						'@type': 'NewsArticle',
						headline: p.title,
						url: p.url,
						datePublished: p.published,
						publisher: { '@type': 'Organization', name: p.publisher },
					})),
				}
			: {}),
		...(doc.relatedServices.length
			? { about: doc.relatedServices.map((s) => ref(ID.service(s))) }
			: {}),
	};
}
