'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '@/components/RootProvider';

export function Nav() {
	const { isLoading } = useLoading();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close mobile menu when clicking on a section link
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const href = e.currentTarget.getAttribute('href');
		// Only close if it's a hash link (not an external link)
		if (href?.startsWith('#')) {
			setMobileMenuOpen(false);
		}
	};

	const navLinks = [
		{ href: '#work', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' },
	];

	return (
		<header
			className={`fixed top-0 w-full z-50 h-[56px] transition-colors duration-300 bg-[#F1F1F1] ${
				isLoading ? 'hidden' : ''
			} ${
				scrolled ? 'border-b border-[#0A0A0A]' : 'border-b border-transparent'
			}`}
		>
			<div className='h-full px-[20px] md:px-[80px] max-w-[1920px] mx-auto flex items-center justify-between'>
				<a
					href='#'
					className='font-bold text-[16px] hover:opacity-60 transition-opacity'
				>
					SY3D
				</a>

				{/* Desktop Nav */}
				<nav className='hidden md:flex items-center gap-8 text-[13px]'>
					{navLinks.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							className='hover:opacity-60 transition-opacity cursor-pointer'
						>
							{label}
						</a>
					))}
					<a
						href='/SyedSafwan_Resume_Final.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:opacity-60 transition-opacity font-medium cursor-pointer'
					>
						Resume
					</a>
					<span className='italic text-[12px]'>Available</span>
				</nav>

				{/* Mobile Nav Toggle */}
				<button
					className='md:hidden text-[13px] font-bold hover:opacity-60 transition-opacity'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label='Toggle mobile menu'
					aria-expanded={mobileMenuOpen}
				>
					{mobileMenuOpen ? 'CLOSE' : 'MENU'}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{mobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.2 }}
					className='absolute top-[56px] left-0 w-full bg-[#F1F1F1] border-b border-[#0A0A0A] px-[20px] py-4 flex flex-col gap-3 text-[14px] md:hidden'
				>
					{navLinks.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							onClick={handleNavClick}
							className='hover:opacity-60 transition-opacity cursor-pointer py-1'
						>
							{label}
						</a>
					))}
					<a
						href='/SyedSafwan_Resume_Final.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:opacity-60 transition-opacity cursor-pointer py-1'
					>
						Resume
					</a>
					<span className='italic text-[12px] text-gray-600'>Available</span>
				</motion.div>
			)}
		</header>
	);
}
