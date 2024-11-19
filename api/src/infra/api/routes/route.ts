import { NextFunction, Request, Response } from "express";

export type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';
export const HttpMethod = {
    GET: 'get' as HttpMethod,
    POST: 'post' as HttpMethod,
    PATCH: 'patch' as HttpMethod,
    PUT: 'put' as HttpMethod,
    DELETE: 'delete' as HttpMethod
} as const;

export interface IRoute {
    getHandler(): (req: Request, res: Response) => Promise<void | Response>,
    getMiddlewares?(): Array<(req: Request, res: Response, next: NextFunction) => Promise<void | Response>>,
    getPath: () => string,
    getMethod: () => HttpMethod
}

export interface IMiddleware {
    getHandler(): (req: Request, res: Response, next: NextFunction) => Promise<void | Response>
}