'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE } from './animation/FadeIn';
import { useRef } from 'react';

export function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end start'],
	});

	const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

	return (
		<section
			ref={sectionRef}
			className='relative h-[100vh] flex flex-col px-[3vw] md:px-[4vw] overflow-hidden hero-mobile'
		>
			{/* Noise Overlay */}
			<div
				className='absolute inset-0 z-0 pointer-events-none opacity-[0.04]'
				style={{
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
				}}
			></div>

			{/* ── TOP: Label ── */}
			<motion.div
				className='relative z-10 pt-[16vh] md:pt-[18vh] hero-mobile-top'
				style={{ opacity: textOpacity, y: textY }}
			>
				<motion.div
					initial={{ opacity: 0, y: '1vh' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
					className='font-sans text-[min(2.2vw,0.65rem)] md:text-[min(0.7vw,0.65rem)] tracking-[0.2em] font-medium uppercase'
					style={{ color: 'var(--theme-accent-label)' }}
				>
					FRONTEND DEVELOPER & UI/UX DESIGNER
				</motion.div>
			</motion.div>

			{/* ── MIDDLE: Giant Name (fills width) ── */}
			<motion.div
				className='relative z-10 flex-1 flex items-center w-full hero-mobile-heading-wrap'
				style={{ opacity: textOpacity, y: textY }}
			>
				<div
					className='w-full font-display font-extrabold leading-[0.82] tracking-[-0.04em]'
					style={{ color: 'var(--theme-heading)' }}
				>
					<motion.div
						initial={{ opacity: 0, y: '5vh' }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.35,
							duration: 1.2,
							ease: [0.16, 1, 0.3, 1],
						}}
						className='overflow-hidden w-full'
					>
						{/* Use CSS to stretch text to fill the full container width */}
						<div
							className='w-full whitespace-nowrap hero-mobile-name-line-1'
							style={{
								fontSize: 'clamp(3rem, 14vw, 16rem)',
								display: 'block',
							}}
						>
							Syed
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: '5vh' }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.5,
							duration: 1.2,
							ease: [0.16, 1, 0.3, 1],
						}}
						className='overflow-hidden w-full'
					>
						<div
							className='w-full whitespace-nowrap hero-mobile-name-line-2'
							style={{
								fontSize: 'clamp(3rem, 11vw, 13rem)',
								display: 'block',
							}}
						>
							Safwan
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* ── Vertical SCROLL indicator ── */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8 }}
				className='absolute right-[3vw] md:right-[4vw] top-[45%] -translate-y-1/2 flex-col items-center gap-[1.5vh] hidden lg:flex z-20'
			>
				<div className='relative w-[2px] h-[4vh] overflow-hidden opacity-60'>
					<motion.div
						className='w-full h-[2vh]'
						style={{ backgroundColor: 'var(--theme-orange)' }}
						animate={{ y: ['-100%', '200%'], opacity: [0, 1, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				</div>
				<span
					className='text-[min(0.65vw,0.55rem)] tracking-[0.25em] uppercase font-sans'
					style={{
						writingMode: 'vertical-rl',
						textOrientation: 'mixed',
						color: 'var(--theme-white-text)',
					}}
				>
					SCROLL
				</span>
			</motion.div>

			{/* ── BOTTOM: Bio left + Pills right ── */}
			<motion.div
				initial={{ opacity: 0, y: '2vh' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 0.8, ease: EASE }}
				className='relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-[4vh] md:gap-0 pb-[5vh] hero-mobile-bottom'
			>
				{/* Left: description */}
				<p
					className='text-[clamp(0.75rem,0.85vw,0.95rem)] font-light w-full md:max-w-[22vw] leading-[1.7] font-sans hero-mobile-description'
					style={{ color: 'var(--theme-white-text)' }}
				>
					Building end-to-end digital experiences. Frontend Developer with
					experience across modern frameworks, UI/UX systems and product-focused
					development.
				</p>

				{/* Right: pills */}
				<div className='flex flex-col items-start md:items-end gap-[1vh] hero-mobile-badges'>
					<div
						className='px-[1.2vw] py-[0.7vh] rounded-full border text-[min(2.2vw,0.6rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase flex items-center gap-[0.4vw]'
						style={{
							color: 'var(--theme-green)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						<span
							className='w-[0.45vh] h-[0.45vh] min-w-[4px] min-h-[4px] rounded-full'
							style={{ backgroundColor: 'var(--theme-green)' }}
						/>
						AVAILABLE FOR WORK
					</div>

					<div
						className='px-[1.2vw] py-[0.7vh] rounded-full border text-[min(2.2vw,0.6rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase'
						style={{
							color: 'var(--theme-white-text)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						REACT & NEXT.JS
					</div>

					<div
						className='px-[1.2vw] py-[0.7vh] rounded-full border text-[min(2.2vw,0.6rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase'
						style={{
							color: 'var(--theme-white-text)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						UI DESIGN
					</div>

					<div
						className='px-[1.2vw] py-[0.7vh] rounded-full border text-[min(2.2vw,0.6rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase'
						style={{
							color: 'var(--theme-white-text)',
							borderColor: 'var(--theme-pill-border)',
						}}
					>
						DEVOPS & CI/CD
					</div>
				</div>
			</motion.div>
		</section>
	);
}
