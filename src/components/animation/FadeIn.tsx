'use client';

import { motion } from 'framer-motion';
import type { ElementType, JSX, ReactNode } from 'react';

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const DURATION = 0.7;

export function FadeIn({
	children,
	delay = 0,
	className = '',
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: DURATION, ease: EASE, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function ClipUp({
	children,
	delay = 0,
	className = '',
	tag = 'div',
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	tag?: keyof JSX.IntrinsicElements;
}) {
	const Tag = motion[tag as keyof typeof motion] as ElementType;

	return (
		<div className='overflow-hidden'>
			<Tag
				initial={{ y: '100%' }}
				whileInView={{ y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: DURATION, ease: EASE, delay }}
				className={className}
			>
				{children}
			</Tag>
		</div>
	);
}

export function StaggeredText({
	text,
	className = '',
	delay = 0,
}: {
	text: string;
	className?: string;
	delay?: number;
}) {
	const words = text.split(' ');

	return (
		<div className={className}>
			{words.map((word, i) => (
				<span
					key={i}
					className='inline-block overflow-hidden mr-[0.25em] pb-[0.1em] -mb-[0.1em]'
				>
					<motion.span
						className='inline-block'
						initial={{ y: '100%' }}
						whileInView={{ y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{
							duration: DURATION,
							ease: EASE,
							delay: delay + i * 0.1,
						}}
					>
						{word}
					</motion.span>
				</span>
			))}
		</div>
	);
}
