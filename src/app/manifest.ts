import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${SITE.name} — ${SITE.jobTitle}`,
		short_name: SITE.shortName,
		description: SITE.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#111111',
		theme_color: '#111111',
		icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
	};
}
