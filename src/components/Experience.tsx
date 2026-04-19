'use client';

import { motion } from 'framer-motion';
import { FadeIn, FadeInSlide } from './animation/FadeIn';

const experiences = [
	{
		role: 'Outsource Frontend Developer',
		duration: 'June 2025 — Present',
		location: 'ProCraft Digital Agency · Dubai, UAE · Remote',
		details: [
			{
				title: 'DEVELOPMENT',
				description:
					'Built StockFlow — full-stack inventory and operations platform actively used by 30+ employees across operations, sales, and purchasing workflows.',
			},
			{
				title: 'PROJECTS',
				description:
					'Built SharmaSpace — interior design studio website with full CI/CD pipeline on AWS Amplify. Delivered The Virtual Greens — bilingual EN/AR React app with full RTL support for a golf simulator lounge in Riyadh.',
			},
			{
				title: 'CLIENT WORK',
				description:
					'Contracted by ProCraft Digital Agency, Dubai to build and ship production projects for GCC clients across interior design, hospitality, and retail.',
			},
		],
	},
	{
		role: 'Freelance Web Developer, UI/UX Designer & DevOps',
		duration: 'October 2024 — Present',
		location: 'Gulf Region & India',
		details: [
			{
				title: 'Development',
				description:
					'Built 12 production websites across React.js and Next.js with TailwindCSS. Delivered client-provided Figma designs as pixel-perfect React applications. Implemented CMS systems, bilingual RTL support, and admin dashboards for clients across Saudi Arabia, UAE, and India.',
			},
			{
				title: 'Design',
				description:
					'Created brand identities, posters, banners, and social creatives. Led visual design for college hackathons, sports tournaments, and cultural fests. Designed the AITM college website UI from scratch in Figma.',
			},
			{
				title: 'Video Editing',
				description:
					'Produced promotional reels and content for clients using Adobe Premiere Pro, After Effects, and CapCut.',
			},
			{
				title: 'DevOps',
				description:
					'Configured GitHub CI/CD pipelines via GitHub Actions. Deployed and managed production apps on Hostinger VPS. Handled cloud deployments on AWS Amplify with Amazon RDS.',
			},
			{
				title: 'AI Workflows',
				description:
					'Daily use of Claude AI, Cursor, GitHub Copilot, OpenAI Codex, Figma Make, and Antigravity AI to accelerate design and development.',
			},
		],
	},
];

export function Experience() {
	return (
		<section
			id='work'
			className='relative px-[3vw] md:px-[4vw]'
			style={{
				paddingTop: 'clamp(4rem, 8vh, 8rem)',
				paddingBottom: 'clamp(4rem, 8vh, 8rem)',
			}}
		>
			<div className='relative z-10'>
				{/* Header */}
				<div style={{ marginBottom: '8vh' }}>
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
							Career path
						</div>
					</FadeIn>
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
							Experience
						</h2>
						<div
							style={{
								width: '100%',
								height: '1px',
								background: 'var(--theme-border-heading)',
							}}
						/>
					</FadeIn>
				</div>

				{/* Content */}
				<div>
					{experiences.map((exp, idx) => (
						<FadeIn key={idx} delay={idx * 0.1}>
							<div style={{ marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
								{/* Role Header */}
								<FadeInSlide delay={0.1}>
									<div style={{ marginBottom: 'clamp(1.5rem, 3vh, 2rem)' }}>
										<h3
											className='tracking-[-0.02em] leading-tight'
											style={{
												fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
												marginBottom: '0.8vh',
												color: 'var(--theme-heading)',
												fontWeight: 700,
											}}
										>
											{exp.role}
										</h3>
										<div
											className='font-sans uppercase tracking-[0.15em]'
											style={{
												fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
												display: 'flex',
												gap: '0.8vw',
												color: 'var(--theme-muted)',
												fontWeight: 300,
											}}
										>
											<span>{exp.duration}</span>
											<span style={{ color: 'var(--theme-dim)' }}>·</span>
											<span>{exp.location}</span>
										</div>
									</div>
								</FadeInSlide>

								{/* Details Grid */}
								<div
									className='section-divider'
									style={{ marginBottom: 'clamp(1.5rem, 3vh, 2rem)' }}
								/>
								<div
									className='grid md:grid-cols-2'
									style={{
										gap: 'clamp(1.5rem, 3vw, 3rem) clamp(2rem, 4vw, 4rem)',
									}}
								>
									{exp.details.map((detail, detailIdx) => (
										<FadeIn key={detailIdx} delay={0.2 + detailIdx * 0.08}>
											<motion.div
												className='group'
												whileHover={{ x: 3 }}
												transition={{ duration: 0.3 }}
											>
												<h4
													className='uppercase tracking-[0.1em] transition-colors'
													style={{
														fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
														marginBottom: 'clamp(0.5rem, 1vh, 0.8rem)',
														color: 'var(--theme-heading)',
														fontWeight: 600,
													}}
													onMouseEnter={(e) => {
														e.currentTarget.style.color = 'var(--color-accent)';
														e.currentTarget.style.opacity = '0.6';
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.color =
															'var(--theme-heading)';
														e.currentTarget.style.opacity = '1';
													}}
												>
													{detail.title}
												</h4>
												<p
													className='leading-[1.8]'
													style={{
														fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)',
														color: 'var(--theme-body)',
														fontWeight: 400,
													}}
												>
													{detail.description}
												</p>
											</motion.div>
										</FadeIn>
									))}
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
