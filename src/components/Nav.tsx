'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading, useTheme } from '@/components/RootProvider';

export function Nav() {
	const { isLoading } = useLoading();
	const { theme, toggleTheme } = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const isLight = theme === 'light';

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = () => {
		setMobileMenuOpen(false);
	};

	const navLinks = [
		{ href: '#projects', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' },
	];

	return (
		<motion.header
			initial={{ y: '-10vh', opacity: 0 }}
			animate={!isLoading ? { y: 0, opacity: 1 } : { y: '-10vh', opacity: 0 }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
			className={`fixed left-0 right-0 z-50 transition-all duration-500 nav-mobile-shell ${
				scrolled
					? 'top-[1.8vh] mx-[20vw] rounded-full backdrop-blur-[30px] backdrop-saturate-150'
					: 'top-0 mx-0 rounded-none bg-transparent border border-transparent backdrop-blur-none'
			}`}
			style={
				scrolled ? { backgroundColor: 'var(--theme-navbar-bg)' } : undefined
			}
		>
			<div
				className={`px-[3vw] md:px-[4vw] flex items-center justify-between transition-all duration-500 nav-mobile-row ${
					scrolled ? 'h-[7.6vh]' : 'h-[8.5vh] md:h-[10.5vh]'
				}`}
			>
				{/* Logo */}
				<a
					href='#'
					className='font-display lowercase tracking-[0.04em] transition-colors duration-300'
					style={{
						fontSize: 'clamp(0.9rem, 1.12vw, 1.24rem)',
						color: 'var(--theme-heading)',
						fontWeight: 900,
						transform: 'scaleX(1.18)',
						transformOrigin: 'left',
					}}
				>
					sy3d
				</a>

				{/* Desktop Nav */}
				<nav
					className='hidden md:flex items-center gap-[2.1vw] uppercase'
					style={{ fontSize: 'min(0.72vw, 0.68rem)', letterSpacing: '0.14em' }}
				>
					{navLinks.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							className='relative group transition-colors duration-300 py-[0.5vh]'
							style={{ color: 'var(--theme-navbar-link)', fontWeight: 450 }}
						>
							{label}
							<span
								className='absolute bottom-0 left-0 w-full h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]'
								style={{ backgroundColor: 'var(--theme-heading)' }}
							/>
						</a>
					))}
					<button
						onClick={toggleTheme}
						className='ml-[0.5vw] flex items-center gap-[0.4vw] transition-colors duration-300 rounded-full px-[1vw] py-[0.6vh]'
						style={{
							color: 'var(--theme-toggle-text)',
							fontWeight: 400,
							borderWidth: '1px',
							borderStyle: 'solid',
							borderColor: 'var(--theme-toggle-border)',
						}}
						aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
					>
						<span
							className='rounded-full relative overflow-hidden flex'
							style={{
								width: '0.55vw',
								height: '0.55vw',
								minWidth: '8px',
								minHeight: '8px',
								backgroundColor: 'var(--theme-toggle-text)',
								opacity: 0.35,
								border: '1px solid var(--theme-toggle-border)',
							}}
						>
							<span
								className='w-1/2 h-full'
								style={{
									backgroundColor: 'var(--theme-toggle-text)',
									opacity: 0.9,
								}}
							></span>
							<span className='w-1/2 h-full bg-transparent'></span>
						</span>
						{isLight ? 'DARK' : 'LIGHT'}
					</button>
				</nav>

				{/* Mobile Nav Toggle */}
				<button
					className='md:hidden transition-colors tracking-[0.15em] uppercase'
					style={{
						fontSize: 'min(2.8vw, 0.7rem)',
						color: 'var(--theme-navbar-link)',
						fontWeight: 400,
					}}
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label='Toggle mobile menu'
					aria-expanded={mobileMenuOpen}
				>
					{mobileMenuOpen ? 'CLOSE' : 'MENU'}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{
							duration: 0.4,
							ease: [0.16, 1, 0.3, 1],
						}}
						className={`absolute top-[8vh] left-0 w-full backdrop-blur-2xl overflow-hidden md:hidden border-b nav-mobile-menu-panel`}
						style={{
							backgroundColor: 'var(--theme-surface)',
							borderColor: 'var(--theme-border)',
						}}
					>
						<div
							className='px-[5vw] py-[5vh] flex flex-col gap-[3vh] uppercase tracking-[0.15em]'
							style={{ fontSize: 'min(3.5vw, 0.85rem)' }}
						>
							{navLinks.map(({ href, label }, i) => (
								<motion.a
									key={href}
									href={href}
									onClick={handleNavClick}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.05 }}
									className='transition-colors'
									style={{ color: 'var(--theme-navbar-link)', fontWeight: 500 }}
								>
									{label}
								</motion.a>
							))}
							<button
								onClick={toggleTheme}
								className='flex items-center gap-[2vw] transition-colors duration-300 rounded-full px-[4vw] py-[1.2vh] w-fit mt-[1vh]'
								style={{
									color: 'var(--theme-toggle-text)',
									fontWeight: 400,
									borderWidth: '1px',
									borderStyle: 'solid',
									borderColor: 'var(--theme-toggle-border)',
								}}
							>
								<span
									className='rounded-full relative overflow-hidden flex'
									style={{
										width: '2.5vw',
										height: '2.5vw',
										minWidth: '10px',
										minHeight: '10px',
										backgroundColor: 'var(--theme-toggle-text)',
										opacity: 0.35,
										border: '1px solid var(--theme-toggle-border)',
									}}
								>
									<span
										className='w-1/2 h-full'
										style={{
											backgroundColor: 'var(--theme-toggle-text)',
											opacity: 0.9,
										}}
									></span>
									<span className='w-1/2 h-full bg-transparent'></span>
								</span>
								{isLight ? 'DARK' : 'LIGHT'}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
