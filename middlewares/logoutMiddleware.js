import getSession from "../database/queries/retrieve/sessions.js";
import { verifyToken } from "../utils/tokenUtils.js";

const logoutMiddleware = async (req, res, next) => {
    try{
        const { authorization }= req.headers;
        if(authorization !== undefined){
            const tokenAux = authorization.split(' ');
            const session = await getSession(tokenAux[1]);
            if(session.rowCount > 0){
                const { userId, sessionToken, sessionKey } = session.rows[0];
                const verificateToken = verifyToken(sessionToken, sessionKey);
                if(verificateToken.status){
                    res.locals.userId = userId;
                    next();
                    return;
                }
                res.sendStatus(401);
                return;
            }
            res.sendStatus(404);
            return;
        }
        res.sendStatus(400);
    } catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default logoutMiddleware;