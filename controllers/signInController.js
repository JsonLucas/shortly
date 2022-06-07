import getUser from "../database/queries/retrieve/users.js";

const signInController = async (req, res) => {
    try{
        const { body } = req;
        const users = await getUser();
        console.log(users);
        res.status(200).send('token aki');
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signInController;