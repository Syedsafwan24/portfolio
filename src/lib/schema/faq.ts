import type { Faq, Path } from '@/content/types';
import { ID } from './ids';
import { ref, type SchemaNode } from './graph';

/**
 * Only ever emit this for FAQs that are actually rendered on the page.
 * Structured data describing content a visitor cannot see is a violation and
 * costs rich-result eligibility. Text inside a closed <details> does count as
 * visible, which is why FaqList uses that rather than a JS accordion.
 */
export function faqPageNode(faqs: readonly Faq[], path: Path): SchemaNode {
	return {
		'@type': 'FAQPage',
		'@id': ID.faq(path),
		mainEntityOfPage: ref(ID.webpage(path)),
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: { '@type': 'Answer', text: faq.a },
		})),
	};
}
