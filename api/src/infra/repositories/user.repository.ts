import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/user/entity/user";
import { IUserGateway } from "../../domain/user/gateway/user.gateway";
import { LoginUserInputDTO } from "../../domain/interface/user";

export class UserRepository implements IUserGateway {
    private constructor (private readonly prisma: PrismaClient) { }

    public static create(prisma: PrismaClient) {
        return new UserRepository(prisma);
    }

    async save (user: User): Promise<User> {
        const { name, email, password } = user;
        const createdUser = await this.prisma.users.create({ data: { name, email, password } });
        return User.with(createdUser);
    }

    async update (user: User): Promise<User> {
        const updatedUser = await this.prisma.users.update({ data: user, where: { id: user.id } });
        return User.with(updatedUser);
    }

    async getById (id: number): Promise<User | null> {
        const user = await this.prisma.users.findUnique({ where: { id } });
        if (!user) return null;

        return User.with(user);
    }

    async getByEmail (data: LoginUserInputDTO): Promise<User | null> {
        const { email } = data;
        const user = await this.prisma.users.findUnique({ where: { email } });
        if(!user) return null;

        return User.with(user);
    }
}