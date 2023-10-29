//importo provisoriamente
import { loginUser } from "../models/login-model.js"; 


export const ctrlGetLogin = (req, res, next) => {
    try {
        res.status(200).json(loginUser)
        //res.sendFile('index.html')
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

export const ctrlPostLogin = (req, res, next) => {
    try {
       console.log(req.body)
       loginUser.push(req.body)
        //res.status(201)
        res.send('Got a POST request')
    } catch (error) {
        next(error)
    } finally {
        //console.log('')
    }
};

export const ctrlPutLogin =  (req, res, next) => {
    try {
        res.send('Got a PUT request at /user')
    } catch (error) {
        next(error)   
    } finally {
        //console.log('')
    }
};

export const ctrlDelLogin =  (req, res, next) => {
    try {
        res.send('Got a DELETE request at /user')
    } catch (error) {
        next(error)    
    }finally {
        //console.log('')
    }
};



