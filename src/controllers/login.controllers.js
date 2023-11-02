//importo provisoriamente
import { env } from "../../settings/envs.js";
import { userModel } from "../models/login-model.js"; 
import  jwt  from "jsonwebtoken";


export const ctrlPostLogin = (req, res, next) => {
    try {
       console.log(req.body);
       userModel.create(req.body);
       const token = jwt.sign({ id: userModel.id }, env.SECRET_KEY);
       res.status(201).json({ token });
        //res.status(201)
        //res.send('Got a POST request')
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrlGetLogin = (req, res, next) => {
    try {
        const users = userModel.findAll();
        res.status(200).json(users)
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrlGetLoginId = (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = userModel.findByEmail( email );
        if (!user) {
            return res.sendStatus(404);
        }
        res.status(200).json(user);
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }  
};

/*export const ctrlGetLogin = (req, res, next) => {
    try {
        throw new Error('BROKEN') // modelo para forzar errores
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};*/