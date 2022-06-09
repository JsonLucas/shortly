import dbConnection from "../../dbConnect.js";

const deleteShortUrl = async (id) => {
    const sql = `DELETE FROM urls WHERE id=$1`;
    const query = await dbConnection.query(sql, [id]);
    return query;
}

export default deleteShortUrl;