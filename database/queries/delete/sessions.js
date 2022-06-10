import dbConnection from "../../dbConnect.js";

const deleteSession = async (userId) => {
    const sql = `DELETE FROM sessions WHERE "userId"=$1`;
    const unlink = await dbConnection.query(sql, [userId]);
    return unlink;
}

export default deleteSession;