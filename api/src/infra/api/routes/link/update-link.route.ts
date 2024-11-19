import { NextFunction, Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { Crypto } from '../../../../helpers/Crypto';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { GetUserByIdUsecase } from '../../../../usecases/user/get-user-by-id.usecase';
import { GetLinkByIdUseCase } from '../../../../usecases/link/get-link-by-id.usecase';
import { UpdateLinkUseCase } from '../../../../usecases/link/update-link.usecase';
import { Validator } from '../../../../helpers/Validator';
import { schemaUrls } from '../../../../utils/validations/schemas';
import { nanoid } from 'nanoid';

export class UpdateLinkRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly getLinkByIdService: GetLinkByIdUseCase,
        private readonly updateLinkService: UpdateLinkUseCase,
        private readonly getUserByIdUseCase: GetUserByIdUsecase,
        private readonly crypto: Crypto,
        private readonly validator: Validator
    ) { }

    public static create(getLinkByIdService: GetLinkByIdUseCase, updateLinkService: UpdateLinkUseCase, getUserByIdUseCase: GetUserByIdUsecase, crypto: Crypto, validator: Validator) {
        return new UpdateLinkRoute(
            "/links/:id",
            HttpMethod.PUT,
            getLinkByIdService, 
            updateLinkService,
            getUserByIdUseCase,
            crypto,
            validator
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { id } = req.params;
            const { url } = req.body;
            const shortUrl = nanoid(6);

            await this.updateLinkService.execute({ id: Number(id), fullUrl: url, shortUrl });
            return res.status(200).send({ message: 'Url successfuly updated.' });
        };
    }

    getMiddlewares () {
        return [
            AuthMiddleware.create(this.getUserByIdUseCase, this.crypto).getHandler(),
            async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
                const { id } = req.params;
                if(isNaN(Number(id))) return res.status(400).send({ message: 'Invalid link id.' });

                await this.validator.validate(schemaUrls, req.body);

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