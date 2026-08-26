'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLoading, useTheme } from '@/components/RootProvider';

type NavLink = { href: string; label: string; route?: boolean };

export function Nav() {
	const pathname = usePathname();
	const { isLoading } = useLoading();
	const { theme, toggleTheme } = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const isLight = theme === 'light';

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const y = window.scrollY;
			setScrolled((prev) => {
				if (prev) {
					return y > 24;
				}
				return y > 56;
			});
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Scrolling with the menu open should dismiss it. The threshold avoids
	// closing on the scroll event that opening the menu can itself trigger as
	// the header grows.
	useEffect(() => {
		if (!mobileMenuOpen) return;

		const openedAt = window.scrollY;
		const handleScrollClose = () => {
			if (Math.abs(window.scrollY - openedAt) > 8) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener('scroll', handleScrollClose, { passive: true });
		return () => window.removeEventListener('scroll', handleScrollClose);
	}, [mobileMenuOpen]);

	const handleNavClick = () => {
		setMobileMenuOpen(false);
	};

	/**
	 * On any other route the logo just navigates home. On the home page itself
	 * that would be a no-op, so scroll back to the top instead.
	 */
	const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		setMobileMenuOpen(false);

		if (window.location.pathname !== '/') return;

		event.preventDefault();
		const reduceMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;
		window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
	};

	// Section anchors only resolve on the home page; everywhere else they have
	// to carry the path or they scroll nowhere.
	const onHome = pathname === '/';
	const hash = (id: string) => (onHome ? `#${id}` : `/#${id}`);

	// trailingSlash: true means pathname carries a trailing slash; normalise
	// both sides so '/services/erp-software/' still marks Services as current.
	const withSlash = (value: string) =>
		value.endsWith('/') ? value : `${value}/`;

	const isActive = (href: string, route?: boolean) => {
		if (!route) return false;
		const current = withSlash(pathname);
		const target = withSlash(href);
		return target === '/' ? current === '/' : current.startsWith(target);
	};

	const navLinks: NavLink[] = [
		{ href: '/', label: 'Home', route: true },
		{ href: '/services/', label: 'Services', route: true },
		{ href: '/work/', label: 'Work', route: true },
		{ href: '/answers/', label: 'FAQ', route: true },
		{ href: hash('about'), label: 'About' },
		{ href: hash('contact'), label: 'Contact' },
	];

	return (
		<motion.header
			initial={{ y: '-10vh' }}
			animate={{
				y: !isLoading ? 0 : '-10vh',
				top: scrolled ? '1.4vh' : '0vh',
				marginLeft: scrolled ? (isMobile ? '6vw' : '16vw') : '0vw',
				marginRight: scrolled ? (isMobile ? '6vw' : '16vw') : '0vw',
				borderRadius: mobileMenuOpen
					? '1.5rem'
					: scrolled
						? '9999px'
						: '0px',
				backgroundColor: scrolled
					? 'var(--theme-navbar-blur-bg)'
					: 'var(--theme-navbar-blur-bg-transparent)',
				backdropFilter: scrolled
					? 'blur(24px) saturate(170%)'
					: 'blur(0px) saturate(100%)',
				borderColor: scrolled
					? 'var(--theme-border-strong)'
					: 'var(--theme-border-strong-transparent)',
			}}
			transition={{
				duration: 0.62,
				ease: [0.22, 1, 0.36, 1],
				delay: !isLoading ? 0 : 0.2,
			}}
			layout
			className='fixed left-0 right-0 z-50 border overflow-hidden will-change-[top,margin,border-radius,backdrop-filter,background-color] nav-mobile-shell'
			style={{
				WebkitBackdropFilter: scrolled
					? 'blur(24px) saturate(170%)'
					: 'blur(0px) saturate(100%)',
			}}
		>
			<div
				className={`px-[3vw] md:px-[4vw] flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] nav-mobile-row ${
					scrolled ? 'h-[7.6vh]' : 'h-[8.5vh] md:h-[10.5vh]'
				}`}
			>
				{/* Logo */}
				<Link
					href='/'
					onClick={handleLogoClick}
					aria-label='Syed Safwan Pirzade — home'
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
				</Link>

				{/* Desktop Nav */}
				<nav
					className='hidden md:flex items-center gap-[2.1vw] uppercase'
					style={{ fontSize: 'min(0.72vw, 0.68rem)', letterSpacing: '0.14em' }}
				>
					{navLinks.map(({ href, label, route }) => {
						const Tag = route ? Link : 'a';
						const active = isActive(href, route);
						return (
							<Tag
							key={href}
							href={href}
							aria-current={active ? 'page' : undefined}
							className='relative group transition-colors duration-300 py-[0.5vh]'
							style={{
								color: active
									? 'var(--theme-heading)'
									: 'var(--theme-navbar-link)',
								fontWeight: active ? 500 : 450,
							}}
						>
							{label}
							<span
								className={`absolute bottom-0 left-0 w-full h-[1px] origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
									active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
								}`}
								style={{ backgroundColor: 'var(--theme-heading)' }}
							/>
						</Tag>
						);
					})}
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

				{/* Mobile controls: menu + theme, sharing one pill treatment */}
				<div className='md:hidden flex items-center gap-[0.5rem]'>
				<button
					onClick={() => setMobileMenuOpen((open) => !open)}
					id='mobile-menu-button'
					aria-expanded={mobileMenuOpen}
					aria-controls='mobile-menu'
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					className='flex items-center transition-colors duration-300 rounded-full px-[0.95rem] py-[0.36rem]'
					style={{
						color: 'var(--theme-toggle-text)',
						fontWeight: 400,
						borderWidth: '1px',
						borderStyle: 'solid',
						borderColor: 'var(--theme-toggle-border)',
						fontSize: '0.68rem',
						letterSpacing: '0.14em',
					}}
				>
					{mobileMenuOpen ? 'CLOSE' : 'MENU'}
				</button>
				<button
					onClick={toggleTheme}
					className='flex items-center gap-[0.35rem] transition-colors duration-300 rounded-full px-[0.95rem] py-[0.36rem]'
					style={{
						color: 'var(--theme-toggle-text)',
						fontWeight: 400,
						borderWidth: '1px',
						borderStyle: 'solid',
						borderColor: 'var(--theme-toggle-border)',
						fontSize: '0.68rem',
						letterSpacing: '0.14em',
					}}
					aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
				>
					<span
						className='rounded-full relative overflow-hidden flex'
						style={{
							width: '8px',
							height: '8px',
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
			</div>
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
						id='mobile-menu'
						aria-labelledby='mobile-menu-button'
						className={`w-full backdrop-blur-2xl overflow-hidden md:hidden nav-mobile-menu-panel`}
						style={{
							backgroundColor: 'var(--theme-surface)',
							borderColor: 'var(--theme-border)',
						}}
					>
						<div
							className='px-[5vw] py-[5vh] flex flex-col gap-[3vh] uppercase tracking-[0.15em]'
							style={{ fontSize: 'min(3.5vw, 0.85rem)' }}
						>
							{navLinks.map(({ href, label, route }, i) => {
								const Tag = route ? motion.create(Link) : motion.a;
								const active = isActive(href, route);
								return (
									<Tag
									key={href}
									href={href}
									onClick={handleNavClick}
									aria-current={active ? 'page' : undefined}
									initial={{ x: -20 }}
									animate={{ x: 0 }}
									transition={{ delay: i * 0.05 }}
									className='transition-colors w-fit'
									style={{
										color: 'var(--theme-navbar-link)',
										fontWeight: active ? 700 : 500,
									}}
								>
									<span
										style={
											active
												? {
														display: 'inline-block',
														paddingBottom: '0.5vh',
														borderBottom:
															'1px solid var(--theme-heading)',
													}
												: undefined
										}
									>
										{label}
									</span>
								</Tag>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
