import { Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { GetAllLinksUseCase } from '../../../../usecases/link/get-all-links.usecase';

export class GetAllLinksRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly getAllLinksUseCase: GetAllLinksUseCase
    ) { }

    public static create(getAllLinksUseCase: GetAllLinksUseCase) {
        return new GetAllLinksRoute(
            "/links",
            HttpMethod.GET,
            getAllLinksUseCase
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const links = await this.getAllLinksUseCase.execute();

            return res.status(200).send(links);
        };
    }

    getPath() {
        return this.path;
    }

    getMethod() {
        return this.method;
    }
}