import dbConnection from "../../dbConnect.js";

const deleteShortUrl = async (urlId, userId) => {
    const sql = `DELETE FROM urls WHERE id=$1 AND "userId"=$2`;
    const query = await dbConnection.query(sql, [urlId, userId]);
    return query;
}

export default deleteShortUrl;