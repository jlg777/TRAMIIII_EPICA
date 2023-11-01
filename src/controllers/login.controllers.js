//importo provisoriamente
import { userModel } from "../models/login-model.js"; 

export const ctrlPostLogin = (req, res, next) => {
    try {
       console.log(req.body)
       userModel.create(req.body)
        //res.status(201)
        res.send('Got a POST request')
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
        const { logid } = req.params;
        const user = userModel.findOne({ id: logid });
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

/*export const ctrlPutLogin =  (req, res, next) => {
    try {
        res.send('Got a PUT request at /user')
    } catch (error) {
        next(error)   
    } finally {
        //console.log('')
    }
};*/

/*export const ctrlDelLogin =  (req, res, next) => {
    try {
        res.send('Got a DELETE request at /user')
    } catch (error) {
        next(error)    
    }finally {
        //console.log('')
    }
};*/



