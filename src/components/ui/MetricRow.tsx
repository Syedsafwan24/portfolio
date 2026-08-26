import type { Metric } from '@/content/types';
import { Reveal } from './Reveal';

/** The three-up metric strip from the featured project cards in Projects. */
export function MetricRow({ metrics }: { metrics: readonly Metric[] }) {
	if (!metrics.length) return null;

	return (
		<Reveal>
			<div
				className='w-full grid grid-cols-1 sm:grid-cols-3 border-t border-b'
				style={{ borderColor: 'var(--theme-border)' }}
			>
				{metrics.map((metric, i) => (
					<div
						key={i}
						className='py-[2.4vh] sm:px-[1.5vw] flex flex-col gap-[0.6vh]'
					>
						<div
							className='font-display'
							style={{
								fontSize: 'clamp(1.3rem, 2vw, 2rem)',
								lineHeight: 1,
								letterSpacing: '-0.02em',
								color: 'var(--theme-heading)',
								fontWeight: 800,
							}}
						>
							{metric.value}
						</div>
						<div
							className='font-sans uppercase tracking-[0.15em]'
							style={{
								fontSize: 'clamp(0.6rem, 0.7vw, 0.75rem)',
								color: 'var(--theme-muted)',
								fontWeight: 300,
							}}
						>
							{metric.label}
						</div>
					</div>
				))}
			</div>
		</Reveal>
	);
}
