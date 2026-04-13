'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Preloader({ isComplete }: { isComplete: boolean }) {
	const [showLoader, setShowLoader] = useState(!isComplete);
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		if (!isComplete) {
			// Animate percentage from 0 to 100 over 2.3 seconds
			const startTime = Date.now();
			const duration = 2300;

			const interval = setInterval(() => {
				const elapsed = Date.now() - startTime;
				const progress = Math.min((elapsed / duration) * 100, 100);
				setPercentage(Math.floor(progress));

				if (progress >= 100) {
					clearInterval(interval);
					setPercentage(100);
				}
			}, 20);

			return () => clearInterval(interval);
		} else {
			const timer = setTimeout(() => {
				setShowLoader(false);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [isComplete]);

	if (!showLoader) return null;

	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6, ease: 'easeInOut' }}
			className='fixed inset-0 bg-[#0A0A0A] z-[999] flex items-center justify-center overflow-hidden'
		>
			<div className='flex flex-col items-center justify-center gap-8'>
				{/* SY3D Text */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='text-6xl md:text-7xl font-bold font-mono text-white tracking-tighter'
				>
					SY3D
				</motion.div>

				{/* Loading Bar */}
				<div className='w-64 flex flex-col items-center gap-3'>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{
							duration: 2.3,
							ease: 'easeInOut',
						}}
						className='w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent origin-left'
					/>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.3 }}
						className='text-xs font-mono text-white/50 tracking-widest'
					>
						{percentage}%
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
