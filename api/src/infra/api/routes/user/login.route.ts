import { Request, Response } from "express";
import { HttpMethod, IRoute } from "../route";
import { GetUserByEmailUsecase } from "../../../../usecases/user/get-user-by-email.usecase";
import { Validator } from "../../../../helpers/Validator";
import { Crypto } from "../../../../helpers/Crypto";
import { schemaSignIn } from "../../../../utils/validations/schemas";
import { nodeEnv } from "../../../../utils/environment";

export class LoginRoute implements IRoute {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly getUserByEmailService: GetUserByEmailUsecase,
        private readonly crypto: Crypto,
        private readonly validator: Validator
    ) { }

    public static create(getUserByEmailService: GetUserByEmailUsecase, crypto: Crypto, validator: Validator) {
        return new LoginRoute(
            "/users/login",
            HttpMethod.POST,
            getUserByEmailService,
            crypto,
            validator
        );
    }
    
    getHandler() {
        return async (req: Request, res: Response): Promise<void | Response> => {
            const { body } = req;

            await this.validator.validate(schemaSignIn, body);
            
            const { email, password } = body;
            const data = await this.getUserByEmailService.execute({ email });

            if(this.crypto.decrypt(data.password) !== password) return res.status(401).send({ message: 'Incorrect credentials.' });

            const sessionData = this.crypto.encrypt(data.id.toString());
            return res.cookie('session', sessionData, {
                httpOnly: false,
                secure: nodeEnv === 'production',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            }).send({ message: 'Successfuly logged in.' });
        };
    }

    getPath() {
        return this.path;
    }

    getMethod() {
        return this.method;
    }
}
