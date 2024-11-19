import { NextFunction, Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { GetLinkByIdUseCase } from '../../../../usecases/link/get-link-by-id.usecase';
import { VisitLinkUseCase } from '../../../../usecases/link/visit-link.usecase';

export class VisitLinkRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly getLinkByIdService: GetLinkByIdUseCase,
        private readonly visitLinkService: VisitLinkUseCase 
    ) { }

    public static create(getLinkByIdService: GetLinkByIdUseCase, visitLinkService: VisitLinkUseCase) {
        return new VisitLinkRoute(
            "/links/:id",
            HttpMethod.PATCH,
            getLinkByIdService, 
            visitLinkService
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { linkId } = res.locals;
            const { ip } = req;

            await this.visitLinkService.execute({ urlId: linkId, ip });
            return res.status(200).send({ message: 'Url visited updated.' });
        };
    }

    getMiddlewares () {
        return [
            async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
                const { id } = req.params;
                if(isNaN(Number(id))) return res.status(400).send({ message: 'Invalid link id.' });

                const link = await this.getLinkByIdService.execute({ id: Number(id) });
                res.locals.linkId = link.id;

                next();
            }
        ]
    }

    getPath() {
        return this.path;
    }

    getMethod() {
        return this.method;
    }
}