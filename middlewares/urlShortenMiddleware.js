import { validateUrl } from "../utils/validationFunctions.js";

const urlShortenMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    const { url } = req.body;
    if(authorization !== undefined){
        const validation = validateUrl({ url });
        if(validation.status){
            res.locals.fullUrl = url;
            next();
            return;
        }
        res.status(422).send(validation.error.details);
        return;
    }
    res.sendStatus(401);
}

export default urlShortenMiddleware;