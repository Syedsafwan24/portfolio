'use client';

import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/CustomCursor';
import { usePathname } from 'next/navigation';
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
	useCallback,
} from 'react';

/**
 * Layout effects run before paint on the client, which is what lets the
 * preloader be removed without a flash. useLayoutEffect is a no-op (and warns)
 * during prerendering, so fall back to useEffect there.
 */
const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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

const PRELOADER_SEEN_KEY = 'sy3d:preloader-seen';
/** Below this the reveal reads as a flicker rather than an intro. */
const PRELOADER_MIN_MS = 400;
/** Hard ceiling — a slow asset must never hold the page hostage. */
const PRELOADER_MAX_MS = 900;

/**
 * The preloader is an intro, not a loading state: the HTML is fully static and
 * already painted underneath it. So show it only where it earns its cost —
 * the home page, once per session, for visitors who haven't asked for reduced
 * motion. Everywhere else the page is interactive immediately.
 */
function shouldSkipPreloader(pathname: string): boolean {
	if (pathname !== '/') return true;
	try {
		if (sessionStorage.getItem(PRELOADER_SEEN_KEY) === '1') return true;
	} catch {
		// Private mode / blocked storage — fall through and show it.
	}
	try {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return true;
		}
	} catch {
		// matchMedia unavailable — fall through.
	}
	return false;
}

export function RootProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [mounted, setMounted] = useState(false);
	// Starts false so hydration matches the prerendered overlay; the layout
	// effect below flips it before the browser paints.
	const [skipPreloader, setSkipPreloader] = useState(false);
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

	useIsomorphicLayoutEffect(() => {
		if (shouldSkipPreloader(pathname)) {
			setSkipPreloader(true);
			setMounted(true);
			return;
		}

		try {
			sessionStorage.setItem(PRELOADER_SEEN_KEY, '1');
		} catch {
			// Non-fatal; the preloader just shows again next navigation.
		}

		const start = performance.now();
		let cancelled = false;
		let minTimer: ReturnType<typeof setTimeout> | undefined;

		const finish = () => {
			if (!cancelled) setMounted(true);
		};

		// Hold for the remainder of the minimum, then release.
		const settle = () => {
			const remaining = PRELOADER_MIN_MS - (performance.now() - start);
			minTimer = setTimeout(finish, Math.max(remaining, 0));
		};

		const capTimer = setTimeout(finish, PRELOADER_MAX_MS);

		if (document.readyState === 'complete') {
			settle();
		} else {
			window.addEventListener('load', settle, { once: true });
		}

		return () => {
			cancelled = true;
			clearTimeout(capTimer);
			if (minTimer) clearTimeout(minTimer);
			window.removeEventListener('load', settle);
		};
	}, [pathname]);

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
		// Scope the global colour transition to the toggle itself so it isn't
		// paid on every style recalc across a large content page.
		const root = document.documentElement;
		root.classList.add('theme-switching');
		window.setTimeout(() => root.classList.remove('theme-switching'), 320);

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
				<Preloader isComplete={mounted} skip={skipPreloader} />
				{children}
			</LoadingContext.Provider>
		</ThemeContext.Provider>
	);
}
