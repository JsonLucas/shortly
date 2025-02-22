import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// api.defaults.withCredentials = true;
api.interceptors.request.use((request) => {
    const { getValue } = useLocalStorage();
    const token = getValue('session');
    request.headers = { ...request.headers, 'Authorization': `Bearer ${token}` };
    return request;
});