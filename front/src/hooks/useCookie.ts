import { useCookies } from 'react-cookie';
import { GenericObject } from '../interfaces/auth';
import { CookieSetOptions } from 'universal-cookie';

export const useCookie = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const cookieOptions = {
        path: '/',
        sameSite: 'lax',
        expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000)
    } as CookieSetOptions;

    const set = (name: string, value: GenericObject | string) => {
        setCookie(name, value, cookieOptions);
    };

    const get = (name: string): any => cookies[name];

    const remove = (name: string) => {
        removeCookie(name, cookieOptions);
    };

    return { set, get, remove };
};
