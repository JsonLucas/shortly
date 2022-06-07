import { getUserByEmail } from "../database/queries/retrieve/users.js";
import { decryptPassword } from "../utils/passwordCrypt.js";

const signInController = async (req, res) => {
    try{
        const { email, password } = req.body;
        const users = await getUserByEmail(email);
        if(users.rowCount){
            const comparePasswords = decryptPassword(password, users.rows[0].password);
            if(comparePasswords){
                res.sendStatus(200);
                return;
            }
            res.status(401).send('incorrect password');
        }else{
            res.sendStatus(401);
        }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signInController;