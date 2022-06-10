import { getAllUserInformationById } from "../database/queries/retrieve/users.js";

const usersByIdController = async (req, res) => {
    try{
        const { userId } = res.locals;
        const query = await getAllUserInformationById(userId);
        const { rowCount, formatedQuery } = query;
        if(rowCount > 0){
        let formatedResponse = [];
        for(let i = 0; i < formatedQuery.length; i++){
            if(i === 0){
                formatedResponse.push(formatQuery(formatedQuery[i], i));
            }else{
                formatedResponse[0].shortenedUrls.push(formatQuery(formatedQuery[i], i));
            }
        }
            res.status(200).send(formatedResponse);
            return;
        }
        res.sendStatus(404);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

const formatQuery = (row, index) => { 
    const rowSplit = row.split(',');
    let obj;
    if(index === 0){
        obj = {
            id: rowSplit[0],
            name: rowSplit[1],
            visitCount: rowSplit[2],
            shortenedUrls: [
                {
                    id: rowSplit[3],
                    shortUrl: rowSplit[4],
                    url: rowSplit[5],
                    visitCount: rowSplit[6]
                }
            ]
        }
    }else{
        obj = {
            id: rowSplit[3],
            shortUrl: rowSplit[4],
            url: rowSplit[5],
            visitCount: rowSplit[6]
        }
    }
    return obj;
};

export default usersByIdController;