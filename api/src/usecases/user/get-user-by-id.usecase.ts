import { UseCase } from "..";
import { LoginUserInputDTO, LoginUserOutputDTO, UserExistsInputDTO } from "../../domain/interface/user";
import { User } from "../../domain/user/entity/user";
import { IUserGateway } from "../../domain/user/gateway/user.gateway";

export class GetUserByIdUsecase implements UseCase<UserExistsInputDTO, boolean> {
    private constructor(private readonly userGateway: IUserGateway){ }

    public static create(userGateway: IUserGateway) {
        return new GetUserByIdUsecase(userGateway);
    }

    public async execute(userDTO: UserExistsInputDTO): Promise<boolean> {
        const existingUser = await this.userGateway.getById(userDTO.id);

        return existingUser ? true : false;
    }
}