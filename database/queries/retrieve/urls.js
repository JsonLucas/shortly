import dbConnection from "../../dbConnect.js";

export const getUrlById = async (urlId) => {
    const sql = `SELECT * FROM urls WHERE id=$1`;
    const query = await dbConnection.query(sql, [urlId]);
    return query;
}
