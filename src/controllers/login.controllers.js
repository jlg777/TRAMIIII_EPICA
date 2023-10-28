//importo provisoriamente
import { loginUser } from "../models/login-model.js"; 


export const ctrlGetLogin = (req, res) => {
    try {
        res.status(200).json(loginUser)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    } finally {
        //console.log('')
    }
};


/*export const ctrlGetLogin = (req, res) => {
    try {
        throw new Error('BROKEN') 
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    } finally {
        //console.log('')
    }
};*/

export const ctrlPostLogin = (req, res) => {
    try {
        //res.status(200)
        res.send('Got a POST request')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    } finally {
        //console.log('')
    }
};

export const ctrlPutLogin =  (req, res) => {
    try {
        res.send('Got a PUT request at /user')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })   
    } finally {
        //console.log('')
    }
};

export const ctrlDelLogin =  (req, res) => {
    try {
        res.send('Got a DELETE request at /user')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })    
    }finally {
        //console.log('')
    }
};
