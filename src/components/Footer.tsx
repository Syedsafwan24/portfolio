'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './animation/FadeIn';

export function Footer() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<footer
			id='contact'
			className='relative overflow-hidden px-[3vw] md:px-[4vw]'
			style={{ paddingTop: 'clamp(4rem, 8vh, 8rem)' }}
		>
			{/* Background glow */}
			<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] pointer-events-none'>
				<div
					className='w-full h-full'
					style={{
						background:
							'radial-gradient(ellipse at bottom, color-mix(in srgb, var(--theme-orange) 24%, transparent), transparent 60%)',
					}}
				/>
			</div>

			<div className='w-full relative z-10'>
				{/* Small label */}
				<FadeIn>
					<div
						className='font-display uppercase tracking-[0.2em]'
						style={{
							fontSize: 'clamp(0.65rem, 0.8vw, 0.9rem)',
							color: 'var(--theme-muted)',
							fontWeight: 300,
							marginBottom: '6vh',
						}}
					>
						Get in touch
					</div>
				</FadeIn>

				{/* Giant CTA */}
				<FadeIn delay={0.1}>
					<div
						className='font-display'
						style={{
							fontWeight: 900,
							fontStyle: 'normal',
							fontStretch: 'expanded',
							letterSpacing: '-0.02em',
							fontSize: 'clamp(2.8rem, 8vw, 8rem)',
							lineHeight: 1,
							marginBottom: '1vh',
						}}
					>
						{/* "Say hi!" */}
						<div
							style={{
								color: 'var(--theme-heading)',
								marginBottom: '0.05em',
							}}
						>
							Say Hi!
						</div>

						{/* "Let's talk ↗" */}
						<a
							href='mailto:syedsafwanpirzade@gmail.com'
							style={{
								textDecoration: 'none',
								display: 'inline-block',
								width: 'fit-content',
							}}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							data-cursor-text="Send Message"
						>
							<div
								style={{
									color: isHovered
										? 'var(--theme-orange)'
										: 'var(--theme-heading)',
									transition: 'color 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
									display: 'flex',
									alignItems: 'baseline',
									gap: '0.15em',
								}}
							>
								Let&apos;s Talk
								<motion.svg
									width='0.5em'
									height='0.5em'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
									animate={isHovered ? { x: 6, y: -6 } : { x: 0, y: 0 }}
									transition={{
										duration: 0.3,
										ease: [0.16, 1, 0.3, 1],
									}}
									style={{
										display: 'inline-block',
										flexShrink: 0,
									}}
								>
									<line x1='7' y1='17' x2='17' y2='7' />
									<polyline points='7 7 17 7 17 17' />
								</motion.svg>
							</div>

							{/* Orange underline on hover */}
							<motion.div
								style={{
									height: '4px',
									backgroundColor: 'var(--theme-orange)',
									transformOrigin: 'left',
									borderRadius: '2px',
									marginTop: '1.5vh',
								}}
								animate={{ scaleX: isHovered ? 1 : 0 }}
								initial={{ scaleX: 0 }}
								transition={{
									duration: 0.5,
									ease: [0.16, 1, 0.3, 1],
								}}
							/>
						</a>
					</div>
				</FadeIn>

				{/* Spacer */}
				<div style={{ height: '9vh' }} />

				{/* Bottom info row */}
				<FadeIn delay={0.2}>
					<div
						className='flex flex-col md:flex-row justify-between items-start md:items-end gap-[2vh] md:gap-0'
						style={{ marginBottom: '4vh' }}
					>
						{/* Left — email & location */}
						<div className='flex flex-col gap-[0.6vh]'>
							<a
								href='mailto:syedsafwanpirzade@gmail.com'
								style={{
									color: 'var(--theme-body)',
									fontSize: 'clamp(0.8rem, 0.95vw, 1rem)',
									textDecoration: 'none',
									transition: 'color 0.3s',
									fontWeight: 400,
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color = 'var(--theme-heading)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color = 'var(--theme-body)')
								}
							>
								syedsafwanpirzade@gmail.com
							</a>
							<span
								style={{
									color: 'var(--theme-muted)',
									fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)',
									fontWeight: 300,
								}}
							>
								Bhatkal, India
							</span>
						</div>

						{/* Right — social links */}
						<div className='flex gap-[2vw]'>
							{[
								{
									label: 'EMAIL',
									href: 'mailto:syedsafwanpirzade@gmail.com',
								},
								{
									label: 'LINKEDIN',
									href: 'https://linkedin.com/in/syedsafwanpirzade',
								},
								{
									label: 'GITHUB',
									href: 'https://github.com/Syedsafwan24',
								},
								{
									label: 'RESUME',
									href: '/SyedSafwan_Resume_Final.pdf',
								},
							].map((link) => (
								<a
									key={link.label}
									href={link.href}
									target={link.href.startsWith('mailto') ? undefined : '_blank'}
									rel='noopener noreferrer'
									className='font-display uppercase tracking-[0.15em]'
									style={{
										color: 'var(--theme-muted)',
										fontSize: 'clamp(0.6rem, 0.7vw, 0.8rem)',
										textDecoration: 'none',
										transition: 'color 0.3s',
										fontWeight: 400,
									}}
									onMouseEnter={(e) =>
										(e.currentTarget.style.color = 'var(--theme-heading)')
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.color = 'var(--theme-muted)')
									}
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</FadeIn>

				{/* Bottom divider */}
				<div
					style={{
						width: '100%',
						height: '1px',
						background: 'var(--theme-border)',
						marginBottom: '3vh',
					}}
				/>

				{/* Copyright */}
				<div
					className='text-center font-sans'
					style={{
						color: 'var(--theme-muted)',
						fontSize: 'clamp(0.62rem, 0.72vw, 0.8rem)',
						fontWeight: 300,
						letterSpacing: '0.05em',
						paddingBottom: '4vh',
					}}
				>
					© 2026 Syed Safwan · Frontend Developer
				</div>
			</div>
		</footer>
	);
}
