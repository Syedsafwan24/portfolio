import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/template';
import { SERVICES } from '@/content/services';

const doc = SERVICES['mobile-app-development'];

export const alt = doc.seo.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = 'force-static';

export default async function Image() {
	return renderOgImage({
		title: doc.seo.ogTitle ?? doc.name,
		subtitle: doc.tagline + ' · Bhatkal, Karnataka',
		pills: doc.metrics.map((m) => ({ top: m.value, bottom: m.label })),
	});
}
