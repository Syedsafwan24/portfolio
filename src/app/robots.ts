import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * Explicit allow rules for AI answer engines.
 *
 * A bare `User-agent: *  Allow: /` already permits these crawlers, but naming
 * them is the cheapest AEO signal available: several operators document that
 * an explicit rule for their agent is treated as a clearer opt-in than a
 * wildcard, and it makes the site's stance auditable.
 */
const AI_AGENTS = [
	// OpenAI — training, search index, and live user fetches
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	// Anthropic
	'ClaudeBot',
	'Claude-User',
	'Claude-SearchBot',
	'anthropic-ai',
	// Perplexity
	'PerplexityBot',
	'Perplexity-User',
	// Google Gemini / AI Overviews
	'Google-Extended',
	// Apple — Safari, Siri, Apple Intelligence
	'Applebot',
	'Applebot-Extended',
	// Others
	'Amazonbot',
	'cohere-ai',
	'CCBot',
];

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: AI_AGENTS, allow: '/' },
		],
		sitemap: `${SITE.url}/sitemap.xml`,
		host: SITE.url,
	};
}
