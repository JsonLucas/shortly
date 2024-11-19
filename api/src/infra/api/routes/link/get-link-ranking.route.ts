import { Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { GetRankingUseCase } from '../../../../usecases/link/ranking.usecase';

export class GetLinkRankingRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly linkRanking: GetRankingUseCase
    ) { }

    public static create(linkRanking: GetRankingUseCase) {
        return new GetLinkRankingRoute(
            "/links/ranking",
            HttpMethod.GET,
            linkRanking
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const links = await this.linkRanking.execute();

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