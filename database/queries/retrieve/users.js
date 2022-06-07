import dbConnection from "../../dbConnect.js";

export const getUserByEmail = async (email) => {
    const sql = `SELECT * FROM users WHERE email=$1`;
    const query = await dbConnection.query(sql, [email]);
    return query;
}
