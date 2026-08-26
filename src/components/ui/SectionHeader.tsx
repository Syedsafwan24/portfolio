import { Reveal } from './Reveal';

/**
 * The kicker / heading / divider idiom used by every section on the home page
 * (About, Skills, Projects, Experience), lifted verbatim so
 * content pages are visually indistinguishable from it.
 */
export function SectionHeader({
	kicker,
	heading,
	as: Tag = 'h2',
	dividerMargin = '8vh',
}: {
	kicker: string;
	heading: string;
	as?: 'h1' | 'h2';
	dividerMargin?: string;
}) {
	return (
		<Reveal>
			<div
				className='font-display uppercase tracking-[0.2em] section-kicker'
				style={{
					fontSize: 'clamp(0.65rem, 0.8vw, 0.9rem)',
					marginBottom: '3vh',
					color: 'var(--theme-muted)',
					fontWeight: 300,
				}}
			>
				{kicker}
			</div>

			<Tag
				className='font-display section-heading'
				style={{
					fontSize:
						Tag === 'h1'
							? 'clamp(2.4rem, 5.4vw, 5.6rem)'
							: 'clamp(3rem, 7vw, 7.5rem)',
					lineHeight: 1.02,
					letterSpacing: '-0.02em',
					marginBottom: '4vh',
					color: 'var(--theme-heading)',
					fontWeight: 800,
				}}
			>
				{heading}
			</Tag>

			<div
				className='section-heading-divider'
				style={{
					width: '100%',
					height: '1px',
					background: 'var(--theme-border-heading)',
					marginBottom: dividerMargin,
				}}
			/>
		</Reveal>
	);
}
