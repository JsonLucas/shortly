export interface IUser {
    id: number
    name: string
    email: string
    password: string
}

export type CreateUserInputDTO = Omit<IUser, 'id'>
export type CreateUserOutputDTO = Pick<IUser, 'id'>

export type LoginUserInputDTO = Pick<IUser, 'email'>
export type LoginUserOutputDTO = Pick<IUser, 'id' | 'password'>

export type UserExistsInputDTO = Pick<IUser, 'id'>;