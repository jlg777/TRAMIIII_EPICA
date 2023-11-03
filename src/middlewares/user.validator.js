import jwt from "jsonwebtoken";
import { userModel } from "../models/login-model.js";
import { env } from "../../settings/envs.js";

export const userValidator = (req, res, next) => {
    const { authorization } = req.headers;
    //console.log(req.headers);
    //console.log(authorization);
    if(!authorization){
        return res.sendStatus(401);
    }
    const token = authorization;
    try {
       const { id } = jwt.verify(token, env.SECRET_KEY);
       console.log(id );
    const user = userModel.findOne(id); 
    //console.log(user);
    //req.user = user;
    //console.log(req.user);
    } catch (error) {
        next(error);
    }
}