import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/template';

export const alt =
	'Syed Safwan Pirzade — Full Stack Developer in Bhatkal, Karnataka';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = 'force-static';

export default async function Image() {
	return renderOgImage({
		title: 'Syed Safwan',
		subtitle: 'Full Stack Developer · Bhatkal, Karnataka',
		pills: [
			{ top: 'ERP & POS', bottom: 'Business software' },
			{ top: 'Elections', bottom: 'Community voting' },
			{ top: 'Available', bottom: 'Status' },
		],
	});
}
