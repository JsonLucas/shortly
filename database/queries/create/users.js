import dbConnection from "../../dbConnect.js";

const createUser = async (data) => {
    const { name, email, password } = data;
    const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    const query = await dbConnection.query(sql);
    return query;
}

export default createUser;