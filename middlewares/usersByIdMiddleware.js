import getSession from "../database/queries/retrieve/sessions.js";

const usersByIdMiddleware = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        const { id } = req.params;
        if(authorization !== undefined){
            const authAux = authorization.split(' ');
            const session = await getSession(authAux[1]);
            const { sessionToken } = session.rows[0];
            const fullToken = sessionToken.split('.');
            if(fullToken.find((item) => { return item === authAux[1] }) !== undefined){
                res.locals.userId = id;
                next();
                return;
            }
        }
        res.sendStatus(401);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default usersByIdMiddleware;