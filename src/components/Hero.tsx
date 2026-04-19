'use client';

import { motion } from 'framer-motion';
import { EASE } from './animation/FadeIn';

export function Hero() {
	return (
		<section
			className='relative flex flex-col pt-20 px-5 pb-10 overflow-hidden hero-mobile md:px-[3vw] md:p-0 md:m-0 md:block'
			style={{ height: '100svh', minHeight: '100svh' }}
		>
			{/* Noise Overlay */}
			<div
				className='absolute inset-0 z-0 pointer-events-none opacity-[0.04]'
				style={{
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
				}}
			></div>

			{/* ── ALL CONTENT GROUPED IN ONE CONTAINER ── */}
			<motion.div className='relative z-10 w-full flex flex-col flex-1 min-h-0 justify-center hero-content-wrapper md:static md:block'>
				{/* Label */}
				<motion.div
					initial={{ opacity: 0, y: '1vh' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
					className='mt-0 md:mt-0 font-sans text-[min(2.2vw,0.65rem)] mb-1 md:mb-3 md:text-[min(0.7vw,0.65rem)] tracking-[0.2em] font-light uppercase hero-mobile-label md:absolute md:top-[24vh] md:left-[4vw] md:z-20'
					style={{ color: 'var(--theme-heading)' }}
				>
					FRONTEND DEVELOPER & UI/UX DESIGNER
				</motion.div>

				{/* Name */}
				<div className='w-full mt-8 hero-mobile-name-center md:block md:flex-none'>
					<div
						className='w-full flex-none font-display font-extrabold leading-[0.8] tracking-[-0.04em] hero-mobile-name-container md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[4vw] md:right-0 md:w-full md:overflow-hidden md:flex-none'
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
							<div
								className='w-full whitespace-nowrap hero-mobile-name-line hero-mobile-name-line-1 text-[clamp(5.1rem,22vw,8.6rem)] md:text-[clamp(6rem,12vw,16rem)] md:leading-[0.85]'
								style={{ display: 'block' }}
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
								className='w-full whitespace-nowrap hero-mobile-name-line hero-mobile-name-line-2 text-[clamp(5.1rem,22vw,8.6rem)] md:text-[clamp(6rem,12vw,16rem)] md:leading-[0.85]'
								style={{ display: 'block' }}
							>
								Safwan
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* ── Vertical SCROLL indicator ── */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8 }}
				className='absolute right-4 bottom-12 flex flex-col items-center gap-[1.5vh] z-20 hero-mobile-scroll md:right-[1.5rem] md:top-[15vh] md:translate-y-0 md:gap-[0.75rem]'
			>
				<div className='relative w-[2px] h-16 overflow-hidden opacity-60 hero-mobile-scroll-line md:w-[1px] md:h-[5vh] md:mb-[0.5rem]'>
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
					className='text-[0.55rem] tracking-[0.25em] uppercase font-sans hero-mobile-scroll-text'
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
				className='relative z-10 w-full flex flex-col items-start mt-auto pb-12 hero-mobile-bottom md:absolute md:inset-0 md:pointer-events-none md:p-0 md:m-0'
			>
				{/* Left: description */}
				<p
					className='text-[clamp(0.95rem,4.2vw,1.08rem)] md:text-[clamp(0.75rem,0.85vw,0.95rem)] font-light md:font-light w-full max-w-[36ch] md:max-w-[30ch] leading-[1.72] font-sans hero-mobile-description md:absolute md:bottom-[10vh] md:left-[4vw] md:pointer-events-auto'
					style={{ color: 'var(--theme-white-text)' }}
				>
					Building end-to-end digital experiences. Frontend Developer with
					experience across modern frameworks, UI/UX systems and product-focused
					development.
				</p>

				{/* Right: pills */}
				<div className='flex flex-col items-start mt-4 gap-2 hero-mobile-badges md:absolute md:bottom-[8vh] md:right-[4vw] md:gap-[0.6rem] md:pointer-events-auto md:items-end'>
					<div
						className='px-4 py-2 md:px-[1.2vw] md:py-[0.7vh] rounded-full border text-[min(2.8vw,0.72rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase flex items-center gap-[0.4vw] hero-mobile-badge'
						style={{
							color: 'var(--theme-green)',
							borderColor: 'var(--theme-pill-border)',
							width: 'auto',
							display: 'inline-flex',
						}}
					>
						<span
							className='w-[0.55vh] h-[0.55vh] min-w-[5px] min-h-[5px] rounded-full'
							style={{ backgroundColor: 'var(--theme-green)' }}
						/>
						AVAILABLE FOR WORK
					</div>

					<div
						className='px-4 py-2 md:px-[1.2vw] md:py-[0.7vh] rounded-full border text-[min(2.8vw,0.72rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase hero-mobile-badge'
						style={{
							color: 'var(--theme-white-text)',
							borderColor: 'var(--theme-pill-border)',
							width: 'auto',
							display: 'inline-flex',
						}}
					>
						REACT & NEXT.JS
					</div>

					<div
						className='px-4 py-2 md:px-[1.2vw] md:py-[0.7vh] rounded-full border text-[min(2.8vw,0.72rem)] md:text-[min(0.65vw,0.6rem)] tracking-[0.12em] uppercase hero-mobile-badge'
						style={{
							color: 'var(--theme-white-text)',
							borderColor: 'var(--theme-pill-border)',
							width: 'auto',
							display: 'inline-flex',
						}}
					>
						UI DESIGN
					</div>
				</div>
			</motion.div>
		</section>
	);
}
