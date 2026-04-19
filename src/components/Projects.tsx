'use client';

import { motion } from 'framer-motion';
import { FadeIn, FadeInSlide } from './animation/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const featuredProjects = [
	{
		name: 'StockFlow',
		tagline: 'Full-Stack Inventory & Operations Platform',
		description:
			'Multi-location inventory, sales, and purchasing management system actively used by 30+ employees across operations, sales, and purchasing workflows.',
		metrics: [
			{ number: '30+', label: 'Active Users' },
			{ number: 'Real-time', label: 'Socket.IO' },
			{ number: 'Multi-Loc', label: 'Support' },
		],
		highlights: [
			'Product catalog with SKU/barcode support',
			'Batch tracking & automated low-stock alerts',
			'Background job processing for async workflows',
			'Role-based access control & admin dashboard',
		],
		tech: [
			'Next.js',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'Socket.IO',
			'TailwindCSS',
		],
		status: 'WORK IN PROGRESS',
		url: 'https://stockflow.procraft.ae',
	},
	{
		name: 'BCJ Educational Awards Portal',
		tagline: 'Awards & Nominations Workflow System',
		description:
			'End-to-end awards nominations system for the Bhatkal Community Jeddah with RESTful backend APIs, authentication, and role-based access control for managing 20+ student nominations.',
		metrics: [
			{ number: '20+', label: 'Nominations' },
			{ number: 'JWT', label: 'Auth' },
			{ number: '3 Roles', label: 'RBAC' },
		],
		highlights: [
			'RESTful backend APIs with Django REST Framework',
			'JWT-based authentication with role-based access control',
			'Modular nomination intake & review pipelines',
			'Automated reporting and nomination management',
		],
		tech: ['Django', 'DRF', 'JWT', 'PostgreSQL', 'RBAC'],
		status: 'LIVE',
		url: 'https://educational.bcjed.com',
	},
	{
		name: 'BCJ CMS',
		tagline: 'Bilingual Community Content Management',
		description:
			'Full-stack CMS platform serving 400+ community members with bilingual EN/Urdu content, full RTL support, and comprehensive content management capabilities.',
		metrics: [
			{ number: '400+', label: 'Members' },
			{ number: 'Bilingual', label: 'EN/Urdu' },
			{ number: 'Full RTL', label: 'Support' },
		],
		highlights: [
			'Admin dashboard with authentication & content management',
			'Bilingual EN/Urdu rendering with full RTL support',
			'Structured REST APIs for content delivery',
			'Events and media management system',
		],
		tech: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'RTL'],
		status: 'LIVE',
		url: 'https://bcjed.com',
	},
	{
		name: 'Smart Arrow',
		tagline: 'Multilingual Product Catalog & CMS',
		description:
			'Full-stack multilingual product catalog and CMS for an established Saudi garments manufacturer & distributor. Shipped from zero to production in 7 days with high-performance SEO optimization.',
		metrics: [
			{ number: '7 Days', label: 'To Live' },
			{ number: 'Est. 1993', label: 'Client' },
			{ number: 'SEO', label: 'Optimized' },
		],
		highlights: [
			'Multilingual product catalog with SEO optimization',
			'High Core Web Vitals performance scores',
			'Achieved top search rankings for target categories',
			'Production deployment in 7 days',
		],
		tech: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'Multilingual', 'SEO'],
		status: 'LIVE',
		url: 'https://satjed.com',
	},
];

const otherProjects = [
	{
		id: '01',
		name: 'The Virtual Greens',
		status: 'LIVE',
		desc: 'Indoor Golf Simulator — Riyadh',
		tags: 'React.js · Figma-to-Code · Bilingual',
		url: '#',
	},
	{
		id: '02',
		name: 'Bin Abed General Land Transport',
		status: 'LIVE',
		desc: 'GCC Freight & Logistics',
		tags: 'React.js · Corporate · Responsive',
		url: '#',
	},
	{
		id: '03',
		name: 'Euclase',
		status: 'LIVE',
		desc: 'First client project',
		tags: 'React.js · Static · Performance',
		url: '#',
	},
	{
		id: '04',
		name: 'ProCraft',
		status: 'LIVE',
		desc: 'Creative Digital Agency — Dubai',
		tags: 'Next.js · TailwindCSS · SEO',
		url: '#',
	},
	{
		id: '05',
		name: 'AITM College Website',
		status: 'LIVE',
		desc: 'VTU Engineering College',
		tags: 'Figma · Django · TailwindCSS',
		url: '#',
	},
	{
		id: '06',
		name: 'BCJ Ramadan Portal',
		status: 'LIVE',
		desc: 'Ramadan Platform',
		tags: 'Next.js · Admin Management',
		url: '#',
	},
	{
		id: '07',
		name: 'SharmaSpace.in',
		status: 'LIVE',
		desc: 'Interior Designers — Bangalore',
		tags: 'Next.js · CMS · AWS Amplify',
		url: '#',
	},
	{
		id: '08',
		name: 'StudyTilawah',
		status: 'LIVE',
		desc: 'Learn the Quran the Right Way',
		tags: 'React.js · Static · Accessible',
		url: '#',
	},
];

export function Projects() {
	const isWorkInProgress = (status: string) => {
		const normalized = status.toUpperCase();
		return (
			normalized.includes('WORK IN PROGRESS') ||
			normalized.includes('IN DEVELOPMENT')
		);
	};

	const getStatusTheme = (status: string) => {
		if (isWorkInProgress(status)) {
			return {
				label: 'WORK IN PROGRESS',
				color: 'var(--theme-orange)',
				bg: 'color-mix(in srgb, var(--theme-orange) 12%, transparent)',
				border: 'color-mix(in srgb, var(--theme-orange) 45%, transparent)',
				glow: 'color-mix(in srgb, var(--theme-orange) 20%, transparent)',
			};
		}

		if (status.toUpperCase() === 'LIVE') {
			return {
				label: 'LIVE',
				color: 'var(--theme-green)',
				bg: 'color-mix(in srgb, var(--theme-green) 12%, transparent)',
				border: 'color-mix(in srgb, var(--theme-green) 45%, transparent)',
				glow: 'color-mix(in srgb, var(--theme-green) 20%, transparent)',
			};
		}

		return null;
	};

	const renderStatusPill = (status: string, fontSize: string) => {
		const theme = getStatusTheme(status);

		if (!theme) {
			return (
				<span
					className='font-sans uppercase tracking-[0.15em]'
					style={{
						fontSize,
						fontWeight: 300,
						color: 'var(--theme-muted)',
					}}
				>
					{status}
				</span>
			);
		}

		return (
			<span
				className='font-sans uppercase tracking-[0.14em]'
				style={{
					fontSize,
					fontWeight: 500,
					color: theme.color,
					backgroundColor: theme.bg,
					border: `1px solid ${theme.border}`,
					borderRadius: '9999px',
					padding: '0.34rem 0.76rem',
					display: 'inline-flex',
					alignItems: 'center',
					gap: '0.42rem',
					lineHeight: 1.05,
					boxShadow: `0 0 0 1px ${theme.glow} inset`,
				}}
			>
				<span
					style={{
						width: '0.34rem',
						height: '0.34rem',
						borderRadius: '9999px',
						backgroundColor: theme.color,
						boxShadow: 'none',
						flexShrink: 0,
					}}
				/>
				{theme.label}
			</span>
		);
	};

	return (
		<section
			id='projects'
			className='relative'
			style={{
				paddingTop: 'clamp(4rem, 8vh, 8rem)',
				paddingBottom: 'clamp(4rem, 8vh, 8rem)',
			}}
		>
			{/* Header */}
			<div
				className='px-[3vw] md:px-[4vw] relative z-10'
				style={{ marginBottom: '8vh' }}
			>
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
						Selected work
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
						Projects
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

			{/* Featured Projects */}
			<div
				className='px-[3vw] md:px-[4vw] relative z-10'
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 'clamp(1.5rem, 2vw, 2rem)',
					marginBottom: 'clamp(3rem, 6vh, 6rem)',
				}}
			>
				{featuredProjects.map((project, idx) => (
					<FadeInSlide key={project.name} delay={idx * 0.1}>
						<a
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='block group project-hover-target'
							data-cursor-text='Click to visit'
						>
							<motion.div
								className='relative border rounded-sm overflow-hidden transition-colors duration-500'
								style={{
									borderColor: 'var(--theme-card-border)',
									backgroundColor: 'var(--theme-card-bg)',
								}}
								whileHover={{ y: -2 }}
								transition={{ duration: 0.4 }}
							>
								<div style={{ padding: 'clamp(1.5rem, 3vw, 3rem)' }}>
									{/* Header */}
									<div className='flex flex-col md:flex-row md:justify-between md:items-start gap-[1.5vh] mb-[3vh]'>
										<div>
											<div
												className='inline-block font-sans uppercase tracking-[0.15em] rounded-sm'
												style={{
													fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
													padding:
														'clamp(0.2rem, 0.4vh, 0.35rem) clamp(0.4rem, 0.6vw, 0.7rem)',
													marginBottom: '1.5vh',
													color: 'var(--theme-project-featured-label-text)',
													backgroundColor:
														'var(--theme-project-featured-label-bg)',
													fontWeight: 300,
												}}
											>
												{idx === 0 ? 'Featured Project' : 'Key Project'}
											</div>
											<h3
												className='tracking-[-0.02em] transition-colors'
												style={{
													fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
													marginBottom: '0.5vh',
													color: 'var(--theme-heading)',
													fontWeight: 700,
												}}
											>
												{project.name}
											</h3>
											<p
												style={{
													fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)',
													color: 'var(--theme-body)',
													fontWeight: 300,
												}}
											>
												{project.tagline}
											</p>
										</div>
										<div className='flex items-center gap-[0.8vw]'>
											{renderStatusPill(
												project.status,
												'clamp(0.6rem, 0.65vw, 0.7rem)',
											)}
											<motion.div
												className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
												whileHover={{ rotate: 45 }}
											>
												<ArrowUpRight
													size={16}
													style={{ color: 'var(--theme-arrow)' }}
												/>
											</motion.div>
										</div>
									</div>

									{/* Metrics */}
									<div
										className='grid grid-cols-3 border-y'
										style={{
											gap: 'clamp(0.5rem, 1vw, 1rem)',
											marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
											padding: 'clamp(1rem, 2vh, 2rem) 0',
											borderColor: 'var(--theme-border)',
										}}
									>
										{project.metrics.map((metric, metricIdx) => (
											<div key={metricIdx} className='text-center'>
												<div
													className='tracking-tight'
													style={{
														fontSize: 'clamp(1.1rem, 1.5vw, 1.6rem)',
														color: 'var(--theme-heading)',
														fontWeight: 600,
													}}
												>
													{metric.number}
												</div>
												<div
													className='font-sans uppercase tracking-[0.15em]'
													style={{
														fontSize: 'clamp(0.55rem, 0.6vw, 0.65rem)',
														marginTop: '0.3vh',
														color: 'var(--theme-muted)',
														fontWeight: 300,
													}}
												>
													{metric.label}
												</div>
											</div>
										))}
									</div>

									{/* Description */}
									<p
										className='leading-[1.8] max-w-[60vw]'
										style={{
											fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
											marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
											color: 'var(--theme-body)',
											fontWeight: 400,
										}}
									>
										{project.description}
									</p>

									{/* Highlights */}
									<div
										className='grid md:grid-cols-2'
										style={{
											gap: 'clamp(0.5rem, 1vh, 0.8rem)',
											marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
										}}
									>
										{project.highlights.map((highlight, highlightIdx) => (
											<div
												key={highlightIdx}
												className='flex items-start gap-[0.6vw]'
											>
												<span
													className='mt-[0.2vh]'
													style={{
														fontSize: 'clamp(0.55rem, 0.65vw, 0.7rem)',
														color: 'var(--color-accent)',
														opacity: 0.4,
													}}
												>
													◆
												</span>
												<span
													className='leading-relaxed'
													style={{
														fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
														color: 'var(--theme-body)',
														fontWeight: 300,
													}}
												>
													{highlight}
												</span>
											</div>
										))}
									</div>

									{/* Tech Stack */}
									<div
										className='flex flex-wrap gap-[0.5vw] pt-[2vh] border-t'
										style={{ borderColor: 'var(--theme-border)' }}
									>
										{project.tech.map((tech, techIdx) => (
											<span
												key={techIdx}
												className='font-sans uppercase tracking-wider rounded-sm'
												style={{
													fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
													padding:
														'clamp(0.2rem, 0.4vh, 0.35rem) clamp(0.4rem, 0.6vw, 0.7rem)',
													color: 'var(--theme-project-tag-text)',
													backgroundColor: 'var(--theme-project-tag-bg)',
													fontWeight: 300,
												}}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						</a>
					</FadeInSlide>
				))}
			</div>

			{/* Other Projects Header */}
			<div
				className='px-[3vw] md:px-[4vw] relative z-10'
				style={{ marginBottom: '3vh' }}
			>
				<FadeIn>
					<span
						className='font-sans uppercase tracking-[0.2em]'
						style={{
							fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
							color: 'var(--theme-muted)',
							fontWeight: 300,
						}}
					>
						Other Projects
					</span>
				</FadeIn>
			</div>

			{/* Other Projects List */}
			<div className='flex flex-col relative z-10 px-[3vw] md:px-[4vw]'>
				{otherProjects.map((project, index) => (
					<FadeIn key={project.id} delay={index * 0.03} className='w-full'>
						<a
							href={project.url}
							className='block w-full group border-t last:border-b transition-colors duration-500 project-hover-target'
							style={{ borderColor: 'var(--theme-border)' }}
							data-cursor-text='Click to visit'
						>
							<div className='py-[1.8vh] flex flex-col md:flex-row gap-[1vh] md:gap-0'>
								{/* Mobile ID & Status */}
								<div className='flex justify-between md:hidden'>
									<span
										className='font-sans'
										style={{
											fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
											color: 'var(--theme-other-project-number)',
											fontWeight: 300,
										}}
									>
										{project.id}
									</span>
									{renderStatusPill(
										project.status,
										'clamp(0.6rem, 0.65vw, 0.7rem)',
									)}
								</div>

								{/* ID (Desktop) */}
								<div className='hidden md:block md:w-[8%]'>
									<span
										className='font-sans'
										style={{
											fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
											color: 'var(--theme-other-project-number)',
											fontWeight: 300,
										}}
									>
										{project.id}
									</span>
								</div>

								{/* Content */}
								<div className='md:w-[62%] flex flex-col gap-[0.3vh]'>
									<motion.div
										className='tracking-tight transition-colors duration-300'
										style={{
											fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
											color: 'var(--theme-heading)',
											fontWeight: 400,
										}}
										whileHover={{ x: 4 }}
										transition={{ duration: 0.3 }}
									>
										{project.name}
									</motion.div>
									<div
										style={{
											fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)',
											color: 'var(--theme-body)',
											fontWeight: 300,
										}}
									>
										{project.desc}
									</div>
									<div
										className='font-sans tracking-wide'
										style={{
											fontSize: 'clamp(0.6rem, 0.65vw, 0.7rem)',
											marginTop: '0.3vh',
											color: 'var(--theme-muted)',
											fontWeight: 300,
										}}
									>
										{project.tags}
									</div>
								</div>

								{/* Status & Arrow */}
								<div className='hidden md:flex flex-col justify-between items-end md:w-[30%]'>
									{renderStatusPill(
										project.status,
										'clamp(0.6rem, 0.65vw, 0.7rem)',
									)}
									<motion.div
										className='transition-colors'
										style={{ color: 'var(--theme-arrow)' }}
										whileHover={{ x: 3, y: -3 }}
									>
										<ArrowUpRight size={14} strokeWidth={1} />
									</motion.div>
								</div>
							</div>
						</a>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
