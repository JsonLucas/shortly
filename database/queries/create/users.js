import dbConnection from "../../dbConnect.js";

const createUser = async (data) => {
    const sql = 'select * from users';
    const query = await dbConnection.query(sql);
    return query;
}

export default createUser;