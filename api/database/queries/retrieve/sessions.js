import dbConnection from "../../dbConnect.js";

const getSession = async (tokenContent) => {
    const sql = `SELECT * FROM sessions WHERE "sessionToken" LIKE '%${tokenContent}%'`;
    const query = await dbConnection.query(sql);
    return query;
}

export default getSession;