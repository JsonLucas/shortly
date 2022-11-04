import { useMutation, useQuery } from 'react-query';
import { createShortUrl, deleteUserUrl, getUserUrls, visitShorten } from '../api/urls';
import { queryClient } from '../main';
import { useToken } from './useToken';

export const useUserUrls = () => {
	const { getToken } = useToken();
	const headers = { authorization: getToken() };
	const userUrls = useQuery(['user-urls'], async () => {
		const data = await getUserUrls({ headers });
		return data;
	});

	const shortenUrl = useMutation(async (fullUrl: string) => {
		await createShortUrl({ fullUrl }, { headers });
	}, { onSuccess: () => { queryClient.invalidateQueries(['user-urls']); } });

	const visitShortUrl = useMutation(async (shortUrl: string) => {
		await visitShorten(shortUrl);
	}, { onSuccess: () => { queryClient.invalidateQueries(['user-urls']) } });

	const deleteUrl = useMutation(async (id: number) => {
		await deleteUserUrl(id, { headers });
	}, { onSuccess: () => { queryClient.invalidateQueries(['user-urls']); } });

	return { 
		userUrls,
		shortenUrl,
		visitShortUrl,
		deleteUrl
	};
}