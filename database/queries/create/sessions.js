import dbConnection from "../../dbConnect.js";

const createSession = async (body) => {
    const { tokenContent, privateKey, userId } = body;
    const sql = `INSERT INTO sessions ("userId", "sessionToken", "sessionKey") VALUES ($1, $2, $3)`;
    const insertion = await dbConnection.query(sql, [userId, tokenContent, privateKey]);
    return insertion;
}

export default createSession;