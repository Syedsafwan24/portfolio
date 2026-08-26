import type { Bullet } from '@/content/types';
import { Reveal } from './Reveal';

/**
 * The bordered divider-row list used across the home page sections, reused
 * process steps and outcomes. Hover styling is CSS-only here so the component
 * stays a server component.
 */
export function BulletList({ items }: { items: readonly Bullet[] }) {
	return (
		<div className='flex flex-col'>
			{items.map((item, i) => (
				<Reveal key={i}>
					<div
						className='w-full border-t last:border-b divider-row'
						style={{ borderColor: 'var(--theme-border)' }}
					>
						<div className='py-[2.2vh] flex flex-col md:flex-row gap-[1vh] md:gap-[2vw] items-start'>
							<div
								className='md:w-1/3 font-sans'
								style={{
									fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
									color: 'var(--theme-heading)',
									fontWeight: 500,
								}}
							>
								{item.title}
							</div>
							<div
								className='md:w-2/3 font-sans'
								style={{
									fontSize: 'clamp(0.82rem, 0.95vw, 1rem)',
									lineHeight: 1.7,
									color: 'var(--theme-body)',
									fontWeight: 300,
								}}
							>
								{item.body}
							</div>
						</div>
					</div>
				</Reveal>
			))}
		</div>
	);
}
