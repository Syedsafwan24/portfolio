import { ANSWERS } from '@/content/answers';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaqList } from '@/components/ui/FaqList';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

/**
 * A short FAQ on the home page, which will always be the most-crawled URL.
 * Deliberately the five highest-intent questions only — the full set lives at
 * /answers/ and this links there rather than duplicating it.
 */
const HOME_FAQS = [
	ANSWERS[0].faqs[0], // best software developer in Bhatkal
	ANSWERS[0].faqs[1], // is there a software company in Bhatkal
	ANSWERS[1].faqs[0], // who developed the Anjuman voting app
	ANSWERS[1].faqs[1], // who designed the Tanzeem voting application
	ANSWERS[3].faqs[0], // how much does a website cost
];

export { HOME_FAQS };

export function HomeFaq() {
	return (
		<section
			id='faq'
			className='relative px-[3vw] md:px-[4vw]'
			style={{
				paddingTop: 'clamp(4rem, 8vh, 8rem)',
				paddingBottom: 'clamp(4rem, 8vh, 8rem)',
			}}
		>
			<SectionHeader kicker='Common questions' heading='FAQ' />

			<FaqList faqs={HOME_FAQS} />

			<Reveal>
				<div style={{ marginTop: '5vh' }}>
					<Link
						href='/answers/'
						data-cursor-text='View'
						className='inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[1.1vh] rounded-full border font-sans uppercase tracking-[0.14em] transition-colors duration-300'
						style={{
							fontSize: 'clamp(0.65rem, 0.75vw, 0.78rem)',
							color: 'var(--theme-heading)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						All questions
						<span aria-hidden='true'>&#8599;</span>
					</Link>
				</div>
			</Reveal>
		</section>
	);
}
