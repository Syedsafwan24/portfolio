'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function TypingText({
	text,
	delay = 0,
	speed = 0.05,
	className = '',
}: {
	text: string;
	delay?: number;
	speed?: number;
	className?: string;
}) {
	const [displayedText, setDisplayedText] = useState('');
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	useEffect(() => {
		if (!isVisible) return;

		let index = 0;
		const interval = setInterval(() => {
			if (index <= text.length) {
				setDisplayedText(text.substring(0, index));
				index++;
			} else {
				clearInterval(interval);
			}
		}, speed * 100);

		return () => clearInterval(interval);
	}, [isVisible, text, speed]);

	return (
		<motion.span
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: delay, duration: 0.5 }}
		>
			{displayedText}
			{isVisible && displayedText.length < text.length && (
				<motion.span
					animate={{ opacity: [1, 0] }}
					transition={{ duration: 0.8, repeat: Infinity }}
					className='inline-block ml-1'
				>
					_
				</motion.span>
			)}
		</motion.span>
	);
}
