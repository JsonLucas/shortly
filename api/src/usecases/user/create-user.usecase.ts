import { UseCase } from "..";
import { CreateUserInputDTO, CreateUserOutputDTO } from "../../domain/interface/user";
import { User } from "../../domain/user/entity/user";
import { IUserGateway } from "../../domain/user/gateway/user.gateway";

export class CreateUserUsecase implements UseCase<CreateUserInputDTO, CreateUserOutputDTO> {
    private constructor(private readonly userGateway: IUserGateway){ }

    public static create(userGateway: IUserGateway) {
        return new CreateUserUsecase(userGateway);
    }

    public async execute(userDTO: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
        const user = User.create({ ...userDTO, id: 0 });

        const createdUser = await this.userGateway.save(user);

        const output = this.presentOutput(createdUser);
        return output;
    }

    private presentOutput(user: User): CreateUserOutputDTO {
        const output = { id: user.id };
        return output;
    }
}