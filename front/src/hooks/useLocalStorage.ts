import { GenericObject } from "../interfaces/auth";

export const useLocalStorage = () => {
	const getValue = (name: string) => {
		try {
			const jsonValue = localStorage.getItem(name);
			if (jsonValue) return JSON.parse(jsonValue);
		} catch (e: any) {
			console.log(e);
		}
		return null;
	};

	const removeValue = (name: string) => {
		localStorage.removeItem(name);
	}

	const setItem = (name: string, value: GenericObject | string) => {
		const json = JSON.stringify(value);
		localStorage.setItem(name, json);
	}

	return { setItem, getValue, removeValue };
}