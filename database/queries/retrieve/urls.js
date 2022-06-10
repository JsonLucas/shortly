import dbConnection from "../../dbConnect.js";

export const getUrlById = async (urlId) => {
    const sql = `SELECT * FROM urls WHERE id=$1`;
    const query = await dbConnection.query(sql, [urlId]);
    return query;
}

export const getFullUrlByShortUrl = async (shortUrl) => {
    const sql = `SELECT * FROM urls WHERE "shortUrl"=$1`;
    const query = await dbConnection.query(sql, [shortUrl]);
    const { rowCount } = query;
    if(rowCount > 0){
        const { fullUrl, visitCount } = query.rows[0];
        return { rowCount, fullUrl, visitCount };
    }
    return { rowCount };
}
