import { IAPI } from "..";
import { IRoute } from "../routes/route";
import cookieParser from 'cookie-parser';
import express, { Express } from "express";
import cors from 'cors';

export class ApiExpress implements IAPI {
    private app: Express;

    private constructor(routes: IRoute[]) {
        this.app = express();
        this.app.use(cors({ origin: "*" }));
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.addRoutes(routes);
    }

    public static create(routes: IRoute[]) {
        return new ApiExpress(routes);
    }

    private addRoutes(routes: IRoute[]) {
        routes.forEach((route) => {
            const path = route.getPath();
            const method = route.getMethod();
            const handler = route.getHandler();
            const middleware = route.getMiddlewares ? route.getMiddlewares() : undefined;

            if(!middleware) this.app[method](path, handler);
            else this.app[method](path, [...middleware], handler);
        });
    }

    public start(port: number | string) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            // this.listRoutes();
        });
    }

    private listRoutes() {
        const routes = this.app._router.stack
            .filter((route: any) => route.route)
            .map((route: any) => {
                return {
                    path: route.route.path,
                    method: route.route.stack[0].method,
                };
            });

        console.log(routes);
    }
}