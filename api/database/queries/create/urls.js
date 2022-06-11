import dbConnection from "../../dbConnect.js";

const setShortenedUrl = async (body) => {
    const { userId, fullUrl, shortUrl } = body;
    const sql = `INSERT INTO urls ("userId", "fullUrl", "shortUrl") VALUES ($1, $2, $3)`;
    await dbConnection.query(sql, [userId, fullUrl, shortUrl]);
}

export default setShortenedUrl;