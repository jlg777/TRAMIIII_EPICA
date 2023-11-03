//importo provisoriamente
import { env } from "../../settings/envs.js";
import { userModel } from "../models/login-model.js"; 
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";


export const ctrlPostLogin = async (req, res, next) => {
    try {
       const newUser = await userModel.create(req.body);
       const token = jwt.sign({ id: newUser.id }, env.SECRET_KEY);
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
        res.status(200).json(users);
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrlGetLoginId = (req, res, next) => {
    try {
        const { logid } = req.params;
        //console.log(logid)
        const user = userModel.findOne( { id: logid } );
        if (!user) {
            return res.sendStatus(404);
        }
        //res.status(201).json({ token });
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

export const ctrlLoginId = async (req, res, next) => {
    try {
        const { email, pass } = req.body;
        const user = userModel.findByEmail( email );
        if (!user) {
            return res.sendStatus(401);//404
        }
        const isMatch = await bcrypt.compare(pass, user.pass);
        if (!isMatch) return res.sendStatus(404);
        const token = jwt.sign({ id: user.id }, env.SECRET_KEY);
        res.status(201).json({ token });
        //res.status(200).json(user);
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }  
};