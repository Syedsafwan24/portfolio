import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

/** A labelled sub-section on a content page. Reuses the section kicker style. */
export function Block({
	kicker,
	children,
}: {
	kicker: string;
	children: ReactNode;
}) {
	return (
		<section style={{ marginTop: '7vh' }}>
			<Reveal>
				<h2
					className='font-display uppercase tracking-[0.2em]'
					style={{
						fontSize: 'clamp(0.65rem, 0.8vw, 0.9rem)',
						marginBottom: '3vh',
						color: 'var(--theme-muted)',
						fontWeight: 300,
					}}
				>
					{kicker}
				</h2>
			</Reveal>
			{children}
		</section>
	);
}
