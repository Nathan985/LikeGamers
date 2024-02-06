
import { ILocalStorageAdapter, LocalStorageKeys } from './interface';

class LocalStorageAdapter implements ILocalStorageAdapter {
	set(key: LocalStorageKeys, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	get<T = string>(key: LocalStorageKeys): T | null {
		const localStorageItem = localStorage.getItem(key);
		return localStorageItem ? JSON.parse(localStorageItem) as T : null;
	}

	remove(key: LocalStorageKeys): void {
		return localStorage.removeItem(key);
	}
}

export const localStorageAdapter = new LocalStorageAdapter();
