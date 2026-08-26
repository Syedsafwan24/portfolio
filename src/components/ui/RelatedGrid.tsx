import Link from 'next/link';
import type { Path } from '@/content/types';
import { Reveal } from './Reveal';

export type RelatedItem = { label: string; path: Path; note?: string };

/** Cross-links between services, locations and case studies. */
export function RelatedGrid({
	title,
	items,
}: {
	title: string;
	items: readonly RelatedItem[];
}) {
	if (!items.length) return null;

	return (
		<Reveal>
			<div style={{ marginTop: '6vh' }}>
				<h2
					className='font-display uppercase tracking-[0.2em]'
					style={{
						fontSize: 'clamp(0.65rem, 0.8vw, 0.9rem)',
						marginBottom: '3vh',
						color: 'var(--theme-muted)',
						fontWeight: 300,
					}}
				>
					{title}
				</h2>
				<div className='flex flex-col'>
					{items.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							data-cursor-text='View'
							className='w-full border-t last:border-b divider-row'
							style={{ borderColor: 'var(--theme-border)' }}
						>
							<div className='py-[2vh] flex flex-col md:flex-row md:items-center gap-[0.8vh] md:gap-[2vw]'>
								<div
									className='md:w-1/3 font-sans'
									style={{
										fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
										color: 'var(--theme-heading)',
										fontWeight: 500,
									}}
								>
									{item.label}
								</div>
								{item.note ? (
									<div
										className='md:w-2/3 font-sans'
										style={{
											fontSize: 'clamp(0.8rem, 0.92vw, 0.98rem)',
											lineHeight: 1.7,
											color: 'var(--theme-body)',
											fontWeight: 300,
										}}
									>
										{item.note}
									</div>
								) : null}
							</div>
						</Link>
					))}
				</div>
			</div>
		</Reveal>
	);
}
