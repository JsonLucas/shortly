import dbConnection from "../../dbConnect.js";

const updateUrlVisitCount = async (shortUrl, visitCount) => {
    const increment = parseInt(visitCount) + 1;
    const sql = `UPDATE urls SET "visitCount"=$1 WHERE "shortUrl"=$2`;
    const query = await dbConnection.query(sql, [increment, shortUrl]);
    return query;
}

export default updateUrlVisitCount;