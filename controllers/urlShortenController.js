import { nanoid } from "nanoid";
import setShortenedUrl from "../database/queries/create/urls.js";

const urlShortenController = async (req, res) => {
    try{
        const { fullUrl, userId } = res.locals;
        const shortUrl = nanoid();
        await setShortenedUrl({userId, fullUrl, shortUrl});
        res.status(201).send({ shortUrl });
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default urlShortenController;