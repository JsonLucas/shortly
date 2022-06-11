import { getUsersRanking } from "../database/queries/retrieve/users.js";

const rankingController = async (req, res) => {
    try{
        const query = await getUsersRanking();
        const { rowCount, rows } = query;
        if(rowCount > 0){
            res.status(200).send(rows);
            return;
        }
        res.sendStatus(404);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default rankingController;