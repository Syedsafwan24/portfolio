'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import type { ElementType, JSX, ReactNode } from 'react';
import { useRef } from 'react';

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const DURATION = 0.8;

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
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: DURATION, ease: EASE, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function FadeInSlide({
	children,
	delay = 0,
	className = '',
	direction = 'up',
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	direction?: 'up' | 'down' | 'left' | 'right';
}) {
	const directionMap = {
		up: { y: 40, x: 0 },
		down: { y: -40, x: 0 },
		left: { y: 0, x: 40 },
		right: { y: 0, x: -40 },
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				y: directionMap[direction].y,
				x: directionMap[direction].x,
				filter: 'blur(4px)',
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				x: 0,
				filter: 'blur(0px)',
			}}
			viewport={{ once: true, margin: '-60px' }}
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
				initial={{ y: '110%' }}
				whileInView={{ y: 0 }}
				viewport={{ once: true, margin: '-80px' }}
				transition={{ duration: 0.9, ease: EASE, delay }}
				className={className}
			>
				{children}
			</Tag>
		</div>
	);
}

export function Parallax({
	children,
	className = '',
	speed = 0.2,
}: {
	children: ReactNode;
	className?: string;
	speed?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

	return (
		<div ref={ref} className={className}>
			<motion.div style={{ y }}>{children}</motion.div>
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
						initial={{ y: '100%', opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{
							duration: DURATION,
							ease: EASE,
							delay: delay + i * 0.08,
						}}
					>
						{word}
					</motion.span>
				</span>
			))}
		</div>
	);
}
