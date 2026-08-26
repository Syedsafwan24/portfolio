import { SITE } from '@/lib/site';
import { Reveal } from './Reveal';

/** Closing call to action. Mirrors the Footer's mailto treatment. */
export function CtaBand({
	heading,
	body,
}: {
	heading: string;
	body: string;
}) {
	return (
		<Reveal>
			<div
				className='w-full border-t'
				style={{
					borderColor: 'var(--theme-border-heading)',
					paddingTop: '6vh',
					marginTop: '4vh',
				}}
			>
				<h2
					className='font-display'
					style={{
						fontSize: 'clamp(1.8rem, 4vw, 3.6rem)',
						lineHeight: 1.05,
						letterSpacing: '-0.02em',
						color: 'var(--theme-heading)',
						fontWeight: 800,
						marginBottom: '2vh',
					}}
				>
					{heading}
				</h2>
				<p
					className='font-sans'
					style={{
						fontSize: 'clamp(0.9rem, 1vw, 1.05rem)',
						lineHeight: 1.72,
						color: 'var(--theme-body)',
						fontWeight: 300,
						maxWidth: '58ch',
						marginBottom: '3vh',
					}}
				>
					{body}
				</p>
				<a
					href={`mailto:${SITE.nap.email}`}
					data-cursor-text='Send Message'
					className='inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[1.1vh] rounded-full border font-sans uppercase tracking-[0.14em] transition-colors duration-300'
					style={{
						fontSize: 'clamp(0.65rem, 0.75vw, 0.78rem)',
						color: 'var(--theme-heading)',
						borderColor: 'var(--theme-pill-border)',
					}}
				>
					{SITE.nap.email}
					<span aria-hidden='true'>&#8599;</span>
				</a>
			</div>
		</Reveal>
	);
}
