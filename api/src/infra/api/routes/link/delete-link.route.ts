import { NextFunction, Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { Crypto } from '../../../../helpers/Crypto';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { GetUserByIdUsecase } from '../../../../usecases/user/get-user-by-id.usecase';
import { DeleteLinkUseCase } from '../../../../usecases/link/delete-link.usecase';
import { GetLinkByIdUseCase } from '../../../../usecases/link/get-link-by-id.usecase';

export class DeleteLinkRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly getLinkByIdService: GetLinkByIdUseCase,
        private readonly deleteLinkService: DeleteLinkUseCase,
        private readonly getUserByIdUseCase: GetUserByIdUsecase,
        private readonly crypto: Crypto
    ) { }

    public static create(getLinkByIdService: GetLinkByIdUseCase, deleteLinkService: DeleteLinkUseCase, getUserByIdUseCase: GetUserByIdUsecase, crypto: Crypto) {
        return new DeleteLinkRoute(
            "/links/:id",
            HttpMethod.DELETE,
            getLinkByIdService, 
            deleteLinkService,
            getUserByIdUseCase,
            crypto
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { id } = req.params;

            await this.deleteLinkService.execute({ id: Number(id) });
            return res.status(204).send({ message: 'Url successfuly deleted.' });
        };
    }

    getMiddlewares () {
        return [
            AuthMiddleware.create(this.getUserByIdUseCase, this.crypto).getHandler(),
            async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
                const { id } = req.params;
                if(isNaN(Number(id))) return res.status(400).send({ message: 'Invalid link id.' });

                const link = await this.getLinkByIdService.execute({ id: Number(id) });
                if(link.userId !== res.locals.userId) return res.status(404).send({ message: 'Link not found.' });

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