import dbConnection from "../database/dbConnect.js";

const dbConnectionMiddleware = async (req, res, next) => {
    try{
        await dbConnection.connect();
        next();
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default dbConnectionMiddleware; 