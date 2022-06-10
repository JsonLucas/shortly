import { getAllUserInformationById } from "../database/queries/retrieve/users.js";

const usersByIdController = async (req, res) => {
    try{
        const { userId } = res.locals;
        const query = await getAllUserInformationById(userId);
        const { row } = query.rows[0];
        const formatedRow = formatRow(row).split(','); 
        console.log(formatedRow);
        res.sendStatus(200);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

const formatRow = (row) => { 
    let str = '';
    for(let i of row){
        if((i === '(') || (i === ')')){
            continue;
        }else{
            str += i;
        }
    } 
    return str;
};

export default usersByIdController;