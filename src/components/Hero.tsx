'use client';

import { motion } from 'framer-motion';
import { ClipUp, DURATION, EASE, FadeIn } from './animation/FadeIn';
import { ArrowDown } from 'lucide-react';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: EASE },
	},
};

const rolesVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.2,
		},
	},
};

const roleItemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: EASE },
	},
};

export function Hero() {
	return (
		<section className='relative min-h-screen flex flex-col pt-[120px] px-[20px] md:px-[80px] max-w-[1920px] mx-auto justify-between pb-8 overflow-hidden'>
			{/* Animated background elements with rotation */}
			<motion.div
				className='absolute top-40 right-10 w-72 h-72 bg-[#0A0A0A]/5 rounded-full blur-3xl'
				animate={{
					y: [0, 30, 0],
					x: [0, 20, 0],
					rotate: [0, 360],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>
			<motion.div
				className='absolute bottom-40 left-10 w-56 h-56 bg-[#0A0A0A]/5 rounded-full blur-3xl'
				animate={{
					y: [0, -30, 0],
					x: [0, -20, 0],
					rotate: [360, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			{/* Additional pulsing orb */}
			<motion.div
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A0A0A]/3 rounded-full blur-3xl'
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className='relative z-10'>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: EASE }}
					className='font-mono text-[11px] mb-8 md:mb-16'
				>
					PORTFOLIO · 2026
				</motion.div>

				<motion.div className='flex flex-col text-[56px] md:text-[140px] font-bold leading-[0.9] tracking-tight w-full uppercase group cursor-pointer'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.1, duration: 0.8 }}
						whileHover={{ skewY: -2 }}
						className='overflow-hidden'
					>
						<motion.div
							transition={{ duration: 0.3 }}
							className='group-hover:italic'
						>
							<ClipUp delay={0.1}>SYED</ClipUp>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className='md:ml-[5%]'
						whileHover={{ skewY: -2 }}
					>
						<motion.div
							transition={{ duration: 0.3 }}
							className='group-hover:italic'
						>
							<ClipUp delay={0.2}>SAFWAN</ClipUp>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						whileHover={{ skewY: -2 }}
					>
						<motion.div
							transition={{ duration: 0.3 }}
							className='group-hover:italic'
						>
							<ClipUp delay={0.3}>PIRZADE</ClipUp>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<div className='mt-16 md:mt-auto relative z-10'>
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
					style={{ originX: 0 }}
					className='w-full h-[1px] bg-[#0A0A0A] mb-6 md:mb-8'
				/>

				<motion.div
					variants={rolesVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false, margin: '-100px' }}
					className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0'
				>
					<motion.div className='font-light text-[15px] md:text-[16px] leading-[1.8] max-w-md'>
						<motion.span variants={roleItemVariants} className='inline-block'>
							Frontend Developer
						</motion.span>
						<motion.span
							variants={roleItemVariants}
							className='inline-block mx-2'
						>
							·
						</motion.span>
						<motion.span
							variants={roleItemVariants}
							animate={{ color: ['#0A0A0A', '#333', '#0A0A0A'] }}
							transition={{ duration: 3, repeat: Infinity }}
							className='inline-block'
						>
							UI/UX Designer
						</motion.span>
						<motion.span
							variants={roleItemVariants}
							className='inline-block mx-2'
						>
							·
						</motion.span>
						<motion.span variants={roleItemVariants} className='inline-block'>
							Video Editor
						</motion.span>
						<motion.span
							variants={roleItemVariants}
							className='inline-block mx-2'
						>
							·
						</motion.span>
						<motion.span
							variants={roleItemVariants}
							animate={{ color: ['#0A0A0A', '#333', '#0A0A0A'] }}
							transition={{ duration: 3, repeat: Infinity, delay: 1 }}
							className='inline-block'
						>
							DevOps
						</motion.span>
						<motion.span
							variants={roleItemVariants}
							className='inline-block mx-2'
						>
							·
						</motion.span>
						<motion.span variants={roleItemVariants} className='inline-block'>
							AI-Augmented
						</motion.span>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className='font-light text-[15px] md:text-[16px] italic leading-[1.8] md:text-right max-w-xs'
						animate={{ opacity: [0.6, 1, 0.6] }}
						transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
					>
						<span className='block'>Building end-to-end digital products.</span>
						<span className='block'>Gulf to India.</span>
					</motion.div>
				</motion.div>

				<FadeIn
					delay={0.8}
					className='mt-16 md:mt-12 flex items-center gap-2 font-mono text-[11px]'
				>
					<motion.span
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						SCROLL
					</motion.span>
					<motion.div
						animate={{
							y: [0, 8, 0],
							opacity: [0.6, 1, 0.6],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						<ArrowDown size={14} strokeWidth={1.5} />
					</motion.div>
				</FadeIn>
			</div>
		</section>
	);
}
