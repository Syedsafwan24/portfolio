'use client';

import { Preloader } from '@/components/Preloader';
import { createContext, useContext, useEffect, useState } from 'react';

const LoadingContext = createContext<{ isLoading: boolean }>({
	isLoading: true,
});

export function useLoading() {
	return useContext(LoadingContext);
}

export function RootProvider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Simulate loading - in production, this would wait for actual content
		const timer = setTimeout(() => {
			setMounted(true);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<LoadingContext.Provider value={{ isLoading: !mounted }}>
			<Preloader isComplete={mounted} />
			{children}
		</LoadingContext.Provider>
	);
}
