import { Reveal } from './Reveal';

/** The pill row used for tech tags on project cards and in the hero. */
export function TagRow({ tags }: { tags: readonly string[] }) {
	if (!tags.length) return null;

	return (
		<Reveal>
			<div className='flex flex-wrap gap-[0.6rem]'>
				{tags.map((tag) => (
					<span
						key={tag}
						className='px-[1rem] py-[0.5vh] rounded-full border font-sans uppercase tracking-[0.12em]'
						style={{
							fontSize: 'clamp(0.6rem, 0.68vw, 0.72rem)',
							color: 'var(--theme-white-text)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						{tag}
					</span>
				))}
			</div>
		</Reveal>
	);
}
