import { NextFunction, Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { Crypto } from '../../../../helpers/Crypto';
import { Validator } from '../../../../helpers/Validator';
import { schemaUrls } from '../../../../utils/validations/schemas';
import { CreateLinkUseCase } from '../../../../usecases/link/create-link.usecase';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { GetUserByIdUsecase } from '../../../../usecases/user/get-user-by-id.usecase';
import { nanoid } from 'nanoid';

export class CreateLinkRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly createLinkService: CreateLinkUseCase,
        private readonly getUserByIdUseCase: GetUserByIdUsecase,
        private readonly crypto: Crypto,
        private readonly validator: Validator
    ) { }

    public static create(createLinkService: CreateLinkUseCase, getUserByIdUseCase: GetUserByIdUsecase, crypto: Crypto, validator: Validator) {
        return new CreateLinkRoute(
            "/links",
            HttpMethod.POST,
            createLinkService,
            getUserByIdUseCase,
            crypto,
            validator
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { url } = req.body;
            const { userId } = res.locals;
            const shortUrl = nanoid(6);

            await this.createLinkService.execute({ fullUrl: url, shortUrl, userId });
            return res.status(201).send({ message: 'Url successfuly shortened' });
        };
    }

    getMiddlewares () {
        return [
            AuthMiddleware.create(this.getUserByIdUseCase, this.crypto).getHandler(),
            async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
                const { body } = req;
                
                await this.validator.validate(schemaUrls, body);
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