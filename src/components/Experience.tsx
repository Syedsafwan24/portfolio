'use client';

import { motion } from 'framer-motion';
import { FadeIn, FadeInSlide } from './animation/FadeIn';

const experiences = [
	{
		role: 'Co-Founder & Full Stack Developer',
		duration: 'June 2025 — Present',
		location: 'ProCraft Digital Agency · Dubai, UAE · Remote',
		details: [
			{
				title: 'DELIVERY',
				description:
					'Build and ship 4 production projects for GCC clients across interior design, hospitality, retail, and SaaS — owning frontend, backend, and deployment on each.',
			},
			{
				title: 'PROCRAFT ERP',
				description:
					'Built and shipped ProCraft ERP, a multi-tenant inventory, POS, and accounting SaaS now live with retail and wholesale businesses in the UAE and India.',
			},
			{
				title: 'PROJECTS',
				description:
					'Delivered Smart Arrow, a multilingual CMS for a 30-year-old Saudi manufacturer, from zero to production in 7 days. Shipped SharmaSpace (AWS Amplify) and The Virtual Greens (bilingual RTL) for Riyadh and UAE clients.',
			},
			{
				title: 'DEVOPS',
				description:
					'Standardised automated GitHub Actions pipelines deploying to Hostinger VPS and AWS.',
			},
		],
	},
	{
		role: 'Freelance Full Stack Developer & UI/UX Designer',
		duration: 'October 2024 — May 2025',
		location: 'Independent · Gulf Region & India · Remote',
		details: [
			{
				title: 'DELIVERY',
				description:
					'Delivered 12 production websites across Saudi Arabia, the UAE, and India — including Bin Abed General Land Transport, a Dubai freight operator running 450+ vehicles across 8 GCC countries.',
			},
			{
				title: 'FRONTEND & BILINGUAL',
				description:
					'Built bilingual EN/AR and EN/Urdu platforms with full RTL support via react-i18next, delivering client Figma designs as pixel-accurate React applications.',
			},
			{
				title: 'BACKEND & CMS',
				description:
					'Implemented CMS and admin dashboards with JWT auth, RBAC, and REST APIs on Next.js + PostgreSQL + Prisma.',
			},
			{
				title: 'DEVOPS',
				description:
					'Ran DevOps end-to-end: GitHub Actions CI/CD, Hostinger VPS, AWS Amplify, and Amazon RDS.',
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
				<div className='section-header-block' style={{ marginBottom: '8vh' }}>
					<FadeIn>
						<div
							className='font-display uppercase tracking-[0.2em] section-kicker'
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
							className='font-display section-heading'
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
							className='section-heading-divider'
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
