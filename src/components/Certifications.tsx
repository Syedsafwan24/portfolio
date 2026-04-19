'use client';

import { FadeIn } from './animation/FadeIn';

const certifications = [
	{
		source: 'UDEMY · 2024',
		title: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
	},
];

export function Certifications() {
	return (
		<section
			className='relative'
			style={{
				paddingTop: 'clamp(4rem, 8vh, 8rem)',
				paddingBottom: 'clamp(4rem, 8vh, 8rem)',
			}}
		>
			{/* Header */}
			<div className='px-[3vw] md:px-[4vw]' style={{ marginBottom: '8vh' }}>
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
						Credentials
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
						Certifications
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

			{/* Certification rows */}
			<div className='flex flex-col px-[3vw] md:px-[4vw]'>
				{certifications.map((cert, index) => (
					<FadeIn key={index} delay={index * 0.05} className='w-full'>
						<div
							className='w-full group border-t last:border-b transition-colors duration-500'
							style={{ borderColor: 'var(--theme-border)' }}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor =
									'var(--theme-card-hover)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = 'transparent';
							}}
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
									{cert.source}
								</div>
								<div
									className='md:w-3/4 transition-colors duration-300'
									style={{
										fontSize: 'clamp(0.8rem, 0.95vw, 1rem)',
										color: 'var(--theme-body)',
										fontWeight: 400,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.color = 'var(--theme-heading)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.color = 'var(--theme-body)';
									}}
								>
									{cert.title}
								</div>
							</div>
						</div>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
