import { Request, Response } from 'express';
import { HttpMethod, IRoute } from "../route";
import { CreateUserUsecase } from '../../../../usecases/user/create-user.usecase';
import { Crypto } from '../../../../helpers/Crypto';
import { Validator } from '../../../../helpers/Validator';
import { schemaSignUp } from '../../../../utils/validations/schemas';

export class RegisterRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly createUserService: CreateUserUsecase,
        private readonly cypto: Crypto,
        private readonly validator: Validator
    ) { }

    public static create(createUserService: CreateUserUsecase, crypto: Crypto, validator: Validator) {
        return new RegisterRoute(
            "/users",
            HttpMethod.POST,
            createUserService,
            crypto,
            validator
        );
    }

    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { name, email, password } = req.body;
            
            if(!this.validator.validate(schemaSignUp, req.body)) return res.status(422).send({ message: 'Missing essential data.' });

            const hashPassword = this.cypto.encrypt(password);
            this.createUserService.execute({ name, email, password: hashPassword });
            
            return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
        };
    }

    getPath() {
        return this.path;
    }

    getMethod() {
        return this.method;
    }
}