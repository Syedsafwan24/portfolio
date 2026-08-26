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
	fadeOpacity = false,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	/**
	 * Whether to fade as well as translate. Defaults to false.
	 *
	 * `initial={{ opacity: 0 }}` is serialised into the prerendered HTML as
	 * style="opacity:0". Googlebot runs the JS and recovers, but extractors that
	 * don't (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) can read that as
	 * hidden text — and in this codebase every one of these wrappers holds
	 * indexable prose. Translating without fading keeps the great majority of
	 * the perceived motion while leaving the markup visible, so it is the safe
	 * default; opt back in only for purely decorative elements.
	 */
	fadeOpacity?: boolean;
}) {
	const hidden = fadeOpacity ? { opacity: 0, y: 30 } : { y: 30 };
	const shown = fadeOpacity ? { opacity: 1, y: 0 } : { y: 0 };

	return (
		<motion.div
			initial={hidden}
			whileInView={shown}
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
	fadeOpacity = false,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	direction?: 'up' | 'down' | 'left' | 'right';
	/** See FadeIn — defaults to false so prerendered prose is never hidden. */
	fadeOpacity?: boolean;
}) {
	const directionMap = {
		up: { y: 40, x: 0 },
		down: { y: -40, x: 0 },
		left: { y: 0, x: 40 },
		right: { y: 0, x: -40 },
	};

	const offset = directionMap[direction];

	return (
		<motion.div
			initial={
				fadeOpacity
					? { opacity: 0, y: offset.y, x: offset.x, filter: 'blur(4px)' }
					: { y: offset.y, x: offset.x }
			}
			whileInView={
				fadeOpacity
					? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
					: { y: 0, x: 0 }
			}
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
						initial={{ y: '100%' }}
						whileInView={{ y: 0 }}
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
