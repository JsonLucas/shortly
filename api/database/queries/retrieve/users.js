import dbConnection from "../../dbConnect.js";

export const getUserByEmail = async (email) => {
    const sql = `SELECT * FROM users WHERE email=$1`;
    const query = await dbConnection.query(sql, [email]);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}

export const getAllUserInformationById = async (userId) => {
    const sql = `SELECT (u2.id, u2.name, SUM(u1."visitCount"), u1."id",  u1."shortUrl", u1."fullUrl", 
    u1."visitCount") as info FROM urls as u1 JOIN users as u2 ON u1."userId"="u2"."id" 
    WHERE u1."userId"=$1 GROUP BY ("u1"."id", "u2"."id")`;
    const query = await dbConnection.query(sql, [userId]);
    const { rowCount, rows } = query;
    const formatedQuery = formatQuery(rows);
    return {rowCount, formatedQuery};
}

export const getUsersRanking = async () => {
    const sql = `SELECT DISTINCT u2.id, u2.name, COUNT(u1."userId") as "linksCount", SUM(u1."visitCount") as "visitCount"
    FROM urls as u1 JOIN users as u2 ON u1."userId"="u2"."id" 
    GROUP BY ("u1"."id", "u2"."id") ORDER BY "visitCount" DESC LIMIT 10`;
    const query = await dbConnection.query(sql);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}

const formatQuery = (query) => { //query format for getAllUserInformationById function
    let rows = [];
    for(let i in query){
        let singleRow = '';
        for(let j of query[i].info){
            if((j === "(") || (j === ")")){
                continue;
            }else{
                singleRow += j;
            }
        }
        rows.push(singleRow);
    }
    return rows;
}
