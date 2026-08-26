import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/template';
import { CASE_STUDIES } from '@/content/caseStudies';

const doc = CASE_STUDIES['procraft-erp'];

export const alt = doc.seo.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = 'force-static';

export default async function Image() {
	return renderOgImage({
		title: doc.seo.ogTitle ?? doc.name,
		subtitle: doc.client,
		pills: doc.metrics.map((m) => ({ top: m.value, bottom: m.label })),
	});
}
