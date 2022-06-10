import getSession from "../database/queries/retrieve/sessions.js";
import { getUrlById } from "../database/queries/retrieve/urls.js";
import { verifyToken } from "../utils/tokenUtils.js";

const deleteUrlMiddleware = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        const { id } = req.params;
        if(authorization !== undefined){
            const tokenAux = authorization.split(' ');
            const session = await getSession(tokenAux[1]);
            const url = await getUrlById(id);
            if(url.rowCount > 0){
                if(session.rowCount > 0){
                    const { sessionToken, sessionKey } = session.rows[0];
                    const verificateToken = verifyToken(sessionToken, sessionKey);
                    if(verificateToken.status){ 
                        if(session.rows[0].userId === url.rows[0].userId){
                            res.locals.shortUrlId = id;
                            res.locals.userId = userId;
                            next();
                            return;
                        }
                    }
                }
                res.sendStatus(401);
                return;
            }
            res.sendStatus(404);
            return;
        }
        res.sendStatus(401);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default deleteUrlMiddleware;
