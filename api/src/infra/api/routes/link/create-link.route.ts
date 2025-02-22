import { NextFunction, Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { Crypto } from '../../../../helpers/Crypto';
import { Validator } from '../../../../helpers/Validator';
import { schemaUrls } from '../../../../utils/validations/schemas';
import { CreateLinkUseCase } from '../../../../usecases/link/create-link.usecase';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { GetUserByIdUsecase } from '../../../../usecases/user/get-user-by-id.usecase';
import { v4 as uuid } from 'uuid';

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
            "/links/shorten",
            HttpMethod.POST,
            createLinkService,
            getUserByIdUseCase,
            crypto,
            validator
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { fullUrl } = req.body;
            const { userId } = res.locals;
            
            const auxShort = uuid().split('-');
            const shortUrl = auxShort[Math.floor(Math.random() * auxShort.length)];

            await this.createLinkService.execute({ fullUrl, shortUrl, userId });
            return res.status(201).send({ message: 'Url successfuly shortened' });
        };
    }

    getMiddlewares () {
        return [
            AuthMiddleware.create(this.getUserByIdUseCase, this.crypto).getHandler(),
            async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
                const { body } = req;
                
                try{
                    await this.validator.validate(schemaUrls, body);
                    next();
                } catch(e: any) {
                    console.log(e.error.details);
                    return res.status(e.code).send({ message: e.error.details[0].message });
                }
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