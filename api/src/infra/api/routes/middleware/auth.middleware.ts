import { Request, Response, NextFunction } from "express";
import { GetUserByIdUsecase } from "../../../../usecases/user/get-user-by-id.usecase";
import { Crypto } from "../../../../helpers/Crypto";

export class AuthMiddleware {
    private constructor(
        private readonly getUserByIdUseCase: GetUserByIdUsecase,
        private readonly crypto: Crypto
    ) { }

    public static create(getUserByIdUseCase: GetUserByIdUsecase, crypto: Crypto) {
        return new AuthMiddleware(getUserByIdUseCase, crypto);
    }

    getHandler() {
        return async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
            const { authorization } = req.headers;
            if(!authorization || !authorization.split(' ')[0].includes('Bearer')) return res.status(401).send({ message: 'You don\'t have persmission to access this resource.' });
            
            const userId = Number(this.crypto.decrypt(authorization.split(' ')[1]));

            if(isNaN(userId)) return res.status(422).send({ message: 'Invalid navigation session.' });

            const userExists = await this.getUserByIdUseCase.execute({ id: userId });
            if(!userExists) return res.status(404).send({ message: 'User not found.' });

            res.locals.userId = userId;
            next();
        }
    }
}