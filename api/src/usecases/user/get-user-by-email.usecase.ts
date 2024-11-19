import { UseCase } from "..";
import { LoginUserInputDTO, LoginUserOutputDTO } from "../../domain/interface/user";
import { User } from "../../domain/user/entity/user";
import { IUserGateway } from "../../domain/user/gateway/user.gateway";

export class GetUserByEmailUsecase implements UseCase<LoginUserInputDTO, LoginUserOutputDTO> {
    private constructor(private readonly userGateway: IUserGateway){ }

    public static create(userGateway: IUserGateway) {
        return new GetUserByEmailUsecase(userGateway);
    }

    public async execute(userDTO: LoginUserInputDTO): Promise<LoginUserOutputDTO> {
        const existingUser = await this.userGateway.getByEmail(userDTO);

        if(!existingUser) throw new Error('Incorrect credentials.');

        const output = this.presentOutput(User.with(existingUser));
        return output;
    }

    private presentOutput(user: User): LoginUserOutputDTO {
        const output = { id: user.id, password: user.password };
        return output;
    }
}