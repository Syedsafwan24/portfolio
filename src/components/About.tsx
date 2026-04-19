'use client';

import { motion } from 'framer-motion';
import { FadeIn, FadeInSlide } from './animation/FadeIn';

const experience = [
	{
		company: 'ProCraft Digital Agency · Dubai',
		role: 'Outsource Frontend Developer',
		period: 'Jun 2025 - Present',
	},
	{
		company: 'Freelance',
		role: 'Web Developer, UI/UX Designer & DevOps',
		period: 'Oct 2024 - Present',
	},
	{
		company: 'AITM Bhatkal',
		role: 'Head of Design Community',
		period: '2025 - 2026',
	},
];

const achievements = [
	{
		title: 'StockFlow',
		org: 'Actively used by 30+ employees in production',
		date: '2026',
	},
	{
		title: 'ProCraft Dubai',
		org: 'Contracted by Dubai digital agency for GCC clients',
		date: '2025',
	},
	{
		title: 'BCJ CMS',
		org: 'Platform serving 400+ community members',
		date: '2026',
	},
	{
		title: 'Smart Arrow',
		org: 'Zero to production in 7 days',
		date: '2026',
	},
	{
		title: 'BCJ Awards Portal',
		org: '20+ student nominations processed',
		date: '2026',
	},
];

const fadeUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export function About() {
	return (
		<section
			id='about'
			className='relative px-[3vw] md:px-[4vw]'
			style={{
				paddingTop: 'clamp(4rem, 8vh, 8rem)',
				paddingBottom: 'clamp(4rem, 8vh, 8rem)',
			}}
		>
			{/* Section label */}
			<FadeIn>
				<div
					className='font-display uppercase tracking-[0.2em]'
					style={{
						fontSize: 'clamp(0.65rem, 0.8vw, 0.9rem)',
						marginBottom: '3vh',
						color: 'var(--theme-muted)',
						fontWeight: 300,
					}}
				>
					My story
				</div>
			</FadeIn>

			{/* Display heading */}
			<FadeIn>
				<h2
					className='font-display'
					style={{
						fontSize: 'clamp(3rem, 7vw, 7.5rem)',
						lineHeight: 1,
						letterSpacing: '-0.02em',
						marginBottom: '4vh',
						color: 'var(--theme-heading)',
						fontWeight: 800,
					}}
				>
					About
				</h2>
				<div
					style={{
						width: '100%',
						height: '1px',
						background: 'var(--theme-border-heading)',
						marginBottom: '8vh',
					}}
				/>
			</FadeIn>

			<div className='flex flex-col lg:flex-row gap-[8vw]'>
				{/* LEFT COLUMN — Bio */}
				<div className='lg:w-[42%]'>
					<FadeInSlide delay={0.1}>
						<p
							className='leading-[1.6]'
							style={{
								fontSize: 'clamp(1.05rem, 1.4vw, 1.5rem)',
								color: 'var(--theme-body)',
								fontWeight: 350,
							}}
						>
							<span style={{ color: 'var(--theme-heading)', fontWeight: 500 }}>
								Final-year Computer Science student
							</span>{' '}
							at AITM Bhatkal, GPA 7.7. Freelancing since October 2024 across
							clients in the Gulf region and India.
						</p>
					</FadeInSlide>

					<FadeInSlide delay={0.15}>
						<p
							className='leading-[1.65]'
							style={{
								fontSize: 'clamp(1rem, 1.3vw, 1.4rem)',
								marginTop: '3vh',
								color: 'var(--theme-body)',
								fontWeight: 350,
							}}
						>
							I design interfaces, build{' '}
							<span style={{ color: 'var(--theme-heading)', fontWeight: 500 }}>
								React and Next.js applications
							</span>
							, edit promotional reels, configure CI/CD pipelines, deploy to
							VPS, and use AI tools daily to ship faster and smarter.
						</p>
					</FadeInSlide>

					<FadeInSlide delay={0.2}>
						<p
							className='leading-[1.65]'
							style={{
								fontSize: 'clamp(1rem, 1.3vw, 1.4rem)',
								marginTop: '3vh',
								color: 'var(--theme-body)',
								fontWeight: 350,
							}}
						>
							I own the{' '}
							<span style={{ color: 'var(--theme-heading)', fontWeight: 500 }}>
								full product scope
							</span>{' '}
							from design to deployed code. I like working with teams where
							decisions are debated, not just handed down.
						</p>
					</FadeInSlide>

					<FadeIn delay={0.25}>
						<a
							href='/SyedSafwan_Resume_Final.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='group inline-flex items-center gap-[0.6vw] uppercase tracking-[0.12em] border rounded-full transition-all duration-300'
							style={{
								fontSize: 'clamp(0.75rem, 0.8vw, 0.85rem)',
								padding:
									'clamp(0.5rem, 1vh, 0.7rem) clamp(1rem, 1.4vw, 1.2rem)',
								marginTop: '5vh',
								fontWeight: 500,
								textDecoration: 'none',
								color: 'var(--theme-heading)',
								borderColor: 'var(--theme-pill-border)',
								backgroundColor: 'transparent',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = 'var(--theme-heading)';
								e.currentTarget.style.color = 'var(--theme-bg)';
								e.currentTarget.style.borderColor = 'var(--theme-heading)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = 'transparent';
								e.currentTarget.style.color = 'var(--theme-heading)';
								e.currentTarget.style.borderColor = 'var(--theme-pill-border)';
							}}
						>
							Download Resume
							<span
								className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
								style={{
									fontSize: 'clamp(1rem, 1.1vw, 1.15rem)',
									lineHeight: 1,
									fontWeight: 400,
								}}
							>
								&#8599;
							</span>
						</a>
					</FadeIn>
				</div>

				{/* RIGHT COLUMN */}
				<div className='lg:w-[55%]'>
					{/* EXPERIENCE */}
					<div>
						<FadeIn>
							<h3
								className='font-sans uppercase tracking-[0.22em]'
								style={{
									fontSize: 'clamp(0.72rem, 0.75vw, 0.84rem)',
									marginBottom: '2vh',
									color: 'var(--theme-sub)',
									fontWeight: 400,
								}}
							>
								Experience
							</h3>
						</FadeIn>

						<div className='flex flex-col'>
							{experience.map((exp, i) => (
								<motion.div
									key={i}
									{...fadeUp}
									transition={{ ...fadeUp.transition, delay: 0.1 + i * 0.1 }}
									className='border-t flex flex-col sm:flex-row sm:items-baseline justify-between gap-[0.5vh] sm:gap-0'
									style={{
										padding: '1.8vh 0',
										borderColor: 'var(--theme-border)',
									}}
								>
									<div>
										<h4
											className='font-display leading-[1.2]'
											style={{
												fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
												color: 'var(--theme-heading)',
												fontWeight: 400,
											}}
										>
											{exp.company}
										</h4>
										<p
											style={{
												fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)',
												marginTop: '0.2vh',
												color: 'var(--theme-sub)',
												fontWeight: 400,
											}}
										>
											{exp.role}
										</p>
									</div>
									<span
										className='whitespace-nowrap'
										style={{
											fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)',
											color: 'var(--theme-sub)',
											fontWeight: 400,
										}}
									>
										{exp.period}
									</span>
								</motion.div>
							))}
						</div>
					</div>

					{/* ACHIEVEMENTS */}
					<div>
						<FadeIn>
							<h3
								className='font-sans uppercase tracking-[0.22em] border-t'
								style={{
									fontSize: 'clamp(0.72rem, 0.75vw, 0.84rem)',
									padding: '1.8vh 0',
									color: 'var(--theme-sub)',
									fontWeight: 400,
									borderColor: 'var(--theme-border)',
								}}
							>
								Achievements
							</h3>
						</FadeIn>

						<div className='flex flex-col'>
							{achievements.map((item, i) => (
								<motion.div
									key={i}
									{...fadeUp}
									transition={{ ...fadeUp.transition, delay: 0.1 + i * 0.1 }}
									className='border-t flex flex-col sm:flex-row sm:items-baseline justify-between gap-[0.5vh] sm:gap-0'
									style={{
										padding: '1.8vh 0',
										borderColor: 'var(--theme-border)',
									}}
								>
									<div>
										<h4
											className='font-display leading-[1.2]'
											style={{
												fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
												color: 'var(--theme-heading)',
												fontWeight: 400,
											}}
										>
											{item.title}
										</h4>
										<p
											style={{
												fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)',
												marginTop: '0.2vh',
												color: 'var(--theme-sub)',
												fontWeight: 400,
											}}
										>
											{item.org}
										</p>
									</div>
									<span
										className='whitespace-nowrap'
										style={{
											fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)',
											color: 'var(--theme-sub)',
											fontWeight: 400,
										}}
									>
										{item.date}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
