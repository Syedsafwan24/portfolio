import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sy3d.dev';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
