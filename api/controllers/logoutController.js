import deleteSession from "../database/queries/delete/sessions.js";

const logoutController = async (req, res) => {
    try{
        const { userId } = res.locals;
        await deleteSession(userId);
        res.sendStatus(200);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default logoutController;