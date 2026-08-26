import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og/template';
import { ALL_ANSWERS } from '@/content/answers';

export const alt = 'FAQ — Software Development in Bhatkal';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = 'force-static';

export default async function Image() {
	return renderOgImage({
		title: 'Frequently Asked',
		subtitle: 'Software development in Bhatkal, answered directly',
		pills: [
			{ top: String(ALL_ANSWERS.length), bottom: 'Questions answered' },
		],
	});
}
