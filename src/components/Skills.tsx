'use client';

import { motion } from 'framer-motion';
import { FadeIn } from './animation/FadeIn';

const skills = [
	{ category: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C'] },
	{ category: 'Frameworks', items: ['Next.js', 'React.js', 'TailwindCSS'] },
	{
		category: 'Design',
		items: ['Figma', 'Photoshop', 'Illustrator', 'Canva'],
	},
	{
		category: 'Video',
		items: ['Premiere Pro', 'After Effects', 'CapCut'],
	},
	{
		category: 'DevOps',
		items: [
			'GitHub CI/CD',
			'GitHub Actions',
			'VPS',
			'AWS Amplify',
			'Amazon RDS',
		],
	},
	{ category: 'Databases', items: ['MySQL', 'PostgreSQL'] },
	{
		category: 'AI Tools',
		items: [
			'Claude AI',
			'GitHub Copilot',
			'Figma Make',
			'Antigravity AI',
			'OpenAI Codex',
			'Cursor',
		],
	},
];

export function Skills() {
	return (
		<section
			id='skills'
			className='relative'
			style={{
				paddingTop: 'clamp(4rem, 8vh, 8rem)',
				paddingBottom: 'clamp(4rem, 8vh, 8rem)',
			}}
		>
			{/* Header */}
			<div className='px-[3vw] md:px-[4vw]' style={{ marginBottom: 0 }}>
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
						What I use
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
						Skills
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

			{/* Skills rows */}
			<div className='flex flex-col px-[3vw] md:px-[4vw]'>
				{skills.map((skill, index) => (
					<FadeIn key={index} delay={index * 0.04} className='w-full'>
						<motion.div
							className='w-full group border-t last:border-b transition-colors duration-500'
							style={{ borderColor: 'var(--theme-border)' }}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor =
									'var(--theme-card-hover)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = 'transparent';
							}}
							whileHover={{ x: 4 }}
							transition={{ duration: 0.3 }}
						>
							<div className='py-[1.8vh] flex flex-col md:flex-row gap-[1vh] md:gap-0 items-start md:items-center'>
								<div
									className='md:w-1/4 font-sans uppercase tracking-[0.15em]'
									style={{
										fontSize: 'clamp(0.6rem, 0.7vw, 0.75rem)',
										color: 'var(--theme-muted)',
										fontWeight: 300,
									}}
								>
									{skill.category}
								</div>
								<div className='md:w-3/4 flex flex-wrap gap-[0.5vw]'>
									{skill.items.map((item, i) => (
										<motion.span
											key={i}
											className='border rounded-full transition-all duration-300'
											style={{
												fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
												padding:
													'clamp(0.3rem, 0.6vh, 0.5rem) clamp(0.6rem, 1vw, 1rem)',
												color: 'var(--theme-body)',
												fontWeight: 400,
												borderColor: 'var(--theme-pill-border)',
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor =
													'var(--theme-border-strong)';
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor =
													'var(--theme-pill-border)';
											}}
											whileHover={{ scale: 1.02 }}
										>
											{item}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
