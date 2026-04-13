'use client';

import { FadeIn } from './animation/FadeIn';

const featuredProjects = [
	{
		name: 'StockFlow',
		tagline: 'Full-Stack Inventory & Operations Platform',
		description:
			'Multi-location inventory, sales, and purchasing management system actively used by 30+ employees across operations, sales, and purchasing workflows.',
		metrics: [
			{ number: '30+', label: 'Active Users' },
			{ number: 'Real-time', label: 'Socket.IO Updates' },
			{ number: 'Multi-Location', label: 'Support' },
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
		status: 'IN DEVELOPMENT',
		url: 'https://stockflow.procraft.ae',
	},
	{
		name: 'BCJ Educational Awards Portal',
		tagline: 'Awards & Nominations Workflow System',
		description:
			'End-to-end awards nominations system for the Bhatkal Community Jeddah with RESTful backend APIs, authentication, and role-based access control for managing 20+ student nominations.',
		metrics: [
			{ number: '20+', label: 'Student Nominations' },
			{ number: 'JWT Auth', label: 'Secure Access' },
			{ number: '3 Roles', label: 'RBAC System' },
		],
		highlights: [
			'RESTful backend APIs with Django REST Framework',
			'JWT-based authentication with role-based access control',
			'Modular nomination intake & review pipelines',
			'Automated reporting and nomination management',
		],
		tech: ['Django', 'Django REST Framework', 'JWT', 'PostgreSQL', 'RBAC'],
		status: 'LIVE',
		url: 'https://educational.bcjed.com',
	},
	{
		name: 'BCJ CMS',
		tagline: 'Bilingual Community Content Management',
		description:
			'Full-stack CMS platform serving 400+ community members with bilingual EN/Urdu content, full RTL support, and comprehensive content management capabilities.',
		metrics: [
			{ number: '400+', label: 'Community Members' },
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
			{ number: '7 Days', label: 'Zero to Live' },
			{ number: 'Est. 1993', label: 'Client Est.' },
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
		desc: 'Indoor Golf Simulator — Riyadh, Saudi Arabia',
		tags: 'React.js · Figma-to-Code · Bilingual · RTL',
		urlText: 'thevirtualgreens.com →',
		url: '#',
	},
	{
		id: '02',
		name: 'Bin Abed General Land Transport',
		status: 'LIVE',
		desc: 'GCC Freight & Logistics — Saudi Arabia',
		tags: 'React.js · Corporate · Responsive',
		urlText: 'binabed.com →',
		url: '#',
	},
	{
		id: '03',
		name: 'Euclase',
		status: 'LIVE',
		desc: 'First client project — Static website',
		tags: 'React.js · Static · Performance',
		urlText: 'euclase.com →',
		url: '#',
	},
	{
		id: '04',
		name: 'ProCraft',
		status: 'LIVE',
		desc: 'Creative Digital Agency — Dubai, UAE',
		tags: 'Next.js · TailwindCSS · SEO',
		urlText: 'procraft.ae →',
		url: '#',
	},
	{
		id: '05',
		name: 'AITM College Website',
		status: 'LIVE',
		desc: 'VTU Engineering College — Bhatkal, Karnataka',
		tags: 'Figma · Django · TailwindCSS · AI-Assisted',
		urlText: 'aitm.edu.in →',
		url: '#',
	},
	{
		id: '06',
		name: 'BCJ Ramadan Portal',
		status: 'LIVE',
		desc: 'Ramadan Platform — Bhatkal Community Jeddah',
		tags: 'Next.js · Admin Management',
		urlText: 'ramadhan.bcjed.com →',
		url: '#',
	},
	{
		id: '07',
		name: 'SharmaSpace.in',
		status: 'LIVE',
		desc: 'Interior Designers — Bangalore, India',
		tags: 'Next.js · CMS · AWS Amplify · CI/CD',
		urlText: 'sharmaspace.in →',
		url: '#',
	},
	{
		id: '08',
		name: 'StudyTilawah',
		status: 'LIVE',
		desc: 'Learn the Quran the Right Way — Static',
		tags: 'React.js · Static · Accessible',
		urlText: 'studytilawah.com →',
		url: '#',
	},
];

export function Projects() {
	return (
		<section
			id='projects'
			className='section-padding border-t border-[#0A0A0A]'
		>
			<div className='px-[20px] md:px-[80px] max-w-[1920px] mx-auto mb-16'>
				<div className='md:w-1/4'>
					<FadeIn className='font-mono text-[11px] uppercase'>
						03 — PROJECTS
					</FadeIn>
				</div>
			</div>

			{/* Featured Projects Section */}
			<div className='px-[20px] md:px-[80px] max-w-[1920px] mx-auto space-y-6 mb-16'>
				{featuredProjects.map((project, idx) => (
					<FadeIn key={project.name} delay={idx * 0.1}>
						<a
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='block group'
						>
							<div className='relative border-2 border-[#0A0A0A] bg-white hover:bg-[#0A0A0A] transition-all duration-300 overflow-hidden'>
								{/* Gradient accent */}
								<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A0A0A] via-gray-600 to-transparent'></div>

								<div className='p-8 md:p-12'>
									{/* Header */}
									<div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8'>
										<div>
											<div
												className={`inline-block px-3 py-1 bg-[#0A0A0A] text-[#F1F1F1] font-mono text-[10px] uppercase tracking-wider mb-3 group-hover:bg-[#F1F1F1] group-hover:text-[#0A0A0A] transition-colors`}
											>
												{idx === 0 ? 'Featured Project' : 'Key Project'}
											</div>
											<h3 className='text-4xl md:text-5xl font-bold tracking-tighter group-hover:text-[#F1F1F1] transition-colors mb-2'>
												{project.name}
											</h3>
											<p className='text-[13px] italic text-[#0A0A0A]/60 group-hover:text-[#F1F1F1]/70 transition-colors'>
												{project.tagline}
											</p>
										</div>
										<div className='font-mono text-[11px] text-[#0A0A0A]/50 group-hover:text-[#F1F1F1]/70 transition-colors uppercase tracking-widest flex-shrink-0'>
											{project.status}
										</div>
									</div>

									{/* Metrics */}
									<div className='grid grid-cols-3 gap-4 mb-10 py-8 border-y border-[#0A0A0A]/10 group-hover:border-[#F1F1F1]/20 transition-colors'>
										{project.metrics.map((metric, metricIdx) => (
											<div key={metricIdx} className='text-center'>
												<div className='text-2xl md:text-3xl font-bold text-[#0A0A0A] group-hover:text-[#F1F1F1] transition-colors'>
													{metric.number}
												</div>
												<div className='font-mono text-[10px] text-[#0A0A0A]/50 group-hover:text-[#F1F1F1]/60 transition-colors uppercase mt-1'>
													{metric.label}
												</div>
											</div>
										))}
									</div>

									{/* Description */}
									<p className='text-[15px] leading-relaxed text-[#0A0A0A] group-hover:text-[#F1F1F1] transition-colors mb-8'>
										{project.description}
									</p>

									{/* Highlights */}
									<div className='grid md:grid-cols-2 gap-3 mb-8'>
										{project.highlights.map((highlight, highlightIdx) => (
											<div
												key={highlightIdx}
												className='flex items-center gap-2'
											>
												<span className='text-[#0A0A0A] group-hover:text-[#F1F1F1] transition-colors flex-shrink-0 text-[12px]'>
													★
												</span>
												<span className='text-[13px] text-[#0A0A0A]/80 group-hover:text-[#F1F1F1]/90 transition-colors'>
													{highlight}
												</span>
											</div>
										))}
									</div>

									{/* Tech Stack */}
									<div className='flex flex-wrap gap-2 pt-6 border-t border-[#0A0A0A]/10 group-hover:border-[#F1F1F1]/20 transition-colors'>
										{project.tech.map((tech, techIdx) => (
											<span
												key={techIdx}
												className='px-3 py-1 bg-[#0A0A0A]/5 text-[11px] font-mono text-[#0A0A0A] group-hover:bg-[#F1F1F1]/10 group-hover:text-[#F1F1F1] transition-colors uppercase'
											>
												{tech}
											</span>
										))}
									</div>

									{/* CTA */}
									<div className='mt-6 font-mono text-[12px] text-[#0A0A0A] group-hover:text-[#F1F1F1] transition-colors flex items-center gap-2'>
										View Project{' '}
										<span className='group-hover:translate-x-1 transition-transform'>
											→
										</span>
									</div>
								</div>
							</div>
						</a>
					</FadeIn>
				))}
			</div>

			{/* Other Projects Section */}
			<div className='px-[20px] md:px-[80px] max-w-[1920px] mx-auto mt-16 mb-8'>
				<FadeIn className='font-mono text-[11px] uppercase text-[#0A0A0A]/60'>
					OTHER PROJECTS
				</FadeIn>
			</div>

			{/* Other Projects Grid */}
			<div className='flex flex-col border-t border-[#0A0A0A]'>
				{otherProjects.map((project, index) => (
					<FadeIn key={project.id} delay={index * 0.05} className='w-full'>
						<a
							href={project.url}
							className='block w-full group hover:bg-[#0A0A0A] hover:text-[#F1F1F1] transition-none border-b border-[#0A0A0A]'
						>
							<div className='px-[20px] md:px-[80px] max-w-[1920px] mx-auto py-8 flex flex-col md:flex-row gap-6 md:gap-0'>
								{/* Mobile ID and Status Wrapper */}
								<div className='flex justify-between md:hidden'>
									<div className='font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70'>
										{project.id}
									</div>
									<div className='font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70'>
										{project.status}
									</div>
								</div>

								{/* ID (Desktop) */}
								<div className='hidden md:block md:w-[8%] shrink-0'>
									<div className='font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70'>
										{project.id}
									</div>
								</div>

								{/* Middle Content */}
								<div className='flex flex-col md:w-[67%] gap-1'>
									<div className='font-light text-[18px] md:text-[24px] tracking-tight'>
										{project.name}
									</div>
									<div className='font-light text-[15px] italic mb-2 mt-1'>
										{project.desc}
									</div>
									<div className='font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70'>
										{project.tags}
									</div>
								</div>

								{/* Right Align Status & URL (Desktop) / Just URL (Mobile) */}
								<div className='flex flex-col justify-between items-end md:w-[25%] mt-2 md:mt-0'>
									<div className='hidden md:block font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70'>
										{project.status}
									</div>
									<div className='font-mono text-[11px] w-full text-left md:text-right md:w-auto'>
										{project.urlText}
									</div>
								</div>
							</div>
						</a>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
