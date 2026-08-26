'use client';

import { motion } from 'framer-motion';

export function Ticker() {
	// Mirrors what the service pages actually target, so the marquee reinforces
	// the same terms rather than describing an older frontend-only positioning.
	const items = [
		'FULL STACK DEV',
		'ERP SYSTEMS',
		'POS & BILLING',
		'ELECTION SYSTEMS',
		'E-COMMERCE',
		'MOBILE APPS',
		'UI/UX DESIGN',
		'BHATKAL, KARNATAKA',
		'GULF & INDIA',
		'AVAILABLE',
	];

	// Duplicate enough for seamless loop
	const repeated = [...items, ...items, ...items, ...items];

	return (
		<div
			className='w-full border-t border-b bg-transparent overflow-hidden select-none ticker-mobile-wrap'
			style={{ padding: '2vh 0', borderColor: 'var(--theme-border-heading)' }}
		>
			<motion.div
				className='flex items-center whitespace-nowrap'
				animate={{ x: ['0%', '-50%'] }}
				transition={{
					repeat: Infinity,
					ease: 'linear',
					duration: 25,
				}}
				style={{ width: 'fit-content' }}
			>
				{repeated.map((item, i) => (
					<span key={i} className='flex items-center'>
						<span
							className='font-display uppercase tracking-[0.15em]'
							style={{
								fontSize: 'clamp(0.7rem, 1vw, 1rem)',
								color: 'var(--theme-body)',
								fontWeight: 500,
							}}
						>
							{item}
						</span>
						<span
							className='mx-[2vw]'
							style={{
								fontSize: 'clamp(0.6rem, 0.8vw, 0.9rem)',
								color: 'var(--theme-dim)',
							}}
						>
							+
						</span>
					</span>
				))}
			</motion.div>
		</div>
	);
}
