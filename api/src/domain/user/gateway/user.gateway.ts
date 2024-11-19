import { LoginUserInputDTO } from "../../interface/user";
import { User } from "../entity/user";

export interface IUserGateway {
    save: (user: User) => Promise<User>
    update: (user: User) => Promise<User>
    getById: (id: number) => Promise<User | null>
    getByEmail: (data: LoginUserInputDTO) => Promise<User | null>
}