import bcrypt from 'bcrypt';

export const encryptPassword = (strPassword: string) => {
    const hash = bcrypt.hashSync(strPassword, 10);
    return hash;
}

export const comparePassword = (strPassword: string, hashPass: string) => {
    const pass = bcrypt.compareSync(strPassword, hashPass);
    return pass;
}