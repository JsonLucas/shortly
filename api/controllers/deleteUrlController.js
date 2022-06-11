import deleteShortUrl from "../database/queries/delete/urls.js";

const deleteUrlController = async (req, res) => {
    try{
        const { shortUrlId, userId } = res.locals;
        await deleteShortUrl(shortUrlId, userId);
        res.sendStatus(204);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default deleteUrlController;