import type { ReactNode } from 'react';

/**
 * Scroll reveal for server-rendered content pages.
 *
 * The framer-motion helpers in components/animation are client components that
 * serialise their initial state into the markup. This is the server-side
 * equivalent: a single class, animated by the scroll-driven `.reveal` rule in
 * globals.css whose base state is fully visible. No JS, and nothing hidden in
 * the prerendered HTML.
 */
export function Reveal({
	children,
	className = '',
}: {
	children: ReactNode;
	className?: string;
}) {
	return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
