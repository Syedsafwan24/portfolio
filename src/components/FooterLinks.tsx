import Link from 'next/link';
import { routesInGroup } from '@/content/registry';
import type { RouteGroup } from '@/content/types';
import { SITE } from '@/lib/site';

const COLUMNS: { title: string; group: RouteGroup }[] = [
	{ title: 'Services', group: 'service' },
	{ title: 'Locations', group: 'location' },
	{ title: 'Case Studies', group: 'work' },
];

/**
 * Server-rendered link mesh, generated from the route registry so adding a
 * page in src/content propagates here and to the sitemap at the same time.
 *
 * Rendered as a sibling above <Footer />, which is a client component — this
 * keeps the mesh out of the client bundle entirely.
 */
export function FooterLinks() {
	const columns = COLUMNS.map((column) => ({
		...column,
		routes: routesInGroup(column.group),
	})).filter((column) => column.routes.length > 0);

	if (!columns.length) return null;

	const labelStyle = {
		fontSize: 'clamp(0.6rem, 0.7vw, 0.75rem)',
		color: 'var(--theme-muted)',
		fontWeight: 300,
	} as const;

	const linkStyle = {
		fontSize: 'clamp(0.8rem, 0.92vw, 0.98rem)',
		color: 'var(--theme-body)',
		fontWeight: 300,
	} as const;

	return (
		<div
			className='w-full px-[3vw] md:px-[4vw] border-t'
			style={{
				borderColor: 'var(--theme-border)',
				paddingTop: '6vh',
				paddingBottom: '2vh',
			}}
		>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-[4vh] md:gap-[3vw]'>
				{columns.map((column) => (
					<nav key={column.group} aria-label={column.title}>
						<div
							className='font-sans uppercase tracking-[0.15em]'
							style={{ ...labelStyle, marginBottom: '2vh' }}
						>
							{column.title}
						</div>
						<ul className='flex flex-col gap-[1.2vh]'>
							{column.routes.map((route) => (
								<li key={route.path}>
									<Link
										href={route.path}
										className='font-sans transition-colors duration-300 breadcrumb-link'
										style={linkStyle}
									>
										{route.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				))}

				<nav aria-label='Site'>
					<div
						className='font-sans uppercase tracking-[0.15em]'
						style={{ ...labelStyle, marginBottom: '2vh' }}
					>
						Site
					</div>
					<ul className='flex flex-col gap-[1.2vh]'>
						<li>
							<Link
								href='/'
								className='font-sans transition-colors duration-300 breadcrumb-link'
								style={linkStyle}
							>
								Home
							</Link>
						</li>
						<li>
							<a
								href={SITE.resume}
								className='font-sans transition-colors duration-300 breadcrumb-link'
								style={linkStyle}
							>
								Resume
							</a>
						</li>
						<li>
							<a
								href={SITE.socials.github}
								rel='me noopener'
								target='_blank'
								className='font-sans transition-colors duration-300 breadcrumb-link'
								style={linkStyle}
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href={SITE.socials.linkedin}
								rel='me noopener'
								target='_blank'
								className='font-sans transition-colors duration-300 breadcrumb-link'
								style={linkStyle}
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
