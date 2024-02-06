import { localStorageKeys } from "shared/config";

export type LocalStorageKeys = typeof localStorageKeys[keyof typeof localStorageKeys]

export interface ILocalStorageAdapter {
	get: (key: LocalStorageKeys) => string | null
	remove: (key: LocalStorageKeys) => void
	set: (key: LocalStorageKeys, value: any) => void
}
