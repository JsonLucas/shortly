import dbConnection from "../../dbConnect.js";

export const getUserByEmail = async (email) => {
    const sql = `SELECT * FROM users WHERE email=$1`;
    const query = await dbConnection.query(sql, [email]);
    return query;
}

export const getAllUserInformationById = async (userId) => {
    const sql = `SELECT (u2.id, u2.name, u1."visitCount", u1."fullUrl", u1."shortUrl", u2.id) 
    FROM urls as u1 JOIN users as u2 ON u1."userId"="u2"."id" WHERE u1."userId"=$1`;
    const query = await dbConnection.query(sql, [userId]);
    return query;
}
