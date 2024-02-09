import { useRef, useCallback } from 'react';

function useDebounce<F extends (...args: any[]) => any>(fn: F, delay: number) {
	const fnRef = useRef<F>(fn);
	const debounceRef = useRef<NodeJS.Timeout | null>(null);

	fnRef.current = fn;

	const debouncedFn = useCallback((...args: Parameters<F>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		debounceRef.current = setTimeout(() => fnRef.current(...args), delay);
	}, [delay]);

	return debouncedFn;
}

export { useDebounce };
