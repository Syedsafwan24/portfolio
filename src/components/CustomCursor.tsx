'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);
	const cursorDotX = useMotionValue(-100);
	const cursorDotY = useMotionValue(-100);
	const cursorLabelX = useMotionValue(-100);
	const cursorLabelY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	const [isHovering, setIsHovering] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const [hoverText, setHoverText] = useState('');

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX - 20);
			cursorY.set(e.clientY - 20);
			cursorDotX.set(e.clientX - 3);
			cursorDotY.set(e.clientY - 3);
			cursorLabelX.set(e.clientX);
			cursorLabelY.set(e.clientY);
			if (!isVisible) setIsVisible(true);

			const target = e.target as HTMLElement;
			const cursorTarget = target.closest && target.closest('[data-cursor-text]') as HTMLElement;

			if (cursorTarget) {
				const text = cursorTarget.getAttribute('data-cursor-text') || '';
				setHoverText(text);
				setIsHovering(true);
			} else if (
				target.tagName === 'A' ||
				target.tagName === 'BUTTON' ||
				(target.closest && (target.closest('a') || target.closest('button') || target.closest('[role="button"]')))
			) {
				setHoverText('');
				setIsHovering(true);
			} else {
				setHoverText('');
				setIsHovering(false);
			}
		};

		const handleMouseLeave = () => {
			setIsVisible(false);
		};

		window.addEventListener('mousemove', moveCursor);
		document.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
			document.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [
		cursorX,
		cursorY,
		cursorDotX,
		cursorDotY,
		cursorLabelX,
		cursorLabelY,
		isVisible,
	]);

	// Don't render on touch devices
	if (typeof window !== 'undefined' && 'ontouchstart' in window) {
		return null;
	}

	return (
		<>
			{/* Outer ring */}
			<motion.div
				className='fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference hidden md:block'
				style={{
					x: cursorXSpring,
					y: cursorYSpring,
				}}
			>
				<motion.div
					className='w-10 h-10 rounded-full border'
					animate={{
						scale: isHovering ? (hoverText ? 0 : 1.8) : 1,
						opacity: (isVisible && !hoverText) ? 1 : 0,
						borderColor: isHovering
							? 'color-mix(in srgb, var(--theme-cursor) 95%, transparent)'
							: 'color-mix(in srgb, var(--theme-cursor) 60%, transparent)',
					}}
					transition={{ duration: 0.2, ease: 'easeOut' }}
				/>
			</motion.div>

			{/* Inner dot */}
			<motion.div
				className='fixed top-0 left-0 z-[10001] pointer-events-none mix-blend-difference hidden md:block'
				style={{
					x: cursorDotX,
					y: cursorDotY,
				}}
			>
				<motion.div
					className='w-1.5 h-1.5 rounded-full'
					animate={{
						scale: isHovering ? 0 : 1,
						opacity: (isVisible && !hoverText) ? 1 : 0,
					}}
					style={{ backgroundColor: 'var(--theme-cursor)' }}
					transition={{ duration: 0.15 }}
				/>
			</motion.div>

			{/* Hover label */}
			<motion.div
				className='fixed top-0 left-0 z-[10002] pointer-events-none hidden md:block'
				style={{
					x: cursorLabelX,
					y: cursorLabelY,
					translateX: '-50%',
					translateY: '-50%',
					backgroundColor: 'var(--theme-project-tooltip-bg)',
					color: 'var(--theme-project-tooltip-text)',
					fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
					fontWeight: 500,
					padding: '0.35em 0.85em',
					borderRadius: '99px',
					lineHeight: 1.1,
					whiteSpace: 'nowrap',
				}}
				animate={{
					opacity: (isHovering && isVisible && hoverText) ? 1 : 0,
					scale: isHovering && hoverText ? 1 : 0.98,
				}}
				transition={{ duration: 0.08 }}
			>
				{hoverText}
			</motion.div>
		</>
	);
}
