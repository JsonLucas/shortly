import { nanoid } from "nanoid";
import setShortenedUrl from "../database/queries/create/urls.js";

const urlShortenController = async (req, res) => {
    try{
        const { fullUrl } = res.locals;
        const shortUrl = nanoid();
        await setShortenedUrl({userId: 1, fullUrl, shortUrl});
        res.status(201).send({ shortUrl });
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

/*{
    4053c614-2ed0-43af-aee8-5059d5c18bcd
}
{
    "url": "https://www.youtube.com/watch?v=-qJHLlxU0Ts"
}
*/

export default urlShortenController;