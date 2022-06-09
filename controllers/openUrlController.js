import { getFullUrlByShortUrl } from "../database/queries/retrieve/urls.js";
import updateUrlVisitCount from "../database/queries/update/urls.js";

const openUrlController = async (req, res) => {
    try{
        const { shortUrl } = req.params;
        const query = await getFullUrlByShortUrl(shortUrl);
        if(query.rowCount > 0){
            await updateUrlVisitCount(shortUrl, query.visitCount);
            res.redirect(query.fullUrl);
            return;
        }
        res.sendStatus(404);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default openUrlController;