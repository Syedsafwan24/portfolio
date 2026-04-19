'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Preloader({ isComplete }: { isComplete: boolean }) {
	const [showLoader, setShowLoader] = useState(!isComplete);

	useEffect(() => {
		if (isComplete) {
			const timer = setTimeout(() => {
				setShowLoader(false);
			}, 600);
			return () => clearTimeout(timer);
		}
	}, [isComplete]);

	if (!showLoader) return null;

	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
			className='fixed inset-0 z-[999] flex items-center justify-center overflow-hidden'
			style={{ backgroundColor: 'var(--theme-preloader-bg)' }}
		>
			<div className='flex flex-col items-center justify-center relative z-10'>
				{/* Name — Syne Bold */}
				<motion.div
					initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
					animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					className='font-display text-center'
					style={{
						fontSize: 'clamp(2.5rem, 7vw, 6rem)',
						fontWeight: 800,
						letterSpacing: '-0.02em',
						lineHeight: 1,
						color: 'var(--theme-heading)',
					}}
				>
					Syed Safwan
				</motion.div>

				{/* Loading Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className='mt-[4vh]'
					style={{ width: 'clamp(80px, 8vw, 120px)' }}
				>
					<div
						className='w-full h-[2px] relative overflow-hidden rounded-full'
						style={{ backgroundColor: 'var(--theme-border)' }}
					>
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{
								duration: 2.5,
								ease: [0.16, 1, 0.3, 1],
							}}
							className='absolute inset-0 origin-left rounded-full'
							style={{ backgroundColor: 'var(--theme-heading)' }}
						/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
