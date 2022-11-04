export const useToast = () => {
	const successToast = (message: string) => {};
	const errorToast = (message: string) => {};

	return { successToast, errorToast };
}