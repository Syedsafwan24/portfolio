'use client';

import { motion } from 'framer-motion';
import { FadeIn, ClipUp } from './animation/FadeIn';
import { TypingText } from './animation/TypingText';

const aboutStats = [
	{ label: '1+ YR', value: 'FREELANCE' },
	{ label: '7.7', value: 'GPA' },
	{ label: '12', value: 'PROJECTS' },
	{ label: '7', value: 'SKILL DOMAINS' },
	{ label: 'STATUS', value: 'AVAILABLE' },
];

export function About() {
	return (
		<section
			id='about'
			className='section-padding px-[20px] md:px-[80px] max-w-[1920px] mx-auto border-t border-[#0A0A0A]'
		>
			<div className='flex flex-col md:flex-row gap-8 md:gap-16'>
				<div className='md:w-1/4 flex-shrink-0'>
					<FadeIn className='font-mono text-[11px] uppercase sticky top-24'>
						01 — ABOUT
					</FadeIn>
				</div>

				<div className='md:w-3/4'>
					{/* Quote with Typing Animation */}
					<div className='mb-10'>
						<motion.p className='text-[28px] md:text-[42px] font-bold italic leading-[1.2] tracking-tight max-w-4xl'>
							<TypingText
								text={`"I don't just design or code. I own the entire product — from the first Figma frame to the live URL."`}
								delay={0.2}
								speed={0.03}
							/>
						</motion.p>
					</div>

					{/* Description */}
					<FadeIn delay={0.5} className='mb-10'>
						<p className='text-[15px] md:text-[16px] leading-[1.8] max-w-3xl text-[#0A0A0A]/80'>
							Final-year Computer Science student at{' '}
							<span className='font-semibold'>AITM Bhatkal</span>, GPA 7.7, Head
							of Design Community. Freelancing since October 2024 across clients
							in the Gulf region and India. I design interfaces, build React and
							Next.js applications, edit promotional reels, configure CI/CD
							pipelines, deploy to VPS, and use AI tools daily to ship faster
							and smarter.
						</p>
					</FadeIn>

					{/* Stats Grid */}
					<FadeIn delay={0.6}>
						<div className='grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 pt-8 border-t border-[#0A0A0A]/10'>
							{aboutStats.map((stat, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 + idx * 0.08, duration: 0.4 }}
									viewport={{ once: true, margin: '-100px' }}
									className='flex flex-col gap-1'
								>
									<span className='font-mono text-[11px] text-[#0A0A0A]/50 uppercase tracking-wider'>
										{stat.label}
									</span>
									<span className='text-[14px] md:text-[15px] font-semibold'>
										{stat.value}
									</span>
								</motion.div>
							))}
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
