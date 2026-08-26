import Link from 'next/link';
import type { BreadcrumbTrail } from '@/lib/schema';

/**
 * Renders the same trail array that breadcrumbNode() turns into JSON-LD, so
 * the visible crumbs and the structured data cannot drift apart.
 */
export function Breadcrumbs({ trail }: { trail: BreadcrumbTrail }) {
	return (
		<nav
			aria-label='Breadcrumb'
			className='font-sans uppercase tracking-[0.15em]'
			style={{
				fontSize: 'clamp(0.6rem, 0.7vw, 0.75rem)',
				color: 'var(--theme-muted)',
				fontWeight: 300,
				marginBottom: '4vh',
			}}
		>
			<ol className='flex flex-wrap items-center gap-[0.6rem]'>
				{trail.map((crumb, i) => {
					const isLast = i === trail.length - 1;
					return (
						<li key={crumb.path} className='flex items-center gap-[0.6rem]'>
							{isLast ? (
								<span aria-current='page'>{crumb.name}</span>
							) : (
								<>
									<Link
										href={crumb.path}
										className='transition-colors duration-300 breadcrumb-link'
									>
										{crumb.name}
									</Link>
									<span aria-hidden='true'>/</span>
								</>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
