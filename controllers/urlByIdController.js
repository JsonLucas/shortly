import { getUrlById } from "../database/queries/retrieve/urls.js";

const urlByIdController = async (req, res) => {
    try{
        const { id } = req.params;
        const urlId = parseInt(id);
        if(Number.isInteger(urlId)){
            const query = await getUrlById(id);
            if(query.rowCount > 0){
                const { id, shortUrl, fullUrl } = query.rows[0];
                const response = { id, shortUrl, url: fullUrl };
                res.status(200).send(response);
                return;
            }
            res.sendStatus(404);
            return;
        }
        res.sendStatus(400);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default urlByIdController;