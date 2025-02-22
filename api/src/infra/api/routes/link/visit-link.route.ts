import { NextFunction, Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { VisitLinkUseCase } from '../../../../usecases/link/visit-link.usecase';
import { GetLinkByShortenUseCase } from '../../../../usecases/link/get-link-by-shorten.usecase';

export class VisitLinkRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly getLinkByShortenService: GetLinkByShortenUseCase,
        private readonly visitLinkService: VisitLinkUseCase 
    ) { }

    public static create(getLinkByShortenService: GetLinkByShortenUseCase, visitLinkService: VisitLinkUseCase) {
        return new VisitLinkRoute(
            "/links/:shortUrl",
            HttpMethod.PATCH,
            getLinkByShortenService, 
            visitLinkService
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { linkId, fullUrl } = res.locals;
            const { ip } = req;

            await this.visitLinkService.execute({ urlId: linkId, ip });
            // return res.status(200).send({ message: 'Url visited updated.' });
            return res.redirect(fullUrl);
        };
    }

    getMiddlewares () {
        return [
            async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
                const { shortUrl } = req.params;
                if(!shortUrl) return res.status(400).send({ message: 'Invalid link id.' });

                const link = await this.getLinkByShortenService.execute({ shortUrl });
                res.locals.linkId = link.id;
                res.locals.url = link.fullUrl;

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