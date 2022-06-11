import bcrypt from 'bcrypt';

export const encryptPassword = (strPassword) => {
    const hash = bcrypt.hashSync(strPassword, 10);
    return hash;
}

export const decryptPassword = (strPassword, hashPass) => {
    const pass = bcrypt.compareSync(strPassword, hashPass);
    return pass;
}