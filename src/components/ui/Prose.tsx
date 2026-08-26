import { Reveal } from './Reveal';

/** Lead paragraphs, matching the body type used in About. */
export function Prose({
	paragraphs,
	maxWidth = '68ch',
}: {
	paragraphs: readonly string[];
	maxWidth?: string;
}) {
	return (
		<Reveal>
			<div className='flex flex-col gap-[2.4vh]' style={{ maxWidth }}>
				{paragraphs.map((text, i) => (
					<p
						key={i}
						className='font-sans'
						style={{
							fontSize: 'clamp(0.95rem, 1.05vw, 1.12rem)',
							lineHeight: 1.72,
							color: 'var(--theme-body)',
							fontWeight: 300,
						}}
					>
						{text}
					</p>
				))}
			</div>
		</Reveal>
	);
}
