'use client';

import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
} from 'react';

const LoadingContext = createContext<{ isLoading: boolean }>({
	isLoading: true,
});

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
	theme: Theme;
	toggleTheme: () => void;
}>({
	theme: 'dark',
	toggleTheme: () => {},
});

export function useLoading() {
	return useContext(LoadingContext);
}

export function useTheme() {
	return useContext(ThemeContext);
}

export function RootProvider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== 'undefined') {
			return document.documentElement.classList.contains('light-mode')
				? 'light'
				: 'dark';
		}
		return 'dark';
	});

	const applyTheme = useCallback((nextTheme: Theme) => {
		document.documentElement.classList.toggle(
			'light-mode',
			nextTheme === 'light',
		);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true);
		}, 2800);

		return () => clearTimeout(timer);
	}, []);

	// Read saved theme on mount
	useEffect(() => {
		const saved = localStorage.getItem('theme') as Theme | null;
		if (saved === 'light' || saved === 'dark') {
			setTheme(saved);
			applyTheme(saved);
			return;
		}

		applyTheme('dark');
		localStorage.setItem('theme', 'dark');
	}, [applyTheme]);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next = prev === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			localStorage.setItem('theme', next);
			return next;
		});
	}, [applyTheme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<LoadingContext.Provider value={{ isLoading: !mounted }}>
				<CustomCursor />
				<Preloader isComplete={mounted} />
				{children}
			</LoadingContext.Provider>
		</ThemeContext.Provider>
	);
}
