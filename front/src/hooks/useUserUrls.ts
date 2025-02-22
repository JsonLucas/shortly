import { useMutation, useQuery } from 'react-query';
import { createShortUrl, deleteUserUrl, getUserUrls, visitShorten } from '../api/urls';
import { queryClient } from '../main';

export const useUserUrls = () => {
	const onSuccess = () => queryClient.invalidateQueries(['user-urls']);

	const { data, error, isLoading, refetch } = useQuery({ queryFn: getUserUrls, queryKey: ['user-urls'] });

	const { mutateAsync: shortenUrl, isLoading: isShortenLoading } = useMutation({ 
		mutationFn: async (fullUrl: string) => await createShortUrl({ fullUrl }), 
		onSuccess
	});

	const { mutateAsync: visitShortUrl } = useMutation({ 
		mutationFn: async (shortUrl: string) => await visitShorten(shortUrl), 
		onSuccess
	});

	const { mutateAsync: action, isLoading: isDestroying } = useMutation({ 
		mutationFn: async (id: number) => await deleteUserUrl(id), 
		onSuccess
	});

	return { 
		userUrls: { data, error, isLoading, refetch },
		create: { shortenUrl, isShortenLoading },
		visitShortUrl,
		destroy: { action, isDestroying }
	};
}