import dbConnection from "../../dbConnect.js";

const getUser = async (data) => {
    const sql = `select * from "users"`;
    const query = await dbConnection.query(sql);
    console.log(query);
    return query;
}

export default getUser;