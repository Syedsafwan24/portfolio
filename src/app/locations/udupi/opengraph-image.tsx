import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/template';
import { LOCATIONS } from '@/content/locations';

const doc = LOCATIONS['udupi'];

export const alt = doc.seo.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = 'force-static';

export default async function Image() {
	return renderOgImage({
		title: doc.city,
		subtitle: 'Software & web development · ' + doc.region,
		pills: [
			{ top: String(doc.servicesOffered.length), bottom: 'Services' },
			{ top: String(doc.nearbyAreas.length), bottom: 'Areas covered' },
		],
	});
}
